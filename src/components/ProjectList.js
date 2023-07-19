import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => { 
           const names= project.name;
           const abouts = project.about;
           const technologiess = project.technologies;
           return (
           <ProjectItem name={names} about={abouts} technologies={technologiess} key={project.id}/>
           )
        })}

      </div>
    </div>
  );
}

export default ProjectList;
