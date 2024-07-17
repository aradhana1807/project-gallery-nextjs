/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkSimpleHorizontal } from "phosphor-react";

export default function ProjectPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/aradhana1807/project-gallery-assets/main/data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const sortedProjects = data.data.sort((a, b) => b.id - a.id);
        setProjects(sortedProjects);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto p-10  md:p-4 justify-center place-items-center">
      {projects.map((project, i) => (
        // <ProjectCard key={project.id} project={project} />

        <motion.div
          key={project.id}
          project={project}
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className="flex flex-col gap-4 border-2 shadow-xl mt-2 p-4 rounded-lg items-center justify-center sm:w-2/3 md:w-full lg:w-full dark:bg-neutral-800"
        >
          <img
            src={project["project-img"]}
            alt={project["project-title"]}
            className="w-full rounded-lg object-cover "
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{project["project-title"]}</h1>
            <p>{project["project-description"]}</p>
            <p className="flex gap-2 text-sm text-red-600">
              <Link
                href={project["project-url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkSimpleHorizontal
                  size={25}
                  className="cursor-pointer transform hover:scale-125 transition duration-300 hover:text-red-500"
                />
              </Link>
            </p>
          </div>
        </motion.div>
      ))}
    </main>
  );
}
