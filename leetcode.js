let reverse_vowels = function(s){
   const arr = s.split("");
   let left = 0; let right = arr.length;
   const vowels = ['a','e','i','o','u','A','E','I','O','U'];
   while(left<right){
    if(vowels.indexOf(arr[left]) === -1){
      left++;
      continue;
    }
    if(vowels.indexOf(arr[right]) === -1){
      right--;
      continue;
    }
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
   }
   return arr.join("");
}
res = reverse_vowels('hello');

console.log(res);