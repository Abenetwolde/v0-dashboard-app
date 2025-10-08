"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pie, PieChart, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const topAttacksData = [
  { name: "192.168.1.100", value: 28, color: "hsl(var(--chart-1))" },
  { name: "10.0.0.45", value: 22, color: "hsl(var(--chart-2))" },
  { name: "172.16.0.88", value: 18, color: "hsl(var(--chart-3))" },
  { name: "192.168.2.15", value: 15, color: "hsl(var(--chart-4))" },
  { name: "10.10.10.50", value: 12, color: "hsl(var(--chart-5))" },
  { name: "172.20.1.99", value: 10, color: "hsl(265 70% 60%)" },
  { name: "192.168.5.77", value: 8, color: "hsl(160 70% 60%)" },
  { name: "10.5.5.33", value: 6, color: "hsl(70 70% 60%)" },
  { name: "172.18.0.22", value: 5, color: "hsl(305 70% 60%)" },
  { name: "192.168.8.44", value: 3, color: "hsl(15 70% 60%)" },
]

export function TopAttacksChart() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Top 10 Attack Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            attacks: {
              label: "Attacks",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={topAttacksData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {topAttacksData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
