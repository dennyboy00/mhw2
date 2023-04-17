/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const IMG_CHECK = './images/checked.png';
const IMG_UNCHECKED = './images/unchecked.png';

const button = document.querySelector('button');
button.addEventListener('click',Reset);



function onCheck(event){

    

        const trg = event.currentTarget;
        const image= trg.querySelector('img.checkbox');

         onUnchecked(event);
        image.src=IMG_CHECK;
        
        trg.style.backgroundColor='#cfe3ff';
        trg.style.opacity = 1;
        saveAnswers(event);
        CompleteQuiz();

      
}

function onUnchecked(event){

    const ev=event.currentTarget;
   
for (const em of check){

 if(em.dataset.questionId == ev.dataset.questionId){
    const element = em.querySelector('img.checkbox');
    element.src=IMG_UNCHECKED;
    em.style.backgroundColor = '#f4f4f4';
    em.style.opacity = 0.6;
 }
    }

}



let Answers = [] ;

function saveAnswers(event){

const ev=event.currentTarget;


switch (ev.dataset.questionId) {

case 'one': Answers[0] = ev.dataset.choiceId;
console.log("wawa");
break;

case 'two': Answers[1] = ev.dataset.choiceId;
break;

case 'three' : Answers[2] = ev.dataset.choiceId;
break;

}
}




function CompleteQuiz(){

if(Answers.length > 2 && AllChecked()){

    for(const elem of check){
        elem.removeEventListener('click',onCheck);
    }
    Result();
}

}


function AllChecked(){
    for(const elem of Answers){
        if(elem==undefined){
            return false;
        }
    }
    return true;
}


function UncheckAll(){

    for(const elem of check){
        const element = elem.querySelector('img.checkbox');
        element.src=IMG_UNCHECKED;
        elem.style.backgroundColor = '#f4f4f4';
        elem.style.opacity = 1;
    }
    
}


function Reset(event){
   UncheckAll();
   Answers = [];
   for(const elem of check){
   elem.addEventListener('click',onCheck);
  }
   ris.style.display='none';

}



function Result(){
    let output;
    for(let i=0;i<Answers.length;i++){
        for(let j=i+1;j<Answers.length;j++){
            if(Answers[i]==Answers[j]){
                 output=Answers[i];
                }
                
        }
    }

    if(output==undefined){

       output=Answers[0];

    }

    const par=document.querySelector('.Result h3');
    const fin=document.querySelector('.Result p2');
    fin.innerHTML=RESULTS_MAP[output].title;
    par.innerHTML=RESULTS_MAP[output].contents;
    ris.style.display ='flex';
}






const ris=document.querySelector('.Result');

const check=document.querySelectorAll('.choice-grid div');

for(const elem of check){
 elem.addEventListener('click',onCheck);
}
















