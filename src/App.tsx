import './App.css';
import ContentOne from './ContentWithHeader/Content_one';
import ComponentTwo from './ComponentTwo/ComponentTwo';
import ComponentThree from './ComponentThree/ComponentThree';
import ComponentFour from './ComponentFour/ComponentFour';
import ComponentFive from './ComponentFive/ComponentFive';
import ComponentSix from './ComponentSix/ComponentSix';
import GoogleMap from './ComponentSeven/GoogleMap';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container-part-one">
          <ContentOne/>
          <ComponentTwo/>
          <ComponentThree/>
          <ComponentFour/>
      </div>
      <div className="container-part-two">
          <ComponentFive/>
      </div>
      <div className="container-part-three">
          <ComponentSix/>
          <GoogleMap/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
