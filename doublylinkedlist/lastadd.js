var head;

class Node{
    constructor(val){
        this.data = val;
        this.next = null;
        this.prev = null;
    }

}

function append(new_data){
    let new_node = new Node(new_data);
    new_node.next = null;

    if(head == null){
        head = new_node;
        return;
    }
    let last = head;
    while(last.next !=null){
        last = last.next;
    }
    last.next = new_node;

    new_node.prev = last;

}

function printlist(node){
    let last = null;
    console.log("forward side traversing.......");
    let string1 = '';
    while(node != null){
        string1 += node.data + "->"
        last = node;
        node = node.next;
    }
    console.log(string1);

    console.log("backward side traversing.......");
    let string2 = '';
    while(last!= null){
        string2 += last.data + "->"
        last = last.prev;
    }
    console.log(string2);

}


append(1);
append(2);
append(3);


printlist(head);