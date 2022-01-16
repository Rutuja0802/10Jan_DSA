
//Deletion at any given position , provided it's index value.
// A complete working javascript program to
// delete a node in a linked list at a
// given position

// head of list
var head;

/* Linked list Node */
class Node
{
	constructor(val)
	{
		this.data = val;
		this.next = null;
	}
}

/* Inserts a new Node at front of the list. */
function push(new_data)
{
	
	
	
	var new_node = new Node(new_data);

	/* 3. Make next of new Node as head */
	new_node.next = head;

	/* 4. Move the head to point to new Node */
	head = new_node;
}


function deleteNode(position)
{
	
	// If linked list is empty
	if (head == null)
		return;
	
	// Store head node
	var temp = head;
	
	// If head needs to be removed
	if (position == 0)
	{
		
		// Change head
		head = temp.next;
		return;
	}
	
	// Find previous node of the node to be deleted
	for(i = 0; temp != null && i < position - 1; i++)
		temp = temp.next;
	
	// If position is more than number of nodes
	if (temp == null || temp.next == null)
	return;
	
	// Node temp->next is the node to be deleted
	// Store pointer to the next of node to be deleted
	var next = temp.next.next;
	
	// Unlink the deleted node from list
	temp.next = next;
}


function printList()
{
	var tnode = head;
	while (tnode != null)
	{
		console.log(tnode.data + " ");
		tnode = tnode.next;
	}
}



/* Start with the empty list */
push(7);
push(1);
push(3);
push(2);
push(8);

console.log("Created Linked list is: ");
printList();

// Delete node at position 4
deleteNode(4);

console.log("Linked List after " +
			"Deletion at position 4: ");
printList();


