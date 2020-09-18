const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let team = arr.find( obj => obj.result === 'W' )
  if (team) { return team.year } else { team }
}