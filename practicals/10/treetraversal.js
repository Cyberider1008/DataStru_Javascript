class Tree{
    constructor(data){
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

var root = null;

function preorder(Tree){
    if(Tree == null)
        return;
    
    console.log(Tree.data+" ");
    preorder(Tree.left);
    preorder(Tree.right);

}

function postorder(Tree){
    if(Tree == null)
        return;
    
        postorder(Tree.left);
        postorder(Tree.right);
        console.log(Tree.data+" ");

}
function inorder(Tree){
    if(Tree == null)
        return;
    
        inorder(Tree.left);
        console.log(Tree.data+" ");
    inorder(Tree.right);

}


root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
root.left.right = new Tree(5);
console.log("Preorder traversal of binary tree is ");
preorder(root);
console.log("Inorder traversal of binary tree is ");
inorder(root);
console.log("Postorder traversal of binary tree is ");
postorder(root);