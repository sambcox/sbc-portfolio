'use client'
import React, { useEffect, useState } from 'react';
import { getRecentProjects } from '../utils/githubAPI';

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getRecentProjects();
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map((project) => (
        <div key={project.id} className="p-4 bg-gray-100 rounded-md transition-colors duration-300 hover:bg-gray-200">
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-blue-500">
            <h2 className="text-xl font-bold">{project.name}</h2>
          </a>
          <p className="text-gray-700">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;