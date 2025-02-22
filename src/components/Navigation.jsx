"use client";
import { Close, Menu, ShoppingCart } from "@mui/icons-material";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../public/Arts_Chic_Logo_Alt.png"
import {NavButton, IconButton, AltNavButton} from "./Buttons";


const Navbar = () => {
    const navbar = useRef();
    const navDrawer = useRef();
    const navDrawerDiv = useRef();
    const logoRef = useRef();

    const [isPhone, setIsPhone] = useState();

    let lastScrollTop = 0;

    const tl = gsap.timeline({ paused: true });
    const tl2 = gsap.timeline({ paused: true });
    const tl3 = gsap.timeline({ paused: true });

    const onScroll = () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            tl.play();
        } else {
            // Scrolling up
            tl.reverse();
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    const toggleDrawer = (open) => {
        if(open === true){
            tl2.play();
        }else{
            tl2.reverse();
        }
    };

    useEffect(() => {
        tl.to(navbar.current, { transform: "translateY(-100%)", duration: 0.5 ,ease: "power2.inOut" });

        
        tl2.to(navDrawer.current, { backgroundColor: "rgba(0,0,0,0.75)", width:"100%", duration: 0.5 ,ease: "power2.inOut" })
            .to(navDrawerDiv.current, { transform: "translateX(0)", duration: 0.5 ,ease: "power2.inOut" },0);
        
        
        tl3.to("#logo", { transform: "translateY(2px)", scale:1.1, duration: 0.2 ,ease:"sine.in" })

        
        var open_drawer = document.getElementsByClassName("open-drawer");
        for (let elem of open_drawer){
            elem.addEventListener("click", ()=>toggleDrawer(true));
        };

        var close_drawer = document.getElementsByClassName("close-drawer");
        for (let elem of close_drawer){
            elem.addEventListener("click", ()=>toggleDrawer(false));
        };

        window.innerWidth < 768 ? setIsPhone(true) : setIsPhone(false);
        window.onresize = () => {window.innerWidth < 768 ? setIsPhone(true) : setIsPhone(false)};

        window.addEventListener("scroll", onScroll);
        window.addEventListener("scroll", ()=>toggleDrawer(false));

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const handleLogoHoverOver = () => {
        tl3.play();
    };

    const handleLogoHoverOut = () => {
        tl3.reverse();
    };

    return (
        <>
            <div
            ref={navbar}
            className="flex fixed items-center top-0 w-full py-1 px-10 justify-between bg-inherit z-50">
                
                

                <a href="/"
                id="logo"
                onMouseOver={handleLogoHoverOver}
                onMouseOut={handleLogoHoverOut}>
                    <Image src={logo} alt="logo" height="70"/>
                </a>

                
                    <IconButton icon={<Menu htmlColor="wheat"/>} className="open-drawer" id="drawer-btn"
                    style={{
                        visibility: isPhone ? "visible" : "hidden",
                        display:isPhone?"inherit":"none"
                    }}/>

                    <div
                    className="gap-6"
                    style={{
                        visibility: isPhone ? "hidden" : "visible",
                        display:isPhone?"none":"flex"
                    }}>
                        <div
                        className="flex gap-3">
                            <NavButton text={"About"}/>
                            <NavButton text={"Marketing"}/>
                            <NavButton text={"Luxury Concierge"}/>
                        </div>

                        <AltNavButton text={"Contact Us"}/>
                        
                    </div>
                
            </div>


            <div
            ref={navDrawer}
            className="flex fixed top-0 left-0 h-screen w-0"
            style={{zIndex:51}}>
                
                <div
                className="close-drawer w-full h-full cursor-pointer"/>

                
                <div
                ref={navDrawerDiv}
                className="flex flex-col items-center gap-6 text-center left-0 top-0 bg-black h-full absolute pt-2"
                style={{
                    transform:"translateX(-100%)",width:"clamp(200px,50%,300px)",
                }}>

                    <IconButton icon={<Close htmlColor="black"/>} className="close-drawer" id="close-drawer-btn"/>

                    <a href="/"
                    ref={logoRef}
                    onMouseOver={handleLogoHoverOver}
                    onMouseOut={handleLogoHoverOut}>
                        <Image src={logo} alt="logo" height="125"/>
                    </a>
                    

                    <div
                    className="flex flex-col gap-3 text-left">

                        <a href="#"><NavButton text="About"/></a>
                        <a href="#"><NavButton text="Marketing"/></a>
                        <a href="#"><NavButton text="Luxury Concierge"/></a>
                        <a href="#"><AltNavButton text="Contact Us"/></a>

                    </div>
                    
                </div>
                

            </div>
        </>
    );
};

export default Navbar;