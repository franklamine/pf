import { NavLink } from "react-router-dom";
import { useState } from "react";
import { stacks } from "../data/dataStack";



// Composant pour afficher les logos avec une solution de secours
function TechLogo({ tech }) {
  const [erreur, setErreur] = useState(false);

  return (
    <div
      className={`w-16 h-16 rounded-xl ${tech.fondLogo || "bg-slate-700"} flex items-center justify-center p-3 shrink-0`}
    >
      {tech.logo && !erreur ? (
        <img
          src={tech.logo}
          alt={`Logo ${tech.nom}`}
          className="w-full h-full object-contain"
          loading="lazy"
          onError={() => setErreur(true)}
        />
      ) : (
        <span className="text-sm font-bold text-blue-400 text-center">
          {tech.initiales}
        </span>
      )}
    </div>
  );
}

function Stack() {
  return (
    <main className="md:ml-[16.6667%] p-1 md:pr-0">
      {/* En-tête conservé comme dans ta version initiale */}
      <div className="py-20 mx-5">
        <h1 className="text-4xl md:text-5xl font-bold text-left mb-14">
          Ma boîte à outils technologiques
        </h1>

        <NavLink to="/contact" className="text-3xl md:text-8xl">
          Vous avez un projet ?
        </NavLink>
      </div>

      {/* Technologies */}
      <section className="mx-5 pb-10">
        <div className="flex flex-col gap-12">
          {stacks.map((stack, index) => (
            <div key={stack.categorie}>
              {/* Titre du bloc */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  <span className="text-blue-500 mr-3">0{index + 1}.</span>
                  {stack.categorie}
                </h2>

                <p className="text-sm text-slate-400 max-w-3xl">
                  {stack.description}
                </p>
              </div>

              {/* 4 technologies par ligne sur grand écran */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stack.technologies.map((tech) => (
                  <div
                    key={tech.nom}
                    className="group bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-transparent hover:border-blue-500/50 hover:-translate-y-1 transition duration-300"
                  >
                    <div className="p-6 flex flex-col h-full">
                      {/* Logo et nom */}
                      <div className="flex items-center gap-4 mb-5">
                        <TechLogo tech={tech} />

                        <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
                          {tech.nom}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed flex-grow min-h-16">
                        {tech.description}
                      </p>

                      {/* Lien officiel */}
                      <div className="border-t border-slate-700 mt-5 pt-4">
                        <a
                          href={tech.lien}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition"
                        >
                          Découvrir la technologie
                          <span>↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mx-5 mt-10 mb-16">
        <div className="bg-slate-800 rounded-xl shadow-md p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Un projet en tête ?
          </h2>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed mb-8">
            Vous souhaitez développer une application, créer un site web ou
            mettre en place une infrastructure informatique ? Discutons de votre
            projet.
          </p>

          <NavLink
            to="/contact"
            className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-700 text-white rounded-xl px-6 py-3 font-semibold transition duration-200"
          >
            Me contacter
            <span>→</span>
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default Stack;
