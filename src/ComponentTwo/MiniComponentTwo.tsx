import ArrayObjectsInfo from "./ArrCircle";
import './style/Component_Two.css';
function MCT(){
    return<div style={{width:'1000px', marginInline:'auto', marginTop:'66px', display:'flex',position:'relative'}}>
    {
        ArrayObjectsInfo.map(el=>{
            return <div key={el.id} style={{
            backgroundColor:`${el.color}`,
            height:'266px',
            width:'266px',
            borderRadius:'180px',
            textAlign:'center',
            opacity:'.5',
            position:'absolute',
            color:'white',
        }} className={el.id}><h3 style={{marginTop:'116px'}}>{el.title}</h3></div>
        })
    }
    </div>
}

export default MCT;