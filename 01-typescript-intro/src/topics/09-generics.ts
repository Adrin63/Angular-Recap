export function whatsMyType<T>(argument: T): T {

    return argument;
}

const amIstring = whatsMyType<string>('Hola Mundo');

const amINumber = whatsMyType<number>(45);

const amIArray = whatsMyType<number[]>([1,2,3,4,5,6]);

console.log(amIstring.split(' '))