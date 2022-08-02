import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
interface Repository {
  full_name: string;
  description: string;
}

export function App() {
  const { data: repositories, isFetching, error} = useQuery<Repository[], Error>(['repos'], async () => {
    const response = await axios.get('https://api.github.com/users/henriquekramer/repos')

    return response.data
  }, {
    // refetchOnWindowFocus: false,
  })

  return (
    <ul>
      { isFetching && <p>Carregando...</p> }
      { error && <p>{`An error has occurred: ${error.message}`}</p>}
      { repositories?.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

