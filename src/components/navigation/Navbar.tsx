import Link from 'next/link';
import { GlassContainer } from '../layout/GlassContainer';

export const Navbar = () => {
  return (
    <GlassContainer className="mb-8">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          IP Registry
        </Link>
        <div className="flex gap-6">
          <Link href="/register" className="hover:text-primary transition-colors">
            Register
          </Link>
          <Link href="/status" className="hover:text-primary transition-colors">
            Check Status
          </Link>
          <Link href="/admin" className="hover:text-primary transition-colors">
            Admin
          </Link>
        </div>
      </nav>
    </GlassContainer>
  );
};
