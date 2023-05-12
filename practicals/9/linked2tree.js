class ListNode{
    constructor(data){
        this.data =data;
        this.next = null;
    }
}
class BinaryTreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;

    }
}

class BinaryTree{
    constructor(){
        this.head = null;
        this.root = null;
    }

    push(new_data){
        var new_node  = new ListNode(new_data);

        new_node.next = this.head;
        this.head = new_node;

    }

    converList2Binary(node){
        var q = [];
        if(this.head == null){
            node = null;
            return null;
        }
        node = new BinaryTreeNode(this.head.data);

        q.push(node);

        this.head = this.head.next;
        while(this.head != null){
            var parent = q.shift();


            var leftchild = null;
            var rightchild = null;


            leftchild = new BinaryTreeNode(this.head.data);
            q.push(leftchild);
            this.head = this.head.next;

            if(this.head != null){
                rightchild= new BinaryTreeNode(this.head.data);
            q.push(rightchild);
            this.head = this.head.next;
            }

            parent.left = leftchild;
            parent.right = rightchild;



        }
        return node;


    }

    inorderTraversal(node){
        if(node != null){
            this.inorderTraversal(node.left);
            console.log(node.data +' ');
            this.inorderTraversal(node.right);
        }
    }

}

var tree = new BinaryTree();
tree.push(36);
tree.push(30);
tree.push(25);
tree.push(15);
tree.push(12);
tree.push(10);



var node = tree.converList2Binary(tree.root);

console.log("inorder of traversal constructed binary tree is :");

tree.inorderTraversal(node);



