// 8 pages villes (activites nautiques a [ville]) — contenu unique verifie, sans WGP, sans distance inventee.
// Genere par src/pages/activites-nautiques/[ville].astro.

export interface VilleFaq { question: string; answer: string; answered: boolean; }
export interface Ville {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  contentHtml: string;
  faq: VilleFaq[];
}

export const villes: Ville[] = [
  {
    slug: 'les-issambres',
    name: 'Les Issambres',
    title: "Activités nautiques aux Issambres — comptoir La Gaillarde -10 %",
    description: "Que faire aux Issambres côté mer ? Kayak, paddle, ski nautique, parachute ascensionnel, bateau sans permis : tout se réserve au comptoir unique de la plage de La Gaillarde, avec 10 % de remise immédiate. Bon offrable, paiement sur place. Tél 06 50 26 94 75.",
    h1: "Activités nautiques aux Issambres — réservez au comptoir de La Gaillarde (-10 %)",
    contentHtml: `<h2>Les Issambres, le port d'attache du Pass Nautique</h2>
<p>Les Issambres, c'est ici que tout commence. Le comptoir Pass Nautique se trouve directement sur le sable, à la plage de <strong>La Gaillarde</strong>. Vous n'avez pas à chercher loin : vous êtes déjà au bon endroit.</p>
<p>Le village est un vrai coin de Var balnéaire. Une suite de petites plages et de criques, des ports de plaisance, une ambiance familiale et calme. On y vient pour se poser, pas pour la cohue. Les Issambres fait partie de la commune de Roquebrune-sur-Argens, entre mer et collines. C'est ce cadre tranquille qui rend le secteur parfait pour se mettre à l'eau, en famille ou entre amis.</p>

<h2>Toutes les activités du réseau, au départ d'ici</h2>
<p>Depuis Les Issambres, vous avez le choix sans bouger de la plage.</p>
<h3>Sur place, à la plage de La Gaillarde</h3>
<ul>
<li><strong>Kayak</strong>, <strong>paddle</strong> et <strong>paddle géant</strong> pour longer les criques à votre rythme</li>
<li><strong>Pédalo</strong> et <strong>trottinettes des mers</strong> pour une sortie détendue</li>
<li><strong>Paddles électriques</strong> et <strong>scooter sous-marin</strong> pour voir la côte autrement</li>
</ul>
<p>Ces activités se prennent en location libre, sur place.</p>
<h3>Côté port des Issambres</h3>
<ul>
<li><strong>Ski nautique</strong>, <strong>wakeboard</strong> et <strong>bouées tractées</strong> pour la dose de sensations</li>
<li><strong>Bateau sans permis</strong> pour explorer les criques en autonomie</li>
<li><strong>Balade en bateau avec skipper</strong> pour se laisser guider</li>
</ul>
<p>Et le reste du réseau de l'Est-Var reste accessible depuis le même comptoir : parachute ascensionnel, baby-ski, parc aquatique géant sur le lac de l'Aréna, et plus encore, jusqu'à Agay comme jusqu'à Pampelonne.</p>

<h2>Comment profiter des 10 % au comptoir de La Gaillarde</h2>
<p>Le principe est simple. Tout se réserve et se paie <strong>sur place</strong>, au comptoir unique de La Gaillarde, aux Issambres. Pas de réservation en ligne. Vous passez, vous choisissez, vous payez.</p>
<p>À chaque passage au comptoir, vous obtenez <strong>10 % de remise immédiate</strong> sur tout le catalogue. Vous repartez avec un bon à utiliser sur la base qui opère l'activité. Ce bon n'est pas figé à l'heure près, et il est <strong>offrable</strong> : idéal comme cadeau.</p>
<p>Une question avant de venir ? Appelez le <strong>06 50 26 94 75</strong>. On vous oriente vers l'activité qui vous va, et vous passez au comptoir de La Gaillarde quand vous voulez.</p>`,
    faq: [
      { question: "Où se trouve le comptoir Pass Nautique aux Issambres ?", answer: "Directement sur le sable, à la plage de La Gaillarde, aux Issambres. C'est le comptoir unique du réseau : c'est ici que vous réservez et payez toutes les activités.", answered: true },
      { question: "Quelles activités puis-je faire à la plage de La Gaillarde ?", answer: "En location libre sur place : kayak, paddle, paddle géant, pédalo, trottinettes des mers, paddles électriques et scooter sous-marin. Côté port des Issambres, on ajoute ski nautique, wakeboard, bouées tractées, bateau sans permis et balade en bateau avec skipper.", answered: true },
      { question: "Comment obtenir les 10 % de remise ?", answer: "En passant au comptoir de La Gaillarde. La remise de 10 % s'applique immédiatement sur tout le catalogue, et vous repartez avec un bon à utiliser sur la base qui opère l'activité.", answered: true },
      { question: "Peut-on réserver en ligne ?", answer: "Non. Tout se réserve et se paie sur place, au comptoir unique de La Gaillarde. Pour toute question, appelez le 06 50 26 94 75.", answered: true },
      { question: "Le bon peut-il être offert en cadeau ?", answer: "Oui. Le bon obtenu au comptoir n'est pas figé à l'heure près et il est offrable : c'est une bonne idée de cadeau pour une activité nautique dans l'Est-Var.", answered: true },
    ],
  },
  {
    slug: 'sainte-maxime',
    name: 'Sainte-Maxime',
    title: "Activités nautiques à Sainte-Maxime | −10 % La Gaillarde",
    description: "Envie d'activités nautiques à Sainte-Maxime ? Ski nautique, wakeboard, parachute ascensionnel, bouées, paddle : tout se réserve au comptoir unique de La Gaillarde (aux Issambres) avec −10 % de remise immédiate. Bon offrable, non daté. Tél 06 50 26 94 75.",
    h1: "Activités nautiques à Sainte-Maxime — réservez au comptoir de La Gaillarde (−10 %)",
    contentHtml: `<h2>Sainte-Maxime, la station familiale du golfe de Saint-Tropez</h2>
<p>Sainte-Maxime tient une place à part sur la côte varoise. Posée sur la rive nord du golfe de Saint-Tropez, elle regarde Saint-Tropez droit dans les yeux, de l'autre côté de la baie. Ici, on vient en famille, souvent depuis des générations. C'est un grand classique des vacances dans le Var.</p>
<p>Sa longue plage de sable donne le ton : baignade tranquille, front de mer vivant, port de plaisance animé et marché qui rythme les matinées. On flâne, on prend son temps, et l'eau du golfe reste à portée de serviette toute la journée. C'est cette ambiance décontractée, tournée vers la mer, qui fait revenir les habitués année après année.</p>

<h2>Quelles activités nautiques depuis Sainte-Maxime</h2>
<p>Le golfe de Saint-Tropez concentre beaucoup de glisse en mer, et le secteur de Sainte-Maxime en profite pleinement. Plusieurs plages du golfe opèrent les grandes sensations : <strong>ski nautique</strong>, <strong>wakeboard</strong>, <strong>bouées tractées</strong> et <strong>parachute ascensionnel</strong> pour voir la baie et la silhouette de Saint-Tropez depuis le ciel.</p>
<p>Pour un moment plus doux, le plan d'eau se prête aussi au <strong>pédalo</strong>, au <strong>kayak</strong>, au <strong>paddle</strong> et au <strong>paddle géant</strong> à faire à plusieurs. Et si vous voulez varier, le catalogue du réseau va bien au-delà : bateau sans permis, balade en bateau avec skipper, trottinettes des mers, scooter sous-marin, baby-ski pour les plus jeunes, et même le parc aquatique géant sur le lac de l'Aréna, à Roquebrune-sur-Argens. De quoi caler une vraie semaine sans jamais deux fois la même sortie.</p>

<h2>Comment profiter des −10 % au comptoir de La Gaillarde</h2>
<p>Tout se réserve et se règle au même endroit : le <strong>comptoir unique de la Base nautique de La Gaillarde</strong>, sur la plage, aux Issambres. Vous passez, vous choisissez vos activités, vous payez sur place. Ce simple passage déclenche <strong>10 % de remise immédiate</strong> sur tout le catalogue du réseau nautique de l'Est-Var, d'Agay à Pampelonne.</p>
<p>Pas de réservation en ligne, pas de compte à créer. Vous repartez avec un <strong>bon</strong> et une facture. Le bon n'est pas daté à l'heure près : vous fixez votre journée comme vous voulez, et il est <strong>offrable</strong> — idéal pour un cadeau ou une surprise de fin de séjour. Chaque activité est ensuite honorée sur la base qui l'opère. Vous pouvez régler plusieurs activités et plusieurs personnes en un seul passage, la remise s'appliquant à chaque ligne. Une question avant de venir ? Le comptoir répond au <strong>06 50 26 94 75</strong>.</p>`,
    faq: [
      { question: "Peut-on réserver des activités nautiques pour Sainte-Maxime en ligne ?", answer: "Non. La réservation se fait uniquement au comptoir de la Base nautique de La Gaillarde, sur la plage des Issambres. Vous passez, vous réglez sur place et vous repartez avec votre bon et votre facture. Ce passage au comptoir donne 10 % de remise immédiate sur tout le catalogue du réseau, d'Agay à Pampelonne. Renseignements au 06 50 26 94 75.", answered: true },
      { question: "Quelles activités nautiques peut-on faire dans le secteur de Sainte-Maxime ?", answer: "Le golfe de Saint-Tropez concentre beaucoup de sensations en mer : ski nautique, wakeboard, bouées tractées et parachute ascensionnel, ainsi que pédalo, kayak, paddle et paddle géant pour un moment plus doux. Le catalogue du réseau propose aussi bateau sans permis, balade avec skipper, trottinettes des mers, scooter sous-marin et le parc aquatique géant. Le tout se réserve au comptoir de La Gaillarde, avec 10 % de remise.", answered: true },
      { question: "Où réserve-t-on pour bénéficier de la remise de 10 % ?", answer: "Au comptoir unique de la Base nautique de La Gaillarde, aux Issambres. C'est ce passage sur place qui déclenche les 10 % de remise immédiate sur l'ensemble du catalogue. Vous pouvez régler plusieurs activités et plusieurs personnes en une seule fois. Le comptoir se trouve directement sur la plage ; pour préparer votre venue, appelez le 06 50 26 94 75.", answered: true },
      { question: "Le bon peut-il être offert et utilisé un autre jour ?", answer: "Oui. Le bon obtenu au comptoir n'est pas daté à l'heure près : vous choisissez votre journée librement, sur la base qui opère l'activité. Il est aussi offrable, ce qui en fait un cadeau pratique pour un anniversaire ou une fin de vacances. La remise de 10 % s'applique sur tout le catalogue du réseau, d'Agay à Pampelonne.", answered: true },
    ],
  },
  {
    slug: 'roquebrune-sur-argens',
    name: 'Roquebrune-sur-Argens',
    title: "Activités nautiques à Roquebrune-sur-Argens | -10 % La Gaillarde",
    description: "Que faire côté nautique à Roquebrune-sur-Argens ? Le parc aquatique géant du lac de l'Aréna et toutes les activités du réseau. Réservez au comptoir de La Gaillarde : -10 %.",
    h1: "Activités nautiques à Roquebrune-sur-Argens — réservez au comptoir de La Gaillarde (-10 %)",
    contentHtml: `<h2>Roquebrune-sur-Argens, la commune au grand rocher rouge</h2>
<p>On la reconnaît de loin. Son grand rocher rouge domine la plaine de l'Argens, au cœur de l'Est-Var. C'est une commune à deux visages : le village provençal et son massif d'un côté, le bord de mer et les plages de sable des Issambres de l'autre. Une station familiale, calme, où l'on vient passer la journée en plein air.</p>
<p>Et surtout, c'est ici que bat le cœur du réseau nautique. Le produit phare de tout le catalogue se trouve sur le lac de l'Aréna, à Roquebrune-sur-Argens.</p>

<h2>Quelles activités nautiques depuis Roquebrune-sur-Argens ?</h2>
<p>Le grand rendez-vous, c'est le <strong>parc aquatique géant du lac de l'Aréna</strong>. Un immense terrain de jeux gonflables posé sur l'eau : on saute, on glisse, on grimpe, on tombe. Plusieurs parcours de niveaux différents, une tour de saut de 12 m dès 8 ans, un espace pensé pour les enfants de 2 à 8 ans, un accrobranche, une tyrolienne géante et des trampolines — avec même un parcours accessible dès 2 ans.</p>
<p>Envie de plus calme ? Le lac propose aussi des pédalos, des kayaks et des paddles. Tout est prévu pour rester la journée entière : restauration ouverte 7j/7, tables de pique-nique, vestiaires, casiers et un <strong>grand parking gratuit</strong>.</p>
<p>Depuis le comptoir, vous accédez aussi au reste du réseau, d'Agay à Pampelonne : parachute ascensionnel, ski nautique, wakeboard, baby-ski, bouées tractées, bateau sans permis, balade avec skipper, paddle géant, trottinettes des mers et scooter sous-marin.</p>

<h2>Comment profiter des -10 % au comptoir de La Gaillarde</h2>
<p>Un seul point pour tout réserver et tout payer : le <strong>comptoir de La Gaillarde</strong>, sur la plage, aux Issambres — sur la commune même de Roquebrune-sur-Argens. C'est là que se réserve l'intégralité du catalogue, parc aquatique de l'Aréna compris.</p>
<p>Passez au comptoir. Vous obtenez <strong>10 % de remise immédiate</strong> sur tout le catalogue. Aucune réservation en ligne. Vous repartez avec un bon et une facture. Le bon n'est pas daté à l'heure près : vous l'utilisez plus tard, directement sur la base qui opère l'activité. Il est offrable — parfait pour faire plaisir.</p>

<h2>Sur place à Roquebrune-sur-Argens, en dehors des horaires du comptoir</h2>
<p>Si vous logez à Roquebrune-sur-Argens ou près du lac de l'Aréna, un rendez-vous d'achat est aussi possible directement sur place, <strong>tôt le matin (7h30-8h30)</strong> ou <strong>en soirée après 19h</strong>, en dehors des horaires du comptoir de La Gaillarde. Ce rendez-vous se prend uniquement par téléphone.</p>

<p>Une question avant de venir ? Appelez le <strong>06 50 26 94 75</strong>.</p>`,
    faq: [
      { question: "Quelle activité nautique faire à Roquebrune-sur-Argens ?", answer: "Le grand rendez-vous est le parc aquatique géant du lac de l'Aréna : jeux gonflables, tour de saut de 12 m dès 8 ans, espace enfants de 2 à 8 ans, accrobranche, tyrolienne, trampolines, ainsi que pédalos, kayaks et paddles. Tout se réserve au comptoir de La Gaillarde, aux Issambres, avec 10 % de remise.", answered: true },
      { question: "Où réserve-t-on les activités de Roquebrune-sur-Argens ?", answer: "Au comptoir de La Gaillarde, sur la plage, aux Issambres, sur la commune de Roquebrune-sur-Argens. C'est le point unique de réservation et de paiement du réseau, d'Agay à Pampelonne. Vous y obtenez 10 % de remise immédiate, puis vous vous rendez sur la base avec votre bon.", answered: true },
      { question: "Comment obtenir les 10 % de remise ?", answer: "Passez au comptoir de La Gaillarde. La remise de 10 % s'applique immédiatement sur tout le catalogue, parc aquatique de l'Aréna inclus. Il n'y a aucune réservation en ligne.", answered: true },
      { question: "À partir de quel âge peut-on profiter du parc aquatique ?", answer: "Il y a un espace pour les 2 à 8 ans, une tour de saut de 12 m accessible dès 8 ans et un parcours accessible dès 2 ans. Pour l'âge ou la taille minimum précis de chaque structure, confirmez au comptoir de La Gaillarde : appelez le 06 50 26 94 75.", answered: true },
      { question: "Le bon peut-il être offert ?", answer: "Oui. Le bon remis au comptoir est offrable et n'est pas daté à l'heure près. Vous, ou la personne à qui vous l'offrez, l'utilisez plus tard sur la base qui opère l'activité.", answered: true },
      { question: "Y a-t-il un parking sur place au lac de l'Aréna ?", answer: "Oui, un grand parking gratuit est disponible sur place, à Roquebrune-sur-Argens, avec restauration 7j/7, tables de pique-nique, vestiaires et casiers.", answered: true },
      { question: "Peut-on acheter sur place à Roquebrune-sur-Argens sans passer par le comptoir de La Gaillarde ?", answer: "Oui, sur rendez-vous. En dehors des horaires du comptoir de La Gaillarde, un rendez-vous d'achat est possible directement à Roquebrune-sur-Argens, tôt le matin (7h30-8h30) ou après 19h le soir. Ce rendez-vous se prend uniquement par téléphone, au 06 50 26 94 75.", answered: true },
    ],
  },
  {
    slug: 'frejus',
    name: 'Fréjus',
    title: "Activités nautiques à Fréjus — comptoir La Gaillarde -10 %",
    description: "Envie d'activités nautiques à Fréjus ? Réservez ski nautique, wakeboard, parachute ascensionnel et le parc aquatique géant au comptoir unique de La Gaillarde, aux Issambres. -10 % immédiat, bon offrable non daté.",
    h1: "Activités nautiques à Fréjus — réservez au comptoir de La Gaillarde (-10 %)",
    contentHtml: `<h2>Fréjus, la porte romaine de l'Est-Var</h2>
<p>Fréjus ne ressemble à aucune autre ville de la côte. Ici, on marche dans deux mille ans d'histoire. Les arènes romaines, le port antique, les vieilles pierres qui racontent la Rome de Provence. C'est une ville d'art et d'histoire, classée, vivante. Et juste devant, la mer. De grandes plages de sable qui s'étirent au soleil, faciles, familiales.</p>
<p>C'est cette double identité qui rend Fréjus unique. Le matin, on visite le patrimoine. L'après-midi, on file sur l'eau. La ville est la porte d'entrée ouest de l'Est-Var : de là, tout le littoral des activités nautiques s'ouvre à vous.</p>

<h2>Ce que le réseau propose depuis Fréjus</h2>
<p>Le secteur de Fréjus donne accès à deux univers. En mer, les sensations : le <strong>ski nautique</strong>, le <strong>wakeboard</strong>, les <strong>bouées tractées</strong> pour rire en famille, le <strong>parachute ascensionnel</strong> pour voir la côte d'en haut. Et pour un rythme plus doux, le <strong>kayak</strong>, le <strong>paddle</strong> et le <strong>pédalo</strong>, à son propre tempo, au ras de l'eau.</p>
<p>Tout proche, à Roquebrune-sur-Argens, un autre terrain de jeu vous attend : le <strong>parc aquatique géant du lac de l'Aréna</strong>. Des structures gonflables sur l'eau, un vrai parcours de sauts, de glissades et de plongeons. L'idéal quand on vient en famille ou entre amis et qu'on veut une grosse dose de fun sans permis ni technique.</p>
<p>Depuis Fréjus, vous avez donc le choix : l'adrénaline de la mer ou le grand jeu d'eau du lac. Parfois les deux, sur un même séjour.</p>

<h2>Comment profiter des -10 % au comptoir de La Gaillarde</h2>
<p>Tout se réserve à un seul endroit : le <strong>comptoir unique de Pass Nautique Var</strong>, sur la plage de la Base de La Gaillarde, aux Issambres. Pas de réservation en ligne, pas de compte à créer. On passe, on choisit, on paie sur place.</p>
<p>Et au comptoir, vous gagnez <strong>10 % de remise immédiate</strong> sur tout le catalogue du réseau. Vous repartez avec un <strong>bon à utiliser sur la base qui opère votre activité</strong>. Ce bon n'est pas figé à l'heure près : vous choisissez votre créneau ensuite. Il est aussi <strong>offrable</strong> — un beau cadeau à glisser à quelqu'un qui aime la mer.</p>
<p>Une question sur une activité, une envie précise ? Appelez le <strong>06 50 26 94 75</strong>. On vous oriente vers ce qui vous correspond, et on vous attend au comptoir de La Gaillarde pour bloquer votre remise.</p>`,
    faq: [
      { question: "Où réserver mes activités nautiques quand je suis à Fréjus ?", answer: "Toutes les activités du réseau se réservent au comptoir unique de Pass Nautique Var, sur la plage de la Base de La Gaillarde, aux Issambres. C'est le seul point de réservation, et il donne droit à 10 % de remise immédiate sur tout le catalogue.", answered: true },
      { question: "Quelles activités puis-je faire dans le secteur de Fréjus ?", answer: "En mer : ski nautique, wakeboard, bouées tractées, parachute ascensionnel, kayak, paddle et pédalo. Tout proche, à Roquebrune-sur-Argens, le parc aquatique géant du lac de l'Aréna avec ses structures gonflables sur l'eau.", answered: true },
      { question: "Peut-on réserver en ligne ?", answer: "Non. La réservation et le paiement se font sur place, au comptoir de La Gaillarde. C'est justement ce passage au comptoir qui déclenche les 10 % de remise sur toutes les activités.", answered: true },
      { question: "Le bon a-t-il une date et une heure fixes ?", answer: "Non. Vous repartez avec un bon à utiliser sur la base qui opère votre activité, sans horaire imposé à l'avance. Il est aussi offrable : c'est une idée de cadeau pour un proche qui aime la mer.", answered: true },
      { question: "Comment avoir un renseignement avant de venir ?", answer: "Appelez le 06 50 26 94 75. On vous oriente vers l'activité qui vous convient, puis rendez-vous au comptoir de La Gaillarde, aux Issambres, pour réserver et bénéficier des 10 %.", answered: true },
    ],
  },
  {
    slug: 'saint-raphael',
    name: 'Saint-Raphaël',
    title: "Activités nautiques à Saint-Raphaël : -10 % au comptoir La Gaillarde",
    description: "Envie de sensations en mer à Saint-Raphaël ? Réservez toutes les activités nautiques de l'Est-Var au comptoir unique de la Base de La Gaillarde, aux Issambres, avec 10 % de remise immédiate et un bon offrable.",
    h1: "Activités nautiques à Saint-Raphaël — réservez au comptoir de La Gaillarde (-10 %)",
    contentHtml: `<h2>Saint-Raphaël, la grande station entre mer et Estérel</h2>
<p>Saint-Raphaël, c'est l'une des grandes stations de la Côte d'Azur varoise. Ici, la mer rencontre le massif de l'Estérel et ses roches rouges. Des ports animés, un bord de mer vivant, des criques de porphyre à deux pas, et Fréjus et Agay pour voisines. On vient à Saint-Raphaël pour la plage de sable, l'ambiance familiale et le grand air. Mais surtout, on y vient pour l'eau.</p>
<p>Parce qu'une fois sur place, une question revient toujours : <strong>quoi faire côté nautique ?</strong> La réponse tient en un lieu : le comptoir unique de la Base de La Gaillarde, aux Issambres.</p>

<h2>Toutes les activités du réseau, depuis Saint-Raphaël</h2>
<p>Le plan d'eau de l'Est-Var, c'est un terrain de jeu qui va d'Agay à Pampelonne. Depuis Saint-Raphaël, vous profitez de tout le catalogue du réseau :</p>
<ul>
<li><strong>Sensations en mer</strong> : parachute ascensionnel, ski nautique, wakeboard, baby-ski, bouées tractées, trottinettes des mers, scooter sous-marin.</li>
<li><strong>À votre rythme</strong> : bateau sans permis, balade en bateau avec skipper, kayak, paddle, paddle géant, pédalo.</li>
<li><strong>En famille</strong> : le parc aquatique géant du lac de l'Aréna, à Roquebrune-sur-Argens, tout près, pour un grand moment avec les enfants.</li>
</ul>
<p>Face au bleu de la Méditerranée et aux reflets rouges de l'Estérel, le décor de Saint-Raphaël donne une saveur particulière à chaque sortie.</p>

<h2>Comment profiter des -10 % au comptoir de La Gaillarde</h2>
<p>Le principe est simple, et il n'y a pas de réservation en ligne. Tout passe par le comptoir unique installé sur la plage de la Base de La Gaillarde, aux Issambres.</p>
<p>Vous venez au comptoir, vous choisissez votre activité, vous réservez et payez sur place. En passant par le comptoir, vous obtenez <strong>10 % de remise immédiate sur tout le catalogue</strong>. Vous repartez avec un bon à utiliser sur la base qui opère l'activité.</p>
<p>Ce bon n'est pas figé à l'heure près : vous choisissez votre créneau ensuite. Et comme il est <strong>offrable</strong>, c'est aussi une belle idée cadeau pour un proche en vacances à Saint-Raphaël.</p>
<p>Une question, un conseil sur l'activité qui vous conviendra le mieux ? Appelez le <strong>06 50 26 94 75</strong>. On vous oriente, et on vous attend au comptoir de La Gaillarde.</p>`,
    faq: [
      { question: "Où réserver les activités nautiques quand on séjourne à Saint-Raphaël ?", answer: "Toutes les activités se réservent au comptoir unique de la Base de La Gaillarde, aux Issambres. Il n'y a pas de réservation en ligne : vous venez sur place, vous choisissez, et vous repartez avec votre bon.", answered: true },
      { question: "Y a-t-il une remise sur les activités ?", answer: "Oui. En réservant directement au comptoir de La Gaillarde, vous bénéficiez de 10 % de remise immédiate sur tout le catalogue du réseau.", answered: true },
      { question: "Quelles activités nautiques puis-je faire depuis Saint-Raphaël ?", answer: "Parachute ascensionnel, ski nautique, wakeboard, baby-ski, bouées tractées, bateau sans permis, balade avec skipper, kayak, paddle, paddle géant, pédalo, trottinettes des mers, scooter sous-marin, et le parc aquatique géant du lac de l'Aréna à Roquebrune-sur-Argens.", answered: true },
      { question: "Le bon d'activité peut-il être offert en cadeau ?", answer: "Oui. Le bon obtenu au comptoir est offrable et n'est pas figé à l'heure près : le créneau se choisit ensuite. C'est une idée cadeau simple pour un proche en vacances à Saint-Raphaël.", answered: true },
      { question: "Comment avoir un conseil avant de réserver ?", answer: "Appelez le 06 50 26 94 75. On vous oriente vers l'activité la plus adaptée, puis vous finalisez au comptoir de La Gaillarde avec vos 10 % de remise.", answered: true },
    ],
  },
  {
    slug: 'agay',
    name: 'Agay',
    title: "Activités nautiques à Agay : -10 % au comptoir La Gaillarde",
    description: "Envie d'activités nautiques à Agay ? Bateau sans permis, balade en mer, parc aquatique géant : tout se réserve au comptoir unique de La Gaillarde aux Issambres, avec 10 % de remise immédiate et un bon offrable.",
    h1: "Activités nautiques à Agay — réservez au comptoir de La Gaillarde (-10 %)",
    contentHtml: `<h2>Agay, la baie rouge de l'Estérel</h2>
<p>Agay, c'est une baie abritée, blottie au pied du massif de l'Estérel, sur la commune de Saint-Raphaël. Ici la roche est rouge, l'eau est claire, et le cadre reste avant tout nature. Une station familiale où la mer se vit simplement, sans artifice.</p>
<p>C'est justement ce décor qui donne envie de mettre le nez sur l'eau. Pas besoin d'un grand programme : une balade, un bateau, un plongeon dans le bleu et la journée prend une autre couleur. Agay se prête à ça, tranquillement, en famille comme entre amis.</p>

<h3>Quelles activités du réseau depuis Agay</h3>
<p>Le réseau nautique de l'Est-Var couvre tout le littoral, d'Agay à Pampelonne. Depuis ce secteur, deux envies reviennent souvent.</p>
<ul>
<li><strong>Le bateau sans permis</strong> : vous prenez la barre, vous longez la côte rouge de l'Estérel à votre rythme. Liberté totale, aucun brevet requis.</li>
<li><strong>La balade en bateau avec skipper</strong> : vous vous laissez guider, vous profitez du paysage sans rien piloter. Idéal pour découvrir les criques et l'eau claire de la baie.</li>
</ul>
<p>Et si vous voulez pousser plus loin, tout le catalogue du réseau reste ouvert : parachute ascensionnel, ski nautique, wakeboard, baby-ski, bouées tractées, kayak, paddle, paddle géant, pédalo, trottinettes des mers, scooter sous-marin. Pour les familles qui veulent une grosse journée sensations, le <strong>parc aquatique géant du lac de l'Aréna</strong>, à Roquebrune-sur-Argens, complète parfaitement le séjour non loin.</p>

<h3>Comment profiter des -10 % au comptoir de La Gaillarde</h3>
<p>Le principe est simple, et c'est ce qui rend Pass Nautique Var différent. Il n'y a <strong>aucune réservation en ligne</strong>. Tout se passe à un seul endroit : le <strong>comptoir unique de la Base de La Gaillarde, aux Issambres</strong>, directement sur la plage.</p>
<p>Vous passez au comptoir, vous choisissez votre activité parmi tout le catalogue du réseau, et vous réservez sur place. Le simple fait de passer par le comptoir vous donne <strong>10 % de remise immédiate</strong> sur tout le catalogue. Pas de code, pas de condition compliquée : la remise est appliquée au comptoir, point.</p>
<p>Vous repartez avec un <strong>bon à utiliser sur la base qui opère l'activité</strong>. Ce bon n'est pas figé à l'heure près, et il est <strong>offrable</strong> : parfait pour un cadeau ou pour caler la date selon la météo et vos envies. Une seule adresse, une seule visite, et tout le nautique de l'Est-Var devient accessible, moins cher.</p>
<p>Une question avant de venir ? Appelez le <strong>06 50 26 94 75</strong>.</p>`,
    faq: [
      { question: "Peut-on réserver des activités nautiques pour Agay directement en ligne ?", answer: "Non. Toutes les activités du réseau se réservent et se paient sur place, au comptoir unique de la Base de La Gaillarde, aux Issambres. Passer par le comptoir vous donne 10 % de remise immédiate sur tout le catalogue.", answered: true },
      { question: "Quelles activités nautiques faire au départ du secteur d'Agay ?", answer: "Le bateau sans permis et la balade en bateau avec skipper sont idéaux pour longer la côte rouge de l'Estérel. Tout le reste du catalogue du réseau reste accessible, ainsi que le parc aquatique géant du lac de l'Aréna à Roquebrune-sur-Argens non loin.", answered: true },
      { question: "Comment obtenir les 10 % de remise ?", answer: "La remise de 10 % est appliquée automatiquement dès que vous réservez au comptoir de La Gaillarde, aux Issambres. Aucun code ni condition compliquée : vous repartez avec un bon à utiliser sur la base qui opère l'activité.", answered: true },
      { question: "Le bon est-il offrable et peut-on choisir la date plus tard ?", answer: "Oui. Le bon remis au comptoir est offrable, idéal pour un cadeau. Il n'est pas figé à l'heure près, ce qui vous laisse caler la date selon la météo et vos envies.", answered: true },
      { question: "Où se trouve le comptoir et comment le contacter ?", answer: "Le comptoir unique est sur la plage de la Base de La Gaillarde, aux Issambres. Pour toute question, appelez le 06 50 26 94 75.", answered: true },
    ],
  },
  {
    slug: 'saint-aygulf',
    name: 'Saint-Aygulf',
    title: "Activités nautiques à Saint-Aygulf — comptoir La Gaillarde -10 %",
    description: "Quoi faire côté mer à Saint-Aygulf : parc aquatique, parachute ascensionnel, ski nautique, bouées, kayak, paddle. Tout se réserve au comptoir unique de La Gaillarde aux Issambres, avec 10 % de remise et un bon offrable.",
    h1: "Activités nautiques à Saint-Aygulf — réservez au comptoir de La Gaillarde (-10 %)",
    contentHtml: `<h2>Saint-Aygulf, la station familiale entre Fréjus et Les Issambres</h2>
<p>Saint-Aygulf a un caractère bien à elle. Coincée entre Fréjus et Les Issambres, la station alterne longues plages de sable et petites criques discrètes. L'ambiance y est tranquille, posée, très appréciée des familles qui reviennent chaque été. On vient ici pour la douceur de vivre, la baignade facile et des journées qui ne se pressent pas.</p>
<p>C'est justement ce rythme calme qui rend le nautique aussi agréable depuis Saint-Aygulf. Pas besoin de tout organiser à l'avance. On profite de la plage le matin, on décide de l'activité selon l'envie du jour, et on passe au comptoir pour caler tout ça.</p>

<h2>Quelles activités du réseau depuis Saint-Aygulf</h2>
<p>Depuis ce secteur, vous avez tout le catalogue du réseau nautique de l'Est-Var à portée. Pour les familles, le parc aquatique géant du lac de l'Aréna, à Roquebrune-sur-Argens, est une valeur sûre : trampolines, toboggans et jeux gonflables sur l'eau, de quoi occuper petits et grands.</p>
<p>Côté sensations, le catalogue couvre le parachute ascensionnel pour prendre de la hauteur au-dessus de la baie, le ski nautique, le wakeboard et les bouées tractées. Pour un moment plus doux, il y a le kayak, le paddle, le paddle géant et le pédalo, parfaits pour explorer les criques à son rythme. S'ajoutent aussi la balade en bateau avec skipper, le bateau sans permis, les trottinettes des mers et le scooter sous-marin.</p>

<h2>Comment profiter des -10 % au comptoir de La Gaillarde</h2>
<p>Tout se réserve et se paie au même endroit : le comptoir unique de la Base de La Gaillarde, sur la plage, aux Issambres. Il n'y a pas de réservation en ligne, et c'est voulu. Vous passez sur place, on vous explique chaque activité, on vous conseille selon l'âge et l'envie, et vous repartez avec votre bon.</p>
<p>Le passage au comptoir donne <strong>10 % de remise immédiate sur tout le catalogue</strong>. Le bon n'est pas figé à l'heure près : vous choisissez votre créneau ensuite, et il est offrable, idéal pour un cadeau. Vous l'utilisez directement sur la base qui opère l'activité, quelque part entre Agay et Pampelonne.</p>
<p>Une question avant de venir, ou envie de préparer votre journée ? Appelez le <strong>06 50 26 94 75</strong>. Depuis Saint-Aygulf, le réflexe est simple : un seul comptoir, tout le réseau, et 10 % de moins.</p>`,
    faq: [
      { question: "Où réserver une activité nautique quand on est à Saint-Aygulf ?", answer: "Au comptoir unique de la Base de La Gaillarde, sur la plage, aux Issambres. Tout le catalogue du réseau nautique de l'Est-Var s'y réserve et s'y paie sur place, avec 10 % de remise immédiate. Il n'y a pas de réservation en ligne.", answered: true },
      { question: "Quelles activités nautiques peut-on faire près de Saint-Aygulf ?", answer: "Tout le catalogue est à portée : parc aquatique géant du lac de l'Aréna, parachute ascensionnel, ski nautique, wakeboard, bouées tractées, kayak, paddle, paddle géant, pédalo, bateau sans permis, balade avec skipper, trottinettes des mers et scooter sous-marin.", answered: true },
      { question: "Comment obtenir les 10 % de remise ?", answer: "La remise de 10 % est automatique dès que vous passez au comptoir de La Gaillarde aux Issambres. Vous repartez avec un bon à utiliser sur la base qui opère l'activité choisie.", answered: true },
      { question: "Le bon d'activité est-il offrable ?", answer: "Oui. Le bon n'est pas daté à l'heure près : vous choisissez votre créneau ensuite. Il est parfaitement offrable, ce qui en fait une bonne idée de cadeau.", answered: true },
      { question: "Y a-t-il des activités adaptées aux familles à Saint-Aygulf ?", answer: "Oui. Saint-Aygulf est une station très familiale, et le réseau propose notamment le parc aquatique géant du lac de l'Aréna, le kayak, le paddle et le pédalo, faciles à partager en famille. Le comptoir vous conseille selon les envies de chacun.", answered: true },
      { question: "Comment contacter Pass Nautique Var ?", answer: "Par téléphone au 06 50 26 94 75 pour préparer votre journée ou poser vos questions avant de passer au comptoir de La Gaillarde.", answered: true },
    ],
  },
  {
    slug: 'ramatuelle-pampelonne',
    name: 'Ramatuelle (Pampelonne)',
    title: "Activités nautiques Ramatuelle Pampelonne : -10 % La Gaillarde",
    description: "Quoi faire sur l'eau à Ramatuelle et la plage de Pampelonne : paddle, kayak, scooter sous-marin, surf. Tout se réserve au comptoir unique de La Gaillarde (Les Issambres) avec -10 %.",
    h1: "Activités nautiques à Ramatuelle et la plage de Pampelonne — réservez au comptoir de La Gaillarde (-10 %)",
    contentHtml: `<h2>Ramatuelle et Pampelonne, le sable mythique du golfe de Saint-Tropez</h2>
<p>Au sud du golfe de Saint-Tropez, Ramatuelle veille sur l'une des plages les plus célèbres de la Côte d'Azur : Pampelonne. Une longue étendue de sable, une eau claire, un horizon dégagé. Ici, on vient pour la mer. Et la mer, à Pampelonne, ce n'est pas juste bronzer : c'est aussi glisser, pagayer et plonger le regard sous la surface.</p>
<p>C'est exactement ce que propose le réseau nautique de l'Est-Var, qui couvre le littoral d'Agay jusqu'à Pampelonne. Une base du réseau opère directement sur ce secteur mythique, au ras du sable.</p>

<h3>Ce que vous pouvez faire sur l'eau à Pampelonne</h3>
<p>Sur ce secteur, l'ambiance est douce et contemplative, taillée pour profiter de l'eau turquoise. Le catalogue lié à Pampelonne comprend :</p>
<ul>
<li><strong>Paddle</strong> et <strong>paddle géant</strong> pour glisser en groupe ou en solo au petit matin</li>
<li><strong>Paddles transparents</strong> : vous pagayez au-dessus d'un fond visible, magique quand l'eau est claire</li>
<li><strong>Kayak</strong> pour longer la côte à votre rythme</li>
<li><strong>Surf</strong> quand les conditions se lèvent</li>
<li><strong>Scooter sous-marin</strong> pour explorer sous la surface</li>
<li><strong>Trottinettes électriques</strong> pour rejoindre l'eau et rayonner sur le secteur</li>
</ul>
<p>Et si vous cherchez plus de sensations, tout le reste du réseau reste accessible : parachute ascensionnel, ski nautique, wakeboard, bouées tractées, bateau sans permis, balade avec skipper, parc aquatique géant. Un seul point d'entrée pour tout ça.</p>

<h3>Le comptoir unique de La Gaillarde : -10 % sur tout</h3>
<p>Le principe est simple et sans piège. Il n'y a <strong>pas de réservation en ligne</strong>. Tout se réserve et se paie <strong>sur place, au comptoir unique de la Base de La Gaillarde, aux Issambres</strong>.</p>
<p>Ce passage au comptoir vous donne <strong>10 % de remise immédiate</strong> sur l'ensemble du catalogue du réseau, activités de Pampelonne comprises. Vous repartez avec un <strong>bon</strong> à présenter sur la base qui opère votre activité. Ce bon est <strong>offrable</strong> et n'est <strong>pas figé à l'heure près</strong> : idéal pour un cadeau ou pour caler votre sortie selon la météo et vos envies.</p>
<p>Un doute sur une activité, une envie de conseil avant de venir ? Appelez le <strong>06 50 26 94 75</strong>. On vous oriente vers ce qui colle à votre journée, votre groupe et le secteur de Pampelonne.</p>`,
    faq: [
      { question: "Quelles activités nautiques peut-on faire à Pampelonne (Ramatuelle) ?", answer: "Sur le secteur de Pampelonne, une base du réseau propose paddle, paddle géant, paddles transparents, kayak, surf, scooter sous-marin et trottinettes électriques. Le reste du catalogue du réseau (parachute ascensionnel, ski nautique, bouées tractées, bateau sans permis, balade avec skipper, parc aquatique géant) reste aussi accessible via le même comptoir.", answered: true },
      { question: "Comment réserver une activité nautique à Ramatuelle ou Pampelonne ?", answer: "Il n'y a pas de réservation en ligne. Tout se réserve et se paie sur place, au comptoir unique de la Base de La Gaillarde, aux Issambres. Vous y repartez avec un bon à présenter sur la base qui opère votre activité.", answered: true },
      { question: "Comment obtenir les 10 % de remise ?", answer: "La remise de 10 % est immédiate et s'applique sur tout le catalogue du réseau dès que vous passez au comptoir unique de La Gaillarde. Aucune démarche en ligne : le passage au comptoir suffit.", answered: true },
      { question: "Le bon est-il offrable et daté ?", answer: "Oui, le bon est offrable et il n'est pas figé à l'heure près. C'est parfait pour offrir une sortie ou pour caler votre activité selon la météo et vos envies.", answered: true },
      { question: "Le paddle transparent, c'est quoi exactement ?", answer: "C'est un paddle dont la coque laisse voir le fond. Vous pagayez au-dessus de l'eau claire de Pampelonne en observant ce qui se passe sous la surface. Réservation au comptoir de La Gaillarde avec -10 %.", answered: true },
      { question: "Quel numéro appeler pour être conseillé ?", answer: "Vous pouvez appeler le 06 50 26 94 75 pour être orienté vers l'activité qui correspond à votre journée et à votre groupe. La réservation et le paiement se font ensuite au comptoir de La Gaillarde.", answered: true },
    ],
  },
];
