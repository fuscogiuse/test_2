export function CTABanner() {
  return (
    <section className="bg-blue-700 text-white py-10 px-6 text-center rounded-2xl my-12 mx-4 sm:mx-0">
      <h3 className="text-2xl sm:text-3xl font-bold mb-3">
        Vuoi pi&ugrave; clienti per la tua azienda industriale?
      </h3>
      <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
        Costruiamo siti e sistemi SEO per aziende B2B. Fai crescere la tua
        presenza online con Solid.
      </p>
      <a
        href="https://solid.example.com"
        className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        Scopri Solid &rarr;
      </a>
    </section>
  );
}
