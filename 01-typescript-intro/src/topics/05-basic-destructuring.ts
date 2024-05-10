interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Uprise',
    details: {
        author: 'Muse',
        year: 2004
    }
}

const {song:anotherSong, songDuration: duration, details: det} = audioPlayer;

const {author:aut} = det;
// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Autor: ', aut);

const [a, b, c]: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log(a);

export {};