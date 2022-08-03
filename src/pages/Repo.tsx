import { Link, useParams } from "react-router-dom"
import { useRepositories } from "../hooks/useRepositories"

export function Repo(){
  const { repoName } = useParams()
  const { repositories } = useRepositories()

  const repositoryInfo = repositories.filter(repo => repo.name === repoName)

  return (
    <>
      {repositoryInfo.length > 0 && ( 
        <div className="repoInfos">
          <h3>Nome do Repositório - {repositoryInfo[0].name}</h3>
          <p>Descrição: {repositoryInfo[0].description}</p>
          <Link to={'/'} className="backButton"> Voltar </Link>
        </div>
      )}
    </>
  )
}