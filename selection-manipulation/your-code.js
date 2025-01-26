// 1
// Select the div with the id of "problem-one" and change the border color to
// red and the border width to 3 pixels


document.getElementById('problem-one').style.border = '3px solid red';


// 2
// Select the text in the first div that has the class of "even" and change the
// font color to green and the font style to bold
document.querySelector('.even').style.color = 'green';
document.querySelector('.even').style.fontWeight = 'bold';

// 3
// Select all of the elements with the class of "odd" and add a box shadow. You
// may choose your own box-shadow values.

document.querySelectorAll('.odd').forEach(element => {
    element.style.boxShadow = '5px 5px 10px gray';
});

// 4
// Select the fourth box with a selector of your choice. Change the text inside
// the box to the string "Four"

document.getElementById('problem-four').textContent = 'Four';


// 5
// Select the fifth box. Remove the text "5", and replace it with a child button that says "5!"

document.getElementById('problem-five').textContent = '';
const button = document.createElement('button');
button.textContent = '5!';
document.getElementById('problem-five').appendChild(button);


// 6 
// Select the span element. Remove it from the DOM.

document.querySelector('span').remove();


// 7
// Select the element with the number 7, and change the number to 6 (because you
// just removed number 6!)

const boxWithSeven = document.querySelector('.seven'); // Select the box with class "seven"
boxWithSeven.textContent = '6';


// 8
// Select the last box, and add the class of "last". This will apply new styling
// to the box if successful. Change the text inside to box to "END!!!"

const lastBox = document.getElementById('problem-eight'); 
lastBox.classList.add('last');
lastBox.textContent = 'END!!!'; 