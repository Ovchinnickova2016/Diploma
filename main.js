

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
   var ClosedKey=document.getElementById('w');
   var answer=document.getElementById('e');
   d= closedKey[0];
   N = ClosedKey[1];
   var arr2  =  [];
    for( i = 0; i < answer.length; ++i) {
		arr2[i] = (answer[i]^d)%N;
    }
    if (arr2 == "40264" && ip == "192.168.0.4")
    return true;
    else return false;
}
