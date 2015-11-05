/*global describe, it */
'use strict';

(function () {
  describe('FizzBuzz', function () {

    describe('Alternate FizzBuzz solution', function () {

      var result;

      it('should return false input message for any non-integer', function () {
          result = fizzBuzzIt('peanut');
          expect(result).toEqual("Input must be an integer.");
      });

      it('should return "Fizz" for any multiple of 3', function () {
          result = fizzBuzzIt(5);
          expect(result[2]).toEqual("Fizz");
      });

      it('should return a number for any value that is not divisible by 3 or 5.', function () {
          result = fizzBuzzIt(1);
          expect(result[0]).toEqual(1);
      });

      it('should return "Buzz" for any multiple of 3', function () {
          result = fizzBuzzIt(5);
          expect(result[4]).toEqual("Buzz");
      });

      it('should return "FizzBuzz" for any multiple of 3', function () {
          result = fizzBuzzIt(15);
          expect(result[14]).toEqual("FizzBuzz");
      });
        
    });
  });
})();