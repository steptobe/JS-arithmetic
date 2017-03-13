/***** 
******
**常见算法函数
******
******/
/** 冒泡排序 **/
function bubbleSort(arr){
  var i = 0,
      j = 0;
  for(i=1; i<arr.length; i++){
  	//每循环一个，就把大的往后推
    for(j=0; j<=arr.length-i; j++){
      var temp = 0;
      // ">" 从小到大排序
      // "<" 从大到小排序
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
/** 冒泡排序 end **/

/** 快速排序 **/

function quickSort(elements) {
	if (elements.length <= 1) {
		return elements;
	}
	var arr = [];
	var pivotIndex = Math.floor(elements.length / 2);
	var pivot = elements.splice(pivotIndex, 1)[0];
	var left = [];
	var right = [];
	for (var i = 0; i < elements.length; i++) {
		if(elements[i] < pivot) {
			left.push(elements[i]);
		} else {
			right.push(elements[i]);
		}
	}
	arr = quickSort(left).concat([pivot], quickSort(right));
	return arr;
}

/** 快速排序  end **/

/** 数组去重 **/
function removeDuplicatedItem(arr) {
	var ret = [];

	for(var i = 0,len = arr.length;i < len; i++) {
		if (ret.indexOf(arr[i]) === -1) {
			ret.push(arr[i]);
		}
	}

	return ret;
}

function removeDuplicatedItem2(arr) {
	var tmp = {},ret = [];

	for (var i = 0,len = arr.length;i < len; i++) {
		if (!tmp[arr[i]]) {
			//把数组存在对象里，检测
			tmp[arr[i]] = 1;
			ret.push(arr[i]);
		}
	}
	return ret;
}

function removeDuplicatedItem3(arr) {
	var ret = [];

	arr.forEach(function(e, i, arr){
		if (arr.indexOf(e) === i) {
			ret.push(e);
		}
	});

	return ret;
}
/** 数组去重 end **/
var elements = [3, 1, 5, 7, 2, 4, 5];
console.log('before' + elements);
console.log(quickSort(elements));
console.log('after' + elements);