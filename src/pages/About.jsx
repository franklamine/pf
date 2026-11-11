import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { competences } from "../data/data-competences";

function About() {
  return (
    <main className="md:ml-[16.6667%] p-1 md:pr-0">
      {/* Présentation */}
      <section className="py-5 mx-5">
        <h1 className="text-4xl md:text-5xl font-bold text-left mt-20 md:mt-0">
          Découvrez qui je suis
        </h1>

        <p className="mt-5 text-lg leading-relaxed">
          Je suis développeur Full-Stack passionné par la conception et le
          développement d'applications web modernes, performantes et sécurisées.
          Je travaille principalement avec Java, Spring Boot et Spring Security
          pour concevoir des solutions backend robustes, notamment des API REST,
          des systèmes d'authentification et de gestion des accès. Côté
          frontend, j'utilise React.js et JavaScript pour créer des interfaces
          interactives, intuitives et responsives.
          <br />
          <br />
          Mon environnement technique s'étend également aux bases de données
          relationnelles et NoSQL, aux technologies Cloud et aux outils DevOps
          tels que Docker et GitHub Actions. Grâce à ma formation en
          administration et sécurité des réseaux ainsi qu'à mon expérience
          professionnelle en informatique, je possède une vision globale du
          développement, de l'infrastructure et de la sécurité des systèmes.
          <br />
          <br />
          Curieux, autonome et toujours désireux d'apprendre, j'aime relever des
          défis techniques, explorer de nouvelles technologies et transformer
          des idées en solutions numériques concrètes.
        </p>

        <div className="mt-8 flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-500 text-lg" />
          <span className="font-medium">Québec, Canada</span>
          <div className="flex-grow border-t-2 border-dashed border-slate-400 ml-3"></div>
        </div>
      </section>

      {/* Compétences techniques */}
      <section className="py-8 mx-5">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ma boîte à outils technologiques
        </h2>

        <p className="mt-4 leading-relaxed">
          Je m'appuie sur un ensemble de technologies complémentaires pour
          intervenir sur différentes étapes du cycle de vie d'une application :
          de la conception du backend et des interfaces utilisateur à la gestion
          des données, la sécurisation et le déploiement des solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {competences.map((competence, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-400/40 p-5 hover:border-blue-500/70 transition duration-300"
            >
              <h3 className="text-xl font-bold">{competence.titre}</h3>

              <p className="mt-3 text-sm leading-relaxed opacity-80">
                {competence.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {competence.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1.5 rounded-lg border border-slate-400/40 hover:border-blue-500 hover:text-blue-500 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
          <div className="hidden md:flex flex-grow border-t-2 border-dashed border-slate-400"></div>

          <NavLink
            to="/projects"
            className="w-full md:w-auto flex items-center justify-center gap-2 border rounded-xl px-5 py-3 hover:bg-slate-700 hover:text-blue-500 hover:border-transparent transition duration-200"
          >
            Voir mes réalisations
            <FaArrowRight />
          </NavLink>
        </div>
      </section>

      

      {/* Expérience et formation */}
      <section className="py-8 mx-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Expérience professionnelle en premier */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Expérience professionnelle
            </h2>

            <div className="mt-7 flex flex-col gap-7">
              <div className="border-l-2 border-blue-500 pl-5">
                <p className="text-xl font-bold">Technicien en informatique</p>
                <p className="text-blue-500 font-medium mt-1">
                  Ministère des Ressources naturelles et des Forêts
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  Québec | 2025 - En cours
                </p>
              </div>

              <div className="border-l-2 border-slate-400 pl-5">
                <p className="text-xl font-bold">
                  Technicien en informatique
                </p>
                <p className="text-blue-500 font-medium mt-1">
                  Matrix Telecom, Cameroun
                </p>
                <p className="text-sm text-slate-500 mt-1">2022</p>
              </div>

              <div className="border-l-2 border-slate-400 pl-5">
                <p className="text-xl font-bold">
                  Technicien en informatique
                </p>
                <p className="text-blue-500 font-medium mt-1">
                  Univers Binaire, Cameroun
                </p>
                <p className="text-sm text-slate-500 mt-1">2017</p>
              </div>
            </div>
          </div>

          {/* Formation académique en deuxième */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Formation académique
            </h2>

            <div className="mt-7 flex flex-col gap-7">
              <div className="border-l-2 border-blue-500 pl-5">
                <p className="text-xl font-bold">
                  DEC en Techniques de l'informatique
                </p>
                <p className="mt-2">Cégep Limoilou, Québec</p>
                <p className="text-sm text-slate-500 mt-1">2024 - En cours</p>
              </div>

              <div className="border-l-2 border-slate-400 pl-5">
                <p className="text-xl font-bold">
                  Résultat d'évaluation comparative Québec
                </p>
                <p className="mt-2">Baccalauréat en informatique</p>
                <p className="text-sm text-slate-500 mt-1">2026</p>
              </div>

              <div className="border-l-2 border-slate-400 pl-5">
                <p className="text-xl font-bold">
                  Résultat d'évaluation comparative Québec
                </p>
                <p className="mt-2">DEC en Techniques de l'informatique</p>
                <p className="text-sm text-slate-500 mt-1">2026</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-slate-400 mt-10"></div>
      </section>

      {/* Langues et intérêts */}
      <section className="py-8 mx-5">
        <h2 className="text-3xl md:text-4xl font-bold">
          Au-delà du développement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-xl font-bold">Langues</h3>
            <p className="mt-3">Français : courant</p>
            <p className="mt-2">Anglais : intermédiaire</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Centres d'intérêt</h3>
            <p className="mt-3 leading-relaxed">
              Développement logiciel, nouvelles technologies, cybersécurité,
              recherche technologique, vélo, natation, football et escrime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-10 mt-16 mx-5">
        <NavLink
          to="/contact"
          className="text-3xl md:text-7xl font-bold hover:text-blue-500 transition duration-300"
        >
          Vous avez un projet ?
        </NavLink>
      </section>
    </main>
  );
}

export default About;
