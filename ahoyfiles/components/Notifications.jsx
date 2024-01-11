"use client";
import React from 'react'
import {useState, useEffect} from 'react'
import { Toast } from 'flowbite-react';
import { Palmtree, Coins, Anchor} from 'lucide-react'

const Notifications = ({title, text, type}) => {
    //title = "Success"
    //text = "You have uploaded an image"
    //type = "danger"
    let img = ""
    const [showNotif, setShowNotif] = useState(false);
    if (type === "success") {
        img = <Coins></Coins>
    } else if (type === "danger") {
        img = <Palmtree></Palmtree>
    } else if (type === "info") {
        img = <Anchor></Anchor>
    }
    return (
        <div>
        <button className='bg-red-500' onClick={() => setShowNotif((state) => !state)}>Click me</button>
        {showNotif && (
        <Toast>
            <div className={`flex flex-col gap-2 bg-${type} text-${(type === "info") ? "white" : "black"} py-3 px-4 rounded-xl`}>
                <div className="flex flex-row gap-2">
                    {img}
                    <h1 className="text-lg font-bold">{`${title}`}</h1>
                </div>
                <p>{`${text}`}</p>
            </div>
        <Toast.Toggle onDismiss={() => setShowNotif(false)}/>
        </Toast>
        )}
        </div>
    )
}

/*
//Notifications section for layout.js:
    <Notifications title="Success" text="Arr!" type="success"></Notifications>
//after submit:
    {postError && () => {
        return (
            <Notifications title="Errarr" text="Yer marooned! Try again matey!" type="danger"/>
        )
    }
    {postSuccess && () => {
        return (
            <Notifications title="Thar she blows!" text="New plunder added! Feast yer eyes!" type="success"/>
        )
    }
// on update to profile pic:
    {profUpdated && () => {
        return (
            <Notifications title="Ye've flown yer colours!" text="Profile updated! Lookin' salty as the briny deep!" type="info"/>
        )
    }

*/

export default Notifications