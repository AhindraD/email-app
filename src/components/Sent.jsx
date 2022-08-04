import React, { useEffect, useState } from 'react'
import { collection, getDocs, addDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import './Sent.css';

export default function Sent() {
    let goTo = useNavigate();
    let [list, setList] = useState([{
        id: Math.round(Math.random() * 100), receiverName: 'Ahindra', receiverEmail: 'ahindra@mail.com', subject: 'subject-area', message: 'message-area', timeStamp: '11/11/2001'
    }]);
    let [receiverName, setReceiverName] = useState('');
    let [receiverEmail, setReceiverEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [message, setMessage] = useState('');

    let [textArea, setTextArea] = useState(false)

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
        //console.log(currSent)
        currSent.timeStamp = new Date().toLocaleDateString();

        const docRef = await addDoc(collection(db, "Sent"), currSent);
        currSent.id = docRef.id;
        await updateDoc(docRef, {
            id: docRef.id
        });

        setList((arr) => arr.concat([currSent]));
        setReceiverName('');
        setReceiverEmail('');
        setMessage('');
        setSubject('');

    }

    return (
        <div className='sent-cont inbox-cont'>
            {list.map((elem) => {
                return (
                    <div className="inbox-card" key={elem.id} onClick={() => { goTo(`/sent/${elem.id}`) }}>
                        <p className="sender">{elem.receiverName}</p>
                        <p className="preview">{elem.subject}<span className='preview-msg'>{elem.message}</span></p>
                        <p className="timestamp">{new Date(elem.timeStamp).toDateString()}</p>
                    </div>
                )
            })}
            <button className='send-new' onClick={() => { setTextArea((prev) => !prev) }}>Compose New🖋</button>
            <div className={`write-mail ${textArea ? 'show' : 'hide'}`}>
                <form action="">
                    {/* <label htmlFor="receiverName"> */}
                    <input type="text" value={receiverName} placeholder='receiver-Name' id='receiverName' onChange={(e) => {
                        setReceiverName(e.target.value);
                    }} />
                    {/* </label> */}
                    {/* <label htmlFor="receiverEmail"> */}
                    <input type="text" value={receiverEmail} placeholder='receiver-Email' id='receiverEmail' onChange={(e) => {
                        setReceiverEmail(e.target.value);
                    }} />
                    {/* </label> */}
                    {/* <label htmlFor="subject"> */}
                    <input type="text" value={subject} placeholder='Subject line' id='subject' onChange={(e) => {
                        setSubject(e.target.value);
                    }} />
                    {/* </label> */}
                    <textarea name="" value={message} placeholder='Email body' id='message' onChange={(e) => {
                        setMessage(e.target.value);
                    }}></textarea>
                </form>
                <button className='send-bttn' onClick={() => {
                    let currSent = {
                        receiverName: receiverName, receiverEmail: receiverEmail, subject: subject, message: message,
                    }
                    addToSent(currSent);
                }}>Send ✈</button>
            </div>
        </div>
    )
}
