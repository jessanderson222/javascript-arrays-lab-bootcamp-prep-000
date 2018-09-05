// Add your functions and code here
function destructivelyAppendKitten(name) {
  var kittens = ["Milo", "Otis"]
  kittens.pop(name)
  return kittens
}
destructivelyAppendKitten("Garfield")
destructivelyAppendKitten("Ralph")