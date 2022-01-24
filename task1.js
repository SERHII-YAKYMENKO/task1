const task1 = (arr, groupLength, gen) => {
  function* eachChunk(arr, length) {
    let current = 0;

    while (current <= arr.length - length) {
      yield arr.slice(current, current++ + length);
    }
  }

  const result = [];

  for (const group of eachChunk(arr, groupLength)) {
    result.push(+gen.some(cmp => cmp(...group)));
  }
  return result;
}

console.log(task1([1, 3, 5, 4, 5, 7], 3, [
  (a, b, c) => a > b && b < c,
  (a, b, c) => a < b && b > c,
]));