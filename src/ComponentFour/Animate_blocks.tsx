import { motion } from "framer-motion";
import IMG from "../src";
import { useState } from "react";
import StateAnimate from "./ObjectStatesAnimate";
function Animate_blocks(){
    const[NameElem, SetNameElem] = useState('');

    function handleClick(e:any){
        if(e.target.className === 'li-print-4'){
            SetNameElem('li-print-4'); 
        }
        if(e.target.className === 'li-all-4'){
            SetNameElem('li-all-4');
        }
        if(e.target.className === 'li-web-design-4'){
            SetNameElem('li-web-design-4');
        }
    }

    return<div style={{marginTop:'-33px'}}>
        <ul className="list-title_">
            <li className="li-all-4" onClick={handleClick}>ALL</li>
            <li className="li-print-4" onClick={handleClick}>PRINT</li>
            <li className="li-web-design-4" onClick={handleClick}>WEB DESIGN</li>
        </ul>
        <div className="container-motion-four">
          <div style={{marginTop:'50px'}}>

            <motion.img 
                initial={{
                            scale:NameElem === 'li-print-4' ? 
                            StateAnimate.print.sclPrint_1 : NameElem === 'li-all-4' ? 
                            StateAnimate.all.value : NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.sclPrint_1 : undefined
                        }}
                animate={{
                            scale:NameElem === 'li-print-4' ? 
                            StateAnimate.print.sclPrint_1 : NameElem === 'li-all-4' ? 
                            StateAnimate.all.value : NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.sclPrint_1 : undefined, 

                            x:NameElem === 'li-print-4' ?
                            StateAnimate.print.coordsUndef : NameElem === 'li-all-4' ? 
                            StateAnimate.all.value : NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.coordsUndef : undefined
                        }} 
                transition={{duration:1}} 
                src={IMG.img_b1} className="img-4-1"/>
            
            <motion.img 
                initial={{
                            scale:NameElem === 'li-print-4' ? 
                            StateAnimate.print.sclPrint_1 : NameElem === 'li-all-4' ? 
                            StateAnimate.all.value : NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.sclPrint_1 : undefined
                        }} 
                animate={{
                            scale:NameElem === 'li-print-4' ? 
                            StateAnimate.print.sclPrint_2 : NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.sclPrint_2 : undefined,

                            x:NameElem === 'li-print-4' ? 
                            StateAnimate.print.coordsUndef : NameElem === 'li-all-4' ? 
                            StateAnimate.all.value : NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.coordsUndef : undefined
                        }} 
               transition={{duration:1}}
               src={IMG.img_b2} 
               className="img-4-2"/>

            <motion.img 
                initial={{
                            scale:NameElem === 'li-print-4' ? 
                            StateAnimate.print.sclPrint_1 : NameElem === 'li-all-4' ? 
                            StateAnimate.all.value : NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.sclPrint_1 : undefined
                        }} 
                animate={{
                            scale:NameElem === 'li-print-4' ? 
                            StateAnimate.print.sclPrint_1 : NameElem === 'li-all-4' ? 
                            StateAnimate.all.value : NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.sclPrint_2 : undefined,

                            x:NameElem === 'li-print-4' ? 
                            StateAnimate.print.coordX_cmp3 : NameElem === 'li-all-4' ? 
                            StateAnimate.all.value : NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.coordsUndef : undefined
                        }} 
                transition={{duration:1}}
                src={IMG.img_b3} 
                className="img-4-3"/>

            <motion.img 
                initial={{
                            scale:NameElem === 'li-print-4' ? 
                            StateAnimate.print.sclPrint_1:NameElem === 'li-all-4' ? 
                            StateAnimate.all.value : NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.sclPrint_1 : undefined
                        }} 
                animate={{
                            scale:NameElem === 'li-print-4' ?
                            StateAnimate.print.sclPrint_1:NameElem === 'li-all-4' ? 
                            StateAnimate.all.value : NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.sclPrint_1 : undefined, 

                            y:NameElem === 'li-print-4' ? 
                            StateAnimate.print.coordY_cmp4 : NameElem === 'li-all-4' ? 
                            StateAnimate.all.value : NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.coordY_cmp4 : undefined, 

                            x:NameElem === 'li-print-4' ? 
                            StateAnimate.print.coordX_cmp4 : NameElem === 'li-all-4' ? 
                            StateAnimate.all.value : NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.coordX_cmp4 : undefined
                        }} 
                transition={{duration:1}}
                src={IMG.img_b4} 
                className="img-4-4"/>

            <motion.img 
                initial={{
                            scale:NameElem === 'li-print-4' ? StateAnimate.print.sclPrint_1 : 
                            NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.sclPrint_1 : undefined
                        }} 
                animate={{
                            scale:NameElem === 'li-print-4' ? StateAnimate.print.sclPrint_2 : 
                            NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.sclPrint_2 : undefined
                        }} 
                transition={{duration:1}}
                src={IMG.img_b5} 
                className="img-4-5"/>

            <motion.img 
                initial={{
                            scale:NameElem === 'li-print-4' ? StateAnimate.print.sclPrint_1 :
                            NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.sclPrint_1 : undefined
                        }} 
                animate={{
                            scale:NameElem === 'li-print-4' ? StateAnimate.print.sclPrint_1 : 
                            NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.sclPrint_2 : undefined,

                            x:NameElem === 'li-print-4' ? StateAnimate.print.coordX_cmp6 : 
                            NameElem === 'li-web-design-4' ? 
                            StateAnimate.wed_design.coordsUndef : undefined
                        }} 
                transition={{duration:1}}
                src={IMG.img_b6} 
                className="img-4-6"/>
          </div>
        </div>
    </div>
}
export default Animate_blocks;