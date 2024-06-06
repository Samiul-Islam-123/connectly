import Image from 'next/image'
import React from 'react'
import '../globals.css'
import { Story } from '../assets'

const Card = () => {
    return (
        <div className="infocardContainer">
            <div id="main">
                <Image src={Story} />
            </div>
            <div id="textbois">
                <h2>Alexandro Vargas</h2>
                
            </div>
        </div>
    )
}

export default Card