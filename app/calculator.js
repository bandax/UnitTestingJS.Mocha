class Calculator {
    constructor(){        
    }

    add(){
        let result = 0;
        const argsArray = Array.from(arguments);
        argsArray.forEach((value, index) =>{
          result += value;
        });
        return result;
    }

    multiply(){
      let result = 1;
      const argsArray = Array.from(arguments);
      argsArray.forEach((value, index) =>{
        result *= value;
      });

      return result;
    }
}

module.exports = Calculator;