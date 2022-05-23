import { useEffect, useState } from "react";

type Repository ={
  full_name: string;
  description: string;
}

export function App() {
  const [repositiores, setRepositiores] = useState<Repository[]>([]);

  useEffect(() => {  // useEffect é uma função que é executada sempre que o componente é renderizado
    fetch("https://api.github.com/users/werlleson/repos")
      .then(response => response.json()) 
      .then(data => {
        setRepositiores(data)  // setRepositiores é uma função que recebe um array de repositórios  
      });
  }, []);

  return (
      <ul>
        {repositiores.map(repo => {          
          
          return(
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          )
          })}
      </ul>
  )
}
