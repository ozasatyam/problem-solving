// Last updated: 9/16/2025, 3:11:39 PM
class Solution {
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


    public boolean isValid(String s) {
        return areBracketsBalanced(s);
    }
}

