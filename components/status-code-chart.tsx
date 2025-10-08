"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const statusCodeData = [
  { code: "200", requests: 15420 },
  { code: "201", requests: 3240 },
  { code: "301", requests: 1850 },
  { code: "400", requests: 890 },
  { code: "401", requests: 450 },
  { code: "403", requests: 320 },
  { code: "404", requests: 1240 },
  { code: "500", requests: 180 },
  { code: "502", requests: 95 },
  { code: "503", requests: 65 },
]

export function StatusCodeChart() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Request Status Code Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            requests: {
              label: "Requests",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={statusCodeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="code"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="requests" fill="var(--color-requests)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
