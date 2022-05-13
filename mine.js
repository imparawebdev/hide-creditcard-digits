// return masked string
function maskify(cc) {
  const nDesiredChars = 4
  let nChars = 0    // number of final characters actually available in the string
  let nSymbols = 0  // number of symbols to display before the unmasked characters
  const len = cc.length

  if (len > nDesiredChars) {
    nChars = nDesiredChars
    nSymbols = len - nChars
  } else {
    nChars = len
  }

  const start = len - nChars
  const end = len
  const displayedChars = cc.substr(start, end)

  const symbol = '#'
  const hiddenChars = symbol.repeat(nSymbols)

  const maskedString = hiddenChars + displayedChars

  return maskedString
}

module.exports = maskify