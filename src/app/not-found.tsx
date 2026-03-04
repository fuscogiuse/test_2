import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Pagina non trovata
      </h2>
      <p className="text-gray-600 mb-8">
        La pagina che stai cercando non esiste o &egrave; stata spostata.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
      >
        Torna alla home
      </Link>
    </div>
  );
}
