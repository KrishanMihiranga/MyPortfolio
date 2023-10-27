let length = 5;
let colors = ['red', 'green', 'blue', 'gold', 'pink', 'hotpink'];

let changeColors = ()=>{
    let tempArr = [];
    colors.forEach((result, index)=>{
        $('.box').eq(index).css("background-color", result);
        
        if(index == length){
            tempArr[0] = result;
        }else{
            tempArr[index + 1] = result;
        }
    });
    colors = tempArr;
}

let intervalID;
$('.start-btn').on('click',()=>{
    if(intervalID == null){
        intervalID = setInterval(changeColors, 1000);
    }
});

$('.end-btn').on('click',()=>{
    clearInterval(intervalID);
    intervalID = null ; 
});