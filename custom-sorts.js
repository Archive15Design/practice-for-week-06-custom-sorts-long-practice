function ageSort(users) {
  users.sort(function compareAge(firstUser, secondUser) {
    firstUserAge = firstUser.age;
    secondUserAge = secondUser.age;

    return firstUserAge - secondUserAge;
  })
}

function oddEvenSort(arr) {

    function oddsEven(firstItem, secondItem) {

      if ((firstItem % 2 === 0 && secondItem % 2 === 0) && firstItem < secondItem) return -1;
      else if ((firstItem % 2 === 0 && secondItem % 2 !== 0)) return 1;
      else if ((firstItem % 2 !== 0 && secondItem % 2 !== 0) && firstItem < secondItem) return -1;
      else if ((firstItem % 2 !== 0 && secondItem % 2 === 0)) return -1;
      else return 0;

    }
  arr.sort(oddsEven);
  return arr;
}

function validAnagrams(s, t) {
  let string = s.split('');
  let tester = t.split('');

  string.sort();
  tester.sort();
  let stringOut = string.join('');
  let testerOut = tester.join('');

  return (stringOut === testerOut);
}

function reverseBaseSort(arr) {
  // this problem confused me. I understand how to sort it like they want, but I don't know how to figure out what the base of a number is?
  // I blame my poor math schooling.
}

function frequencySort(arr) {

  let freqCount = {};
  for (const num of arr){
    if (freqCount[num] === undefined) freqCount[num] = 1;
    else freqCount[num] += 1;
  }

  arr.sort(function sortByFrequency(firstItem, secondItem) {
    let first = firstItem.toString();
    let second = secondItem.toString();

    if (freqCount[first] > freqCount[second]) return 1;
    else if (freqCount[first] < freqCount[second]) return -1;
    else if (freqCount[first] === freqCount[second] && firstItem > secondItem) return -1;
    else if (freqCount[first] === freqCount[second] && firstItem < secondItem) return 1;
    else if (freqCount[first] === freqCount[second] && firstItem === secondItem) return 0;
    else return 0;
  })

  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
