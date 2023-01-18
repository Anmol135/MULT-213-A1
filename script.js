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
//Doing calculations now
//Calculating total number of candy-count and the average candy-count
let sum=0;
let average;
for(let i=0;i<data.pokemon.length;i++){
    if(data.pokemon[i].candy_count){
        let total=parseInt(data.pokemon[i].candy_count);
        sum+=total;
        average=parseFloat(sum/data.pokemon.length);
    }
}
const candy_total=document.getElementById("candy_total");
candy_total.innerHTML=("The total number of Candy-Count among all the pokemons would be: "+sum);
const summary=document.getElementById("summary");
summary.innerHTML=("The average for Candy-Count among all the pokemons would be: "+average);

//Getting the total number of pokemons
let num;
for(let i=0;i<data.pokemon.length;i++){
    num=data.pokemon.length;
}
const total_pokemon=document.getElementById("total_pokemon");
total_pokemon.innerHTML=("The total number of Candy-Count among all the pokemons would be: "+num);

//Getting the max value out spawn_chance
let spawnChance=[]; //Create an array to hold the parseFloat values of spawn_chance
for( var i=0; i<data.pokemon.length;i++){
    if(data.pokemon[i].spawn_chance){
        let spawn_chance=data.pokemon[i].spawn_chance;
        let spawn_num=parseFloat(spawn_chance);
        spawnChance.push(spawn_num);
    }
}
console.log(spawnChance);
const spawn_chance=document.getElementById("spawn_chance");
spawn_chance.innerHTML=("The max value for Spawn-Chance among all the pokemon is: "+ Math.max(...spawnChance));