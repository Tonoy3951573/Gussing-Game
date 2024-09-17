let count = 0;

const randomNum = Math.floor(Math.random()*11);

function getValue(){

    

    const textBox = document.querySelector('#textbox');
    const var1 = textBox.value;
    if ( !/[012345678910]+/.test(var1) || Number(var1) + "k" === "NaNk" ){
        window.alert("Please Enter Number");
        return;
    }


    count++;
    console.log(count);
    if(count === 3) {
        document.querySelector('#btn1').hidden = true;
    }


    document.querySelector('#btn4').hidden = false;
    document.querySelector('#btn3').hidden = false;

    {   
        document.querySelector(".hidden_number").innerHTML = ""
        const Element = document.createElement('p');
        const at = document.createAttribute('class');
        at.value = 'hid';
        Element.setAttributeNode(at);
        Element.textContent ='Hidden number is '+ String(randomNum);
        document.querySelector('.hidden_number').appendChild(Element);
        document.querySelector('.hid').hidden = true;
        document.querySelector('.hidden_number').hidden = true;
        
    
    }
    
    if(randomNum === Number(var1)){
        document.querySelector(".result").innerHTML = ""
        const newElement = document.createElement('p');
        newElement.textContent = 'Congratulations!! you gaussed the right Number';
        document.querySelector('.result').appendChild(newElement);
        document.querySelector("#btn1").hidden = true;
        return;

    }
    else if (randomNum > Number(var1)){
        document.querySelector(".result").innerHTML = ""
        const newElement = document.createElement('p');
        newElement.textContent = var1 + ' is less than hidden number ';
        document.querySelector('.result').appendChild(newElement);
    }
    else{
        document.querySelector(".result").innerHTML = ""
        const newElement = document.createElement('p');
        newElement.textContent = var1 +' is greater than hidden number ';
        document.querySelector('.result').appendChild(newElement);
    } 

    if(count === 3){
       
        const newElement = document.createElement('p');
        
        newElement.textContent = ' Oops !! You have used all of your gausses.';
        document.querySelector('.result').appendChild(newElement);
    
    }
    
    document.querySelector("#textbox").value = "";
    
}

function clearall(){
    window.location.reload();
}



try {

    function reveal(){

    
    if( !document.querySelector('.hid').hidden ){
        window.alert('already revealed');
        return;
    }
    document.querySelector('.hidden_number').hidden = false;
    document.querySelector('.hid').hidden = false;
    document.querySelector("#btn1").hidden = true;
    
}
    
} catch (error) {

    console.log(error);
    
}
