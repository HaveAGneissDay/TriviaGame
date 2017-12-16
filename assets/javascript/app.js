//STEP !: Must load the title screen   (  X  )
//Step 2: Must load questions X8  (  X  )
//STEP 3: Make a Timer to countdown time left to answer questions      (  X  )
//STEP 3: Display Score screen    (  X )

$(document).ready(function() {

  $(document).on('click', '#start', function() {
    //On click instructs the webpage to load the start.game object
    game.start();
  });

  $(document).on('click', '#done', function() {
    //On click instructs the webpage to load the done.game object
    game.done();
  });
  //Global Variables

  // var correct = 0;
  // var incorect = 0;
  // var unanswered = 0;
  // var counter =120;
  //
  // $("#start").on("click", function () {
  //   // should clear webpage
  //   // /$("#display").remove();
  //     // load questions
  //     timer = setInterval(countdown(), 1000);
  //
  //     //removes start button when game is started
  //     $("#start").remove();
  //
  //     $("#display").append("<h2> Time Remaining: <span id='counter'> 120 </span> seconds </h2>")
  //     for (var i = 0; i < questions.length; i++) {
  //       $("#display").append('<h3>' + questions[i].question + '</h3>')
  //       for (var j = 0; j < questions[i].answers.length; j++) {
  //         //console.log(questions.answers[j])
  //         $("#display").append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j])
  //         //console.log(questions[i].answers[j])
  //       }
  //     }
  //   // $("#display").append(questions.Question )
  //   // load questions
  //   // start timer
  // });
  //
  // //console.log(questions[0].question);
  //
  // //timer
  // //var timer = setInterval(countdown(), 1000);
  // function countdown() {
  //   counter--;
  //   $("#counter").html(counter);
  //   if (counter <= 0) {
  //     console.log("time is up");
  //   }
  //
  // }
  // Easier to use an object tree for this

  var game = {
    //global variables
    correct: 0,
    incorrect: 0,
    counter: 120,
    //countdown function needed
    countdown: function() {
      game.counter--;
      $("#counter").html(game.counter);
      if (game.counter <= 0) {
        console.log("time is up");
        game.done();
      }
    },

    start: function() {
      //starts the game counter
      timer = setInterval(game.countdown, 1000);
      //removes start button from HTML
      $("#start").remove();

      $("#display").prepend("<h2> Time Remaining: <span id='counter'> 120 </span> seconds </h2>");

      for (var i = 0; i < questions.length; i++) {
        $("#display").append('<h3>' + questions[i].question + '</h3>')
        for (var j = 0; j < questions[i].answers.length; j++) {
          //console.log(questions.answers[j])
          $("#display").append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j])
          //console.log(questions[i].answers[j])
        }
      }
      //Adding a Done button incase you finished early
      $("#display").append("<button id='done'>Done</button>")
    },
    done: function() {
      //remove the done button so it cannot be clicked again
      $("#done").remove();
      // Checks if it is the corect answer
      $.each($("input[name='question-0']:checked"), function() {
        //If the value i selected equals to the correct answer add to score screen
        if ($(this).val() == questions[0].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-2']:checked"), function() {
        if ($(this).val() == questions[2].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-3']:checked"), function() {
        if ($(this).val() == questions[3].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-4']:checked"), function() {
        if ($(this).val() == questions[4].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-5']:checked"), function() {
        if ($(this).val() == questions[5].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-6']:checked"), function() {
        if ($(this).val() == questions[6].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-7']:checked"), function() {
        if ($(this).val() == questions[7].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      //return the results page
      this.results();
    },

    results: function() {

      clearInterval(timer);

      $("#display").append('<h2>All Done!</h2>');
      $("#display").append('<h3>Correct Answers: ' + this.correct + '</h3>');
      $("#display").append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
      $("#display").append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
    }

  }


  //Questions
  // array of Objects
  var questions = [{
      question: "How deep is the average depth of the ocean?",
      answers: ["40,000 meters", "4,000 meters", "50 miles"],
      correctAnswer: "4,000 meters"
    },
    {
      question: "Rocks formed by the crystalization of magma are called?",
      answers: ["Igneous", "Sedimentary", "Metamorphic"],
      correctAnswer: "Igneous"
    },
    {
      question: "What is the center most layer in the Earth?",
      answers: ["outer core", "inner core", "mantle", "lithosphere"],
      correctAnswer: "inner core"
    },
    {
      question: "Which era is the oldest time?",
      answers: ["Paleozoic", "Cenozoic", "Mesozoic"],
      correctAnswer: "Paleozoic"
    },
    {
      question: "Rocks that have been folded, faulted, and metamorphosed are most often associated with which plate boundary?",
      answers: ["convergent boundary", "divergent boundary", "transform boundary"],
      correctAnswer: "convergent boundary"
    },
    {
      question: "Granite is:",
      answers: ["an igneous extrusive rock", "an igneous intrusive rock", "metamorphic rock", "sedimentary rock"],
      correctAnswer: "an igneous intrusive rock"
    },
    {
      question: "Which of the following rocks do not record what is happening at the surface of the earth",
      answers: ["metamorphic rocks", "volcanic rocks", "sedimentary rocks"],
      correctAnswer: "metamorphic rocks"
    },
    {
      question: "Which of the following sedimentary rocks has the smallest particle size",
      answers: ["siltstone", "shale", "breccia", "conglomerate", "sandstone"],
      correctAnswer: "shale"
    },
  ]


})
