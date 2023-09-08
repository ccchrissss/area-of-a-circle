var circleArea = function(radius) {

  if (typeof radius == 'number' && radius > 0) {
    return (Math.PI * (radius ** 2)).toFixed(2)
  } else {return false}
  
}

console.log(circleArea('hello'))
console.log(circleArea(4))
