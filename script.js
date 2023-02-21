const addButton = document.querySelector('button.btn');

const taskList = document.querySelector('ul');

addButton.addEventListener('click', function() {
  const newTask = document.querySelector('input#todo').value;

  const newTaskElement = document.createElement('li');
  const newTaskText = document.createTextNode(newTask);
  newTaskElement.appendChild(newTaskText);

  taskList.appendChild(newTaskElement);

  document.querySelector('input#todo').value = '';
});

