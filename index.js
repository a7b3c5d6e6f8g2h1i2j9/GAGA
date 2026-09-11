

// ACCOUNT TOTAL AMOUNT DISPLAY

let accountAmount = '2,600/-';

const accountAmountDisplay = document.getElementById('accountAmountDisplay');

accountAmountDisplay.textContent = `Account : ₹${accountAmount}`;


//HIGHLIGHT DATE DISPLAY
const highlightDateDisplay = document.getElementById('highlightDateDisplay');

highlightDateDisplay.textContent = `Sep : 5/9/26 - Saturday Fund`;
highlightDateDisplay.style.color = 'var(--highlighttextcolor)';



const idOne_Adithyan_WeekFund = 100; 
const idTwo_Jishnu_WeekFund = 100; 
const idThree_Nishanth_WeekFund = 0; 
const idFour_Anirudhan_WeekFund = 100; 
const idFive_Vasu_WeekFund = 100; 
const idSix_Midhun_WeekFund = 100; 
const idSeven_Nkhil_WeekFund = 0; 
const idEight_Jamshika_WeekFund = 0; 
const idNine_Amika_WeekFund = 0; 
const idTen_SasiEttan_WeekFund = 0; 
const idEleven_Ashay_WeekFund = 0; 



// ID ONE 1 ADITHYAN
const idOneName = document.getElementById('idOneName');
const idOneFund = document.getElementById('idOneFund'); 

idOneName.textContent = 'Adithyan';

if(idOne_Adithyan_WeekFund) {
  idOneFund.textContent = `${idOne_Adithyan_WeekFund}/-`;
  idOneFund.style.fontWeight = 'bold';
} else {
  idOneFund.textContent = 'Not Paid';
  idOneFund.style.color = 'red';
  idOneFund.style.fontWeight = 'bold';
}


// ID TWO 2 JISHNU
const idTwoName = document.getElementById('idTwoName');
const idTwoFund = document.getElementById('idTwoFund');

idTwoName.textContent = 'Jishnu';

if(idTwo_Jishnu_WeekFund) {
  idTwoFund.textContent = `${idTwo_Jishnu_WeekFund}/-`;
  idTwoFund.style.fontWeight = 'bold';
} else {
  idTwoFund.textContent = 'Not Paid';
  idTwoFund.style.color = 'red';
  idTwoFund.style.fontWeight = 'bold';
}


// ID THREE 3 NISHANTH
const idThreeName = document.getElementById('idThreeName');
const idThreeFund = document.getElementById('idThreeFund');

idThreeName.textContent = 'Nishanth';

if(idThree_Nishanth_WeekFund) {
  idThreeFund.textContent = `${idThree_Nishanth_WeekFund}/-`;
  idThreeFund.style.fontWeight = 'bold';
} else {
  idThreeFund.textContent = 'Not Paid';
  idThreeFund.style.color = 'red';
  idThreeFund.style.fontWeight = 'bold';
}


// ID FOUR 4 ANIRUDHAN
const idFourName = document.getElementById('idFourName');
const idFourFund = document.getElementById('idFourFund');

idFourName.textContent = 'Anirudhan';

if(idFour_Anirudhan_WeekFund) {
  idFourFund.textContent = `${idFour_Anirudhan_WeekFund}/-`;
  idFourFund.style.fontWeight = 'bold';
} else {
  idFourFund.textContent = 'Not Paid';
  idFourFund.style.color = 'red';
  idFourFund.style.fontWeight = 'bold';
}


// ID FIVE 5 VASU
const idFiveName = document.getElementById('idFiveName');
const idFiveFund = document.getElementById('idFiveFund');

idFiveName.textContent = 'vasu';

if(idFive_Vasu_WeekFund) {
  idFiveFund.textContent = `${idFive_Vasu_WeekFund}/-`;
  idFiveFund.style.fontWeight = 'bold';
} else {
  idFiveFund.textContent = 'Not Paid';
  idFiveFund.style.color = 'red';
  idFiveFund.style.fontWeight = 'bold';
}


// ID SIX 6 MIDHUN
const idSixName = document.getElementById('idSixName');
const idSixFund = document.getElementById('idSixFund');

idSixName.textContent = 'Midhun';

if(idSix_Midhun_WeekFund) {
  idSixFund.textContent = `${idSix_Midhun_WeekFund}/-`;
  idSixFund.style.fontWeight = 'bold';
} else {
  idSixFund.textContent = 'Not Paid';
  idSixFund.style.color = 'red';
  idSixFund.style.fontWeight = 'bold';
}


// ID SEVEN 7 NIKHIL
const idSevenName = document.getElementById('idSevenName');
const idSevenFund = document.getElementById('idSevenFund');

idSevenName.textContent = 'Nikhil';

if(idSeven_Nkhil_WeekFund) {
  idSevenFund.textContent = `${idSeven_Nkhil_WeekFund}/-`;
  idSevenFund.style.fontWeight = 'bold';
} else {
  idSevenFund.textContent = 'Not Paid';
  idSevenFund.style.color = 'red';
  idSevenFund.style.fontWeight = 'bold';
}


// ID EIGHT 8 JAMSHIKA
const idEightName = document.getElementById('idEightName');
const idEightFund = document.getElementById('idEightFund');

idEightName.textContent = 'Jamshika';

if(idEight_Jamshika_WeekFund) {
  idEightFund.textContent = `${idEight_Jamshika_WeekFund}/-`;
  idEightFund.style.fontWeight = 'bold';
} else {
  idEightFund.textContent = 'Not Paid';
  idEightFund.style.color = 'red';
  idEightFund.style.fontWeight = 'bold';
}


// ID NINE 9 AMIKA
const idNineName = document.getElementById('idNineName');
const idNineFund = document.getElementById('idNineFund');

idNineName.textContent = 'Amika';

if(idNine_Amika_WeekFund) {
  idNineFund.textContent = `${idNine_Amika_WeekFund}/-`;
  idNineFund.style.fontWeight = 'bold';
} else {
  idNineFund.textContent = 'Not Paid';
  idNineFund.style.color = 'red';
  idNineFund.style.fontWeight = 'bold';
}


// ID TEN 10 SASI ETTAN
const idTenName = document.getElementById('idTenName');
const idTenFund = document.getElementById('idTenFund');

idTenName.textContent = 'Sasi Ettan';

if(idTen_SasiEttan_WeekFund) {
  idTenFund.textContent = `${idTen_SasiEttan_WeekFund}/-`;
  idTenFund.style.fontWeight = 'bold';
} else {
  idTenFund.textContent = 'Not Paid';
  idTenFund.style.color = 'red';
  idTenFund.style.fontWeight = 'bold';
}


// ID ELEVEN 11 AKSHAY
const idElevenName = document.getElementById('idElevenName');
const idElevenFund = document.getElementById('idElevenFund');

idElevenName.textContent = 'Akshay';

if(idEleven_Ashay_WeekFund) {
  idElevenFund.textContent = `${idEleven_Ashay_WeekFund}/-`;
  idElevenFund.style.fontWeight = 'bold';
} else {
  idElevenFund.textContent = 'Not Paid';
  idElevenFund.style.color = 'red';
  idElevenFund.style.fontWeight = 'bold';
}


