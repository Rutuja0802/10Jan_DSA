// "Implement a singly linked list from scratch with following operation:
// 1. Insertion at any given position , provided it's index value.


class Node {
		// inserting the required data

			constructor(val) {
				this.data = val;
				
				this.nextNode = null;
			}
		}
	
	// function to create and return a Node
	function GetNode(data) {
		return new Node(data);
	}

	// function to insert a Node at required position
	function InsertPos( headNode , position , data) {
		head = headNode;
		if (position < 1)
		console.log("Invalid position");

		// if position is 1 then new node is
		// set infront of head node
		// head node is changing.
		if (position == 1) {
			newNode = new Node(data);
			newNode.nextNode = headNode;
			head = newNode;
		}
		else
		{
			while (position-- != 0)
			{
				if (position == 1)
				{
					// adding Node at required position
					newNode = GetNode(data);

					// Making the new Node to point to
					// the old Node at the same position
					newNode.nextNode = headNode.nextNode;

					// Replacing current with new Node
					// to the old Node to point to the new Node
					headNode.nextNode = newNode;
					break;
				}
				headNode = headNode.nextNode;
			}
			if (position != 1)
			console.log("Position out of range");
		}
		return head;
	}

	function PrintList( node) {
		while (node != null) {
		console.log(node.data);
			node = node.nextNode;
			if (node != null){}
        }
		

	}

	// Driver code
	
		head = GetNode(3);
		head.nextNode = GetNode(5);
		head.nextNode.nextNode = GetNode(8);
		head.nextNode.nextNode.nextNode = GetNode(10);

	console.log("Linked list before insertion: ");
		PrintList(head);

		var data = 12, pos = 3;
		head = InsertPos(head, pos, data);
	console.log("Linked list after" + " insertion of 12 at position 3: ");
		PrintList(head);

		// front of the linked list
		data = 1;
		pos = 1;
		head = InsertPos(head, pos, data);
	console.log("Linked list after" + "insertion of 1 at position 1: ");
		PrintList(head);

		// insertion at end of the linked list
		data = 15;
		pos = 7;
		head = InsertPos(head, pos, data);
	console.log("Linked list after" + " insertion of 15 at position 7: ");
		PrintList(head);


