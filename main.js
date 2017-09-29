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
    let position = this.position
    let direction = this.direction
    const player = document.querySelector('#' + this.player)
    if (direction === 0) {
      this.interval = setInterval(function () {
        position[0] += 5
        Object.assign(player.style, {
          left: position[0] + 'px'
        })
      }, 16)
    }
    else if (direction === 180) {
      this.interval = setInterval(function () {
        position[0] -= 5
        Object.assign(player.style, {
          left: position[0] + 'px'
        })
      }, 16)
    }
    else if (direction === 270) {
      this.interval = setInterval(function () {
        position[1] -= 5
        Object.assign(player.style, {
          top: position[1] + 'px'
        })
      }, 16)
    }
    else if (direction === 90) {
      this.interval = setInterval(function () {
        position[1] += 5
        Object.assign(player.style, {
          top: position[1] + 'px'
        })
      }, 16)
    }
  }
  stop() {
    clearInterval(this.interval)
  }
  turnLeft() {
    const $player = document.querySelector('#' + this.player)
    const player = this
    if (player.direction === 0) {
      player.direction = 270
      Object.assign($player.style, {
        transform: 'rotate(270deg)'
      })
    }
    else if (player.direction === 270) {
      player.direction = 180
      Object.assign($player.style, {
        transform: 'rotate(180deg)'
      })
    }
    else if (player.direction === 180) {
      player.direction = 90
      Object.assign($player.style, {
        transform: 'rotate(90deg)'
      })
    }
    else if (player.direction === 90) {
      player.direction = 0
      Object.assign($player.style, {
        transform: 'rotate(0deg)'
      })
    }
    this.stop()
    this.start()
  }
  turnRight() {
    const $player = document.querySelector('#' + this.player)
    const player = this
    if (player.direction === 0) {
      player.direction = 90
      Object.assign($player.style, {
        transform: 'rotate(90deg)'
      })
    }
    else if (player.direction === 90) {
      player.direction = 180
      Object.assign($player.style, {
        transform: 'rotate(180deg)'
      })
    }
    else if (player.direction === 180) {
      player.direction = 270
      Object.assign($player.style, {
        transform: 'rotate(270deg)'
      })
    }
    else if (player.direction === 270) {
      player.direction = 0
      Object.assign($player.style, {
        transform: 'rotate(0deg)'
      })
    }
    this.stop()
    this.start()
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
  if (e.keyCode === 97) {
    player1.turnLeft()
  }
})

addEventListener('keypress', function (e) {
  if (e.keyCode === 100) {
    player1.turnRight()
  }
})

addEventListener('keypress', function (e) {
  if (e.keyCode === 106) {
    player2.turnLeft()
  }
})

addEventListener('keypress', function (e) {
  if (e.keyCode === 108) {
    player2.turnRight()
  }
})
addEventListener('keypress', function (e) {
  console.log(e.keyCode)
})
