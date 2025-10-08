"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pie, PieChart, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const attackTypeData = [
  { name: "SQL Injection", value: 45, color: "hsl(var(--chart-1))" },
  { name: "XSS", value: 32, color: "hsl(var(--chart-2))" },
  { name: "CSRF", value: 18, color: "hsl(var(--chart-3))" },
  { name: "DDoS", value: 22, color: "hsl(var(--chart-4))" },
  { name: "Brute Force", value: 10, color: "hsl(var(--chart-5))" },
]

export function AttackTypeChart() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Attack Type Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            sqlInjection: {
              label: "SQL Injection",
              color: "hsl(var(--chart-1))",
            },
            xss: {
              label: "XSS",
              color: "hsl(var(--chart-2))",
            },
            csrf: {
              label: "CSRF",
              color: "hsl(var(--chart-3))",
            },
            ddos: {
              label: "DDoS",
              color: "hsl(var(--chart-4))",
            },
            bruteForce: {
              label: "Brute Force",
              color: "hsl(var(--chart-5))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={attackTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {attackTypeData.map((entry, index) => (
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
