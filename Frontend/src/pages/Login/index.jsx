import { FiArrowRight, FiShield, FiTrendingUp } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

function LoginPage() {
  const navigate = useNavigate();
  usePageTitle('Login');

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-6">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Infosys Springboard Internship
          </span>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Build a smarter retail control room with MarketMind AI.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              This project sets up the front-end foundation for a production-ready retail analytics
              experience using React, Vite, Tailwind CSS, and React Router.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="glass-panel rounded-3xl p-5">
              <FiTrendingUp className="text-2xl text-cyan-300" />
              <p className="mt-4 text-sm text-slate-400">Analytics-first UI</p>
            </div>
            <div className="glass-panel rounded-3xl p-5">
              <FiShield className="text-2xl text-emerald-300" />
              <p className="mt-4 text-sm text-slate-400">Structured components</p>
            </div>
            <div className="glass-panel rounded-3xl p-5">
              <FiArrowRight className="text-2xl text-amber-300" />
              <p className="mt-4 text-sm text-slate-400">Scalable routing</p>
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Login</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Access the dashboard</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Placeholder auth UI for the internship project. Backend integration will be added in
              later phases.
            </p>
          </div>

          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              navigate('/dashboard');
            }}
          >
            <Input label="Email address" type="email" placeholder="student@marketmind.ai" />
            <Input label="Password" type="password" placeholder="Enter your password" />
            <div className="flex items-center justify-between text-sm text-slate-400">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-900" />
                Remember me
              </label>
              <button type="button" className="text-cyan-300 transition hover:text-cyan-200">
                Forgot password?
              </button>
            </div>

            <Button type="submit" className="w-full">
              Continue to dashboard
            </Button>
          </form>

          <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-4 text-sm text-cyan-100/90">
            Mock credentials only. No backend connection is active yet.
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;