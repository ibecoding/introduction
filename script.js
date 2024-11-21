console.log('Welcome to My First Website!');

document.querySelector('h1').textContent = 'Get to know me!';
document.querySelector('h1').addEventListener('click', () => {
    alert('You clicked on the header!');
});
// if i wanna add a background to the header get to know  me
//document.querySelector('h1').style.backgroundColor = '';



document.getElementById('changeColor').addEventListener('click', () => {
    document.body.style.backgroundColor = '#F7AFAD';
});
