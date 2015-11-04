/*global describe, it */
'use strict';

(function () {
  describe('FizzBuzz', function () {

    describe('Alternate FizzBuzz solution', function () {

      var result;

      it('Return "Fizz" for any multiple of 3', function () {
          result = fizzBuzzIt('peanut');
          expect(result).toEqual("Input must be an integer.");
      });

      it('Return "Fizz" for any multiple of 3', function () {
          result = fizzBuzzIt(5);
          expect(result[2]).toEqual("Fizz");
      });

      it('Return "Buzz" for any multiple of 3', function () {
          result = fizzBuzzIt(5);
          expect(result[4]).toEqual("Buzz");
      });

      it('Return "FizzBuzz" for any multiple of 3', function () {
          result = fizzBuzzIt(15);
          expect(result[14]).toEqual("FizzBuzz");
      });
        
    });
  });
})();