export interface ICircle {
  x: number
  y: number
  energy: number
  radius: number
  color: string
  velocityY: number
  gravity: number
  draw: () => void
  update: (circles: ICircle[]) => void
  handleCollisions: (circles: ICircle[]) => void
  mass:number
}
export type TCreateCircleArgs = Pick<ICircle, 'x' | 'y' | 'radius' | 'color' | 'mass'>
