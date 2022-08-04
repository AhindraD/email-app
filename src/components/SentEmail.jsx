import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { collection, getDocs, addDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase-config';

export default function SentEmail(props) {
    let { sentID } = useParams();
    console.log(sentID);
    let [dataBase, setDataBase] = useState(null);

    async function getDataBase() {
        const querySnapshot = await getDocs(collection(db, "Sent"));
        let dataFromFireBase = [];
        querySnapshot.forEach((doc) => {
            //console.log(doc.data());
            //console.log(doc.id);
            let tempData = doc.data();
            tempData.id = doc.id;
            if (tempData.id === sentID) {
                dataFromFireBase.push(tempData);
            }
        });
        setDataBase(() => dataFromFireBase[0])
    }

    useEffect(() => {
        getDataBase();
    }, [])

    return (
        <>
            {dataBase !== null ?
                <div className='email-cont'>
                    <p className="sender-email">Receiver: {dataBase.receiverEmail}</p>
                    <p className="sender-subject">Subject: {dataBase.subject}</p>
                    <p className="sender-message">{dataBase.message}</p>
                </div >
                : null}
        </>
    )
}
