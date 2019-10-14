'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let startLength = this.length - 1;

    if (arguments.length === 0) {
      return -1;
    }

    if (fromIndex) {
      if (fromIndex >= 0) {
        startLength = fromIndex;
      } else {
        startLength = this.length + fromIndex;
      }

      if (startLength > this.length) {
        startLength = this.length - 1;
      }

      if (startLength < 0) {
        return -1;
      }
    }

    for (let i = startLength; i >= 0; i--) {
      if (searchElement === isNaN) {
        if (this[i] === isNaN) {
          return i;
        };
      };

      if (this[i] === searchElement) {
        return i;
      };
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
