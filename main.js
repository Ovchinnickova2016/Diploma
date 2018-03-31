

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


function CheckAnswer(){
   
   var ip=document.getElementById('q');
   var ip2 = ip.value.toString();
   var answer=document.getElementById('e');
   var answer2 = answer.value.toString();
   var closedKey = []; var answer3 = [];
	var inputs = document.getElementById('w');
    var inputs2 = inputs.value.toString();
	for (var i = 0; i < inputs2.length; ++i) {
		closedKey.push(inputs2[i].value);		
	}
	for (var l = 0; l < answer2.length; ++l) {
		answer3.push(answer2[l].value);		
	}///vse v int
  var d = inputs2[0]; var d2 =parseInt(d);
  var N =parseInt(inputs2[0]+inputs[2]+inputs[3]);
   var arr2  =  [];
    for( var p = 0, j=0; p < answer2.length; ++p, j++) {
		arr2[j] = (answer2[p]^d2)%N;
    }
    var itog = arr2.toString();
    if (itog == "40264" &&  ip2 == "192.168.0.4" )
    alert('Right! Good job!');
    else alert("Wrong answer!");
}
