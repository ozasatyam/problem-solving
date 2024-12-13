package learning;

import java.util.HashSet;
import java.util.Set;

public class stackIMP {

	public static void main(String[] args) {
		Set<Character> st = new HashSet<Character>();
		String temp = "sartinn";
		var te = temp.toCharArray();
		char ab = Character.MIN_VALUE;
		for (Character character : te) {
			if (!st.contains(character)) {
				st.add(character);
			} else {
				ab = character;
				break;
			}
		}
		if(ab != Character.MIN_VALUE) {
			System.out.println(ab);
		}
		
	}

}
