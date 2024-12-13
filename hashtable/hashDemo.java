package hashtable;

import java.util.*;

public class hashDemo {
	private class Entry {
		private int key;
		private String value;

		public Entry(int key, String value) {
			this.key = key;
			this.value = value;
		}
	}

	private LinkedList<Entry>[] entries = new LinkedList[5];

	public void put(int key, String value) {
		var entry = getEntry(key);
		if (entry != null) {
			entry.value = value;
			return;
		}
		System.out.println("new");
		getOrCreateBucket(key).addLast(new Entry(key, value));
	}

	public String Remove(int key) {
		throw new EmptyStackException();
	}

	public String get(int key) {
		var entry = getEntry(key);
		return entry != null ? entry.value : null;
	}

	private int hash(int key) {
		return key % entries.length;
	}

	private Entry getEntry(int key) {
		var bucket = getBucket(key);
		System.out.println(bucket);
		
		if (bucket != null) {
			for (var entry : bucket) {
				if (entry.key == key) {
					return entry;
				}
			}
		}
		return null;
	}

	private LinkedList<Entry> getBucket(int key) {
		var index = hash(key);
		var bucket = entries[index];
		return bucket;
	}

	private LinkedList<Entry> getOrCreateBucket(int key) {
		var index = hash(key);
		var bucket = entries[index];
		if (bucket == null)
			entries[index] = new LinkedList<>();
		return bucket;
	}

}
