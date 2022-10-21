/** @format */
// var age = 25;
// if (isNaN(age)) {
//   age = 0;
//   alert('Enter a valid number...');
// } else if (Number(age) <= 12) {
//   alert('You are a Kids');
// } else if (Number(age) <= 19) {
//   alert('You are a Teenager');
// } else if (Number(age) <= 50) {
//   alert('You are a Young Man');
// } else {
//   alert('You are a old man..');
// }
function ageCheck() {
  var age = document.getElementById('numb').value;
  var textout;
  if (isNaN(age)) {
    textout = document.getElementById('numb').value + ' is ' + 'Not a number';
    document.getElementById('resultage').classList.add('notnum');
    document
      .getElementById('resultage')
      .classList.remove('oldman', 'youngman', 'teenage', 'kids');
  } else if (document.getElementById('numb').value == '') {
    textout = 'Nothing Etered';
    document
      .getElementById('resultage')
      .classList.remove('oldman', 'youngman', 'teenage', 'kids', 'notnum');
  } else if (document.getElementById('numb').value == 0) {
    textout = 'You Etered zero';
    document
      .getElementById('resultage')
      .classList.remove('oldman', 'youngman', 'teenage', 'kids', 'notnum');
  } else if (Number(age) <= 13) {
    textout = 'You are a Kids';
    document.getElementById('resultage').classList.add('kids');
  } else if (Number(age) <= 19) {
    textout = 'You are a Teenager';
    document.getElementById('resultage').classList.add('teenage');
    document
      .getElementById('resultage')
      .classList.remove('oldman', 'youngman', 'notnum', 'kids');
  } else if (Number(age) <= 60) {
    textout = 'You are a Young Man';
    document.getElementById('resultage').classList.add('youngman');
    document
      .getElementById('resultage')
      .classList.remove('oldman', 'teenage', 'notnum', 'kids');
  } else {
    textout = 'You are a old man..';
    document.getElementById('resultage').classList.add('oldman');
    document
      .getElementById('resultage')
      .classList.remove('youngman', 'teenage', 'notnum', 'kids');
  }
  document.getElementById('resultage').innerHTML = textout;
}
