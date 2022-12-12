{
    enum Season { Winter, Spring, Summer, Autumn = 23 }; // default: 0, 1, 2, 3
    let current: Season = Season.Summer;
    current = Season.Winter;
    console.log(current); // 0
    const season: string = Season[2];
    console.log(season) // Summer
}
{
    enum Season { 
        Winter = 'WN', 
        Spring = 1, 
        Summer = 'SM', 
        Autumn = 3
    };

    const current: Season = Season.Summer;
    console.log(current);
}
{
    enum DayTime { 
        Morning = 'Mo', 
        Evening = 1 };
    const welcome = (dayTime: DayTime) => {
        if (dayTime === DayTime.Morning) {
            console.log('Good morning!');
        } else {
            console.log('Good evening!');
        }
    }
    const current: DayTime = DayTime.Morning;
    welcome(current);
    welcome(1);
    // welcome('Mo'); // Error
}