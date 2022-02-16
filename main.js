/*
Lesopdracht 2: Juffen

Juffen is een spel, waarbij ieder speler het volgende getal noemt, beginnend bij 1.
Elke keer wanneer er een 7 in het getal voorkomt of een veelvoud van 7 vervangt de speler (onze app) het getal voor 'Juf'

We willen de functie getJuf creëren die dit voor ons doet, waarbij we als argument de maximale lengte meegeven tot waar onze applicatie moet doorgaan.
Zet deze waarde op 70, maar zorg dat de functie het ook doet als je hier een ander getal meegeeft.

De verwachte uitkomst is:

[
  1,     2,     3,     4,     5,     6,     'juf', 8,
  9,     10,    11,    12,    13,    'juf', 15,    16,
  'juf', 18,    19,    20,    'juf', 22,    23,    24,
  25,    26,    'juf', 'juf', 29,    30,    31,    32,
  33,    34,    'juf', 36,    'juf', 38,    39,    40,
  41,    'juf', 43,    44,    45,    46,    'juf', 48,
  'juf', 50,    51,    52,    53,    54,    55,    'juf',
  'juf', 58,    59,    60,    61,    62,    'juf', 64,
  65,    66,    'juf', 68,    69,    'juf'
]


Tip: Test gedurende het maken van je algoritme of kleinere stukjes code het gewenste resultaat hebben, voor je deze aan de functie toevoegt.
Dit voorkomt dat je met foutieve waardes door gaat rekenen.

Probeer eerst voor jezelf te bepalen welke stappen hiervoor nodig zijn.
Check vervolgens of dit overeenkomt met het onderstaande het stappenplan.
Er zijn meerdere wegen naar Rome, dus als jij denkt dat er een efficiëntere manier is, probeer die dan eerst ;-)

1. Creëer een functie genaamd createArray die een array maakt van 1 t/m de waarde van je argument (70)
    a. Creëer de functie en zorg dat 'ie een parameter kan ontvangen met de lengte van je array
    b. Creëer een variabele met een lege array
    c. Loop door deze array (beginnend bij 1) en voeg bij elke iteratie een nieuwe getal toe aan het einde van de array **
    d. Return de array
    e. Test de uitkomst: console.log(createArray(70));
    f. Gewenste resultaat:

[
   1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70
]

2. Creëer een functie genaamd getJuf en plaats daarin onze createArray functie
    a. Creëer de functie die de lengte van jouw array als parameter moet kunnen ontvangen
    b. We gaan eerst even testen of onze createArray binnen de getJuf functie werkt:
        - Creëer een variabele genaamd replaceWithJuf waar we onze createArray in aanroepen
        - Zorg dat de getJuf de parameter wordt doorgeven als argument in onze createArray functie
        - Return de variabele replaceWithJuf (negeer oranje kringeltjes onder de variabele, niet indien ze rood zijn)
        - Test de uitkomst: console.log(getJuf(70));
        - Gewenste resultaat is weer een array van 1 t/m 70
    c. Als dit werkt, kun je de return statement in getJuf uit-commenten en gaan we door naar de volgende stap, zo niet vraag de docent of SME'er om hulp!

3. Loop door de gehele replaceWithJuf variabele heen
4. Bij elke iteratie wil je controleren of de huidige waarde deelbaar is door 7 (Weet je nog welke rekenkundige operator we hiervoor gebruiken?)
5. Als dit waar is, willen we de huidige iteratie waarde vervangen met de tekst 'juf'
6. Return replaceWithJuf en test de uitkomst
7. Als het goed is, zijn nu alle getallen die een veelvoud van 7 bevatten vervangen met 'juf' en gaan we door naar de volgende stap.


8. Als de waarde bij elke iteratie niet deelbaar is door 7, gaan we checken of het getal het cijfer 7 bevat
9. Om het onszelf makkelijk te maken zetten we de huidige waarde uit onze iteratie om tot een string en slaan we deze weer op in een variabele genaamd digitToString
10. Binnen de huidige conditionele statement gaan we nu checken of de variabele digitToString een waarde bevat van 7
11. Als dit waar is, willen we ook hier weer de huidige iteratie waarde vervangen met de tekst 'juf'
12. Als je de functie nu logt zouden ook alle waardes met het getal 7 er in (bv. 17, 27 of 73) ook vervangen moet zijn met 'juf'
13. Doet je functie het ook nog als je hier als argument 100 invoert? Goed gedaan! Je verdient de gouden duim trofee!

* gebruik hiervoor een String methode
** gebruik hiervoor een Array methode

*/

function createArray( lengthArray ) {
    const array = [];
    for ( let i = 1; i <= lengthArray; i++ ) {
        array.push( i );
    }
    return array;
}

// console.log(createArray(70));

function getJuf( param ) {
    const replaceWithJuf = createArray( param );
    //return lengthArray
    for ( let i = 0; i < replaceWithJuf.length; i++ ) {
        if ( replaceWithJuf[i] % 7 === 0 ) {
            replaceWithJuf[i] = 'juf'
        } else {
            let digitToString = replaceWithJuf[i].toString()
            if (digitToString.includes(7)) {
                replaceWithJuf[i] = 'juf'
            }
        }
    }
    return replaceWithJuf
}

console.log( getJuf( 70 ) );