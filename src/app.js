export function suma(a, b) {
  return a + b;
}

// mejora de UI
export function agregarItem(texto) {
  const lista = document.getElementById('lista');
  if (!lista) return null;
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
  return li;
}


console.log('App lista');
