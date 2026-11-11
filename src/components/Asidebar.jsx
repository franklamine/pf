
import {
    FaBars,
    FaEnvelope, FaFacebook, FaFolderOpen, FaHome, FaInstagram, FaLinkedin, FaTimes, FaTools, FaTwitter, FaUser
} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

function Asidebar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Écoute les changements de taille de fenêtre
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Déclenche une fois au montage

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav
            className="fixed z-50 w-full md:w-1/6 md:h-screen bg-slate-700 p-2 md:p-5  font-bold  border-r-2 flex flex-col justify-between">

            {/* Bouton de menu pour mobile */}
            {isMobile && (
                <div className="flex items-center justify-between md:hidden h-auto">
                <div className="flex items-center gap-5">
                    <img className="rounded-2xl w-12 h-12" src="logo2.png" alt="logo"/>
                    <p className="bg-blue-500 rounded text-center mt-2 p-2 whitespace-nowrap overflow-hidden">Disponible
                        pour vos projets</p>
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes className="text-2xl text-white"/> : <FaBars className="text-2xl text-white"/>}
                </button>
            </div>
            )}

            {/* Logo + Statut */}
            <div className="hidden md:block">
                <img className="rounded-2xl" src="logo2.png" alt="logo"/>
                <p className="bg-blue-500 rounded text-center mt-2 whitespace-nowrap overflow-hidden">Disponible pour vos
                    projets</p>
            </div>

            {/* Liens de navigation */}
            <div className={`mt-5 ml-5 flex-col gap-5 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
                <NavLink to="/"
                         onClick={() => setMenuOpen(false)}
                         className={({isActive}) => isActive ? "flex items-center gap-5 bg-blue-500 rounded p-2" : "flex items-center gap-5 hover:text-blue-500"}>
                    <FaHome/> <span className={`${menuOpen ? "inline" : "hidden lg:inline"}`}>Accueil</span>
                </NavLink>
                <NavLink to="/about"
                         onClick={() => setMenuOpen(false)}
                         className={({isActive}) => isActive ? "flex items-center gap-5 bg-blue-500 rounded p-2" : "flex items-center gap-5 hover:text-blue-500"}>
                    <FaUser/> <span className={`${menuOpen ? "inline" : "hidden lg:inline"}`}>À propos</span>
                </NavLink>
                <NavLink to="/projects"
                         onClick={() => setMenuOpen(false)}
                         className={({isActive}) => isActive ? "flex items-center gap-5 bg-blue-500 rounded p-2" : "flex items-center gap-5 hover:text-blue-500"}>
                    <FaFolderOpen/> <span className={`${menuOpen ? "inline" : "hidden lg:inline"}`}>Projets</span>
                </NavLink>
                <NavLink to="/stack"
                         onClick={() => setMenuOpen(false)}
                         className={({isActive}) => isActive ? "flex items-center gap-5 bg-blue-500 rounded p-2" : "flex items-center gap-5 hover:text-blue-500"}>
                    <FaTools/> <span className={`${menuOpen ? "inline" : "hidden lg:inline"}`}>Technologies</span>
                </NavLink>
                <NavLink to="/contact"
                         onClick={() => setMenuOpen(false)}
                         className={({isActive}) => isActive ? "flex items-center gap-5 bg-blue-500 rounded p-2" : "flex items-center gap-5 hover:text-blue-500"}>
                    <FaEnvelope/> <span className={`${menuOpen ? "inline" : "hidden lg:inline"}`}>Contact</span>
                </NavLink>
            </div>

            {/* Icônes des réseaux sociaux */}
            <div
                className={` items-center justify-around gap-5 mt-5 lg:mt-auto mb-5 ${menuOpen ? 'flex flex-row' : 'hidden md:flex md:flex-col lg:flex-row'}`}>
                <FaTwitter className="hover:text-blue-500"/>
                <FaLinkedin className="hover:text-blue-500"/>
                <FaInstagram className="hover:text-blue-500"/>
                <FaFacebook className="hover:text-blue-500"/>
            </div>

        </nav>
    )
}

export default Asidebar
