var guessAble = ['yes', 'no', 'maybe', 'who', 'what', 'when'];
       var guessesAvailable = 10;
       var right = 0;
       var wrong = 0;
       var won = 0;
       var lost = 0;
       var alreadyGuessed = [];
       var correctAnswer = Math.floor(Math.random() * guessAble.length);
       var random = guessAble[correctAnswer];
       console.log(correctAnswer, random);

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
           while (alreadyGuessed > 0) {
                alreadyGuessed.pop();
            }
           start();
       };

        function matchReset(){
            while (alreadyGuessed > 0) {
                alreadyGuessed.pop();
            }
            right = 0;
            wrong = 0;
            guessesAvailable = 10;
            start();
        };

       $('#submit').on('click', function() {
           var yourAnswer = $('#answer').val().trim();
           alreadyGuessed.push(yourAnswer);
           $('#yourGuesses').html(alreadyGuessed + ',');
           
           if (yourAnswer === random) {
               right ++;
               start();
           } else {
               guessesAvailable --;
               wrong ++;
               start();
           }
           if (right === 5) {
               won ++;
               $('#yourGuesses').empty();
               matchReset();
               alert('You\'ve Won A Match !!');
           } else if (wrong === 10 || guessesAvailable === 0) {
               lost ++;
               $('#yourGuesses').empty();
               matchReset();
               alert('You May Have Lost The Battle But You Have Not Lost The War !');
           }
           if (lost === 5) {
               $('#yourGuesses').empty();
               alert('You\'ve Officially lost.. officially');
               gameReset();
           } else if (won === 5) {
               $('#yourGuesses').empty();
               alert('You\'ve Officially Defeated The Game.. Think You Can You Do It Again?');
               gameReset();
           }
       });
