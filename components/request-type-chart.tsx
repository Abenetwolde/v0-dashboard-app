"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pie, PieChart, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const requestTypeData = [
  { name: "Normal", value: 326, color: "hsl(var(--chart-2))" },
  { name: "Rule Violation", value: 0, color: "hsl(var(--chart-4))" },
  { name: "Attack Attempt", value: 127, color: "hsl(var(--chart-5))" },
]

export function RequestTypeChart() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Request Type Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            normal: {
              label: "Normal",
              color: "hsl(var(--chart-2))",
            },
            ruleViolation: {
              label: "Rule Violation",
              color: "hsl(var(--chart-4))",
            },
            attackAttempt: {
              label: "Attack Attempt",
              color: "hsl(var(--chart-5))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={requestTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {requestTypeData.map((entry, index) => (
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
