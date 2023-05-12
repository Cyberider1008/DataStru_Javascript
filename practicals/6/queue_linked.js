var front,rear =null;

class QNode{
    constructor(key){
        this.data = key;
        this.next = null;

    }
}

function enqueue(val){
    var new_node = new QNode(val);

    if(rear == null){
        rear = front = new_node;
        return;
    }
    rear.next = new_node;
    rear = new_node;
}


function dequeue(){
    if(front == null){
        return;
    }
    let temp = front;
    front = front.next;

    if(front ==null){
        rear = null;
    }
}


enqueue(10);
enqueue(20);
dequeue();
dequeue();
enqueue(30);
enqueue(40);
enqueue(50);
dequeue();
console.log("Queue Front : " + front.data);
console.log("Queue Rear : " + rear.data);