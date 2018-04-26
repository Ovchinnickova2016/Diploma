
//автоматически вызываемая функция создаёт пространство
//рабочей области + формирует создание области настроек 
//и кнопки отправки на проверку. 
class Start {
    constructor(){
        this.star = () =>{
            var rect1 = new Rect1();
            var rect2 = new Rect2();
            rect1.createElementSVG('svg');
            rect1.appendNodeSVG(rect1.constract('rect'));
            
            }
        }
    connection(nameFetch){
        var fetchResult = fetch(nameFetch, {mode: 'cors',method: 'get',dataType: 'json'});
        async function fetchAsync () {
            var response = await fetchResult;
            var data = await response.json();
            return data;
        }
        fetchAsync().then(data => {
            this.jsonObj = data;
            if(this.jsonObj.Rect1){
                this.amount = Object.keys(this.jsonObj.Rect1).length;
                //console.log(this.amount,this.jsonObj.Rect1);
                this.addElementSVG(this.amount,this.jsonObj.Rect1);
            }
            if(this.jsonObj.Rect2){
                this.amount = Object.keys(this.jsonObj.Rect2).length;
                this.addElement(this.amount,this.jsonObj.Rect2);
            }
        })
    }
/*     createTextNode(text,attributes){
        this.element = document.createElementNS("http://www.w3.org/2000/svg",'text');
        for(var k in attributes)
        {
            this.element.setAttributeNS(null,[k],attributes[k]);
        }
        this.element.innerHTML = text;
        return this.element
    } */
    on(){
        /* var x = document.createElementNS("http://www.w3.org/2000/svg","rect");
        var y = document.querySelector('svg');
        x.setAttribute('x',100);
        x.setAttribute('y',100);
        x.setAttribute('width',100);
        x.setAttribute('height',100);
        x.setAttribute('fill','black');
        y.appendChild(x); */
        //console.log(this);
        if((this.id=="comp1")||(this.id=='ip1'))
        {
            document.getElementById('ip').value = '192.168.0.3';
            //document.getElementById('comp1').fill = 'black';
        }
        if((this.id=="comp2")||(this.id=='ip2'))
        {
            document.getElementById('ip').value = '192.168.0.4';
        }
        if((this.id=="comp3")||(this.id=='ip3'))
        {
            document.getElementById('ip').value = '192.168.0.5';
        }
        if(this.id=='task')
        {
            document.getElementById('taskId').style.display = 'block';
            document.getElementById('taskTextID').style.display = 'block';
            document.getElementById('taskTextID').innerHTML ="";
            
        }
        if(this.id=='taskId')
        {
            document.getElementById('taskId').style.display = 'none';
            document.getElementById('taskTextID').style.display = 'none';
        }
        if(this.id == 'File1')
        {
            document.getElementById('File1Id').style.display = 'block';
            document.getElementById('File1TextID').style.display = 'block';
            document.getElementById("File1TextID").innerHTML= "Сообщение:406 9915660 05464616061 - 9915660";
            document.getElementById("File1TextID2").innerHTML = "Ключ: 2,10"
        }
        if(this.id == "File1Id")
        {
            document.getElementById('File1Id').style.display = 'none';
            document.getElementById('File1TextID').style.display = 'none';
            document.getElementById("File1TextID2").style.display = "none";
      
        }
        if(this.id=='checkid')
        {
           function checkAnswer(){
                fetch("http://localhost:5000/labs1/check/", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json'
                    },
                  
                    //make sure to serialize your JSON body
                    body: JSON.stringify(
                        {
                                "ip":   document.getElementById('ip').value,
                                "d":    document.getElementById('d').value,
                                "N":    document.getElementById('N').value,
                                "e":    document.getElementById('e').value
                        })
                  })
            }
            checkAnswer();
        }
    }
}

 class Rect1 extends Start{
    constructor(){
        super()
        this.defaultSet ={
            x:0,
            y:0,
            width:850,
            height:850,
            fill:'#f5f5f5',
            class:'rect1'
        }
        //this.constract();
        this.connection('http://localhost:5000/labs1/1');
    }
    constract(name){
        return this.createElementSVG(name,this.defaultSet);
    }
    /* on(){
        var x = document.getElementById('12');
        x.addEventListener(onclick,function(){
            return console.log(this);
        })
    } */
    createElementSVG(name, attributes){
        this.NS = "http://www.w3.org/2000/svg";
        this.NS1 = "http://www.w3.org/1999/xlink";
        this.element = document.createElementNS(this.NS, name);
        if(name=="svg")
        {
            document.getElementById("widget").appendChild(this.element);
            //document.querySelector('svg').appendChild(document.createElement('g'));
        }
        if (attributes){
            for (var k in attributes){
                if((name=="text")&&(attributes[k]=="ip1")){
                    this.element.innerHTML = '192.168.0.3'
                }
                if((name=="text")&&(attributes[k]=="ip2")){
                    this.element.innerHTML = '192.168.0.4'
                }
                if((name=="text")&&(attributes[k]=="ip3")){
                    this.element.innerHTML = '192.168.0.5'
                }
                if(attributes[k]=="image"){
                    this.element.setAttributeNS(this.NS1,'href',attributes[k]);
                    this.element.onclick = this.on;
                }
                else if (attributes[k]!="image"){
                    this.element.setAttributeNS(null,[k],attributes[k]);
                    this.element.onclick = this.on;
                }
            }
        return this.element;
        }
    }
    appendNodeSVG(element){
        //var test =  document.querySelector('g');
       // var test1= document.createElement('g');
       // test.setAttribute("class","test1");
        var svg = document.querySelector('svg');
        //svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
/*         if(this.element.classList=="rect1"){
            document.querySelector('svg').appendChild(element);
        } */
        //test.appendChild(test1);
        return svg.appendChild(element);
    }
    addElementSVG(amount,jsonObj){
        // console.log(amount,jsonObj);
         for(amount in jsonObj)
             {
                 //console.log(jsonObj[amount].type,jsonObj[amount]);
                 this.appendNodeSVG(this.createElementSVG(jsonObj[amount].type,jsonObj[amount]));
             }
    }
} 

class Rect2 extends Start{
    constructor(){
        super();
        this.connection('http://localhost:5000/labs1/2');
    }
    createElementSimple(name,attributes){
        this.element = document.createElement(name);
        if(name==='button')
            {
                this.element.innerHTML = "Отправить на проверку";
            }
        
        if (attributes){
            for (var k in attributes){
                this.element.setAttribute([k],attributes[k]);
                this.element.onclick = this.on;
            }
        return this.element;
        }
    }
    addElement(amount,jsonObj){
        for(amount in jsonObj)
            {
                //console.log(jsonObj[amount].type);
                this.appendNode(this.createElementSimple(jsonObj[amount].type,jsonObj[amount]));
            }
    }
    appendNode(element){
        return document.getElementById('widget').appendChild(element);
    }
}
class Rect3 extends Rect2{
    constructor(){
        super();
    }
}

 (function(){
    var start = new Start();
    start.star();
}());

/* function File12(){
    alert('Посмотреть сообщение');
    var message = document.createAttribute('div');
    message
   // this.element.width= 60;
    // var img1 = document.getElementById("12");
    // this.element.height = 60;
 }*/