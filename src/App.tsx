import { BrowserRouter } from "react-router-dom";
import { RepositoriesContextProvider } from "./context/RepositoriesContext";
import { Router } from "./Router";

export function App(){
  return (
    <RepositoriesContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RepositoriesContextProvider>
  )
}
