import { useFetch } from "./hooks/useFetch";

interface Repository {
  full_name: string;
  description: string;
}

export function App() {
  const { data: repositories, error, isFetching } = 
    useFetch<Repository[]>('users/henriquekramer/repos')

  return (
    <ul>
      { isFetching && <p>Carregando...</p> }
      { error && <p>{`Error: ${error.message}`}</p> }
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

