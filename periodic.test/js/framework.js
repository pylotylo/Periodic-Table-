const elements = [{
        //nonmetal (hydrogen)
        name: "Hydrogen",
        symbol: "H",
        atomic: "1",
        mass: "1.008",
        x: 0,
        y: 0,
        fill: 'FFC719'
    },
    //alkali metals
    {
        name: "Lithium",
        symbol: "Li",
        atomic: "3",
        mass: "6.941",
        x: 0,
        y: 1,
        fill: 'EC465F'
    },
    {
        name: "Sodium",
        symbol: "Na",
        atomic: "11",
        mass: "22.99",
        x: 0,
        y: 2,
        fill: 'EC465F'
    },
    {
        name: "Potassium",
        symbol: "K",
        atomic: "19",
        mass: "39.10",
        x: 0,
        y: 3,
        fill: 'EC465F'
    },
    {
        name: "Rubidium",
        symbol: "Rb",
        atomic: "37",
        mass: "85.47",
        x: 0,
        y: 4,
        fill: 'EC465F'
    },
    {
        name: "Caesium",
        symbol: "Cs",
        atomic: "55",
        mass: "132.91",
        x: 0,
        y: 5,
        fill: 'EC465F'
    },
    {
        name: "Francium",
        symbol: "Fr",
        atomic: "87",
        mass: "223", //223 needs to be in brackets
        x: 0,
        y: 6,
        fill: 'EC465F'
    },
    //alkaline earth metals
    {
        name: "Beryllium",
        symbol: "Be",
        atomic: "4",
        mass: "9.012",
        x: 1,
        y: 1,
        fill: 'FF5733'
    },
    {
        name: "Magnesium",
        symbol: "Mg",
        atomic: "12",
        mass: "24.31",
        x: 1,
        y: 2,
        fill: 'FF5733'
    },
    {
        name: "Calcium",
        symbol: "Ca",
        atomic: "20",
        mass: "40.08",
        x: 1,
        y: 3,
        fill: 'FF5733'
    },
    {
        name: "Strontium",
        symbol: "Sr",
        atomic: "38",
        mass: "87.62",
        x: 1,
        y: 4,
        fill: 'FF5733'
    },
    {
        name: "Barium",
        symbol: "Ba",
        atomic: "56",
        mass: "137.33",
        x: 1,
        y: 5,
        fill: 'FF5733'
    },
    {
        name: "Radium",
        symbol: "Ra",
        atomic: "88",
        mass: "226", //226 needs to be in brackets 
        x: 1,
        y: 6,
        fill: 'FF5733'
    },
    //transition metals group 3A 
    {
        name: "Scandium",
        symbol: "Sc",
        atomic: "21",
        mass: "44.96",
        x: 2,
        y: 3,
        fill: 'B0CD31'
    },
    {
        name: "Yttrium",
        symbol: "Y",
        atomic: "39",
        mass: "88.91",
        x: 2,
        y: 4,
        fill: 'B0CD31'
    },
    {
        name: "Lanthanides",
        symbol: "put a down arrow here",
        x: 2,
        y: 5,
        fill: '34A2E5'
            //make it so there is no boarder on this square
    },
    {
        name: "Actinides",
        symbol: "put a down arrow here",
        x: 2,
        y: 6,
        fill: '8916A7'
            //make it so there is no boarder on this square
    },
    // transition metals group 4A
    {
        name: "Titanium",
        symbol: "Ti",
        atomic: "22",
        mass: "47.87",
        x: 3,
        y: 3,
        fill: 'B0CD31'
    },
    {
        name: "Zirconium",
        symbol: "Zr",
        atomic: "40",
        mass: 91.22,
        x: 3,
        y: 4,
        fill: 'B0CD31'
    },
    {
        name: "Hafnium",
        symbol: "Hf",
        atomic: "72",
        mass: "178.49",
        x: 3,
        y: 5,
        fill: 'B0CD31'
    },
    {
        name: "Rutherfordium",
        symbol: "Rf",
        atomic: "104",
        mass: "267", //267 should be in brackets 
        x: 3,
        y: 6,
        fill: 'B0CD31'
    },
    // transition metals group 5A
    {
        name: "Vanadium",
        symbol: "V",
        atomic: "23",
        mass: "50.94",
        x: 4,
        y: 3,
        fill: 'B0CD31'
    },
    {
        name: "Niobium",
        symbol: "Nb",
        atomic: "41",
        mass: "92.91",
        x: 4,
        y: 4,
        fill: 'B0CD31'
    },
    {
        name: "Tantalum",
        symbol: "Ta",
        atomic: "73",
        mass: "180.95",
        x: 4,
        y: 5,
        fill: 'B0CD31'
    },
    {
        name: "Dubnium",
        symbol: "Db",
        atomic: "105",
        mass: "268", //268 should be in brackets 
        x: 4,
        y: 6,
        fill: 'B0CD31'
    },
    // transition metals group 6A
    {
        name: "Chromium",
        symbol: "Cr",
        atomic: "24",
        mass: "52.00",
        x: 5,
        y: 3,
        fill: 'B0CD31'
    },
    {
        name: "Molybdenum",
        symbol: "Mo",
        atomic: "42",
        mass: "95.94",
        x: 5,
        y: 4,
        fill: 'B0CD31'
    },
    {
        name: "Tungsten",
        symbol: "W",
        atomic: "74",
        mass: "183.84",
        x: 5,
        y: 5,
        fill: 'B0CD31'
    },
    {
        name: "Seaborgium",
        symbol: "Sg",
        atomic: "106",
        mass: "269", //269 should be in brackets 
        x: 5,
        y: 6,
        fill: 'B0CD31'
    },
    // transition metals group 7A
    {
        name: "Manganese",
        symbol: "Mn",
        atomic: "25",
        mass: "54.94",
        x: 6,
        y: 3,
        fill: 'B0CD31'
    },
    {
        name: "Technetium",
        symbol: "Tc",
        atomic: "43",
        mass: "98", //98 should be in brackets
        x: 6,
        y: 4,
        fill: 'B0CD31'
    },
    {
        name: "Rhenium",
        symbol: "Re",
        atomic: "75",
        mass: "186.21",
        x: 6,
        y: 5,
        fill: 'B0CD31'
    },
    {
        name: "Bohrium",
        symbol: "Bh",
        atomic: "107",
        mass: "270", //270 should be in brackets 
        x: 6,
        y: 6,
        fill: 'B0CD31'
    },
    // transition metals group 8A
    {
        name: "Iron",
        symbol: "Fe",
        atomic: "26",
        mass: "55.84",
        x: 7,
        y: 3,
        fill: 'B0CD31'
    },
    {
        name: "Ruthenium",
        symbol: "Ru",
        atomic: "44",
        mass: "101.07",
        x: 7,
        y: 4,
        fill: 'B0CD31'
    },
    {
        name: "Osmium",
        symbol: "Os",
        atomic: "76",
        mass: "190.23",
        x: 7,
        y: 5,
        fill: 'B0CD31'
    },
    {
        name: "Hassium",
        symbol: "Hs",
        atomic: "108",
        mass: "269", //269 should be in brackets 
        x: 7,
        y: 6,
        fill: 'B0CD31'
    },
    // transition metals group 9A
    {
        name: "Cobalt",
        symbol: "Co",
        atomic: "27",
        mass: "58.93",
        x: 8,
        y: 3,
        fill: 'B0CD31'
    },
    {
        name: "Rhodium",
        symbol: "Rh",
        atomic: "45",
        mass: "102.91",
        x: 8,
        y: 4,
        fill: 'B0CD31'
    },
    {
        name: "Iridium",
        symbol: "Ir",
        atomic: "77",
        mass: "192.22",
        x: 8,
        y: 5,
        fill: 'B0CD31'
    },
    {
        name: "Meltnerium",
        symbol: "Mt",
        atomic: "109",
        mass: "278", //278 should be in brackets 
        x: 8,
        y: 6,
        fill: 'B9A200'
    },
    // transition metals group 10A
    {
        name: "Nickel",
        symbol: "Ni",
        atomic: "28",
        mass: "58.69",
        x: 9,
        y: 3,
        fill: 'B0CD31'
    },
    {
        name: "Palladium",
        symbol: "Pd",
        atomic: "46",
        mass: "106.42",
        x: 9,
        y: 4,
        fill: 'B0CD31'
    },
    {
        name: "Platinum",
        symbol: "Pt",
        atomic: "78",
        mass: "195.08",
        x: 9,
        y: 5,
        fill: 'B0CD31'
    },
    {
        name: "Darmstadtium",
        symbol: "Ds",
        atomic: "110",
        mass: "282", //281 should be in brackets 
        x: 9,
        y: 6,
        fill: 'B9A200'
    },
    // transition metals group 11A
    {
        name: "Copper",
        symbol: "Cu",
        atomic: "29",
        mass: "63.55",
        x: 10,
        y: 3,

        fill: 'B0CD31'
    },
    {
        name: "Silver",
        symbol: "Ag",
        atomic: "47",
        mass: "107.87",
        x: 10,
        y: 4,

        fill: 'B0CD31'
    },
    {
        name: "Gold",
        symbol: "Au",
        atomic: "79",
        mass: "196.97",
        x: 10,
        y: 5,
        fill: 'B0CD31'
    },
    {
        name: "Roentgenium",
        symbol: "Rg",
        atomic: "111",
        mass: "281", //281 should be in brackets 
        x: 10,
        y: 6,
        fill: 'B9A200'
    },
    // transition metals group 12A
    {
        name: "Zinc",
        symbol: "Zn",
        atomic: "30",
        mass: "65.39",
        x: 11,
        y: 3,
        fill: 'B0CD31'
    },
    {
        name: "Cadmium",
        symbol: "Cd",
        atomic: "48",
        mass: "112.41",
        x: 11,
        y: 4,
        fill: 'B0CD31'
    },
    {
        name: "Mercury",
        symbol: "Hg",
        atomic: "80",
        mass: "200.59",
        x: 11,
        y: 5,
        fill: 'B0CD31'
    },
    {
        name: "Copernium",
        symbol: "Cn",
        atomic: "112",
        mass: "285", //285 should be in brackets 
        x: 11,
        y: 6,
        fill: 'B0CD31'
    },
    // group 13
    {
        name: "Boron",
        symbol: "B",
        atomic: "5",
        mass: "10.81",
        x: 12,
        y: 1,
        fill: '28CD9B'
    },
    {
        name: "Aluminium",
        symbol: "Al",
        atomic: "13",
        mass: "26.98",
        x: 12,
        y: 2,
        fill: 'FFA7CE'
    },
    {
        name: "Gallium",
        symbol: "Ga",
        atomic: "31",
        mass: "69.72",
        x: 12,
        y: 3,
        fill: 'FFA7CE'
    },
    {
        name: "Indium",
        symbol: "In",
        atomic: "49",
        mass: "87.62",
        x: 12,
        y: 4,
        fill: 'FFA7CE'
    },
    {
        name: "Thallium",
        symbol: "Tl",
        atomic: "81",
        mass: "204.38",
        x: 12,
        y: 5,
        fill: 'FFA7CE'
    },
    {
        name: "Ununtrium",
        symbol: "Uut",
        atomic: "113",
        mass: "286", //286 needs to be in brackets 
        x: 12,
        y: 6,
        fill: 'B9A200'
    },
    // group 14
    {
        name: "Carbon",
        symbol: "C",
        atomic: "6",
        mass: "12.01",
        x: 13,
        y: 1,
        fill: 'FFC300'
    },
    {
        name: "Silicon",
        symbol: "Si",
        atomic: "14",
        mass: "28.09",
        x: 13,
        y: 2,
        fill: '28CD9B'
    },
    {
        name: "Germanium",
        symbol: "Ge",
        atomic: "32",
        mass: "72.63",
        x: 13,
        y: 3,
        fill: '28CD9B'
    },
    {
        name: "Tin",
        symbol: "Sn",
        atomic: "50",
        mass: "118.71",
        x: 13,
        y: 4,
        fill: 'FFA7CE'
    },
    {
        name: "Lead",
        symbol: "Pb",
        atomic: "82",
        mass: "207.2",
        x: 13,
        y: 5,
        fill: 'FFA7CE'
    },
    {
        name: "Flerovium",
        symbol: "Fl",
        atomic: "114",
        mass: "289", //289 needs to be in brackets 
        x: 13,
        y: 6,
        fill: 'B9A200'
    },
    // group 15
    {
        name: "Nitrogen",
        symbol: "N",
        atomic: "7",
        mass: "14.01",
        x: 14,
        y: 1,
        fill: 'FFC300'
    },
    {
        name: "Phosphorus",
        symbol: "P",
        atomic: "15",
        mass: "30.97",
        x: 14,
        y: 2,
        fill: 'FFC300'
    },
    {
        name: "Arsenic",
        symbol: "As",
        atomic: "33",
        mass: "74.92",
        x: 14,
        y: 3,
        fill: '28CD9B'
    },
    {
        name: "Antimony",
        symbol: "Sb",
        atomic: "51",
        mass: "121.76",
        x: 14,
        y: 4,
        fill: '28CD9B'
    },
    {
        name: "Bismuth",
        symbol: "Bi",
        atomic: "83",
        mass: "208.98",
        x: 14,
        y: 5,
        fill: 'FFA7CE'
    },
    {
        name: "Ununpentium",
        symbol: "Uup",
        atomic: "115",
        mass: "289", //289 needs to be in brackets 
        x: 14,
        y: 6,
        fill: 'B9A200'
    },
    // group 16
    {
        name: "Oxygen",
        symbol: "O",
        atomic: "8",
        mass: "16.00",
        x: 15,
        y: 1,
        fill: 'FFC300'
    },
    {
        name: "Sulfur",
        symbol: "S",
        atomic: "16",
        mass: "32.07",
        x: 15,
        y: 2,
        fill: 'FFC300'
    },
    {
        name: "Selenium",
        symbol: "Se",
        atomic: "34",
        mass: "78.96",
        x: 15,
        y: 3,
        fill: 'FFC300'
    },
    {
        name: "Tellurium",
        symbol: "Te",
        atomic: "52",
        mass: "127.60",
        x: 15,
        y: 4,
        fill: '28CD9B'
    },
    {
        name: "Polonium",
        symbol: "Po",
        atomic: "84",
        mass: "209", //209 should be in brackets
        x: 15,
        y: 5,
        fill: 'FFA7CE'
    },
    {
        name: "Livermorium",
        symbol: "Lv",
        atomic: "116",
        mass: "293", //293 needs to be in brackets 
        x: 15,
        y: 6,
        fill: 'B9A200'
    },
    // group 17
    {
        name: "Fluorine",
        symbol: "F",
        atomic: "9",
        mass: "19.00",
        x: 16,
        y: 1,
        fill: '900C3F'
    },
    {
        name: "Chlorine",
        symbol: "Cl",
        atomic: "17",
        mass: "35.45",
        x: 16,
        y: 2,
        fill: '900C3F'
    },
    {
        name: "Bromine",
        symbol: "Br",
        atomic: "35",
        mass: "79.90",
        x: 16,
        y: 3,
        fill: '900C3F'
    },
    {
        name: "Iodine",
        symbol: "I",
        atomic: "53",
        mass: "126.90",
        x: 16,
        y: 4,
        fill: '900C3F'
    },
    {
        name: "Astatine",
        symbol: "At",
        atomic: "85",
        mass: "210", //210 should be in brackets
        x: 16,
        y: 5,
        fill: '900C3F'
    },
    {
        name: "Ununseptium",
        symbol: "Uus",
        atomic: "117",
        mass: "294", //294 needs to be in brackets 
        x: 16,
        y: 6,
        fill: 'B9A200'
    },
    //noble gases
    {
        name: "Helium",
        symbol: "He",
        atomic: "2",
        mass: "4.003",
        x: 17,
        y: 0,
        fill: '581845'
    },
    {
        name: "Neon",
        symbol: "Ne",
        atomic: "10",
        mass: "20.18",
        x: 17,
        y: 1,
        fill: '581845'
    },
    {
        name: "Argon",
        symbol: "Ar",
        atomic: "18",
        mass: "39.95",
        x: 17,
        y: 2,
        fill: '581845'
    },
    {
        name: "Krypton",
        symbol: "Kr",
        atomic: "36",
        mass: "83.80",
        x: 17,
        y: 3,
        fill: '581845'
    },
    {
        name: "Xenon",
        symbol: "Xe",
        atomic: "54",
        mass: "131.29",
        x: 17,
        y: 4,
        fill: '581845'
    },
    {
        name: "Radon",
        symbol: "Rn",
        atomic: "86",
        mass: "222", //222 should be in brackets
        x: 17,
        y: 5,
        fill: '581845'
    },
    {
        name: "Oganesson",
        symbol: "Og",
        atomic: "118",
        mass: "294", //294 needs to be in brackets
        x: 17,
        y: 6,
        fill: '581845'
    },
    //lanthanides
    {
        name: "Lanthanum",
        symbol: "La",
        atomic: "57",
        mass: "138.91",
        x: 3,
        y: 7.75,
        fill: '34A2E5'
    },
    {
        name: "Cerium",
        symbol: "Ce",
        atomic: "58",
        mass: "140.12",
        x: 4,
        y: 7.75,
        fill: '34A2E5'
    },
    {
        name: "Praseodymium",
        symbol: "Pr",
        atomic: "59",
        mass: "140.91",
        x: 5,
        y: 7.75,
        fill: '34A2E5'
    },
    {
        name: "Neodynium",
        symbol: "Nd",
        atomic: "60",
        mass: "144.24",
        x: 6,
        y: 7.75,
        fill: '34A2E5'
    },
    {
        name: "Promethium",
        symbol: "Pm",
        atomic: "61",
        mass: "145", //145 shoould be in brackets
        x: 7,
        y: 7.75,
        fill: '34A2E5'
    },
    {
        name: "Samarium",
        symbol: "Sm",
        atomic: "62",
        mass: "150.36",
        x: 8,
        y: 7.75,
        fill: '34A2E5'
    },
    {
        name: "Europium",
        symbol: "Eu",
        atomic: "63",
        mass: "151.96",
        x: 9,
        y: 7.75,
        fill: '34A2E5'
    },
    {
        name: "Gadolinium",
        symbol: "Gd",
        atomic: "64",
        mass: "157.25",
        x: 10,
        y: 7.75,
        fill: '34A2E5'
    },
    {
        name: "Terbium",
        symbol: "Tb",
        atomic: "65",
        mass: "158.93",
        x: 11,
        y: 7.75,
        fill: '34A2E5'
    },
    {
        name: "Dysprosium",
        symbol: "Dy",
        atomic: "66",
        mass: "162.50",
        x: 12,
        y: 7.75,
        fill: '34A2E5'
    },
    {
        name: "Holmium",
        symbol: "Ho",
        atomic: "67",
        mass: "164.93",
        x: 13,
        y: 7.75,
        fill: '34A2E5'
    },
    {
        name: "Erbium",
        symbol: "Er",
        atomic: "68",
        mass: "167.26",
        x: 14,
        y: 7.75,
        fill: '34A2E5'
    },
    {
        name: "Thulium",
        symbol: "Tm",
        atomic: "69",
        mass: "168.93",
        x: 15,
        y: 7.75,
        fill: '34A2E5'
    },
    {
        name: "Ytterbium",
        symbol: "Yb",
        atomic: "71",
        mass: "174.97",
        x: 16,
        y: 7.75,
        fill: '34A2E5'
    },
    {
        name: "Lutetium",
        symbol: "Lu",
        atomic: "71",
        mass: "174.97",
        x: 17,
        y: 7.75,
        fill: '34A2E5'
    },
    //Actinides
    {
        name: "Actinium",
        symbol: "Ac",
        atomic: "89",
        mass: "227", //227 should be in brackets
        x: 3,
        y: 8.75,
        fill: '8916A7'
    },
    {
        name: "Thorium",
        symbol: "Th",
        atomic: "90",
        mass: "232.04",
        x: 4,
        y: 7.75,
        fill: '8916A7'
    },
    {
        name: "Protactinium",
        symbol: "Pa",
        atomic: "91",
        mass: "231.04",
        x: 5,
        y: 8.75,
        fill: '8916A7'
    },
    {
        name: "Uranium",
        symbol: "U",
        atomic: "92",
        mass: "238.03",
        x: 6,
        y: 8.75,
        fill: '8916A7'
    },
    {
        name: "Neptunium",
        symbol: "Np",
        atomic: "93",
        mass: "237", //237 shoould be in brackets
        x: 7,
        y: 8.75,
        fill: '8916A7'
    },
    {
        name: "Plutonium",
        symbol: "Pu",
        atomic: "94",
        mass: "244", //244 should be in brackets
        x: 8,
        y: 8.75,
        fill: '8916A7'
    },
    {
        name: "Americium",
        symbol: "Am",
        atomic: "95",
        mass: "243", //243 should be in brackets
        x: 9,
        y: 8.75,
        fill: '8916A7'
    },
    {
        name: "Curium",
        symbol: "Cm",
        atomic: "96",
        mass: "247", //247 should be in brackets
        x: 10,
        y: 8.75,
        fill: '8916A7'
    },
    {
        name: "Berkelium",
        symbol: "Bk",
        atomic: "97",
        mass: "247", //247 should be in brackets
        x: 11,
        y: 8.75,
        fill: '8916A7'
    },
    {
        name: "Californium",
        symbol: "Cf",
        atomic: "98",
        mass: "251", //251 should be in brackets
        x: 12,
        y: 8.75,
        fill: '8916A7'
    },
    {
        name: "Einsteinium",
        symbol: "Es",
        atomic: "99",
        mass: "252", //252 should be in brackets
        x: 13,
        y: 8.75,
        fill: '8916A7'
    },
    {
        name: "Fermium",
        symbol: "Fm",
        atomic: "100",
        mass: "257", //257 should be in brackets
        x: 14,
        y: 8.75,
        fill: '8916A7'
    },
    {
        name: "Mendelevium",
        symbol: "Md",
        atomic: "101",
        mass: "258", //258 should be in brackets
        x: 15,
        y: 8.75,
        fill: '8916A7'
    },
    {
        name: "Nobelium",
        symbol: "No",
        atomic: "102",
        mass: "259", //259 should be in brackets
        x: 16,
        y: 8.75,
        fill: '8916A7'
    },
    {
        name: "Lawrencium",
        symbol: "Lr",
        atomic: "103",
        mass: "262", //262 should be in brackets
        x: 17,
        y: 8.75,
        fill: '8916A7'
    },
]

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(60);
}
/*
function thisFill() {
    if (mouseX > x &&
        mouseX < x + elementSize &&
        mouseY > y &&
        mouseY < y + elementSize) {

        fill(30);
    } else {
        fill("#" + currElement.fill)
    }

}
*/
function drawElements() {

    const elementSize = window.innerWidth / 22;

    background(60);
    stroke(255);
    strokeWeight(1);

    for (let i = 0; i < elements.length; i++) {
        let currElement = elements[i];
        let x = (2 + currElement.x) * elementSize;
        let y = (2 + currElement.y) * elementSize;
        let symbol = currElement.symbol;
        let atomic = currElement.atomic;
        let mass = currElement.mass;
        let CESes = elementSize / 3.5;
        let ESces = elementSize / 6.05;

        if (mouseX > x &&
            mouseX < x + elementSize &&
            mouseY > y &&
            mouseY < y + elementSize) {

            fill(30);

            //change color and stroke weight for hovered element
            stroke(255, 0, 0);
            strokeWeight(3);
        }


        //draw box around element
        fill('#' + currElement.fill);
        square(x, y, elementSize);
        // change color and stroke weight BACK for non-hovered elements
        stroke(255, 255, 255);
        strokeWeight(1);
        /*draw corner triangle
            noFill();
            triangle(x,
                y,
                x,
                y + (elementSize / 2.1818),
                x + (elementSize / 2.1818),
                y);
        */

        //draw a corner squar instead of a corner triangle
        noFill();
        rect(x, y, (elementSize / 3), (elementSize / 4), 0, 0, (elementSize / 15), 0);
        //draw element symbol text
        textAlign(CENTER);
        fill(255);
        textSize(CESes);
        text(symbol,
            x + elementSize / 2,
            y + elementSize / 2);
        //draw atomic number
        textAlign(CENTER);
        fill(255);
        textSize(ESces);
        text(atomic,
            x + elementSize / 6,
            y + elementSize / 5);
        //draw atomic mass
        textAlign(CENTER);
        fill(255);
        textSize(ESces);
        text(mass,
            x + elementSize / 2,
            y + elementSize / 1.25);
    }

}

function draw() {
    drawElements();
}