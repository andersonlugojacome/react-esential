import React, { Component } from 'react';


//es en funcion
const ContadorClass = () => {
    const [contador, setContador] = React.useState(0);

    const incrementar = () => {
        setContador(contador + 1)
    };
    const decrementar = () => {
        setContador(contador - 1)
    };

    return (
        <>
            <div>
                <h1>Contador</h1>
                <p>Contador: {contador}</p>
                <button onClick={incrementar}>Sumar</button>
                <button onClick={decrementar}>Restar</button>
            </div>
        </>)

}



// //es en class
// class ContadorClass extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             contador: 0,
//         }
//     }


//     incrementar = () => {
//         this.setState({ contador: this.state.contador + 1 })
//     }
//     decrementar = () => {
//         this.setState({ contador: this.state.contador - 1 })
//     }
//     render() {
//         const { contador } = this.state;
//         return (

//             <div>
//                 <h1>Contador</h1>
//                 <p>Contador: {contador}</p>
//                 <button onClick={this.incrementar}>Sumar</button>
//                 <button onClick={this.decrementar}>Restar</button>
//             </div>
//         )
//     }
// }
export default ContadorClass;