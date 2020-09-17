const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = arrOfObjects => {
    let win =  arrOfObjects.find(obj => obj.result === "W")
        if(!!win){
            return win.year
        } else {
            return undefined
        }
  }

superbowlWin()