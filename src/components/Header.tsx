import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Header(){
    const [isMouse01On, setIsMouse01On] = useState(false)
    const [isMouse02On, setIsMouse02On] = useState(false)

    const header = {
        position:"fixed",
        display:"flex",
        margin:"auto",
        top:0,
        left:0,
        background:"#E6E6E6",
        width:"100%", 
        height:"60px"
    }
    const buttonCss01 = {
        cursor:"pointer",
        width:"100px",
        height:"60px",
        textAlign:"center",
        background:"#EEEEEE",
        fontSize:"18px",
        fontWeight:"bold",
        backgroundColor:"#fffff",
        border: "2px ",
    }
    const buttonCss02 = {
        cursor:"pointer",
        width:"100px",
        height:"60px",
        textAlign:"center",
        background:"#E6E6E6",
        fontSize:"18px",
        fontWeight:"bold",
        backgroundColor:"#fffff",
        border: "2px ",
    }


    function handleOnMouse01Over(){
        setIsMouse01On(true)
    }
    function handleOnMouse02Over(){
        setIsMouse02On(true)
    }
    function handleOnMouse01Out(){
        setIsMouse01On(false)
    }
    function handleOnMouse02Out(){
        setIsMouse02On(false)
    }

    return (
        <div style={header}>
            <div style={{width:"15%"}}></div>
            <img src= "/images/logo.png" alt="logo" style={{display:"block", width:"200px"}}/>
            
            <div style={{width:"60%"}}></div>
            
            <div>
            <Link href="https://soulcalmfunny.notion.site/0265c96352964f298b9e600bcbbd8e9b">
                <button style={isMouse01On?buttonCss01:buttonCss02} onMouseOver={handleOnMouse01Over} onMouseOut={handleOnMouse01Out}>공지사항</button>
            </Link>
            </div>

            <div>
                <Link href="https://soulcalmfunny.notion.site/6c9c74f386e54f42b5763d4b74b672ce">
                    <button style={isMouse02On?buttonCss01:buttonCss02} onMouseOver={handleOnMouse02Over} onMouseOut={handleOnMouse02Out}>고객센터</button>
                </Link>
            </div>
            <div style={{width:"15%"}}></div>
        </div>
    );
}