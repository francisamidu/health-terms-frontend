import { WaterIntakeProps } from '@/types/WaterIntakeProps'
import React from 'react'

const WaterIntakeTracker: React.FC<WaterIntakeProps> = ({ intake, goal }) => {
  const progress = (intake / goal) * 100
  const onAddWater = (amount: number) => {
    console.log(amount)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Water Intake</h3>
      <div className="relative pt-1">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block text-blue-600">
              {intake}ml / {goal}ml
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-blue-600">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          ></div>
        </div>
        <button
          onClick={() => onAddWater(250)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add 250ml
        </button>
      </div>
    </div>
  )
}
export default WaterIntakeTracker
