//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import MiBoton from './components/MiBoton'

 import ContadorClass from './components/ContadorClass'

 import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
//import ComponentC from './components/ComponentC'


function App() {
  //const [count, setCount] = useState(0)
const miEmoji = '👋'
const miTitulo = 'Hola Mundo'
const miTextoBtn = 'Buscar'
const manejarClick = () => {
  alert("Hola Mundo en compoment Parent");
};
  return (
    <>

    <div>
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
{/* <MiBoton texto='Asi se llama el botón'/> */}

<ContadorClass/>
<ComponentA
emoji={miEmoji} 
title={miTitulo} />
<ComponentB textBtn={miTextoBtn}
onClick={manejarClick}
/>
{/* <ComponentC/> */}

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React con DigitalesWeb</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
