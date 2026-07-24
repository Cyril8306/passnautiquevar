// Les 6 pages activites (contenu redige + verifie anti-invention/anti-WGP).
// Genere par src/pages/[activite].astro. image = uniquement visuels surs (footage Cyril / parc deja publie).

export interface FaqItem { question: string; answer: string; answered: boolean; }
export interface Activite {
  slug: string;
  name: string;
  image?: string;
  imageAlt?: string;
  title: string;
  description: string;
  h1: string;
  contentHtml: string;
  faq: FaqItem[];
}

export const activites: Activite[] = [
  {
    slug: 'parc-aquatique-arena',
    name: 'Parc aquatique géant',
    image: '/media/feat-arena.webp',
    imageAlt: "Parc aquatique gonflable géant sur le lac de l'Aréna, à Roquebrune-sur-Argens",
    title: "Parc aquatique géant lac de l'Aréna | -10 % La Gaillarde",
    description: "Parc aquatique géant sur le lac de l'Aréna à Roquebrune-sur-Argens. Réservez au comptoir de La Gaillarde aux Issambres et profitez de 10 % de remise.",
    h1: "Parc aquatique géant du lac de l'Aréna à Roquebrune-sur-Argens — réservation au comptoir de La Gaillarde",
    contentHtml: `<h2>Le parc aquatique géant, c'est quoi ?</h2>
<p>Un immense parc de jeux gonflables installé sur le lac de l'Aréna, à Roquebrune-sur-Argens. On saute, on glisse, on grimpe, on tombe dans l'eau. C'est le produit phare du réseau, le plus demandé de l'été.</p>
<p>Plusieurs parcours de niveaux différents vous attendent. Il y a un espace pour les enfants de 2 à 8 ans. Une tour de saut de 12 m est accessible dès 8 ans. Un parcours accrobranche, une tyrolienne géante et des trampolines complètent le terrain de jeu — l'un des parcours est même accessible dès 2 ans.</p>
<p>Envie de calme ? Le lac propose aussi des pédalos, des kayaks et des paddles.</p>

<h2>Pour qui ?</h2>
<p>Pour tout le monde. Les petits ont leur zone dédiée. Les plus grands se lancent sur les parcours difficiles et la tour de saut. Les familles passent la journée entière sur place.</p>
<p>Vous choisissez un pass demi-journée ou un pass journée, selon votre envie.</p>

<h2>Tout est sur place</h2>
<p>Vous n'avez rien à prévoir. La restauration est ouverte 7j/7 : un restaurant, un snack et un bar. Des tables de pique-nique sont à disposition. Vous trouverez aussi des vestiaires et des casiers.</p>
<p>Et surtout : un <strong>grand parking gratuit</strong>. Vous vous garez sans stress.</p>

<h2>Comment profiter des 10 % de remise ?</h2>
<p>Tout se passe au <strong>comptoir de La Gaillarde</strong>, sur la plage, aux Issambres. C'est le point unique où vous réservez et payez toutes les activités du réseau, d'Agay à Pampelonne.</p>
<p>Passez au comptoir. Vous obtenez <strong>10 % de remise immédiate</strong> sur tout le catalogue, le parc aquatique compris. Il n'y a aucune réservation en ligne.</p>
<p>Vous repartez avec un bon et une facture. Le bon n'est pas daté à l'heure près : vous l'utilisez plus tard, directement sur la base qui opère l'activité, à Roquebrune-sur-Argens. Le bon est offrable — parfait pour faire plaisir à quelqu'un.</p>

<h2>Où réserver ?</h2>
<p>Au comptoir de La Gaillarde, sur la plage, aux Issambres. C'est le seul endroit pour bénéficier des 10 % de remise sur le parc aquatique du lac de l'Aréna.</p>
<p>Une question avant de venir ? Appelez le <strong>06 50 26 94 75</strong>.</p>`,
    faq: [
      { question: "Où réserve-t-on le parc aquatique du lac de l'Aréna ?", answer: "Au comptoir de La Gaillarde, sur la plage, aux Issambres. C'est le point unique de réservation et de paiement du réseau. Vous y obtenez 10 % de remise immédiate, puis vous vous rendez sur place à Roquebrune-sur-Argens avec votre bon.", answered: true },
      { question: "Comment obtenir les 10 % de remise ?", answer: "Passez au comptoir de La Gaillarde. La remise de 10 % s'applique immédiatement sur tout le catalogue, parc aquatique inclus. Il n'y a aucune réservation en ligne.", answered: true },
      { question: "À partir de quel âge peut-on accéder au parc ?", answer: "Il y a un espace pour les enfants de 2 à 8 ans, une tour de saut de 12 m accessible dès 8 ans, et un parcours accessible dès 2 ans. Pour l'âge ou la taille minimum précis de chaque structure, confirmez au comptoir de La Gaillarde : appelez le 06 50 26 94 75.", answered: true },
      { question: "Le bon peut-il être offert ?", answer: "Oui. Le bon remis au comptoir est offrable. Il n'est pas daté à l'heure près, vous ou la personne à qui vous l'offrez l'utilisez plus tard sur la base qui opère l'activité.", answered: true },
      { question: "Y a-t-il un parking sur place ?", answer: "Oui, un grand parking gratuit est disponible sur place, à Roquebrune-sur-Argens.", answered: true },
      { question: "Les casiers sont-ils gratuits et quels sont les horaires ?", answer: "Cette information se confirme au comptoir de La Gaillarde : appelez le 06 50 26 94 75.", answered: false },
    ],
  },
  {
    slug: 'parachute-ascensionnel',
    name: 'Parachute ascensionnel',
    image: '/media/card-parachute.webp',
    imageAlt: "Parachute ascensionnel jaune au-dessus de la mer du golfe de Saint-Tropez",
    title: "Parachute ascensionnel golfe de Saint-Tropez -10 % La Gaillarde",
    description: "Parachute ascensionnel en mer dans le golfe de Saint-Tropez et l'Est-Var. Réservez au comptoir de La Gaillarde aux Issambres : -10 % immédiat, bon offrable.",
    h1: "Parachute ascensionnel en mer (golfe de Saint-Tropez et Est-Var) — réservez au comptoir de La Gaillarde",
    contentHtml: `<h2>Le parachute ascensionnel, c'est quoi ?</h2>
<p>Un bateau vous tracte. La voile se déploie. Vous vous élevez dans les airs, au-dessus de la baie, harnaché sous le parachute.</p>
<p>La sensation est forte, mais douce. Pas de vitesse brutale. Juste le calme, la vue et le bleu tout autour de vous.</p>
<p>C'est l'une des activités les plus faciles à vivre en mer. Vous n'avez rien à piloter. Vous profitez, tout simplement.</p>

<h2>Où voler dans le golfe de Saint-Tropez et l'Est-Var ?</h2>
<p>Le parachute ascensionnel est proposé sur plusieurs bases en mer du réseau. On vole au large, dans le golfe de Saint-Tropez et sur l'Est-Var : autour des Issambres, de Sainte-Maxime, et jusqu'à Cannes.</p>
<p>Chaque base opère son propre départ. Vous choisissez le lieu qui vous arrange, et vous volez au-dessus de la baie.</p>

<h2>Pour qui ?</h2>
<p>Le vol se fait harnaché sous la voile, tracté par le bateau. C'est accessible à beaucoup de monde.</p>
<p>L'âge minimum, le poids minimum et maximum, et la possibilité de voler à deux ou à trois se confirment au comptoir de La Gaillarde. Un coup de fil suffit : 06 50 26 94 75.</p>

<h2>Comment réserver avec 10 % de remise</h2>
<p>Tout se passe au comptoir de La Gaillarde, sur la plage aux Issambres. Pas de réservation en ligne.</p>
<p>Vous passez au comptoir. Vous réservez votre vol. Vous payez sur place. Et vous profitez de <strong>10 % de remise immédiate</strong> sur tout le catalogue.</p>
<p>Vous repartez avec un bon et une facture. Le bon n'est pas daté à l'heure près : vous choisissez votre moment. Vous l'utilisez ensuite sur la base qui opère le vol.</p>
<p>Le bon est offrable. C'est une belle idée de cadeau pour offrir un moment fort en mer, dans le golfe de Saint-Tropez.</p>

<h2>Le bon plan du comptoir unique</h2>
<p>Le comptoir de La Gaillarde réunit toutes les activités nautiques et de loisirs du réseau, d'Agay à Pampelonne. Un seul passage, une seule remise, tout le catalogue.</p>
<p>Vous pouvez ajouter d'autres activités à votre bon lors du même passage. Le tout à -10 %.</p>
<p><strong>Passez au comptoir de La Gaillarde, aux Issambres, ou appelez le 06 50 26 94 75.</strong></p>`,
    faq: [
      { question: "Où réserve-t-on le parachute ascensionnel ?", answer: "Au comptoir de La Gaillarde, sur la plage aux Issambres. Vous réservez et payez sur place, avec 10 % de remise immédiate. Il n'y a pas de réservation en ligne.", answered: true },
      { question: "Comment obtenir la remise de 10 % ?", answer: "En passant au comptoir de La Gaillarde. Le simple fait de réserver et payer sur place vous donne 10 % de remise immédiate sur tout le catalogue, dont le parachute ascensionnel.", answered: true },
      { question: "Où vole-t-on avec le parachute ascensionnel ?", answer: "En mer, dans le golfe de Saint-Tropez et sur l'Est-Var. L'activité est proposée sur plusieurs bases du réseau, autour des Issambres, de Sainte-Maxime et jusqu'à Cannes.", answered: true },
      { question: "Le bon peut-il être offert en cadeau ?", answer: "Oui. Le bon remis au comptoir est offrable et n'est pas daté à l'heure près. La personne choisit son moment et l'utilise sur la base qui opère le vol.", answered: true },
      { question: "Quel est l'âge minimum et le poids requis pour voler ?", answer: "Cette information se confirme au comptoir de La Gaillarde : appelez le 06 50 26 94 75.", answered: false },
      { question: "Peut-on voler à deux ou à trois, et se mouille-t-on ?", answer: "Cette information se confirme au comptoir de La Gaillarde : appelez le 06 50 26 94 75.", answered: false },
    ],
  },
  {
    slug: 'ski-nautique-wakeboard',
    name: 'Ski nautique, wakeboard et baby-ski',
    image: '/media/act-ski.webp',
    imageAlt: "Ski nautique et wakeboard tractés derrière un bateau dans l'Est-Var",
    title: "Ski nautique & wakeboard Est-Var | -10 % au comptoir La Gaillarde",
    description: "Ski nautique, wakeboard et baby-ski en mer dans l'Est-Var. Réservez au comptoir de La Gaillarde aux Issambres : -10 % de remise immédiate, bon offrable.",
    h1: "Ski nautique, wakeboard et baby-ski dans l'Est-Var — réservez au comptoir de La Gaillarde (-10 %)",
    contentHtml: `<h2>Ski nautique, wakeboard, baby-ski : c'est quoi ?</h2>
<p>Trois façons de glisser derrière un bateau, en mer, dans l'Est-Var. Vous êtes tracté. Un pilote conduit le bateau. Vous glissez sur l'eau.</p>
<p>Le <strong>ski nautique</strong> se pratique sur deux skis. Un pied sur chaque ski, vous filez sur la surface, dans le sillage du bateau.</p>
<p>Le <strong>wakeboard</strong>, c'est une planche unique. Les pieds sont placés en travers, comme sur un snowboard. La vague du bateau devient un tremplin pour sauter.</p>
<p>Le <strong>baby-ski</strong> est une première approche pensée pour les jeunes enfants. Une façon douce de découvrir la sensation, en toute simplicité.</p>

<h2>Pour qui ?</h2>
<p>Pour les débutants curieux comme pour ceux qui veulent progresser. Les sessions sont encadrées : vous n'êtes jamais seul, un pilote reste aux commandes du bateau.</p>
<p>Le baby-ski ouvre la porte aux plus petits. L'âge à partir duquel un enfant peut commencer se confirme au comptoir, selon l'activité et l'enfant.</p>

<h2>Où ça se passe ?</h2>
<p>En mer, sur la façade Est-Var. Le réseau couvre le littoral de Roquebrune-sur-Argens et Fréjus jusqu'au golfe de Saint-Tropez, en passant par Saint-Raphaël, Agay, Les Issambres, Sainte-Maxime et Ramatuelle.</p>
<p>Chaque activité est opérée sur la base concernée. Vous réservez, vous choisissez, et vous glissez sur le plan d'eau prévu.</p>

<h2>Comment profiter des -10 % au comptoir</h2>
<p>Tout passe par un seul point : le <strong>comptoir de la Base de La Gaillarde, aux Issambres</strong>. C'est là qu'on réserve et qu'on paie, sur place.</p>
<p>Le passage au comptoir donne <strong>10 % de remise immédiate</strong> sur tout le catalogue. Pas de réservation en ligne, pas de détour.</p>
<p>Vous repartez avec un <strong>bon</strong> et une facture. Le bon n'est pas daté à l'heure près : vous choisissez votre moment. Il est aussi <strong>offrable</strong> — une belle idée de cadeau pour un proche qui aime les sensations.</p>
<p>Une question avant de venir ? Appelez le comptoir au <strong>06 50 26 94 75</strong>.</p>

<h2>Le matériel</h2>
<p>Les sessions sont encadrées. Le détail du matériel fourni, le nombre de séances pour tenir debout et les conditions précises se confirment directement au comptoir. On vous oriente vers l'activité qui vous convient.</p>`,
    faq: [
      { question: "Quelle est la différence entre ski nautique et wakeboard ?", answer: "Le ski nautique se pratique sur deux skis, un pied sur chacun. Le wakeboard utilise une planche unique, les pieds placés en travers, pour sauter sur la vague du bateau.", answered: true },
      { question: "À partir de quel âge un enfant peut-il commencer ?", answer: "Le baby-ski est pensé comme une première approche pour les jeunes enfants. L'âge exact à partir duquel un enfant peut commencer se confirme au comptoir de La Gaillarde : appelez le 06 50 26 94 75.", answered: false },
      { question: "Combien de séances faut-il pour tenir debout ?", answer: "Cette information se confirme au comptoir de La Gaillarde : appelez le 06 50 26 94 75.", answered: false },
      { question: "Le matériel est-il fourni ?", answer: "Le détail du matériel fourni se confirme au comptoir de La Gaillarde : appelez le 06 50 26 94 75.", answered: false },
      { question: "Comment obtenir les 10 % de remise ?", answer: "Rendez-vous au comptoir de la Base de La Gaillarde, aux Issambres. Vous réservez et payez sur place, avec 10 % de remise immédiate sur tout le catalogue. Aucune réservation en ligne.", answered: true },
      { question: "Peut-on offrir une session en cadeau ?", answer: "Oui. Vous repartez du comptoir avec un bon, offrable et non daté à l'heure près. La personne choisit son moment pour venir glisser.", answered: true },
    ],
  },
  {
    slug: 'bateau-sans-permis',
    name: 'Bateau sans permis et balade en bateau',
    image: '/media/act-bateau.webp',
    imageAlt: "Sortie en bateau sans permis au départ des Issambres, mer du golfe",
    title: "Bateau sans permis Les Issambres | -10 % La Gaillarde",
    description: "Louez un bateau sans permis ou partez en balade avec skipper au départ des Issambres et du golfe. Réservez au comptoir de La Gaillarde avec 10 % de remise.",
    h1: "Bateau sans permis et balade en bateau aux Issambres — comptoir de La Gaillarde",
    contentHtml: `<h2>Deux façons de prendre le large</h2>
<p>Envie de mer au départ des Issambres et du golfe de Saint-Tropez ? Deux formules simples.</p>
<p><strong>Bateau sans permis :</strong> vous pilotez vous-même. Aucun permis n'est requis pour cette catégorie de location. Un briefing vous est donné au départ, puis vous filez sur l'eau à votre rythme.</p>
<p><strong>Balade en bateau avec skipper :</strong> vous êtes passager, un skipper tient la barre. Jusqu'à 12 personnes à bord. Idéal en famille ou entre amis pour profiter du paysage sans rien gérer.</p>

<h2>Pour qui ?</h2>
<ul>
<li>Ceux qui veulent piloter sans avoir de permis bateau.</li>
<li>Les familles et les groupes qui préfèrent se laisser guider par un skipper.</li>
<li>Les curieux qui veulent découvrir la côte entre Agay, Saint-Raphaël, Fréjus, Sainte-Maxime et le golfe.</li>
</ul>

<h2>Comment réserver et profiter des -10 %</h2>
<p>Tout se passe au comptoir de La Gaillarde, sur la plage aux Issambres. C'est le point unique du réseau nautique de l'Est-Var, d'Agay à Pampelonne.</p>
<p>Passez au comptoir, choisissez votre formule, payez sur place. Vous repartez avec <strong>10 % de remise immédiate</strong> sur tout le catalogue. Aucune réservation en ligne : le passage au comptoir est la seule façon d'avoir la remise.</p>
<p>Vous recevez un bon et une facture. Le bon n'est pas daté à l'heure près : vous choisissez votre moment plus tard, directement sur la base qui opère l'activité. Et bonne nouvelle, <strong>le bon est offrable</strong> — parfait comme cadeau.</p>

<h2>Où se trouve le comptoir</h2>
<p>Le comptoir est installé sur la plage de la Base de La Gaillarde, aux Issambres, dans le Var. Une question avant de venir ? Appelez le <strong>06 50 26 94 75</strong>.</p>
<p>Âge minimum pour piloter, zone de navigation autorisée, carburant, durée : ces détails se confirment au comptoir, selon la formule choisie.</p>`,
    faq: [
      { question: "Faut-il un permis pour la location de bateau sans permis ?", answer: "Non. Pour cette catégorie de location, aucun permis n'est requis. Vous pilotez vous-même après un briefing donné au départ.", answered: true },
      { question: "Quelle est la différence entre le bateau sans permis et la balade avec skipper ?", answer: "Avec le bateau sans permis, vous pilotez vous-même. Avec la balade encadrée, un skipper tient la barre et vous êtes passager, jusqu'à 12 personnes à bord.", answered: true },
      { question: "Combien de personnes peuvent monter à bord de la balade avec skipper ?", answer: "Jusqu'à 12 personnes à bord pour la balade encadrée par un skipper.", answered: true },
      { question: "Comment obtenir les 10 % de remise ?", answer: "En passant au comptoir de La Gaillarde, aux Issambres. Vous réservez et payez sur place, et la remise de 10 % s'applique immédiatement sur tout le catalogue. Il n'y a pas de réservation en ligne.", answered: true },
      { question: "Le bon peut-il être offert en cadeau ?", answer: "Oui. Le bon est offrable et n'est pas daté à l'heure près : la personne choisit son moment plus tard, sur la base qui opère l'activité.", answered: true },
      { question: "Quel est l'âge minimum pour piloter et quelle est la zone de navigation ?", answer: "Cette information se confirme au comptoir de La Gaillarde : appelez le 06 50 26 94 75.", answered: false },
    ],
  },
  {
    slug: 'bouees-tractees',
    name: 'Bouées tractées',
    image: '/media/act-bouees.webp',
    imageAlt: "Bouée tractée derrière un bateau dans l'Est-Var, face au massif de l'Estérel",
    title: "Bouée tractée Est-Var — comptoir La Gaillarde, -10 %",
    description: "Bouée tractée en mer dans l'Est-Var : version douce ou sportive. Réservez au comptoir de La Gaillarde, aux Issambres, avec 10 % de remise immédiate.",
    h1: "Bouée tractée en mer dans l'Est-Var — réservation au comptoir de La Gaillarde",
    contentHtml: `<h2>La bouée tractée, c'est quoi ?</h2>
<p>Une bouée gonflable tirée derrière un bateau. Vous vous accrochez, le bateau accélère, la bouée glisse et rebondit sur l'eau. Sensations garanties, du grand classique de la plage.</p>
<p>Vous choisissez le rythme. En <strong>version douce</strong>, le bateau roule tranquille : c'est calme et adapté aux enfants. En <strong>version plus sportive</strong>, ça envoie : virages, vitesse et éclaboussures.</p>

<h2>Pour qui ?</h2>
<p>Pour à peu près tout le monde. Les familles qui veulent une première montée en douceur. Les groupes d'amis qui cherchent l'adrénaline. Vous montez, on adapte l'allure à vos envies.</p>
<p>L'âge minimum et le nombre de personnes par bouée se confirment sur place, selon le modèle. Un doute avant de venir ? Appelez le comptoir au <strong>06 50 26 94 75</strong>.</p>

<h2>Où pratiquer dans l'Est-Var ?</h2>
<p>La bouée tractée est proposée sur plusieurs bases en mer du réseau, entre Agay et le golfe de Saint-Tropez. Selon la journée et la météo, on vous oriente vers la base la plus adaptée : Saint-Raphaël, Agay, Les Issambres, Sainte-Maxime, ou plus loin vers Ramatuelle.</p>
<p>Vous réservez à un seul endroit. L'activité, elle, se vit sur la base qui l'opère.</p>

<h2>Comment réserver et profiter des -10 %</h2>
<p>Tout passe par <strong>le comptoir de La Gaillarde</strong>, sur la plage des Issambres. C'est le point unique pour réserver et payer toutes les activités du réseau.</p>
<p>Le principe est simple :</p>
<ul>
<li>Vous passez au comptoir, en maillot, sans rendez-vous.</li>
<li>Vous réglez sur place et repartez avec <strong>10 % de remise immédiate</strong> sur tout le catalogue.</li>
<li>On vous remet un <strong>bon</strong> et une facture.</li>
<li>Le bon n'est pas daté à l'heure près : vous l'utilisez plus tard, quand ça vous arrange, sur la base qui opère l'activité.</li>
</ul>
<p>Il n'y a <strong>aucune réservation en ligne</strong>. Le contact humain au comptoir, c'est ce qui vous fait gagner les 10 %.</p>

<h2>Un bon à offrir</h2>
<p>Le bon est <strong>offrable</strong>. C'est une belle idée cadeau : une montée en bouée tractée à faire quand la personne le souhaite, sans contrainte d'horaire. Passez au comptoir pour le prendre.</p>

<h2>Où nous trouver</h2>
<p>Comptoir de la Base de La Gaillarde, sur la plage des Issambres, dans l'Est-Var. Une question sur la bouée tractée, un modèle précis, ou une réservation ? Un seul numéro : <strong>06 50 26 94 75</strong>.</p>`,
    faq: [
      { question: "Où réserve-t-on la bouée tractée ?", answer: "Au comptoir de la Base de La Gaillarde, sur la plage des Issambres. C'est le point unique du réseau : vous réservez et payez sur place, et vous repartez avec un bon à utiliser plus tard sur la base qui opère l'activité.", answered: true },
      { question: "Comment obtenir les 10 % de remise ?", answer: "En passant au comptoir de La Gaillarde. Le règlement sur place donne 10 % de remise immédiate sur tout le catalogue. Il n'y a pas de réservation en ligne.", answered: true },
      { question: "La bouée tractée est-elle adaptée aux enfants ?", answer: "Il existe une version douce, au rythme calme, adaptée aux enfants, et une version plus sportive. L'âge minimum se confirme au comptoir de La Gaillarde : appelez le 06 50 26 94 75.", answered: false },
      { question: "Combien de personnes peuvent monter sur une bouée ?", answer: "Cela dépend du modèle de bouée. Cette information se confirme au comptoir de La Gaillarde : appelez le 06 50 26 94 75.", answered: false },
      { question: "Peut-on offrir la bouée tractée en cadeau ?", answer: "Oui. Le bon remis au comptoir est offrable et n'est pas daté à l'heure près : la personne l'utilise quand elle le souhaite, sur la base qui opère l'activité.", answered: true },
      { question: "Sur quelles bases pratique-t-on la bouée tractée ?", answer: "Elle est proposée sur plusieurs bases en mer du réseau, entre Agay et le golfe de Saint-Tropez. Le comptoir de La Gaillarde vous oriente vers la base adaptée le jour même : appelez le 06 50 26 94 75.", answered: true },
    ],
  },
  {
    slug: 'kayak-paddle-pedalo',
    name: 'Kayak, paddle et pédalo',
    image: '/media/act-paddle.webp',
    imageAlt: "Cours de paddle au coucher du soleil sur la plage de La Gaillarde, aux Issambres",
    title: "Kayak, paddle, pédalo aux Issambres -10 % | La Gaillarde",
    description: "Louez kayak, paddle, paddle géant et pédalo sur la plage de La Gaillarde aux Issambres. Réservation au comptoir avec -10 % de remise immédiate.",
    h1: "Kayak, paddle et pédalo sur la plage de La Gaillarde (Les Issambres) — réservation au comptoir avec -10 %",
    contentHtml: `<h2>Kayak, paddle et pédalo au départ direct de la plage</h2>
<p>Envie de partir sur l'eau, à votre rythme, sans moniteur ? La plage de la Base de La Gaillarde, aux Issambres, propose la location de tout le matériel en accès libre. Vous partez en autonomie, vous ramez, vous pédalez, vous rentrez quand vous voulez.</p>
<p>Au départ direct de la plage, vous trouvez :</p>
<ul>
<li><strong>Pédalos</strong> pour une sortie tranquille en famille ou à deux.</li>
<li><strong>Kayaks</strong> pour longer la côte à votre rythme.</li>
<li><strong>Paddles</strong> et <strong>paddle géant</strong> à partager.</li>
<li><strong>Trottinettes des mers et paddles électriques</strong> pour glisser sans effort.</li>
<li><strong>Scooter sous-marin</strong> pour explorer sous la surface.</li>
</ul>

<h2>Comment réserver : le comptoir de La Gaillarde</h2>
<p>Tout se réserve et se paie <strong>sur place, au comptoir de La Gaillarde</strong>. Il n'y a pas de réservation en ligne. Vous venez, vous choisissez votre activité, vous payez au comptoir.</p>
<p>Le comptoir est le point unique du réseau : c'est ici que vous réservez aussi les autres activités nautiques et de loisirs de l'Est-Var, d'Agay à Pampelonne, en passant par Saint-Raphaël, Fréjus, Roquebrune-sur-Argens, Sainte-Maxime et le golfe de Saint-Tropez.</p>

<h2>-10 % de remise immédiate au comptoir</h2>
<p>Passer par le comptoir vous donne <strong>10 % de remise immédiate</strong> sur tout le catalogue. Pas de code, pas de conditions cachées : la remise s'applique directement quand vous réservez.</p>
<p>Vous repartez avec un <strong>bon</strong> et une <strong>facture</strong>. Le bon n'est pas daté à l'heure près : vous l'utilisez plus tard, quand vous êtes prêt, sur la base qui opère l'activité.</p>

<h3>Un bon qui s'offre</h3>
<p>Le bon est <strong>offrable</strong>. C'est une idée de cadeau simple pour une sortie kayak, paddle ou pédalo : vous réservez au comptoir, la personne profite de l'activité quand elle veut.</p>

<h2>Sur place, à votre rythme</h2>
<p>Toutes ces locations sont des <strong>sorties libres, en autonomie</strong>. Vous gérez votre temps sur l'eau et votre parcours. Pour préparer votre venue, l'équipe du comptoir répond à toutes vos questions au <strong>06 50 26 94 75</strong>.</p>

<h2>Où ça se passe</h2>
<p>Sur la <strong>plage de la Base de La Gaillarde, aux Issambres</strong> (Var). C'est le point de départ direct pour le kayak, le paddle et le pédalo, et le comptoir unique pour réserver tout le réseau nautique de l'Est-Var avec la remise.</p>`,
    faq: [
      { question: "Où louer un kayak, un paddle ou un pédalo aux Issambres ?", answer: "Directement sur la plage de la Base de La Gaillarde, aux Issambres. Le matériel part directement de la plage et se réserve au comptoir sur place.", answered: true },
      { question: "Comment profiter des -10 % de remise ?", answer: "En réservant et en payant au comptoir de La Gaillarde. La remise de 10 % s'applique immédiatement sur tout le catalogue, sans code ni condition cachée.", answered: true },
      { question: "Peut-on réserver en ligne ?", answer: "Non. La réservation et le paiement se font uniquement sur place, au comptoir de La Gaillarde. Vous repartez avec un bon et une facture.", answered: true },
      { question: "Le bon peut-il être offert ?", answer: "Oui. Le bon est offrable et n'est pas daté à l'heure près : la personne l'utilise plus tard, sur la base qui opère l'activité.", answered: true },
      { question: "Faut-il savoir nager et y a-t-il un âge minimum ?", answer: "Cette information se confirme au comptoir de La Gaillarde : appelez le 06 50 26 94 75.", answered: false },
      { question: "Combien de temps dure une location ?", answer: "Cette information se confirme au comptoir de La Gaillarde : appelez le 06 50 26 94 75.", answered: false },
    ],
  },
];
