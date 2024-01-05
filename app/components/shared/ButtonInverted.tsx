import Link from 'next/link';

export default function ButtonInverted({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={
        className +
        ' bg-white text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out'
      }
    >
      {children}
    </Link>
  );
}
