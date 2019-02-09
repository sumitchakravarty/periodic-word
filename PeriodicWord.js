'use strict';

let periodicTable = [];

function newElement(symbol, name, atomicWt) {
    return { symbol : symbol.toLowerCase(), symbolDisplay : symbol, name : name, atomicWt : atomicWt };
}

function initPeriodicTable() {
    [
        [ "H", "Hydrogen", 1 ],
        [ "He", "Helium", 2 ],
        [ "Li", "", 3 ],
        [ "Be", "Beryllium", 4 ],
        [ "B", "Boron", 5 ],
        [ "C", "Carbon", 6 ],
        [ "N", "Nitrogen", 7 ],
        [ "O", "Oxygen", 8 ],
        [ "F", "Fluorine", 9 ],
        [ "Ne", "Neon", 10 ],
        [ "Na", "Sodium", 11 ],
        [ "Mg", "Magnesium", 12 ],
        [ "Al", "Aluminium", 13 ],
        [ "Si", "Silicon", 14 ],
        [ "P", "Phosphorus", 15 ],
        [ "S", "Sulfur", 16 ],
        [ "Cl", "Chlorine", 17 ],
        [ "Ar", "Argon", 18 ],
        [ "K", "Potassium", 19 ],
        [ "Ca", "Calcium", 20 ],
        [ "Sc", "Scandium", 21 ],
        [ "Ti", "Titanium", 22 ],
        [ "V", "Vanadium", 23 ],
        [ "Cr", "Chromium", 24 ],
        [ "Mn", "Manganese", 25 ],
        [ "Fe", "Iron", 26 ],
        [ "Co", "Cobalt", 27 ],
        [ "Ni", "Nickel", 28 ],
        [ "Cu", "Copper", 29 ],
        [ "Zn", "Zinc", 30 ],
        [ "Ga", "Gallium", 31 ],
        [ "Ge", "Germanium", 32 ],
        [ "As", "Arsenic", 33 ],
        [ "Se", "Selenium", 34 ],
        [ "Br", "Bromine", 35 ],
        [ "Kr", "Krypton", 36 ],
        [ "Rb", "Rubidium", 37 ],
        [ "Sr", "Strontium", 38 ],
        [ "Y", "Yttrium", 39 ],
        [ "Zr", "Zirconium", 40 ],
        [ "Nb", "Niobium", 41 ],
        [ "Mo", "Molybdenum", 42 ],
        [ "Tc", "Technetium", 43 ],
        [ "Ru", "Ruthenium", 44 ],
        [ "Rh", "Rhenium", 45 ],
        [ "Pd", "Palladium", 46 ],
        [ "Ag", "Silver", 47 ],
        [ "Cd", "Cadmium", 48 ],
        [ "In", "Indium", 49 ],
        [ "Sn", "Tin", 50 ],
        [ "Sb", "Antimony", 51 ],
        [ "Te", "Tellurium", 52 ],
        [ "I", "Iodine", 53 ],
        [ "Xe", "Xenon", 54 ],
        [ "Cs", "Caesium", 55 ],
        [ "Ba", "Barium", 56 ],
        [ "La", "Lanthanum", 57 ],
        [ "Ce", "Cerium", 58 ],
        [ "Pr", "Praseodymium", 59 ],
        [ "Nd", "Neodymium", 60 ],
        [ "Pm", "Prometheum", 61 ],
        [ "Sm", "Samarium", 62 ],
        [ "Eu", "Europium", 63 ],
        [ "Gd", "Gadolinium", 64 ],
        [ "Tb", "Terbium", 65 ],
        [ "Dy", "Dysprosium", 66 ],
        [ "Ho", "Holmium", 67 ],
        [ "Er", "Erbium", 68 ],
        [ "Tm", "Thulium", 69 ],
        [ "Yb", "Ytterbium", 70 ],
        [ "Lu", "Lutetium", 71 ],
        [ "Hf", "Hafnium", 72 ],
        [ "Ta", "Tantalum", 73 ],
        [ "W", "Tungsten", 74 ],
        [ "Re", "Rhenium", 75 ],
        [ "Os", "Osmium", 76 ],
        [ "Ir", "Iridium", 77 ],
        [ "Pt", "Platinum", 78 ],
        [ "Au", "Gold", 79 ],
        [ "Hg", "Mercury", 80 ],
        [ "Tl", "Thallium", 81 ],
        [ "Pb", "Lead", 82 ],
        [ "Bi", "Bismuth", 83 ],
        [ "Po", "Polonium", 84 ],
        [ "At", "Astatine", 85 ],
        [ "Rn", "Radon", 86 ],
        [ "Fr", "Francium", 87 ],
        [ "Ra", "Radium", 88 ],
        [ "Ac", "Actinium", 89 ],
        [ "Th", "Thorium", 90 ],
        [ "Pa", "Protactinium", 91 ],
        [ "U", "Uranium", 92 ],
        [ "Np", "Neptunium", 93 ],
        [ "Pu", "Plutonium", 94 ],
        [ "Am", "Americium", 95 ],
        [ "Cm", "Curium", 96 ],
        [ "Bk", "Berkelium", 97 ],
        [ "Cf", "Californium", 98 ],
        [ "Es", "Einsteinium", 99 ],
        [ "Fm", "Fermium", 100 ],
        [ "Md", "Mendelevium", 101 ],
        [ "No", "Nobelium", 102 ],
        [ "Lr", "Lawrencium", 103 ],
        [ "Rf", "Rutherfordium", 104 ],
        [ "Db", "Dubnium", 105 ],
        [ "Sg", "Seaborgium", 106 ],
        [ "Bh", "Bohrium", 107 ],
        [ "Hs", "Hassium", 108 ],
        [ "Mt", "Meitnerium", 109 ]
    ].
    forEach(e => {
        let [ symbol, name, atomicWeight ] = e;
        periodicTable.push(newElement(symbol, name, atomicWeight));
    });
}

function fitWord(word) {
    let solutionArray = [];
    
    fitWordRecursive(word.toLowerCase(), [], solutionArray);

    console.log("word =", word);
    if (solutionArray.length > 0) {
        writeOutSolution(solutionArray);
    } else {
        console.log("No combinations for", word);
    }

    return solutionArray;
}

function fitWordRecursive(word, solution, solutionArray) {
    if (word === "" && solution.length > 0) {
        solutionArray.push(solution);
        return;
    }

    periodicTable.forEach(e => {
        if (match(e.symbol, word, e.symbol.length)) {
            //let newSolution = (solution === "") ? e.symbol : solution + "," + e.symbol;
            let newSolution = solution.slice();
            newSolution.push(e);
            fitWordRecursive(word.slice(e.symbol.length), newSolution, solutionArray);
        }
    });
}

function match(s1, s2, s2len) {
    if (s1.length > s2.length) return false;
    for (let i = 0; i < s1.length; ++i) {
        if (s1[i] !== s2[i]) return false;
    }
    return true;
}

function writeOutSolution(solutionArray) {
    solutionArray.forEach(solution => {
        let str = "";
        solution.forEach((el, i) => {
            if (i > 0) str += ",";
            str += el.symbolDisplay;
        });      
        console.log("Solution =", str);
    })
}

// used only by the browser
function htmlForOneElement(chemicalElement) {
    let e = document.getElementById("template").cloneNode(true);
    e.id = "notTemplate";       // make sure we don't get it mixed up with the template
    e.style.display = "inline"; // make it visible

    // replace placeholders in the template with actual values
    let html = e.innerHTML;
    html = html.replace("SYMBOLSYMBOL", chemicalElement.symbolDisplay);
    html = html.replace("NAMENAME", chemicalElement.name);
    html = html.replace("WEIGHTWEIGHT", chemicalElement.atomicWt);
    e.innerHTML = html;

    return e;
}

// called from the browser
function fitWordFromBrowser() {

    let inputTextElement = document.getElementById('inputWord');

    // get the input text, see if there are solutions
    let solutions = fitWord(inputTextElement.value);

    // display results
    let resultHook = document.getElementById("result");
    resultHook.innerHTML = "";
    if (solutions.length > 0) {
        solutions.forEach((elemArray) => {
            if (elemArray.length > 0) {
                let solnDiv = document.createElement("div");
                solnDiv.style = "display:flex; flex-direction: row; padding: 5px;";

                elemArray.forEach(elem => {
                    solnDiv.appendChild(htmlForOneElement(elem));
                });

                resultHook.appendChild(solnDiv);
            }
        });
    }

    // show or hide the failure message
    document.getElementById("failureMessage").style.display = (solutions.length > 0) ? "none" : "inline";

    // make it easy to try again
    inputTextElement.focus();
    inputTextElement.setSelectionRange(0, inputTextElement.value.length);
}

function runFromConsole() {
    fitWord("Ben");
    fitWord("Assyrian");
    fitWord("Alumni");
    fitWord("Alumnus");
    fitWord("Bethlehem");
    fitWord("Bishop");
    fitWord("Chrysanthemum");
    fitWord("");
}

initPeriodicTable();

if (typeof window === 'undefined') {
    runFromConsole();
}
