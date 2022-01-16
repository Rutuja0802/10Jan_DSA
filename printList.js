// Printing the whole list from beginning .


// JavaScript program to print second linked list
// according to data in the first linked list

class Node
{
	constructor()
	{
		this.data=0;
		this.next=null;
	}
}

/* Function to insert a node at the beginning */
function push(head_ref, new_data)
{
	let new_node = new Node();

	new_node.data = new_data;
	new_node.next = (head_ref);
	(head_ref) = new_node;
	return head_ref;
}

// Function to print the second list according
// to the positions referred by the 1st list
function printSecondList(l1,l2)
{
	let temp = l1;
	let temp1 = l2;

	// While first linked list is not null.
	while (temp != null)
	{
		let i = 1;

		// While second linked list is not equal
		// to the data in the node of the
		// first linked list.
		while (i < temp.data)
		{
			// Keep incrementing second list
			temp1 = temp1.next;
			i++;
		}

		// Print the node at position in second list
		// pointed by current element of first list
		console.log( temp1.data + " ");

		// Increment first linked list
		temp = temp.next;

		// Set temp1 to the start of the
		// second linked list
		temp1 = l2;
	}
}

// Driver Code
let l1 = null, l2 = null;

// Creating 1st list
// 2 . 5
l1 = push(l1, 5);
l1 = push(l1, 2);

// Creating 2nd list
// 4 . 5 . 6 . 7 . 8
l2 = push(l2, 8);
l2 = push(l2, 7);
l2 = push(l2, 6);
l2 = push(l2, 5);
l2 = push(l2, 4);

printSecondList(l1, l2);


