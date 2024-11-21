console.log('Welcome to My First Website!');

document.querySelector('h1').textContent = 'Hello, Visitor!';
document.querySelector('h1').addEventListener('click', () => {
    alert('You clicked on the header!');
});
document.querySelector('h1').style.backgroundColor = 'purple';



document.getElementById('changeColor').addEventListener('click', () => {
    document.body.style.backgroundColor = '#F7AFAD';
});
