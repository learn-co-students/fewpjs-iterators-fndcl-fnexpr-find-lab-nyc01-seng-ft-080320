function superbowlWin(array) {
  let win = array.find(object => object.result === "W")
  return win ? win.year : undefined
}