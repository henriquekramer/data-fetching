import { Link } from 'react-router-dom';
import { useRepositoriesContext } from '../context/RepositoriesContext';

export function Repos() {
  const {repositories, isFetching, error} = useRepositoriesContext()

  return (
    <ul>
      { isFetching && <p>Carregando...</p> }
      { error && <p>{`An error has occurred: ${error.message}`}</p>}

      { repositories?.map(repo => {
        return (
          <li key={repo.name}>
            <Link to={`repos/${repo.name}`} >
              {repo.name}
            </Link>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

