"use client";
import {gsap} from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Open_Sans} from "next/font/google"

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
});


export function SlideText({text,id,slideDirection,style,delay}){
    const p_tag = useRef();

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({paused:true});

    useEffect(() => {
        
        switch (slideDirection) {
            case "up":
                tl.fromTo(p_tag.current, { transform:"translateY(100%)", opacity: 0 },{transform:"translateY(0)", opacity: 1,duration:1,ease:"sine.out"},delay?delay:0);
                break;
            case "down":
                tl.fromTo(p_tag.current, { transform:"translateY(-100%)", opacity: 0 },{transform:"translateY(0)", opacity: 1,duration:1,ease:"sine.out"},delay?delay:0);
                break;
            case "left":
                tl.fromTo(p_tag.current, { transform:"translateX(100%)", opacity: 0 },{transform:"translateX(0)", opacity: 1,duration:1,ease:"sine.out"},delay?delay:0);
                break;
            case "right":
                tl.fromTo(p_tag.current, { transform:"translateX(-100%)", opacity: 0 },{transform:"translateX(0)", opacity: 1,duration:1,ease:"sine.out"},delay?delay:0);
                break;
            default:
                break;
        }

        ScrollTrigger.create(
        {
            trigger:`#${id}`,
            start:"bottom 80%",
            onToggle:(self)=>tl.play()
        }
    );
    }, []);

    return (
        <div
        id={id}
        style={style}>

            <p
            style={{opacity:0}}
            className={openSans.className}
            ref={p_tag}>
                {text}
            </p>

        </div>
    );
}