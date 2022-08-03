import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

export interface Repository {
  name: string;
  description: string;
}

function useRepositories(){
  return useQuery<Repository[], Error>(['repos'], async () => {
    const response = await axios.get('https://api.github.com/users/henriquekramer/repos')
    return response.data
  })
}

export function Repos() {
  const { data: repositories, isFetching, error} = useRepositories()

  return (
    <ul>
      { isFetching && <p>Carregando...</p> }
      { error && <p>{`An error has occurred: ${error.message}`}</p>}

      { repositories?.map(repo => {
        return (
          <li key={repo.name}>
            <Link to={`repos/${repo.name}`}>REPOSITÓRIO - {repo.name}</Link>
            <p>Descrição: {repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

