import Header from './component/Hd';
import Footer from './component/Ft';
import Portfolioswiper from './component/Portfolioswiper';
import Preinterview from './component/Preinterview';
import Ability from './component/Ability';
import About from './component/About';
import Contact from './component/Contact';
import Thumbimg from './component/Thumbimg';
import {useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [nodejson, updatenodejson] = useState("아직 안옴");

  useEffect(()=>{
    axios.get('http://localhost:5000/about').then((res)=>{
      console.log(res.data.title);
      updatenodejson(res.data.title);
    })
  }, [])

  return (
    <div className="App" id="top">
      <Header></Header>
      <Ability></Ability>
      <h1>{nodejson}</h1>
      <About></About>
      <Portfolioswiper leng="kr"></Portfolioswiper>
      <Preinterview contentid="pre-interview" leng="kr" objnm="predb1" title="먼저 답하기"></Preinterview>
      <Contact></Contact>
      <Thumbimg></Thumbimg>
      <Footer></Footer>
    </div>
  );
}

export default App;
