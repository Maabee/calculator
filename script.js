let outPutScreen = document.getElementById('output-screen')
function display(num) {
    outPutScreen.value += num;
}

function calculate() {
   try {
       outPutScreen.value = eval(outPutScreen.value);
     }
     catch(err) {
        //  alert('invalid')
        let error = 'invalid'
        outPutScreen.value = error
        
     }
}

function clr() {
    outPutScreen.value = ' ';
}

function del() {
    outPutScreen.value = outPutScreen.value.slice(0, -1);
}
    