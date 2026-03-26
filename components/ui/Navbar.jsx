import Image from 'next/image'
import React from 'react'
import { Button } from './button'
import { LogIn } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-200 bg-white sticky top-0 z-50">

            {/* Logo */}
            <a href="/">
                <Image
                    src="/deal-drop-logo.png"
                    alt="Deal Drop Logo"
                    width={160}
                    height={40}
                    className="object-contain"
                />
            </a>

            {/* Right Section */}
            <div className="hidden sm:flex items-center gap-6">

                <Button
                    className="
                        flex items-center gap-2 
                        bg-orange-500 hover:bg-orange-600 
                        text-white font-medium 
                        px-5 py-5 
                        shadow-md hover:shadow-lg 
                        transition-all duration-300 
                        hover:scale-105 active:scale-95
                    "
                >
                    <LogIn size={18} />
                    Sign In
                </Button>

            </div>
        </nav>
    )
}

export default Navbar