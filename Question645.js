/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let result=[0,0];
    let map = new Map();
    
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for(let i=1; i<nums.length+1; i++){
        if(!map.has(i)){
            result[1]=i
        }
         if(map.get(i)===2){
            result[0]=i
        }
    }
    return result
    
};