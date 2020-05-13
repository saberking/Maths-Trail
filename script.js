var get=(id)=>document.getElementById(id)
var answers={};
function mistake(){
    get("text").innerHTML="Oh dear! You seem to have made a mistake. Please check your calculations and try again."
    get("btn").style.display="none"
    setTimeout(()=>selectPage(currentPage),2000)
}
function acceptValue(value){
    enterValue
}
function submitValue(value){
    if (value=="spoons"){
        enterValue("spoons")
    }
    if(value=="sink"){
        enterValue("sink")
    }
    if(value=="percentage"){
        console.log(answers.spoons,answers.sink,answers.spoons*100,1*answers.spoons+(1*answers.sink),answers.spoons/(1*answers.spoons+1*answers.sink))
        if(Math.abs(get('input').value-answers.spoons*100/(1*answers.spoons+1*answers.sink))<1){
            enterValue("percentage")
        }else{
            mistake()
        }
    }
    if(value=="lng"){
        enterValue("lng")
    }
    if(value=="rate"){
        var val=get("input").value;
        if(val==answers.lng*answers.lng-1*answers.lng){
            enterValue("rate")
        }else{
            mistake()
        }

    }
    if(value=="area"){
        enterValue("area")
    }
    if(value=="time"){
        if(get('input').value==Math.round(answers.area*60*10000/answers.rate)){
            enterValue("time")
        }else{
            mistake();
        }
    }
    if(value=="diam"){
        enterValue("diam")
    }
    if(value=="height"){
        enterValue("height")
    }
    if(value=="volume"){
        var val=get('input').value
        if(val==Math.round(answers.diam*answers.diam*Math.PI*answers.height/4)){
            enterValue("volume")
        }else{
            mistake()
        }
    }
    if (value=="kettle"){
        var val=get('input').value
        if(Math.abs(val-answers.diam*answers.diam*Math.PI*answers.height*80*4182/(4*1000*1500))<val/100){
            enterValue("kettle")
        }else{
            mistake()
        }
    }

}
var defaultButton={text:"Continue",onclick:nextPage}
var pages =[
    {text: "Hello! Welcome to Maths Advenure!", button: {text: "Continue",
                                                            onclick: nextPage},
},
    {text:"Your first job is kitchen porter. You will have to perform tasks in order to be assigned a better job.",button:{text: "Continue",
                                                                                                                                    onclick:nextPage},
},
    {text: "Please go to the kitchen, then press Begin.",button: {text: "Begin",onclick:nextPage}},
    {text: "Open the cutlery drawer and count the spoons. How many are there?", button:{text:"Submit",onclick:()=>submitValue('spoons'),input: true}},
    {text:"There are @spoons~ spoons in the drawer. Well done!", button:{text:"Continue",onclick:nextPage}},
    {text:"Now check how many spoons are in the rest of the kitchen", button:{text:"Submit", onclick:()=>submitValue('sink'),input:true}},
    {text:"What percentage of the spoons are in the drawer?",button:{text:"Submit",onclick:()=>submitValue('percentage'),input:true}},
    {text: "Well done. Your level increases! Because you are a very tidy person, you are promoted to cleaner.",button:{text:"Continue", onclick:nextPage }},
    {text:"Now search your house for a vacuum cleaner. If you cannot find one a broom or a brush will do.",button:defaultButton},
    {text:"By any means possible, attempt to measure the length of your cleaning device.\
     How long is it in centimetres?", button:{text:"Submit",onclick:()=>submitValue("lng"),input:true}},
    {text:"Your cleaning speed is equal to the difference of your device's length and the square of its length.\
    What is your cleaning rate?",button:{text:"Submit",onclick:()=>submitValue("rate"), input:true}},
    {text:"Your bedroom, the kitchen and the living room all need cleaning. Measure the rooms. What is the total area in square metres?",
    button:{text:"Submit",onclick:()=>submitValue("area"),input:true}},
    {text:"You can clean one square centimeter per hour for every point of cleaning rate. How many minutes (to the nearest minute) will it take you to finish the task?",
    button: {text:"Submit",onclick:()=>submitValue("time"), input:true}},
    {text:"Well done! You are tired after all that work. Now you need to make a cup of tea. Go to the kitchen and choose a cup. What is its diameter in cm?",button:{
        text:"Submit",onclick:()=>submitValue("diam"),input:true
    }},
    {text:"What is its height in cm?",button:{text:"Submit",onclick:()=>submitValue("height"),input:true}},
    {text:"What is its volume in cubic centimetres?",button:{text:"Submit",onclick:()=>submitValue("volume"),input:true}},
    {text:"If the kettle uses 2KW of power and has efficiency of 75%, for how many seconds does it need to run to heat the water from 20 degrees to 100 degrees?\
    use 4182 as the specific heat capacity of water.",
    button:{text:"Submit",onclick:()=>submitValue("kettle"),input:true}},




]


var currentPage=0;
function requestValue(min,max){
    get("text").innerHTML+="<input type='number' min='"+min+"' max='"+max+"' id='input' value='0' style='font-size:100px'></input>";
}

function enterValue(name){
    answers[name]=get('input').value
    nextPage()
    console.log(answers)
}
function selectPage(page){
    get("btn").style.display="block"
get("btn").style.fontSize=100
    currentPage=page;
    document.getElementById("text").innerHTML=pages[page].text;
    var bracketPos=get("text").innerHTML.indexOf('@')
    while(bracketPos!=-1){
        var closeBracketPos=get("text").innerHTML.indexOf('~')
        var name=get("text").innerHTML.substring(bracketPos+1, closeBracketPos);
        get("text").innerHTML=get("text").innerHTML.substring(0,bracketPos)+answers[name]+get("text").innerHTML.substring(closeBracketPos+1)
        bracketPos=get("text").innerHTML.indexOf('@')
    }
    get("btn").innerHTML=pages[page].button.text;
    get("btn").onclick=pages[page].button.onclick

    if(pages[page].button.input){
        requestValue(0, "");
    }
}



function nextPage(){
    selectPage(currentPage+1);
}
//document.onload=
setTimeout(()=>selectPage(0),300)