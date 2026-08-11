export interface User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
}

export interface Session {
  user: User;
}

const mockUser: User = {
  id: "mock-user-id",
  email: "user@example.com",
  name: "User",
  image: null,
};

let currentSession: Session | null = null;

export async function getSession(): Promise<Session | null> {
  return currentSession;
}

export async function signIn(email: string, password: string): Promise<Session> {
  if (!email || !password) {
    throw new Error("Email and password required");
  }

  currentSession = { user: { ...mockUser, email } };
  return currentSession;
}

export async function signOut(): Promise<void> {
  currentSession = null;
}

export async function requireAuth(): Promise<Session> {
  const session = await getSession();
  if (!session) {
    throw new Error("Unauthorized");
  }
  return session;
}
