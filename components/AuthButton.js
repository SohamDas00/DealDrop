'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { LogInIcon } from 'lucide-react'
import AuthModal from '../components/AuthModal'
import {signOut} from "../app/action"

const AuthButton = ({ user }) => {
    const [isAuthModal, setisAuthModal] = useState(false);
    if (user) {
        return(
            <form action={signOut}>
            <button
            type='submit'
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm transition-colors hover:bg-red-50 hover:text-red-600 hover:border-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Sign Out
            </button>
        </form>
        )
    }
    return (
        <>
            <Button
                onClick={() => setisAuthModal(true)}
                type="button"
                className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-5 text-sm font-semibold text-white hover:bg-orange-600 sm:px-5"
            >
                <LogInIcon size={18} />
                Sign In
            </Button>
            <AuthModal isopen={isAuthModal} isclose={() => { setisAuthModal(false) }} />
        </>

    )
}

export default AuthButton
