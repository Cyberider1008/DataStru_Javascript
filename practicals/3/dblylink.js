var head;

class Node{
    constructor(val){
        this.data =val;
        this.next = null;
        this.prev = null;
    }
}

function push(val){
    var new_node = new Node(val);
    new_node.next = head;
    new_node.prev = null;

    if(head != null){
        head.prev = new_node;
    }

    head = new_node;
}

function printlist(){
    let current = head;
    console.log("traversing frontend side...");
    let str = '';
    while(current != null){
        str += current.data +" ";
        // console.log(current.data+"->");
        var last = current;
        current = current.next;
    }

    console.log(str);


    console.log("traversing backward side...");
    let str1 = '';
    while(last != null){
        str1 += last.data +" ";
        // console.log(last.data+"->");
        last = last.prev;

    }
    console.log(str1);

}


function InsertBefore(next_node, new_data){
    if(next_node == null){
        console.log("the given node can not be null in this element");
        return;
    }
    
    var new_node = new Node(new_data);

    new_node.prev = next_node.prev;
    next_node.prev = new_node;
    new_node.next = next_node;
    if(new_node.prev != null)
    new_node.prev.next = new_node;
    else
    head = new_node;


}

function InsertAfter(prev_Node , new_data) {
    if (prev_Node == null) {
    document.write("The given previous node cannot be NULL ");
    return;
    }
    var new_node = new Node(new_data);
    new_node.next = prev_Node.next;
    prev_Node.next = new_node;
    new_node.prev = prev_Node;
    if (new_node.next != null)
    new_node.next.prev = new_node;
    }
    function append(new_data) {
    var new_node = new Node(new_data);
    var last = head;
    new_node.next = null;
    if (head == null) {
    new_node.prev = null;head = new_node;
    return;
    }
    while (last.next != null)
    last = last.next;
    last.next = new_node;
    new_node.prev = last;
    }

    


    append(6);
    push(7);
    push(1);
    append(4);
    InsertAfter(head.next, 8);
    InsertBefore(head.next.next, 5);

    console.log(head.next.next.data);
printlist();