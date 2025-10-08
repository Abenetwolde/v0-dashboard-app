"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const securityLogs = [
  {
    time: "2025-01-10 14:32:15",
    ip: "192.168.1.100",
    port: "443",
    method: "POST",
    path: "/api/login",
    status: "403",
    detail: "SQL Injection attempt detected",
  },
  {
    time: "2025-01-10 14:31:48",
    ip: "10.0.0.45",
    port: "80",
    method: "GET",
    path: "/admin",
    status: "401",
    detail: "Unauthorized access attempt",
  },
  {
    time: "2025-01-10 14:30:22",
    ip: "172.16.0.88",
    port: "443",
    method: "POST",
    path: "/api/users",
    status: "403",
    detail: "XSS attack blocked",
  },
  {
    time: "2025-01-10 14:29:55",
    ip: "192.168.2.15",
    port: "8080",
    method: "DELETE",
    path: "/api/data",
    status: "403",
    detail: "CSRF token validation failed",
  },
  {
    time: "2025-01-10 14:28:33",
    ip: "10.10.10.50",
    port: "443",
    method: "POST",
    path: "/api/login",
    status: "429",
    detail: "Brute force attack detected",
  },
  {
    time: "2025-01-10 14:27:10",
    ip: "172.20.1.99",
    port: "80",
    method: "GET",
    path: "/",
    status: "200",
    detail: "Normal request",
  },
  {
    time: "2025-01-10 14:26:45",
    ip: "192.168.5.77",
    port: "443",
    method: "POST",
    path: "/api/upload",
    status: "403",
    detail: "Malicious file upload blocked",
  },
  {
    time: "2025-01-10 14:25:18",
    ip: "10.5.5.33",
    port: "443",
    method: "GET",
    path: "/admin/config",
    status: "403",
    detail: "Directory traversal attempt",
  },
]

function getStatusBadge(status: string) {
  if (status === "200") {
    return <Badge className="bg-chart-2 text-white">200</Badge>
  }
  if (status === "401" || status === "403") {
    return <Badge className="bg-chart-4 text-white">{status}</Badge>
  }
  if (status === "429") {
    return <Badge className="bg-chart-5 text-white">{status}</Badge>
  }
  return <Badge variant="outline">{status}</Badge>
}

export function SecurityLogTable() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Security Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Port</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Path</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Detail Log</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {securityLogs.map((log, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono text-xs">{log.time}</TableCell>
                  <TableCell className="font-mono text-xs">{log.ip}</TableCell>
                  <TableCell className="font-mono text-xs">{log.port}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{log.method}</Badge>
                  </TableCell>
                  <TableCell className="font-mono text-xs">{log.path}</TableCell>
                  <TableCell>{getStatusBadge(log.status)}</TableCell>
                  <TableCell className="text-sm">{log.detail}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
