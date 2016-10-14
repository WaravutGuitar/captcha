
function Captcha(pa , op , left , right)
{
  this.generate = function(){
    return new OperandL(pa , left) + ' ' + new Operator(op) + ' ' + new OperandR(pa, right);
  }
}
function operator(Op){
	this.toString = function(){
		if(Op === 1) {return '+';}
		else if(Op === 2) {
      return '-';}
		else if(Op === 3) {
      return '*';}
		else if(Op === 4) {
      return '/';}
	}
}
