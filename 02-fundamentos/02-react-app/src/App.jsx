import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  //Cuando se no se usa state no se actualiza el DOM automaticamente.
  const nombre = "Carlos";
  let contador = 50;
  const disminuir = () =>{
    contador--;
    console.log(contador);
  };
  const aumentar = () =>{
    contador++;
    console.log(contador);
  };

  
  //Cuando se utiliza state se actualiza automaticamente
  const estado = useState(10); //usestate permite renderizar automaticamente el dom
  const [contador2,setContador2] = useState(50); //usestate permite renderizar automaticamente el dom
  const disminuir2 = () =>{
    setContador2(contador2-1);
    console.log(contador2);
  };

  const aumentar2 = () =>{
    setContador2(contador2+1);
    console.log(contador2);
  };

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} width="250" className="logo react" alt="React logo" />
          {/* <h1>{nombre.toUpperCase()}</h1>
          <h1>{new Date().getFullYear()}</h1>
          <pre>{new Date().toDateString()}</pre> */}
        </a>
          {/* Si no se utiliza usestate la variable cambia de valor pero no se renderiza automaticamente. */}
          <div>
            <button onClick={disminuir}>-</button>
            <h2>{contador}</h2>
            <button onClick={aumentar}>+</button>

          </div>
          <div>
            <button onClick={disminuir2}>-</button>
            <h2>{contador2}</h2>
            <button onClick={aumentar2}>+</button>
          </div>
      </div>
     
    </div>
  )
}

export default App
