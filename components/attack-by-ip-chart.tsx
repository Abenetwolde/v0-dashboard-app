"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pie, PieChart, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const attackByIpData = [
  { name: "192.168.1.100", value: 35, color: "hsl(var(--chart-1))" },
  { name: "10.0.0.45", value: 28, color: "hsl(var(--chart-2))" },
  { name: "172.16.0.88", value: 22, color: "hsl(var(--chart-3))" },
  { name: "192.168.2.15", value: 18, color: "hsl(var(--chart-4))" },
  { name: "10.10.10.50", value: 14, color: "hsl(var(--chart-5))" },
  { name: "Others", value: 10, color: "hsl(var(--muted))" },
]

export function AttackByIpChart() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Attack by IP Address</CardTitle>
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
                data={attackByIpData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {attackByIpData.map((entry, index) => (
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
