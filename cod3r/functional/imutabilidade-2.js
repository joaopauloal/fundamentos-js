const nums = [4, 8, 3, 2, 9, 1, 9, 3]

function somarArray(array, total = 0){
  if(array.length === 0){
    return total
  }
  return somarArray(array.slice(1), total + array[0])
}

const total = somarArray(nums)
console.log(total)