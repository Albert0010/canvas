import { ICircle, TCreateCircleArgs } from '@/types/types'
import { canvas, ctx, mass } from '@/utils/constants'
import { gravity } from '@/utils/constants'

class Circle implements ICircle {
  x: number
  y: number
  radius: number
  color: string
  velocityY: number
  gravity: number
  energy: number
  mass:number
  constructor({ x, y, radius, color,mass }: TCreateCircleArgs) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocityY = 0
    this.gravity = gravity
    this.energy = canvas.height - y
    this.mass = mass
  }

  draw() {
    const { x, y, radius, color } = this
    if (ctx) {
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()
      ctx.closePath()
    }
  }

  update(circles: ICircle[]) {
    if (this.velocityY < 0) {
      this.energy -= gravity
    }

    this.velocityY += this.gravity
    this.y += this.velocityY

    if (this.y + this.radius >= canvas.height) {
      this.energy -= this.mass * this.velocityY
      this.velocityY *= -(1/this.mass) - 0.5;
      this.y = canvas.height - this.radius
      this.y -= 10

      if (this.energy <= 0) {
        this.velocityY = 0
        this.y = canvas.height - this.radius
      }
    }

    this.handleCollisions(circles)
    this.draw()
  }

  handleCollisions(circles: ICircle[]) {
    circles.forEach((circle) => {
      if (circle !== this) {
        const dx = circle.x - this.x
        const dy = circle.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < this.radius + circle.radius) {
          this.energy -= this.velocityY*((this.mass*50)/100)
          console.log(this.energy)
          const normalX = dx / distance
          const normalY = dy / distance

          const overlap = this.radius + circle.radius - distance
          const separationX = overlap * normalX * 0.5
          const separationY = overlap * normalY * 0.5

          this.x -= separationX
          this.y -= separationY
          circle.x += separationX
          circle.y += separationY

          // Calculate relative velocity and dot product
          const relativeVelocityX = circle.velocityY - this.velocityY
          const relativeVelocityY = circle.velocityY - this.velocityY
          const dotProduct =
            relativeVelocityX * normalX + relativeVelocityY * normalY

          // Apply impulse only if the circles are moving towards each other
          if (dotProduct < 0) {
            const impulse = (2 * dotProduct) / (this.mass + this.mass)

            this.velocityY += impulse * this.mass * normalY
            circle.velocityY -= impulse * this.mass * normalY
          }
        }
      }
    })
  }
}

export function createCircle({
  x,
  y,
  radius,
  color,
    mass
}: TCreateCircleArgs): ICircle {

  return new Circle({ x, y, radius, color ,mass})
}
