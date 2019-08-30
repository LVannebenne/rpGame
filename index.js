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

const strBr = require('string-break');
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
prompt.setEncoding('utf-8');


async function play() {
    console.clear();

    //Titre en Ascii Art

    figlet("    Bienvenue",{
        font: 'Big'
    }, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            return console.dir(err);
        }
        console.log(grad.rainbow(data));
    })

    

    function displaytext() {
        setTimeout(() => {
            console.log(boxen(chalk.bold(grad.atlas("Amis de la ligne de commande... \n              dans cette aventure interactive.\n")) + chalk.dim("\nTu vas vivre une expérience qui va te rappeller ton \nenfance. Pour participer, lis le premier paragraphe, tu \ndevra faire un choix. Entre le numéro correspondant à \nton choix et appuye sur [ENTER]. Pour commencer, entre \nle chiffre 1."), { padding: 1, borderStyle: 'double' }));
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
                console.log(boxen(strBr(sentences[data].text, process.stdout.columns - 10).join(" \n"), {padding: 1, borderStyle: 'double'}));
            }
            else {
                console.error("Oups, mauvais choix, recommence... ");
            }
        }
        console.log(chalk.bold(grad.morning("   Quel est ton choix ?")))
    })
}

play();

