 export function swap (massive) {
   for (let i = 0; i = massive.length - 1; i++) {
     let temp1;
      if (massive.length > 1) {
         temp1 = massive[0];
         massive[0] = massive[i];
         massive[i] = temp1;
         return massive;
}
  else {
    return massive;
  }
   }
}
