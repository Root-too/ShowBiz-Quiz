function clickAnswer(){
    
var a1=document.forms.a1.value;    
var a2=document.forms.a2.value;    
var a3=document.forms.a3.value;  
var a4=document.forms.a4.value;   
var a5=document.forms.a5.value;   
var a6=document.forms.a6.value;     
var a7=document.forms.a7.value;   
var a8=document.forms.a8.value;   
var a9=document.forms.a9.value;
var a10=document.forms.a10.value;      
var score=0;    
 
if(a1=="b"){
    score++;    
}    
    
if(a2=="b"){
    score++;
}

if(a3=="Grunnings"||a3=="grunnings"||a3=="grunings"){    
    score++;
}

if(a4=="c"){    
    score++;
}

if(a5=="b"){    
    score++;
}

if(a6=="Room of Requirement"||a6=="room of requirement"||a6=="Room of requirement"){    
    score++;
}

if(a7=="b"){    
    score++;
}

if(a8=="a"){    
    score++;
}

if(a9=="vomit"||a9=="vomit-flavored"||a9=="vomit flavored"||a9=="Vomit-flavoured"){    
    score++;
}

if(a10=="hare"||a10=="rabbit"||a10=="Hare"){    
    score++;
}


alert("you got "+score+" marks");
window.location = 'hp1.html';
        
     
}    
    
    
    
    