var front = null, rear = null;

class Qnode{
    constructor(val){
        this.data = val;
        this.next = null; 
    }
}

function enqueue(element){
    let new_node = new Qnode(element);
    if(rear==null){
        front=rear= new_node;
        return;
    }
    rear.next = new_node;
    rear = new_node;
}


function dequeue(){
    if(front ==null){
        return "Queue is underflow";
    }
    let temp  = front;
    front = front.next;
    return temp.data;

}

enqueue(1);
enqueue(2);
enqueue(3);
enqueue(4);

console.log(dequeue() +"  dequeue from Queue");

console.log("rear is "+ rear.data);
console.log("front is "+ front.data);
