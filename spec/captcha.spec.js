function Captcha(pa , op , left , right)
{
  this.generate = function(){
    return new OperandL(pa , left) + ' ' + new Operator(op) + ' ' + new OperandR(pa, right);
  }
}
function Operator(Op){
	this.toString = function(){
		if(Op === 1) {
      return '+';}
		else if(Op === 2) {
      return '-';}
		else if(Op === 3) {
      return '*';}
		else if(Op === 4) {
      return '/';}
	}
}
function OperandL(pa,left){
	this.toString = function(){
		    if(pa === 1) {
          return left;}
        else if(pa ===2){
          if(Left === 1){
          return 'ONE';}
  			else if(Left === 2){
          return 'TWO';}
  			else if(Left === 3){
          return 'THREE';}
  			else if(Left === 4){
          return 'FOUR';}
  			else if(Left === 5){
          return 'FIVE';}
  			else if(Left === 6){
          return 'SIX';}
  			else if(Left === 7){
          return 'SEVEN';}
  			else if(Left === 8){
          return 'EIGHT';}
  			else if(Left === 9){
          return 'NINE';}
        }
	}
}
function OperandR(pa,right){
	this.toString = function(){
		if(pa === 2) {
      return right;}
		else if(pa === 1){
			if(right === 0){
        return 'ZERO';}
			else if(right === 1){
        return 'ONE';}
			else if(right === 2){
        return 'TWO';}
			else if(right === 3){
        return 'THREE';}
			else if(right === 4){
        return 'FOUR';}
			else if(right === 5){
        return 'FIVE';}
			else if(right === 6){
        return 'SIX';}
			else if(right === 7){
        return 'SEVEN';}
			else if(right === 8){
        return 'EIGHT';}
			else if(right === 9){
        return 'NINE';}
		}
	}
}

describe('Captcha' , function() {
	it('should echo "7 + FIVE" when input (1,1,7,5)',function(){
		let test = new Captcha(1,1,7,5);
	 expect(test.generate()).toEqual('7 + FIVE');
 	});
  it('should echo "5 * ONE" when input (1,3,5,1)',function(){
		let test = new Captcha(1,3,5,1);
	 expect(test.generate()).toEqual('5 * ONE');
 	});
  it('should echo "3 * FIVE" when input (1,3,3,5)',function(){
		let test = new Captcha(2,4,2,5);
	 expect(test.generate()).toEqual('3 * FIVE');
 	});
  it('should echo "1 + NINE" when input (1,1,1,9)',function(){
		let test = new Captcha(2,4,2,5);
	 expect(test.generate()).toEqual('1 + NINE');
 	});
});
