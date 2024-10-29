import { FC } from 'react'
import { HeroIcon } from '../../types/icons'

interface StatCardProps {
  name: string;
  stat: string;
  icon: HeroIcon;
}

const StatCard: FC<StatCardProps> = ({ name, stat, icon: Icon }) => {
  return (
    <div className="flex flex-col bg-white/5 px-6 py-8 rounded-2xl">
      <dt className="flex items-center gap-x-3 text-base leading-7 text-gray-300">
        <Icon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
        {name}
      </dt>
      <dd className="text-2xl font-semibold tracking-tight text-white">{stat}</dd>
    </div>
  )
}

export default StatCard