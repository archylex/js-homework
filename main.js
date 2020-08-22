class Pokemon {
    constructor(name, hp, attack1, attack2, sprite) {
        this.name = name;
        this.hp = hp;
        this.attack = [
        {
            name: attack1[0],
            damage: attack1[1]
        },
        {
            name: attack2[0],
            damage: attack2[1]
        }];        
        this.sprite = sprite;
    }
}

const pokemon = [
    new Pokemon("Pikachu", 150, ["Thunder Shock", 15], ["Tail Whip", 30], "http://sify4321.000webhostapp.com/pikachu.png"),
    new Pokemon("Charmander", 90, ["Dragon Breath", 10], ["Fire Fang", 30], "http://sify4321.000webhostapp.com/charmander.png"),
    new Pokemon("Bulbasaur", 50, ["Ice", 5], ["Fire", 20], "http://sify4321.000webhostapp.com/bulbasaur.png"),
    new Pokemon("Squirtle", 100, ["Shell Smash", 15], ["Hydro Pump", 25], "http://sify4321.000webhostapp.com/squirtle.png"),
    new Pokemon("Zubat", 120, ["Wing Attack", 20], ["Confuse Ray", 30], "http://sify4321.000webhostapp.com/zubat.png"),
    new Pokemon("Mew", 200, ["Psychic", 25], ["Gyro Ball", 35], "http://sify4321.000webhostapp.com/mew.png"),
    new Pokemon("Snorlax",115, ["Lick Ghost", 20], ["Zen Headbutt Psychic", 10], "http://sify4321.000webhostapp.com/snorlax.png"),
    new Pokemon("Psyduck", 110, ["Scratch", 20], ["Water Pulse", 35], "http://sify4321.000webhostapp.com/psyduck.png")
]

function createPers(pok_num, id_hp_text, id_hp_progress, id_sprite, id_name) {
    return {
        character: pokemon[pok_num],
        hp: pokemon[pok_num].hp,
        health_text:  document.getElementById(id_hp_text),
        health_progressbar: document.getElementById(id_hp_progress),
        sprite: document.getElementById(id_sprite),
        name: document.getElementById(id_name)
    }
}

const player = createPers(0, 'health-character', 'progressbar-character', 'player-sprite', 'name-character');

const enemy = createPers(Math.floor(Math.random() * pokemon.length), 'health-enemy', 'progressbar-enemy', 'enemy-sprite', 'name-enemy');

const btn_kick_1 = document.getElementById('btn-kick-1');
const btn_kick_2 = document.getElementById('btn-kick-2');

btn_kick_1.addEventListener('click', function () {
   attack(0);
})

btn_kick_2.addEventListener('click', function () {
   attack(1); 
})

function init() {
    btn_kick_1.innerText = player.character.attack[0].name;
    btn_kick_2.innerText = player.character.attack[1].name;
    player.sprite.src = player.character.sprite;    
    player.name.innerText = player.character.name;
    enemy.sprite.src = enemy.character.sprite;
    enemy.name.innerText = enemy.character.name;
    update();
}

function update() {    
    updateHealth(player);    
    updateHealth(enemy);    
}

function updateHealth(pers) {
    updateHPText(pers);
    updateHPProgressBar(pers);
}

function updateHPText(pers) {    
    pers.health_text.innerText = pers.hp + " / " + pers.character.hp;
}

function updateHPProgressBar(pers) {
    pers.health_progressbar.style.width = pers.hp / pers.character.hp * 100 + '%';
}

function reduceHP(pers, damage) {
    pers.hp -= damage + (Math.round(Math.random()) * 2 - 1) * Math.ceil(Math.random() * 10 + 1);    
    if (pers.hp < 0) pers.hp = 0;
}

function enemyAttack() {
    const kick = Math.floor(Math.random() * 2);
    console.log(kick);
    reduceHP(player, enemy.character.attack[kick].damage);
}

function attack(num) {
    reduceHP(enemy, player.character.attack[num].damage);
    if (checkAlive()) enemyAttack();
    update();
}

function checkAlive() {
    let over = true;
    
    if (player.hp <= 0 && enemy.hp > 0) 
        alert("Game Over!\nAlas, " + player.character.name + " was died.");        
    else if (enemy.hp <= 0 && player.hp > 0)
        alert("You win!\n" + enemy.character.name + " has been defeated!");        
    else if (enemy.hp <= 0 && player.hp <= 0)
        alert("Tie! Both pokemon got tired of fighting and went to rest.");        
    else over = false;
    
    if (over) {        
        btn_kick_1.disabled = true;
        btn_kick_2.disabled = true;
    }
    
    return !over;
}

init();
