class Node{
    constructor(data){
        this.data = data;
        this.right = null;
        this.left = null;

    }
}

let root =null;

function deletedata(data){
    root = deleteRec(root,data);
}

function deleteRec(root, data){
    if(root == null){
        return root;
    }

    if(data < root.data)
        root.left = deleteRec(root.left, data);
    else if(data > root.data)
        root.right = deleteRec(root.right, data);


    else{
        if(root.left == null)
            return root.right;
        else if(root.right == null)
            return root.left;

    root.data = minValue(root.right);
    root.right = deleteRec(root.right, root.data);

    
    }
    return root;
}

function minValue(root){
    let minv = root.data;
    while(root.left != null){
        minv = root.left.data;
        root = root.left;
    }
    return minv;
}


function insert(data){
    root = insertRec(root, data);
}

function insertRec(root, data){
    if(root ==null){
        root =new Node(data);
        return root;
    }
    if(data < root.data){
        root.left = insertRec(root.left , data);

    }
    else if(data > root.data){
        
        root.right = insertRec(root.right, data);

    }
    return root;
}


function inorder(root){
    if(root == null )
        return;
    
    inorder(root.left);
    console.log(root.data+"");
    inorder(root.right);
}


insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);
console.log("Inorder traversal of the given tree");
inorder(root);
console.log("Delete 20");
deletedata(20);
console.log("Inorder traversal of the modified tree");
inorder();
console.log("Delete 30");
deletedata(30);
console.log("Inorder traversal of the modified tree");
inorder();
console.log("Delete 50");
deletedata(50);
console.log("Inorder traversal of the modified tree");
inorder();