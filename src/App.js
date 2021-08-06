import './styles/css/index.css'
import Cabecalho from './components/header/header.js'
import PrimeiraSection from './components/section1/section1.js'
import SegundaSection from './components/section2/section2.js'
import TerceiraSection from './components/section3/section3.js'
import QuartaSection from './components/section4/section4'
import QuintaSection from './components/section5/section5.js'
import SextaSection from './components/section6/section6.js'
import SetimaSection from './components/section7/section7.js'
import Footer from './components/footer/footer.js'
import Modal from './components/modal/modal.js'

function App() {

  return (
    <> 
      <Cabecalho/> 
      <PrimeiraSection/>
      <SegundaSection/>
      <TerceiraSection/>
      <QuartaSection/>
      <QuintaSection/>
      <SextaSection/>
      <SetimaSection/>
      <Footer/>
      <Modal/>
    </>
  );
}



export default App
