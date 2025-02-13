'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
// import {  } from '@/components/ui/chart'
import {
  DropletIcon,
  ChartIcon,
  Settings02Icon as SettingsIcon,
  Calendar01Icon as CalendarIcon,
  Clock01Icon as ClockIcon
} from 'hugeicons-react'
import { Select } from '@/components/ui/select'

interface WaterLog {
  time: string
  amount: number
  type: 'water' | 'tea' | 'coffee' | 'other'
  note?: string
}

export default function WaterTracking() {
  const [waterIntake, setWaterIntake] = useState(0)
  const [goal, setGoal] = useState(2500) // Default goal in ml
  const [logs, setLogs] = useState<WaterLog[]>([])
  const [unit, setUnit] = useState<'ml' | 'oz'>('ml')
  // const [weeklyData, setWeeklyData] = useState<number[]>([])
  const [reminderEnabled, setReminderEnabled] = useState(false)
  const [reminderInterval, setReminderInterval] = useState(60) // minutes

  useEffect(() => {
    // Fetch user preferences and historical data
  }, [])

  const handleAddWater = (
    amount: number,
    type: WaterLog['type'] = 'water',
    note?: string
  ) => {
    const newIntake = waterIntake + amount
    setWaterIntake(newIntake)
    const now = new Date()
    setLogs([
      {
        time: now.toLocaleTimeString(),
        amount,
        type,
        note
      },
      ...logs
    ])
  }

  const calculateHydrationStatus = () => {
    const percentage = (waterIntake / goal) * 100
    if (percentage < 25) return { status: 'Dehydrated', color: 'text-red-500' }
    if (percentage < 50)
      return { status: 'Need more water', color: 'text-yellow-500' }
    if (percentage < 75)
      return { status: 'Getting there', color: 'text-blue-500' }
    return { status: 'Well hydrated', color: 'text-green-500' }
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Hydration Tracker</h1>
        <Button variant="outline" size="icon">
          <SettingsIcon className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Main Tracking Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Today's Hydration</CardTitle>
            <CardDescription>Track your daily water intake</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-500">
                  {waterIntake}/{goal} {unit}
                </div>
                <div
                  className={`text-lg font-medium ${
                    calculateHydrationStatus().color
                  }`}
                >
                  {calculateHydrationStatus().status}
                </div>
              </div>

              <Progress value={(waterIntake / goal) * 100} className="h-3" />

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Quick Add</Label>
                  <div className="flex flex-wrap gap-2">
                    <Button onClick={() => handleAddWater(250)}>250ml</Button>
                    <Button onClick={() => handleAddWater(500)}>500ml</Button>
                    <Button
                      variant="outline"
                      onClick={() => handleAddWater(750)}
                    >
                      750ml
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Beverage Type</Label>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      onClick={() => handleAddWater(250, 'water')}
                    >
                      <DropletIcon className="mr-2 h-4 w-4" /> Water
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleAddWater(250, 'tea')}
                    >
                      Tea
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleAddWater(250, 'coffee')}
                    >
                      Coffee
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Card */}
        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Daily Average</span>
                <span className="font-bold">2100 {unit}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Weekly Goal Progress</span>
                <span className="font-bold text-green-500">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Streak</span>
                <span className="font-bold">5 days</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for detailed information */}
        <Card className="md:col-span-2">
          <Tabs defaultValue="log">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Detailed Tracking</CardTitle>
                <TabsList>
                  <TabsTrigger value="log">Log</TabsTrigger>
                  <TabsTrigger value="trends">Trends</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
              </div>
            </CardHeader>
            <CardContent>
              <TabsContent value="log">
                <div className="space-y-4">
                  {logs.map((log, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-2 bg-gray-50 rounded"
                    >
                      <div className="flex items-center gap-2">
                        <ClockIcon className="h-4 w-4 text-gray-500" />
                        <span>{log.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {log.amount} {unit}
                        </span>
                        <span className="text-gray-500">({log.type})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="trends">
                {/* <div className="h-[300px]">
                  <LineChart data={weeklyData} />
                </div> */}
              </TabsContent>
              <TabsContent value="settings">
                <div className="space-y-4">
                  <div>
                    <Label>Daily Goal</Label>
                    <Input
                      type="number"
                      value={goal}
                      onChange={(e) => setGoal(Number(e.target.value))}
                      min={500}
                      step={100}
                    />
                  </div>
                  <div>
                    <Label>Measurement Unit</Label>
                    <Select
                      value={unit}
                      onValueChange={(value: 'ml' | 'oz') => setUnit(value)}
                    >
                      <option value="ml">Milliliters (ml)</option>
                      <option value="oz">Ounces (oz)</option>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={reminderEnabled}
                      onChange={(e) => setReminderEnabled(e.target.checked)}
                    />
                    <Label>Enable Reminders</Label>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
