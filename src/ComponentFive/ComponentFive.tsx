import './style/ComponentFive.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Titles from './ArrayTitles';

localStorage.setItem("index", String(0));
function ComponentFive(){
    const[title, setTitle] = useState(Titles[Number(localStorage.getItem("index"))]);

    useEffect(()=>{
        const timer = setInterval(()=>{
            var counter = Number(localStorage.getItem("index"));
            counter < 2 ? counter++ : counter = 0;
            setTitle(Titles[counter]);
            localStorage.setItem("index", String(counter));
        },7000)

        return () => {
            localStorage.clear();
            clearInterval(timer);
        }
    },[]);

    return<div className="fast-string">
            <motion.h2
                initial={{x:896}}
                animate={{x:0}}
                transition={{
                    duration:1,
                    repeat:Infinity, 
                    repeatDelay:6,                   
                    type:'spring'
                }}
                className="title-component-six">
                    {title}
            </motion.h2>
    </div>
}

export default ComponentFive;