let text=""

document.getElementById("0").onclick=function append0(){
text+="0"
document.getElementById("h1").textContent=text
}

document.getElementById("1").onclick=function append1(){
text+="1"
document.getElementById("h1").textContent=text
}

document.getElementById("2").onclick=function append2(){
text+="2"
document.getElementById("h1").textContent=text
}

document.getElementById("3").onclick=function append3(){
text+="3"
document.getElementById("h1").textContent=text
}

document.getElementById("4").onclick=function append4(){
text+="4"
document.getElementById("h1").textContent=text
}

document.getElementById("5").onclick=function append5(){
text+="5"
document.getElementById("h1").textContent=text
}

document.getElementById("6").onclick=function append6(){
text+="6"
document.getElementById("h1").textContent=text
}

document.getElementById("7").onclick=function append7(){
text+="7"
document.getElementById("h1").textContent=text
}

document.getElementById("8").onclick=function append8(){
text+="8"
document.getElementById("h1").textContent=text
}

document.getElementById("9").onclick=function append9(){
text+="9"
document.getElementById("h1").textContent=text
}

document.getElementById("plus").onclick=function appendPlus(){
text+="+"
document.getElementById("h1").textContent=text
}

document.getElementById("minus").onclick=function appendMinus(){
text+="-"
document.getElementById("h1").textContent=text
}

document.getElementById("mult").onclick=function appendMult(){
text+="*"
document.getElementById("h1").textContent=text
}

document.getElementById("div").onclick=function appendDiv(){
text+="/"
document.getElementById("h1").textContent=text
}

document.getElementById("dec").onclick=function appendDec(){
text+="."
document.getElementById("h1").textContent=text
}

document.getElementById("clear").onclick=function clear(){
text=""
document.getElementById("h1").textContent=text
}

document.getElementById("del").onclick=function del(){
text=text.slice(0,-1)
document.getElementById("h1").textContent=text
}

document.getElementById("calc").onclick=function calculate(){
    if(/\/0/.test(text)){
        document.getElementById("h1").textContent="ERROR: HOW DARE YOU !"

    }
    else{let output=eval(text);
        document.getElementById("h1").textContent=output}

}