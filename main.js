class Car {
  constructor(image, position, direction) {
    this.image = image
    this.position = position
    this.direction = direction
  }
  display() {
    const $img = document.createElement('img')
    $img.setAttribute('src', this.image)
    const spawnDirection = {
      'player1': 0,
      'player2': 180
    }
    Object.assign($img.style, {
      'width': '100px',
      'position': 'absolute',
      'top': this.position[1] + 'px',
      'left': this.position[0] + 'px',
      'transform': `rotate(${spawnDirection[this.direction]}deg)`
    })
    document.querySelector('#zone').appendChild($img)
  }
}

const player1 = new Car('images/car1.png', ['50', '330'], 'player1')
const player2 = new Car('images/car2.png', ['1150', '330'], 'player2')
player1.display()
player2.display()
