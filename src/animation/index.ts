import {
  canvas,
  circles,
  ctx,
  handleClick,
  isLimitPassed,
} from '@/utils/constants'
import '@/listeners/events'
const animate = () => {
  if (isLimitPassed(circles)) {
    canvas.removeEventListener('click', handleClick)
  }
  requestAnimationFrame(animate)
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  circles.forEach((circle) => {
    circle.update(circles)
  })
}
animate()
