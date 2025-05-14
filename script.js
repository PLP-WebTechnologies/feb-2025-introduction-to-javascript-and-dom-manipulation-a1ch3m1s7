// Change text content
document.getElementById('change-text-btn').addEventListener('click', () => {
  document.getElementById('main-heading').textContent = 'Text Changed!';
});

// Modify CSS styles
document.getElementById('change-style-btn').addEventListener('click', () => {
  document.getElementById('main-heading').style.color = 'red';
  document.getElementById('main-heading').style.fontSize = '2.5rem';
});

// Add an element
document.getElementById('add-element-btn').addEventListener('click', () => {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'New Element Added!';
  newDiv.className = 'added-element';
  document.getElementById('container').appendChild(newDiv);
});

// Remove the last added element
document.getElementById('remove-element-btn').addEventListener('click', () => {
  const container = document.getElementById('container');
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
});
