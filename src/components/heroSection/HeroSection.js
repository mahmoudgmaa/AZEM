import React,{useState} from 'react';
import {HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight} from "./HeroElments";
import Video from "../../videos/video.mp4";
import {Button} from "../Button"

const HeroSection = () => {
    const[hover,setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video.mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Devolop your Business, MAKE IT REAL</HeroH1>
                <HeroP>Request our service and get hosted website, 
                    Android and ios apps for your business 
                    for a resonable price
                    </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true">
                    Get Started {hover?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
