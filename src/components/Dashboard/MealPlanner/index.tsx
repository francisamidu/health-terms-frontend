'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import {
  Calendar02Icon as CalendarIcon,
  Clock02Icon as ClockIcon,
  Leaf02Icon as LeafIcon,
  Alert02Icon as AlertTriangleIcon,
  Bookmark02Icon as BookmarkIcon,
  ChefHatIcon,
  FavouriteIcon as HeartIcon,
  StarIcon,
  PrinterIcon
} from 'hugeicons-react'
import { NutritionPreferences, Meal } from '@/types/MealProps'

export default function MealPlanning() {
  const [activeTab, setActiveTab] = useState('weeklyPlan')
  const [preferences, setPreferences] = useState<NutritionPreferences>({
    dairyFree: false,
    glutenFree: false,
    nutFree: false,
    vegetarian: false
  })
  const [trimester, setTrimester] = useState<1 | 2 | 3>(1)

  const weeklyMeals: Meal[] = [
    {
      day: 'Monday',
      breakfast: 'Oatmeal with berries and chia seeds',
      lunch: 'Quinoa bowl with grilled chicken and vegetables',
      dinner: 'Baked salmon with sweet potato and asparagus',
      snacks: ['Greek yogurt with honey', 'Apple slices with almond butter'],
      nutrients: {
        protein: 85,
        carbs: 120,
        fats: 45,
        calories: 2200
      },
      preparationTime: 45,
      tags: ['high-protein', 'omega-3', 'iron-rich']
    }
    // ... other days
  ]

  const nutritionTips = {
    1: [
      'Focus on folate-rich foods',
      'Include vitamin B6 to help with morning sickness',
      'Stay hydrated with water and herbal teas'
    ],
    2: [
      'Increase iron intake',
      'Add more calcium-rich foods',
      "Include healthy fats for baby's brain development"
    ],
    3: [
      'Boost protein intake',
      'Include more fiber-rich foods',
      'Focus on energy-dense nutrients'
    ]
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-main-darkest">
            Pregnancy Meal Planner
          </h1>
          <p className="text-gray-500">
            Customized nutrition for you and your baby
          </p>
        </div>
        <Button variant="outline">
          <PrinterIcon className="mr-2 h-4 w-4" /> Print Plan
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <Tabs defaultValue="weekly-plan">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-main-darkest">
                  Meal Planning
                </CardTitle>
                <TabsList>
                  <TabsTrigger value="weekly-plan">Weekly Plan</TabsTrigger>
                  <TabsTrigger value="recipes">Recipes</TabsTrigger>
                  <TabsTrigger value="shopping">Shopping List</TabsTrigger>
                </TabsList>
              </div>
            </CardHeader>
            <CardContent>
              <TabsContent value="weekly-plan">
                {weeklyMeals.map((meal, index) => (
                  <div key={index} className="mb-6 p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">{meal.day}</h3>
                      <div className="flex gap-2">
                        {meal.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Breakfast</h4>
                        <p className="text-gray-600">{meal.breakfast}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Lunch</h4>
                        <p className="text-gray-600">{meal.lunch}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Dinner</h4>
                        <p className="text-gray-600">{meal.dinner}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <span className="text-sm">
                            <ClockIcon className="inline mr-1 h-4 w-4" />
                            {meal.preparationTime} mins
                          </span>
                          <span className="text-sm">
                            {meal.nutrients.calories} kcal
                          </span>
                        </div>
                        <Button variant="outline" size="sm">
                          <BookmarkIcon className="mr-2 h-4 w-4" />
                          Save
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="recipes">
                <div className="grid md:grid-cols-2 gap-4">
                  {weeklyMeals.map((meal, index) => (
                    <div key={index} className="mb-6 p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">{meal.day}</h3>
                        <div className="flex gap-2">
                          {meal.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Breakfast</h4>
                          <p className="text-gray-600">{meal.breakfast}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Lunch</h4>
                          <p className="text-gray-600">{meal.lunch}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Dinner</h4>
                          <p className="text-gray-600">{meal.dinner}</p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <div className="flex gap-4">
                            <span className="text-sm">
                              <ClockIcon className="inline mr-1 h-4 w-4" />
                              {meal.preparationTime} mins
                            </span>
                            <span className="text-sm">
                              {meal.nutrients.calories} kcal
                            </span>
                          </div>
                          <Button variant="outline" size="sm">
                            <BookmarkIcon className="mr-2 h-4 w-4" />
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="shopping">
                <div className="space-y-4">
                  {weeklyMeals.map((meal, index) => (
                    <div key={index} className="mb-6 p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">{meal.day}</h3>
                        <div className="flex gap-2">
                          {meal.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Breakfast</h4>
                          <p className="text-gray-600">{meal.breakfast}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Lunch</h4>
                          <p className="text-gray-600">{meal.lunch}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Dinner</h4>
                          <p className="text-gray-600">{meal.dinner}</p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <div className="flex gap-4">
                            <span className="text-sm">
                              <ClockIcon className="inline mr-1 h-4 w-4" />
                              {meal.preparationTime} mins
                            </span>
                            <span className="text-sm">
                              {meal.nutrients.calories} kcal
                            </span>
                          </div>
                          <Button variant="outline" size="sm">
                            <BookmarkIcon className="mr-2 h-4 w-4" />
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-main-darkest">
                Nutrition Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(preferences).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <Label className="capitalize" htmlFor={key}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </Label>
                    <Switch
                      id={key}
                      checked={value}
                      onCheckedChange={(checked) =>
                        setPreferences((prev) => ({ ...prev, [key]: checked }))
                      }
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-main-darkest">
                Trimester-Specific Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2 mb-4">
                  {[1, 2, 3].map((num) => (
                    <Button
                      key={num}
                      variant={trimester === num ? 'default' : 'outline'}
                      onClick={() => setTrimester(num as 1 | 2 | 3)}
                    >
                      {num}st
                    </Button>
                  ))}
                </div>
                <ul className="space-y-2">
                  {nutritionTips[trimester].map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <LeafIcon className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangleIcon className="h-5 w-5 text-red-500" />
                Foods to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>{/* Foods to avoid list */}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
