import MCT from "./MiniComponentTwo";

function ComponentTwo(){
    return<div>
        <div style={{
            width:'400px',
            marginInline:'auto',
            marginTop:'96px',
            textAlign:'center',
            fontSize:'19px'
            }}>
            <h3 style={{
                color:'rgb(66, 46, 46)'
            }}>PROCESS MODEL</h3>
            <p style={{
                color:'grey',
                fontFamily:'Arial'
            }}>our process on creating awesome projects</p>
        </div>
        <MCT/>
        <p style={{
            width:'1000px', 
            textAlign:'center', 
            marginInline:'auto', 
            marginTop:'300px',
            color:'grey', 
            fontFamily:'Arial',
            lineHeight:'21px'
            }}>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. 
            Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Aenean eu leo quam. 
            Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh. 
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. 
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </p>
    </div>
}

export default ComponentTwo;