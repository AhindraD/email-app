import React from 'react'
import { useParams } from 'react-router-dom'
import { getMessageById } from '../dummy-mails';

export default function Email() {
    let { inboxID } = useParams();
    console.log(inboxID);
    let message = getMessageById(inboxID);
    return (
        <div className='email-cont'>
            <p className="sender-email">Sender: {message.from.email}</p>
            <p className="sender-subject">Subject: {message.subject}</p>
            <p className="sender-message">{message.body}</p>
        </div>
    )
}
