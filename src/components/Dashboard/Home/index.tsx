import { formatHumanReadableDate } from '@/utils/formatDateTime'
import React from 'react'
import {
  Calendar03Icon as CalendarIcon,
  DropletIcon,
  OrganicFoodIcon as NutrientIcon,
  NaturalFoodIcon as MealIcon,
  WeightScale01Icon as ScaleIcon,
  GivePillIcon as PillIcon,
  UserCircleIcon as UserIcon
} from 'hugeicons-react'
import { DashboardCard } from '@/types/DashboardCard'

const cardData: Array<DashboardCard> = [
  {
    title: 'Daily Water Intake',
    value: 2500, // in ml
    change: 15,
    description: 'compared to yesterday',
    trendColor: 'bg-blue-500',
    icon: <DropletIcon size={24} className="text-blue-500" />
  },
  {
    title: 'Nutrients Tracked',
    value: 8, // number of key nutrients tracked
    change: 2,
    description: 'more than yesterday',
    trendColor: 'bg-green-500',
    icon: <NutrientIcon size={30} className="text-green-500" />
  },
  {
    title: 'Pregnancy Week',
    value: 24, // current week
    change: 1,
    description: 'Week of pregnancy',
    trendColor: 'bg-purple-500',
    icon: <CalendarIcon size={30} className="text-purple-500" />
  },
  {
    title: 'Meals Logged',
    value: 4,
    change: 1,
    description: 'meals today',
    trendColor: 'bg-orange-500',
    icon: <MealIcon size={30} className="text-orange-500" />
  },
  {
    title: 'Weight Progress',
    value: 65.5, // in kg
    change: 0.5,
    description: 'kg this week',
    trendColor: 'bg-pink-500',
    icon: <ScaleIcon size={30} className="text-pink-500" />
  },
  {
    title: 'Supplements Taken',
    value: 3,
    change: 0,
    description: 'all taken today',
    trendColor: 'bg-indigo-500',
    icon: <PillIcon size={30} className="text-indigo-500" />
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
            <div className="flex items-center">{card.icon}</div>
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
            Today's Activity
          </h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Logged: Breakfast - Oatmeal with fruits</li>
            <li>Completed: Daily water goal (2.5L)</li>
            <li>Taken: Prenatal vitamins</li>
            <li>Updated: Weight tracking</li>
            <li>Added: New healthy snack to favorites</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Educational Content */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Today's Nutrition Guide
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-3 rounded-md">
              <h3 className="font-medium text-main-bluish mb-1">
                Featured: First Trimester Essentials
              </h3>
              <p className="text-sm text-gray-600">
                Key nutrients and meals to support your early pregnancy journey.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Quick Tips:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Best foods for morning sickness</li>
                <li>• Healthy snack ideas</li>
                <li>• Important nutrients for baby's development</li>
              </ul>
            </div>
            <div className="flex justify-between items-center pt-2">
              <button className="text-sm text-main-bluish-600 hover:text-main-bluish-700 font-medium">
                Read more
              </button>
              <span className="text-xs text-gray-500">Updated daily</span>
            </div>
          </div>
        </div>

        {/* Support and Feedback */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Pregnancy Nutrition Support
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-md">
              <div className="flex items-center">
                <UserIcon size={20} className="text-main-dark-variant mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  Your Nutrition Coach
                </span>
              </div>
              <button className="text-sm text-main-dark-variant hover:text-main-accent font-medium">
                Connect
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-gray-700">Quick Support</h3>
              <div className="grid grid-cols-2 gap-2">
                <button className="p-2 text-sm text-main-darker bg-gray-50 rounded hover:bg-blue-100">
                  Food Safety Guide
                </button>
                <button className="p-2 text-sm text-main-darker bg-gray-50 rounded hover:bg-blue-100">
                  Meal Planning Help
                </button>
                <button className="p-2 text-sm text-main-darker bg-gray-50 rounded hover:bg-blue-100">
                  Supplement Guide
                </button>
                <button className="p-2 text-sm text-main-darker bg-gray-50 rounded hover:bg-blue-100">
                  Diet Restrictions
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between border-t pt-4">
              <div>
                <p className="text-sm text-gray-600">
                  Need immediate assistance?
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-sm text-main-dark-variant font-medium"
                >
                  Call our helpline
                </a>
              </div>
              <button className="px-4 py-2 bg-main-bluish text-white rounded-md hover:bg-main-dark text-sm">
                Get Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
