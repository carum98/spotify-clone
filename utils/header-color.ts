export function setHeaderColor(color: string) {
    const element = document.querySelector('main.content') as HTMLElement

    const colorRGB = hexToRgb(color)
    
    element.style.setProperty('--color-hexa', color)
    element.style.setProperty('--color-rgb', `${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}`)
}
