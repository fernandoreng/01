import React from 'react'
import { ArrowTrendingUpIcon, UserGroupIcon, CalendarIcon, FolderIcon } from '@heroicons/react/24/outline'
import StatCard from '../components/stats/StatCard'

const stats = [
  { id: 1, name: 'Total Users', stat: '71,897', icon: UserGroupIcon },
  { id: 2, name: 'Projects', stat: '58.16%', icon: FolderIcon },
  { id: 3, name: 'Events', stat: '24.57%', icon: CalendarIcon },
  { id: 4, name: 'Growth', stat: '24.57%', icon: ArrowTrendingUpIcon },
]

export default function Dashboard() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Dashboard</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Welcome to your dashboard. Here you can see an overview of your activities and statistics.
          </p>
        </div>
        
        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <StatCard key={item.id} name={item.name} stat={item.stat} icon={item.icon} />
          ))}
        </dl>
      </div>
    </div>
  )
}