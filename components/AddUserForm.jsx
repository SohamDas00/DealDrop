'use client'

import { TrendingDown } from 'lucide-react'
import React, { useState } from 'react'
import { Spinner } from './ui/spinner';

const AddUserForm = ({ user }) => {
    const [url,setUrl]=useState('');
    const [loading,setLoading]=useState(false);
    return (
        <form className="mt-9 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
            <input
                type="url"
                value={url}
                onChange={(e)=>setUrl(e.target.value)}
                disabled={loading}
                required
                placeholder="Paste product URL (Amazon, Walmart, etc.)"
                className="min-w-0 flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400"
            />

            <button
                type="button"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600"
            >
                {loading?(
                    <>
                        <Spinner/>
                        Adding...
                    </>
                ):(
                    <>
                        <TrendingDown size={18} />
                        Track Price
                    </>
                )}
            </button>
        </form>
    )
}

export default AddUserForm
