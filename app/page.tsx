import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { StatCard } from "@/components/stat-card"
import { StatusCodeChart } from "@/components/status-code-chart"
import { RequestTypeChart } from "@/components/request-type-chart"
import { AttackTypeChart } from "@/components/attack-type-chart"
import { SecurityLevelChart } from "@/components/security-level-chart"
import { AttackThreatCard } from "@/components/attack-threat-card"
import { TopAttacksChart } from "@/components/top-attacks-chart"
import { AttackByIpChart } from "@/components/attack-by-ip-chart"
import { SecurityLogTable } from "@/components/security-log-table"
import { Activity, ShieldAlert, Swords } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <DashboardHeader />
      <DashboardSidebar />

      <main className="ml-64 p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          <h1 className="text-2xl font-bold">Security Overview</h1>

          <div className="grid gap-4 md:grid-cols-3">
            <StatCard title="Normal Traffic" value={326} icon={Activity} trend="neutral" />
            <StatCard title="Rule Violations" value={0} icon={ShieldAlert} trend="neutral" />
            <StatCard title="Attack Attempts" value={127} icon={Swords} trend="neutral" />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <StatusCodeChart />
            <RequestTypeChart />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <AttackTypeChart />
            <SecurityLevelChart />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <AttackThreatCard />
            <TopAttacksChart />
          </div>

          <div className="grid gap-4">
            <AttackByIpChart />
          </div>

          <div className="grid gap-4">
            <SecurityLogTable />
          </div>
        </div>
      </main>
    </div>
  )
}
