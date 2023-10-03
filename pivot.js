let arr = [4, 2, 5, 3, 6];
pivot(arr); // 2
arr; // [3, 2, 4, 5, 6];

let arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
let arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];

pivot(arr1); // 3
pivot(arr2); // 4

arr1.slice(0, 3).sort((a, b) => a - b); // [2, 3, 4]
arr1.slice(3).sort((a, b) => a - b); // [5, 7, 8, 9, 10, 20]

arr2.slice(0, 4).sort((a, b) => a - b); // [0, 2, 4, 5]
arr2.slice(4).sort((a, b) => a - b); // [8, 10, 11, 12, 13, 16]