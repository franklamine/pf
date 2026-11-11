import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { projets } from "../data/data-project";
import { avisClients } from "../data/avisClients";
import { technologies } from "../data/data-logo-techno";

function Home() {
  // Dupliquer les avis pour l'animation continue
  const avisAnimes = [...avisClients, ...avisClients];

  return (
    <main className="md:ml-[16.6667%] p-1 md:pr-0">
      {/*session about me*/}
      <section className=" py-10 mx-5">
        <h1 className="text-5xl font-bold text-left mt-14 md:mt-0">
          Salut, je m'appelle Frank.
        </h1>
        <p className="mt-4 text-left text-xl">
          Développeur full-stack passionné, je conçois des applications web
          modernes et robustes à l'aide de React, Spring Boot et Laravel. <br />{" "}
          De la conception de l'interface à la gestion des bases de données, je
          maîtrise l'intégralité du cycle de développement.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
          {/* Localisation + séparateur */}
          <div className="flex items-center w-full md:w-auto flex-1">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <FaMapMarkerAlt className="text-blue-500 text-lg" />
              <span className="font-medium">Québec, Canada</span>
            </div>
            <div className="flex-grow border-t-2 border-dashed border-slate-400 ml-4"></div>
          </div>

          {/* Bouton responsive */}
          <button className="w-full md:w-auto mt-8 md:mt-0 flex items-center justify-center gap-2 border rounded-xl px-4 py-2 hover:bg-slate-700 hover:text-blue-500 hover:border-transparent transition duration-200">
            <NavLink to="/about" className="font-medium">
              À propos de moi
            </NavLink>
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Section projets */}
      <section className="pb-10 mx-5">
        <h2 className="text-3xl font-bold text-left mt-8 md:mt-0">
          Projets récents
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {projets.slice(0, 2).map((projet) => (
            <div
              key={projet.id}
              className="group rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform duration-500"
            >
              <div className="w-full h-96 bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src={projet.image}
                  alt={projet.titre}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{projet.titre}</h3>

                <p className="text-sm mb-4">{projet.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-slate-700 text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {projet.lien ? (
                  <a
                    href={projet.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline flex items-center gap-2 font-medium"
                  >
                    Voir le projet
                    <FaArrowRight className="group-hover:animate-flecheGaucheDroite" />
                  </a>
                ) : (
                  <NavLink
                    to="/projects"
                    className="text-blue-500 hover:underline flex items-center gap-2 font-medium"
                  >
                    En savoir plus
                    <FaArrowRight className="group-hover:animate-flecheGaucheDroite" />
                  </NavLink>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="hidden md:flex flex-grow border-t-2 border-dashed border-slate-400"></div>

          <button className="w-full md:w-auto mt-8 md:mt-0 flex items-center justify-center gap-2 border rounded-xl px-4 py-2 hover:bg-slate-700 hover:text-blue-500 hover:border-transparent transition duration-200">
            <NavLink to="/projects" className="font-medium">
              Voir tous les projets
            </NavLink>
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* session avis clients */}
      <section className="pb-10 mx-5">
        <h2 className="text-3xl font-bold text-left mt-8 md:mt-0">
          Avis des clients
        </h2>

        <div className="relative mt-6 w-full overflow-hidden rounded-xl">
          {/* Bande animée */}
          <div className="flex gap-6 animate-scrollX h-96">
            {avisAnimes.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="min-w-80 bg-slate-800 rounded-xl shadow-md p-5 flex flex-col justify-between"
              >
                {/* Profil client */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={client.photo}
                      alt={client.nom}
                      className="w-14 h-14 rounded-full object-cover border-2 border-slate-500 shrink-0"
                      onError={(e) => {
                        e.currentTarget.src = "/images/clients/default.jpg";
                      }}
                    />

                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-white truncate">
                        {client.nom}
                      </h3>

                      <div className="text-yellow-400 text-lg tracking-wider">
                        {"★".repeat(client.note)}
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="mb-4">
                    <span className="text-xs bg-slate-700 text-slate-200 px-3 py-1 rounded-full">
                      Avis client
                    </span>
                  </div>

                  {/* Témoignage */}
                  <p className="text-sm leading-relaxed text-slate-200">
                    "{client.avis}"
                  </p>
                </div>

                {/* Pied de carte */}
                <div className="border-t border-slate-600 pt-3 mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{client.date}</span>

                  <span className="text-green-400 text-xs font-medium">
                    ✓ Client satisfait
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-grow border-t-2 border-dashed border-slate-400 mt-8"></div>
      </section>

      {/* Section Technologies */}
      <section className="pb-10 mx-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-3xl font-bold">Technologies</h2>

            <p className="text-sm text-slate-400 mt-2">
              Les technologies et outils que j'utilise dans mes projets.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center md:justify-between gap-5 bg-slate-800/60 border border-slate-700 rounded-xl px-5 py-6">
          {technologies.map((tech) => (
            <NavLink
              key={tech.nom}
              to="/stack"
              title={tech.nom}
              aria-label={`Découvrir ${tech.nom}`}
              className="group flex items-center justify-center w-14 h-14 rounded-xl hover:bg-slate-700 hover:-translate-y-1 transition duration-300"
            >
              {tech.logo ? (
                <img
                  src={tech.logo}
                  alt={tech.nom}
                  title={tech.nom}
                  loading="lazy"
                  className="w-9 h-9 md:w-11 md:h-11 object-contain"
                />
              ) : (
                <span
                  className="text-xs font-bold text-blue-400"
                  title={tech.nom}
                >
                  CI/CD
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row  items-center justify-center gap-4    ">
          <div className="flex-grow  border-t-2 border-dashed border-slate-400"></div>
          <button className="w-full md:w-auto flex items-center justify-center gap-2 border rounded-xl px-4 py-2 hover:bg-slate-700 hover:text-blue-500 hover:border-transparent transition duration-200">
            <NavLink to="/stack" className="font-medium">
              Voir toutes les technologies
            </NavLink>
            <FaArrowRight />
          </button>
        </div>
      </section>

      <section className="mb-10 mx-5">
        <NavLink to="/contact" className="text-3xl md:text-8xl">
          Vous avez un projet ?
        </NavLink>
      </section>
    </main>
  );
}

export default Home;
