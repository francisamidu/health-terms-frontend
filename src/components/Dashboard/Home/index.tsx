import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Welcome, Francis
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Key Metrics */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Total Medical Terms
          </h2>
          <p className="text-3xl font-bold text-blue-500">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Recent Searches
          </h2>
          <p className="text-lg text-gray-600">Hypertension, Diabetes</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Categories Explored
          </h2>
          <p className="text-lg text-gray-600">Cardiology, Neurology</p>
        </div>
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
