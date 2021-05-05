import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState } from 'react';

// https://api.github.com/users/anaventura1811/repos
const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export default function RepositoryList() {
  const [] = useState([]) // sempre que é uma lista, começar o vetor do estado com array vazio

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}