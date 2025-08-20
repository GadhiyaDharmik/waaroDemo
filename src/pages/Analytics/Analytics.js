// src/components/Dashboard.jsx
import React from 'react'
import { Heart, Eye, Bookmark, Send } from 'lucide-react'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import ana1 from '../../asset/Analytics/Ana1.png';
import ana2 from '../../asset/Analytics/Ana2.png';
import ChartSvg from "../../asset/analitcs_Chart.svg"

const stats = [
  { title: 'Total Lead', value: 135 },
  { title: 'Total Inquiry', value: 135 },
  { title: 'Total Email', value: 135 },
  { title: 'Total Spread', value: 135 },
  { title: 'Total Referral', value: 135 },
  { title: 'Total Connect', value: 135 },
]

const data = [
  { month: 'Jan', value: 20 },
  { month: 'Feb', value: 22 },
  { month: 'Mar', value: 18 },
  { month: 'Apr', value: 35 },
  { month: 'May', value: 30 },
  { month: 'Jun', value: 15 },
  { month: 'Jul', value: 55 },
  { month: 'Aug', value: 50 },
  { month: 'Sep', value: 60 },
  { month: 'Oct', value: 95 },
  { month: 'Nov', value: 100 },
  { month: 'Dec', value: 102 },
]

const mailCampaigns = [
  'Swimwear',
  'Hoodies & Sweatshirts',
  'Shorts',
  'Jackets',
  'Pants',
  'Track Suits',
]

const overviewData = [
  { label: 'Total sent mail', count: '846 of 718', percent: 85, color: 'bg-orange-500' },
  { label: 'Delivery mail', count: '215 of 661', percent: 50, color: 'bg-blue-400' },
  { label: 'Open mail', count: '846 of 804', percent: 75, color: 'bg-sky-400' },
  { label: 'Click through mail', count: '458 of 901', percent: 40, color: 'bg-pink-500' },
  { label: 'Green', count: '215 of 661', percent: 65, color: 'bg-green-500' },
]

export default function Analytics() {
  const profileScore = 799

  return (
    <div className="container mx-auto p-6 grid grid-cols-12 gap-6">
      {/* ─── Left Column ─── */}
      <div className="col-span-12 md:col-span-3 space-y-6">
        {/* Profile Score */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          {/* define the gradient stops */}
          <h2 className="mt-4 font-semibold">Profile score</h2>
          {/* <svg style={{ height: 0 }}>
            <defs>
              <linearGradient id="gaugeGradient">
                <stop offset="0%" stopColor="#F87171" />
                <stop offset="50%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
            </defs>
          </svg> */}
          <img src={ChartSvg} />


          {/* <div style={{ width: 160 }}>
            <CircularProgressbar
              value={profileScore}
              maxValue={1000}
              text={profileScore}
              strokeWidth={6}
              // turn into a 3/4 circle (i.e. 270° arc)
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,         // start at −135°
                pathColor: 'url(#gaugeGradient)',// use our gradient
                trailColor: '#E5E7EB',           // light grey background arc
                strokeLinecap: 'butt',           // squared-off ends
                textSize: '1.5rem',
                textColor: '#1F2937',
              })}
            />
          </div> */}
        </div>

        {/* Six Yellow Stat Cards */}
        <div
          className=" bg-white grid grid-cols-2 gap-4 p-[14px] rounded-2xl shadow h-[713px]   content-start  items-start   auto-rows-min 
  "
        >
          {stats.map((s) => (
            <div
              key={s.title}
              className="bg-yellow-400 rounded-xl p-4 text-center"
            >
              <div className="text-sm font-medium">{s.title}</div>
              <div className="mt-1 text-2xl font-bold">{s.value}</div>
            </div>
          ))}
        </div>

      </div>

      {/* ─── Middle Column ─── */}
      <div className="col-span-12 md:col-span-5 space-y-6">
        {/* Mail Campaign List */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold mb-14">Mail campaign list</h3>
          <ol className="list-decimal list-inside space-y-1 text-blue-600 leading-[2.5rem] text-[#28B5E1]">
            {mailCampaigns.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ol>
        </div>

        {/* Purple Area Chart Placeholder */}
        <div className="bg-white rounded-2xl shadow p-6 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              // add horizontal margin so end ticks aren't cut off
              margin={{ top: 10, right: 20, left: 20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="gradValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C084FC" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#F0ABFC" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.1} />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                // show *every* month
                interval={0}
                // padding so Jan & Dec aren’t flush against edges
                padding={{ left: 10, right: 10 }}
                style={{ fontSize: '0.75rem', fill: '#6B7280' }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                style={{ fontSize: '0.75rem', fill: '#6B7280' }}
                domain={[10, 'dataMax + 5']}
                tickCount={100}
              />

              <Tooltip
                contentStyle={{ fontSize: '0.9rem' }}
                formatter={(v) => [v, '']}
                labelFormatter={() => ''}
              />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#8B5CF6"
                strokeWidth={2}
                fill="url(#gradValue)"
                activeDot={{ r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Small Overview */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold mb-4">Overview</h3>
          <div className="space-y-4">
            {overviewData.map((o) => (
              <div key={o.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{o.label}</span>
                  <span>{o.count}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className={`${o.color} h-2 rounded`}
                    style={{ width: `${o.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Right Column ─── */}
      <div className="col-span-12 md:col-span-4 space-y-6">
        {/* Icon Row */}
        <div className="bg-white rounded-full shadow-md px-6 py-3 flex justify-center items-center gap-[60px]">
          <Heart className="w-8 h-8 text-[#77BA9B] fill-[#77BA9B] cursor-pointer" />
          <Eye className="w-8 h-8 text-black cursor-pointer" />
          <Bookmark className="w-8 h-8 text-black cursor-pointer" />
          <Send className="w-8 h-8 text-black cursor-pointer" />
        </div>


        {/* Two Image Cards */}
        <div className="bg-white shadow flex gap-6 px-4 py-6 rounded-xl">
          {/* Card 1 */}
          <div className="relative rounded-2xl">
            <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
              SALE
            </span>
            <img
              src={ana1}
              alt="placeholder"
              className="w-[151px] h-[151px] object-cover rounded-2xl"
            />
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl">
            <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
              SALE
            </span>
            <img
              src={ana2}
              alt="placeholder"
              className="w-[151px] h-[151px] object-cover rounded-2xl"
            />
          </div>
        </div>


        {/* Large Overview */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold mb-4">Overview</h3>
          <div className="space-y-4">
            {overviewData.map((o) => (
              <div key={o.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{o.label}</span>
                  <span>{o.count}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className={`${o.color} h-2 rounded`}
                    style={{ width: `${o.percent * 0.6}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
