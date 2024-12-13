package learning;

public class FirstLastPositionBinarySearch {
	static int[] binarySearch(int nums[], int target) {
		int ans[] = {-1,-1};
		int leftAns = binarySearchImp(nums, target, true);
		int rightSideAns = binarySearchImp(nums, target, false);
		System.out.println(leftAns+"left" + rightSideAns);

		return ans;
	}
	static int binarySearchImp(int nums[], int target, Boolean isItForLeft) {
		int min = 0;
		int max = nums.length-1;
		while(min<max) {
//			System.out.println(min+"min"+max);
			int mid = (min + (max - min) / 2);
			System.out.println(mid);
			if(target<nums[mid]) {
				max = mid-1;
			}else if(target>nums[mid]) {
				min = mid+1;
			} else {
				if(isItForLeft) {
					
					max = mid;
				}else {
					min = mid;
				}
			}
		}
		return min;
	}

	public static void main(String[] args) {

		// TODO Auto-generated method stub
		int nums[] = { 1,1,2,2,4,4,5,5,6,6};
		int target = 5;
		int ans[] = binarySearch(nums, target);
		System.out.println(ans);
	}

}
