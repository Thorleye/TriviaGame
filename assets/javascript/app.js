var counter = 10 // count down to 0
var correct = 0
var incorrect = 0
var questionArrayCounter = 0 //count through the array of arrays


var questionArray = [questionOne, questionTwo] //aray of the questions
var questionOne =  { question:"Who does Brady play for?", choices: ["Packers", "Patriots", "Rams", "Steelers"], answer:"Patriots" }
var questionTwo =  { question:"Who does Rodgers play for?", choices: ["Packers", "Patriots", "Rams", "Steelers"], answer:"Packers" }
console.log(questionOne.question)


$(document).ready(function(){

    $("#quizQuestions").text("Press button to begin")
    $("#answers").html("<button> START </button>")

 $("#answers").on("click", function(){
    $("#answers").empty()
        //show the quiz question
        $("#quizQuestions").html(questionOne.question); 
        
        //dynamically create the quiz buttons
        for (i=0; i < questionOne.choices.length; i++){  
            var buttons = $("<button>")
            buttons.addClass("data-question", i)
            buttons.text(i)
            $("#answers").append(buttons)
        }


        //check if answer is correct
        function checkAnswer(){
            buttons.on("click", function(check){
                if (question === this.answer){
                    correct()
                }
                else if ((question != answer) || (counter=0)){ 
                    wrong()
                }
            
            })
        }

        //function to add points move to the next question and display a correct
        //with a timer
        var answerCheck = setTimeout(correct, 5000)
        function correct(){
            correct++
            questionArrayCounter++
            $("#answers").text("That is correct")
        }

        function wrong(){
            incorrect++
            questionArrayCounter++
            $("answers").text("That is wrong")
        }
    
  })
})