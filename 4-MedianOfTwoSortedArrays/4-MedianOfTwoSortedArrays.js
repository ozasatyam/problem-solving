// Last updated: 9/16/2025, 3:11:49 PM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    let len1 = nums1.length
    let len2 = nums2.length
    let left = 0, right = len1
    while (left <= right) {
        const part1 = Math.floor((left + right) / 2)
        const part2 = Math.floor((len1 + len2 + 1) / 2) - part1
        const maxLeft1 = part1 === 0 ? -Infinity : nums1[part1 - 1];
        const minRight1 = part1 === len1 ? Infinity : nums1[part1];
        const maxLeft2 = part2 === 0 ? -Infinity : nums2[part2 - 1];
        const minRight2 = part2 === len2 ? Infinity : nums2[part2];
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((len1 + len2) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            right = part1 - 1
        } else {
            left = part1 + 1
        }

    }

};