import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import IMG from "../src";

var value:number = 0;
function Logos(){
    const[animate, setAnimate] = useState(900);         
    const[none, setNone] = useState('block');

    const ThreeImages = useMemo(()=>{
        value = animate;
    },[animate])

    useEffect(()=>{                                                                                                                           
        const timer = setInterval(()=>{   
            value > - 1000 ? setAnimate(animate => animate - 105) : setAnimate(530);
            value <= - 1000 ? setNone('none') : setNone('block');
        },1000)
        return ()=> clearInterval(timer);
    },[])

    return<div className="container-logo">
        <div className="box-logos">
            <motion.img 
            drag="x"
            animate={{x:value, y:39}}
            src={IMG.img_c1}
            className="logo-first"
            style={{display:`${none}`}}/>

            <motion.img 
            drag="x"
            animate={{x:value, y:39}}
            src={IMG.img_c2}
            className="logo-second"
            style={{display:`${none}`}}/>

            <motion.img 
            drag="x"
            animate={{x:value, y:39}}
            src={IMG.img_c3}
            className="logo-third"
            style={{display:`${none}`}}/>

            <motion.img 
            drag="x"
            animate={{x:value, y:39}}
            src={IMG.img_c5}
            className="logo-third"
            style={{display:`${none}`, marginLeft:'380px'}}/>
        </div>
    </div>
}

export default Logos;