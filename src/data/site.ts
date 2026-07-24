// ============================================================
// Source unique des infos du site. Modifie ICI, ça se propage
// partout (header, footer, schema JSON-LD, barre de contact).
// Les champs marqués TODO attendent une validation de Cyril.
// ============================================================

export const site = {
  name: 'Pass Nautique Var',
  domain: 'https://www.passnautiquevar.fr',
  tagline: "Toutes les activités de l'Est-Var, −10 % au comptoir de La Gaillarde.",

  // Contact
  phone: '06 50 26 94 75',
  phoneIntl: '+33650269475',

  // Lieu
  place: 'Base nautique de La Gaillarde (El Moritto Plage)',
  street: 'Plage de La Gaillarde', // TODO Cyril : numéro / voie exacte
  town: 'Les Issambres',
  city: 'Roquebrune-sur-Argens',
  postal: '83380',
  region: 'Var',
  country: 'FR',

  // Coordonnées GPS — TODO Cyril : relever les coordonnées exactes du comptoir
  // (valeur actuelle = approximation plage de La Gaillarde, à confirmer)
  geo: { lat: 43.3486, lng: 6.7148 },

  // Horaires — confirmés pour juillet-août (document tarifs El Moritto Plage).
  // TODO Cyril : horaires de juin et septembre (basse saison) à confirmer.
  hoursHuman: 'Tous les jours, de 9h à 19h en juillet-août',
  opening: { days: 'Mo,Tu,We,Th,Fr,Sa,Su', opens: '09:00', closes: '19:00' },

  // Itinéraire (ouvre Google Maps vers la base)
  mapsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Plage+de+La+Gaillarde+Les+Issambres',
};

// Villes couvertes (rayon d'achat) — sert au schema areaServed
export const areaServed = [
  'Agay', 'Saint-Raphaël', 'Fréjus', 'Saint-Aygulf', 'Les Issambres',
  'Roquebrune-sur-Argens', 'Sainte-Maxime', 'Grimaud', 'Saint-Tropez', 'Ramatuelle',
];

// Bandeau défilant — les activités phares
export const activities = [
  'Parc aquatique géant',
  'Parachute ascensionnel',
  'Ski nautique',
  'Wakeboard',
  'Bouées tractées',
  'Bateau sans permis',
  'Balade en bateau',
  'Accrobranche & tyrolienne',
  'Kayak',
  'Paddle',
  'Pédalo',
  'Scooter sous-marin',
];
