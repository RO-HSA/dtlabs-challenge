import { FC } from "react"
import { Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { PiArrowsOutBold } from "react-icons/pi"

import styles from './salesChart.module.css'

export type SalesChartType = {
  day: number,
  value: number
}

interface Props {
  title: string;
  data: SalesChartType[];
}

const SalesChart: FC<Props> = ({ data, title }) => {
  const { container, arrow, chart } = styles

  return (
    <div className={container}>
      <div className={arrow}>
        <PiArrowsOutBold size={12} color="#848484" />
      </div>
      <div className={chart}>
        <span>{title}</span>
        <ResponsiveContainer height="100%" width="100%" minHeight={170} minWidth={411}>
          <BarChart data={data} margin={{left: -30, right: 0, top: 0, bottom: 0}} >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tick={{fontSize: '0.7em'}} tickLine={false} axisLine={false} stroke="#9E9FA7" />
            <YAxis axisLine={false} tickLine={false} tickMargin={-2} tick={{stroke: '#9E9FA7', fontSize: '0.6em', strokeWidth: 0, fontFamily: 'Montserrat'}} />
            <Bar dataKey="value" width={8} radius={[50, 50, 0, 0]} fill="#DF0000" activeBar={<Rectangle />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default SalesChart
