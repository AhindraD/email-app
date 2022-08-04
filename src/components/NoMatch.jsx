import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
    return (
        <div>
            Looks like you are lost!
            <br />
            <Link className='home' to={''}>Go to Home</Link>
        </div>
    )
}
