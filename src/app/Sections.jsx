"use client";
import {gsap} from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Section1(){

    return(
        <div
        className="relative flex justify-center items-center h-screen mix-blend-hard-light"
        style={{
            backgroundImage:"url(/torn_paper_bg.png)"
        }}>

            <video autoPlay muted loop preload="auto" playsInline poster="/Arts_Chic_Logo_Alt.png" className="h-full w-full">
                <source src="/Banner_video.mp4" type="video/mp4"/>
            </video>
        </div>
    );
}

export function Section2(){
    const header_text = useRef();
    const desc_text = useRef();
    const logo = useRef();

    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();

    useEffect(()=>{
        tl.to(header_text.current,{opacity:1, translateX:0, duration:1})
        .to(desc_text.current,{opacity:1, translateX:0, duration:1},0.4)
        .to(logo.current,{opacity:1, scale:1,duration:1.4,ease:"power1.out"},0);
        
        ScrollTrigger.create(
            {
                trigger:"#header_text",
                start:"top 40%",
                animation:tl
            }
        );
    },[])

    return(
        <div className="flex justify-center items-center gap-10 px-5 py-20 bg-cover bg-center"
        id="header_text"
        style={{backgroundImage:"url(/Section2_bg.png)"}}>

            <div className="flex flex-col gap-4 w-72">

            <div className="flex flex-col gap-1 -translate-x-5 opacity-0 mix-blend-hard-light"
            
            ref={header_text}>

                <h1 className="font-extralight"
                style={{
                fontSize:"clamp(1.5rem,4vw,2.5rem)",
                lineHeight:0.8
                }}>

                NOT YOUR <br/> MOMMA'S

                </h1>
                
                <h1 className="font-bold bg-clip-text"
                style={{
                fontSize:"clamp(1.5rem,4vw,2.5rem)",
                lineHeight:0.8,
                color:"rgba(240, 186, 25, 0.1)",
                backgroundImage:"linear-gradient(to bottom, rgba(255,249,59,0.55) 0%, rgba(176,113,8,0.55) 100%),url(/gold_texture.png)",
                backgroundPosition:"90% 70.5%",
                }}>
                MARKETING
                </h1>

            </div>

            <p className="font-light -translate-x-5 opacity-0"
            ref={desc_text}
            style={{fontSize:"clamp(0.5rem,2vw,1rem)"}}>

                ARTS Chic is a <b>Full-Service</b> Marketing Agency that combines creativity, 
                flair and strategy to deliver exceptional results. With a passion for the arts 
                and a keen eye for details and innovation, we specialize in traditional and 
                digital marketing, event executions and public relations.
            
            </p>

            </div>

            <img src="/Arts_Chic_Logo_Alt.png" alt="alt arts chic logo"
            className="opacity-0" ref={logo}
            style={{height:"clamp(10rem,20vw,20rem)",scale:0.9}}/>

        </div>
    );
}

export function Section3(){
    const bold_ref = useRef();

    gsap.registerPlugin(ScrollTrigger);

    let bold_tl = gsap.timeline();
    let brazen_tl = gsap.timeline();

    const scroll_trigger = {
        trigger:"#section3",
        start:"top bottom",
        end:"bottom top",
        scrub:true
    };

    useEffect(()=>{
        
        bold_tl.to(bold_ref.current,{backgroundPositionY:"10vh"});
        brazen_tl.to(".brazen",{translateY:"-45%"});

        ScrollTrigger.create(Object.assign({},scroll_trigger,{animation:bold_tl}));
        ScrollTrigger.create(Object.assign({},scroll_trigger,{animation:brazen_tl}));
    },[])

    return(
    <div className="sticky top-0 -z-10" id="section3">

        <div className="w-full mix-blend-hard-light"
        style={{
        backgroundColor:"#f1d16b",
        height:"clamp(20rem,60vw,28rem)"
        }}
        >
        
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full font-extrabold text-left text-black brazen"
            style={{translateY:"10%"}}>
                
                <h1 className="ml-2"
                style={{fontSize:"clamp(1.75rem,9vw,3rem)",transform:"translateY(0.8rem)"}}>

                WE'RE

                </h1>

                <div className="bg-clip-text mix-blend-soft-light"
                style={{
                fontSize:"clamp(5rem,25vw,8rem)",
                lineHeight:"0.75",
                }}>

                <h1>BRA</h1>

                <h1>ZEN</h1>

                </div>
                

            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full h-full bg-center bg-cover"
            style={{backgroundImage:"url(/broken_glass.png)"}}>

                <div className="mix-blend-screen w-full h-full bg-center bg-cover"
                ref={bold_ref}
                style={{
                backgroundColor:"#f1d16b",
                backgroundImage:"url(/bold.png), linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.3) 100%)",
                maskImage:"url(/broken_glass.png)",
                maskPosition:"center",
                backgroundPositionY:"-30vh",
                backgroundSize:"100%",
                maskSize:"cover",
                }} />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full font-extrabold text-left text-black opacity-15 brazen">
                
                    <h1 className="ml-2"
                    style={{fontSize:"clamp(1.75rem,9vw,3rem)",transform:"translateY(0.8rem)"}}>

                    WE'RE

                    </h1>

                    <div className="bg-clip-text mix-blend-soft-light"
                    style={{
                        fontSize:"clamp(5rem,25vw,8rem)",
                        lineHeight:"0.75",
                    }}>

                        <h1>BRA</h1>

                        <h1>ZEN</h1>

                    </div>

                </div>

             </div>

        </div>

    </div>
    );
}

export function Section4(){
    const text_ref = useRef();

    gsap.registerPlugin(ScrollTrigger);

    const services = [
        [["Social Media","Management"],"/social_media_management_icon.png"],
        [["Event","Production"],"/event_production_icon.png"],
        [["Casting","Agency"],"/casting_agency_icon.png"],
        [["Public","Relations"],"/public_relations_icon.png"],
        [["Content","Creation"],"/content_creation_icon.png"],
        [["Film","Fixer"],"/film_fixer_icon.png"],
        [["Luxury","Concierge"],"/luxury_concierge_icon.png"],
        [["Marketing","Consultancy"],"/marketing_consultancy_icon.png"]
    ]

    let text_tl = gsap.timeline();
    let icon_tl = gsap.timeline();
    
    useEffect(() => {
        text_tl.to(text_ref.current,{opacity:1,translateY:0,duration:1});
        var count = 1;
        for(var i=1;i<=services.length;i++){
            if (i <=4){
                icon_tl.fromTo(`.service:nth-child(${i})`,{opacity:0,translateX:-10},{opacity:1,translateX:0,duration:0.5},i/3);
            }else{
                icon_tl.fromTo(`.service:nth-child(${i})`,{opacity:0,translateX:10},{opacity:1,translateX:0,duration:0.5},(i-count)/3);
                count += 2;
            }
        }

        ScrollTrigger.create({
            animation:text_tl,
            trigger:"#section4",
            start:"center bottom",
        })

        ScrollTrigger.create({
            animation:icon_tl,
            trigger:"#section4",
            start:"center bottom",
        })
    }, []);

    return(
        <div className="px-5 p-10 relative z-10"
        id="section4"
        style={{
            backgroundImage:"url(/torn_paper_bg.png)",
            backgroundSize:"cover",
            backgroundPositionX:"center"
        }}>

            <img className=" absolute left-0 -z-10"
            src="/torn_paper.png" alt="black torn paper texture"
            style={{top:"-10vw"}}
            />
            
            <h1 className="text-center text-4xl font-light px-2 opacity-0 translate-y-4" ref={text_ref}>

            WE COVER <span className="font-bold bg-clip-text mix-blend-hard-light"
            style={{
                color:"rgba(240, 186, 25, 0.1)",
                backgroundImage:"linear-gradient(to bottom, rgba(255,249,59,0.55) 0%, rgba(176,113,8,0.55) 100%),url(/gold_texture.png)",
                backgroundPosition:"90% 70.5%",
            }}>EVERYTHING</span>

            </h1>

            <div className="flex gap-4 justify-center items-center flex-wrap pt-10">

            {
            services.map((item,index)=>{
                return (
                <div className="service grid grid-rows-2 items-center self-center gap-1"
                key={index}>
                    
                    <img className="m-auto"
                    src={item[1]} alt="icon"
                    style={{height:"clamp(1.5rem,5vw,4rem)"}}/>

                    <div className="flex flex-col gap-0"
                    style={{lineHeight:"1"}}>

                    {
                    item[0].map((subitem,index)=>{
                        return (
                        <p
                        key={index}
                        className="text-center font-light"
                        style={{fontSize:"clamp(0.4rem,1.7vw,1rem)"}}>
                            {subitem}
                        </p>
                        )
                    })
                    }

                    </div>
                    

                </div>
                )
            })
            }

            </div>

        </div>
    );
}

export function Section5(){
    const logo_ref = useRef();
    const text_ref = useRef();
    const sub_text_ref = useRef();

    gsap.registerPlugin(ScrollTrigger);

    const text_tl = gsap.timeline();
    const logo_tl = gsap.timeline();

    useEffect(() => {
        logo_tl.to(logo_ref.current,{translateX:"0%",duration:1});
        text_tl.to(text_ref.current,{translateX:"0%",duration:1.5})
        .to(sub_text_ref.current,{translateX:"0%",duration:1},1);

        ScrollTrigger.create({
            trigger:"#section5",
            start:"center bottom",
            animation:logo_tl
        });

        ScrollTrigger.create({
            trigger:"#section5",
            start:"center bottom",
            animation:text_tl
        });

    }, []);

    return(
        <div className="px-5 py-10 flex justify-center items-center bg-cover bg-center"
        id="section5"
        style={{backgroundImage:"url(/car_interior_bg.png)", height:"80vw"}}>

            <div className="flex justify-center items-center bg-center bg-no-repeat"
            style={{background:"url(/box_shadow.png)", paddingBlock:"5.5vw", paddingInline:"2.5vw",backgroundSize:"100%"}}>

                <div className="overflow-hidden w-fit h-fit pr-3">

                    <img src="/Arts_Chic_Logo_Alt.png" alt="alt arts chic logo"
                    className="translate-x-full"
                    ref={logo_ref}
                    style={{height:"16vw"}}/>

                </div>
                

                <div className="bg-white rounded"
                style={{height:"16vw",width:"2px"}}/>

                <div className="overflow-hidden w-fit h-fit">
                    <div className="flex flex-col text-tertiary text-lg font-normal pl-3 -translate-x-full"
                    ref={text_ref}
                    style={{fontSize:"5vw",lineHeight:0.8}}>

                        <p>ARRIVE IN STYLE</p>
                        <p>WITH OUR EXCLUSIVE</p>

                        <p className="text-white font-extrabold">LUXURY CONCIERGE</p>
                        
                        <div className="flex gap-2 text-white">

                            <p className="font-extrabold">SERVICE</p>

                            <div className="overflow-hidden">

                                <div className="flex flex-col font-thin -translate-x-full"
                                ref={sub_text_ref}
                                style={{fontSize:"clamp(0.45rem,2vw,2rem)", lineHeight:"clamp(0.65rem,2.5vw,2rem)"}}>

                                    <p>MERCEDES BENZ</p>

                                    <p style={{lineHeight:"1vw"}}>SPRINTER</p>

                                </div>

                            </div>
                            

                        </div>

                    </div>
                </div>
                
                
            </div>

        </div>
    );
}

export function Section6(){
    const text_ref = useRef();
    const sub_text_ref = useRef();

    gsap.registerPlugin(ScrollTrigger);

    const text_tl = gsap.timeline();

    useEffect(() => {
        text_tl.fromTo(text_ref.current,{x:25,opacity:0},{x:0,opacity:1,duration:1.5})
        .fromTo(sub_text_ref.current,{x:25,opacity:0},{x:0,opacity:1,duration:1.5},0.5);
        
        ScrollTrigger.create({
            trigger:"#section6",
            start:"center bottom",
            animation:text_tl
        });
    }, []);

    return (
        <div className="bg-cover relative w-full"
        id="section6"
        style={{
            backgroundImage:"url(/Arts_Chic_Employees.png)",
            height:"50vw",
            backgroundPositionX:"5%"
        }}>

            <div className="flex flex-col gap-3 absolute right-5 top-1/2 -translate-y-1/2 text-black font-light w-1/3 z-10 overflow-hidden"
            style={{fontSize:"5vw", lineHeight:"0.9"}}>

                <h1 ref={text_ref}>

                    WORLD <br/> CLASS <br/>

                    <span className="font-extrabold bg-clip-text"
                    style={{
                        color:"rgba(240, 186, 25, 0.15)",
                        backgroundImage:"linear-gradient(to bottom, rgba(255,249,59,0.55) 0%, rgba(176,113,8,0.55) 100%),url(/gold_texture.png)",
                        backgroundPosition:"90% 70.5%",
                    }}>SERVICE</span>

                </h1>

                <p ref={sub_text_ref}
                style={{
                    fontSize:"1.9vw"
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida. Risus commodo
                viverra maecenas accumsan lacus vel facilisis. 
                </p>

            </div>

        </div>
    );
}