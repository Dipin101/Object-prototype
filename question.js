(function() {
    function Question(question, answer, canswer) {
        this.question = question
        this.answer = answer
        this.canswer = canswer
    }
    
    Question.prototype.display = function() {
        console.log(this.question)
        for(let i = 0; i < this.answer.length; i++) {
            console.log(i+": "+this.answer[i])
        }
    }
    
    Question.prototype.checkAnswer = function(ans, scores) {
        let sc
        if(this.canswer === ans ) {
            console.log('Correct Answer')
            sc = scores(true)
        } else {
            console.log('Sorry try again.')
            sc = scores(false)
        }
        console.log(sc)
        this.displayScore(sc)
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: '+ score)
        console.log('-------------------------------')
    }
    
    let q1 = new Question('Is javascript a cool language', ['Yes', 'No'], 0)
    let q2 = new Question('What is the capital of Nepal', ['Hetauda', 'Kathmandu', 'Pokhara'], 1)
    let q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2)
    
    let questions = [q1, q2, q3]

    function score(){
        let sc = 0
        return function(correct) {  
            if(correct) {
                sc++
            }
            return sc
        }
    }

    let keepscore = score()

    function nextQuestion() {

    let n = Math.floor(Math.random() * questions.length)
    questions[n].display()
    let ans = prompt('Enter the correct answer..by selecting the number presented below')
    

    if(ans !== 'exit') {
        questions[n].checkAnswer(parseInt(ans), keepscore)
        nextQuestion()
        }
    }
    nextQuestion()

})()

