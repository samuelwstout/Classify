import { useState } from 'react'

export default function useIconToggle(defaultValue) {
  const [iconValue, setIconValue] = useState(defaultValue)

  function toggleIconValue(iconValue) {
    setIconValue(currentValue => 
      typeof iconValue === 'boolean' ? iconValue : !currentValue
    )
  }
  return [iconValue, toggleIconValue]
}