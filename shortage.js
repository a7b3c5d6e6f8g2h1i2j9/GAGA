

//SHORTAGE PAGE

const totalAmount =  1900; //TYPE HERE THE TOTAL FUND

const totalAmountDisplay = document.getElementById('totalAmountDisplay');
 

totalAmountDisplay.textContent = ` Total Amount : ${totalAmount}/-`;


//HIGHLIGHT TEXT DISPLAY
const highlightTextDisplay = document.getElementById('highlightTextDisplay');

highlightTextDisplay.textContent = `This is the amount you need to pay`;
highlightTextDisplay.style.color = 'var(--highlighttextcolor)';


//TOTAL FUND THAT THE USERS PAY
const idOne_Adithyan_TotalFund = 300;
const idTwo_Jishnu_TotalFund = 100;
const idThree_Nishanth_TotalFund = 200;
const idFour_Anirudhan_TotalFund = 200;
const idFive_Vasu_TotalFund = 100;
const idSix_Midhun_TotalFund = 100;
const idSeven_Nikhil_TotalFund = 0;
const idEight_Jamshika_TotalFund = 1200;
const idNine_Amika_TotalFund = 0;
const idTen_SasiEttan_TotalFund = 100;
const idEleven_Ashay_TotalFund = 0;




// ID ONE 1 ADITHYAN
const idOneName = document.getElementById('idOneName');
const idOneShort = document.getElementById('idOneShort'); 

idOneName.textContent = 'Adithyan';

const idOneShortCalc = totalAmount - idOne_Adithyan_TotalFund;//SHORTAGE CHECK CALCULATION.

if (idOne_Adithyan_TotalFund === totalAmount) {

  idOneShort.textContent = `${idOne_Adithyan_TotalFund}/- Full Paid`;
  idOneShort.style.color = 'darkcyan';
  idOneShort.style.fontWeight = 'bold';
} else {
  idOneShort.textContent = `${idOneShortCalc}/-`;
  idOneShort.style.color = 'red';
  idOneShort.style.fontWeight = 'bold';
}



// ID TWO 2 JISHNU
const idTwoName = document.getElementById('idTwoName');
const idTwoShort = document.getElementById('idTwoShort'); 

idTwoName.textContent = 'Jishnu';

const idTwoShortCalc = totalAmount - idTwo_Jishnu_TotalFund;//SHORTAGE CHECK CALCULATION.

if (idTwo_Jishnu_TotalFund === totalAmount) {

  idTwoShort.textContent = `${idTwo_Jishnu_TotalFund}/- Full Paid`;
  idTwoShort.style.color = 'darkcyan';
  idTwoShort.style.fontWeight = 'bold';

} else {
  idTwoShort.textContent = `${idTwoShortCalc}/-`;
  idTwoShort.style.color = 'red';
  idTwoShort.style.fontWeight = 'bold';
}


// ID THREE 3 NISHANTH
const idThreeName = document.getElementById('idThreeName');
const idThreeShort = document.getElementById('idThreeShort'); 

idThreeName.textContent = 'Nishanth';

const idThreeShortCalc = totalAmount - idThree_Nishanth_TotalFund;//SHORTAGE CHECK CALCULATION.

if (idThree_Nishanth_TotalFund === totalAmount) {

  idThreeShort.textContent = `${idThree_Nishanth_TotalFund}/- Full Paid`;
  idThreeShort.style.color = 'darkcyan';
  idThreeShort.style.fontWeight = 'bold';

} else {
  idThreeShort.textContent = `${idThreeShortCalc}/-`;
  idThreeShort.style.color = 'red';
  idThreeShort.style.fontWeight = 'bold';
}


// ID FOUR 4 ANIRUDHAN
const idFourName = document.getElementById('idFourName');
const idFourShort = document.getElementById('idFourShort'); 

idFourName.textContent = 'Anirudhan';

const idFourShortCalc = totalAmount - idFour_Anirudhan_TotalFund;//SHORTAGE CHECK CALCULATION.

if (idFour_Anirudhan_TotalFund === totalAmount) {

  idFourShort.textContent = `${idFour_Anirudhan_TotalFund}/- Full Paid`;
  idFourShort.style.color = 'darkcyan';
  idFourShort.style.fontWeight = 'bold';

} else {
  idFourShort.textContent = `${idFourShortCalc}/-`;
  idFourShort.style.color = 'red';
  idFourShort.style.fontWeight = 'bold';
}


// ID FIVE 5 VASU
const idFiveName = document.getElementById('idFiveName');
const idFiveShort = document.getElementById('idFiveShort'); 

idFiveName.textContent = 'Vasu';

const idFiveShortCalc = totalAmount - idFive_Vasu_TotalFund;//SHORTAGE CHECK CALCULATION.

if (idFive_Vasu_TotalFund === totalAmount) {

  idFiveShort.textContent = `${idFive_Vasu_TotalFund}/- Full Paid`;
  idFiveShort.style.color = 'darkcyan';
  idFiveShort.style.fontWeight = 'bold';

} else {
  idFiveShort.textContent = `${idFiveShortCalc}/-`;
  idFiveShort.style.color = 'red';
  idFiveShort.style.fontWeight = 'bold';
}


// ID SIX 6 MIDHUN
const idSixName = document.getElementById('idSixName');
const idSixShort = document.getElementById('idSixShort'); 

idSixName.textContent = 'Midhun';

const idSixShortCalc = totalAmount - idSix_Midhun_TotalFund;//SHORTAGE CHECK CALCULATION.

if (idSix_Midhun_TotalFund === totalAmount) {

  idSixShort.textContent = `${idSix_Midhun_TotalFund}/- Full Paid`;
  idSixShort.style.color = 'darkcyan';
  idSixShort.style.fontWeight = 'bold';

} else {
  idSixShort.textContent = `${idSixShortCalc}/-`;
  idSixShort.style.color = 'red';
  idSixShort.style.fontWeight = 'bold';
}



// ID SEVEN 7 NIKHIL
const idSevenName = document.getElementById('idSevenName');
const idSevenShort = document.getElementById('idSevenShort'); 

idSevenName.textContent = 'Nikhil';

const idSevenShortCalc = totalAmount - idSeven_Nikhil_TotalFund;//SHORTAGE CHECK CALCULATION.

if (idSeven_Nikhil_TotalFund === totalAmount) {

  idSevenShort.textContent = `${idSeven_Nikhil_TotalFund}/- Full Paid`;
  idSevenShort.style.color = 'darkcyan';
  idSevenShort.style.fontWeight = 'bold';

} else {
  idSevenShort.textContent = `${idSevenShortCalc}/-`;
  idSevenShort.style.color = 'red';
  idSevenShort.style.fontWeight = 'bold';
}



// ID EIGHT 8 JAMSHIKA
const idEightName = document.getElementById('idEightName');
const idEightShort = document.getElementById('idEightShort'); 

idEightName.textContent = 'Jamshika';

const idEightShortCalc = totalAmount - idEight_Jamshika_TotalFund;//SHORTAGE CHECK CALCULATION.

if (idEight_Jamshika_TotalFund === totalAmount) {

  idEightShort.textContent = `${idEight_Jamshika_TotalFund}/- Full Paid`;
  idEightShort.style.color = 'darkcyan';
  idEightShort.style.fontWeight = 'bold';

} else {
  idEightShort.textContent = `${idEightShortCalc}/-`;
  idEightShort.style.color = 'red';
  idEightShort.style.fontWeight = 'bold';
}



// ID NINE 9 AMIKA
const idNineName = document.getElementById('idNineName');
const idNineShort = document.getElementById('idNineShort'); 

idNineName.textContent = 'Amika';

const idNineShortCalc = totalAmount - idNine_Amika_TotalFund;//SHORTAGE CHECK CALCULATION.

if (idNine_Amika_TotalFund === totalAmount) {

  idNineShort.textContent = `${idNine_Amika_TotalFund}/- Full Paid`;
  idNineShort.style.color = 'darkcyan';
  idNineShort.style.fontWeight = 'bold';

} else {
  idNineShort.textContent = `${idNineShortCalc}/-`;
  idNineShort.style.color = 'red';
  idNineShort.style.fontWeight = 'bold';
}



// ID TEN 10 SASI ETTAN
const idTenName = document.getElementById('idTenName');
const idTenShort = document.getElementById('idTenShort'); 

idTenName.textContent = 'Sasi Ettan';

const idTenShortCalc = totalAmount - idTen_SasiEttan_TotalFund;//SHORTAGE CHECK CALCULATION.

if (idTen_SasiEttan_TotalFund === totalAmount) {

  idTenShort.textContent = `${idTen_SasiEttan_TotalFund}/- Full Paid`;
  idTenShort.style.color = 'darkcyan';
  idTenShort.style.fontWeight = 'bold';

} else {
  idTenShort.textContent = `${idTenShortCalc}/-`;
  idTenShort.style.color = 'red';
  idTenShort.style.fontWeight = 'bold';
}



// ID ELEVEN 11 AKSHAY
const idElevenName = document.getElementById('idElevenName');
const idElevenShort = document.getElementById('idElevenShort'); 

idElevenName.textContent = 'Akshay';

const idElevenShortCalc = totalAmount - idEleven_Ashay_TotalFund;//SHORTAGE CHECK CALCULATION.

if (idEleven_Ashay_TotalFund === totalAmount) {

  idElevenShort.textContent = `${idEleven_Ashay_TotalFund}/- Full Paid`;
  idElevenShort.style.color = 'darkcyan';
  idElevenShort.style.fontWeight = 'bold';

} else {
  idElevenShort.textContent = `${idElevenShortCalc}/-`;
  idElevenShort.style.color = 'red';
  idElevenShort.style.fontWeight = 'bold';
}

