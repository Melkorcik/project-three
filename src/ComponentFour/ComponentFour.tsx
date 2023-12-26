import Animate_blocks from "./Animate_blocks";
import './style/CssFour.css';

function ComponentFour(){
    return<div style={{marginTop:'105px'}}>
        <div style={{marginInline:'auto', width:'470px', textAlign:'center'}}>
            <h2 style={{color:'rgb(66, 46, 46)'}}>THE PRODUCT GALLERY</h2>
            <p style={{color:'grey', fontFamily:'Arial'}}>awesome products prepared with creative ideas and great design</p>
        </div>
        <Animate_blocks/>
    </div>
}

export default ComponentFour;