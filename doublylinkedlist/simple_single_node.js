
var head;
class Node{
    constructor(val){
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

function printlist(node){
    var last = null;
    var string1 = '';
    console.log("traversing forward sides .....");
    while(node!= null){
        string1 += node.data +"->";
        last = node;
        node= node.next;
    }
    console.log(string1);    

    var string2 = '';
    console.log("traversing forward sides .....");
    while(last != null){
        string2 += last.data +"->";
       
        last= last.prev;
    }
    console.log(string2); 
}




var head = new Node(10);
var second = new Node(20);
var third= new Node(30);

head.next = second;
second.prev  = head;

second.next = third;
third.prev = second;

printlist(head);

