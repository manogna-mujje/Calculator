// Function to perform operations

function sum (leftOperand, rightOperand) {
  var answer = leftOperand + rightOperand;
  console.log(`Answer from functions: ${answer}`);
    return (leftOperand + rightOperand);
  }

function diff(leftOperand, rightOperand) {
  return (leftOperand - rightOperand);
}
  
function product (leftOperand, rightOperand) {
  return (leftOperand * rightOperand);
}

function quotient (leftOperand, rightOperand) {
  return (leftOperand / rightOperand);
}

module.exports = {
    sum,
    diff,
    product,
    quotient
  }
