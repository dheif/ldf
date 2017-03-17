app.controller('MainController', ['$scope', function ($scope) {

    $scope.players =
        [
            {
                picture: 'Images/players/newtone.jpg',
                username: 'Newtone',
                steamId:'76561197979587333',
                email: '',
                name: 'Jean-Denis Lachance',
                title: '',
                team: '',
                description: 'Description',
                songUrl: 'https://play.google.com/music/m/Tbpnfg2hyayvaby6dzv4kuqnrny?t=Freaks_-_Timmy_Trumpet',
                song: 'Timmy Trumpet - Freaks'
            }
            ,
            {
                picture: 'Images/players/dheif.jpg',
                username: 'dheif',
                steamId:'76561197970524283',
                email: 'sgiroux@gmail.com',
                name: 'Sébastien Giroux',
                title: '',
                team: '',
                description: 'Description',
                songUrl: 'https://play.google.com/music/m/T4dlwqkzpk3eprcrd5ojhaugxh4?t=The_Day_Is_My_Enemy_-_The_Prodigy',
                song: 'Prodigy - The Day Is My Enemy'
            }
            ,
            {
                picture: 'Images/players/tif.jpg',
                username: 'madNomad / slipperysn0ke / tiF',
                steamId:'76561197963613734',
                email: '',
                name: 'Pierre-Luc Thiffeault',
                title: '',
                team: '',
                description: 'Description',
                songUrl: 'https://play.google.com/music/m/Tlwzo2gr6grglgicksybfg5lzxa?t=Hardwired_-_Metallica',
                song: 'Metallica - Hardwired'
            }
            ,
            {
                picture: 'Images/players/chewi.jpg',
                username: 'Chewi / Je_Sappel_Chewy',
                steamId:'76561197960865153',
                email: '',
                name: 'Pascal Thériault',
                title: '',
                team: '',
                description: 'Description',
                songUrl: 'https://play.google.com/music/m/T5dmy3uoa3ycde2tdy7mr3gj4hu?t=We_The_People_-_A_Tribe_Called_Quest',
                song: 'A Tribe Called Quest - We the People'
            },
            {
                picture: 'Images/players/splr.jpg',
                username: 'splr',
                steamId:'76561197969505799',
                email: '',
                name: 'Samuel Côté',
                title: '',
                team: '',
                description: 'Description',
                songUrl: 'https://play.google.com/music/m/T2tmcypjoi6hejtmmtujtskrcbi?t=STARSTRUKK_-_3OH3',
                song: '3OH!3 - STARSTRUKK'
            },
            {
                picture: 'Images/players/the_gab.jpg',
                username: 'The_Gab',
                steamId:'76561197970547273',
                email: '',
                name: 'Gabriel Thériault',
                title: '',
                team: '',
                description: 'Description',
                songUrl: 'https://play.google.com/music/m/Tjxvmwypmkh4jpthnxkvkfiughq?t=Five_Hours_-_Deorro',
                song: 'Deorro - Five Hours'                
            },
            {
                picture: 'Images/players/Nest.jpg',
                username: 'Nest',
                steamId:'76561197970525783',
                email: '',
                name: 'Maxime Rioux',
                title: '',
                team: '',
                description: 'Description'
            },
            {
                picture: 'Images/players/zepooh.jpg',
                username: 'ZePooh',
                steamId:'76561197974271372',
                email: '',
                name: 'Vincent Lanthier',
                title: '',
                team: '',
                description: 'Description'
            },
            {
                picture: 'Images/players/DownyTif.jpg',
                username: 'DownyTif',
                steamId:'76561198023915044',
                email: '',
                name: 'Dany Thiffeault',
                title: '',
                team: '',
                description: 'Description',
                songUrl: 'https://play.google.com/music/m/Tkuabxrrksrb4bsrmoy5cdw4yga?t=13_Voices_-_Sum_41',
                song: 'Sum 41 - 13 Voices'                    
            },
            {
                picture: 'Images/players/Swah.jpg',
                username: 'Swah',
                steamId:'76561197960604930',
                email: '',
                name: 'François Boucher-Genesse',
                title: '',
                team: '',
                description: 'Description'
            },
            //{
            //    picture: 'Images/players/Wysiwyg.jpg',
            //    username: 'Wysiwyg',
            //    steamId:'76561198003363561',
            //    email: '',
            //    name: 'Olivier Bourgeois',
            //    title: '',
            //    team: '',
            //    description: 'Description'
            //},
            //{
            //    picture: 'Images/players/dubois.jpg',
            //    username: 'Dubois',
            //    steamId:'76561197963398734',
            //    email: '',
            //    name: 'Guillaume Dubois',
            //    title: '',
            //    team: '',
            //    description: 'Description'
            //},
            {
                picture: 'Images/players/Ppepsi.jpg',
                username: 'Drunk Specialist / Ppepsi',
                steamId:'76561197992406913',
                email: '',
                name: 'William Côté',
                title: '',
                team: '',
                description: 'Description',
                songUrl: 'https://play.google.com/music/m/Taevxuoxj6p37z5q5p2wq4v2hjq?t=Barre_ca_la_-_Pepe',
                song: 'Pépé - Barre ça là'
            }
            ,
            {
                picture: 'Images/players/Flames.jpg',
                username: 'Flames',
                steamId:'76561198037537585',
                email: '',
                name: 'Joel Landry',
                title: '',
                team: '',
                description: 'Description',
                songUrl: 'https://play.google.com/music/m/T726rxn6ozd3ntqrlfijgxi45ea?t=Faded_-_Alan_Walker',
                song: 'Alan Walker - Faded'
            }
      ]

      $scope.achievements =
      [
      {
          name:'Fountain of Love',
          description:'J\'ai vomi.'
      },
 {
          name:'Free kill',
          description:'J\'me suis endormi pendant que le monde gamait'
      },
 {
          name:'Comme un scout',
          description:'Le plus de disponibillité sur Doodle'
      },
 {
          name:'Farting streak',
          description:'J\'ai inondé la place de pet pendant une heure.'
      },
 {
          name:'Pepe le pew',
          description:'Je pue le plus quand je pète.'
      },
 {
          name:'La grotte',
          description:'J\'ai le rot qui produit le plus de décibels'
      },
 {
          name:'From dusk till dawn',
          description:'J\'ai fait une nuit blanche'
      },
 {
          name:'Pierette lover',
          description:'J\'ai dégusté une grosse poutine de chez Pierette'
      },
 {
          name:'Overload',
          description:'J\'ai tellement pété fort que me suis chier dessus.'
      },
 {
          name:'FEUF fragile',
          description:'J\'ai vomi le premier'
      },
 {
          name:'Dodge',
          description:'J\'me suis pas peter la tête une fois du LAN'
      },
 {
          name:'Deception',
          description:'J\'ai été vaincu dans tous les tournois'
      },
 {
          name:'Handle with care',
          description:'J\'ai cassé une coupe de vin ou une bière'
      },
 {
          name:'Tequila, Heineken',
          description:'Être équipé à la fois d\'une bière et d\'une coupe de vin'
      },
 {
          name:'Douchebag',
          description:'J\'ai pris ma douche durant le lan'
      },
 {
          name:'Chuck Norris',
          description:'Seul encore vivant, J\'ai décimé tout les adversaires de l\'autre équipe'
      },
 {
          name:'Master Guru',
          description:'J\'ai instauré une nouvelle expression que tout le monde abuse durant le lan'
      },
 {
          name:'You don\'t fuck with the Chief',
          description:'Tu calles un verre de fort avant un tournois'
      },
 {
          name:'Sissy Queen',
          description:'J\'ai appeler ma blonde le plus souvent dans le lan'
      },
 {
          name:'Gagagougi',
          description:'J\'ai parlé en bébé au téléphone'
      },
 {
          name:'Mégatron',
          description:'J\'ai beurré la bolle'
      },
 {
          name:'Network beast',
          description:'J\'ai réglé un problème réseau à l\'apparence insurmontable'
      },
 {
          name:'Moi, j\'recycle',
          description:'Chu pogné avec la même réguine que l\'an passé'
      },
 {
          name:'Nice and clean',
          description:'J\'ai formatté mon ordi avant le LAN et tous mes jeux sont installés'
      },
 {
          name:'Rape me',
          description:'J\'ai modifié le facebook d\'un FEUF pendant qui était absent'
      },
 {
          name:'No man\'s land',
          description:'Je suis parti le dernier du LAN'
      },
 {
          name:'Early bird',
          description:'Je suis arrivé le premier au LAN'
      },
 {
          name:'OMG LOL',
          description:'Être le plus frustré du LAN'
      },
 {
          name:'Smoke Bomb',
          description:'Disparaitre comme un ninja pour aller te coucher sans que personne le remarque'
      },
 {
          name:'The last meal',
          description:'J\'me suis fait une solide bouffe qui a fait saliver tout le monde'
      },
 {
          name:'Ron Jeremy',
          description:'J\'ai passé le plus de temps sur des sites de cul'
      },
 {
          name:'CHEST BRAS',
          description:'J\'me suis mis en forme pendant le LAN'
      },
 {
          name:'Petite Nature',
          description:'J\'ai fait une nuit de plus de 6h.'
      },
 {
          name:'Shutdown imminent',
          description:'J\'ai perdu connaissance pendant un bref instant, assez pour tomber a terre pendant que je dance par exemple'
      },
 {
          name:'Shutdown overidden',
          description:'jme suis fait reveiller pis J\'ai recommencé a gamer pour encore plusieurs heures'
      },
 {
          name:'Wise ass fucker',
          description:'J\'trouve un argument difficilement contre-argumentable qui m\'évite d\'acheter un jeu sur la liste des jeux à avoir pour le LAN'
      },
 {
          name:'Shame on me',
          description:'J\'ai pas installé un jeu obligatoire avant d\'arriver au LAN'
      },
 {
          name:'Party crasher',
          description:'J\'ai pas acheté un jeu obligatoire avant d\'arriver au LAN'
      },
 {
          name:'Redemption',
          description:'J\'ai acheté un jeu à plein prix durant le LAN pour me racheter et je l\'ai installé avant que ce soit le temps de jouer sans faire attendre personne'
      },
 {
          name:'Meeeeeeeehhhhh',
          description:'Je voulais jouer à un jeu, mais J\'ai communiqué l\'info par pensée magique en m\'imaginant que tout le monde comprendrait et je réalise 1 jour avant le LAN que le monde m\'avait pas compris'
      },
 {
          name:'That guy',
          description:'J\'ai eu un fuck avec mon ordi, l\'ai physiquement démonté au complet et remonté moins d\'une semaine avant le LAN. Pi là ca marche... je pense'
      },
 {
          name:'On s\'en colisse',
          description:'Pogner un ticket pour aucune osti de raison'
      }
      ]
} ]);