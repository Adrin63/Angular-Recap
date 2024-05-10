function addNumbers(a:number, b:number):number {

    return a+b;
}

const addNumbersArrow = (a:number, b:number = 1): string => { return `${a + b}` }

const result: number = addNumbers(1,2);
const result2: string = addNumbersArrow(1,2);

interface Character {
    name:string;
    hp: number;
    showHp: () => void;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    }
}
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}




console.log({result, result2});
export {};