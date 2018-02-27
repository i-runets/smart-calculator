class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.result = initialValue;
  }

  add(number) {
    // your implementation
    this.result += '+' + number;
    return this;
  }

  subtract(number) {
    // your implementation
    this.result += '-' + number;
    return this;
  }

  multiply(number) {
    // your implementation
    this.result += '*' + number;
    return this;
  }

  devide(number) {
    // your implementation
    this.result += '/' + number;
    return this;
  }

  pow(number) {
    // your implementation
    this.result += "**" + number;
    return this;
  }

  valueOf() {
    return eval(this.result);
  }
}

module.exports = SmartCalculator;
