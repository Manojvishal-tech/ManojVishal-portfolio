import React from "react";
import {
  FaJava,
  FaReact,
  FaAngular,
  FaDocker,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiJirasoftware,
  SiKubernetes,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiRedis,
} from "react-icons/si";

export const Skills = () => {
  const skills = [
    { icon: <FaJava size={50} />, name: "Java" },
    { icon: <SiSpringboot size={50} />, name: "Spring Boot" },
    { icon: <FaReact size={50} />, name: "React" },
    { icon: <FaAngular size={50} />, name: "Angular" },
    { icon: <SiTypescript size={50} />, name: "TypeScript" },
    { icon: <SiJavascript size={50} />, name: "JavaScript" },
    { icon: <FaDocker size={50} />, name: "Docker" },
    { icon: <SiKubernetes size={50} />, name: "Kubernetes" },
    { icon: <FaAws size={50} />, name: "AWS" },
    { icon: <FaGitAlt size={50} />, name: "Git" },
    { icon: <SiMongodb size={50} />, name: "MongoDB" },
    { icon: <SiPostgresql size={50} />, name: "PostgreSQL" },
    { icon: <SiGraphql size={50} />, name: "GraphQL" },
    { icon: <SiRedis size={50} />, name: "Redis" },
    { icon: <SiJirasoftware size={50} />, name: "Jira" },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] text-white text-center">
      <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        My Technical Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 px-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-[#111] p-4 rounded-lg transition duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:text-blue-400"
          >
            {skill.icon}
            <span className="mt-2 text-sm font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
