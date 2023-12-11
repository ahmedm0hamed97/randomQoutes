
var qoutes = [
  "“A room without books is like a body without a soul.”",
  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", 
  "“You only live once, but if you do it right, once is enough.”", 
  "“Be the change that you wish to see in the world.”",
  "“In three words I can sum up everything I've learned about life: it goes on.”",
  "“If you tell the truth, you don't have to remember anything.”",
  "“A friend is someone who knows all about you and still loves you.”",
  "“Always forgive your enemies; nothing annoys them so much.”",
  "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
  "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
  "“It is better to be hated for what you are than to be loved for what you are not.”",
  `“Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend”`,
  `“Insanity is doing the same thing, over and over again, but expecting different results.”`,
  `✌️"والله لننصرنّ الحق.. فلتحيا فلسطين.. فلتحيا فلسطين.. فلتحيا فلسطين"..`
];

var qoutesSaider = [
  "― Marcus Tullius Cicero", 
  "― Bernard M. Baruch", 
  "― Mae West", 
  "― Mahatma Gandhi",
  "― Robert Frost",
  "― Mark Twain",
  "― Elbert Hubbard",
  "― Oscar Wilde",
  "― Mahatma Gandhi",
  "― Ralph Waldo Emerson",
  "― Andre Gide",
  "― Maya Angelou",
  "― Steve Jobs",
  "― محمد ابو تريكه"
];

var saiderPhoto =[
  `<img src="./images/1.jpg" alt="the person which said it " />`,
  `<img src="./images/2.jpg" alt="the person which said it " />`,
  `<img src="./images/3.jpg" alt="the person which said it " />`,
  `<img src="./images/4.jpg" alt="the person which said it " />`,
  `<img src="./images/5.jpg" alt="the person which said it " />`,
  `<img src="./images/6.jpg" alt="the person which said it " />`,
  `<img src="./images/7.jpg" alt="the person which said it " />`,
  `<img src="./images/8.jpg" alt="the person which said it " />`,
  `<img src="./images/9.jpg" alt="the person which said it " />`,
  `<img src="./images/10.jpg" alt="the person which said it " />`,
  `<img src="./images/11.jpg" alt="the person which said it " />`,
  `<img src="./images/12.jpg" alt="the person which said it " />`,
  `<img src="./images/13.jpg" alt="the person which said it " />`,
  `<img src="./images/0.png" alt="the person which said it " />`,
  

]

function generateQoutes() {
  
  var oldRandom = Math.round(Math.random() * qoutes.length);
  var newRandom = Math.round(Math.random() * qoutes.length)  ;  
  // console.log(`oldRandom ${oldRandom}`);
  // console.log(`newRandom ${newRandom}`);

//length equal 14 but not found index 14 started from 0
  if(newRandom == qoutes.length){
    newRandom -= 1;
    console.log(`new equal length => ${newRandom}`);
  }

  while(oldRandom == newRandom){
    var newRandom = Math.round(Math.random() * qoutes.length)  ;
    console.log(`old equal new  => ${newRandom}`);
    
  }
  
  // console.log(qoutes[newRandom]);
  // console.log(qoutesSaider[newRandom]);

  document.getElementById("qoutes").innerHTML = qoutes[newRandom];
  document.getElementById("saider").innerHTML = qoutesSaider[newRandom];
  document.getElementById("saiderImage").innerHTML = saiderPhoto[newRandom];

}

