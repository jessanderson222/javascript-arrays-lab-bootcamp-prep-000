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

function destructivelyRemoveLastKitten(kittens) {
  return kittens.slice(0, -1)
}
