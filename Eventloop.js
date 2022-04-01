function first (){
    console.log("first called")
}
function second () {
    console.log("second called")
    setTimeout (() => {
        console.log("api data")
    },3000)
    }
    function third () {
        console.log("third called")
    }
first();
second();
third();