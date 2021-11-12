function validatePIN (pin) {
  //return true or false
  let splitPin = pin.split("")

  for (let i in pin) {
      if (pin[i] > "9" || pin[i] < "0") {
          return false
      }
  }

  if (splitPin.length === 4 || splitPin.length === 6) {
    return true
  } else {
      return false
  }
}

let pin = "1123"

console.log(validatePIN(pin))