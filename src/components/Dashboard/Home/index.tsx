import { formatHumanReadableDate } from '@/utils/formatDateTime'
import React from 'react'
import {
  Add01Icon as AddIcon,
  File01Icon as FileIcon,
  ChartColumnIcon as ChartIcon
} from 'hugeicons-react'
import { DashboardCard } from '@/types/DashboardCard'

const cardData: Array<DashboardCard> = [
  {
    title: 'New Terms Added',
    value: 150,
    change: 10,
    description: 'compared to last week',
    trendColor: 'bg-blue-500',
    icon: <AddIcon size={24} className="text-blue-500" />
  },
  {
    title: 'Searched Records',
    value: 3200,
    change: 5,
    description: 'compared to last week',
    trendColor: 'bg-green-500',
    icon: <FileIcon size={24} className="text-green-500" />
  },
  {
    title: 'Average Categories',
    value: 75,
    change: 8,
    description: 'compared to last week',
    trendColor: 'bg-purple-500',
    icon: <ChartIcon size={24} className="text-purple-500" />
  }
]

const Home: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen mt-16">
      <div className="flex flex-col">
        <h1 className="text-2xl font-normal mb-2">Welcome, Francis</h1>
        <h2 className="text-normal text-slate-600 font-normal mb-6">
          {formatHumanReadableDate(new Date())}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-normal mb-2 text-gray-700">
                {card.title}
              </h2>
              <div className="flex items-baseline">
                <p className="text-3xl font-bold text-gray-800 my-3">
                  {card.value}
                </p>
                <span
                  className={`ml-2 text-sm ${
                    card.change > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {card.change > 0 ? `+${card.change}%` : `${card.change}%`}
                </span>
              </div>
              <p className="text-sm text-gray-500">{card.description}</p>
            </div>
            <div className="flex items-center">
              {card.icon}
              <div
                className={`w-16 h-16 ${card.trendColor} rounded-full ml-4`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Insights and Trends */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Insights and Trends
          </h2>
          <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Graph Placeholder</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Recent Activity
          </h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Viewed: Hypertension</li>
            <li>Added: New Term - Asthma</li>
            <li>Updated: Diabetes Information</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Educational Content */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Educational Content
          </h2>
          <p className="text-gray-600">
            Check out our latest articles and videos on healthcare
            terminologies.
          </p>
        </div>

        {/* Support and Feedback */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Support and Feedback
          </h2>
          <p className="text-gray-600">
            Have questions or feedback?{' '}
            <a href="#" className="text-blue-500">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
