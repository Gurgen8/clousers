////clousers////


function x (){
    var num  =4;
    var name  ="gugo"

    this.age =25
    this.gatName=()=>{
        return name
    }


    this.age =()=>{
        return this.age
    }

    this.catDies =()=>{

        num--
    }
    this.dead=()=>{
        return num<=0
    }
}
var a =new x()
a.catDies()
a.catDies()
a.catDies()
alert(a.dead())




//////sum -arr +///   bardz kargi funkcianer---

var x =  [3,4,[10,10],6,1,[2,3]]


var summa =(arr)=>{
    return arr.reduce(function (aggr,val){
        if(Array.isArray(val)){
            return aggr + summa(val)
        }
        return aggr +val
    },0)
}


alert(summa(x))