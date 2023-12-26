import IMG from "../src";

function ComponentThree(){
    return<div style={{marginTop:'105px', width:'1519px', height:'500px', backgroundImage:`url(${IMG.img_bg_black})`}}>
        <img style={{marginLeft:'240px', marginTop:'87px'}} src={IMG.img_pages}/>
    </div>
}

export default ComponentThree;