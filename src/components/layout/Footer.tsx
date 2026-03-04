import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Officine Italia
            </h3>
            <p className="text-sm">
              Directory B2B italiana per lavorazioni meccaniche e officine CNC.
              Trova le migliori aziende del settore metalmeccanico in Italia.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Settori</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/lavorazioni-meccaniche"
                  className="hover:text-white transition"
                >
                  Lavorazioni Meccaniche
                </Link>
              </li>
              <li>
                <Link
                  href="/lavorazioni-cnc"
                  className="hover:text-white transition"
                >
                  Lavorazioni CNC
                </Link>
              </li>
              <li>
                <Link
                  href="/torneria"
                  className="hover:text-white transition"
                >
                  Torneria
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Informazioni</h4>
            <p className="text-sm mb-4">
              Un progetto di{" "}
              <a
                href="https://solid.example.com"
                className="text-blue-400 hover:text-blue-300 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solid
              </a>
            </p>
            <p className="text-sm">
              Costruiamo siti e sistemi digitali per aziende B2B industriali.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Officine Italia. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
