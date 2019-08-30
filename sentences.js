const chalk = require("chalk");

exports.sentences =
    [
        {
            id: 0,
            text: 'Amis de la ligne de commande, bienvenue dans cette aventure interactive. Vous allez vivre une expérience qui va vous rappeller votre enfance. Pour participer, lisez le premier paragraphe, vous devrez faire un choix. Entrez le numéro correspondant à votre choix et appuyez sur [ENTER]. Pour commencer, entrez le chiffre 1'
        },
        {
            id: 1,
            text: 'Tu as toujours rêvé de faire le tour du monde, donc depuis un moment, tu économises et te prépare. Nous sommes le jour avant ton départ et tu te retrouves face à un choix: \n' +
                '\n' +
                '-Checker un dernier coup ta valise (20) \n' +
                '-Profiter une dernière fois de ta baignoire (31) '
        },
        {
            id: 2,
            text: chalk.red("Qu'est-ce que tu fais la ? Sans déconner! Retourne en 1!\u001b[39m")
        },
        {
            id: 3,
            text: chalk.red("Bon... visiblement y'a rien a faire pour toi, Ouste! Retourne en 1\u001b[39m")
        },
        { id: 4, text: 'And the fourth' },
        { id: 5, text: 'Fifth is here too' },
        { id: 6, text: '6' },
        { id: 7, text: '7' },
        {
            id: 8,
            text: "Tu finis par prendre le temps de ranger ton bureau de A à Z mais aucune trace de ton billet. Tu te dis que c'est la fin des haricots, que c'est foutu, tu te mets à déprimer. Tu attrapes la bouteille de whisky dans la cuisine et te sers un verre, et un autre.. et un autre... Retourne en (1)"
        },
        { id: 9, text: '9' },
        { id: 10, text: '10' },
        { id: 11, text: '11' },
        { id: 12, text: '12' },
        {
            id: 13,
            text: "Tu te rends dans le séjour, et tu te souviens que la chaine Hifi n'est plus branchée... un problème de prise électrique... tu as donc deux choix: \n" +
                '-Faire demi-tour et utiliser finalement ton portable (34). \n' +
                '-Aller chercher la rallonge dans la remise et tout brancher(44).'
        },
        {
            id: 14,
            text: chalk.red("Qu'est ce que tu fais la ? Retourne en (1)\u001b[39m")
        },
        {
            id: 15,
            text: "Tu déplies la pochette contenant tout tes documents de voyage et les passes en revue. Carte d'identité, passeport, Billets d'avion.. 1,2,3... IL EN MANQUE UN ! Et comble de malchance, c'est le premier vol que tu dois prendre, avant de faire correspondance pour la suite, tu ne peux te permettre de le rater... \n" +
                '-Chercher du coté de ton bureau(60). \n' +
                '-Chercher dans la chambre(51). '
        },
        { id: 16, text: '' },
        { id: 17, text: '' },
        { id: 18, text: '' },
        { id: 19, text: '' },
        {
            id: 20,
            text: 'Tu te rends dans la chambre, la valise trône fièrement sur le lit. Que viens-tu vérifier ? \n' +
                '-Les documents de voyage(15). \n' +
                "-Le contenu de la trousse d'urgence(26)."
        },
        { id: 21, text: '' },
        { id: 22, text: '' },
        { id: 23, text: '23' },
        { id: 24, text: '' },
        { id: 25, text: '' },
        { id: 26, text: '' },
        { id: 27, text: '' },
        { id: 28, text: '' },
        { id: 29, text: '' },
        { id: 30, text: '' },
        {
            id: 31,
            text: "Tu entres dans la salle de bain, et ouvre le robinet de la baignoire en grand. L'eau s'accumule doucement et tu te dis qu'un peu de musique serait quand même agréable: \n" +
                '\n' +
                '-Tu vas allumer la radio (13). \n' +
                "-T'as la flemme, tu utilises ton portable (34)."
        },
        { id: 32, text: '32' },
        { id: 33, text: '' },
        {
            id: 34,
            text: "Tu poses ton portable sur le bord de la baignoire et lance la musique. Sur le rythme endiablé de 'Jail House Rock' tu te déchaînes..Mais qui peut te stopper ?!? Bah le mur. Complètement possédé, tu as tenté un mouvement inexplicable qui t'as amené a te cogner sévèrement sur le mur. T'es tombé la tête la première dans la baignoire et tu t'es noyé dans ton propre bain. Le cul en l'air.\n" +
                'Retour au (1).'
        },
        { id: 35, text: '' },
        { id: 36, text: '' },
        { id: 37, text: '' },
        { id: 38, text: '' },
        { id: 39, text: '' },
        { id: 40, text: '' },
        { id: 41, text: '' },
        { id: 42, text: '' },
        { id: 43, text: '' },
        {
            id: 44,
            text: "Tu décides d'aller chercher la rallonge et au moment ou tu sors dans ton jardin, tu tombes nez-à-truffe avec l'énorme molosse (un chihuahua croisé caniche) de ton voisin-pas-très-sympa. Celui-ci te menace d'un air mauvais, tous crocs sortis... Tu recules... Tu bascules en arrière et la... Coup du lapin sur ces saloperies de bordures que t'avais prévu d'enlever depuis que t'habites là. C'est à dire une plombe. \n" +
                '\n' +
                "C'est vraiment ballot, y'a plus qu'a recommencer(1)."
        },
        { id: 45, text: "T'es a peu près sur de ne pas l'avoir laissé du coté du bureau parce que tu sais a quel point tu es bordélique. Tu décides donc d'aller chercher ailleurs... En arrivant dans la cuisine, qu'est-ce que tu trouves sur le frigo, accroché avec un aimant ? Ouais, ton billet ! Qu'est ce qui t'es passé par la tête ?!?.." +
                '\n' +
                "-Bon ben vu qu'on est la on va manger un truc, non?(56).\n" +
                "-Plus vite on finit de tout préparer, plus zen on sera.(39)."  },
        { id: 46, text: '' },
        { id: 47, text: '' },
        { id: 48, text: '48' },
        { id: 49, text: '' },
        { id: 50, text: '' },
        {
            id: 51,
            text: "Tu commences à tout retourner, tu te retrouves à genoux sur le sol de ta chambre, pensant qu'il aurait glissé sous le lit ou un meuble. En cherchant de manière un peu trop énergique, tu donnes un coup dans l'énorme étagère sous laquelle tu regardais. Cette fameuse étagère, pleine d'énormes bouquins et de ta collection de minerais pas rares et -QUI PÈSE UNE TONNE- te bascules dessus alors que ta tête étais collée au sol.\n" +
                '\n' +
                " On ne connait pas trop les détails de ton état après ça, mais ce qui est sûr, c'est que tu ne pars pas en voyage le lendemain."
        },
        { id: 52, text: '' },
        { id: 53, text: '' },
        { id: 54, text: '' },
        { id: 55, text: '55' },
        { id: 56, text: "Tu reviens dans ta chambre avec le billet et tu ranges tes affaires. Te voila prêt à partir le lendemain a l'aube. Tu décides de te coucher et de te reposer enfin." },
        { id: 57, text: '' },
        { id: 58, text: '' },
        { id: 59, text: '' },
        {
            id: 60,
            text: "T'as pas rangé ton bureau et c'est bien le bordel là. Il est où ce billet ?!? Tu déplaces tout en espérant voir apparaitre ton billet... \n" +
                '-Prendre le temps de ranger le bureau(8).\n' +
                '-En avoir marre et aller chercher ailleurs(45).'
        },
        { id: 61, text: '' },
        { id: 62, text: '' },
        { id: 63, text: '' },
        { id: 64, text: '64' },
        { id: 65, text: '' },
        { id: 66, text: '' },
        { id: 67, text: '' },
        { id: 68, text: '' },
        { id: 69, text: '' },
        { id: 70, text: '' },
        { id: 71, text: '' },
        { id: 72, text: '72' },
        { id: 73, text: '' },
        { id: 74, text: '' },
        { id: 75, text: '' },
        { id: 76, text: '' },
        { id: 77, text: '' },
        { id: 78, text: '' },
        { id: 79, text: '' },
        { id: 80, text: '' },
        { id: 81, text: '' },
        { id: 82, text: '' },
        { id: 83, text: '' },
        { id: 84, text: '' },
        { id: 85, text: '' },
        { id: 86, text: '' },
        { id: 87, text: '' },
        { id: 88, text: '' },
        { id: 89, text: '' },
        { id: 90, text: '' }
    ]

