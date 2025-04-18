import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <RevealOnScroll>
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate Java Full Stack Developer with 5+ years of experience
              in designing, developing, and deploying scalable and secure
              applications. I specialize in building robust RESTful and GraphQL
              APIs using Java, Spring Boot, and Spring MVC. I have expertise in
              deploying containerized microservices on Azure Kubernetes Service
              (AKS) and implementing automated CI/CD workflows with Docker and
              Jenkins. I'm adept at ensuring high code quality, leveraging Redis
              for caching, and MongoDB for efficient data storage. I also have a
              strong background in security, compliance, and monitoring systems
              for seamless, secure, and scalable software solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🎓 Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong> Master in Data Science </strong> Duquesne
                    University, USA (2022-2024)
                  </li>
                  <li>
                    <strong> Bachelor in Computer Science </strong> JNTUH, India
                    (2016-2020)
                  </li>
                  <li>Relevant Coursework: Database, Web Development...</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Full Stack Developer at Morgan Stanley (2023 - Present)
                    </h4>
                    <p>
                      Developed and maintained secure RESTful and GraphQL APIs
                      for financial applications, deployed microservices on
                      Azure Kubernetes, and automated CI/CD pipelines using
                      Docker and Jenkins, achieving improved deployment time and
                      system reliability.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Full Stack Developer at Cognizant (2020 - 2022)
                    </h4>
                    <p>
                      Led the development of healthcare applications with a
                      focus on RESTful APIs, microservices, security with Spring
                      Security, and integrating HL7 and FHIR standards for data
                      exchange. Utilized Docker for containerization and CI/CD
                      with Jenkins for seamless deployment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Java Developer at Accenture (2018 - 2020)
                    </h4>
                    <p>
                      Designed and implemented scalable microservices using
                      Spring Boot, optimized SQL queries for high-performance
                      transactions, and utilized Elasticsearch and Redis for
                      caching and real-time log monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
