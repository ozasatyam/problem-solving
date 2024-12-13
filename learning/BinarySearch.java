package learning;

import java.util.ArrayList;

public class BinarySearch {

	public static void main(String[] args) {
		int[] num = { 5,5,5,5,7,7,8,8,10};
		int target = 5;
		int min = 0;
		int max = num.length - 1;
		while (min <= max) {
		int	mid = (min + (max - min) / 2);
			if (target < num[mid]) {
				max = mid - 1;
			} else {
				min = mid + 1;
			
			}
		}

//		ans = (min % num.length);

	}

}
