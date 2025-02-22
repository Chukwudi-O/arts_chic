import { Facebook, Instagram, X } from "@mui/icons-material";
import { FooterButton, IconButton } from "./Buttons";

export default function Footer(){

    return (
        <div
        className="w-full bg-black py-10">
            <img src="/Arts_Chic_Logo_White.png" alt="white arts chic logo"
            className="m-auto"
            style={{height:"clamp(2.5rem,5vw,8rem)"}}/>

            <div
            className="flex gap-4 justify-center items-center my-4">

                <a href="/"><FooterButton text="Home"/></a>
                <a href="#"><FooterButton text="About"/></a>
                <a href="#"><FooterButton text="Services"/></a>
                <a href="#"><FooterButton text="Marketing"/></a>
                <a href="#"><FooterButton text="Luxury Concierge"/></a>

            </div>

            <div
            className="flex justify-center items-center gap-2">

                <IconButton icon={<Instagram htmlColor="white" sx={{scale:0.8}}/>} className="bg-transparent"/>
                <IconButton icon={<Facebook htmlColor="white" sx={{scale:0.8}}/>} className="bg-transparent"/>
                <IconButton icon={<X htmlColor="white" sx={{scale:0.8}}/>} className="bg-transparent"/>

            </div>

            <p
            className="text-center mt-4 text-sm">
                © 2025 ARTS Chic
            </p>

        </div>
    );
}