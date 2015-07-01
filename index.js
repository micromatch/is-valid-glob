'use strict';

module.exports = function isValidGlob(glob) {
  if (typeof glob === 'string') {
    return true;
  }
  if (Array.isArray(glob)) {
    return every(glob);
  }
  return false;
};

function every(arr) {
  var len = arr.length;
  while (len--) {
    if (typeof arr[len] !== 'string') {
      return false;
    }
  }
  return true;
}
