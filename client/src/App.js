import "./App.css";
import Layout from "./components/shared/Layout";
import { Route, Routes } from "react-router-dom";
import AdminAllProjects from "./adminprojects/AdminAllProjects";
import AdminAddProject from "./adminprojects/AdminAddProject";
import AdminEditProject from "./adminprojects/AdminEditProject";
import Cohort from "./cohorts/Cohort";
import User from "./users/User";

function App() {
  return (
    <>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<AdminAllProjects />}></Route>
            <Route path="/add" element={<AdminAddProject />}></Route>
            <Route path="/edit/:id" element={<AdminEditProject />}></Route>
            <Route path="/cohort" element={<Cohort />}></Route>
            <Route path = "/user"  element ={<User/>}></Route>
          </Routes>
        </Layout>
      </div>
    </>
  );
}
export default App;