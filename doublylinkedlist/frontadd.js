var head;

class Node{
    constructor(val){
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

function push(val){
    let new_node = new Node(val);
    new_node.next = head;
    new_node.prev = null;

    if(head != null){
        head.prev = new_node;
    }

    head =new_node;
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



push(1);
push(2);
push(3);

printlist(head);


