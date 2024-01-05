import './globals.css';
import { Inter, Rubik } from 'next/font/google';
import AuthProvider from './providers';

const inter = Inter({ subsets: ['latin'] });
const rubik = Rubik({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-rubik',
});

export const metadata = {
  title: 'MotorMentor by Magpollo',
  description: 'Your personal car expert',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rubik.variable} flex flex-col`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
