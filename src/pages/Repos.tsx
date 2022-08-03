import { Link } from 'react-router-dom';
import { useRepositories } from '../hooks/useRepositories';

export function Repos() {
  const {repositories, isFetching, error} = useRepositories()

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

