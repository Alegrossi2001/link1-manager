
import { useState } from "react"
import ProjectAppBar, {  } from "./AddProject"
import ProjectDetails from "./ProjectDetails";

export default function ProjectManagementPanel(){
    
    const [currentProject, SetCurrentProject] = useState<string>("No project Selected");
    const onAddProject = () : void => {console.log(currentProject, "ADD PROJECT")}
    const OnGoBack = () : void => {console.log(currentProject, "GO BACK")}


    return(
        <>
            <ProjectAppBar currentProject={currentProject} onAddNewProject={onAddProject} onGoBack={OnGoBack}></ProjectAppBar>
            <ProjectDetails></ProjectDetails>
      


        </>
    )
}