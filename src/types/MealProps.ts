export interface Meal {
  day: string
  breakfast: string
  lunch: string
  dinner: string
  snacks: string[]
  nutrients: {
    protein: number
    carbs: number
    fats: number
    calories: number
  }
  preparationTime: number
  tags: string[]
}

export interface NutritionPreferences {
  vegetarian: boolean
  dairyFree: boolean
  glutenFree: boolean
  nutFree: boolean
}
