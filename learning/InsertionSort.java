package learning;

public class InsertionSort {

	public static void main(String[] args) {
		int data[] = { 10, 230, 4, 151, 5, 2 };
		for (int i = 1; i < data.length; i++) {
			if (data[i] < data[i - 1]) {
				var j = i;
			
				while (j > 0) {
					if (data[j] < data[j - 1]) {
						var temp = data[j];
						data[j] = data[j - 1];
						data[j - 1] = temp;
						j--;
					} else {
						break;
					}

				}
			}
		}
		System.out.println(data[6]);
	}

}
