import { NavLink } from 'react-router-dom';
import { FiBarChart2, FiBox, FiUploadCloud, FiLogIn } from 'react-icons/fi';
import { NAV_ITEMS } from '../../constants/navigation';
import { cn } from '../../utils/classNames';

const iconMap = {
  dashboard: FiBarChart2,
  upload: FiUploadCloud,
  inventory: FiBox,
  login: FiLogIn,
};

function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-slate-950/80 px-5 py-6 backdrop-blur xl:flex xl:flex-col">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/20">
          <span className="text-lg font-semibold">M</span>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">MarketMind AI</p>
          <h1 className="text-lg font-semibold text-white">Internship Dashboard</h1>
        </div>
      </div>

      <nav className="space-y-2">
        {NAV_ITEMS.map((item) => {
          const Icon = iconMap[item.icon] ?? FiBarChart2;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-400/20'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white',
                )
              }
            >
              <Icon className="text-lg" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
        <p className="font-medium text-white">Project foundation</p>
        <p className="mt-2 leading-6 text-slate-300">
          Static navigation and responsive layout foundation for the MarketMind AI frontend.
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;