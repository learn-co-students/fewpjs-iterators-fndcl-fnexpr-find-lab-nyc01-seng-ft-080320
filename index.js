const testVar = {}

function testFunc() {
  return "hi"
}


const superbowlWin = (array) => {
  let query = array.find(object => object.result === "W");
  return !!query ? query.year : undefined;
  }