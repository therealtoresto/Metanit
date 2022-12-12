{
    let x: number | undefined | null = undefined;
    console.log(x);
    x = null;
    console.log(x);
    x = 5;
    console.log(5);
}
{
    let obj = {
        prop: undefined,
        data: null
    }
    console.log(obj!.prop);
    console.log(obj!.data);
}