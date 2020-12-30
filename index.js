let input = $("input");
input.click(function () {
    input.removeAttr("class");
    $(this).addClass("clicked");
});
//          GENERAL VARIABLES
let answerBtn = $("#check"),
    question = $("#question"),
    result = $(".result"),
    main = $("main"),
    currentQuestion = 0,
    userScore = 0;
//          INPUT VALUE
let a = $("#a"),
    b = $("#b"),
    c = $("#c"),
    d = $("#d");
//          LABEL TEXT
let aText = $("#choiceA"),
    bText = $("#choiceB"),
    cText = $("#choiceC"),
    dText = $("#choiceD");

const questions = [{
        "question": "Who was the last prophet in Islam?",
        "a": "Issa",
        "b": "Adam",
        "c": "Ibrahim",
        "d": "Mohammed",
        "answer": "d"
    },
    {
        "question": "Which religion do muslim people follow?",
        "a": "Christianity",
        "b": "Islam",
        "c": "Judaism",
        "d": "Hinduism",
        "answer": "b"
    },
    {
        "question": "How old was the prophet when he died?",
        "a": "63",
        "b": "58",
        "c": "74",
        "d": "86",
        "answer": "a"
    },
    {
        "question": "Who does the muslims worship",
        "a": "Issa",
        "b": "Jesus",
        "c": "Allah",
        "d": "Idols",
        "answer": "c"
    },
    {
        "question": "Approx how long has it been since the prophet died",
        "a": "around 1400 years",
        "b": "around 2000 years",
        "c": "around 5000 years",
        "d": "around 900 years",
        "answer": "a"
    }
];


//      FUNCTIONS
function updateText() {
    question.html(questions[currentQuestion]["question"]);
    aText.html(questions[currentQuestion]["a"]);
    bText.html(questions[currentQuestion]["b"]);
    cText.html(questions[currentQuestion]["c"]);
    dText.html(questions[currentQuestion]["d"]);
}
updateText();


answerBtn.on("click", function () {
    if (currentQuestion < 4) {
        if ($(".clicked").val() == questions[currentQuestion]["answer"]) {
            let correct = new Audio("sounds/correct.mp3");
            correct.play();
            setTimeout(function () {
                ++userScore;
                currentQuestion++;
                updateText();
                result.html('Correct');
                result.css("color", "rgb(21, 180, 21)");
            }, 100);
        } else {
            currentQuestion++;
            updateText();
            result.html("Wrong");
            result.css("color", "crimson");
        }
    } else {
        result.html("Results:");
        result.css("color", "gold");
        main.html("");
        main.html(`<h1>Your Score is ${userScore + 1} Out of ${questions.length}</h1>`)
    }
});