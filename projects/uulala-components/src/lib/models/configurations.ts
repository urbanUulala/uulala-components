
interface InputControlConfig {
  id: string
}

export interface InputControlTextConfig extends InputControlConfig{}

// Structures for select component
export interface SelectListItem {
  value: string,
  description: string
}
