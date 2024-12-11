import { signInWithGoogle } from '../lib/signin-with-google'; 
import { redirect } from 'next/navigation';
import { createClient } from '../utils/supabase/client'; 


jest.mock('../utils/supabase/client', () => ({
  createClient: jest.fn(),  
}));

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));

describe('signInWithGoogle', () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  test('redirects to error page on failed login', async () => {
    const mockSignInWithOAuth = jest.fn().mockResolvedValue({
      error: new Error('Authentication failed'), 
    });
    
    (createClient as jest.Mock).mockReturnValue({
      auth: {
        signInWithOAuth: mockSignInWithOAuth,
      },
    });


    await signInWithGoogle();

 
    expect(redirect).toHaveBeenCalledWith('/error');
  });

  test('does not redirect on successful login', async () => {

    const mockSignInWithOAuth = jest.fn().mockResolvedValue({
      error: null,
    });

    (createClient as jest.Mock).mockReturnValue({
      auth: {
        signInWithOAuth: mockSignInWithOAuth,
      },
    });


    await signInWithGoogle();

    expect(redirect).not.toHaveBeenCalledWith('/error');
  });
});
