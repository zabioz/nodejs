var v1 = 'v1';
v1 = 'v111'
var v2 = 'v2';

var o = {
    v1:'v1',
    v2:'v2',
    f1:function(){
        console.log(this.v1)
    },
    f2:function(){
        console.log(this.v2)
    }
}

function f1(){
    console.log("sss")
}



o.f1();
o.f2();