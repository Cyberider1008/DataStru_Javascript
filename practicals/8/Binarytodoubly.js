class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

var prev = null;
var root;
var head;

function BinarytoDll(root){
    if(root == null)
        return;

    BinarytoDll(root.left);

    if(prev == null){
        head = root;
    }
    else{
        root.left = prev;
        prev.right = root;
    }
    prev = root;

    BinarytoDll(root.right);
}


function printlist(head){
    while(head != null){
        console.log(head.data+ " ");
        head = head.right;
    }
}



root = new Node(5);
root.left = new Node(3);
root.right = new Node(6);
root.left.right = new Node(4);
root.left.left = new Node(1);
root.right.right = new Node(8);
root.left.left.right = new Node(2);
root.left.left.left = new Node(0);
root.right.right.left = new Node(7);
root.right.right.right = new Node(9);


BinarytoDll(root);

printlist(head);