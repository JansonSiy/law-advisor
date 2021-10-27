// this is where I will insert the output
let output = document.getElementById('output');
// this is where I will consolidate the returns, in an empty string
let emptyString = '';

// I will call this function using onclick
function FooBar() {
    // whenever you call this function, it will clear out the following else, it will pile up
    emptyString = '';
    output.innerHTML = '';

    let n = document.getElementById('n').value;
    let initialN = 1;

    // always start with 1 and don't stop looping until initialN = n
    while (initialN <= n) {
        if (initialN % 3 == 0 && initialN % 5 == 0) {
            emptyString += 'FooBar' + '<br>';
        } else if (initialN % 3 == 0) {
            emptyString += 'Foo' + '<br>';
        } else if (initialN % 5 == 0) {
            emptyString += 'Bar' + '<br>';
        } else {
            emptyString += initialN + '<br>';
        };
        
        // +1 increment starting from 1
        initialN++;
    };

    // insert output in output variable
    output.innerHTML = emptyString;

    console.log(emptyString);
};