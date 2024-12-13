package learning_tree;

import java.util.Scanner;
import java.util.concurrent.locks.ReadWriteLock;

public class Tree1 {
	Scanner scanner = new Scanner(System.in);
	node root;
	public static class node {
		node left;
		node right;
		int value;
		
		private node(int value) {
			this.value = value;
		}
	}

	public void insert() {
		System.out.println("Enter root value: ");
		int value = scanner.nextInt();
		 this.root = new node(value);
			insert(root);
	}

	public void insert(node n) {
		System.out.println("Do you want to add left node: ");
		boolean b = scanner.nextBoolean();
		if (b) {
			System.out.println("Enter left node value: ");
			int value = scanner.nextInt();
			n.left = new node(value);
			insert(n.left);
		}
		System.out.println("Do you want to add right node: ");
		boolean r = scanner.nextBoolean();
		if (r) {
			System.out.println("Enter right node value: ");
			int value = scanner.nextInt();
			n.right = new node(value);
			insert(n.right);
		}
	}
	public void display() {
		this.display(this.root);
	}
	public void display(node n) {
		if(n == null) {
			return ;
		}
		System.out.println(n.value);
		display(n.left);
		display(n.right);
	}

}
