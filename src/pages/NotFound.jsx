
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-900 text-white px-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-6">Oups ! Page introuvable.</p>
            <p className="text-slate-400 mb-8 max-w-md">
                La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <Link
                to="/"
                className="flex items-center gap-2 border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition"
            >
                <FaArrowLeft />
                Retour à l'accueil
            </Link>
        </div>
    );
}

export default NotFound;
