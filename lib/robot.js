'use strict';

class Robot {
  constructor(bearing, coordinates) {
    this.bearing = bearing
    this.coordinates = [0,0]
  }

  orient(direction) {
    const directions = ["east", "west", "north", "south"]
    if (directions.includes(direction)) {
      this.bearing = direction
    } else {
      throw Error("Invalid Robot Bearing")
    }
  }

  turnRight() {
    if (this.bearing === "north") {
      return this.bearing = "east"
    } else if (this.bearing === "east") {
      return this.bearing = "south"
    } else if (this.bearing === "south") {
      return this.bearing = "west"
    } else if (this.bearing === "west") {
      return this.bearing = "north"
    }
  }

  turnLeft() {
    if (this.bearing === "north") {
      return this.bearing = "west"
    } else if (this.bearing === "west") {
      return this.bearing = "south"
    } else if (this.bearing === "south") {
      return this.bearing = "east"
    } else if (this.bearing === "east") {
      return this.bearing = "north"
    }
  }

  at(x,y) {
    return this.coordinates = [x,y]
  }

  advance() {
    if (this.bearing === "north") {
      return this.coordinates[1] += 1
    } else if (this.bearing === "west") {
      return this.coordinates[0] -= 1
    } else if (this.bearing === "south") {
      return this.coordinates[1] -= 1
    } else if (this.bearing === "east") {
      return this.coordinates[0] += 1
    }
  }

  instructions(str) {
    const splitStr = str.split("")
    const callbackStr = []

    for (let i = 0; i < splitStr.length; i++) {
      if (splitStr[i].toUpperCase() === "L") {
        callbackStr.push("turnLeft")
      } else if (splitStr[i].toUpperCase() === "R") {
        callbackStr.push("turnRight")
      } else if (splitStr[i].toUpperCase() === "A") {
        callbackStr.push("advance")
      }
    }
    return callbackStr
  }

  place(obj) {
    this.coordinates = [obj.x, obj.y]
    this.bearing = obj.direction
  }

  evaluate(str) {
    let instructions = this.instructions(str)
    instructions.forEach(instr => {
      if (instr == "turnRight") {
        this.turnRight()
      } else if (instr == "turnLeft") {
        this.turnLeft()
      } else if (instr == "advance") {
        this.advance()
      }
    })
  }
}
