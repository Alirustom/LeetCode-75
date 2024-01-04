let reverse_vowels = function(s){
   let arr = s.split();
   let left = 0; let right = arr.length-1;
   const vowels = [a,e,i,o,u,A,E,I,O,U];
   while(left<right){
    if(arr.indexOf(arr[left]) === -1){
      left++;
      continue;
    }
    if(arr.indexOf(arr[right]) === -1){
      right++;
      continue;
    }
   }

}