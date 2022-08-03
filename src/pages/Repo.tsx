import { useQuery } from "@tanstack/react-query"
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
  return useQuery<Repository, Error>(['repo', repoName], ()=> getRepositoryByName(repoName), {
    enabled: !!repoName,
  })
}

export function Repo(){
  const { repoName } = useParams()

  const { data: repository, isFetching, status, error } = useRepository(repoName!)

  return (
    <div>
      {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            {repository && (
              <div className="repoInfos">
              <h3>Nome do Repositório - {repository.name}</h3>
              <p>Descrição: {repository.description}</p>
              <Link to={'/'} className="backButton"> Voltar </Link>
              </div>
            )}
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
         )
      } 

    </div>
  )
}