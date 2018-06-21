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

        setInterval(myTimer, 1000);
        function myTimer() {
                counter --}

        $("#quizQuestions").html(questionOne.question); 
        
        //dynamically create the quiz buttons
        for (i=0; i < questionOne.choices.length; i++){  
            var buttons = $("<button>")
            buttons.addClass("data-question", "questionOne.choices[i]")
            buttons.text(questionOne.choices[i])
            $("#answers").append(buttons)
        
            

        //check if answer is correct
            buttons.on("click", function(){
                if (question === this.answer){
                    correct()
                }
                else if ((question != answer) || (counter=0)){ 
                    wrong()
                }
            }
        
        )}
        

        //function to add points move to the next question and display a correct
        //with a timer
        //var answerCheck = setTimeout(correct, 5000)
        function correct(){
            correct++
            counter = 10
            questionArrayCounter++
            $("#answers").text("That is correct")
        }

        function wrong(){
            incorrect++
            questionArrayCounter++
            $("answers").text("That is wrong")
        }
        //if you run out of questions display game over
        if (questionArrayCounter > questionArray.length){
            $("#quizQuestions").html("<p> Correct:" + correct + "</p><p> incorrect:" + incorrect + "</p>")
        }
  })
})

//idea was to use a counter to go through an array of arrays and dynamically build the questions & buttons
//busy at work, didnt have time to complete will finish next week