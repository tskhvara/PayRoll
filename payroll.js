var form = document.querySelector('form');
var approvedLVL;
var sgc;
var globalLimit =[
  {month: "January", value: 160},
  {month: "February", value:  160},
  {month: "March", value:   168},
  {month: "April", value:  144},
  {month: "May", value: 160},
  {month: "June", value: 176},
  {month: "July", value: 168},
  {month: "August", value:184},
  {month: "September", value: 176},
  {month: "Octomber", value: 160},
  {month: "November", value: 168},
  {month: "December", value: 176},
  ]
  document.getElementById('overtime').value = 0;
  const monthSelectEvent = document.getElementById('monthSelect');
  const limit = document.getElementById('limit-check');

  
  // Set the default value when the page loads
  var currentDate = new Date();
  var activeMonth = currentDate.getMonth();
  limit.value = globalLimit[activeMonth].value;
  document.getElementById("active-month").textContent = globalLimit[activeMonth].month;
  
  monthSelectEvent.addEventListener('change', function () {
    if (monthSelectEvent.value == "current") {
      activeMonth = currentDate.getMonth();
      limit.value = globalLimit[activeMonth].value;
      document.getElementById("active-month").textContent = globalLimit[activeMonth].month;

    } else {
      activeMonth = monthSelectEvent.value;
      limit.value = globalLimit[activeMonth].value;
      document.getElementById("active-month").textContent = globalLimit[activeMonth].month;

    }
    
  });
  

// Get the limit input elements
var firstMonthLimitInput = document.getElementById("first-month-limit");
var secondMonthLimitInput = document.getElementById("second-month-limit");
var thirdMonthLimitInput = document.getElementById("third-month-limit");

const stageElement = document.getElementById('stage');
let hourSalary = 7.1;
let nightHourSalary = hourSalary * 50 / 100;

stageElement.addEventListener('change', function() {
  const stage = stageElement.value;

  if (stage === '1') {
    hourSalary = 7.1;
    nightHourSalary = hourSalary * 50 / 100;
  } else if (stage === '2') {
    hourSalary = 7.6;
    nightHourSalary = hourSalary * 50 / 100;
  } else if (stage === '3') {
    hourSalary = 8.1;
    nightHourSalary = hourSalary * 50 / 100;
  }

});

const rangeInput1 = document.getElementById('range-input1');
const rangeValue1 = document.getElementById('range-value1');

rangeInput1.addEventListener('input', () => {
  rangeValue1.textContent = rangeInput1.value;
  const hours = rangeInput1.value;
  const nightHours = hours * 6 / 8;
  const shiftType = document.getElementById('shift-type').value;
  const bonus = document.getElementById('first-month-bonus').value;
  let salary;

  if (shiftType === "night") {
    salary = (hours * hourSalary) + (nightHours * nightHourSalary);
    console.warn(hours + " " + hourSalary);
    console.warn(nightHours + "  " + nightHourSalary);
    
  } else {
    salary = (hours * hourSalary);
    
  }

  const total = salary - bonus;
  document.getElementById('first-month-salary').value = (salary).toFixed(0);
  document.getElementById('first-month-salary-value').value = (total).toFixed(0);
});






const rangeInput2 = document.getElementById('range-input2');
const rangeValue2 = document.getElementById('range-value2');
rangeInput2.addEventListener('input', () => {
  rangeValue2.textContent = rangeInput2.value;
    const hours = rangeInput2.value;
  const nightHours = hours * 6 / 8;
  const shiftType = document.getElementById('shift-type').value;
  const bonus = document.getElementById('second-month-bonus').value;
  let salary;

  if (shiftType === "night") {
    salary = (hours * hourSalary) + (nightHours * nightHourSalary);
    console.warn(hours + " " + hourSalary);
    console.warn(nightHours + "  " + nightHourSalary);
    
  } else {
    salary = (hours * hourSalary);
    
  }
const total = salary - bonus;
  document.getElementById('second-month-salary').value = (salary).toFixed(0);
  document.getElementById('second-month-salary-value').value = (total).toFixed(0)
});

const rangeInput3= document.getElementById('range-input3');
const rangeValue3= document.getElementById('range-value3');
rangeInput3.addEventListener('input', () => {
  rangeValue3.textContent = rangeInput3.value;
  const hours = rangeInput3.value;
  const nightHours = hours * 6 / 8;
  const shiftType = document.getElementById('shift-type').value;
  const bonus = document.getElementById('third-month-bonus').value
  let salary;

  if (shiftType === "night") {
    salary = (hours * hourSalary) + (nightHours * nightHourSalary);
    console.warn(hours + " " + hourSalary);
    console.warn(nightHours + "  " + nightHourSalary);
    
  } else {
    salary = (hours * hourSalary);
    
  }
 const total = salary - bonus;
  document.getElementById('third-month-salary').value = (salary).toFixed(0);
  document.getElementById('third-month-salary-value').value = (total).toFixed(0);
});

///Bonus hour salary
var bonus = {
  evaluation: [0, 0.60, 0.90, 1.20],
  sgc : [0, 0.60, 0.90, 1.20],
  dealingSpeed : [0, 0.40, 0.60, 0.80],
  reaction : [0, 0.20, 0.40, 0.60],
  cooperation : [0, 0, 0.20, 0.40], 
};var bonusCriteria = {
  evaluation: [0, 85, 91, 97],
  sgc : [0, 1000, 1500, 2000],
  dealingSpeed : [0, 70, 75, 85],
  reaction : [0, 65, 70, 80],
  cooperation : [0, 0, 85, 95], 
  hours:[0,96,120,144],
  violations:[3,2,2,1],
  ezugiMistakes:[6,5,3,2],
};

var bonuslevel = ["No Bonus", "MINIMUM" , "ADVANCE" , "OVERACHIEVER" ]

const gameCountInput = document.getElementById('game-count');
const mistakesCountInput = document.getElementById('counted-mistakes');
const sgcSpan = document.getElementById('SGC-LVL');

gameCountInput.addEventListener('input', updateSGC);
mistakesCountInput.addEventListener('input', updateSGC);

function updateSGC() {
  const gameCount = parseInt(gameCountInput.value);
  const mistakesCount = parseInt(mistakesCountInput.value);
  const bonusType = document.getElementById("bonus-type").value;
  const style = document.getElementById("SGC-LVL").style
if (bonusType === "new" || bonusType === "old"){
  if (mistakesCount > 0) {
    sgc = gameCount / mistakesCount;
  } else if (mistakesCount === 0) {
    sgc = gameCount;
  } else {
    sgc = gameCount;
  }
  sgc = sgc.toFixed(0);
    
   if (sgc >= 0 ){ 
  if (sgc >= bonusCriteria.sgc[3]) {
      sgcSpan.textContent = sgc + ' SGC - OVERACHIEVER';
      style.color = "green";     
    } else if (sgc >= bonusCriteria.sgc[2]) {
      sgcSpan.textContent = sgc + ' SGC - ADVANCE';
      style.color = "#00ff00"
    } else if (sgc >= bonusCriteria.sgc[1]) {
      sgcSpan.textContent = sgc + ' SGC - MINIMUM';
      style.color = "orange";     
    }else {sgcSpan.textContent =sgc + ' SGC - NO BONUS'; style.color = "red"}
  }else {sgcSpan.textContent = 'NO BONUS'; style.color = "red";}
} 
else if (bonusType === "Ezugi" || bonusType === "GameShow"){
  if (mistakesCount <= bonusCriteria.ezugiMistakes[3]){
    sgcSpan.textContent = "OVERACHIEVER"
  }else if (mistakesCount <= bonusCriteria.ezugiMistakes[2]){
    sgcSpan.textContent = "ADVANCE"
  }else if (mistakesCount <= bonusCriteria.ezugiMistakes[1]){
    sgcSpan.textContent = "MINIMUM"
  }else if (mistakesCount <= bonusCriteria.ezugiMistakes[0]){
    sgcSpan.textContent = "NO BONUS"
  }

}
}



  const avgPerfomanceInput = document.getElementById('avg-perfomance');
  const avgPerfomanceSpan = document.getElementById('AVG-perfomance-LVL');
  avgPerfomanceInput.addEventListener('input', updateAvgPerfomance);
  
  function updateAvgPerfomance() {
    const value = parseInt(avgPerfomanceInput.value);
    const style = document.getElementById("AVG-perfomance-LVL").style

    let text = '';
    if (value >= bonusCriteria.evaluation[3]) {
      text = 'Overachiever';
      style.color = "green";
    } else if (value >= bonusCriteria.evaluation[2]) {
      text = 'Advance';
      style.color = "#00ff00"
    } else if (value >= bonusCriteria.evaluation[1]) {
      text = 'Minimum';
      style.color = "orange";
    } else {
      text = 'No Bonus';
      style.color = "red"; 
    }
    avgPerfomanceSpan.textContent = `${value} % - ${text}`;
  }

const dealingSpeedInput = document.getElementById('dealing-speed');
const dealingSpeedSpan = document.getElementById('dealing-speed-LVL');
dealingSpeedInput.addEventListener('input', updateDealingSpeed);

function updateDealingSpeed() {
  const value = parseInt(dealingSpeedInput.value);
  const style = document.getElementById("dealing-speed-LVL").style

  let text = '';
  if (value >= bonusCriteria.dealingSpeed[3]) {
    text = 'Overachiever';
    style.color = "green";
  } else if (value >= bonusCriteria.dealingSpeed[2]) {
    text = 'Advance';
    style.color = "#00ff00"
  } else if (value >= bonusCriteria.dealingSpeed[1]) {
    text = 'Minimum';
    style.color = "orange";
  } else {
    text = 'No Bonus';
    style.color = "red"; 

  }
  dealingSpeedSpan.textContent = `${value} % - ${text}`;
}

const reactionInput = document.getElementById('reaction');
const reactionSpan = document.getElementById('reaction-LVL');
reactionInput.addEventListener('input', updateReaction);

function updateReaction() {
  const value = parseInt(reactionInput.value);
  const style = document.getElementById("reaction-LVL").style
  let text = '';
  if (value >= bonusCriteria.reaction[3]) {
    text = 'Overachiever';
    style.color = "green";
  } else if (value >= bonusCriteria.reaction[2]) {
    text = 'Advance';
    style.color = "#00ff00"
  } else if (value >= bonusCriteria.reaction[1]) {
    text = 'Minimum';
    style.color = "orange";
  } else {
    text = 'No Bonus';
    style.color = "red"; 
  }
  reactionSpan.textContent = `${value} % - ${text}`;
}

const cooperationInput = document.getElementById('cooperation');
const cooperationSpan = document.getElementById('cooperation-LVL');
cooperationInput.addEventListener('input', updateCooperation);

function updateCooperation() {
  const value = parseInt(cooperationInput.value);
  const style = document.getElementById("cooperation-LVL").style;
  let text = '';
  if (value >= bonusCriteria.cooperation[3]) {
    text = 'Overachiever';
    style.color = "green";
  } else if (value >= bonusCriteria.cooperation[2]) {
    text = 'Advance';
    style.color = "#00ff00"
  } else {
    text = 'No Bonus';
    style.color = "red"; 

  }
  cooperationSpan.textContent = `${value} % - ${text}`;
}

   




////// # CONFIRM # //////////////
form.addEventListener('submit', (event) => {
  event.preventDefault();

    console.error("------------------------");
    var bonusType = document.getElementById('bonus-type').value;

  // Get form inputs
  let stage = parseInt(document.getElementById('stage').value);
  // var position = document.getElementById('position').value;
  var workingHours = parseInt(document.getElementById('working-hours').value);
  var nightHours = parseInt(document.getElementById('night-hours').value);
  var holidayHours = parseInt(document.getElementById('holiday-hours').value);
  var paidVacations = parseInt(document.getElementById('paid-vacations').value);
  // var PaidVacation = parseInt(document.getElementById('paid-vacation').value);
  var sickLeaveDays = parseInt(document.getElementById('sick-leave').value);
  var bonusShift = parseInt(document.getElementById('bonus-shift').value);
  var violationPoints = parseInt(document.getElementById('violation-points').value);
  var breach = document.getElementById('breach').value === 'true';
  var emergency = document.getElementById('emergency-case').value === 'true';
  var evaluation = parseInt(document.getElementById('avg-perfomance').value);
  var gameCount = parseInt(document.getElementById('game-count').value);
  var countedMistakes = parseInt(document.getElementById('counted-mistakes').value);
  // if (countedMistakes > 0){
  //   sgc = gameCount/countedMistakes;
  // }else if(countedMistakes === 0){sgc = gameCount;}else {sgcc=gameCount;}
  var dealingSpeed = parseInt(document.getElementById('dealing-speed').value);
  var reaction = parseInt(document.getElementById('reaction').value);
  var cooperation = parseInt(document.getElementById('cooperation').value);
  var monthCheck = document.getElementById("monthSelect").value;
  var shiftType = document.getElementById("shift-type").value;
  var otherTax =parseInt(document.getElementById("other-tax").value);


  ///paid
  var pirveliHours = parseInt(document.getElementById('range-input1').value) || 0;
  var meoreHours = parseInt(document.getElementById('range-input2').value) || 0;
  var mesameHours = parseInt(document.getElementById('range-input3').value) || 0;

  var pirveliSalary = parseInt(document.getElementById("first-month-salary").value);
  var meoreSalary = parseInt(document.getElementById("second-month-salary").value);
  var mesameSalary = parseInt(document.getElementById("third-month-salary").value);

  var pirveliBonus = parseInt(document.getElementById("first-month-bonus").value);
  var meoreBonus = parseInt(document.getElementById("second-month-bonus").value);
  var mesameBonus = parseInt(document.getElementById("third-month-bonus").value);


console.log(violationPoints);
  // Calculate total hours worked
  if(isNaN(paidVacations)){paidVacations = 0}
  var totalHours = workingHours + (paidVacations * 8) ;

  ///stage hour salary
  if(stage === 1){
    hourSalary = 7.1;
    nightHourSalary = 7.1*50/100;
    console.log("stage 1 - Hour Salary : "+hourSalary )
    console.log("Night one Hour salary : "+hourSalary*150/100)
    document.getElementById("length-of-service-approved").textContent = "ADVANCE";

}else if(stage === 2){
    hourSalary = 7.6;
    nightHourSalary = 7.6*50/100;
    console.log("stage 2 - Hour Salary : "+hourSalary )
 console.log("Night one Hour salary : "+hourSalary*150/100)
 document.getElementById("length-of-service-approved").textContent = "OVERACHIEVER";

}else if(stage === 3){
    hourSalary = 8.1;
    nightHourSalary = 8.1*50/100;
    console.log("stage 2 - Hour Salary : "+hourSalary )
 console.log("Night one Hour salary : "+hourSalary*150/100)
 document.getElementById("length-of-service-approved").textContent = "OVERACHIEVER";

}

///calculate bonus stagesSGC
var approvedLVL;

var bonusSalary;
var hourBonus;



if (bonusType === "new" || bonusType === "GameShow" || bonusType === "Ezugi" || bonusType === "Mentor" || bonusType === "SkyCity"){
if(breach === true || violationPoints >= bonusCriteria.violations[0] || totalHours < bonusCriteria.hours[1] || emergency === true){
 bonusSalary=0;
 hourBonus= 0;
 sgcBonus = 0;
 evalautionBonus = 0;
 reactionBonus = 0;
 cooperationBonus = 0;
 dealingSpeedBonus = 0;
 var approvedLVL= "No Bonus";
 console.warn("Approved Bonus Lvl - NO BONUS");
 if(breach === true){
  console.warn("u have Breach in active month");
  document.getElementById("bonus-reason").textContent= "  (You have Breach in Active month)";
  document.getElementById("violation-points-approved").textContent = "NO BONUS";
  violationPoints = 10;

 }else if(emergency === true){
  console.warn("u have EMERGENCY CASE in active month");
  document.getElementById("bonus-reason").textContent= "  (You have EMERGENCY CASE in Active month)";
  document.getElementById("violation-points-approved").textContent = "NO BONUS";
 }else if(violationPoints >= bonusCriteria.violations[0]){
  console.warn("u have more than "+bonusCriteria.violations[0]+" points violation")
    document.getElementById("bonus-reason").textContent= "  (You have more than "+bonusCriteria.violations[0]+" points violation ("+violationPoints+") )";
    document.getElementById("violation-points-approved").textContent = "NO BONUS";
 }else if(totalHours <bonusCriteria.hours[1]){
  console.warn("Working hours for minimum bonus lvl is "+bonusCriteria.hours[1]+" Hours. you worked -"+workingHours+" Hours" );
  document.getElementById("bonus-reason").textContent= "  (Working hours for minimum bonus lvl is "+bonusCriteria.hours[1]+" Hours. you worked - ("+workingHours+") Hours  )";
  document.getElementById("working-hours-approved").textContent= "NO BONUS" ;

}
}else{
  document.getElementById("bonus-reason").textContent= null ;
  if(bonusType === "Ezugi" || bonusType === "GameShow"){
    document.getElementById("reaction").value = 100;
    document.getElementById("dealing-speed").value =100;
    document.getElementById("cooperation").value = 100;
    document.getElementById("game-count").value = 2000;
  }
  ///OverAchiever 
if(totalHours >= bonusCriteria.hours[3] && violationPoints <= bonusCriteria.violations[3] && stage > 1 ){
  console.warn("Approved Bonus Lvl OverAchiever");
  approvedLVL= "OVERACHIEVER";

///SGC Bonus Criteria
  var sgcBonus;
if(sgc >= bonusCriteria.sgc[3] ){sgcBonus = bonus.sgc[3]; console.log("SGC Bonus - OverAchiever : "+ bonus.sgc[3]+" GEl")}
    else if (sgc >= bonusCriteria.sgc[2]){sgcBonus = bonus.sgc[2];console.log("SGC Bonus - Advance : "+ bonus.sgc[2]+" GEl")}
     else if (sgc >= bonusCriteria.sgc[1]){sgcBonus = bonus.sgc[1];console.log("SGC Bonus - Minimum : "+ bonus.sgc[1]+" GEl")}
      else {sgcBonus = bonus.sgc[0];console.log("SGC Bonus - No Bonus : "+ bonus.sgc[0]+" GEl")}
///AVG Evaluation Bonus Criteria
var evalautionBonus;
if(evaluation >= bonusCriteria.evaluation[3] ){evalautionBonus = bonus.evaluation[3]; console.log("Evaluation Bonus - OverAchiever : "+ bonus.evaluation[3]+" GEl")}
    else if (evaluation >= bonusCriteria.evaluation[2]){evalautionBonus = bonus.evaluation[2];console.log("Evaluation Bonus - Advance : "+ bonus.evaluation[2]+" GEl")}
     else if (evaluation >= bonusCriteria.evaluation[1]){evalautionBonus = bonus.evaluation[1];console.log("Evaluation Bonus - Minimum : "+ bonus.evaluation[1]+" GEl")}
      else {evalautionBonus = bonus.evaluation[0];console.log("Evaluation Bonus - No Bonus : "+ bonus.evaluation[0]+" GEl")}
/// Dealing Speed Bonus Criteria
var dealingSpeedBonus;
if(dealingSpeed >= bonusCriteria.dealingSpeed[3] ){dealingSpeedBonus = bonus.dealingSpeed[3]; console.log("dealing Speed Bonus - OverAchiever : "+ bonus.dealingSpeed[3]+" GEl")}
    else if (dealingSpeed >= bonusCriteria.dealingSpeed[2]){dealingSpeedBonus = bonus.dealingSpeed[2];console.log("dealing Speed Bonus - Advance : "+ bonus.dealingSpeed[2]+" GEl")}
     else if (dealingSpeed >= bonusCriteria.dealingSpeed[1]){dealingSpeedBonus = bonus.dealingSpeed[1];console.log("dealing Speed Bonus - Minimum : "+ bonus.dealingSpeed[1]+" GEl")}
      else {dealingSpeedBonus = bonus.dealingSpeed[0];console.log("dealing Speed Bonus - No Bonus : "+ bonus.dealingSpeed[0]+" GEl")}
/// initial reaction bonus Criteria
var reactionBonus;
if(reaction >= bonusCriteria.reaction[3] ){reactionBonus = bonus.reaction[3]; console.log("reaction Bonus - OverAchiever : "+ bonus.reaction[3]+" GEl")}
    else if (reaction >= bonusCriteria.reaction[2]){reactionBonus = bonus.reaction[2];console.log("reaction Bonus - Advance : "+ bonus.reaction[2]+" GEl")}
     else if (reaction >= bonusCriteria.reaction[1]){reactionBonus = bonus.reaction[1];console.log("reaction Bonus - Minimum : "+ bonus.reaction[1]+" GEl")}
      else {reactionBonus = bonus.reaction[0];console.log("reaction Bonus - No Bonus : "+ bonus.reaction[0]+" GEl")}
/// Roulete Cooperation Bonus 
var cooperationBonus;
if(cooperation >= bonusCriteria.cooperation[3] ){cooperationBonus = bonus.cooperation[3]; console.log("cooperation Bonus - OverAchiever : "+ bonus.cooperation[3]+" GEl")}
    else if (cooperation >= bonusCriteria.cooperation[2]){cooperationBonus = bonus.cooperation[2];console.log("cooperation Bonus - Advance : "+ bonus.cooperation[2]+" GEl")}
     else if (cooperation >= bonusCriteria.cooperation[1]){cooperationBonus = bonus.cooperation[1];console.log("cooperation Bonus - No Nonus : "+ bonus.cooperation[1]+" GEl")}
      else {cooperationBonus = bonus.cooperation[0];console.log("cooperation Bonus - No Bonus : "+ bonus.cooperation[0]+" GEl")}
  /// CALCULATED BONUS
  hourBonus = sgcBonus + cooperationBonus +reactionBonus+dealingSpeedBonus+evalautionBonus;
  console.warn("Hour Bonus - "+ hourBonus)
}
 ///Advance
else if(totalHours >= bonusCriteria.hours[2] && violationPoints <= bonusCriteria.violations[2] ){
  console.warn("Approved Bonus Lvl Advance");
  approvedLVL="ADVANCE";
  ///SGC Bonus Criteria
var sgcBonus;
if (sgc >= bonusCriteria.sgc[2]){sgcBonus = bonus.sgc[2];console.log("SGC Bonus - Advance : "+ bonus.sgc[2]+" GEl")}
     else if (sgc >= bonusCriteria.sgc[1]){sgcBonus = bonus.sgc[1];console.log("SGC Bonus - Minimum : "+ bonus.sgc[1]+" GEl")}
      else {sgcBonus = bonus.sgc[0];console.log("SGC Bonus - No Bonus : "+ bonus.sgc[0]+" GEl")}
///AVG Evaluation Bonus Criteria
var evalautionBonus;
if (evaluation >= bonusCriteria.evaluation[2]){evalautionBonus = bonus.evaluation[2];console.log("Evaluation Bonus - Advance : "+ bonus.evaluation[2]+" GEl")}
     else if (evaluation >= bonusCriteria.evaluation[1]){evalautionBonus = bonus.evaluation[1];console.log("Evaluation Bonus - Minimum : "+ bonus.evaluation[1]+" GEl")}
      else {evalautionBonus = bonus.evaluation[0];console.log("Evaluation Bonus - No Bonus : "+ bonus.evaluation[0]+" GEl")}
/// Dealing Speed Bonus Criteria
var dealingSpeedBonus;
if (dealingSpeed >= bonusCriteria.dealingSpeed[2]){dealingSpeedBonus = bonus.dealingSpeed[2];console.log("dealing Speed Bonus - Advance : "+ bonus.dealingSpeed[2]+" GEl")}
     else if (dealingSpeed >= bonusCriteria.dealingSpeed[1]){dealingSpeedBonus = bonus.dealingSpeed[1];console.log("dealing Speed Bonus - Minimum : "+ bonus.dealingSpeed[1]+" GEl")}
      else {dealingSpeedBonus = bonus.dealingSpeed[0];console.log("dealing Speed Bonus - No Bonus : "+ bonus.dealingSpeed[0]+" GEl")}
/// initial reaction bonus Criteria
var reactionBonus;
if (reaction >= bonusCriteria.reaction[2]){reactionBonus = bonus.reaction[2];console.log("reaction Bonus - Advance : "+ bonus.reaction[2]+" GEl")}
     else if (reaction >= bonusCriteria.reaction[1]){reactionBonus = bonus.reaction[1];console.log("reaction Bonus - Minimum : "+ bonus.reaction[1]+" GEl")}
      else {reactionBonus = bonus.reaction[0];console.log("reaction Bonus - No Bonus : "+ bonus.reaction[0]+" GEl")}
/// Roulete Cooperation Bonus 
var cooperationBonus;
if (cooperation >= bonusCriteria.cooperation[2]){cooperationBonus = bonus.cooperation[2];console.log("cooperation Bonus - Advance : "+ bonus.cooperation[2]+" GEl")}
     else if (cooperation >= bonusCriteria.cooperation[1]){cooperationBonus = bonus.cooperation[1];console.log("cooperation Bonus - No Bonus : "+ bonus.cooperation[1]+" GEl")}
      else {cooperationBonus = bonus.cooperation[0];console.log("cooperation Bonus - No Bonus : "+ bonus.cooperation[0]+" GEl")}
  /// CALCULATED BONUS
  hourBonus = sgcBonus + cooperationBonus +reactionBonus+dealingSpeedBonus+evalautionBonus;
  console.warn("Hour Bonus - "+ hourBonus)
}
/// MINIMUM
else if(totalHours >= bonusCriteria.hours[1] && violationPoints <= bonusCriteria.violations[1] ){
  console.warn("Approved Bonus Lvl Minimum");

  if(totalHours < bonusCriteria.hours[2]){
    document.getElementById("working-hours-approved").textContent= "MINIMUM" ;
  }if(violationPoints <= bonusCriteria.violations[1]){
    document.getElementById("violation-points-approved").textContent= "MINIMUM" ;
  }

  approvedLVL = "MINIMUM";
  ///SGC Bonus Criteria
var sgcBonus;
if (sgc >= bonusCriteria.sgc[1]){sgcBonus = bonus.sgc[1];console.log("SGC Bonus - Minimum : "+ bonus.sgc[1]+" GEl")}
      else {sgcBonus = bonus.sgc[0];console.log("SGC Bonus - No Bonus : "+ bonus.sgc[0]+" GEl")}
///AVG Evaluation Bonus Criteria
var evalautionBonus;
if (evaluation >= bonusCriteria.evaluation[1]){evalautionBonus = bonus.evaluation[1];console.log("Evaluation Bonus - Minimum : "+ bonus.evaluation[1]+" GEl")}
      else {evalautionBonus = bonus.evaluation[0];console.log("Evaluation Bonus - No Bonus : "+ bonus.evaluation[0]+" GEl")}
/// Dealing Speed Bonus Criteria
var dealingSpeedBonus;
if (dealingSpeed >= bonusCriteria.dealingSpeed[1]){dealingSpeedBonus = bonus.dealingSpeed[1];console.log("dealing Speed Bonus - Minimum : "+ bonus.dealingSpeed[1]+" GEl")}
      else {dealingSpeedBonus = bonus.dealingSpeed[0];console.log("dealing Speed Bonus - No Bonus : "+ bonus.dealingSpeed[0]+" GEl")}
/// initial reaction bonus Criteria
var reactionBonus;
if (reaction >= bonusCriteria.reaction[1]){reactionBonus = bonus.reaction[1];console.log("reaction Bonus - Minimum : "+ bonus.reaction[1]+" GEl")}
      else {reactionBonus = bonus.reaction[0];console.log("reaction Bonus - No Bonus : "+ bonus.reaction[0]+" GEl")}
/// Roulete Cooperation Bonus 
var cooperationBonus;
if (cooperation >= bonusCriteria.cooperation[1]){cooperationBonus = bonus.cooperation[1];console.log("cooperation Bonus - Minimum : "+ bonus.cooperation[1]+" GEl")}
      else {cooperationBonus = bonus.cooperation[0];console.log("cooperation Bonus - No Bonus : "+ bonus.cooperation[0]+" GEl")}
  /// CALCULATED BONUS
  hourBonus = sgcBonus + cooperationBonus +reactionBonus+dealingSpeedBonus+evalautionBonus;
  console.warn("Hour Bonus - "+ hourBonus)
}}

if (violationPoints >= bonusCriteria.violations[0]  || breach === true){
  document.getElementById("violation-points-approved").textContent = "NO BONUS";
}else if(violationPoints <= bonusCriteria.violations[3]){
  document.getElementById("violation-points-approved").textContent = "OVERACHIEVER";
}else if (violationPoints <= bonusCriteria.violations[2]){
  document.getElementById("violation-points-approved").textContent= "ADVANCE" ;
}else if(violationPoints <= bonusCriteria.violations[1]){
  document.getElementById("violation-points-approved").textContent = "MINIMUM" ;
}

if(totalHours >= bonusCriteria.hours[3]){
  document.getElementById("working-hours-approved").textContent= "OVERACHIEVER" ;
}else if (totalHours >= bonusCriteria.hours[2]){
  document.getElementById("working-hours-approved").textContent= "ADVANCE" ;
}else if (totalHours >= bonusCriteria.hours[1]){
  document.getElementById("working-hours-approved").textContent= "MINIMUM" ;
}else if(totalHours < bonusCriteria.hours[1]){
  document.getElementById("working-hours-approved").textContent= "NO BONUS" ;
}

} ///bonus NEW OVER()
else if (bonusType === "old"){
  hourBonus = 0;
}
///calculate limit
if (monthCheck === "current"){
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  } else {
    var currentMonth = monthCheck; 
  }

var limit = globalLimit;
var currentLimit = document.getElementById('limit-check').value;

var sgcBonusLVL;
var dealingSpeedBonusLVL;
var cooperationBonusLVL;
var reactionBonusLVL;
var evaluationBonusLVL;

if (sgcBonus === bonus.sgc[3]){sgcBonusLVL = "OVERACHIEVER";
}else if (sgcBonus === bonus.sgc[2]){sgcBonusLVL = "ADVANCE";
}else if (sgcBonus === bonus.sgc[1]){sgcBonusLVL = "MINIMUM";
}else if (sgcBonus === bonus.sgc[0]){sgcBonusLVL = "No Bonus";
}
if (dealingSpeedBonus === bonus.dealingSpeed[3]){dealingSpeedBonusLVL = "OVERACHIEVER";
}else if (dealingSpeedBonus ===  bonus.dealingSpeed[2]){dealingSpeedBonusLVL = "ADVANCE";
}else if (dealingSpeedBonus ===  bonus.dealingSpeed[1]){dealingSpeedBonusLVL = "MINIMUM";
}else if (dealingSpeedBonus ===  bonus.dealingSpeed[0]){dealingSpeedBonusLVL = "No Bonus";
}
if (cooperationBonus === bonus.cooperation[3]){cooperationBonusLVL = "OVERACHIEVER";
}else if (cooperationBonus ===  bonus.cooperation[2]){cooperationBonusLVL = "ADVANCE";
// }else if (cooperationBonus ===  bonus.cooperation[1]){cooperationBonusLVL = "MINIMUM";
}else if (cooperationBonus ===  bonus.cooperation[0]){cooperationBonusLVL = "No Bonus";
}
if (reactionBonus === bonus.reaction[3]){reactionBonusLVL = "OVERACHIEVER";
}else if (reactionBonus ===  bonus.reaction[2]){reactionBonusLVL = "ADVANCE";
}else if (reactionBonus ===  bonus.reaction[1]){reactionBonusLVL = "MINIMUM";
}else if (reactionBonus ===  bonus.reaction[0]){reactionBonusLVL = "No Bonus";
}sgcBonusLVL
if (evalautionBonus === bonus.evaluation[3]){evaluationBonusLVL = "OVERACHIEVER";
}else if (evalautionBonus ===  bonus.evaluation[2]){evaluationBonusLVL = "ADVANCE";
}else if (evalautionBonus ===  bonus.evaluation[1]){evaluationBonusLVL = "MINIMUM";
}else if (evalautionBonus ===  bonus.evaluation[0]){evaluationBonusLVL = "No Bonus";
}
const firstPreviousMonth = (currentMonth - 1 + 12) % 12; // Get previous month index (handles wrapping to the previous year)
var firstLimit = parseInt(document.getElementById('first-month-limit').value);
console.log("1 previous Month limit "+ firstLimit +"   "+ limit[firstPreviousMonth].month);
if (pirveliHours > firstLimit){var indexC1 = firstLimit}else {var indexC1 = pirveliHours}
const secondPreviousMonth = (currentMonth - 2 + 12) % 12; // Get second previous month index
var secondLimit = parseInt(document.getElementById('second-month-limit').value);
console.log("2 previous month limit "+ secondLimit +"   "+ limit[secondPreviousMonth].month)
if (meoreHours > secondLimit){var indexC2 = secondLimit}else {var indexC2 = meoreHours}

const thirdPreviousMonth = (currentMonth - 3 + 12) % 12; // Get third previous month index
var thirdLimit = parseInt(document.getElementById('third-month-limit').value);
console.log("3 previous month limit "+ thirdLimit +"   "+ limit[thirdPreviousMonth].month)
if (mesameHours > thirdLimit){var indexC3 = thirdLimit}else {var indexC3 = mesameHours}

const sumOfLimits = firstLimit+secondLimit+thirdLimit; // Sum of the last 3 month limits
const indexA1 = sumOfLimits / 8; // Calculate indexA
var last3hours = pirveliHours+meoreHours+mesameHours;
const indexA = last3hours / indexA1;
console.log("Total last 3 hours - "+ last3hours );
console.log("total limit days - "+ indexA1);


// if(isNaN(pirveliBonus)){var indexB1 = pirveliSalary}else{ var indexB1 = pirveliSalary-pirveliBonus;}
// if(isNaN(meoreBonus)){var indexB2 = meoreSalary}else{var indexB2 = meoreSalary-meoreBonus;}
// if(isNaN(mesameBonus)){var indexB3 = mesameSalary} else{var indexB3 = mesameSalary-mesameBonus;}

var indexB1 = parseInt(document.getElementById('first-month-salary-value').value);
var indexB2 = parseInt(document.getElementById('second-month-salary-value').value);
var indexB3 = parseInt(document.getElementById('third-month-salary-value').value);
console.warn(indexB1 +"."+indexB2 +"."+ indexB3);
const indexC = indexC1+indexC2+indexC3;
const indexB = indexB1+indexB2+indexB3;

console.log("index A = "+ indexA);
console.log("index B = "+ indexB);
console.log("index C = "+ indexC);

//Paid Vacation salary

// if (shiftType === "night" && stage === 3) {
//   var  paidLVL = 89.1 ;
// }else if (shiftType === "night" && stage ===2){
//   var  paidLVL = 83.6 ;
// }else if ((shiftType === "morning" || shiftType === "afternoon") && stage ===3){
//   var paidLVL = 64.8 ;
// }else if ((shiftType === "morning" || shiftType === "afternoon") && stage ===2){
//   var paidLVL = 60.8 ;
// }else 
if (stage === 1 && paidVacations > 0){
  alert("Paid Vacations are not available on STAGE 1")
  paidLVL=0;
}else{
var paidLVL = indexA*(indexB/indexC);}
console.log("PAID VACATION RATE : " + paidLVL)


const overtime = document.getElementById('overtime').value;
console.warn("overtime " + overtime);
console.log("limit in Current Month- "+currentLimit);
var overtimeSalary;
console.error("Working Hours - " + workingHours + " ("+totalHours+") ");
console.error("Limit in current month - " + currentLimit);
if(workingHours-currentLimit >0){
  overtimeSalary= overtime*hourSalary*1/2;
  console.log("Overtime Hours - "+overtime+" Hours - "+overtimeSalary+" Gel");
  
}else if(workingHours-currentLimit<=0){
  overtimeSalary= 0;
  console.log("Overtime Hours - "+overtime+" Hours - "+overtimeSalary+" Gel");
} console.error(currentMonth + " - " + currentLimit)

///BONUS LVL

  // Perform calculations
  // ... insert your code here ...
  var bonusType = document.getElementById('bonus-type').value;
  var nonHolidaySalary=workingHours*hourSalary;
  var nightSalary=nightHourSalary*nightHours;
  var holidaySalary= holidayHours * hourSalary;
  // if (bonusType === "NEW"){
  bonusSalary=hourBonus*workingHours;
  // }else if (bonusType === "10"){
  //   bonusSalary = nonHolidaySalary * 10/100;
  //   hourBonus = bonusSalary / workingHours;
  // }else if (bonusType === "20"){
  //   bonusSalary = nonHolidaySalary * 20/100;
  //   hourBonus = bonusSalary / workingHours;
  // }else if (bonusType === "30"){
  //   bonusSalary = nonHolidaySalary * 30/100;
  //   hourBonus = bonusSalary / workingHours;
  // }
  var bonusShiftSalary = bonusShift * 25;
//    ///sick leave Salary
//   if (stage === 3){
//     sickLeaveSalary = sickLeaveDays * 65;
// }else if (stage === 2){
//     sickLeaveSalary = sickLeaveDays * 60; 
// }else if (stage === 1){
//     sickLeaveSalary = sickLeaveDays * 56;
// }

////
var sickLeaveSalary3 = pirveliSalary + meoreSalary + mesameSalary;
var sickLeaveHours3 = pirveliHours + meoreHours + mesameHours;
var sickLeaveRate = 8 * (sickLeaveSalary3 / sickLeaveHours3);
sickLeaveSalary = sickLeaveDays * sickLeaveRate









////


var paidVacationsSalary = paidVacations * paidLVL;
var additionalBonusSalary =parseInt(document.getElementById("additional-bonus").value);
if(isNaN(sickLeaveDays)){
  sickLeaveDays = 0;
}
if (isNaN(nonHolidaySalary)) {
  nonHolidaySalary = 0;
}
if (isNaN(nightSalary)) {
  nightSalary = 0;
}
if (isNaN(holidaySalary)) {
  holidaySalary = 0;
}
if (isNaN(bonusSalary)) {
  bonusSalary = 0;
}
if (isNaN(paidVacationsSalary)) {
  paidVacationsSalary = 0;
}
if (isNaN(sickLeaveSalary)) {
  sickLeaveSalary = 0;
}
if (isNaN(bonusShiftSalary)) {
  bonusShiftSalary = 0;
}
if (isNaN(overtimeSalary)) {
  overtimeSalary = 0;
}
if (isNaN(holidayHours)) {
  holidayHours = 0;
}
if(isNaN(additionalBonusSalary)){
  additionalBonusSalary = 0;
}
if(isNaN(nightHours)){
  nightHours = 0;
}
if(isNaN(otherTax)){
  otherTax = 0;
}
///
event.preventDefault(); // Prevent form submission

  // Toggle the class to show/hide the total box


// // Get the elements
// // const submitBtn = document.getElementById('submitBtn');
// const totalBox = document.getElementById('totalBox');
// totalBox.classList.toggle('open');
// // Add event listener to the submit button
// // submitBtn.addEventListener('click', function(event) {
  
// // });

  var totalSalaryGross = nonHolidaySalary+nightSalary+holidaySalary+bonusSalary+paidVacationsSalary+sickLeaveSalary+bonusShiftSalary+overtimeSalary+additionalBonusSalary;
  
  nonHolidaySalary = nonHolidaySalary.toFixed(2);
  nightSalary=nightSalary.toFixed(2);
  holidaySalary= holidaySalary.toFixed(2);
  bonusSalary = bonusSalary.toFixed(2);
  paidVacationsSalary= paidVacationsSalary.toFixed(2);
  sickLeaveSalary = sickLeaveSalary.toFixed(2);
  totalSalaryGross = totalSalaryGross.toFixed(2);
  hourBonus = hourBonus.toFixed(2);
  overtimeSalary = overtimeSalary.toFixed(2);
  additionalBonusSalary = additionalBonusSalary.toFixed(2);
 var otherTax = otherTax.toFixed(2);
 var incomeTax = (totalSalaryGross * 20/100).toFixed(2);
 var pensionFund = (totalSalaryGross * 2/100).toFixed(2);
 console.error(bonusSalary + " BONUS " + nonHolidaySalary);
  var bonusPer = ((bonusSalary/nonHolidaySalary)*100).toFixed(2);
 var netSalary = (totalSalaryGross-incomeTax-pensionFund-otherTax).toFixed(2);



  //output console
  console.error("Bonus % - "+ bonusPer +" %" );
  console.log("Non-Holiday salary- "+nonHolidaySalary+" GEL " +workingHours+" Hours");
  console.log("Night Salary- "+nightSalary+" GEL " + nightHours +" Hours");
  console.log("Hoilday Salary- "+holidaySalary+" GEL"+ holidayHours+" Hours");
  console.log("Bonus Salary- "+ bonusSalary+" GEL - "+ hourBonus+"Gel Per-Hours("+workingHours+")");
  document.getElementById("overtimeSalary").textContent = overtimeSalary + " GEL - " + overtime + " Hours"

  console.log("PaidVacation Salary - "+paidVacationsSalary + " GEL - "+paidVacations + " Days");
  console.log("Sick Leave Salary - "+sickLeaveSalary + " GEL - "+sickLeaveDays+ " Days");
  console.warn("Total Salary Gross - "+ totalSalaryGross )
  console.log("Income Tax - " + incomeTax);
  
  // Output results

  document.getElementById("nonHolidaySalary").textContent = nonHolidaySalary + " GEL - " + workingHours + " Hours";
document.getElementById("nightSalary").textContent = nightSalary + " GEL - " + nightHours + " Hours";
document.getElementById("holidaySalary").textContent = holidaySalary + " GEL - " + holidayHours + " Hours";
document.getElementById("bonusSalary").textContent = bonusSalary + " GEL - " + hourBonus + "Gel Per-Hours(" + bonusPer + " %)";
// // Get the output line and the spoiler content
// var bonusSalaryOutput = document.getElementById("bonusSalaryOutput");
// var bonusSalarySpoiler = document.getElementById("bonusSalarySpoiler");
// Update the output line with the bonus salary and bonus percentage

function toggleSecondForm() {
  var secondForm = document.getElementById("second-form");
  if (document.getElementById("paid-vacations").checked) {
    secondForm.style.display = "block";
  } else {
    secondForm.style.display = "none";
  }
}
document.getElementById("stage0").textContent = stage + " Stage   " + hourSalary + "Gel/Hour";
document.getElementById("current-month").textContent = limit[currentMonth].month;
document.getElementById("current-limit").textContent = currentLimit;
document.getElementById("bonusSalary").textContent = bonusSalary + " GEL - " + hourBonus + "Gel Per-Hours(" + bonusPer + " %)";
document.getElementById("avg-perfomance-bonus").textContent = evalautionBonus + " GEL";
document.getElementById("SGC-Bonus").textContent = sgcBonus + " GEL";
document.getElementById("dealing-speed-bonus").textContent = dealingSpeedBonus + " GEL";
document.getElementById("initial-reaction-bonus").textContent = reactionBonus + " GEL";
document.getElementById("cooperation-bonus").textContent = cooperationBonus + " GEL";
document.getElementById("additional-bonus-span").textContent = additionalBonusSalary + " GEL";
if (paidVacations > 0 ){
document.getElementById("paidVacationsSalary").textContent = paidVacationsSalary + " GEL - " + paidVacations + " Days";
document.getElementById("paid-rate").textContent = " ( "+ (paidLVL).toFixed(2) + " Gel (1) )"
}else {paidVacationsSalary=0; document.getElementById("paidVacationsSalary").textContent = "0 GEL - " +  "0 Days";}

if(sickLeaveDays > 0){document.getElementById("sickLeaveSalary").textContent = sickLeaveSalary + " GEL - " + sickLeaveDays + " Days";
}else{sickLeaveSalary = 0; document.getElementById("sickLeaveSalary").textContent = "0 GEL - " + "0 Days";}

if (bonusShift > 0 ){ document.getElementById("bonusShiftSalary").textContent = bonusShiftSalary + " GEL - " + bonusShift + " Days";
}else{bonusShiftSalary = 0; document.getElementById("bonusShiftSalary").textContent = "0 GEL - " + "0 Days";
}



document.getElementById("totalSalaryGross").textContent = totalSalaryGross + "GEL";
document.getElementById("income-tax").textContent = incomeTax + " GEL";
document.getElementById("pension-fund").textContent = pensionFund + " GEL";
document.getElementById("other-tax-span").textContent = otherTax + " GEL";
document.getElementById("net-salary").textContent = netSalary + " GEL";
document.getElementById("approved-bonus").textContent= approvedLVL;
document.getElementById("shift-type0").textContent = shiftType;
console.log("total Salary - " + netSalary + " GEL");



  // Create a new row in the table
  var table = document.getElementById("userTable");
  var row = table.insertRow(-1);

  // Insert values into cells
  // var nameCell = row.insertCell(0);
  var monthCell = row.insertCell(0);
  var approvedCell = row.insertCell(1);
  var totalHoursCell = row.insertCell(2);
  var abscenseCell = row.insertCell(3)
  var lengthOfServiceCell = row.insertCell(4);
  var violationCell = row.insertCell(5);
    var sgcCell = row.insertCell(6);
    var paCell = row.insertCell(7);
var cardSpeedCell = row.insertCell(8);
  var reactionCell = row.insertCell(9); 
  var cooperationCell = row.insertCell(10);
  var hourBonusCell = row.insertCell(11);
  var totalBonusCell = row.insertCell(12);
  // var breachCell = row.insertCell(7);
  var salaryCell = row.insertCell(13);
  // nameCell.innerHTML = name; 
  monthCell.innerHTML = globalLimit[currentMonth].month;
  totalHoursCell.innerHTML = workingHours;
  abscenseCell.innerHTML = paidVacations +" PV - " + sickLeaveDays + " SL"
  lengthOfServiceCell.innerHTML = "STAGE " + stage + " - " + shiftType ;
  approvedCell.innerHTML = approvedLVL;
  sgcCell.innerHTML = sgcBonusLVL + "<br>" + sgcBonus + " GEL";
  cardSpeedCell.innerHTML = dealingSpeedBonusLVL + "<br>" + dealingSpeedBonus + " GEL";
  paCell.innerHTML = evaluationBonusLVL + "<br>" + evalautionBonus + " GEL";
  reactionCell.innerHTML = reactionBonusLVL + "<br>" + reactionBonus + " GEL";
  cooperationCell.innerHTML =cooperationBonusLVL + "<br>" + cooperationBonus + " GEL";
  hourBonusCell.innerHTML = hourBonus + " GEL";
  totalBonusCell.innerHTML = bonusSalary + " GEL";
  violationCell.innerHTML = violationPoints;
  // breachCell.innerHTML = breach;
  salaryCell.innerHTML = netSalary;

});

// Add a click event listener to the output line
bonusSalaryOutput.addEventListener("click", function() {
  // Toggle the display of the spoiler content
  if (approvedLVL=== "No Bonus") {

    bonusSalarySpoiler.style.display = "none";
  } else if (bonusSalarySpoiler.style.display === "none"){
    bonusSalarySpoiler.style.display = "block";
  }else if (bonusSalarySpoiler.style.display === "block"){
    bonusSalarySpoiler.style.display = "none";
  }
});

// Get the elements
const paidVacationsInput = document.getElementById('paid-vacations');
// const paidVacationInput = document.getElementById('paid-vacation');
const spoilerDiv = document.getElementById('pv-spoiler');
const paidType = document.getElementById('paid-type');

// Add an event listener to the input
paidVacationsInput.addEventListener('input', function() {
  const value1 = parseInt(paidVacationsInput.value);
  const hours1 = document.getElementById('range-input1').value;
  const hours2 = document.getElementById('range-input2').value;
  const hours3 = document.getElementById('range-input3').value;
  const shiftType = document.getElementById('shift-type').value;
  const bonus1 = document.getElementById('first-month-bonus').value;
  const bonus2 = document.getElementById('second-month-bonus').value;
  const bonus3 = document.getElementById('third-month-bonus').value;
  let salaryValue1;
  let salaryValue2;
  let salaryValue3;

  if(shiftType  === "night"){
    salaryValue1 = (hours1 * hourSalary)+((hours1*6/8)*nightHourSalary)-bonus1;
    salaryValue2 = (hours2 * hourSalary)+((hours2*6/8)*nightHourSalary)-bonus2;
    salaryValue3 = (hours3 * hourSalary)+((hours3*6/8)*nightHourSalary)-bonus3;
  }else {
    salaryValue1 = (hours1 * hourSalary)-bonus1;
    salaryValue2 = (hours2 * hourSalary)-bonus2;
    salaryValue3 = (hours3 * hourSalary)-bonus3;
  }

  document.getElementById('first-month-salary-value').value = salaryValue1.toFixed(0);
  document.getElementById('second-month-salary-value').value= salaryValue2.toFixed(0);
  document.getElementById('third-month-salary-value').value= salaryValue3.toFixed(0);


  if (value1 > 0) {
    // Show the spoiler div
    spoilerDiv.style.display = 'block';
  } else {
    // Hide the spoiler div
    spoilerDiv.style.display = 'none';
  }


});
const sickleaveEvent = document.getElementById("sick-leave");
sickleaveEvent.addEventListener('input', function(){
  const value = parseInt(sickleaveEvent.value);
  if (value > 0) {
    // Show the spoiler div
    spoilerDiv.style.display = 'block';
  } else {
    // Hide the spoiler div
    spoilerDiv.style.display = 'none';
  }
});

var limitValue;
const monthSelect = document.getElementById('monthSelect');

function setDefaultValues() {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  var value;

  if (monthSelect.value === 'current') {
    value = currentMonth;
  } else {
    value = monthSelect.value;
  }

  var limitValue = globalLimit[value].value;
  var limitValue1 = globalLimit[(value - 1 + 12) % 12].value;
  var limitValue2 = globalLimit[(value - 2 + 12) % 12].value;
  var limitValue3 = globalLimit[(value - 3 + 12) % 12].value;
  var monthValue = globalLimit[value].month;
  var monthValue1 = globalLimit[(value - 1 + 12) % 12].month;
  var monthValue2 = globalLimit[(value - 2 + 12) % 12].month;
  var monthValue3 = globalLimit[(value - 3 + 12) % 12].month;
  document.getElementById('first-month').textContent = monthValue1;
  document.getElementById('second-month').textContent = monthValue2;
  document.getElementById('third-month').textContent = monthValue3;
  document.getElementById('first-month-limit').value = limitValue1 || 'Default Value 1';
  document.getElementById('second-month-limit').value = limitValue2 || 'Default Value 2';
  document.getElementById('third-month-limit').value = limitValue3 || 'Default Value 3';
  return limitValue;
}

monthSelect.addEventListener('change', function() {
  setDefaultValues();
  const hours = document.getElementById('working-hours').value;
  const limit = document.getElementById('limit-check').value;
  const overtime = hours - limit;
  document.getElementById('overtime').value = overtime;
  if(overtime < 0){document.getElementById('overtime').value = 0}
});


setDefaultValues(); // Call the function initially to set default values



const hoursEvent = document.getElementById('working-hours');
hoursEvent.addEventListener('input', function() {
  const shiftTypeEvent = document.getElementById('shift-type');
  const shiftType = shiftTypeEvent.value;
  const hours = hoursEvent.value;
  const nightHours = (hours * 6 / 8).toFixed(0);
  const limit = document.getElementById('limit-check').value;
  const overtime = hours - limit;

  const additionalBonusNetInput = document.getElementById('additional-bonus-net');
  const additionalBonusInput = document.getElementById('additional-bonus');
  
  // Add an event listener for the 'change' event on the additionalBonusNetInput
    // Retrieve the value from additionalBonusNetInput
    const additionalBonusNetValue = additionalBonusNetInput.value;
  
 
  document.getElementById('overtime').value = overtime;
  if(overtime < 0){document.getElementById('overtime').value = 0}
  if (shiftType === "night") { // Compare the value property
    document.getElementById('night-hours').value = nightHours;
  }
  const b140 = document.getElementById("140Button")
//   if(hours >= 160){
//        // Perform the calculation
//        const additionalBonusValue = (100 * 100) / 78;
//        // Set the calculated value to additionalBonusInput
//        additionalBonusInput.value = additionalBonusValue.toFixed(2); // Round to 2 decimal places
   
//     document.getElementById("160Button").style.backgroundColor = "#08d16d";
//     document.getElementById("140Button").style.backgroundColor = "#08d16d";

//     parseInt(document.getElementById("additional-bonus-net").value = 100);
//   }else if(hours >= 140){
//        // Perform the calculation
//        document.getElementById("160Button").style.backgroundColor = ""; 
//        const additionalBonusValue = (50 * 100) / 78;
//        // Set the calculated value to additionalBonusInput
//        additionalBonusInput.value = additionalBonusValue.toFixed(2); // Round to 2 decimal places
   
//     document.getElementById("140Button").style.backgroundColor = "#08d16d";
//   parseInt(document.getElementById("additional-bonus-net").value = 50);
//   } else{ 
//     document.getElementById("160Button").style.backgroundColor = ""; 
//     document.getElementById("140Button").style.backgroundColor = "";
//     document.getElementById("additional-bonus-net").value = 0;
//    document.getElementById("additional-bonus").value = 0;
// }

  return nightHours;

});


// { 
//   // Perform the calculation
//   const additionalBonusValue = (50 * 100) / 78;
//   // Set the calculated value to additionalBonusInput
//   additionalBonusInput.value = additionalBonusValue.toFixed(2); // Round to 2 decimal places

// document.getElementById("140Button").style.backgroundColor = "";
// parseInt(document.getElementById("additional-bonus-net").value = 0);

// }




const bonusShiftEvent = document.getElementById('bonus-shift-hours');
bonusShiftEvent.addEventListener('input', function (){
const bonusShiftHours = bonusShiftEvent.value; 
const bonusShift =(bonusShiftHours - (bonusShiftHours % 8)) / 8;
document.getElementById('bonus-shift').value = bonusShift;
});


const firstMonthSalaryEvent = document.getElementById('first-month-salary');
firstMonthSalaryEvent.addEventListener('input', function() {
  const salary = parseFloat(document.getElementById('first-month-salary').value) || 0;
  const bonus = parseFloat(document.getElementById('first-month-bonus').value) || 0;
  const total = salary - bonus;
  document.getElementById('first-month-salary-value').value = total;

});

const firstMonthBonusEvent = document.getElementById('first-month-bonus');
firstMonthBonusEvent.addEventListener('input', function() {
  const salary = parseFloat(document.getElementById('first-month-salary').value) || 0;
  const bonus = parseFloat(document.getElementById('first-month-bonus').value) || 0;
  const total = salary - bonus;
  document.getElementById('first-month-salary-value').value = total;
});

const secondMonthSalaryEvent = document.getElementById('second-month-salary');
secondMonthSalaryEvent.addEventListener('input', function() {
  const salary = parseFloat(document.getElementById('second-month-salary').value) || 0;
  const bonus = parseFloat(document.getElementById('second-month-bonus').value) || 0;
  const total = salary - bonus;
  document.getElementById('second-month-salary-value').value = total;

});

const secondMonthBonusEvent = document.getElementById('second-month-bonus');
secondMonthBonusEvent.addEventListener('input', function() {
  const salary = parseFloat(document.getElementById('second-month-salary').value) || 0;
  const bonus = parseFloat(document.getElementById('second-month-bonus').value) || 0;
  const total = salary - bonus;
  document.getElementById('second-month-salary-value').value = total;
});

const thirdMonthSalaryEvent = document.getElementById('third-month-salary');
thirdMonthSalaryEvent.addEventListener('input', function() {
  const salary = parseFloat(document.getElementById('third-month-salary').value) || 0;
  const bonus = parseFloat(document.getElementById('third-month-bonus').value) || 0;
  const total = salary - bonus;
  document.getElementById('third-month-salary-value').value = total;

});

const thirdMonthBonusEvent = document.getElementById('third-month-bonus');
thirdMonthBonusEvent.addEventListener('input', function() {
  const salary = parseFloat(document.getElementById('third-month-salary').value) || 0;
  const bonus = parseFloat(document.getElementById('third-month-bonus').value) || 0;
  const total = salary - bonus;
  document.getElementById('third-month-salary-value').value = total;
});



function toggleBonus() {
  var cooperationSpoiler = document.getElementById("cooperation-spoiler");
  var sgcSpoiler = document.getElementById("sgc-spoiler");
  var gamesSpoiler = document.getElementById("game-count");
  var mistakesSpoiler = document.getElementById("counted-mistakes");
  var paSpoiler = document.getElementById("pa-spoiler");
  var reactionSpoiler = document.getElementById("reaction-spoiler");
  var dealingSpoiler = document.getElementById("dealing-spoiler");
  
  var bonusType = document.getElementById("bonus-type").value;
  if( bonusType === "new"){
    sgcSpoiler.style.display = "flex";
    gamesSpoiler.style.display = "block";
    mistakesSpoiler.style.display = "block";
    paSpoiler.style.display = "block";
    reactionSpoiler.style.display = "block";
    dealingSpoiler.style.display = "block";
    cooperationSpoiler.style.display = "block";
    document.getElementById("avg-perfomance").value = 0;
    document.getElementById("reaction").value = 0;
    document.getElementById("dealing-speed").value = 0;
    document.getElementById("cooperation").value = 0;  
    document.getElementById("game-count").value = 0;
    document.getElementById("counted-mistakes").value = 0;
    document.getElementById("SGC-text").textContent = "Successful game count :";


  }else if (bonusType === "GameShow"){
    sgcSpoiler.style.display = "flex";
    gamesSpoiler.style.display = "none";
    mistakesSpoiler.style.display = "block";
    paSpoiler.style.display = "block";
    reactionSpoiler.style.display = "none";
    dealingSpoiler.style.display = "none";
    cooperationSpoiler.style.display = "none";
    sgcSpan.textContent = " ";
    document.getElementById("SGC-text").textContent = "Counted Mistakes : "; 
    document.getElementById("reaction").value = 100;
    document.getElementById("dealing-speed").value = 100;
    document.getElementById("cooperation").value = 100;


  } else if ( bonusType === "Ezugi"){
    sgcSpoiler.style.display = "flex";
    gamesSpoiler.style.display = "none";
    mistakesSpoiler.style.display = "block";
    paSpoiler.style.display = "block";
    reactionSpoiler.style.display = "none";
    dealingSpoiler.style.display = "none";
    cooperationSpoiler.style.display = "none";
    sgcSpan.textContent = " ";
    document.getElementById("SGC-text").textContent = "Counted Mistakes :";
    document.getElementById("reaction").value = 100;
    document.getElementById("dealing-speed").value = 100;
    document.getElementById("cooperation").value = 100;
    

  }else if(bonusType === "SkyCity"){
sgcSpoiler.style.display = "none";
    gamesSpoiler.style.display = "none";
    mistakesSpoiler.style.display = "block";
    paSpoiler.style.display = "block";
    reactionSpoiler.style.display = "none";
    dealingSpoiler.style.display = "none";
    cooperationSpoiler.style.display = "block";
    sgcSpan.textContent = " ";
    document.getElementById("reaction").value = 100;
    document.getElementById("dealing-speed").value = 100;
    document.getElementById("game-count").value=2000;
    document.getElementById("counted-mistakes").value=0;

  }else if(bonusType === "Mentor"){
      sgcSpoiler.style.display = "flex";
    gamesSpoiler.style.display = "flex";
    mistakesSpoiler.style.display = "block";
    paSpoiler.style.display = "none";
    reactionSpoiler.style.display = "none";
    dealingSpoiler.style.display = "block";
    cooperationSpoiler.style.display = "block";
    sgcSpan.textContent = " ";
    document.getElementById("reaction").value = 100;
    document.getElementById("avg-perfomance").value = 100;

  }
}

// Add event listener
var bonusTypeSelect = document.getElementById("bonus-type");
bonusTypeSelect.addEventListener("change", toggleBonus);
var breachEvent = document.getElementById("breach");
var violationEvent = document.getElementById("violation-points");
var noBonusSpoiler = document.getElementById("bonus-criterias");
var bonusHidden = document.getElementById("bonus-hidden");
var noBonusReason = document.getElementById("noBonus-reason");
function bonusSpoiler (){
    const breach = breachEvent.value;
    const violations = document.getElementById("violation-points").value;
    if(breach === "true" || violations >= bonusCriteria.violations[0]){
    noBonusSpoiler.style.display = "none";
    bonusHidden.style.display = "block";
    }else if (breach === "false" || violations < bonusCriteria.violations[0]){
      noBonusSpoiler.style.display = "block";
      bonusHidden.style.display = "none";
    }

    if(breach === "true"){
      noBonusReason.textContent = "Breach";
      noBonusReason.style.color = "#E6A8E8";
  }else if (violations >= bonusCriteria.violations[0]){
    noBonusReason.textContent = "Violation Points"
    noBonusReason.style.color = "red";
  }
}


breachEvent.addEventListener('change', bonusSpoiler );
violationEvent.addEventListener('input', bonusSpoiler);


// Retrieve the input elements
const additionalBonusNetInput = document.getElementById('additional-bonus-net');
const additionalBonusInput = document.getElementById('additional-bonus');

// Add an event listener for the 'change' event on the additionalBonusNetInput
additionalBonusNetInput.addEventListener('input', () => {
  // Retrieve the value from additionalBonusNetInput
  const additionalBonusNetValue = additionalBonusNetInput.value;

  // Perform the calculation
  const additionalBonusValue = (additionalBonusNetValue * 100) / 78;

  // Set the calculated value to additionalBonusInput
  additionalBonusInput.value = additionalBonusValue.toFixed(2); // Round to 2 decimal places
});

 // Function to open the information window
 function openInfoWindow(iconId, content) {
  var infoWindow = document.getElementById(iconId + "-window");
  infoWindow.innerHTML = content + '<br><button onclick="closeInfoWindow(\'' + iconId + '\')">Close</button>';
  infoWindow.style.display = "block";
}

// Function to close the information window
function closeInfoWindow(iconId) {
  var infoWindow = document.getElementById(iconId + "-window");
  infoWindow.style.display = "none";
}

var monthInfoIcon = document.getElementById("month-info");
monthInfoIcon.addEventListener("click", function () {
  openInfoWindow("month", "This is some information about the month.");
});

var stageInfoIcon = document.getElementById("stage-info");
stageInfoIcon.addEventListener("click", function () {
  openInfoWindow("stage", "This is some information about the stage.");
});
// hours-info
var hoursInfoIcon = document.getElementById("hours-info");
hoursInfoIcon.addEventListener("click", function () {
  openInfoWindow("hours", "This is some information about hours.");
});

// nightHours-info
var nightHoursInfoIcon = document.getElementById("nightHours-info");
nightHoursInfoIcon.addEventListener("click", function () {
  openInfoWindow("nightHours", "This is some information about night hours.");
});

// holidayHours-info
var holidayHoursInfoIcon = document.getElementById("holidayHours-info");
holidayHoursInfoIcon.addEventListener("click", function () {
  openInfoWindow("holidayHours", "This is some information about holiday hours.");
});

// sickLeave-info
var sickLeaveInfoIcon = document.getElementById("sickLeave-info");
sickLeaveInfoIcon.addEventListener("click", function () {
  openInfoWindow("sickLeave", "This is some information about sick leave.");
});

// bonusShift-info
var bonusShiftInfoIcon = document.getElementById("bonusShift-info");
bonusShiftInfoIcon.addEventListener("click", function () {
  openInfoWindow("bonusShift", "This is some information about bonus shift.");
});

// paidHours-info
var paidHoursInfoIcon = document.getElementById("paidHours-info");
paidHoursInfoIcon.addEventListener("click", function () {
  openInfoWindow("paidHours", "This is some information about paid hours.");
});

// via-info
var vioInfoIcon = document.getElementById("vio-info");
vioInfoIcon.addEventListener("click", function () {
  openInfoWindow("vio", "This is some information about VIA.");
});
// bonusType-info
var bonusTypeInfoIcon = document.getElementById("bonusType-info");
bonusTypeInfoIcon.addEventListener("click", function () {
  openInfoWindow("bonusType", "This is some information about bonus type.");
});
