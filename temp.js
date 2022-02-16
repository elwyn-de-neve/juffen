


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