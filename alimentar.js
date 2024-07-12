//Função para alimentar todos os pets de uma vez no habitica
function AlimentePet(pet_id) {
  var alimento = document.getElementById("b314ba28-8054-4a13-96ae-ae95bda3fce3");
  var pet = document.getElementById(pet_id); // Corrigido aqui

  for (let i = 0; i < 89; i++) {
    setTimeout(() => {
      alimento.click();
      pet.click();
    }, i * 3000); // 3000 ms = 3 seconds
  }
  console.log("realizado");
 setTimeout(() => {
  // ID da div modal
  var modalId = 'mount-raised-modal___BV_modal_body_';

  // Classe do botão
  var buttonClass = 'btn btn-primary onward';

  var modal = document.getElementById(modalId);
  if (modal) {
    var button = modal.querySelector(`.${buttonClass.split(' ').join('.')}`);
    if (button) {
      button.click();
    } else {
      console.warn(`Button with class "${buttonClass}" not found inside modal with ID "${modalId}".`);
    }
  } else {
    console.warn(`Modal with ID "${modalId}" not found.`);
  }
 }, 3000)
}

var idlist = ["db7a936b-559d-4a52-b43b-8fd02310ae04","ccffa8f0-3377-4a70-afcf-60e2c113edfb","fe5e5746-3819-4730-b7ce-2f810c4df524"];
setTimeout(function() {
  idlist.forEach(AlimentePet);
}, 27000);
