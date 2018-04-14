

function WorkingSpace(typeobj,x,y,width,height,color,id,mysvg)
{
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", typeobj);
    newElement.setAttribute('x',x);
    newElement.setAttribute('y',y);
    newElement.setAttribute('width',width);
    newElement.setAttribute('height',height);
    newElement.setAttribute('fill',color);
    newElement.setAttribute('id',id);
    mysvg.appendChild(newElement);
}

function ProtoObject(typeobj,test,mysvg)
{
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", typeobj);
    newElement.setAttributeNS(null,'x',test.x);
    newElement.setAttributeNS(null,'y',test.y);
    newElement.setAttributeNS(null,'width',test.width);
    newElement.setAttributeNS(null,'height',test.height);
    newElement.setAttributeNS(null,'fill',test.fill);
    mysvg.appendChild(newElement);
}

//автоматически вызываемая функция создаёт пространство
//рабочей области + формирует создание области настроек 
//и кнопки отправки на проверку. 
 (function(){
    
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    WorkingSpace('rect',0,0,850,850,"#f5f5f5",1,svg);
    CreateLabSettings1(svg);
    Connection(svg);
}());

function Connection(svg){
    var fetchResult = fetch('http://localhost:5000/', {mode: 'cors',method: 'get', dataType: 'json'});

    fetchResult.then(function(response) {  
        return response.json();  
    }).then(function(json) {  
        var jsonObj = json.array[0].rect;
        console.log(jsonObj);
        console.log(JSON.stringify(jsonObj));
        ProtoObject('rect',jsonObj,svg);
    });
}

function CreateLabSettings1(svg){
    //создаём тэг svg в тегэ <div id="widget"></div> 
    document.getElementById("widget").appendChild(svg);
    //переменная Gimage для картинок в svg
   // var GImage = document.createElement('svg');
   // document.getElementById("widget").appendChild(GImage);
//    var r = getNode('rect', { x: 10, y: 10, width: 100, height: 100, fill:'#ff00ff',href:'images/cloud.svg' });
//     svg.appendChild(r);

//    ImageCreate(100,100,100,100,"cloudSvg",svg,"images/cloud.svg");
    //переменная divAction создаёт тэг div c классом action
    var divAction = document.createElement('div');
    divAction.className = "action";
    document.getElementById("widget").appendChild(divAction)

    //переменная in1,in2,in3,in4 создаёт инпут в <div class="action"></div>
    InputCreate("one", "0.0.0.0", "ip", divAction);
    InputCreate("two", "d (число)", "d", divAction);
    InputCreate("two", "N (число)", "N", divAction);
    InputCreate("three", "Численный ответ", "e", divAction);
    //output
    //OutputCreate("one", 10, 2, "out", divAction);
  //  var table = document.createElementNS('table');
   // divAction.appendChild(table);
    
   // переменная cheсk создаёт кнопку для функции CheckAnswer()
    ButtonCreate("Check", "Отправить на проверку", 'CheckAnswer();', divAction);
    ImageCreate(160, 500, 100, 100, '#11111', 1,  "images/monitor.svg", svg);
    ImageCreate(350, 60, 100, 100, '#00000', 2, "images/transfer.svg", svg);
    ImageCreate(100, 300, 100, 100, '#00000', 3, "images/server-3.svg", svg);
    ImageCreate(370, 500, 100, 100, '#00000', 4, "images/monitor.svg", svg);
    ImageCreate(350, 300, 100, 100, '#00000', 5, "images/wifi.svg", svg);
    ImageCreate(580, 500, 100, 100, '#00000', 6, "images/monitor.svg", svg);
    LineCreate(190, 380, 445, 385, 3, 'lightgrey', 7, svg); //между коммутатором и бд
    LineCreate(400, 150, 400, 330, 3, 'lightgrey', 8, svg);//между коммутатором и облаком
    LineCreate(355, 384, 220, 503, 3, 'lightgrey', 9, svg);//между 1 компом и коммутатором
    LineCreate(400, 370, 400, 503, 3, 'lightgrey', 10, svg);//между 2 компом и коммутатором
    LineCreate(445, 384, 600, 503, 3, 'lightgrey', 11, svg);//между 3 компом и коммутатором
    CircleCreate(445, 384, 2, 4, 'blue', 13, svg);
    CircleCreate(400, 385, 2, 4, 'blue', 14, svg);
    CircleCreate(355, 384, 2, 4, 'blue', 15, svg);
    ImageCreate2(390, 83, 20, 20, '#00000', "12", File12(), "images/file.svg", svg);


}

function File12(){
   this.width= 60;
   // var img1 = document.getElementById("12");
    this.height = 60;d
}

function ButtonCreate(className, textContent, onclick, divAction){
    var button=document.createElement('button');
    divAction.appendChild(button);
    button.setAttribute("class", className);
    button.innerHTML = textContent;
    button.setAttribute("onclick", onclick);
}

//функция для создания инпутов
function InputCreate(className, placeholder, id, divAction){
    var input=document.createElement('input');
    divAction.appendChild(input);
    input.setAttribute("class", className);
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("id", id);
}

//функция для создания аутпутов
function OutputCreate(className, rows, cols, id, divAction){
    var output=document.createElement('textarea');
    divAction.appendChild(output);
    output.setAttribute("name", className);
    output.setAttribute("id", id);
    output.setAttribute("rows", rows);
    output.setAttribute("cols", cols);
}
//функция для создания изображений
function ImageCreate(x,y,width,height,color,id, href, mysvg)
{
    var img = document.createElementNS("http://www.w3.org/2000/svg",'image');
    img.setAttributeNS(null,"x",x);
    img.setAttributeNS(null,"y",y);
    img.setAttributeNS(null,"width",width);
    img.setAttributeNS(null,"height",height);
    img.setAttributeNS(null,"visibility","visible");
    img.setAttributeNS(null,"color",color);
    img.setAttributeNS(null,"id",id);
    img.setAttributeNS("http://www.w3.org/1999/xlink",'href',href);
    mysvg.appendChild(img);
}

function ImageCreate2(x,y,width,height,color,id, onclcik, href, mysvg)
{
    var img = document.createElementNS("http://www.w3.org/2000/svg",'image');
    img.setAttributeNS(null,"x",x);
    img.setAttributeNS(null,"y",y);
    img.setAttributeNS(null,"width",width);
    img.setAttributeNS(null,"height",height);
    img.setAttributeNS(null,"visibility","visible");
    img.setAttributeNS(null,"color",color);
    img.setAttributeNS(null,"id",id);
    img.setAttributeNS(null,"onclick",onclick);
    img.setAttributeNS("http://www.w3.org/1999/xlink",'href',href);
    mysvg.appendChild(img);
}
//функция для создания соединительных линий
function LineCreate(x1,y1,x2,y2, width, stroke,id,mysvg)
{
var line= document.createElementNS("http://www.w3.org/2000/svg",'line');
line.setAttribute("x1",x1);
line.setAttribute("y1",y1);
line.setAttribute("x2",x2);
line.setAttribute("y2",y2);
line.setAttribute("stroke-width",width);
line.setAttribute("stroke",stroke);
line.setAttribute("id",id);
mysvg.appendChild(line);
}

//функция для создания соединительных линий
function CircleCreate(cx,cy,r, width, stroke,id,mysvg)
{
var line= document.createElementNS("http://www.w3.org/2000/svg",'circle');
line.setAttribute("cx",cx);
line.setAttribute("cy",cy);
line.setAttribute("r",r);
line.setAttribute("stroke-width",width);
line.setAttribute("stroke",stroke);
line.setAttribute("id",id);
mysvg.appendChild(line);

}
//Компьютер
function Computer() {
    this.Title = "Компьютер";
    this.TypeId = "Co";
    this.Settings = [
        {
            Title: "Comp1",
            IP: "192.168.0.2",
            light: "red" 
        },
        {
            Title: "Comp2",
            IP: "192.168.0.3",
            light: "red" 
        },
        {
            Title: "Comp3",
            IP: "192.168.0.4",
            light: "red" 
        },
        {
            Title: "Comp4",
            IP: "192.168.0.5",
            light: "green" 
        }
    ];
};

//База данных
function Database() {
    this.Title = "База данных";
    this.TypeId = "DB";
    this.Settings = [
        {
            Title: "DB",
            IP: "192.168.0.6",
            light: "black" 
        }
    ];
};

//Облако
function Cloud() {
    this.Title = "Облако";
    this.TypeId = "Cl";
    this.Settings = [
        {
            Title: "Cloud",
            IP: "192.168.0.1",
            light: "black" 
        }
    ];
};

//File
function File() {
    this.Title = "Файл";
    this.TypeId = "Fi";
    this.Settings = [
        {
            ClosedKey: "9,5",
            Message: "406 9915660 05464616061 - 9915660",
            Access_rights: "192.168.0.5" 
        }
    ];
}; 

//проверка ответа, в будущем проверка будет 
//производиться на стороне сервера =)
function CheckAnswer(){
    /* var ch = ['#', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И',
                                                   'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 
                                                   'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ',
                                                   'Э', 'Ю', 'Я'];*/
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
       else alert("Wrong answer");*/
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
   }