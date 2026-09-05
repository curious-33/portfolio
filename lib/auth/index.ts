import NextAuth from 'next-auth';
import authConfig from './config';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
});

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};
