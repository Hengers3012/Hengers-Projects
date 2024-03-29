/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <footer>
      <div className="widgets_wrapper bg-gray-500 text-white">
        <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="column one-fourth">
            <aside className="widget_text widget widget_custom_html"></aside>
          </div>
          <div className="column one-fourth">
            <aside className="widget widget_block">
              <h5>Enlaces de interés</h5>
              <br />
              <ul>
                <li>
                  <a href="/about" target="_blank">
                    Empresa
                  </a>
                </li>
                <li>
                  <a href="/preguntas-frecuentes" target="_blank">
                    Preguntas frecuentes
                  </a>
                </li>
                <li>
                  <a href="mailto:busquedas@elixircars.com" target="_blank">
                    ¿Quieres trabajar con nostros?
                  </a>
                </li>
                <li>
                  <a href="/arrepentimiento" target="_blank">
                    Formulario
                  </a>
                </li>
              </ul>
            </aside>
          </div>
          <div className="column one-fourth">
            <aside className="widget_text widget widget_custom_html">
              <div className="textwidget custom-html-widget">
                <h5>Enlaces de interés</h5>
                <br />
                <ul>
                  <li>
                    <a href="/terminos-y-condiciones-de-uso/" target="_blank">
                      Términos y Condiciones
                    </a>
                  </li>
                  <li>
                    <a href="/politica-privacidad/" target="_blank">
                      Política de privacidad
                    </a>
                  </li>
                  <li>
                    <a href="/terminos-y-condiciones-de-uso/" target="_blank">
                      Cookies
                    </a>
                  </li>
                  <li>
                    <a href="https://outlook.office.com/mail/" target="_blank">
                      Acceso empleados
                    </a>
                  </li>
                  <li>
                    <a
                      href="/atencion-publicaciones-fraudulentas/"
                      target="_blank"
                    >
                      Atención a publicaciones fraudulentas
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="widget_text widget widget_custom_html flex justify-center">
            <aside className="widget_text widget widget_custom_html">
              <div className="textwidget custom-html-widget">
                <a
                  href="http://qr.afip.gob.ar/?qr=TXIfi4ZgHPHLJcmO2azGzA,,"
                  target="_F9GOAFIPINfo"
                  rel="noopener"
                >
                  <img
                    src="https://www.carone.com.ar/wp-content/uploads/2023/05/DATAWEB.jpeg"
                    width={100}
                    height={100}
                    alt="Nuestro logo"
                  />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <div className="Redes_sociales">
        <div className="widget_text widget widget_custom_html flex justify-center bg-sky-500 text-white border-t border-white border-opacity-25 border-2">
          <div className="column one">
            {/* <h2 className="text-lg font-semibold">Redes Sociales</h2> */}
            <ul className="mt-4 -mb-4 flex space-x-4">
              <li className="">
                <a href="https://es-la.facebook.com/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="w-8 h-8"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="w-8 h-8"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://gmail.com" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 496 512"
                    className="w-8 h-8"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
              </li>
            </ul>
            <br />
          </div>
        </div>
        <div className="text-center bg-sky-700 text-white">
          © 2023 Hengers Rosario. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
