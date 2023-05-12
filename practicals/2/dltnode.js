var head;

class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }

push(new_val){
    let new_node = new Node(new_val);
    if(head == null){
        head = new_node;
        return;
    }
    new_node.next = head;
    head = new_node;
}

printlist(){
    let current = head;
    while(current != null){
        console.log(current.data);
        current = current.next;
    }

}

deleteNode(position){
    if(head == null)
        return;
    
    let temp = head;
    
    if(position == 0){
        head = temp.next;
        return;
    }
    for(let i = 0; temp !=null && i< position-1; i++)
        temp = temp.next;
    
    if(temp==null || temp.next ==null)
        return;

    var next = temp.next.next;

    temp.next = next;
        
}

}

let n  =new Node();
n.push(10);
n.push(20);
n.push(30);
n.push(40);

n.printlist();

n.deleteNode(2);
console.log();
n.printlist();
