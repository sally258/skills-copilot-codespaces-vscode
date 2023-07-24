// quickSort
// 1. pivot을 선택한다.
// 2. pivot을 기준으로 작은 값은 왼쪽, 큰 값은 오른쪽을 정렬한다.
// 3. 왼쪽과 오른쪽을 각각 quickSort를 실행한다.
// 4. 왼쪽과 오른쪽을 합쳐서 리턴한다.

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  const lSorted = quickSort(left);
  const rSorted = quickSort(right);

  return [...lSorted, pivot, ...rSorted];
}

const items = [5, 3, 7, 6, 2, 9];
console.log(quickSort(items));