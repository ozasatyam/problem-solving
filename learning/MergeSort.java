package learning;

public class MergeSort {
	int value[];

	public MergeSort(int value[]) {
		this.value = value;
	}

	private void join(int i, int j, int mid) {
		int start = i;
		int m = mid + 1;
		System.out.println(i);
		System.out.println(j);
		System.out.println(m);
		while (start <= mid && m <= j) {
			if (value[start] < value[m]) {
				start++;
			} else {
				int temp = value[start];
				value[start] = value[m];
				value[m] = temp;
				m++;
			}
		}
	}

	private void split(int i, int j) {
		int mid = i + (j - i) / 2;
		if (j <= i) {
			return;
		} else {
			split(i, mid);
			split(mid + 1, j);
			join(i, j, mid);
//			join(i, j, mid);
		}
	}

	public void sort() {
		split(0, value.length - 1);
		for (int i : value) {
			System.out.println(i);
		}
//		System.out.println(value[1]);
	}
}
