import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, ReactNode, useContext } from "react";

interface Repository {
  name: string;
  description: string;
}

interface RepositoriesContextType {
  repositories: Repository[] 
  isFetching: boolean
  error: Error | null
}

interface RepositoriesContextProviderProps {
  children: ReactNode
}

const RepositoriesContext = createContext({} as RepositoriesContextType)

export function RepositoriesContextProvider({ children}: RepositoriesContextProviderProps){
  const { data: repositories, isFetching, error} = useQuery<Repository[], Error>(['repos'], async () => {
    const response = await axios.get('https://api.github.com/users/henriquekramer/repos')

    return response.data
  })

  return (
    <RepositoriesContext.Provider 
    value={{
      repositories: repositories ? repositories : [], 
      isFetching, 
      error }}
    >
      {children}
    </ RepositoriesContext.Provider>
  )
}

export function useRepositories(){
  return useContext(RepositoriesContext)
}
