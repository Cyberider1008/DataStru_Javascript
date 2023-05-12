var root;

class StackNode{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

function isEmpty(){
    if(root == null){
        return true;
    }
    else{
        return false;
    }
}

function push(data){
    var new_node = new StackNode(data);

    if(root ==null){
        root =new_node;

    }
    else{
        var temp =root;
        root =new_node;
        new_node.next = temp;
    }
    console.log(data +"pushed to stack \n");
}

function pop(){
    var pop_var = Number.MIN_VALUE;
    if(root ==null){
        console.log("stack is empty");

    }
    else{
        pop_var = root.data;
        root = root.next;
    }
    return pop_var;
}

function peek(){
    if(root ==null){
        console.log("Stack is Empty");
        return Number.MIN_VALUE;
    }
    else{
        return root.data;
    }
}


push(10);
push(20);
push(30);

console.log(pop() + " popped from stack\n");

console.log("Top element is " + peek());

// console.log(Number.MIN_VALUE);