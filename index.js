#!/usr/bin/env node

/*
let timeoutID;

function timer() {
    timeoutID = setTimeout(sayHello, 1000);
}

function sayHello() {
    console.log('hello');
}

async function myAsync() {
    console.log('call...');
    let result = await timer();
    console.log('the end');
}

myAsync();
*/

const sentences = require('./sentences').sentences;

const boxen = require("boxen");
const chalk = require("chalk");
const grad = require('gradient-string');
const figlet = require('figlet');

const cad = {
    topLeft: '+',
    topRight: '+',
    bottomLeft: '+',
    bottomRight: '+',
    horizontal: '-',
    vertical: ' '
}

let prompt = process.stdin;

async function play() {

    figlet("    Bienvenue",{
        font: 'Big'
    }, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            return console.dir(err);
        }
        console.log(grad.rainbow(data));
    })

    prompt.setEncoding('utf-8');

    function displaytext() {
        setTimeout(() => {
            console.log(boxen(chalk.bold(grad.atlas("Amis de la ligne de commande... \n              dans cette aventure interactive.\n")) + chalk.dim("\nVous allez vivre une expérience qui va vous rappeller votre \nenfance. Pour participer, lisez le premier paragraphe, vous \ndevrez faire un choix. Entrez le numéro correspondant à \nvotre choix et appuyez sur [ENTER]. Pour commencer, entrez \nle chiffre 1."), { padding: 1, borderStyle: 'double' }));
            console.log(chalk.bold(grad.morning("   Quel est ton choix ?")))
        }, 500)
    }

    await displaytext();
    prompt.on('data', function (data) {
        if (data == 'exit\n') {
            console.log('This is the end');
            process.exit();
        }
        else {
            data = data.trim()
            if (new RegExp(/^[0-9]{1,2}$/g).test(data)) {
                console.log(boxen(sentences[data], {borderStyle: cad}));
            }
            else {
                console.error("Oups, mauvais choix, recommence... ");
            }
        }
        console.log(chalk.bold(grad.morning("   Quel est ton choix ?")))
    })
}

play();

