class Node{
    constructor(){
        this.data = 0;
        this.link = null;
    }
}

class StackUsingLinkedlist{
    constructor(){
        this.top = null;

    }

    push(x){
        let temp = new Node();

        if(temp == null){
            console.log("heap overflow....");
            return;
        }
        temp.data = x;
        temp.link = this.top;
        this.top = temp;

    }
    isEmpty(){
        return this.top ==null;
    }

    peek(){
        if(!this.isEmpty()){
            return this.top.data;
        }
        else{
            console.log("stack is empty");
            return -1;
        }
    }

    pop(){
        if(this.top == null){
            console.log("stack underflow");
            return;
        }
        this.top = this.top.link;
    }

    display(){
                if(this.top == null){
                    console.log("stack underflow..");
                }
                else{

                        let temp = this.top;
                        while( temp != null){
                            console.log(temp.data);
                            temp =temp.link;
                        }
                    }

    }
}

let obj = new StackUsingLinkedlist();

obj.push(1);
obj.push(2);
obj.push(3);
obj.push(4);

obj.display();

console.log("top Element is " +obj.peek());

obj.pop();
obj.pop();

obj.display();

console.log("top element is "+obj.peek());