// Last updated: 9/16/2025, 3:11:11 PM
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let left = 0
    let right = 0
    let temp = []
    while (left < m && right < n) {
        if (nums1[left] < nums2[right]) {
            temp.push(nums1[left]);
            left++;
        } else {
            temp.push(nums2[right]);
            right++;
        }
    }
    while (left < m) {
        temp.push(nums1[left]);
        left++;
    }
    while (right < n) {
        temp.push(nums2[right]);
        right++;
    }
    for(let i=0;i<temp.length;i++){
        nums1[i] = temp[i]
    }

};