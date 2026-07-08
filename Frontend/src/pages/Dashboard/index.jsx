import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { FiActivity, FiCreditCard, FiPackage, FiUsers } from 'react-icons/fi';
import { usePageTitle } from '../../hooks/usePageTitle';
import SectionCard from '../../components/common/SectionCard';
import StatCard from '../../components/common/StatCard';

const chartData = [
  { name: 'Mon', revenue: 12000 },
  { name: 'Tue', revenue: 19000 },
  { name: 'Wed', revenue: 16500 },
  { name: 'Thu', revenue: 24000 },
  { name: 'Fri', revenue: 27800 },
  { name: 'Sat', revenue: 22600 },
  { name: 'Sun', revenue: 30100 },
];

const activityItems = [
  'Inventory sync completed for 148 products.',
  'New upload batch prepared for validation.',
  'Revenue trend is up 18% compared to last week.',
  'Low-stock items flagged for follow-up.',
];

function DashboardPage() {
  usePageTitle('Dashboard');

  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Revenue" value="$124.8K" helper="+12.4% from last week" />
        <StatCard label="Active Products" value="1,248" helper="28 new items added" accent="emerald" />
        <StatCard label="Pending Uploads" value="14" helper="Files queued for review" accent="amber" />
        <StatCard label="User Sessions" value="3,982" helper="Tracked across channels" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
        <SectionCard title="Revenue trend" subtitle="Mock weekly performance for the internship demo.">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(15, 23, 42, 0.96)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    color: '#fff',
                  }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#22d3ee" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Recent activity" subtitle="Static updates to frame the workflow.">
          <ul className="space-y-4">
            {activityItems.map((item, index) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </li>
            ))}
          </ul>
        </SectionCard>
      </section>

      <SectionCard title="Quick metrics" subtitle="A compact snapshot of important signals.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <FiActivity className="text-xl text-cyan-300" />
            <p className="mt-4 text-sm text-slate-400">Order velocity</p>
            <p className="mt-1 text-2xl font-semibold text-white">92%</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <FiCreditCard className="text-xl text-emerald-300" />
            <p className="mt-4 text-sm text-slate-400">Conversion rate</p>
            <p className="mt-1 text-2xl font-semibold text-white">4.8%</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <FiPackage className="text-xl text-amber-300" />
            <p className="mt-4 text-sm text-slate-400">Stock coverage</p>
            <p className="mt-1 text-2xl font-semibold text-white">36 days</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <FiUsers className="text-xl text-fuchsia-300" />
            <p className="mt-4 text-sm text-slate-400">Returning users</p>
            <p className="mt-1 text-2xl font-semibold text-white">68%</p>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}

export default DashboardPage;