class Queue{
    constructor(){
        this.items = [];

    }
    isEmpty(){
        return this.items.length == 0;
    }
    enqueue(element){
        this.items.push(element);
        console.log(element+"enque to queue");
    }

    dequeue(){
        if(this.isEmpty())
            return "underflow";
        return this.items.shift();
    }
    front(){
        if(this.isEmpty())
            return "no element in queue";
        return this.items[0];
    }
    rear(){
        if(this.isEmpty())
            return "no element in queue";
        return this.items[this.items.length-1];
    }

}

var q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);

console.log(q.dequeue() +"dequeue from queue");

console.log("front item is" +q.front());

console.log("rear item is" +q.rear());

