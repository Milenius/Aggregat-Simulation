function create2DArray(_width, _height){
  var nArray = new Array(_width);
  for (let i = 0; i < _width; i++){
    nArray[i] = new Array(_height);
  }
  return nArray;
}

function randomize2DArray(_arr, _min, _max){
  for (let i = 0; i < _arr.length; i++){
    for (let ii = 0; ii < _arr[i].length; ii++){
      _arr[i][ii] = getRandomArbitrary(_min, _max);
    }
  }
  return _arr
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArbitrary(_min, _max) {
  return Math.random() * (_max - _min) + _min;
}

function nonLinArray(_arr){
  var tempArr = create2DArray(_arr.length, _arr[0].length);
  for (let i = 0; i < _arr.length; i++){
    for (let ii = 0; ii < _arr[i].length; ii++){
      tempArr[i][ii] = nonLin(_arr[i][ii]);
    }
  }
  return tempArr;
}

function nonLin(_inp){
  return 1/(1 + Math.exp( - _inp));
}

function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  var pivot   = items[Math.floor((right + left) / 2)].fitness,
    i       = left,
    j       = right;
  while (i <= j) {
    while (items[i].fitness < pivot) {
      i++;
    }

    while (items[j].fitness > pivot) {
      j--;
    }

    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }

  return i;
}

function quickSortNN(items, left, right) {
  var index;
  if (items.length > 1) {
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;

    index = partition(items, left, right);

    if (left < index - 1) {
        quickSortNN(items, left, index - 1);
    }

    if (index < right) {
        quickSortNN(items, index, right);
    }
  }
  return items;
}

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});
