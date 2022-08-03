import { BrowserRouter } from "react-router-dom";
import { RepositoriesContextProvider } from "./hooks/useRepositories";
import { Router } from "./Router";
import "./App.css";

export function App(){
  return (
    <RepositoriesContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RepositoriesContextProvider>
  )
}
