import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { NextPage } from 'next';
import ProjectsList from '../../components/ProjectsList';

const ProjectsPage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <main id="home" className="py-10 bg-transparent h-screen flex flex-col">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold about-me-text mt-4 mb-4">My Most Recent Projects</h1>
          <div className="about-me-bg mb-4 p-6 shadow sm:rounded-lg">
            <ProjectsList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;

