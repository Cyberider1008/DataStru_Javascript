
var head;
class Node{
    constructor(val){
        this.data = val;
        this.next = null;

    }
}

function printlist(){
    var last = head;
    var string1 = '';
    while(last != null){
        string1 += last.data+" -> ";
        last = last.next;
    }

    console.log(string1);
}

var head = new Node(10);
var second = new Node(20);
var third= new Node(30);

head.next = second;
second.next = third;
console.log(head.data+" -> "+second.data+" -> "+third.data);

console.log("using printline fun.......");

printlist()

