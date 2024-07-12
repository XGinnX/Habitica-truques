// Função para alimentar uma lista de pets simultaneamente
function AlimentePet(pet_id) {
  return new Promise((resolve) => {
    var alimento = document.getElementById("e4b78283-12c3-416a-9dfb-2b4047c31325");
    var pet = document.getElementById(pet_id);

    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        alimento.click();
        pet.click();
      }, i * 3000); // 3000 ms = 3 seconds
    }

    console.log("Realizado para pet ID: " + pet_id);

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
          console.warn(`Botão com classe "${buttonClass}" não encontrado dentro do modal com ID "${modalId}".`);
        }
      } else {
        console.warn(`Modal com ID "${modalId}" não encontrado.`);
      }
      resolve();
    }, 27000); // Executa após 27 segundos
  });
}

async function processIdList(idlist) {
  for (const pet_id of idlist) {
    await AlimentePet(pet_id);
  }
  console.log("Todos os pets foram alimentados.");
}

var idlist = [
  "7b0ddcce-7f45-41ac-b22a-c15f5a78114c",
    "8a816e79-8332-42c0-969d-963b9159a4f8",
    "1a2e5368-e265-4f01-8c9f-9f6fc4a30af4",
    "f99b84e8-a88b-44e8-835d-9e911494ca3f",
    "1c43204f-0908-46b5-a957-252dacf752ef"
];

processIdList(idlist);
