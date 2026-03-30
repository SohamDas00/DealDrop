import Badge from '@/components/ui/Badge'
import Navbar from '@/components/ui/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />

      {/* Gradient Section */}
      <div className="bg-gradient-to-b from-orange-100 via-white to-orange-200 min-h-[300px] flex justify-center items-start pt-20">
        <Badge />
      </div>
    </div>
  )
}

export default page