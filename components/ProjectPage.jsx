/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";


export default  function ProjectPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/aradhana1807/project-gallery-assets/main/data.json')
      .then(response => response.json())
      .then(data => {

        const sortedProjects = data.data.sort((a, b) => b.id - a.id);
        setProjects(sortedProjects);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto p-2 mt-5 justify-center place-items-center'>
      {projects.map((project, i) => (
        // <ProjectCard key={project.id} project={project} />

        <motion.div
          key={project.id}
          project={project}
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className='flex flex-col gap-4 border-2 border-r-4 border-b-4 border-zinc-900 shadow-md p-4 rounded-lg items-center justify-center sm:w-2/3 md:w-full lg:w-full'>
          <img
            src={project['project-img']}
            alt={project['project-title']} className='w-full rounded-lg object-cover '
          />
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold'>{project['project-title']}</h1>
            <p>
              {project['project-description']}
            </p>
            <p className="text-sm text-red-600 underline underline-offset-4"><Link href={project['project-url']} target="_blank" rel="noopener noreferrer">View</Link></p>
          </div>
        </motion.div>
      ))}
    </main>
  )
}
