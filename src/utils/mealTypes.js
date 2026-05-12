export const MEAL_TYPES = {
  breakfast: {
    value: 'breakfast',
    label: 'Snídaně',
    shortLabel: 'Snídaně',
    emoji: '🥐',
    accent: 'from-amber-200 to-orange-200',
  },
  lunch: {
    value: 'lunch',
    label: 'Oběd',
    shortLabel: 'Oběd',
    emoji: '🍲',
    accent: 'from-emerald-200 to-lime-200',
  },
  dinner: {
    value: 'dinner',
    label: 'Večeře',
    shortLabel: 'Večeře',
    emoji: '🌮',
    accent: 'from-rose-200 to-orange-200',
  },
};

export const MEAL_TYPE_OPTIONS = Object.values(MEAL_TYPES);

export function getMealType(type) {
  return MEAL_TYPES[type] ?? MEAL_TYPES.breakfast;
}
