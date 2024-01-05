'use client';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { UserProvider as AtlasProvider } from '@/context/UserContext';
import { ErrorProvider } from '@/context/ErrorContext';

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AtlasProvider>
      <UserProvider>
        <ErrorProvider>{children}</ErrorProvider>
      </UserProvider>
    </AtlasProvider>
  );
}
