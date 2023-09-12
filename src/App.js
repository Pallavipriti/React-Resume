import './App.css';
import React from 'react'
import Resume1 from './Resume';
import { Projects } from './Resume';
import { Internship } from './Resume';
import { Certificate } from './Resume';
import { Contact } from './Resume';

export default function Resume() {
    return (
        <>
            <div className='resume'>
                <Contact />
                <div className='main'>
                    < Resume1 />
                    < Projects />
                    < Internship />
                    < Certificate />
                </div>
            </div>
        </>
    )
}
