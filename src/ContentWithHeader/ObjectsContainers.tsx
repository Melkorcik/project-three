import IMG from "../src";
import { motion } from "framer-motion";
import arrayContent from "./ArrayText";
import './style/Content_one.css';

enum bgImg{
    slider = IMG.img_slider_1,
    slider2 = IMG.img_slider_2,
    slider3 = IMG.img_slider_3
}

const ObjectsHTML = {
    box_1:<motion.div className="container-background-1" 
        animate={{opacity:[0 , 1]}}
        transition={{duration:0.9}}
        style={{
        position:'relative',
        backgroundPositionX:'center',
        backgroundPositionY:'center',
        backgroundImage:`url(${bgImg.slider})`, 
        height:'730px', 
        width:'1519px'
        }}>
            <motion.h1
             style={{
                position:'absolute', 
                width:'980px',
                 height:'100px', 
                 marginLeft:'256px', 
                 color:'white', 
                 fontSize:'50px'
            }}
             initial={{y:450, opacity:0}}
             animate={{y:260, opacity:1}}
             transition={{duration:1.5}}>{arrayContent[0]}
            </motion.h1>
            <motion.p
             style={{
                position:'absolute',
                top:'91px', 
                width:'780px', 
                height:'100px', 
                marginLeft:'360px', 
                color:'white', 
                fontSize:'23px'
            }}
             initial={{y:450, opacity:0}}
             animate={{y:260, opacity:1}}
             transition={{delay:1.5,duration:1.5}}>{arrayContent[1]}</motion.p>
            <motion.span    
             initial={{y:690, x:650, opacity:0}}
             animate={{y:460, opacity:1}}
             transition={{delay:3,duration:1.5}}         
             style={{
                position:'absolute',
                paddingLeft:'29px',
                paddingRight:'29px',
                paddingTop:'12px',
                paddingBottom:'12px',
                fontWeight:'bold',
                backgroundColor:`${'rgba(28,28,28,0)'}`,
                color:'white',
                border:'2px solid white',
                borderRadius:'6px'
             }}
             className="buttonOne"
            >PURCHASE NOW</motion.span>
    </motion.div>,

    box_2:<motion.div className="container-background-2" 
        animate={{opacity:[0 , 1]}}
        transition={{duration:0.9}}
        style={{
        backgroundPositionX:'center',
        backgroundPositionY:'center',
        backgroundImage:`url(${bgImg.slider2})`, 
        height:'730px', 
        width:'1519px'
        }}>
            <motion.h1
             style={{
                position:'absolute', 
                width:'980px',
                 height:'100px', 
                 marginLeft:'256px', 
                 color:'white', 
                 fontSize:'50px'
            }}
             initial={{y:260, x:-550, opacity:0}}
             animate={{x:66, opacity:1}}
             transition={{duration:1.5}}>{arrayContent[2]}
            </motion.h1>

            <motion.p
             style={{
                position:'absolute',
                top:'91px', 
                width:'780px', 
                height:'100px', 
                marginLeft:'360px', 
                color:'white', 
                fontSize:'23px'
            }}
            initial={{y:260, x:350, opacity:0}}
            animate={{x:96, opacity:1}}
            transition={{delay:1.5, duration:1.5}}>{arrayContent[3]}</motion.p>

            <motion.span    
             initial={{y:690, x:670, opacity:0}}
             animate={{y:460, opacity:1}}
             transition={{delay:3,duration:1.5}}         
             style={{
                position:'absolute',
                paddingLeft:'29px',
                paddingRight:'29px',
                paddingTop:'12px',
                paddingBottom:'12px',
                fontWeight:'bold',
                backgroundColor:'#1CAC78',
                color:'white',
                border:'2px solid #1CAC78',
                borderRadius:'6px'
             }}
             className="buttonTwo"
            >VIEW FEATURES</motion.span>
    </motion.div>,

    box_3:<motion.div className="container-background-3" 
        animate={{opacity:[0 , 1]}}
        transition={{duration:0.9}}
        style={{
        backgroundPositionX:'center',
        backgroundPositionY:'center',
        backgroundImage:`url(${bgImg.slider3})`, 
        height:'730px', 
        width:'1519px'
        }}>
            <motion.h1
             style={{
                position:'absolute', 
                width:'580px',
                height:'100px', 
                color:'white', 
                fontSize:'50px'
            }}
             initial={{y:185, x:550, opacity:0}}
             animate={{x:166, opacity:1}}
             transition={{duration:1.5}}>{arrayContent[4]}
            </motion.h1>

            <motion.p
             style={{
                position:'absolute',
                top:'91px', 
                width:'780px', 
                height:'100px', 
                color:'white', 
                fontSize:'23px'
            }}
            initial={{y:260, x:350, opacity:0}}
            animate={{x:166, opacity:1}}
            transition={{delay:1.5, duration:1.5}}>{arrayContent[5]}</motion.p>

            <motion.span    
             initial={{y:450, x:670, opacity:0}}
             animate={{x:166, opacity:1}}
             transition={{delay:3,duration:1.5}}         
             style={{
                position:'absolute',
                paddingLeft:'29px',
                paddingRight:'29px',
                paddingTop:'12px',
                paddingBottom:'12px',
                fontWeight:'bold',
                backgroundColor:'#1CAC78',
                color:'white',
                border:'2px solid #1CAC78',
                borderRadius:'6px'
             }}
             className="button_Three"
            >PURCHASE NOW</motion.span>
    </motion.div>
}

export default ObjectsHTML;