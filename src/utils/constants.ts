import { ICircle } from '@/types/types'
import { createCircle } from '@/scripts/entities'

export const canvas = document.getElementById('myCanvas') as HTMLCanvasElement
export const ctx = canvas.getContext('2d')
export const handleClick = ({ clientX, clientY }: MouseEvent) => {
  const x = clientX - canvas.offsetLeft
  const y = clientY - canvas.offsetTop

  const radius = 20
  const color = `rgb(${Math.random() * 255},${Math.random() * 255},${
    Math.random() * 255
  })`
    const destiny = document.getElementsByClassName('chosen')[0].id;
    const mass = returnDestinyMass(destiny);
    const count = document.getElementById('count');
    if(count){
      count.innerText = `${+count.innerText + 1}`;
    }
  circles.push(createCircle({ x, y, radius, color ,mass}))
}
export const gravity = 0.5
export const mass = 7;
export const notAllowed = 'not-allowed';

export const circles: ICircle[] = []

export const isLimitPassed = (circles: ICircle[]) => circles.length >= 15

export const iron = document.getElementById('iron')
export const air = document.getElementById('air')
export const rubber = document.getElementById('rubber')
const addDestiny = function (this: any) {
  const elements = document.getElementsByClassName('chosen')
  console.log({ elements })

  elements[0]?.classList?.remove('chosen')
  this?.element?.classList?.add('chosen')
}
export let destinies = [
  {
    element: iron,
    click: () => {},
  },
  { element: air, click: () => {} },
  {
    element: rubber,
    click: () => {},
  },
]

destinies = destinies.map((element) => {
  return { ...element, click: addDestiny.bind(element) }
})
function returnDestinyMass(destiny:string) {
  switch (destiny) {
    case 'iron':
      return 7;
    case 'rubber':
      return 3;
    default:
      return 7;
  }
}