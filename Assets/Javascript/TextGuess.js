var guessAble = ['yes', 'no', 'maybe', 'who', 'what', 'when','where', 'why'];
       var guessesAvailable = 10;
       var right = 0;
       var wrong = 0;
       var won = 0;
       var lost = 0;
       var alreadyGuessed = [];
       var correctAnswer = Math.floor(Math.random() * guessAble.length);
       var random = guessAble[correctAnswer];

       function randomize() {
        correctAnswer = Math.floor(Math.random() * guessAble.length);
        random = guessAble[correctAnswer];
        console.log(correctAnswer, random);
       };
       randomize();

       function start() {
           $('#wrong').html('Wrong: ' + wrong);
           $('#right').html('Right: ' + right);
           $('#guessesLeft').html('Guesses You Have Left: ' + guessesAvailable);
           $('#won').html('Matches You Have Won: ' + won);
           $('#lost').html('Matches You Have Lost: ' + lost);
        };
       start();

       function gameReset() {
           right = 0;
           guessesAvailable = 10;
           wrong = 0;
           won = 0;
           lost = 0;
           
       };

        function matchReset() {
            alreadyGuessed = [];
            guessesAvailable = 10;
            right = 0;
            wrong = 0;
            start();
        };

       $('#submit').on('click', function() {
           var yourAnswer = $('#answer').val().trim();
           alreadyGuessed.push(yourAnswer);
           $('#yourGuesses').html('' + alreadyGuessed + '');
           
           if (yourAnswer === random) {
               right ++;
               randomize();
               start();
           } else {
               guessesAvailable --;
               wrong ++;
               start();
           }
           if (right === 5) {
               won ++;
               matchReset();
               alert('You\'ve Won A Match !!');
           } else if (wrong === 10 || guessesAvailable === 0) {
               lost ++;
               matchReset();
               alert('You May Have Lost The Battle But You Have Not Lost The War !');
           }
           if (lost === 5) {
               alert('You\'ve Officially lost.. officially');
               gameReset();
           } else if (won === 5) {
               alert('You\'ve Officially Defeated The Game.. Think You Can You Do It Again?');
               gameReset();
           }
       });
