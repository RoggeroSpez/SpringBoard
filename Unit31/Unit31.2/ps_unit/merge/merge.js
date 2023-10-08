let arr1 = [1,3,4,5];
let arr2 = [2,4,6,8];
merge(arr1,arr2) // [1,2,3,4,4,5,6,8]

arr1 // [1,3,4,5];
arr2 // [2,4,6,8];

let arr3 = [-2,-1,0,4,5,6];
let arr4 = [-3,-2,-1,2,3,5,7,8];

merge(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

let arr5 = [3,4,5]
let arr6 = [1,2]

merge(arr5,arr6) // [1,2,3,4,5]
// break between two portions of the question
mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
mergeSort([1, 2, 3]); // [1, 2, 3]
mergeSort([]);

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35,
                 //  43, 67, 75, 232, 232, 453, 546, 4342]
// My code begins

function merge1(arr1, arr2){
    const r = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            r.push(arr1(i));
            i++;
        }
        else {
            r.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        r.push(arr1[i]);
        i++
    }
    while(j < arr2.length){
        r.push(arr2[j]);
        j++
    }
    return r;
}
function merge2(arr3, arr4){
    const re = [];
    let k = 0;
    let l = 0;
    while(k < arr3.length && l < arr4.length){
        if(arr3[k] < arr4[l]){
            re.push(arr3(k));
            k++;
        }
        else {
            re.push(arr4[l]);
            l++;
        }
    }
    while(k < arr3.length){
        re.push(arr3[k]);
        k++
    }
    while(l < arr4.length){
        re.push(arr4[l]);
        l++
    }
    return re;
}

function merge3(arr5, arr6){
    const res = [];
    let m = 0;
    let n = 0;
    while(m < arr5.length && n < arr6.length){
        if(arr5[m] < arr6[n]){
            res.push(arr5(m));
            m++;
        }
        else {
            res.push(arr6[n]);
            n++;
        }
    }
    while(m < arr5.length){
        res.push(arr5[i]);
        m++
    }
    while(n < arr6.length){
        res.push(arr6[n]);
        n++
    }
    return res;
}
// O(n log n) merging arrays use O(n+m) time/space
