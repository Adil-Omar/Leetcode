/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let heighestP = -Infinity;
let lowestP = Infinity;
    for(let i=0;i<nums.length;i++){
        let num=nums[i];
        for(let j=i+1; j<nums.length; j++){
            let currentP=num*nums[j];
            if(currentP>heighestP){
                heighestP=currentP
            }
             if(currentP<lowestP){
                lowestP=currentP
            }
        }
    }
    return heighestP-lowestP
};