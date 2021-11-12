function hurdleRace(k, height){
    for (let i = 0; i < height.length; i++) {
        for (var j = 0; j < height.length - i - 1; j++) {
          if (height[j] < height[j + 1]) {
            let temp = height[j];
            height[j] = height[j + 1];
            height[j + 1] = temp;
          }
        }
      }
    console.log(height)

    let needPotion = height[0]
    let result = needPotion - k
    if (needPotion < k){
        return 0
    } else {
        return result  
    }
}

console.log(hurdleRace(7, [2,5,4,5,2]))