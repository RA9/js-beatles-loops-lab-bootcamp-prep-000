// add solution here

function theBeaatlesPlay(musicians,instrunents) {
  let new_array = []
  
  for(let i = 0; i < musicians.length; i++) {
    new_array.push(musicians[i] +" plays " + instruments[i])
  }
  
  return new_array
}