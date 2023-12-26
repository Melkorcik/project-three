import '../style/Content_one.css';
import IMG from '../../src';
import ArrayLists from './ArrayLists';
import { useState } from 'react';

function Header({colorLogo, bg_grey, bottom, colorText}:any){
    const[listMenuOne, setlistMenuOne] = useState('none');
    const[listMenuTwo, setlistMenuTwo] = useState('none');
    const[listMenuThree, setlistMenuThree] = useState('none');
    const[listMenuFour, setlistMenuFour] = useState('none');
    const[listMenuFive, setlistMenuFive] = useState('none');

    function handlerMouseEnter(e:any){
        setlistMenuOne('none');
        setlistMenuTwo('none');
        setlistMenuThree('none');
        setlistMenuFour('none');
        setlistMenuFive('none');

        if(e.target.className === 'li-1' || e.target.className === 'el-li-1'){
            setlistMenuOne('block');
        }
        if(e.target.className === 'li-2' || e.target.className === 'el-li-2'){
            setlistMenuTwo('block');
        }
        if(e.target.className === 'li-3' || e.target.className === 'el-li-3'){
            setlistMenuThree('block');
        }
        if(e.target.className === 'li-4' || e.target.className === 'el-li-4'){
            setlistMenuFour('block');
        }
        if(e.target.className === 'li-5' || e.target.className === 'el-li-5'){
            setlistMenuFive('block');
        }   
    }

    function handlerMouseLeave(e:any){
        if(e.target.className === 'li-1' || e.target.className === 'el-li-1'){
            setlistMenuOne('none');
        }
        if(e.target.className === 'li-2' || e.target.className === 'el-li-2'){
            setlistMenuTwo('none');
        }
        if(e.target.className === 'li-3' || e.target.className === 'el-li-3'){
            setlistMenuThree('none');
        }
        if(e.target.className === 'li-4' || e.target.className === 'el-li-4'){
            setlistMenuFour('none');
        }
        if(e.target.className === 'li-5' || e.target.className === 'el-li-5'){
            setlistMenuFive('none');
        }   
    }

    return<div style={{ width:'100%', position:'fixed', top:'0px',right:'0px',zIndex:6, backgroundColor:`${bg_grey}`, borderBottom:`${bottom}`}} className="main-container-header-hygge">
        <img src={IMG.img_hygge} alt="img logo" className="img-hygge" style={{filter:`${colorLogo}`}}/>
        <header style={{zIndex:6, marginTop:'23px'}}>
           <ul style={{display:'flex'}}>
            <li onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave} style={{color:`${colorText}`}} className="li-1">HOME</li>
                <ul className='mini-ul-1' style={{display:`${listMenuOne}`}}>
                {
                    ArrayLists[0].map(el=>{
                        return <li onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave} className="el-li-1">{el}</li>
                    })
                }
                </ul>
            <li onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave} style={{color:`${colorText}`}} className="li-2">SLIDER</li>
                <ul className='mini-ul-2' style={{display:`${listMenuTwo}`}}>
                    {
                        ArrayLists[1].map(el=>{
                            return <li onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave} className="el-li-2">{el}</li>
                        })
                    }
                </ul>   
            <li onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave} style={{color:`${colorText}`}} className="li-3">HEADERS</li>
                <ul className='mini-ul-3' style={{display:`${listMenuThree}`}}>
                    {
                        ArrayLists[2].map(el=>{
                            return <li onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave} className="el-li-3">{el}</li>
                        })
                    }
                </ul>
            <li onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave} style={{color:`${colorText}`}} className="li-4">PAGES</li>
                <ul className='mini-ul-4' style={{display:`${listMenuFour}`}}>
                    {
                        ArrayLists[3].map(el=>{
                            return <li onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave} className="el-li-4">{el}</li>
                        })
                    }
                </ul>
            <li onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave} style={{color:`${colorText}`}} className="li-5">FEATURES</li>
                <ul className='mini-ul-5' style={{display:`${listMenuFive}`}}>
                    {
                        ArrayLists[4].map(el=>{
                            return <li onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave} className="el-li-5">{el}</li>
                        })
                    }
                </ul>
           </ul>
        </header>
    </div>
}

export default Header;