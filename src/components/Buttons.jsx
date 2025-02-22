"use client";
import gsap from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import {Open_Sans} from "next/font/google"

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
});

export function NavButton({text}){

    return (
        <button
        className="text-white text-sm"
        >
            {text.toUpperCase()}
        </button>
    );
}

export function AltNavButton({text}){

    return (
        <button
        className="bg-tertiary px-5 py-1 rounded-md font-bold text-sm text-primary">
            {text.toUpperCase()}
        </button>
    );
}

export function IconButton({icon,clickHandler, className,style}){
    const elem = useRef();
    const tl = gsap.timeline({paused:true});
    const tl2 = gsap.timeline({paused:true});
    
    useEffect(()=>{
        tl.fromTo(elem.current,{scale:1,backgroundColor:"rgba(0,0,0,0)"},{scale:1.3, backgroundColor:"rgba(0,0,0,0.1)",duration:0.1})
            .to(elem.current,{scale:1.2,duration:0.1},0.1);

        tl2.fromTo(elem.current,{scale:1.2,backgroundColor:"rgba(0,0,0,0)"},{scale:1.3,backgroundColor:"rgba(0,0,0,0.2)",duration:0.1})
            .to(elem.current,{scale:1.2,duration:0.1,backgroundColor:"rgba(0,0,0,0)"},0.1);
    },[]);

    const handleClick = ()=>{
        tl2.restart();
        clickHandler?clickHandler():console.log("clicked");
    }

    return (
        <div
        className={className}
        ref={elem}
        onClick={handleClick}
        onMouseEnter={()=>tl.restart()}
        onMouseLeave={()=>tl.reverse()}
        style={Object.assign({},{
            width:"fit-content",
            padding:"5px",
            borderRadius:"50%",
            cursor:"pointer",
            display:"flex",
            justifyContent:"center",
        },style)}>
            {icon}
        </div>
    );
}

export function FooterButton({text}){
    return (
        <button
        className="text-white"
        style={{fontSize:"clamp(0.5rem,2vw,1rem)"}}>
            {text.toUpperCase()}
        </button>
    );
}