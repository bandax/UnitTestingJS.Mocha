const Calculator = require('../../app/calculator');
const chai = require('chai');
const { expect } = require('chai');

describe('Calculator', function() {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 5 as the sum of 3 + 2', function(){
        expect(calculator.add(3,2)).to.be.equal(5);
    });

    it('should return 6 as 3 times 2', function(){
        expect(calculator.multiply(3,2)).to.be.equal(6);
    });
    
})




