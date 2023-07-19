import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {technologies.map((element, index) => (
          <span key={index}>{element}</span>
        ))}
          
      </div>
    </div>
  );
}

export default ProjectItem;
