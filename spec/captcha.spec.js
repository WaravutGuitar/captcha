
function Captcha(pattern , operator , left , right)
{
  this.generate = function(){
    return new OperandL(pattern , left) + ' ' + new Operator(operator) + ' ' + new OperandR(pattern , right);
  }
}
