



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
function CheckAnswer(){//d N проверки
    var ch = ['#', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И',
                                                'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 
                                                'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ',
                                                'Э', 'Ю', 'Я'];
  var ip=document.getElementById('q');
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

