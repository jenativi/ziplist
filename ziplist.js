// Function without underscore
function zipList(list1, list2) {
  const result = [];
  if (list1.length === list2.length) {
    for (let i = 0; i < list1.length; i++) {
      result.push(list1[i], list2[i]);
    }
    return result;
  }
  return 'Length of list not match';
}

// Function using underscore
function zipListTheSimpleWay(list1, list2) {
  let easyResult = [];
  if (list1.length === list2.length) {
    easyResult = _.flatten(_.zip(list1, list2));
    return easyResult;
  }
  return 'Length of list not match';
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

console.log('zipList:', zipList(list1, list2));
console.log('zipListTheSimpleWay:', zipListTheSimpleWay(list1, list2));
