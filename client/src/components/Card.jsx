import Image from 'next/image'
import React from 'react'
import { Story } from '../app/assets'

const Card = () => {
    return (
        <div className='flex items-center gap-5'>
            <div className="infocardContainer">
                <div id="main">
                    <Image src={Story} />
                </div>
                <div className='flex flex-col p-2'>
                    <h2 className=''>Alexandro Vargas</h2>
                    <h2>Profession</h2>
                    <p>Bio</p>
                    <p>Age</p>
                </div>
            </div>
            <div className="infocardContainer">
                <div id="main">
                    <Image src={Story} />
                </div>
                <div className='flex flex-col p-2'>
                    <h2 className=''>Alexandro Vargas</h2>
                    <h2>Profession</h2>
                    <p>Bio</p>
                    <p>Age</p>
                </div>
            </div>
            <div className="infocardContainer">
                <div id="main">
                    <Image src={Story} />
                </div>
                <div className='flex flex-col p-2'>
                    <h2 className=''>Alexandro Vargas</h2>
                    <h2>Profession</h2>
                    <p>Bio</p>
                    <p>Age</p>
                </div>
            </div>
            <div className="infocardContainer">
                <div id="main">
                    <Image src={Story} />
                </div>
                <div className='flex flex-col p-2'>
                    <h2 className=''>Alexandro Vargas</h2>
                    <h2>Profession</h2>
                    <p>Bio</p>
                    <p>Age</p>
                </div>
            </div>
            <div className="infocardContainer">
                <div id="main">
                    <Image src={Story} />
                </div>
                <div className='flex flex-col p-2'>
                    <h2 className=''>Alexandro Vargas</h2>
                    <h2>Profession</h2>
                    <p>Bio</p>
                    <p>Age</p>
                </div>
            </div>
            <div className="infocardContainer">
                <div id="main">
                    <Image src={Story} />
                </div>
                <div className='flex flex-col p-2'>
                    <h2 className=''>Alexandro Vargas</h2>
                    <h2>Profession</h2>
                    <p>Bio</p>
                    <p>Age</p>
                </div>
            </div>
            <div className="infocardContainer">
                <div id="main">
                    <Image src={Story} />
                </div>
                <div className='flex flex-col p-2'>
                    <h2 className=''>Alexandro Vargas</h2>
                    <h2>Profession</h2>
                    <p>Bio</p>
                    <p>Age</p>
                </div>
            </div>
        </div>
    )
}

export default Card