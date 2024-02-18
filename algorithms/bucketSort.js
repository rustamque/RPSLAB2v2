function bucketSort(array) {
  if (array.length === 0) {
    return array;
  }

  // Determine minimum and maximum values
  var i;
  var minValue = array[0];
  var maxValue = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];    // Input Range
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  // Initialize buckets
  bucketSize = array.length
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // Distribute input array values into buckets
  for (i = 0; i < array.length; i++) {
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }

  // Sort buckets and place back into input array
  array.length = 0;
  for (i = 0; i < buckets.length; i++) {
    buckets[i].sort();
    for (var j = 0; j < buckets[i].length; j++) {
      array.push(buckets[i][j]);          
    }
  }
  console.log(array);
};

// Экспорт функции для использования в других модулях
module.exports = bucketSort;