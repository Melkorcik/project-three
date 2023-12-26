import './style/Footer.css';
import IMG from '../src';

function Footer(){
    return<div style={{backgroundImage:`url(${IMG.img_bg_black})`, height:'642px', width:'1519px', marginTop:'2px'}} className="footer">
        <div className="box-information-1">
            <div className="box-links-web-site">
                <div className="content-information-links">
                    <h3>ELSEWHERE</h3>
                    <p>Vestibulum id ligula porta felis euismod semper.</p>
                    <img src={IMG.img_Links} className="img-links"/>
                </div>
            </div>

            <div className="box-input-email">
                <div className="content-information-input">
                    <h3>SUBSCRIBE</h3>
                    <p>Cum sociis natoque penatibus et magnis dis parturient.</p>
                    <div style={{display:'flex',marginTop:'26px'}}>
                        <input placeholder="Enter email" className="input-email"/> 
                        <button className="btn-join">JOIN</button>
                    </div>
                </div>
            </div>

            <div className="box-words-links">
                <div className="content-information-words">
                    <h3>TAGS</h3>
                    <div style={{marginTop:'26px'}}>
                        <div style={{display:'flex', marginTop:'-36px', gap:'3px', alignItems:'center'}}>
                            <p className="word-one">blogroll</p><p className="word-two">daily</p><p className="word-three">dialog</p>
                            <p className="word-four">gallery</p><p className="word-five">journal</p><p className="word-six">link</p>
                            <p className="word-seven">motion</p><p className="eight">music</p>
                        </div>
                        <div style={{display:'flex', marginTop:'-56px', gap:'3px', alignItems:'center'}}>
                            <p className="nine">photo</p>
                            <p className="ten">professional</p><p className="eleven">quotation</p><p className="twelve">show</p><p className="thirteen">sound</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="box-information-2">
            <div style={{display:'block'}} className="content-information-text-hygge">
                <img src={IMG.img_hygge} className="img-title-hygge"/>
                <span className="text-content-hygge">
                    Aenean lacinia bibendum nulla sed leo posuere erat a ante 
                    venenatis dapibus posuere velit aliquet. Donec ullamcorper metus auctor 
                    fringi. Nullam quis risus.
                </span>
            </div>

            <div>
                <div style={{borderBottom:'1px solid grey'}}>
                    <h4 style={{fontWeight:'bold', color:'white'}}>POPULAR POSTS</h4>
                    <p style={{color:'rgb(212, 206, 206)', marginTop:'-12px'}}>Vivamus sagittis lacus vel augue metus</p>
                    <div style={{display:'flex', fontSize:'12px', color:'grey', marginTop:'-11px', marginLeft:'-3px'}}><img style={{height:'16px', width:'16px'}} src={IMG.img_clock}/>
                    <p style={{marginTop:'0px'}}>3th Oct 2012</p></div>
                </div>
                
                <div>
                    <p style={{color:'rgb(212, 206, 206)'}}>Scelerisque nisl consectetur et</p>
                    <div style={{display:'flex', fontSize:'12px', color:'grey', marginTop:'-11px', marginLeft:'-3px'}}><img style={{height:'16px', width:'16px'}} src={IMG.img_clock}/>
                    <p style={{marginTop:'0px'}}>28th Sep 2012</p></div>
                </div>
            </div>
            <div>
                    <h4 style={{color:'white'}}>GET IN TOUCH</h4>
                    <p style={{color:'rgb(212, 206, 206)', marginTop:'-12px', width:'290px'}}>Fusce dapibus, tellus commodo, tortor mauris condimentum utellus fermentum.</p>
                    <div>
                        <span style={{display:'flex', marginLeft:'-7px'}}>
                            <img style={{height:'23px', width:'21px'}} src={IMG.img_loc}/><p style={{marginTop:'0px',color:'rgb(212, 206, 206)'}}>Moonshine St. 14/05 Light City</p>
                        </span>
                        <span style={{display:'flex', marginLeft:'-7px', marginTop:'-12px'}}>
                            <img style={{height:'23px', width:'21px'}} src={IMG.img_phone}/><p style={{marginTop:'0px',color:'rgb(212, 206, 206)'}}>+00 (123) 456 78 90</p>
                        </span>
                        <span style={{display:'flex', marginLeft:'-7px', marginTop:'-12px'}}>
                            <img style={{height:'23px', width:'21px'}} src={IMG.img_email}/><p style={{marginTop:'0px',color:'rgb(212, 206, 206)'}} className="email-text">first.last@email.com</p>
                        </span>
                    </div>
                </div>
                <div className="list-information-work">
                    <h4 style={{color:'white'}}>CATEGORIES</h4>
                    <ul style={{marginLeft:'-23px', marginTop:'-6px', color:'rgb(212, 206, 206)'}}>
                        <li className="li-web-design">Web Design (21)</li>
                        <li className="li-photography">Photography (19)</li>
                        <li className="li-graphic-design">Graphic Design (16)</li>
                        <li className="li-manipulation">Manipulation (15)</li>
                        <li className="li-graphic-motion">Motion Graphics (12)</li>
                    </ul>
                </div>
            </div>

        <div className="box-information-3">
                <span style={{marginTop:'20px',color:'rgb(212, 206, 206)'}}>© 2015 Hygge. All rights reserved. Theme by elemis.</span>
                <span style={{display:'flex', alignItems:'center',gap:'30px',color:'rgb(212, 206, 206)'}}><h5>HOME</h5> <p>|</p> <h5>ABOUT</h5> <p>|</p> <h5>PORTFOLIO</h5> <p>|</p> <h5>BLOG</h5> <p>|</p> <h5>CONTACT</h5></span>
        </div>
    </div>
}

export default Footer;