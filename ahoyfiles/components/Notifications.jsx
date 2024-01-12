"use client";
import React from 'react'
import {useState, useEffect} from 'react'
import { Toast } from 'flowbite-react';
import { Palmtree, Coins, Anchor} from 'lucide-react'

const Notifications = ({title, text, type}) => {
    const [showNotif, setShowNotif] = useState(false);
    const [image, setImage] = useState(false);
    const [colour, setColour] = useState(false);

    const colourEnum = {
        "success": "#22C15F",
        "danger": "#FF7975",
        "info": "#4B5AFC"
    }
    
    useEffect(() => {
        if (type === "success") {
            setImage(<Coins></Coins>)
            setColour("#22C15F")
            return;
        } else if (type === "danger") {
            setImage(<Palmtree></Palmtree>)
            setColour("#FF7975")
            return;
        } else if (type === "info") {
            setImage(<Anchor></Anchor>)
            setColour("#4B5AFC")
            return;
        }
        
    }, [type]) 
    
    useEffect(() => {
        if (type === "success" || type === "danger" || type === "info") {
          setShowNotif(true);
        } else {
          setShowNotif(false);
        }
    }, [type]);


    useEffect(() => {
      console.log(type)
    }, [type]);

    return (
        <div>
        {showNotif && (
        <Toast>
        <div className={`flex flex-col gap-2 
       text-${colour === "#4B5AFC" ? "white" : "black"} py-3 px-4 rounded-xl 
        `}

        style={{
          backgroundColor: colourEnum[type],
        }}
        
        >
          <div className="flex flex-row gap-2">
            {image}
            <h1 className="text-lg font-bold">{`${title}`}</h1>
          </div>
          <p>{`${text}`}</p>
        </div>
        <Toast.Toggle onDismiss={() => setShowNotif(false)} />
      </Toast>
        )}
        </div>
    )
}

/*
// on update to profile pic:
    {profUpdated && () => {
        return (
            <Notifications title="Ye've flown yer colours!" text="Profile updated! Lookin' salty as the briny deep!" type="info"/>
        )
    }

*/

export default Notifications