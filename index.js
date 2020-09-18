// const testVar = {}

// function testFunc() {
//   return "hi"
// }

superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}

//MY CORRECT ANSWER!!
// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ]

// const superbowlWin = (array) => {
  
//   const winsArray = array.find(record => {
//      if (record.result === "W") {
//      return record.year
//      }
//   })
//   return winsArray
// }

// superbowlWin(record);