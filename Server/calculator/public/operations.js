// Function to perform operations

function sum (leftOperand, rightOperand) {
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
