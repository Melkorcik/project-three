import { useEffect, useState } from "react";
import ObjectsHTML from "./ObjectsContainers";
import './style/Content_one.css';
import IMG from "../src";
import Header from "./Header/Header";

localStorage.setItem("line_lenght", String(0));
localStorage.setItem("checkNumber", String(0));
localStorage.setItem("stopline", 'false');
function ContentOne(){

    const[widtH, setWidtH] = useState(0);
    const[colorText, setColorText] = useState('white');
    const[bottom, set_bottom] = useState('none');
    const[bg_grey, set_bg_grey] = useState('');
    const[colorLogo, setColorLogo] = useState('invert(0%)');
    const[componentOne, setComponentOne] = useState(ObjectsHTML.box_1);
    const[componentTwo, setComponentTwo] = useState(<div></div>);
    const[componentThree, setComponentThree] = useState(<div></div>);
    const[scalePagBlockFirst, setScalePagBlockFirst] = useState(1.3);
    const[scalePagBlockSecond, setScalePagBlockSecond] = useState(1);
    const[scalePagBlockThird, setScalePagBlockThird] = useState(1);
    const[display_btn, setDisplay_btn] = useState('none');
    const[display_pag, setDisplay_pag] = useState('none');

    function handlerClick(e:any){
        setComponentOne(<div></div>); setComponentTwo(<div></div>); setComponentThree(<div></div>);
        let StorageValue = Number(localStorage.getItem("checkNumber")), isTrue = false;
        while (!isTrue) {
            if (StorageValue === 0) {
                if(e.target.className === 'next-btn'){
                    setComponentTwo(ObjectsHTML.box_2);
                    localStorage.setItem("checkNumber", String(1));
                    setScalePagBlockFirst(1);
                    setScalePagBlockSecond(1.3);
                    setScalePagBlockThird(1);
                }else{
                    setComponentThree(ObjectsHTML.box_3);
                    localStorage.setItem("checkNumber", String(2));
                    setScalePagBlockFirst(1);
                    setScalePagBlockSecond(1);
                    setScalePagBlockThird(1.3);
                }
                isTrue = false;
                break; 
            }
            if (StorageValue === 1) {
                if(e.target.className === 'next-btn'){
                    setComponentThree(ObjectsHTML.box_3);
                    localStorage.setItem("checkNumber", String(2));
                    setScalePagBlockFirst(1);
                    setScalePagBlockSecond(1);
                    setScalePagBlockThird(1.3);
                }else{
                    setComponentOne(ObjectsHTML.box_1);
                    localStorage.setItem("checkNumber", String(0));
                    setScalePagBlockFirst(1.3);
                    setScalePagBlockSecond(1);
                    setScalePagBlockThird(1);
                }
                isTrue = false;
                break; 
            }
            if (StorageValue === 2) {
                if(e.target.className === 'next-btn'){
                    setComponentOne(ObjectsHTML.box_1);
                    localStorage.setItem("checkNumber", String(0));
                    setScalePagBlockFirst(1.3);
                    setScalePagBlockSecond(1);
                    setScalePagBlockThird(1);
                }else{
                    setComponentTwo(ObjectsHTML.box_2);
                    localStorage.setItem("checkNumber", String(1));
                    setScalePagBlockFirst(1);
                    setScalePagBlockSecond(1.3);
                    setScalePagBlockThird(1);
                }
                isTrue = false;
                break; 
            }
        }          
    }
         
    useEffect(()=>{
       const time = setInterval(()=>{
        if(localStorage.getItem("stopline")!=='true'){
            if(Number(localStorage.getItem("line_lenght")) >= 1526){
                switch (Number(localStorage.getItem("checkNumber"))) {
                    case 0:
                        setComponentOne(<div></div>);
                        setComponentTwo(ObjectsHTML.box_2);
                        setComponentThree(<div></div>);
                        setScalePagBlockFirst(1);
                        setScalePagBlockSecond(1.3);
                        setScalePagBlockThird(1);
                        localStorage.setItem("checkNumber", String(1));
                        break;
                    case 1:
                        setComponentOne(<div></div>);
                        setComponentTwo(<div></div>);
                        setComponentThree(ObjectsHTML.box_3);
                        setScalePagBlockFirst(1);
                        setScalePagBlockSecond(1);
                        setScalePagBlockThird(1.3);
                        localStorage.setItem("checkNumber", String(2));
                        break;
                    case 2:
                        setComponentOne(ObjectsHTML.box_1);
                        setComponentTwo(<div></div>);
                        setComponentThree(<div></div>);
                        setScalePagBlockFirst(1.3);
                        setScalePagBlockSecond(1);
                        setScalePagBlockThird(1);
                        localStorage.setItem("checkNumber", String(0));
                        break;
                    default:
                        break;
                }
                setWidtH(0);
                localStorage.setItem("line_lenght", String(0));
            }            
                let value = Number(localStorage.getItem("line_lenght"));
                value+=1;
                localStorage.setItem("line_lenght",String(value));
                setWidtH(value);  
        }
                      
        },10)
        return function cleanup() {
            localStorage.clear();
            clearInterval(time);
        };
    },[])

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
         const elem = document.querySelector('.main-container-header-hygge');
         const position:number = Number(elem?.getBoundingClientRect().top);
         if(position < -714){
            setColorLogo('invert(100%)');
            set_bottom('1px solid grey');
            set_bg_grey('#808080');
            setColorText('rgb(178, 172, 172)');
         }else{
            setColorLogo('invert(0%)');
            set_bottom('none');
            set_bg_grey('');
            setColorText('white');
         }
        })
    },[])

    return<div className="content-with-header-box">
        <div 
            onMouseEnter={()=>{localStorage.setItem("stopline",'true'); setDisplay_btn('block'); setDisplay_pag('flex')}} 
            onMouseLeave={()=>{localStorage.setItem("stopline",'false'); setDisplay_btn('none'); setDisplay_pag('none')}} 
            style={{zIndex:'12'}}>
                <div className="main-container-header-hygge">
                    <Header colorLogo={colorLogo} bg_grey={bg_grey} bottom={bottom} colorText={colorText}/>
                </div>

                <div style={{height:'730px', width:'1519px', border:'1px solid white'}}>
                    {componentOne}
                    {componentTwo}
                    {componentThree}
                </div>
                
                <img onClick={handlerClick} src={IMG.img_back} alt="img back" style={{display:`${display_btn}`, position:'absolute', top:'300px', width:'50px', height:'50px'}} className="back-btn"/>
                <img onClick={handlerClick} src={IMG.img_next} alt="img next" style={{display:`${display_btn}`, position:'absolute', top:'300px',left:'1466px', width:'50px', height:'50px'}} className="next-btn"/>

            <div style={{position:'absolute',display:`${display_pag}`, width:'66px',justifyContent:'space-between',top:'660px',left:'730px',}}>
                <span style={{display:'block', height:`12px`, width:`12px`, backgroundColor:'white',borderRadius:'3px',scale:`${scalePagBlockFirst}`}}></span>
                <span style={{display:'block',  height:`12px`,  width:`12px`,  backgroundColor:'white', borderRadius:'3px', scale:`${scalePagBlockSecond}`}}></span>
                <span style={{display:'block', height:`12px`, width:`12px`, backgroundColor:'white', borderRadius:'3px', scale:`${scalePagBlockThird}`}}></span>
            </div>

        </div>
        <span style={{position:'absolute', top:'723px', width:`${widtH}px`, height:'6px', backgroundColor:'grey', opacity:'0.6'}}></span>
    </div>
}
localStorage.clear();
export default ContentOne;