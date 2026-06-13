import { Outlet, NavLink } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

const navItems = [
  { to: '/problems', label: 'Problems' },
  { to: '/progress', label: 'Progress' },
  { to: '/system-design', label: 'System Design' },
];

export default function Layout() {
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-800 bg-slate-900 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-bold text-brand-500 tracking-tight">ProCompanion</span>
          <nav className="flex gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-600 text-white'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-400">{user?.name}</span>
            <button
              onClick={logout}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
