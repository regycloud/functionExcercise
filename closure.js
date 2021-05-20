function init() {
    var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}

// This init has local variable "name" and greet() function. This is called lexical scope.
init();

/* output
Halo, Obi Wan
 */

