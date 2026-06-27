import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./Charts.css";

// TODO: replace with real aggregates derived from the uploaded file
const columnDistribution = [
  { name: "Numeric", count: 4 },
  { name: "Text", count: 2 },
  { name: "Date", count: 1 },
  { name: "Boolean", count: 1 },
];

const rowsOverTime = [
  { label: "Mon", rows: 180 },
  { label: "Tue", rows: 220 },
  { label: "Wed", rows: 165 },
  { label: "Thu", rows: 240 },
  { label: "Fri", rows: 280 },
  { label: "Sat", rows: 119 },
];

function Charts() {
  return (
    <div className="charts-grid">
      <div className="chart-card">
        <p className="chart-card-title">Column types</p>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={columnDistribution} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fill: "var(--text)", fontSize: 12 }}
              axisLine={{ stroke: "var(--border)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "var(--text)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
            />
            <Tooltip
              contentStyle={{
                background: "var(--bg)",
                border: "0.5px solid var(--border)",
                borderRadius: 8,
                fontSize: 13,
              }}
              labelStyle={{ color: "var(--text-h)" }}
              cursor={{ fill: "var(--code-bg)" }}
            />
            <Bar dataKey="count" fill="var(--accent)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">
        <p className="chart-card-title">Rows over time</p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={rowsOverTime} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="label"
              tick={{ fill: "var(--text)", fontSize: 12 }}
              axisLine={{ stroke: "var(--border)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "var(--text)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
            />
            <Tooltip
              contentStyle={{
                background: "var(--bg)",
                border: "0.5px solid var(--border)",
                borderRadius: 8,
                fontSize: 13,
              }}
              labelStyle={{ color: "var(--text-h)" }}
              cursor={{ stroke: "var(--border)" }}
            />
            <Line
              type="monotone"
              dataKey="rows"
              stroke="var(--accent)"
              strokeWidth={2}
              dot={{ r: 3, fill: "var(--accent)", strokeWidth: 0 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;
