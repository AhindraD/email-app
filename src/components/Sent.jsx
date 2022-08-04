import React, { useEffect, useState } from 'react'
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import './Sent.css';

export default function Sent() {
    let goTo = useNavigate();
    let [list, setList] = useState([{
        id: Math.round(Math.random() * 100), senderName: 'Ahindra', senderEmail: 'ahindra@mail.com', subject: 'subject-area', message: 'message-area', timeStamp: '11/11/2001'
    }]);
    let [senderName, setSenderName] = useState('');
    let [senderEmail, setSenderEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [message, setMessage] = useState('');

    async function getSentMails() {
        const querySnapshot = await getDocs(collection(db, "Sent"));
        let dataFromFireBase = [];
        querySnapshot.forEach((doc) => {
            //console.log(doc.data());
            //console.log(doc.id);
            let tempData = doc.data();
            tempData.id = doc.id;
            dataFromFireBase.push(tempData);
        });
        setList(dataFromFireBase);
    }

    useEffect(() => {
        getSentMails();
    }, [])


    async function addToSent(currSent) {
        const docRef = await addDoc(collection(db, "Sent"), currSent);

        currSent.id = docRef.id;
        currSent.timeStamp = new Date();
        setList((arr) => arr.concat([currSent]));
        setSenderName('');
        setSenderEmail('');
        setMessage('');
        setSubject('');

    }

    return (
        <div className='sent-cont inbox-cont'>
            {list.map((elem) => {
                return (
                    <div className="inbox-card" key={elem.id} onClick={() => { goTo(`/inbox/${elem.id}`) }}>
                        <p className="sender">{elem.senderName}</p>
                        <p className="preview">{elem.subject}<span className='preview-msg'>{elem.message}</span></p>
                        <p className="timestamp">{new Date(elem.timeStamp).toDateString()}</p>
                    </div>
                )
            })}
            <button className='send-new'>+</button>
        </div>
    )
}
