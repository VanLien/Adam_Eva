function Apple(weightapple) {
    if (weightapple===0){
        alert("Khong Co Tao De an")
    }else {
        this.weightapple = weightapple;
        this.getweightapple = function () {
            return this.weightapple;
        };
        this.setweightapple = function () {
            this.weightapple = weightapple;
        };
    }
}
function Human(name,gender,weight,){
    this.name=name;
    this.gender=gender;
    this.weight=weight;
    this.getName=function () {
        return this.name;
    };
    this.getGender=function () {
        return this.gender;
    };
    this.getWidth=function () {
        return this.weight;
    };
    this.setName=function () {
        this.name=name;
    };
    this.setGender=function () {
        this.gender=gender;
    };
    this.setWidth=function () {
        this.weight=weight;
    };
}
let number=new Apple(10);
let weightapple=number.getweightapple();
document.getElementById("apple").innerHTML=weightapple;
let eva=new Human('Eva','Nữ',45);
let name1=eva.getName();
let gender1=eva.getGender();
let weight1=eva.getWidth();
document.getElementById("info").innerHTML='name:'+name1+'<br>'+'gender : '+gender1+'<br/>'+'weight: '+weight1;
let adam=new Human('adam','Nam',60);
let name=adam.getName();
let gender=adam.getGender();
let weight=adam.getWidth();
document.getElementById("Result").innerHTML='name:'+name+'<br>'+'gender : '+gender+'<br/>'+'weight: '+weight;
function apple() {
    if (weightapple<=0){
        document.getElementById("info").innerHTML="Không Còn Táo Cho Bạn Ăn Nữa!";
        document.getElementById("Result").innerHTML="Không Còn Táo Cho Bạn Ăn Nữa!";

    } else {
        weight1++;
        weightapple--;
        weight=weight+2;
        document.getElementById("Result").innerHTML='name:'+name+'<br>'+'gender : '+gender+'<br/>'+'weight: '+weight;
        document.getElementById("info").innerHTML='name:'+name1+'<br>'+'gender : '+gender1+'<br/>'+'weight: '+weight1;
        document.getElementById("apple").innerHTML=weightapple;
    }
}