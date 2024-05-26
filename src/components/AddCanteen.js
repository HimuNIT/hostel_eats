import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faMotorcycle, faClipboardList } from '@fortawesome/free-solid-svg-icons'

const AddCanteen = () => {
    return (
    <div className="bg-gradient-to-r from-black to-[#222831] min-h-screen text-white">
        <div className="flex flex-col items-center text-center p-4 min-h-screen overflow-y-auto">
        <h1 className="pt-[10%] text-4xl font-bold mb-5">Partner with Hostel Eats</h1>
        <div className='flex mb-3'>
            <button className='w-64 p-2 m-2 bg-[#30353e] rounded-md'>Register your canteen</button>
            <button className='w-64 p-2 m-2 bg-[#76ABAE] rounded-md text-black'>View your existing restaurants</button>
        </div>
        <div className='text-left mt-8 bg-[#30353e] p-5 rounded-md w-full max-w-2xl text-center'>
            <h2 className='text-2xl'>Get started with online ordering</h2>
            <h5 className='text-l text-gray-300 mb-4'>Please keep the documents ready for a smooth signup</h5>
            <div className='flex justify-between'>
                <ul className='list-disc list-inside space-y-4 mr-8 text-left'>
                    <li>FSSAI license copy</li>
                    <li>Regular GSTIN</li>
                    <li>Your restaurant menu</li>
                </ul>
                <ul className='list-disc list-inside space-y-4 text-left'>
                    <li>PAN card copy</li>
                    <li>Bank account details</li>
                    <li>Dish images for top 5 items</li>
                </ul>
            </div>
        </div>

        {/* How it works section */}
        <div className="mt-16 w-full max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">How it works?</h2>
            <div className="flex justify-around">
                <div className="bg-[#30353e] rounded-lg p-6 shadow-lg w-64">
                    <FontAwesomeIcon icon={faFileAlt} size="3x" className="text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold">Step 1</h3>
                    <p className="mt-2">Create your page on Hostel Eats. Help users discover your place by creating a listing.</p>
                </div>
                <div className="bg-[#30353e] rounded-lg p-6 shadow-lg w-64">
                    <FontAwesomeIcon icon={faMotorcycle} size="3x" className="text-red-500 mb-4" />
                    <h3 className="text-xl font-semibold">Step 2</h3>
                    <p className="mt-2">Register for online ordering. And deliver orders to millions of customers with ease.</p>
                </div>
                <div className="bg-[#30353e] rounded-lg p-6 shadow-lg w-64">
                    <FontAwesomeIcon icon={faClipboardList} size="3x" className="text-orange-500 mb-4" />
                    <h3 className="text-xl font-semibold">Step 3</h3>
                    <p className="mt-2">Start receiving orders online. Manage orders on our partner app, web dashboard, or API partners.</p>
                </div>
            </div>
        </div>

        </div>
    </div>
    )
}

export default AddCanteen