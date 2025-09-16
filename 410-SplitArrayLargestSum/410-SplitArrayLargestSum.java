// Last updated: 9/16/2025, 3:10:31 PM
class Solution {
    public boolean isValid(int[] nums, int k, int mid) {
        int counter = 1;
        int sum = 0;
        for (int num : nums) {
            sum += num;
            if (sum > mid) {
                counter++;
                sum = num;
                if (counter > k) {
                    return false;
                }
            }

        }
        return true;

    }

    public int splitArray(int[] nums, int k) {
        int high = Arrays.stream(nums).sum();
        int low = Arrays.stream(nums).max().getAsInt();
        while (low <= high) {
            int mid = low + ((high - low) / 2);
            if (isValid(nums, k, mid)) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }
}