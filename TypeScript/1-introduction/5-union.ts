{
    let id : number | string;
    id = '1234wert'
    console.log(id);
    id = 1234;
    console.log(id);
}
{
    function printId(id: number | string) {
        console.log(`id: ${id}`);
    }
    let id: string | number = 'hex24';
    printId('defr3341');
    printId(9878);
    printId(id);
}
{
    function printSentense(words: string[] | string) {
        if (typeof words === 'string') {
            console.log(words);
        } else {
            console.log(words.join(' '));
        }
    }
    printSentense(['I', 'like', 'TypeScript']);
    printSentense('I like JavaScript');
}