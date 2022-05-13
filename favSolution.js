// this solution was provided by user _andorey_ on _codewars_
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}

module.exports = maskify