const form = document.querySelector("form");
const storyContainer = document.getElementsByClassName("story-container")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  let story = `Había una vez en un pequeño pueblo, una persona llamada <b>${data.name} ${data.lastName}</b>. Su hobby era <b>${data.hobby}</b>. Tenía un cabello largo y <b>${data.hairColor}</b> y unos ojos de un <b>${data.eyesColor}</b> profundo. A sus <b>${data.age}</b> años, <b>${data.name}</b> era conocida no solo por su carácter aventurero, sino también por su apodo, <b>"${data.nickName}"</b>, que le habían puesto sus amigos por su amor a observar las estrellas cada noche desde el tejado de su casa.
    Un día, mientras <b>${data.name}</b> paseaba por el bosque, encontró un sendero que nunca antes había visto. La curiosidad le llevó a seguir el camino hasta llegar a un claro donde se encontraba un enorme árbol viejo, cuyas ramas se extendían como los brazos de un gigante protector. En la base del árbol, vio una pequeña puerta de madera, apenas visible entre las raíces.
    Con los ojos brillando de emoción, <b>${data.name}</b> decidió abrir la puerta y se encontró con una escalera de caracol que descendía hacia la oscuridad. Sin pensarlo dos veces, empezó a bajar, llevando consigo una linterna que siempre llevaba para sus exploraciones nocturnas. Al llegar al final de la escalera, se encontró en una sala subterránea iluminada por piedras que brillaban con una luz suave y mágica.
    En el centro de la sala, había un cofre antiguo. Cuando lo abrió, encontró un diario viejo y polvoriento. Al leerlo, descubrió que pertenecía a un antiguo explorador que había encontrado un tesoro escondido en algún lugar del bosque. La emoción de la aventura creció en su corazón y decidió que seguiría las pistas del diario para encontrar el tesoro perdido.
    Durante semanas, <b>${data.name}</b> siguió las pistas que el diario proporcionaba, enfrentando desafíos y resolviendo enigmas que parecían imposibles. A medida que avanzaba, su determinación se fortalecía y aprendía a confiar más en sí misma.
    Finalmente, después de mucho esfuerzo, llegó a una cueva oculta detrás de una cascada. Al entrar, encontró el tesoro: no eran monedas de oro ni joyas, sino libros antiguos llenos de conocimiento y sabiduría. <b>${data.name}</b>, con los ojos brillando de emoción, se dio cuenta de que ese era el verdadero tesoro.
    Decidió compartir su descubrimiento con el pueblo, abriendo una pequeña biblioteca en el claro del bosque, donde todos podían venir a leer y aprender. Así, el pueblo floreció aún más, y <b>${data.name}</b> se convirtió en una persona admirada localmente.
    Y así, la persona de cabello <b>${data.hairColor}</b> y ojos <b>${data.eyesColor}</b> vivió muchas más aventuras, siempre recordando que el verdadero tesoro es el conocimiento y la amistad que se forja a lo largo del camino.`;
  form.style.display = "none";
  storyContainer.style.display = "block";
  storyContainer.firstElementChild.innerHTML = story;
});
