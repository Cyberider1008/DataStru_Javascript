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

    head = new_node;
}

function dltNode(dlt){
    if(head == null){
        return;
    }
    if(head == dlt){
        head = dlt.next;
    }
    if(dlt.next != null){
        dlt.next.prev = dlt.prev;
    }
    if(dlt.prev != null){
        dlt.prev.next = dlt.next;
    }
    return;
}

function printlist(node){
    let last =null;
    let str ='';
    while(node != null){
        str += node.data +" ";
        last = node;
        node = node.next;
    }
    console.log(str);

}

push(10);
push(20);
push(30);

printlist(head);

dltNode(head.next);
console.log("after delete the node....");
printlist(head);

