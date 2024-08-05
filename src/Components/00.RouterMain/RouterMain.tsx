import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectManagementPanel from "../02.Projects/ProjectManagement";
import TaskManagementPanel from "../03.Tasks/TaskManagement";
export function RouterMain(){
    return(
        <Router>
            <Routes>
                <Route path="/Projects" element={<ProjectManagementPanel/>}></Route>
                <Route path="/Tasks" element={<TaskManagementPanel/>}></Route>
            </Routes>
        </Router>
    )
}
