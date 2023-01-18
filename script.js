import data from './pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");
console.log(data);
let html = "";
for (let i = 0; i < data.pokemon.length; i++) {
    html += `
    <div id="container">
<div class="pokemon">
<header>
<p><img src="${data.pokemon[i].img}"
</header>
<footer>
<p>ID:${data.pokemon[i].id}
</footer>
</div>
</div>






`;
}
output.innerHTML = html;