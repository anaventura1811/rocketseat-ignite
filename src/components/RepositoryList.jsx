import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from 'react';

// https://api.github.com/users/anaventura1811/repos

// Hooks React:  sobre useEffect --> serve pra disparar uma função quando algo acontecer na minha aplicação

export default function RepositoryList() {
  const [repositories, setRepositories] = useState([]) // sempre que é uma lista, começar o vetor do estado com array vazio
  
  useEffect(() => {
    fetch('https://api.github.com/users/anaventura1811/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);   
  
  console.log(repositories);
  // recebe dois parâmetros: 1)função e 2)quando executar/dependências -- info que, quando mudarem, useEffect tem que executar
  // se eu passo um array vazio, essa funcao só executa uma única vez

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => ( <RepositoryItem key={repository.name} repository={repository} /> ))}
       
      </ul>
    </section>
  )
}