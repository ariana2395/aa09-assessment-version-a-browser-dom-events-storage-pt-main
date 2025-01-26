// Put your code in here to make each of the tests described in the HTML file
// pass.

document.getElementById('bubble-trouble').addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Bubble trouble button clicked, but no bubbling!');
});
document.getElementById('increment').addEventListener('click', () => {
    counterValue++;
    document.getElementById('counter-value').innerHTML = counterValue;
});

document.getElementById('decrement').addEventListener('click', () => {
    counterValue--;
    document.getElementById('counter-value').innerHTML = counterValue;
});

document.getElementById('zero-out').addEventListener('click', () => {
    counterValue = 0;
    document.getElementById('counter-value').innerHTML = counterValue;
});
const inputBox = document.getElementById('my-name-is');

document.addEventListener('DOMContentLoaded', () => {
    const storedValue = localStorage.getItem('inputValue');
    if (storedValue) {
        inputBox.value = storedValue;
    }
});

inputBox.addEventListener('keyup', () => {
    localStorage.setItem('inputValue', inputBox.value);
});
document.getElementById('navigates-elsewhere').addEventListener('click', (event) => {
    event.preventDefault(); 
    console.log('Navigation prevented!');
});
document.getElementById('go-fetch').addEventListener('click', () => {
    const list = document.getElementById('sub-breed-ol');
    list.innerHTML = '';

    fetch('https://dog.ceo/api/breed/terrier/list')
        .then(response => response.json())
        .then(data => {
            const subBreeds = data.message;

            subBreeds.forEach(subBreed => {
                const listItem = document.createElement('li');
                listItem.textContent = subBreed;

                listItem.addEventListener('mouseover', () => {
                    listItem.style.color = 'red';
                });

                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching terrier sub-breeds:', error));
});
