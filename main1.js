

function WorkingSpace(x,y,width,height,color,id,mysvg)
{
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    newElement.setAttribute('x',x);
    newElement.setAttribute('y',y);
    newElement.setAttribute('width',width);
    newElement.setAttribute('height',height);
    newElement.setAttribute('fill',color);
    newElement.setAttribute('id',id);
    mysvg.appendChild(newElement);
}

function getNode(n, v) {
    n = document.createElementNS("http://www.w3.org/2000/svg", n);
    for (var p in v)
      n.setAttributeNS(null, p.replace(/[A-Z]/g, function(m, p, o, s) { return "-" + m.toLowerCase(); }), v[p]);
    return n
  }

function ImageCreate(x,y,width,height,className,mysvg,href)
{
    var img = document.createElementNS("http://www.w3.org/2000/svg",'image');
    img.setAttribute('fill',"rgba(128, 0, 128, 1.0");
    img.setAttributeNS(null,"x",x);
    img.setAttributeNS(null,"y",y);
    img.setAttributeNS(null,"width",width);
    img.setAttributeNS(null,"height",height);
    img.setAttributeNS(null,"class",className);
    img.setAttributeNS("http://www.w3.org/1999/xlink",'href',href);
    mysvg.appendChild(img);
}
//автоматически вызываемая функция создаёт пространство
//рабочей области + формирует создание области настроек 
//и кнопки отправки на проверку. 
 (function(){
    
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    WorkingSpace(0,0,850,850,"#f5f5f5",1,svg);
    CreateLabSettings1(svg);
    Connection(svg);
}());

function Connection(svg){
    var fetchResult = fetch('http://localhost:5000/', {mode: 'cors',method: 'get', dataType: 'json'});

    fetchResult.then(function(response) {  
        return response.json();  
    }).then(function(json) {  
        var kek = json.array[0].rect;
        console.log(kek);
        console.log(JSON.stringify(kek));
        var e = getNode('rect',{fill:kek.fill,x:kek.x,y:kek.y,width:kek.width,height:kek.height});
        svg.appendChild(e);
    });
}

function CreateLabSettings1(svg,jsonn){
    //создаём тэг svg в тегэ <div id="widget"></div> 
    document.getElementById("widget").appendChild(svg);
    //переменная Gimage для картинок в svg
   // var GImage = document.createElement('svg');
   // document.getElementById("widget").appendChild(GImage);
   var r = getNode('rect', { x: 10, y: 10, width: 100, height: 100, fill:'#ff00ff',href:'images/cloud.svg' });
    svg.appendChild(r);

   ImageCreate(100,100,100,100,"cloudSvg",svg,"images/cloud.svg");
    //переменная divAction создаёт тэг div c классом action
    var divAction = document.createElement('div');
    divAction.className = "action";
    document.getElementById("widget").appendChild(divAction)

    //переменная in1,in2,in3,in4 создаёт инпут в <div class="action"></div>
    var in1=document.createElement('input');
    divAction.appendChild(in1);
    in1.className = "one";
    in1.placeholder = placeholder="0.0.0.0";
    in1.id = "ip";

    var in2=document.createElement('input');
    divAction.appendChild(in2);
    in2.className = "two";
    in2.placeholder = placeholder="d (число)";
    in2.id = "d";
    
    var in3=document.createElement('input');
    divAction.appendChild(in3);
    in3.className = "two";
    in3.placeholder = placeholder="N (число)";
    in3.id = "N";

    var in4=document.createElement('input');
    divAction.appendChild(in4);
    in4.className = "three";
    in4.placeholder = placeholder="Численный ответ";
    in4.id = "e";

   // переменная cheсk создаёт кнопку для функции CheckAnswer()
    var check = document.createElement('button');
    divAction.appendChild(check);
    check.className = "Check";
    check.setAttribute('onclick', 'CheckAnswer();')
    check.textContent = "Отправить на проверку";

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
  var ch = ['#', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И',
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
   var dd = "false";
   dd = IsTheNumberSimple(d2); 
   var right = ["14", "10", "18", "16", "14"];
   if (dd==true && N2==10){
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