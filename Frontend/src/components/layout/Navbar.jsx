import { FiMenu, FiSearch } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { getPageMeta } from '../../constants/navigation';

function Navbar() {
  const location = useLocation();
  const meta = getPageMeta(location.pathname);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="flex items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 xl:hidden"
          aria-label="Open navigation"
        >
          <FiMenu />
        </button>

        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/70">MarketMind AI</p>
          <h2 className="truncate text-xl font-semibold text-white">{meta.title}</h2>
          <p className="truncate text-sm text-slate-400">{meta.description}</p>
        </div>

        <div className="hidden max-w-sm flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-400 md:flex">
          <FiSearch className="shrink-0" />
          <span className="text-sm">Search products, uploads, or inventory...</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;