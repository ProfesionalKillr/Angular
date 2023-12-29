/*desestructuracion de objetos*/
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}
interface Details{
    author: string;
    year: number
}

const audioPlayer: AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Waiting for Love",
    details: {
        author: 'Aviici',
        year: 2015
    }
}

const song = 'New Song';
 const {song: anotherSong ,  
    songDuration:duration,
    details
} = audioPlayer
const {author}=details

//  console.log('Song', anotherSong, song)
//  console.log('Duration', duration,)
//  console.log('Author', author)

/* Desestructuracion de arreglos*/ 

//const dbz: string[] = ['Goku','Vegeta','Gohan'];
//const gohan= dbz[3] || 'No hay personaje'

const [, , gohan = 'Not Found']: string[] = ['Goku','Vegeta'];

//console.log('Personaje 3:', gohan || 'Personaje no encontrado')




export{};