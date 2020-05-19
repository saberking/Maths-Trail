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
    if(value=="mean"){
        enterValue("mean")
    }
    if(value=="daily"){
        var val=get('input').value
        if(Math.abs(answers.mean*10/4-val)<10){
            enterValue("daily")
        }else{
            mistake()
        }
    }
    if(value=="triangle"){
        var val=get("input").value
        if(val==4){
            enterValue("triangle")
        }else{
            mistake()
        }
    }

}
var defaultButton={text:"Continue",onclick:nextPage}
var pages =[
    {text: "Hello! Welcome to Maths Adventure!", button: {text: "Continue",
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
    {text:"Well done! You increase to level 3. As you make the tea, the head chef walks in and promotes you to sous chef.",button:defaultButton},
    {text: "You must now cook the evening meal in order to progress your career further. Remain in the kitchen and get out 10 food items with nutrition tables.",button:defaultButton},
    {text:"Calculate the mean large calories per item. What is your answer?",button:{text:"Submit",onclick:()=>submitValue('mean'),input:true}},
    {text:"If two people live off these items for two days, what is mean of each person's mean daily intake of large calories?",button:{text:"Submit",onclick:()=>submitValue("daily"),input:true}},
    {text:"The chef comes back to check on your work. She is very impressed by your progress and promotes you to Maths Professor. You increase to level 4.",button:defaultButton},
    {text:"The phone rings. Go and pick it up",button:defaultButton},
    {text:"It is one of your students. She wants to know the hyopotenuse of an isosceles right-angled triangle with area 4 square units", button:{text:"Submit",onclick:()=>submitValue("triangle"),input:true}},
    {text:"Your student is amazed by your intellect. You publish a paper on right-angled triangles and become a millionaire. You win!"}






]


var currentPage=0;
function requestValue(min,max){
    get("text").innerHTML+="<input type='number' min='"+min+"' max='"+max+"' id='input' value='' style='font-size:100px' height='100px' width='400px'></input>";
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
    if(pages[page].button){
        get("btn").innerHTML=pages[page].button.text;
        get("btn").onclick=pages[page].button.onclick
    
        if(pages[page].button.input){
            requestValue(0, "");
        }
    }else{
        get("btn").style.display="none"

    }

}



function nextPage(){
    selectPage(currentPage+1);
}
//document.onload=
setTimeout(()=>selectPage(0),300)