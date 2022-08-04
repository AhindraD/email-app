import React from 'react';
import { useNavigate } from 'react-router-dom';
import { messages } from '../dummy-mails';

export default function Inbox() {
    let goTo = useNavigate();
    return (
        <div className='inbox-cont'>
            {messages.map((elem) => {
                return (
                    <div className="inbox-card" key={elem.id} onClick={() => { goTo(`/inbox/${elem.id}`) }}>
                        <p className="sender">{elem.from.name}</p>
                        <p className="preview">{elem.subject}<span className='preview-msg'>{elem.body}</span></p>
                        <p className="timestamp">{new Date(elem.date).toDateString()}</p>
                    </div>
                )
            })}
        </div>
    )
}
