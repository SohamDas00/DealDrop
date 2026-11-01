import { LogInIcon } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/deal-drop-logo.png"
              alt="DealDrop Logo"
              width={160}
              height={60}
              priority
              className="h-auto w-32 object-contain sm:w-40"
            />
          </a>

          {/* Sign In */}
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:px-5"
          >
            <LogInIcon size={18} strokeWidth={2} />
            <span>Sign In</span>
          </button>
        </nav>
      </header>
    </main>
  );
}
