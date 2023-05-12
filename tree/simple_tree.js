var root = null;

class Root{
    constructor(val){
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

root = new Root(10);

root.left = new Root(5);
root.right = new Root(15);


console.log(root.key);
console.log(root.left.key);
console.log(root.right.key);
