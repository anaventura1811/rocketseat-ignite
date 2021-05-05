import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0); // Primeiro importar o hook e desestruturar em variavel e função

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

// imutabilidade - variável nunca vai ter seu valor alterado, não pode alterar diretamente o conteúdo 
// sobre inclusão de itens em arrays - não usar o push
// imutabilidade - conceito de estado do React
// para alterar array é sempre preciso criar um novo array, usar spread operator e adicionar novo
// item ao final
