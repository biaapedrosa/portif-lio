function alternarTema() {
    document.body.classList.toggle("escuro");
  if (body.style.backgroundColor === 'white') {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  } else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  }
}