import React from 'react'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

export default function Box() {
    return (
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeButton />


                </div>

                <div className=" flex flex-wrap  align-center justify-center  max-w-sm mx-auto">
                    <Card />
                    


                </div>
            </div>



        </div>
    )
}
