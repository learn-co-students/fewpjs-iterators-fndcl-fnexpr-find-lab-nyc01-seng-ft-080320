const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (superbowls) => {
  let found = superbowls.find(s => {
    return s.result === "W"
  })
  if(found){
    return found.year}
    
}