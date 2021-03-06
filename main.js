class Car {
  constructor(image, position, player) {
    this.image = image
    this.position = position
    this.player = player
    this.interval = undefined
  }
  display() {
    const $img = document.createElement('img')
    $img.setAttribute('src', this.image)
    $img.setAttribute('id', this.player)
    const spawnDirection = {
      'player1': 0,
      'player2': 180
    }
    this.direction = spawnDirection[this.player]
    Object.assign($img.style, {
      'width': '100px',
      'position': 'absolute',
      'top': this.position[1] + 'px',
      'left': this.position[0] + 'px',
      'transform': `rotate(${spawnDirection[this.player]}deg)`
    })
    document.querySelector('#zone').appendChild($img)
  }
  start() {
    this.stop()
    const position = this.position
    const player = document.querySelector('#' + this.player)
    if (this.direction === 0) {
      this.interval = setInterval(function () {
        position[0] += 5
        Object.assign(player.style, {
          left: position[0] + 'px'
        })
      }, 16)
    }
    if (this.direction === 180) {
      this.interval = setInterval(function () {
        position[0] -= 5
        Object.assign(player.style, {
          left: position[0] + 'px'
        })
      }, 16)
    }
    if (this.direction === 270) {
      this.interval = setInterval(function () {
        position[0] += 5
        Object.assign(player.style, {
          left: position[1] + 'px'
        })
      }, 16)
    }
    if (this.direction === 90) {
      this.interval = setInterval(function () {
        position[0] -= 5
        Object.assign(player.style, {
          left: position[1] + 'px'
        })
      }, 16)
    }
  }
  stop() {
    clearInterval(this.interval)
  }
}

const player1 = new Car('images/car1.png', [50, 330], 'player1')
const player2 = new Car('images/car2.png', [1150, 330], 'player2')
player1.display()
player2.display()
addEventListener('keypress', function (e) {
  if (e.keyCode === 119) {
    player1.start()
  }
})

addEventListener('keypress', function (e) {
  if (e.keyCode === 105) {
    player2.start()
  }
})

addEventListener('keypress', function (e) {
  if (e.keyCode === 115) {
    player1.stop()
  }
})

addEventListener('keypress', function (e) {
  if (e.keyCode === 107) {
    player2.stop()
  }
})
addEventListener('keypress', function (e) {
  console.log(e.keyCode)
})
