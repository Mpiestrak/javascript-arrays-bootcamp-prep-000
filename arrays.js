var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var element = "hershey"

function addElementToBeginningOfArray(chocolateBars, element){
  chocolateBars = [element, ...chocolateBars]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.unshift(element)
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, element){
  chocolateBars = [...chocolateBars, element]
  return chocolateBars
}
function destructivelyAddElementToEndOfArray(chocolateBars, element){
  chocolateBars.push(element)
  return chocolateBars
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(chocolateBars){
    return chocolateBars.slice(1)
}
