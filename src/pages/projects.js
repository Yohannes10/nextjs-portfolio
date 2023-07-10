import React, { useEffect, useState } from "react";
import Layout from "../components/layout";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from GitHub API
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Yohannes10/repos"
        );
        const data = await response.json();

        // Filter and format project data
        const formattedProjects = data
          .filter((project) => !project.fork) // Exclude forked projects
          .map((project) => ({
            id: project.id,
            name: project.name,
            description: project.description,
            language: project.language,
            url: project.html_url,
            imagePath: `/images/${project.name}.jpg`, // speccify image path based on  folder structure
          }));

        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Layout>
      <div>
        <h1>Projects</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <div className="project-item">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img src={project.imagePath} alt={project.name} />
                </a>
                <div className="project-info">
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <div className="language">{project.language}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Styles */}
        <style jsx>{`
          .project-item {
            display: flex;
            align-items: center;
          }

          .project-item img {
            width: 100px;
            height: auto;
          }

          .project-info {
            margin-left: 20px;
          }

          .language {
            display: inline-block;
            margin-top: 5px;
            padding: 5px 8px;
            background-color: #f2f2f2;
            border-radius: 5px;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Projects;
