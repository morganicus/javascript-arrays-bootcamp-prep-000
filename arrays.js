var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

<<<<<<< HEAD
function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array
}
function addElementToEndOfArray (array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array
}
function accessElementInArray (array, index) {
  return array [index]
}
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array
}
function removeElementFromBeginningOfArray (array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array
}
function removeElementFromEndOfArray (array) {
  return array.slice(0,array.length -1)
}
function removeElementFromMiddleOfArray (array, index) {
  
}
=======
function addElementToBeginningOfArray (array, element) { return [`${element}`, ...array]}
function destructivelyAddElementToBeginningOfArray (array, element) { return array = [`${element}`, ...array]}
>>>>>>> a9fa55f85e51c540a35ebb7209f635ce449921fb
