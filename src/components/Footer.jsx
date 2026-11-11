
import {FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaFacebook} from "react-icons/fa";
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-slate-900 py-12 px-8 w-full">
            {/* Décalage du contenu uniquement, pas du footer complet */}
            <div className="ml-0 md:ml-[16.6667%]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white">

                    {/* À propos */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Découvrez qui je suis</h3>
                        <p className="text-sm leading-relaxed">
                            Développeur full-stack passionné, je crée des expériences web modernes, accessibles et performantes.
                        </p>
                    </div>

                    {/* Liens utiles */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
                        <ul className="space-y-2 text-sm">
                            <li><NavLink to="/" className="hover:text-blue-500 transition">Accueil</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-blue-500 transition">À propos</NavLink></li>
                            <li><NavLink to="/projects" className="hover:text-blue-500 transition">Projets</NavLink></li>
                            <li><NavLink to="/stack" className="hover:text-blue-500 transition">Technologies</NavLink></li>
                            <li><NavLink to="/contact" className="hover:text-blue-500 transition">Contact</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact & Réseaux */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <NavLink to="mailto:fokamfranklamine@gmail.com" className="text-sm hover:text-blue-500 transition duration-500">fokamfranklamine@gmail.com</NavLink>
                        <div className="flex space-x-6 text-xl mt-5">
                            <NavLink to="https://github.com/franklamine/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-500"><FaGithub /></NavLink>
                            <NavLink to="https://www.linkedin.com/in/frank-lamine-202b72286/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-500"><FaLinkedin /></NavLink>
                            <NavLink to="mailto:fokamfranklamine@gmail.com" aria-label="Courriel" className="hover:text-blue-500 transition duration-500"><FaEnvelope /></NavLink>
                            <NavLink to="https://x.com/franklaminedev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-500"><FaTwitter /></NavLink>
                            <NavLink to="https://www.facebook.com/dieny.romeo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-500"><FaFacebook /></NavLink>
                        </div>
                    </div>
                </div>

                {/* Copyright centré */}
                <div className="mt-10 border-t border-slate-700 pt-6 text-center text-xs text-slate-500 select-none">
                    © Copyright 2024. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
