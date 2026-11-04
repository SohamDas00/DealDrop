'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { LogInIcon } from 'lucide-react'
import AuthModal from '../components/AuthModal'

const AuthButton = ({user}) => {
    const [isAuthModal,setisAuthModal]=useState(false);
    return (
        <>
        <Button
            onClick={()=>setisAuthModal(true)}
            type="button"
            className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-5 text-sm font-semibold text-white hover:bg-orange-600 sm:px-5"
        >
            <LogInIcon size={18} />
            Sign In
        </Button>
        <AuthModal isopen={isAuthModal} isclose={()=>{setisAuthModal(false)}}/>
        </>

    )
}

export default AuthButton
