
//автоматически вызываемая функция создаёт пространство
//рабочей области + формирует создание области настроек 
//и кнопки отправки на проверку. 
class Start {
    constructor(){
        }
    createElementSVG(name, attributes){
        this.NS = "http://www.w3.org/2000/svg";
        this.element = document.createElementNS(this.NS, name);
        if(name==="svg")
        {
            document.getElementById("widget").appendChild(this.element);
        }
            if (attributes){
                for (name in attributes){;
                this.element.setAttributeNS(null,[name],attributes[name]);
                }
        return this.element;
        }
    }
    createElementSimple(name,attributes){
            this.element = document.createElement(name);
            if(name==='button')
                {
                    this.element.innerHTML = "Отправить на проверку";
                }
            if (attributes){
                for (name in attributes){;
                    this.element.setAttribute([name],attributes[name]);
                }
            return this.element;
        }
    }
    appendNodeSVG(element){
        return document.querySelector('svg').appendChild(element);
    }
    appendNode(element){
        return document.getElementById('widget').appendChild(element);
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
    addElementSVG(amount,jsonObj){
       // console.log(amount,jsonObj);
        for(amount in jsonObj)
            {
                //console.log(jsonObj[amount].type,jsonObj[amount]);
                this.appendNodeSVG(this.createElementSVG(jsonObj[amount].type,jsonObj[amount]));
            }
    }
    addElement(amount,jsonObj){
        for(amount in jsonObj)
            {
                //console.log(jsonObj[amount].type);
                this.appendNode(this.createElementSimple(jsonObj[amount].type,jsonObj[amount]));
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
        }
        this.constract();
        this.connection('http://localhost:5000/labs1/1');
    }
    constract(name){
        return this.createElementSVG(name,this.defaultSet);
    }
}

class Rect2 extends Start{
    constructor(){
        super();
        this.connection('http://localhost:5000/labs1/2');
    }
    /* on(event,callback,classNameBut){
        this.elems = document.getElementsByClassName(classNameBut);
        for(var i = 0;i<this.elems.length;i++){
            this.elems[i].addEventListener(event,callback);
        }
    } */
    checkAnswer(){
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
        }
}

 (function(){
    var start = new Start();
    var rect = new Rect1();
    var rect2 = new Rect2();
    var svg = start.createElementSVG('svg');
    start.appendNodeSVG(rect.constract('rect'));
}());
function checkAnswer(){
    fetch("http://localhost:5000/labs1/check/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      
        //make sure to serialize your JSON body
        body: JSON.stringify(
            {
                "numbers":{
                    "ip_json": "ip2",
                    "d_json": "d2",
                    "N_json": "N2",
                    "answer_json": "answer2"
                }
            })
      })
    }
/* function File12(){
    alert('Посмотреть сообщение');
    var message = document.createAttribute('div');
    message
   // this.element.width= 60;
    // var img1 = document.getElementById("12");
    // this.element.height = 60;
 }
//проверка ответа, в будущем проверка будет 
//производиться на стороне сервера =)
function CheckAnswer(){
    /* var ch = ['#', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И',
                                                   'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 
                                                   'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ',
                                                   'Э', 'Ю', 'Я'];
     var ip=document.getElementById('ip');
      var ip2 = ip.value.toString();
      var d = document.getElementById('d').value;
      var d2 = parseInt(d);
      var N = document.getElementById('N').value;
      var N2 = parseInt(N);
      var answer=document.getElementById('e').value;
      var answer2 = Array.from(answer);
      //var dd = "false";
      //dd = IsTheNumberSimple(d2); 
      //var right = ["14", "10", "18", "16", "14"];
      /*if (dd==true && N2==10){
         for( var p = 0, j=0; p < answer2.length; ++p, j++) {
            right[j] = (Math.pow(right[p], d2))%N2;
           // alert(right[j]);
            }  
         }
         else alert("Неправильные данные!");
       var right = right.toString();
       var itog = answer2.toString();
       if (right==itog &&  ip2 == "192.168.0.4" )
       alert('Right! Good job!');
       else alert("Wrong answer");
       var numbers = {
           ip_json: ip2,
           d_json: d2,
           N_json: N2,
           answer_json: answer2
       }
    var itog = JSON.stringify(numbers);
   alert (itog);
   }
   
   //проверка является ли число простым.
   function IsTheNumberSimple(n) 
   { 
       if (n < 2) 
           return false; 
       if (n == 2) 
           return true; 
       for (var i = 2; i < n; i++) 
           if (n % i == 0) 
               return false; 
           return true; 
   } */