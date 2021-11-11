
interface InputControlConfig {
  id: string
}

export interface InputControlTextConfig extends InputControlConfig{}
export interface InputControlImgConfig extends InputControlConfig{}

// Structures for select component
export interface SelectListItem {
  value: string,
  description: string,
  short_name?: string
}
