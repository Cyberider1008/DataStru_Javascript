var root;

class StackNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function isEmpty(){
    if(root == Null){
        return true;
    }
    else{
        return false;
    }
}

function push(data){
    var new_node = new StackNode(data);

    if(root == null){
        root = new_node;

    }
    else{
        var temp = root;
        root = new_node;
        new_node.next = temp;
    }
    console.log(data+"pushed to stack");
}

function pop(){
    var popped = Number.MIN_VALUE;
    if(root == null){
        console.log("stack is Empty");

    }
    else{
        popped = root.data;
        root = root.next;
    }
    return popped;
}

function peek(){
    if(root == null){
        console.log("stack is empty");
        return Number.MIN_VALUE;
    }
    else{
        return root.data;
    }
}

push(1);
push(2);
push(3);

console.log(pop()+"pop from stack");
console.log(peek()+"top from stack");