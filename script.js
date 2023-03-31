let checkBtn = document.getElementById('switch-btn');
let text = document.getElementById('switch-text');

checkBtn.addEventListener('click', function() {

  if (text.innerText === 'Anually') {

    checkBtn.innerText = 'Check Anually';
    text.innerText = 'Monthly';

  } else {

    checkBtn.innerText = 'Check Monthly';
    text.innerText = 'Anually';

  }

})