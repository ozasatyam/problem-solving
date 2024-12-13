package learning;

import java.io.Console;
import java.util.HashMap;
import java.util.Stack;

public class Stacks {
	private static HashMap<Character, Character> mymap = new HashMap<>();
	static {
		mymap.put('}', '{');
		mymap.put(')', '(');
		mymap.put(']', '[');
	}

	static boolean areBracketsBalanced(String exp) {
		Stack<Character> st = new Stack<>();
		String exp2 = exp;
		for (int i = 0; i < exp2.length(); i++) {
			if (mymap.containsKey(exp2.charAt(i))) {
				if (st.empty())
					return false;
				char popChar = st.pop();
				if (popChar != mymap.get(exp2.charAt(i))) {
					return false;
				}
			} else {
				st.push(exp2.charAt(i));
			}

		}
		if (st.empty()) {
			return true;
		} else {
			return false;
		}

	}

	public static void main(String[] args) {
		boolean ans = areBracketsBalanced("");
		System.out.println(ans);

	}

}
