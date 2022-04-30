//1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let q1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
q1.match(/love/gi); // returns array of [Love, love, love]

//2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let q2 = 'You cannot end a sentence with because because because is a conjunction';
q2.match(/because/gi).length; // returns 3

//3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let cleanSentence = sentence.replace(/[$%@&#;]/g,''); //returns sentence.replace(/[$%@&#;]/g,''); 'I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!? This 30DaysOfJavaScript is also the result of love of teaching' 
//Most frequent word: 
cleanSentence.split(/\W+/g); //Updated to use regex


//4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let q4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let monthlySalary = +q4.match('5000')[0];
let annualBonus = +q4.match('10000')[0];
let monthlyOnline = +q4.match('15000')[0];

let totalAnnualIncome = ((monthlySalary * 12) + annualBonus + (monthlyOnline * 12)); //outputs 250000