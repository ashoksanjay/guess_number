var k=5;
    const inputE1=document.getElementById("input1")
    const resE1  = document.getElementById("result")
    function result(){
        var res = Number(inputE1.value)
        if(res==k){
            resE1.innerHTML=" You are Correct...!";
        }
        else if(res>k){
            resE1.innerHTML=" You are high";
        }
        else {
            resE1.innerHTML=" You are low"
        }
    }
