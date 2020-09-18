const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (arrayOfObjects) => {
    const win = arrayOfObjects.find(object => {
        return object.result === 'W'
        })

    if (win) {
        return win.year
    } else {
        return win
    }
}