will RANDOMLY return one of three strings:
"rock", "paper", "scissors"
Math.random method returns a random number where num >= 0 && num < 1
Question: How to use this to CONDITIONALLY return one of three strings with equal probability

Thinking: 0 <= num < 1; all numbers generated with equal probability
  visualizing -- 0.00----------|1.00 --> this is our range
  Each number is a decimal
  if you divide the instances of number between 0 and max value of Math.random() into 3 ranges
  each range is going to represent a string
  however, it's too complicated to define the exact value between each range
  so we have to change the decimals to integer

QUESTION: What to do to the generated number to return 3 distinct integers? + - * /?
Math.floor() rounds down the decimal to the nearest integer
to have 3 choices, we have to be able to round down 3 floating numbers to integers
  new range visualizing -- 0.00----------1.00 1.00----------2.00 2.00----------|3.00 --> this is our NEW range
  +: 0.5+3 = 3.5 gives 2 choices - 3 and 4
  -: 0.5-3 = -2.5 gives 2 choices - -3 and -2
  *: 0.5*3 = 1.5 && 0.3*3 = 0.9 && 0.9*3 = 2.7 gives 3 choies - 0, 1, 2
  /: 0.5/3 = 0.167 gives 2 choices - 0 and 1
CONCLUSION: Range * n you will get n possible whole numbers (0 to n-1) when rounded down with Math.floor()

ALTERNATIVELY:
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
    */
}
