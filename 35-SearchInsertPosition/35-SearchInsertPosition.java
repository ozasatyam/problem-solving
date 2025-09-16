// Last updated: 9/16/2025, 3:11:29 PM
class Solution {
    public int searchInsert(int[] num, int target) {
		int min = 0;
		int max = num.length - 1;
		int mid = Math.abs(num.length / 2);
		int ans = -1;
        if( num[0]>target){
            return 0 ;
        }
        if(num[max]< target){
            return max + 1;
        }
		while (min <= max) {
           
			if (num[mid] == target) {
				ans = mid;
				break;
			} else if (target > num[mid]) {

				min = mid + 1;
                				mid = (min + (max-min) / 2);
			} else {
				
				max = mid - 1;
                mid = (min + (max-min) / 2);
			}
		}
		if (ans != -1) {
            return ans;
		} else {
            return max+1;
		}
    }
}