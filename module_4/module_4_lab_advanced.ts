/* tsc --target ES2018 --sourceMap --removeComments --experimentalDecorators --outFile module_4_lab_advanced.js module_4_lab_advanced.ts */

class GenericClass<T> {
  private val: T

  setVal (val: T): void {
    this.val = val
  }

  getVal (): T {
    return this.val
  }
}

const element1 = new GenericClass<Element>()
const element2 = new GenericClass<HTMLElement>()
const element3 = new GenericClass<Element>()

element1.setVal(document.createElement("div"))
element2.setVal(document.createElement("div"))
element3.setVal(document.createElement("div"))

const elementArray = [
  element1.getVal(),
  element2.getVal(),
  element3.getVal(),
]

function isHTMLELement (x: any): x is HTMLElement {
  return(x.style === undefined)
}

function convertElement (elem: Element|HTMLElement): HTMLElement {
  if (!isHTMLELement(elem)) {
    return(elem as HTMLElement)
  }

  return elem
}

function standardiseElements(elemArray: any[]): HTMLElement[] {
  const res = elemArray
    .map((value) => convertElement(value))

  return res
}

const standardElements = standardiseElements(elementArray)

class Rotater {
  rotate (elem: HTMLElement): void {
    elem.style.transform = "rotate(-315deg)"
  }

  rotateBack (elem: HTMLElement): void {
    elem.style.transform = ""
  }
}

class Mover {
  move (elem: HTMLElement): void {
    elem.style.transform = "translateX(50px)"
  }

  moveBack (elem: HTMLElement): void {
    elem.style.transform = ""
  }
}

function animated<T extends { new (...args: any[]): {} }> (constructor: T) {
  constructor.prototype.animated = true

  return(constructor)
}

@animated
class MovingElement implements Rotater, Mover {
  rotate: (elem: HTMLElement) => void
  rotateBack: (elem: HTMLElement) => void
  move: (elem: HTMLElement) => void
  moveBack: (elem: HTMLElement) => void
  element: HTMLElement
  animated: boolean

  constructor (elem: HTMLElement) {
    elem.onmousedown = () => {
      this.move(elem)
    }

    elem.onmouseup = () => {
      this.moveBack(elem)
    }

    elem.onmouseover = () => {
      this.rotate(elem)
    }

    elem.onmouseout = () => {
      this.rotateBack(elem)
    }

    if (this.animated) {
      elem.style.transition = "transform 0.5s ease"
    }

    this.element = elem
  }
}

function applyMixins (derivedClass: any, baseClasses: any[]) {
  baseClasses.forEach((baseClass) => {
    Object
      .getOwnPropertyNames(baseClass.prototype)
      .forEach((name) => {
        derivedClass.prototype[name] = baseClass.prototype[name]
      })
  })
}

applyMixins(MovingElement, [ Rotater, Mover ])

/* ---LINKS NOT WORKING--- */
/*
function getAvatar_Promise (elem: HTMLElement) {
  fetch("https://uinames.com/api/")
    .then((response) => response.json())
    .then((response) => {
      alert(`Hi! My name is ${ response.name }`)
      const avatar = `https://robohash.org/set_set3/${ response.name }?size=60x60`
      elem.style.backgroundImage = `url("${ avatar }")`
      document.body.appendChild(elem)
    })
}
*/
/* ---LINKS NOT WORKING--- */

/* ---LINKS NOT WORKING--- */
/*
async function getAvatar_Async (elem: HTMLElement) {
  const uiName = await fetch("https://uinames.com/api/")
  const avatarName = await uiName.json()
  alert(`Hi! My name is ${ avatarName.name }`)
  const avatar = `https://robohash.org/set_set3/${ avatarName.name }?size=60x60`
  elem.style.backgroundImage = `url("${ avatar }")`
  document.body.appendChild(elem)
}
*/
/* ---LINKS NOT WORKING--- */

function getAvatar (elem: HTMLElement, index: number) {
  const urls = [ "pZOwZYs5XQI", "XpbNDNJtcm0", "SoI8wxVaAPI", "f0vQ-o8XVjM", "2sZwYCvwGqI", "cGS5ywfD2Fs" ]
  const upper = (index + 1) * 2
  const lower = upper - 1
  const rng = Math.floor(Math.random() * (upper - lower + 1)) + lower
  const url = urls[(rng - 1)]
  const avatar = `https://source.unsplash.com/${ url }/100x100`
  elem.style.backgroundImage = `url("${ avatar }")`
  document.body.appendChild(elem)
}

for (const [index, elem] of standardElements.entries()) {
  elem.style.width = "100px"
  elem.style.height = "100px"
  elem.style.background = "#CCC"
  elem.style.margin = "20px"

  const elemClass = new MovingElement(elem)

  getAvatar(elemClass.element, index)
}
