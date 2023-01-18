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
<p>${data.pokemon[i].num}-${data.pokemon[i].name}
<p>Type:${data.pokemon[i].type}
<p>Height:${data.pokemon[i].height}
<p>Weight:${data.pokemon[i].weight}
<p>Candy:${data.pokemon[i].candy}
<p>Candy-Count:${data.pokemon[i].candy_count}
<p>Egg:${data.pokemon[i].egg}
<p>Spawn-Chance:${data.pokemon[i].spawn_chance}
<p>Average-Spawns:${data.pokemon[i].avg_spawns}
<p>Multipliers:${data.pokemon[i].multipliers}
<p>Weaknesses:${data.pokemon[i].weaknesses}
</footer>
</div>
</div>






`;
}
output.innerHTML = html;