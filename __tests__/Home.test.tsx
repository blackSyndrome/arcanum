import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../app/page";
import { signInWithGoogle } from "../app/lib/signInWithGoogle";
import "@testing-library/jest-dom/extend-expect";

// Mock the modules
jest.mock("@/lib/signInWithGoogle", () => ({
  signInWithGoogle: jest.fn().mockResolvedValue("mocked-success"),
}));

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("Home", () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  test("renders the card with Google sign-in button", () => {
    render(<Home />);

    const cardTitle = screen.getByText(/Welcome!/i);
    expect(cardTitle).toBeInTheDocument();
    expect(cardTitle).toBeVisible();

    const cardDescription = screen.getByText(
      /Are you from within New Era University?/i
    );
    expect(cardDescription).toBeInTheDocument();
    expect(cardDescription).toBeVisible();

    const googleSignInButton = screen.getByRole("button", {
      name: /Sign in with my institutional email/i,
    });
    expect(googleSignInButton).toBeInTheDocument();
    expect(googleSignInButton).toBeVisible();
  });

  test("renders the Google sign-in button", () => {
    render(<Home />);

    const googleSignInButton = screen.getByRole("button", {
      name: /Sign in with my institutional email/i,
    });

    expect(googleSignInButton).toBeInTheDocument();
    expect(googleSignInButton).toBeVisible();
  });

  test('clicking on the "Sign in with my institutional email" button calls signInWithGoogle', async () => {
    render(<Home />);
    const signInButton = screen.getByRole("button", {
      name: /Sign in with my institutional email/i,
    });
    expect(signInButton).toBeVisible();
    expect(signInButton).not.toBeDisabled();
    await userEvent.click(signInButton);
    expect(signInWithGoogle).toHaveBeenCalled();
  });

  it('should trigger Google sign-in when the "Sign in with my institutional email" button is clicked', () => {
    render(<Home />);
    const googleSignInButton = screen.getByRole("button", {
      name: /Sign in with my institutional email/i,
    });
    fireEvent.click(googleSignInButton);
    expect(signInWithGoogle).toHaveBeenCalled();
  });
});
