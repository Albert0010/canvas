import { canvas, destinies, handleClick, iron } from '@/utils/constants'

canvas.addEventListener('click', handleClick)
destinies.forEach(({ element, click }) => {
  element?.addEventListener('click', click)
})
