function AlimentandoPetsIndividualmente() {
  var alimento = document.getElementById(Id_alimento);
  var pet = document.getElementById(Id_Pet);

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      alimento.click();
      pet.click();
    }, i * 2000); // 2000 ms = 2 seconds
  }
}

// Chama a função para executar os cliques
clickElements();
