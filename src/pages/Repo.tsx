import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios";
import { Link, useParams } from "react-router-dom"
import { Repository } from "./Repos";

const getRepositoryByName = async (repoName:string) => {
  const response = await axios.get(
    `https://api.github.com/repos/henriquekramer/${repoName}`
  );
  return response.data
}

function useRepository(repoName: string){
  return useQuery(['repo', repoName], ()=> getRepositoryByName(repoName), {
    enabled: !!repoName,
  })
}

export function Repo(){
  const { repoName } = useParams()
  // const queryClient = useQueryClient();
  // const repositories = queryClient.getQueryData<Repository[]>(['repos'])
  // const repositoryInfo = repositories!.filter(repo => repo.name === repoName)

  const { data: repository } = useRepository(repoName!)

  return (
    <>
      { repository && (
        <div className="repoInfos">
        <h3>Nome do Repositório - {repository.name}</h3>
        <p>Descrição: {repository.description}</p>
        <Link to={'/'} className="backButton"> Voltar </Link>
        </div>
      )}
    </>
  )
}