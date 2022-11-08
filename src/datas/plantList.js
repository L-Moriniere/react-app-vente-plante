import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
    {
        name: 'monstera',
        category: 'classique',
        id: '1ed',
        light: 2,
        water: 3,
        cover: monstera,
        price: 15,
        description: 'Le meilleur endroit pour installer votre monstera peut être près d’une fenêtre mais sans soleil direct.\n' +
            '\n' +
            'Vous pourrez même l’installer de manière assez éloigné d’une source de lumière car le monstera supporte très bien la lumière tamisé.\n' +
            '\n' +
            'Ce qu’il redoute le plus c’est l’excès de soleil car il vient assécher la plante.\n' +
            '\n' +
            'Au plus le monstera reçoit de lumière et au plus son feuillage souffre.\n' +
            '\n' +
            'Évitez absolument la proximité d’une source de chaleur comme un radiateur car cette plante d’origine tropicale a besoin d’humidité.'
    },
    {
        name: 'ficus lyrata',
        category: 'classique',
        id: '2ab',
        light: 3,
        water: 1,
        cover: lyrata,
        price: 16,
        description: 'Le ficus lyrata  est une plante d’origine tropicale qui a besoin d’eau et d’humidité ambiante.\n' +
            '\n' +
            'Arrosez au moins 1 fois par semaine, en attendant que le sol soit sec entre 2 arrosages.\n' +
            'Au contraire, en hiver, on pourra espacer un peu plus l’arrosage.\n' +
            'N’hésitez pas à vaporiser régulièrement de l’eausur le feuillage, cela améliorera la qualité du feuillage et évitera que les feuilles sèchent, surtout en hiver lorsque le chauffage tourne à plein régime'
    },

    {
        name: 'pothos argenté',
        category: 'classique',
        id: '3sd',
        light: 1,
        water: 2,
        cover: pothos,
        price: 9,
        description: 'Le pothos est très facile à cultiver. Il réclame très peu d’entretien et résiste assez bien aux différentes maladies.\n' +
            '\n' +
            'Le pothos est en fait une liane, grimpante ou retombante, selon le support.\n' +
            '\n' +
            'Si un apport d’engrais organique peut redonner du tonus à la plante, il n’est pas pour autant indispensable.'
    },
    {
        name: 'calathea',
        category: 'classique',
        id: '4kk',
        light: 2,
        water: 3,
        cover: calathea,
        price: 20,
        description: 'Si vous recherchez une plante à placer dans une pièce assez sombre, qui ne reçoit pas beaucoup de soleil, le calathéa est idéal. Il se contente d\'une fenêtre exposée au nord ou d\'un emplacement à 2 m environ d\'une fenêtre orientée au sud. Le soleil direct brûle ses feuilles en été mais il tolère le soleil en hiver (de mi-novembre à la mi-mars).'
    },
    {
        name: 'olivier',
        category: 'extérieur',
        id: '5pl',
        light: 3,
        water: 1,
        cover: olivier,
        price: 25,
        description: 'Symbole de la Provence, de la longévité et de la sérénité, l’olivier resplendit au cœur du jardin. De culture facile, il peut vivre des milliers d’années. En groupe, isolé, grand ou petit de type bonsaï, l’olivier est à lui seul un décor méditerranéen.'
    },

    {
        name: 'cactus',
        category: 'plante grasse',
        id: '8fp',
        light: 2,
        water: 1,
        cover: cactus,
        price: 6,
        description: 'Formes étranges, épines et fleurs sublimes, les cactus nous surprennent toujours, autant par cet aspect de plante du désert que par leur incroyable résistance à la sécheresse. Difficiles à cultiver en extérieur dans la plupart des régions françaises, ils peuvent être installés en pot. Peu exigeants, il ne faudra quand même pas oublier de les arroser, si, si, pour avoir la joie de les voir se développer et fleurir !'
    },
    {
        name: 'basilic',
        category: 'extérieur',
        id: '7ie',
        light: 2,
        water: 3,
        cover: basil,
        price: 5,
        description: 'Petite plante au feuillage très odorant, le basilic est la star des aromates en cuisine. Adapté à la culture en pot, il trouve sa place tant à l’extérieur dans le jardin qu’à l’intérieur, dans la maison. Le basilic se retrouve ainsi dans toutes les régions de France. Rustique et très facile à cultiver, le basilic se mange frais, croît rapidement, et vous fournit des feuilles à l’arôme subtil toute l’année. C’est donc une bonne raison de le cultiver soi-même !'
    },
    {
        name: 'succulente',
        category: 'plante grasse',
        id: '9vn',
        light: 2,
        water: 1,
        cover: succulent,
        price: 8,
        description: 'On appelle également les succulentes des “plantes grasses”.\n' +
            'La succulence est une particularité biologique de certaines plantes dites “xérophiles”, qui ont développé des moyens biologiques de lutter contre le manque d’eau de leur milieu. Ces moyens sont variés chez les xérophytes : réduction de la transpiration par diminution de la surface des feuilles, racines pivotantes, feuilles qui retiennent l’eau, stomates réduits ou renfoncés, …'
    },

    {
        name: 'menthe',
        category: 'extérieur',
        id: '6uo',
        light: 2,
        water: 2,
        cover: mint,
        price: 4,
        description: 'La menthe est une plante vivace ou annuelle. Son feuillage, semi-persistant, très aromatique l’a rendue incontournable en cuisine. Elle est également utilisée comme plante médicinale. Les fleurs de la menthe sont blanches, roses, jaunes… selon l’espèce. La menthe demande peu d’entretien et sa rusticité en fait une plante facile. Placez-la essentiellement en pot ou en bac et seule car elle se répand rapidement. Associez-la au potager avec d’autres plantes aromatiques !'
    }
]