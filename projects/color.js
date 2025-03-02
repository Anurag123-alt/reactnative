const quizQuestions = [
    {
        question: "Which financial statement shows a company's assets and liabilities?",
        options: ["Profit & Loss Account", "Trial Balance", "Balance Sheet", "Cash Flow Statement"],
        answer: "Balance Sheet"
    },
    {
        question: "What is the chemical name of baking soda?",
        options: ["Sodium Chloride", "Sodium Bicarbonate", "Calcium Carbonate", "Ammonium Sulfate"],
        answer: "Sodium Bicarbonate"
    },
    {
        question: "Who is known as the Father of Economics?",
        options: ["Karl Marx", "David Ricardo", "Adam Smith", "John Keynes"],
        answer: "Adam Smith"
    },
    {
        question: "Which metal is a liquid at room temperature?",
        options: ["Mercury", "Iron", "Lead", "Aluminium"],
        answer: "Mercury"
    },
    {
        question: "What is the full form of GST?",
        options: ["Government Service Tax", "Goods and Services Tax", "General Sales Tax", "Gross Sales Tax"],
        answer: "Goods and Services Tax"
    },
    {
        question: "What is the SI unit of power?",
        options: ["Newton", "Watt", "Joule", "Pascal"],
        answer: "Watt"
    },
    {
        question: "What does the term 'Liquidity' refer to in finance?",
        options: ["Investment growth", "Profitability", "Market stability", "Ease of converting assets into cash"],
        answer: "Ease of converting assets into cash"
    },
    {
        question: "Which of the following is a non-renewable source of energy?",
        options: ["Solar Energy", "Coal", "Wind Energy", "Hydro Power"],
        answer: "Coal"
    },
    {
        question: "What is the primary objective of financial management?",
        options: ["Wealth Maximization", "Employee Satisfaction", "Cost Reduction", "Risk Avoidance"],
        answer: "Wealth Maximization"
    },
    {
        question: "Which gas is responsible for global warming?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Earth", "Mars", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Jane Austen", "Charles Dickens", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["100", "90", "110", "120"],
        answer: "100"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    }
];

let container = document.getElementById('container')
let question = document.createElement('div')
let options = document.createElement('div')
let full_score=document.getElementById('full-score')

let btnpar=document.getElementById('btnpar')
let btn=document.createElement('button')
btn.textContent="Next"
btn.className="btn"
let box = document.createElement('div')
let nextbtn = document.getElementById('nextbtn')
let pre = document.getElementById('pre')
let prebtn=document.createElement('button')
prebtn.className="prebtn"
prebtn.textContent="previous"
pre.append(prebtn)
container.append(box)
box.append(question, options,btnpar)

box.className = "box"
nextbtn.append(btn)
 let index=0;
let scorebox = document.getElementById('score')
 
btn.addEventListener('click',()=>{

if(index < quizQuestions.length){
     index++  
     remaining_question.innerHTML=index+1
     animation.style.width="0%"
     animation.style.transition=`0s`

}
if (index==quizQuestions.length) {
    container.style.display="none"
    scorebox.style.display="block"
}
count=16;
  
quiz(index);

})


prebtn.addEventListener('click',()=>{
    if(index > 0){
        index--
        remaining_question.innerHTML=index+1
        animation.style.width="0%"
        animation.style.transition=`0s`
    }
 count=16;
    
quiz(index);
        
        
    })
let score=0;

function quiz(ind) {
    question.innerHTML =""
    options.innerHTML=""
options.className = "options"
question.className = "question"
question.innerHTML = quizQuestions[ind].question;
    
quizQuestions[ind].options.forEach((option) => {
    let chooseoptions=document.createElement('button')
    chooseoptions.textContent=option
    chooseoptions.className="li"

    options.append(chooseoptions)




   chooseoptions.addEventListener('click', (e) => {
        let target=e.target.innerText;
        console.log(target);
document.querySelectorAll('.li').forEach((dis)=>{
            dis.disabled=true
        })
        
    if(!chooseoptions.querySelector('.icon')){

                    if (target == quizQuestions[ind].answer) {
                       chooseoptions.innerHTML+=`<div class="material-symbols-outlined icon" >
                        check_circle
                        </div>`
                        chooseoptions.classList.add('correct'); // Add correct class
       score++;
       cal_score();
    
                 }
         else{
               
            chooseoptions.classList.add('incorrect'); // Add incorrect class
            chooseoptions.innerHTML+=`<div class="material-symbols-outlined icon" >
                        cancel
                        </div>`
           

         }   
        full_score.innerHTML=score

        }   
        
        

            })
 

        })

       


}
    quiz(index)

   

    let animation=document.getElementById('animation')
    let cnt=document.getElementById('count')
   let count=16;
   setInterval(() => {
       animation.style.width="100%"
       animation.style.transition=`16s`
    }, 1000);
   
    let remaining_question=document.getElementById('remaining-question')
    let total_question=document.getElementById('total-question')
    total_question.innerHTML=quizQuestions.length
    setInterval(()=>{   
       
   
       count--;
       if (count==0) {
       animation.style.width="0%"
       animation.style.transition=`0s`
   
       if(index < quizQuestions.length){
           index++  
           
               remaining_question.innerHTML=index+1
          }
          if (index==quizQuestions.length) {
            container.style.display="none"
        }   
           count=16;
   quiz(index);

       }
   
   
       cnt.innerHTML=count
     
       
   
    },1000)


    
    let emoji = document.getElementById('emoji');
    let message = document.getElementById('message');
    let message_title = document.getElementById('message-title');
    
    
    let img = document.createElement('img');
    emoji.append(img);
    

    function cal_score() {
        
    if (score <= 15 && score >= 10) {
    //     img.src = "\projects\images\Download from pngedits.com - 2085.png"; 
    // img.alt="Excellent"
    emoji.textContent="🌟🎉"
    message_title.textContent="Excellent"
    message.textContent=`"Amazing! you nailed it! Keep up the great work."`
    }

    else if(score <=10 && score>=5){
    //     img.src = "\projects\images\Download from pngedits.com - 2126.png"; 
    // img.alt="Good"
    emoji.textContent="🙂👍"

    message_title.textContent="Good"
    message.textContent=`"Good job! You're on the right track, keep it up`
    }

    else if(score < 5 && score > 1){
    //     img.src = "\projects\images\Download from pngedits.com - 2126.png"; 
    // img.alt="Good"
    emoji.textContent="😞📉"

    message_title.textContent="Bad"
    message.textContent=`"Need more practice. Try again!"`
    }
    else if(score <= 1){
    emoji.textContent="😡❌"
        message_title.textContent="Very Bad"
    message.textContent=`"This was really bad. You need serious practice."`
    }

}
cal_score();
    