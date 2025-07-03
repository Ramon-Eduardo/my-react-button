import './App.css'
import { ButtonCustom } from './componentes/Button'

function App() {
   function trocarFundo() {
        document.body.classList.toggle('fundo-alternativo');
    }
    function alert1 () {
      alert("teste")
    }
  return (
    <>
        <ButtonCustom onClick={trocarFundo}/>
        <ButtonCustom onClick={alert1}/>
    </>
  )
}

export default App
