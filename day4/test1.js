function sumOfN(n) {
    let sum = 0
  for (let i = 0; i < n; i++) {
    sum += i
    i++
  } 
    return sum;
}

function printMultiplicationTable(n) {
    let result = []
    for (let i = 0; i <= 10; i++) {
        result.push(`${n} * ${i} = ${n*i}`)
        
    }
  return result
}

function countVowels(str) {
    const vowels = "aeiouAEIOU"
    let count = 0
    for (const char in str) {
        if (vowels.includes(char)) {
            count ++;
        }
    }
  return count;
}