
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
    on(){
        /* var x = document.createElementNS("http://www.w3.org/2000/svg","rect");
        var y = document.querySelector('svg');
        x.setAttribute('x',100);
        x.setAttribute('y',100);
        x.setAttribute('width',100);
        x.setAttribute('height',100);
        x.setAttribute('fill','black');
        y.appendChild(x); */
        console.log(this);
        if(this.id=="1")
        {
            var x = document.querySelector('svg');
            //var r = document.createElementNS("http://www.w3.org/2000/svg",'rect');
            var t = document.createElementNS("http://www.w3.org/2000/svg",'text');
            /* r.setAttributeNS(null,'x',100);
            r.setAttributeNS(null,'y',100);
            r.setAttributeNS(null,'width',200);
            r.setAttributeNS(null,'height',200);
            r.setAttributeNS(null,'fill','black'); */
            t.setAttribute('x',160);
            t.setAttribute('y',620);
            t.setAttribute('font-size',20);
            t.setAttribute('fill','black');
            t.setAttribute('font-family','Roboto');
            t.innerHTML = "192.168.0.3";

            //x.appendChild(r);
            x.appendChild(t);
        }
        if(this.id=="4")
        {
            var x = document.querySelector('svg');
            //var r = document.createElementNS("http://www.w3.org/2000/svg",'rect');
            var t = document.createElementNS("http://www.w3.org/2000/svg",'text');
            /* r.setAttributeNS(null,'x',100);
            r.setAttributeNS(null,'y',100);
            r.setAttributeNS(null,'width',200);
            r.setAttributeNS(null,'height',200);
            r.setAttributeNS(null,'fill','black'); */
            t.setAttribute('x',370);
            t.setAttribute('y',620);
            t.setAttribute('font-size',20);
            t.setAttribute('fill','black');
            t.setAttribute('font-family','Roboto');
            t.innerHTML = "192.168.0.5"; 
            //x.appendChild(r);
            x.appendChild(t);
        }
        if(this.id=="6")
        {
            var x = document.querySelector('svg');
            //var r = document.createElementNS("http://www.w3.org/2000/svg",'rect');
            var t = document.createElementNS("http://www.w3.org/2000/svg",'text');
            /* r.setAttributeNS(null,'x',100);
            r.setAttributeNS(null,'y',100);
            r.setAttributeNS(null,'width',200);
            r.setAttributeNS(null,'height',200);
            r.setAttributeNS(null,'fill','black'); */
            t.setAttribute('x',570);
            t.setAttribute('y',620);
            t.setAttribute('font-size',20);
            t.setAttribute('fill','black');
            t.setAttribute('font-family','Roboto');
            t.innerHTML = "192.168.0.10"; 
            //x.appendChild(r);
            x.appendChild(t);
        }
        if(this.id=='File')
        {
            var x = document.querySelector('svg');
            //var r = document.createElementNS("http://www.w3.org/2000/svg",'rect');
            var t = document.createElementNS("http://www.w3.org/2000/svg",'text');
            /* r.setAttributeNS(null,'x',100);
            r.setAttributeNS(null,'y',100);
            r.setAttributeNS(null,'width',200);
            r.setAttributeNS(null,'height',200);
            r.setAttributeNS(null,'fill','black'); */
            t.setAttribute('x',410);
            t.setAttribute('y',83);
            t.setAttribute('font-size',20);
            t.setAttribute('fill','black');
            t.setAttribute('font-family','Roboto');
            t.innerHTML = "192.168.0.10"; 
            //x.appendChild(r);
            this.defaultSet1 = {
                x:410,
                y:83,
                fontSize:20,
                fontFamily: 'Roboto',
                fill:'black',
                class:'rect1'
            }
            rect1.addElementSVG('text',this.defaultSet1);
            x.appendChild(t);
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


    /* on(classNameBut){
        this.elems = document.getElementsByClassName(classNameBut);
        this.elems.onclick = () => {
                console.log(this);
                fetch("http://localhost:5000/labs1/check/", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json'
                    },
                  
                    //make sure to serialize your JSON body
                    body: JSON.stringify(
                        {
                            "array":{
                                "name": "myName",
                                "password": "myPassword"
                            }
                        })
                  })
        }; 
            //event.currentTarget.checkAnswer()
    } */
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