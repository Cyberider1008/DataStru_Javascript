class Root{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}


class BSTree{
    constructor(){
        this.root = null;
    }


insert(data){
    var new_root = new Root(data);
    if(this.root == null)
        this.root = new_root;
    else
        this.insertRoot(this.root, new_root);
}
    insertRoot(root, new_root){
        if(new_root.data < root.data){
            if(root.left == null)
                root.left = new_root;
            else
                this.insertRoot(root.left, new_root)
        }
        else{
            if(root.right == null)
                root.right = new_root;
            else
                this.insertRoot(root.right,new_root);
        }
    }
    

remove(data){
    this.root = this.removeRoot(this.root, data);
}
removeRoot(root, key){
    if(root == null)
        return null;

    else if(key < root.data){
        root.left = this.removeRoot(root.left, key);
        console.log("l is"+root.data);
        return root;
    }

    else if(key > root.data){
        root.right = this.removeRoot(root.right, key);
        console.log("r is"+root.data);
        return root;

    }
    else{
        if(root.left == null && root.right == null){
            root = null;
            return root;
        }

        if(root.left == null){
            root = root.right;
            console.log("ln is"+root.data);
            return root;
        }
        else if(root.right == null){
            root = root.left;
            console.log("rn is"+root.data);
            return root;
        }

        var aux = this.findMinRoot(root.right);
        root.data = aux.data;

        root.right = this.removeRoot(root.right, aux.data);
        console.log("f is"+root.data);
        return root;
    }
}


// traversal of a tree

inorder(root){
    if(root != null){
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
    }
}

preorder(root){
    if(root != null){
        console.log(root.data);
        this.preorder(root.left);
        this.preorder(root.right);
    }}

postorder(root){
        if(root != null){
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.data);
        }}


 findMinRoot(root){
    if(root.left == null)
        return root;
    else
        return this.findMinRoot(root.left);
    
 }       


 getRootRoot(){
    return this.root;
 }

search(root, data){
    if(root == null)
        return null;
    else if(data<root.data)
        return this.search(root.left, data);
    else if(data > root.data)
        return this.search(root.right, data)
    else
    return root;
}

}

var bst = new BSTree();

bst.insert(10);
bst.insert(20);
bst.insert(30);
bst.insert(9);
bst.insert(8);

// all info about root
//console.log(bst.root);

var root = bst.getRootRoot();
console.log("root is "+root.data);

console.log("inorder without remove root from tree.....")
bst.inorder(root);

//remove root
bst.remove(30);
console.log("inorder with remove root from tree.....")

bst.inorder(root);

bst.preorder(root);

bst.postorder(root);


var search1 = bst.search(root, 20);

console.log("search is "+search1.data);

var min_root = bst.findMinRoot(root);

console.log("min root is "+min_root.data);


