var head;

class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

function push(new_val){
    var new_node = new Node(new_val)

    if(head == null){
        head = new_node;
        return;
    }

    new_node.next = head;

    head = new_node;

}

function printlist(){
    let current = head;
    let count = 0;
    // let str = '';
    while(current != null){
        // str +=current.data + '->';
        console.log("Element index "+count+" is "+current.data);
        count++;
        current = current.next;
    }
    // console.log(str);
}

function getindexElement(idx){
    let current = head;
    let count = 0;
    while(current != null){
        if(count == idx){
            return current.data;
        }
        count++;
        current = current.next;
    }
}

push(1);
push(2);
push(3);

printlist();

console.log("\n getElement index 0 is "+ getindexElement(0));