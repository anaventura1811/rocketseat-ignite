import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0); // Primeiro importar o hook e desestruturar em variavel e funcao

  function increment() {
    setCounter(counter + 1); // depois chamar a função definida com useState pra alterar o estado
  }

  return (
    <div>
      <h2>{ counter }</h2>
      <button type="button" onClick={ increment }>Increment</button>
    </div>
  )
}