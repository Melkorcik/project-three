import './style/ComponentSix.css';
import Logos from './Logos';

function ComponentSix(){
    return<>
        <div className="container-seven">
            <h2  style={{color:'rgb(66, 46, 46)'}}>OUR CLIENTS</h2>
            <p style={{color:'grey', fontFamily:'Arial'}}>companies we worked with</p>
        </div>
        <Logos/>        
    </>
}

export default ComponentSix;