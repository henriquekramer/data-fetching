import { useParams } from "react-router-dom"
import { useRepositoriesContext } from "../context/RepositoriesContext"

export function Repo(){
  const { repoName } = useParams()
  const { repositories } = useRepositoriesContext()

  const repositoryInfo = repositories?.filter(repo => repo.name === repoName)
  console.log(repositoryInfo);

  return (
    <>
      {repositoryInfo.length > 0 && ( 
        <>
          <h1>{repositoryInfo[0].name}</h1>
          <p>{repositoryInfo[0].description}</p>
        </>
      )}
    </>
  )
}