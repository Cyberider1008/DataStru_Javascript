var t = -1;
var max = 100;

var a = Array(max).fill(0);

function isEmpty(){
    return (t<0);
}

function push(new_data){
    if(t >= (max-1)){
        console.warn("stack overflow");
        return false;
    }
    else{
        t+=1;
        a[t] = new_data;
        console.log(new_data+"...pushed into stack");
        return true;
    }
}

// pop operation perform in stack

function pop(){
    if(t < 0){
        console.log("stack is underflow");
        return 0;

    }
    else{
        var temp = a[t];
        t -= 1;
        return temp;
    }
}

//....peek on stack mean upper data

function peek(){
    if(t < 0){
        console.log("stack is underflow");
        return 0;
    }
    else{
        var temp = a[t];
        return temp;
    }
}



function print(){
    for(i=t;i>-1;i--){
        console.log(""+a[i]);
    }
}



push(1);
push(2);
push(3);
push(4);

console.log("\n"+pop()+" ...pop from stack\n");
console.log(peek()+" ...is top element \n");
console.log("elements from stack.....");
print();