const arr: string[] = ["xxx", "yyy", "zzz"];
const dates = [new Date(), new Date()];

// String[][]
const twoDarr = [["xxx"], ["yyy"], ["zzz"]];

arr.map((item: string): string => {
    return item;
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());

// Tuple
const pepsi: [string, boolean, number] = ["brown", true, 40];

// Type alias
type Drink = [string, boolean, number];
const jaffa: Drink = ["yellow", true, 40];
