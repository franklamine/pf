import {FaArrowRight, FaMapMarkerAlt} from "react-icons/fa";
import {NavLink} from "react-router-dom";

function Home() {
    return (
        <main className="md:ml-[16.6667%] p-1 md:pr-0">

            {/*session about me*/}
            <section className=" py-10 mx-5">
                <h1 className="text-5xl font-bold text-left mt-14 md:mt-0">Salut, je m'appelle Frank.</h1>
                <p className="mt-4 text-left text-xl">
                  
263
Développeur full-stack passionné, je conçois des applications web modernes et robustes
à l'aide de React, Spring Boot et Laravel. <br/> De la conception de l'interface à la gestion des bases de données,
je maîtrise l'intégralité du cycle de développement.
                </p>

                <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
                    {/* Localisation + séparateur */}
                    <div className="flex items-center w-full md:w-auto flex-1">
                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <FaMapMarkerAlt className="text-blue-500 text-lg"/>
                            <span className="font-medium">Québec, Canada</span>
                        </div>
                        <div className="flex-grow border-t-2 border-dashed border-slate-400 ml-4"></div>
                    </div>

                    {/* Bouton responsive */}
                    <button
                        className="w-full md:w-auto mt-8 md:mt-0 flex items-center justify-center gap-2 border rounded-xl px-4 py-2 hover:bg-slate-700 hover:text-blue-500 hover:border-transparent transition duration-200"
                    >
                        <NavLink to="/about" className="font-medium">About me</NavLink>
                        <FaArrowRight/>
                    </button>
                </div>

            </section>

            {/*session projects*/}
            <section className="pb-10 mx-5">
                <h2 className="text-3xl font-bold text-left mt-8 md:mt-0">Recent projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                    {/* Project Card */}
                    <div
                        className="group rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform duration-500">
                        <img src="logo3.png" alt="project" className="w-full h-96 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Another Project</h3>
                            <p className="text-sm  mb-4">
                                Another quick summary or highlight of the project’s goals or technologies.
                            </p>
                            <NavLink to="#"
                                     className="text-blue-500 hover:underline flex items-center gap-2 font-medium">
                                View project <FaArrowRight className="group-hover:animate-flecheGaucheDroite"/>
                            </NavLink>
                        </div>
                    </div>

                    {/* Duplicate this block for more cards */}
                    <div
                        className="group rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform duration-500">
                        <img src="logo1.png" alt="project" className="w-full h-96 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Another Project</h3>
                            <p className="text-sm  mb-4">
                                Another quick summary or highlight of the project’s goals or technologies.
                            </p>
                            <NavLink to="#"
                                     className="text-blue-500 hover:underline flex items-center gap-2 font-medium">
                                View project <FaArrowRight className="group-hover:animate-flecheGaucheDroite"/>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row  items-center justify-center gap-4    ">
                    <div className="hidden md:flex flex-grow  border-t-2 border-dashed border-slate-400"></div>
                    <button
                        className="w-full md:w-auto mt-8 md:mt-0 flex items-center justify-center gap-2 border rounded-xl px-4 py-2 hover:bg-slate-700 hover:text-blue-500 hover:border-transparent transition duration-200">
                        <NavLink to="/projects" className="font-medium">See all projects</NavLink>
                        <FaArrowRight/>
                    </button>
                </div>
            </section>

            {/*session avis clients*/}
            <section className="pb-10 mx-5 ">
                <h2 className="text-3xl font-bold text-left mt-8 md:mt-0">Customer Reviews</h2>

                <div className="relative mt-6 w-full overflow-hidden rounded-xl ">

                    {/* Bande animée */}
                    <div className="flex gap-6 animate-scrollX h-96">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className="min-w-80 bg-slate-800 rounded-xl shadow-md p-4"
                            >
                                <h3 className="text-lg font-semibold mb-2">Client #{index + 1}</h3>
                                <p className="text-sm ">
                                    "Super expérience, travail très professionnel. Je recommande à 100% !"
                                </p>
                            </div>
                        ))}

                        {/* Dupliquer le contenu une deuxième fois */}
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={`clone-${index}`}
                                className="min-w-80 mx-3 bg-slate-800 rounded-xl shadow-md p-4"
                            >
                                <h3 className="text-lg font-semibold mb-2 ">Client #{index + 1}</h3>
                                <p className="text-sm ">
                                    "Super expérience, travail très professionnel. Je recommande à 100% !"
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

                <div className="hidden md:flex flex-grow  border-t-2 border-dashed border-slate-400 mt-8"></div>

            </section>

            {/*session stack*/}
            <section className="pb-10 mx-5">
                <h2 className="text-3xl font-bold text-left mt-8 md:mt-0">Stack</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

                    {/* Project Card */}
                    <div
                        className="group rounded-xl shadow-lg overflow-hidden bg-slate-800">
                        <div className="p-4 ">
                            <h3 className="text-xl font-semibold mb-2">Another Project</h3>
                            <p className="text-sm  mb-4">
                                Another quick summary or highlight of the project’s goals or technologies.
                            </p>
                        </div>
                    </div>

                    {/* Duplicate this block for more cards */}
                    <div
                        className="group rounded-xl shadow-lg overflow-hidden bg-slate-800">
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Another Project</h3>
                            <p className="text-sm  mb-4">
                                Another quick summary or highlight of the project’s goals or technologies.
                            </p>
                        </div>
                    </div>

                    {/* Duplicate this block for more cards */}
                    <div
                        className="group rounded-xl shadow-lg overflow-hidden bg-slate-800">
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Another Project</h3>
                            <p className="text-sm  mb-4">
                                Another quick summary or highlight of the project’s goals or technologies.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="mt-8 flex flex-col md:flex-row  items-center justify-center gap-4    ">
                    <div className="flex-grow  border-t-2 border-dashed border-slate-400"></div>
                    <button
                        className="w-full md:w-auto flex items-center justify-center gap-2 border rounded-xl px-4 py-2 hover:bg-slate-700 hover:text-blue-500 hover:border-transparent transition duration-200">
                        <NavLink to="/stack" className="font-medium">See all stack</NavLink>
                        <FaArrowRight/>
                    </button>
                </div>
            </section>

            <section className="mb-10 mx-5">
            <NavLink to="/contact" className="text-3xl md:text-8xl">Do you have a project?</NavLink>
            </section>
        </main>
    );
}


export default Home;
