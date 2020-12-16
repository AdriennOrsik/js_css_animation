function pageLoad() {

let myObjects = [
		{
			tag: "h1",
			content: "Orsik Adrienn"
    },
    {
      tag: "p",
      content: "Front End Developer"
    }
  ];

  const root = document.getElementById("root");

  for(o of myObjects) {
    console.log(o.tag);
  }

  for(o of myObjects) {
    root.insertAdjacentHTML('beforeend', `
      <${o.tag}>${o.content}</${o.tag}>
    `);
}

root.addEventListener('click', function() {
  root.classList.toggle('clicked');
});

}

window.addEventListener('load', pageLoad);