// Add your functions and code here
kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
destructivelyAppendKitten("Ralph")

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
destructivelyPrependKitten("Ralph")

function destructivelyRemoveLastKitten(array) {
   return kittens.slice(0, array.length - 1)
  }
  destructivelyRemoveLastKitten(kittens) 