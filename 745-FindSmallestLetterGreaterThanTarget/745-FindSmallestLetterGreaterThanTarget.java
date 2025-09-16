// Last updated: 9/16/2025, 3:10:25 PM
class Solution {
    public char nextGreatestLetter(char[] num, char target) {
	    int min = 0;
		int max = num.length - 1;
		int mid =0 ;
		while (min <= max) {
			mid = (min + (max - min) / 2);
			if (target < num[mid]) {
				max = mid - 1;
			} else {
				min = mid + 1;
			
			}
		}
		return num[min % num.length];
        }
}