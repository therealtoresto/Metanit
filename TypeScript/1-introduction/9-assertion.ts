{
    const header = <HTMLElement>document.getElementById('header');
    header.innerHTML = 'Hello world!';
}
{
    const header = document.getElementById('header') as HTMLElement;
    header.innerHTML = 'Hi, universe!';
}