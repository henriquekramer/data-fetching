import { Route, Routes } from "react-router-dom";
import { Repo } from "./pages/Repo";
import { Repos } from "./pages/Repos";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<Repos />} />
      <Route path="/repos/:repoName" element={<Repo />} />
    </Routes>
  )
}