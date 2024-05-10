export interface Passenger {
    name: string;
    children?: string[];

}

const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Ad',
    children: ['Nat','Eli'],
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    
    console.log(howManyChildren)
}