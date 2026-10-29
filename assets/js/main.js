/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 0);
		});

	// Mobile?
        // (Désactivé pour garder le design transparent sur mobile)
        /*
        if (browser.mobile)
            $body.addClass('is-mobile');
        else {
            breakpoints.on('>medium', function() {
                $body.removeClass('is-mobile');
            });
            breakpoints.on('<=medium', function() {
                $body.addClass('is-mobile');
            });
        }
        */

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 700,
				offset: $header.outerHeight()
			});

	// Back to top.
		var $backToTop = $('#back-to-top');

		function updateBackToTop() {
			$backToTop.toggleClass('is-visible', $window.scrollTop() > 400);
		}

		$window.on('scroll', updateBackToTop);
		updateBackToTop();

		$backToTop.on('click', function() {
			window.scrollTo({
				top: 0,
				behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
			});
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);


/* =========================================
   PORTFOLIO — DOCUMENTAIRES ET BANDES-SON
   ========================================= */

// Informations des six documentaires
const projetsBO = {
    'himalaya': {
        titre: 'L’Himalaya au cœur',
        synopsis: `En 1802, l’institut de la Survey of India lance la « Grande Étude trigonométrique », une entreprise colossale destinée à cartographier avec précision les Indes britanniques. Le monde prend alors conscience de l’immensité de la chaîne himalayenne.

D’août à novembre 2024, avec l’aide de ces cartes historiques, Jérémy Bigé se fraie un passage à pied sur 2 300 km du Cachemire indien au centre du Népal. Son objectif : relier d’une même foulée les différentes cultures himalayennes en empruntant les itinéraires du passé.

Réalisé par Jérémy Bigé.
Parole et chant : Antoine Mercier
Mixage : Mike Martinez (Pigdong La - The Wild Call - The Mountain's Sanctuary).`,
video: 'https://www.youtube.com/embed/eo-aq_1NEA8',
audio: 'https://soundcloud.com/ingrid_tronchon/sets/lhimalaya-au-coeur?si=d6a39b20c7ba4993b0d75bd0271ebcad&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
},

   'far-enough': {
    titre: 'Far Enough',
    synopsis: `De son domicile à Chamonix, dans les Alpes françaises, jusqu’à l’Ama Dablam (6 812 m) au Népal, Jean Rouaux, athlète de 22 ans, s’est lancé dans une odyssée monumentale « low-carbone » à travers le monde, à la seule force de ses jambes.
Le voyage en chiffres :

Distance : 11 500 km à vélo
Dénivelé positif : 80 000 m
Itinéraire : 14 pays traversés
Rythme : ~200 km par jour
⏱Durée : 70 jours d’immersion totale

_______

Réalisé par : Julien Carot
Produit par : L’Endroit
En partenariat avec : Simond
`,


       video: 'https://www.youtube.com/embed/Rdw9vLVqGpU',
       audio: 'https://soundcloud.com/ingrid_tronchon/sets/far-enough?si=c5c0749e22884d03b2ec4acb2d690c15&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
       festivals: [
           'Chamonix Film Festival (Première mondiale)',
           'NZ Mountain Film Festival – Prix Best solo film',
           'F.I.F.A.D – Suisse – Les Diablerets',
           'Ulsan Ulju Mountain',
           'High Five – Prix Eco Friendly',
           'Poprad Horsky – Slovaquie – Prix',
           'Eho Mountain',
           'Torello Mountain Film – Prix Audience Award – Prix Xtrem',
           'Saint Paul de Vence',
           'Gerardmer Adventure Film Festival',
           'Gorniskega Filma – Prix',
           'Pirineos Mountain Film Festival – Prix du Public',
           'Curieux Voyageurs – Prix du Public',
           'Sheffield Adventure Film Festival',
           'Quais du Départ',
           'Trento Film Festival'
       ]
    },

    'mayotte': {
        titre: 'Mayotte — Les échappées des rues',
       
        synopsis: `À Tsoundzou 2, quartier de la capitale mahoraise, des jeunes vivent en bandes dans la rue. Vols, rackets, petits business : ils tentent de survivre grâce à la débrouille. Faute d’alternatives, ils ont parfois eu à naviguer entre pauvreté et délinquance.

         Réalisé par : Séline Soula et Romain Fleury
         Produit par : ZED
         Composition pour JRA STUDIO`,

        image: 'images/photomayottelesechappesdesrues.webp',
        audio: 'https://soundcloud.com/ingrid_tronchon/sets/mayotte-les-echappes-des-rues?si=60f4c944f80e465db36bf14b0f57361f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
    },

    'nature-friche': {
        titre: 'Nature en friche — Occitanie',
        
synopsis: `Abandonnés par les humains, des lieux devenus friches peuvent devenir des "hot-spots" de biodiversité et abriter une faune et une flore insoupçonnées : oiseaux, batraciens, mammifères, plantes et insectes. Là où l'humain ne s’aventure plus, entre ruine et rouille, ces espaces sont petit à petit reconquis par une diversité d'espèces végétales et animales ; toute une chaîne alimentaire. Le réalisateur et biologiste Anthony Binst part à la découverte de ces écosystèmes, guidé par des professionnel·les et bénévoles engagé·es pour la protection du vivant. 

Réalisé par : Anthony Binst
Produit par : Les Films en vrac`
,
         image: 'images/photonatureenfricheoccitanie.webp'
    },

    'permis-avancer': {
        titre: 'Permis d’avancer',
        
        synopsis: `Ils sont adolescents et n'ont pour la plupart jamais voyagé. Pourtant la route va bientôt devenir leur métier. Grâce à leur professeur, ces élèves en CAP conduite routière vont partir dans un road trip de Châteaubriant à El-Menzel au Maroc. Un voyage à la découverte de leur métier et d'un horizon bien plus vaste encore. La réalisatrice Lucie Fuché a été lauréate Graine de doc 2024 pour ce premier film.
        
        Réalisé par : Lucie Fuché
        Produit par : Tournez s'il vous plait`,

        image: 'images/photopermisdavancer.jpg',
        audio: 'https://soundcloud.com/ingrid_tronchon/sets/permis-davancer?si=66389a13662447078da7cb84f3fd13af&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
    },

    'gardiens-eau': {
        titre: 'Les Gardiens de l’eau',
        
        synopsis: `Alors que l’eau se fait de plus en plus rare, des personnes partout dans le monde renouent avec les savoirs ancestraux et développent des techniques innovantes pour préserver cette ressource vitale. Cette série nous emmène à la rencontre de ces anges gardiens de l’eau, engagés sur tous les continents dans la bataille pour l’or bleu.`,
        image: 'images/photogardiensdeau.jpg',
        video: ''
    },

    'sublime': {
        titre: 'Sublime',
        synopsis: `Sublime est un court métrage d'animation : dans une société où la beauté est vénérée comme une divinité, les poupées tentent de s'intégrer.`,
        image: 'images/AfficheSublime.webp',
        audio: 'https://soundcloud.com/ingrid_tronchon/sets/sublime',
        awards: [
            {
                country: 'Spain',
                festival: 'Mundos Digitales International Animation Festival 2025 / A Coruña',
                prize: 'Best Animation Short Film'
            },
            {
                country: 'France',
                festival: 'VIDEOFORMES 2025 / Clermont-Ferrand',
                prize: 'Prix Université Clermont Auvergne des Étudiants'
            },
            {
                country: 'Brazil',
                festival: 'MUMIA Underground World Animation Festival 2025 / Belo Horizonte',
                prize: '2nd prize in the international category'
            }
        ],
        selections: [
            { country: 'France', festivals: [
                'Festival International d’Animation d’Annecy / Annecy',
                'Festival National du Film d’Animation / Rennes',
                'Carrefour du Cinéma d’Animation / Paris',
                'MEME PAS PEUR Festival / Saint-Philippe',
                'VIDEOFORMES / Clermont-Ferrand',
                'Festival Trois Jours Trop Courts / Castres',
                'Festival 1ère Marche / Troyes',
                'Festival FESTIMAJ / Tour',
                'Festival du Premier Court / Pontault-Combault',
                'Fête du cinéma d’animation / Albert'
            ] },
            { country: 'Australia', festivals: [
                'Melbourne International Animation Festival (MIAF) / Melbourne'
            ] },
            { country: 'Croatia', festivals: [
                'ANIMAFEST Zagreb / Zagreb'
            ] },
            { country: 'Poland', festivals: [
                'Grand OFF Festival / Warsaw'
            ] },
            { country: 'USA', festivals: [
                'Seattle International Film Festival (SIFF) / Seattle',
                'Denver Film Festival / Denver',
                'Happy Valley Animation Festival / State College',
                'Anima Cinefest / Hamilton, New York',
                'Tampa Animation Festival / Tampa, Florida',
                'Bisbee Festival of Animation / Bisbee, Arizona'
            ] },
            { country: 'Romania', festivals: [
                'Animest International Animation Film Festival / Bucharest',
                'Animafantasia International Student Animation Film Festival / Iași'
            ] },
            { country: 'Portugal', festivals: [
                'FANTASPORTO / Porto'
            ] },
            { country: 'Netherlands', festivals: [
                'Kaboom Animation Festival / Amsterdam',
                'GO SHORT Film Festival / Nijmegen'
            ] },
            { country: 'Canada', festivals: [
                'SPARK ANIMATION / Vancouver',
                'Festival SPASM / Montreal',
                'Okotoks Film Festival / Okotoks',
                'Festival Anim sur le Lac / Saint-Félicien'
            ] },
            { country: 'Bulgaria', festivals: [
                'IN THE PALACE Short Film Festival / Pernik'
            ] },
            { country: 'Belgium', festivals: [
                'Festival COURTS MAIS TRASH / Brussels'
            ] },
            { country: 'Northern Ireland', festivals: [
                'Foyle Film Festival / Derry'
            ] },
            { country: 'Ireland', festivals: [
                'Animation Dingle Festival / Dingle'
            ] },
            { country: 'Austria', festivals: [
                'VIENNA SHORTS / Vienna'
            ] },
            { country: 'Czech Republic', festivals: [
                'Anifilm Animated Films / Liberec',
                'Opavský Páv Film Festival / Opava',
                'TrikFilm Festival / Ostrava'
            ] },
            { country: 'Slovenia', festivals: [
                'Student Cuts Film Festival / Ljutomer'
            ] },
            { country: 'Spain', festivals: [
                'Mundos Digitales Animation Festival / A Coruña',
                'ANIMAKOM FEST / Bilbao',
                'Animadeba Animation Festival / Deba',
                'CORTOONS Animation Film Festival / Gandia',
                'BaiDeFest Festival / Roses'
            ] },
            { country: 'Brazil', festivals: [
                'Cinefantasy Fantastic Film Festival / São Paulo',
                'Festival de Curtas de Animação Itaicine / Itaiópolis',
                'Festival de Cinema Escolar de Alvorada (FECEA) / Alvorada',
                'MUMIA Underground World Animation Festival / Belo Horizonte'
            ] },
            { country: 'Italy', festivals: [
                'Festival Inventa un Film / Lenola',
                'Sardinia Film Festiva / Sassari'
            ] },
            { country: 'Estonia', festivals: [
                'Animist Tallinn Animation Festival / Tallinn'
            ] },
            { country: 'Albania', festivals: [
                'Tirana Film Festival (TIFF) / Tirana'
            ] },
            { country: 'China', festivals: [
                'World University Animation Awards (WUAA) / Hong Kong'
            ] },
            { country: 'Germany', festivals: [
                'T-Short Animated Film Festival / Karlsruhe',
                'exground filmfest / Wiesbaden',
                'up-and-coming Film Festival / Hannover'
            ] },
            { country: 'Serbia', festivals: [
                'International Short Film Festival - Film Front / Novi Sad'
            ] },
            { country: 'Peru', festivals: [
                'Festival Internacional de Animación Ajayu / Puno'
            ] },
            { country: 'Lithuania', festivals: [
                'TINDIRINDIS International Animation Film Festival / Vilnus'
            ] }
        ]
    }

};

function afficherFestivals(conteneur, liste, festivals) {
    if (!conteneur || !liste) return;

    liste.replaceChildren();
    const festivalsDisponibles = Array.isArray(festivals) && festivals.length > 0;
    conteneur.hidden = !festivalsDisponibles;

    if (!festivalsDisponibles) return;

    festivals.forEach(function(festival) {
        const element = document.createElement('li');
        element.textContent = festival;
        liste.appendChild(element);
    });
}

function afficherPalmares(conteneur, distinctions) {
    if (!conteneur) return;

    conteneur.replaceChildren();
    const awards = distinctions && Array.isArray(distinctions.awards) ? distinctions.awards : [];
    const selections = distinctions && Array.isArray(distinctions.selections) ? distinctions.selections : [];
    conteneur.hidden = awards.length === 0 && selections.length === 0;

    if (conteneur.hidden) return;

    if (awards.length > 0) {
        const awardsSection = document.createElement('section');
        const awardsTitle = document.createElement('h4');
        const awardsList = document.createElement('ul');
        awardsTitle.textContent = `Awards (${awards.length})`;
        awardsList.className = 'project-honors-awards';

        awards.forEach(function(award) {
            const item = document.createElement('li');
            const country = document.createElement('strong');
            const festival = document.createElement('span');
            const prize = document.createElement('span');
            country.textContent = award.country;
            festival.textContent = award.festival;
            prize.textContent = award.prize;
            item.append(country, festival, prize);
            awardsList.appendChild(item);
        });

        awardsSection.append(awardsTitle, awardsList);
        conteneur.appendChild(awardsSection);
    }

    if (selections.length > 0) {
        const selectionsSection = document.createElement('section');
        const selectionsTitle = document.createElement('h4');
        const countriesList = document.createElement('div');
        const selectionCount = selections.reduce(function(total, group) {
            return total + group.festivals.length;
        }, 0);

        selectionsTitle.textContent = `Selections (${selectionCount})`;
        countriesList.className = 'project-honors-countries';

        selections.forEach(function(group) {
            const countryGroup = document.createElement('div');
            const countryTitle = document.createElement('h5');
            const festivalList = document.createElement('ul');
            countryTitle.textContent = group.country;

            group.festivals.forEach(function(festival) {
                const item = document.createElement('li');
                item.textContent = festival;
                festivalList.appendChild(item);
            });

            countryGroup.append(countryTitle, festivalList);
            countriesList.appendChild(countryGroup);
        });

        selectionsSection.append(selectionsTitle, countriesList);
        conteneur.appendChild(selectionsSection);
    }
}

// Ouvrir le panneau lorsqu'on clique sur une affiche
function ouvrirPanneauBO(id) {
    const projet = projetsBO[id];

    if (!projet) return;

    const panneau = document.getElementById('panneau-projet-bo');
    const titre = document.getElementById('panneau-titre');
    const synopsis = document.getElementById('panneau-synopsis');
    const video = document.getElementById('panneau-video');
    const image = document.getElementById('panneau-image');
    const audio = document.getElementById('panneau-soundcloud');
    const aideVideo = document.getElementById('panneau-video-aide');
    const aideAudio = document.getElementById('panneau-audio-aide');
    const festivals = document.getElementById('panneau-festivals');
    const listeFestivals = document.getElementById('panneau-festivals-liste');
    const palmares = document.getElementById('panneau-palmares');

    if (!panneau) return;

    if (titre) titre.textContent = projet.titre || '';
    if (synopsis) synopsis.textContent = projet.synopsis || '';
    afficherFestivals(festivals, listeFestivals, projet.festivals);
    afficherPalmares(palmares, projet);

    
    // Afficher l'affiche du projet
    if (image) {
        image.onload = null;
        image.onerror = null;
        image.removeAttribute('src');
        image.alt = '';
        image.style.display = 'none';

        if (projet.image) {
            image.alt = projet.titre || '';
            image.onload = function () {
                image.style.display = 'block';
            };
            image.onerror = function () {
                console.error('Impossible de charger l’image :', projet.image);
                image.style.display = 'none';
            };
            image.src = projet.image;
        }
    }


    // Bande-annonce YouTube
    if (video) {
        video.src = projet.video || '';
        video.style.display = projet.video ? 'block' : 'none';
    }
    if (aideVideo) aideVideo.style.display = projet.video || projet.image ? 'none' : 'block';

    const playlistUrl = projet.audio || '';
    const playlistValide = /^https:\/\/soundcloud\.com\/[^/?#]+\/sets\/[^/?#]+\/?(?:\?[^#]*)?(?:#.*)?$/i.test(playlistUrl);

    if (audio) {
        audio.hidden = !playlistValide;
        if (playlistValide) {
            audio.src = 'https://w.soundcloud.com/player/?url='
                + encodeURIComponent(playlistUrl)
                + '&color=%23333333&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false';
        } else {
            audio.removeAttribute('src');
        }
    }
    if (aideAudio) aideAudio.hidden = Boolean(playlistValide);

    panneau.style.display = 'block';
    panneau.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


// Fermer le panneau
function fermerPanneauBO() {
    const panneau = document.getElementById('panneau-projet-bo');
    const video = document.getElementById('panneau-video');
    const audio = document.getElementById('panneau-soundcloud');

    if (panneau) panneau.style.display = 'none';
    if (video) video.src = '';
    if (audio) {
        audio.removeAttribute('src');
        audio.hidden = true;
    }

    const carousel = document.querySelector('.poster-carousel-wrapper-outer');
    if (carousel) {
        carousel.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}


// Configuration des genres, sous-genres et liens SoundCloud associés
const playlistsData = {
    'orchestral': {
        subgenres: [
            { name: 'Épique', url: 'https://api.soundcloud.com/playlists/1864504572?secret_token=s-eFHiIDftggK' },
            { name: 'Onirique', url: 'https://api.soundcloud.com/playlists/1867448346?secret_token=s-qPwa8yP4LR2' },
            { name: 'Suspense', url: 'https://api.soundcloud.com/playlists/1864506606?secret_token=s-iqpFkPDdCon' },
            { name: 'Petit Ensemble', url: 'https://api.soundcloud.com/playlists/1864507794?secret_token=s-uSBqgI9gpGI' }
        ]
    },
    'electro': {
        subgenres: [
            { name: 'Électronique', url: 'https://api.soundcloud.com/playlists/1431477247?secret_token=s-EyY0yVuFX1U' },
            { name: 'Ambient', url: 'https://api.soundcloud.com/playlists/1431477142?secret_token=s-8ft4KOQe2T6' },
            { name: 'Suspense', url: 'https://api.soundcloud.com/playlists/1431476917?secret_token=s-tRlJidV28o0' }
        ]
    },
    'acoustique': {
        subgenres: [
            { name: 'Ethno Folk', url: 'https://api.soundcloud.com/playlists/1864498095?secret_token=s-5GlHQqqPzxm' },
            { name: 'Ambient Folk', url: 'https://api.soundcloud.com/playlists/1864499208?secret_token=s-UTFenX2WPhF' },
            { name: 'Piano Solo', url: 'https://api.soundcloud.com/playlists/1864491345?secret_token=s-dZJ3iT9VFA8' },
            { name: 'Guitare Solo', url: 'https://api.soundcloud.com/playlists/1867438686?secret_token=s-2U6ckHceI0R' },
            { name: 'Rock', url: 'https://api.soundcloud.com/playlists/1431476533?secret_token=s-XLsIoJCSTIv' }
        ]
    }
};

// Fonction pour sélectionner un genre principal
function selectGenre(genreKey, element) {
    const genreData = playlistsData[genreKey];
    const subContainer = document.getElementById('sub-genre-selector');
    const playerContainer = document.getElementById('soundcloud-player-container');

    if (!genreData || !subContainer || !playerContainer) return;

    // 1. Activer l'onglet du genre principal
    const mainButtons = document.querySelectorAll('.main-genres .playlist-tab');
    mainButtons.forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');

    // 2. Rendre visibles le sous-menu et le lecteur s'ils étaient cachés
    subContainer.style.display = 'flex';
    playerContainer.style.display = 'block';

    subContainer.innerHTML = ''; // Réinitialiser les sous-genres

    // 3. Générer les boutons des sous-genres
    genreData.subgenres.forEach((sub, index) => {
        const btn = document.createElement('button');
        btn.className = 'playlist-tab' + (index === 0 ? ' active' : '');
        btn.textContent = sub.name;
        btn.onclick = function() {
            changePlaylist(sub.url, this);
        };
        subContainer.appendChild(btn);
    });

    // 4. Charger le 1er sous-genre dans le lecteur SoundCloud
    if (genreData.subgenres.length > 0) {
        changePlaylist(genreData.subgenres[0].url, null);
    }
}

// Fonction pour changer le lien du lecteur SoundCloud et gérer l'état actif
function changePlaylist(url, element) {
    const lecteur = document.getElementById('soundcloud-player');
    if (lecteur) {
        const playerUrl = new URL('https://w.soundcloud.com/player/');
        playerUrl.searchParams.set('visual', 'false');
        playerUrl.searchParams.set('url', url);
        playerUrl.searchParams.set('show_artwork', 'false');
        playerUrl.searchParams.set('hide_related', 'true');
        playerUrl.searchParams.set('show_comments', 'false');
        playerUrl.searchParams.set('show_teaser', 'false');
        lecteur.src = playerUrl.toString();
    }

    if (element) {
        const subButtons = document.querySelectorAll('.sub-genres .playlist-tab');
        subButtons.forEach(btn => btn.classList.remove('active'));
        element.classList.add('active');
    }
}
// Réinitialiser la section des playlists lorsqu'on referme l'accordéon
document.addEventListener('DOMContentLoaded', function() {
    const playlistDetails = document.getElementById('playlist-details');
    
    if (playlistDetails) {
        playlistDetails.addEventListener('toggle', function() {
            // Si l'accordéon vient d'être fermé
            if (!playlistDetails.open) {
                // 1. Cacher le sous-menu et le lecteur
                const subContainer = document.getElementById('sub-genre-selector');
                const playerContainer = document.getElementById('soundcloud-player-container');
                const lecteur = document.getElementById('soundcloud-player');
                
                if (subContainer) {
                    subContainer.style.display = 'none';
                    subContainer.innerHTML = '';
                }
                if (playerContainer) {
                    playerContainer.style.display = 'none';
                }
                if (lecteur) {
                    lecteur.src = '';
                }
                
                // 2. Retirer la classe 'active' de tous les boutons principaux
                const mainButtons = document.querySelectorAll('.main-genres .playlist-tab');
                mainButtons.forEach(btn => btn.classList.remove('active'));
            }
        });
    }

    const projectList = document.querySelector('details.autres-projets:not(.autres-playlists) .credits-list');
    const panel = document.getElementById('credit-project-panel');
    const closeButton = panel && panel.querySelector('.credit-project-close');

    if (!projectList || !panel || !closeButton) return;

    const titleElement = document.getElementById('credit-project-title');
    const imageElement = document.getElementById('credit-project-image');
    const metaElement = document.getElementById('credit-project-meta');
    const synopsisElement = document.getElementById('credit-project-synopsis');
    const festivalsElement = document.getElementById('credit-project-festivals');
    const festivalsListElement = document.getElementById('credit-project-festivals-list');
    const palmaresElement = document.getElementById('credit-project-palmares');
    const playerElement = document.getElementById('credit-project-player');
    const maintenanceElement = document.getElementById('credit-project-maintenance');
    let lastSelectedLink = null;

    function normaliserTitre(titre) {
        return titre
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, ' ')
            .trim();
    }

    function formaterDescription(description) {
        const texte = description.trim();
        const creditMatch = texte.match(/\n[ \t]*(?=(?:Réalisé par|Produit par|En partenariat avec|Composition pour|Distribution)\b)/i);

        if (!creditMatch) return texte;

        const indexCredits = creditMatch.index + creditMatch[0].length;
        const synopsis = texte.slice(0, creditMatch.index).trimEnd();
        const credits = texte.slice(indexCredits).trimStart();

        return synopsis ? `${synopsis}\n\n${credits}` : credits;
    }

    function fermerPanneauCredits() {
        panel.hidden = true;
        playerElement.removeAttribute('src');
        playerElement.hidden = true;
        maintenanceElement.hidden = true;
        if (lastSelectedLink) lastSelectedLink.focus();
    }

    projectList.addEventListener('click', function(event) {
        const link = event.target.closest('a.credit-link');
        if (!link) return;

        event.preventDefault();

        const title = link.querySelector('.credit-heading strong')?.textContent.trim() || '';
        const category = link.querySelector('.credit-category')?.textContent.trim() || '';
        const year = link.querySelector('.credit-year')?.textContent.trim() || '';
        const role = link.querySelector('.credit-role')?.textContent.trim() || '';
        const poster = link.querySelector('.credit-thumb');
        const customSynopsis = link.querySelector('.credit-info')?.dataset.synopsis?.trim();
        const project = Object.values(projetsBO).find(function(item) {
            return normaliserTitre(item.titre) === normaliserTitre(title);
        });

        titleElement.textContent = title;
        metaElement.textContent = [category, year, role].filter(Boolean).join(' · ');
        const description = customSynopsis
            || (project && project.synopsis)
            || 'La description détaillée de ce projet n’est pas encore renseignée.';
        synopsisElement.textContent = formaterDescription(description);
        afficherFestivals(festivalsElement, festivalsListElement, project && project.festivals);
        afficherPalmares(palmaresElement, project);

        imageElement.alt = poster ? poster.alt : '';
        imageElement.onerror = function() {
            console.error('Impossible de charger l’affiche du projet :', imageElement.src);
            imageElement.hidden = true;
        };
        imageElement.hidden = !poster;
        if (poster) imageElement.src = poster.src;

        const playlistUrl = new URL(link.href);
        const playlistValide = playlistUrl.protocol === 'https:'
            && playlistUrl.hostname === 'soundcloud.com'
            && /^\/[^/]+\/(?:sets\/)?[^/]+\/?$/i.test(playlistUrl.pathname);

        playerElement.hidden = !playlistValide;
        maintenanceElement.hidden = playlistValide;
        if (playlistValide) {
            const playerUrl = new URL('https://w.soundcloud.com/player/');
            playerUrl.searchParams.set('visual', 'false');
            playerUrl.searchParams.set('url', playlistUrl.href);
            playerUrl.searchParams.set('show_artwork', 'false');
            playerUrl.searchParams.set('hide_related', 'true');
            playerUrl.searchParams.set('show_comments', 'false');
            playerUrl.searchParams.set('show_teaser', 'false');
            playerElement.src = playerUrl.toString();
        } else {
            playerElement.removeAttribute('src');
        }

        panel.hidden = false;
        lastSelectedLink = link;
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    closeButton.addEventListener('click', fermerPanneauCredits);
});

function genererPoints() {
    const track = document.getElementById('posterTrack');
    const dotsContainer = document.getElementById('carouselDots');
    if (!track || !dotsContainer) return;

    const slide = track.querySelector('.poster-slide');
    if (!slide) return;

    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    const largeurDeplacement = slide.offsetWidth + gap;
    const slidesParEtape = Math.max(1, Math.round((track.clientWidth + gap) / largeurDeplacement));
    const etapes = [];
    const totalSlides = track.children.length;

    for (let index = 0; index < totalSlides; index += slidesParEtape) {
        etapes.push(index);
    }

    if (etapes.length === 0) {
        etapes.push(0);
    }

    dotsContainer.innerHTML = '';
    etapes.forEach((etape, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.dataset.etape = etape;
        dot.onclick = () => allerAEtape(etape);
        dotsContainer.appendChild(dot);
    });
}

function allerAEtape(index) {
    const track = document.getElementById('posterTrack');
    const slide = track && track.querySelector('.poster-slide');
    if (!track || !slide) return;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    const largeurDeplacement = slide.offsetWidth + gap;

    track.scrollTo({
        left: index * largeurDeplacement,
        behavior: 'smooth'
    });
}

function naviguerCarrousel(direction) {
    const track = document.getElementById('posterTrack');
    const slide = track && track.querySelector('.poster-slide');
    if (!track || !slide) return;

    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    const largeurDeplacement = slide.offsetWidth + gap;
    const slidesParEtape = Math.max(1, Math.round((track.clientWidth + gap) / largeurDeplacement));
    const etapeActuelle = Math.round(track.scrollLeft / largeurDeplacement);
    const derniereEtape = Math.max(0, track.children.length - slidesParEtape);
    const prochaineEtape = Math.min(derniereEtape, Math.max(0, etapeActuelle + direction * slidesParEtape));

    allerAEtape(prochaineEtape);
}

function mettreAJourPoints() {
    const track = document.getElementById('posterTrack');
    const slide = track && track.querySelector('.poster-slide');
    if (!track || !slide) return;

    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    const largeurDeplacement = slide.offsetWidth + gap;
    const indexActuel = Math.round(track.scrollLeft / largeurDeplacement);

    const dots = document.querySelectorAll('#carouselDots .dot');
    let dotActif = null;
    let distanceMinimale = Infinity;

    dots.forEach((dot) => {
        const distance = Math.abs(indexActuel - Number(dot.dataset.etape));
        if (distance < distanceMinimale) {
            distanceMinimale = distance;
            dotActif = dot;
        }

        dot.classList.remove('active');
    });

    if (dotActif) dotActif.classList.add('active');
}

window.addEventListener('load', genererPoints);
window.addEventListener('resize', genererPoints);
