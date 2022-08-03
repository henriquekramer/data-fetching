import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

export interface Repository {
  name: string;
  description: string;
}

function useRepositories(){
  return useQuery<Repository[], Error>(['repos'], async () => {
    const response = await axios.get('https://api.github.com/users/henriquekraer/repos')
    return response.data
  })
}

export function Repos() {
  const { data: repositories, isFetching, status, error} = useRepositories()

  return (
    <div>
      <h1>Lista de Repositórios</h1>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <ul>
              {repositories?.map(repo => {
                return (
                  <li key={repo.name}>
                    <Link to={`repos/${repo.name}`}>REPOSITÓRIO - {repo.name}</Link>
                    <p>Descrição: {repo.description}</p>
                  </li>            
                )
              })}
            </ul>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  )
}

