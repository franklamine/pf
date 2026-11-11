import { FaArrowRight } from "react-icons/fa";
import { projets } from "../data/data-project";

function Project() {
  return (
    <main className="md:ml-[16.6667%] p-1 md:pr-0">
      {/* Titre */}
      <div className="md:py-14 mx-5">
        <h1 className="text-4xl md:text-5xl font-bold text-left mb-14 mt-20 md:mt-0">
          Mes projets
        </h1>
      </div>

      {/* Grille des projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 mx-5">
        {projets.map((projet, index) => (
          <div
            key={index}
            className="group rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform duration-500"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={projet.image}
                alt={projet.titre}
                className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Informations du projet */}
            <div className="p-5 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h3 className="text-xl font-semibold">{projet.titre}</h3>

                <span className="text-xs px-3 py-1 rounded-full border border-current/30 opacity-80">
                  {projet.statut}
                </span>
              </div>

              <p className="text-sm leading-7 opacity-90 mb-5">
                {projet.description}
              </p>

              {/* Technologies utilisées */}
              <div className="mb-5">
                <h4 className="text-sm font-semibold mb-3">
                  Technologies utilisées
                </h4>

                <div className="flex flex-wrap gap-2">
                  {projet.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-md border border-current/20 opacity-80 hover:opacity-100 transition-opacity duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lien ou restriction */}
              {projet.lien ? (
                <a
                  href={projet.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline inline-flex items-center gap-2 font-medium mt-2"
                >
                  Voir le projet
                  <FaArrowRight className="group-hover:animate-flecheGaucheDroite" />
                </a>
              ) : (
                <p className="text-xs leading-6 opacity-60 italic border-t border-current/10 pt-4">
                  {projet.restriction}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Project;
