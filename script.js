// Form input to localStorage

// function getInTouch(e)

form.addEventListener('submit', () => {
  const formInput = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    textmessage: document.getElementById('message').value,
  };
  localStorage.setItem('formInput', JSON.stringify(formInput));
});

function inputDisplay() {
  if (localStorage.getItem('formInput')) {
    const {
      name,
      email,
      textmessage,
    } = JSON.parse(localStorage.getItem('formInput'));
    const outputName = document.getElementById('name');
    const outputEmail = document.getElementById('email');
    const outPutTextmessage = document.getElementById('message');
    outputName.value = name;
    outputEmail.value = email;
    outPutTextmessage.value = textmessage;
  }
}

inputDisplay();
