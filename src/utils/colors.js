export function hexToRGB(color, alpha) {
  const r = parseInt(color.slice(1, 3), 16)
  const g = parseInt(color.slice(3, 5), 16)
  const b = parseInt(color.slice(5, 7), 16)
  const rgb = `${r}, ${g}, ${b}`

  if (alpha || alpha === 0) {
    return `rgba(${rgb}, ${alpha})`
  }

  return `rgb(${rgb})`
}

export const blueLight = '#2196F3'
export const blue = '#1B70E0'

export const grayLight = '#F9F9F9'
export const gray = '#F1F1F1'
export const grayMed = '#DDE2E5'
export const grayDark = '#424444'
export const grayExtraDark = '#161717'

export const greenLight = '#00dE8B'//'#03B975'
export const green = '#00AB6B'//'#44BBA4'
export const greenDark = '#1C9963'//'#3aa08d'

export const red = '#E94F37'
