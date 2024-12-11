import { handleUserStatus } from '../database-methods/user-status/handleUserStatus'; 
import { createClient } from '../utils/supabase/client'; 

// Mock the entire supabase client module
jest.mock('../utils/supabase/client', () => ({
  createClient: jest.fn(),
}));

type StatusResponse = {
  data: { 
    id: string; 
    role: string; 
    verified: boolean; 
  }[];
};

describe("User Redirection Logic", () => {
  const mockClient = (statusResponse: StatusResponse) => {
    (createClient as jest.Mock).mockReturnValue({
      auth: {
        signInWithOAuth: jest.fn().mockResolvedValue({ error: null }),
        getUser: jest.fn().mockResolvedValue({
          data: { user: { id: "mock-user-id" } },
        }),
      },
      schema: () => ({
        from: jest.fn().mockReturnThis(), // Mock `from` to allow chaining
        select: jest.fn().mockReturnThis(), // Mock `select` to allow chaining
        eq: jest.fn().mockResolvedValue(statusResponse), // Mock `eq` to return statusResponse
      }),
    });
  };

  test("redirects verified student to /dashboard/student", async () => {
    mockClient({
      data: [{ id: "mock-user-id", role: "student", verified: true }],
    });

    const result = await handleUserStatus();
    expect(result).toBe("/dashboard/student");
  });

  test("redirects verified librarian to /dashboard/librarian", async () => {
    mockClient({
      data: [{ id: "mock-user-id", role: "librarian", verified: true }],
    });

    const result = await handleUserStatus();
    expect(result).toBe("/dashboard/librarian");
  });

  test("redirects admin to /dashboard/guest", async () => {
    mockClient({
      data: [{ id: "mock-user-id", role: "admin", verified: true }],
    });

    const result = await handleUserStatus();
    expect(result).toBe("/dashboard/guest");
  });

  test("redirects unverified user to /dashboard/guest", async () => {
    mockClient({
      data: [{ id: "mock-user-id", role: "student", verified: false }],
    });

    const result = await handleUserStatus();
    expect(result).toBe("/dashboard/guest");
  });
});
