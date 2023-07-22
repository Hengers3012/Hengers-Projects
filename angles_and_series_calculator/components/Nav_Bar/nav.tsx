export default function Nav() {
  return (
    <main>
      <header
        id="landing-header"
        className="py-4 px-10 flex item-center top-0 w-full justify-between bg-neutral-700 border-b-[5px] border-green-600"
      >
        <nav className="flex flex-grow justify-center">
          <ul className="flex [&>li>a]:inline-block [&>li>a]:px-8 [&>li>a]:py-2 [&>li>a]:text-slate-50 text-xl">
            <li>
              <a href="/">
                Beta para un controlador bidireccional de CA con carga RL
              </a>
            </li>

            <li>
              <a href="/error-404">Otros...</a>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
