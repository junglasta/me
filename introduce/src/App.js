import Header from './component/Hd';
import Footer from './component/Ft';
import Portfolioswiper from './component/Portfolioswiper';
import Preinterview from './component/Preinterview';
import Ability from './component/Ability';
import About from './component/About';
import Contact from './component/Contact';
import Thumbimg from './component/Thumbimg';

function App() {
  return (
    <div className="App" id="top">
      <Header></Header>
      <Ability></Ability>
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
