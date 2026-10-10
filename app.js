const PROVIDERS = [
  "JGZ Ouder&Kind",
  "Nederlands Centrum Jeugdgezondheid",
  "JGZ Richtlijnen",
  "GroeiGids",
  "Rijksvaccinatieprogramma",
  "Voedingscentrum",
  "Kinderveiligheid.nl",
  "Pharos",
  "Inforium CHIP"
];

const items = [
  {
    "id": "JGZ-001",
    "title": "Welkom bij het consultatiebureau",
    "type": "Webpagina",
    "topic": "Contact met de JGZ",
    "status": "Klaar voor gebruik",
    "desc": "Rustige uitleg over het eerste bezoek, wat ouders meenemen en welke vragen zij kunnen stellen.",
    "provider": "JGZ Ouder&Kind",
    "source": "Eigen ouderinformatie",
    "sourceUrl": "https://www.ncj.nl/",
    "audience": "Ouders van baby’s",
    "channels": [
      "JGZ-website",
      "Ouderportaal"
    ],
    "owner": "Redactie JGZ Ouder&Kind",
    "rights": "Eigen productie",
    "review": "1 mei 2027",
    "validation": "Demostatus: voorbeeldtekst is door de fictieve JGZ-redactie gecontroleerd."
  },
  {
    "id": "JGZ-002",
    "title": "Wat gebeurt er tijdens een contactmoment?",
    "type": "Animatie",
    "topic": "Contact met de JGZ",
    "status": "Nog controleren",
    "desc": "Voorbeeldanimatie over meten, wegen, ontwikkeling bespreken en ruimte voor vragen.",
    "provider": "JGZ Ouder&Kind",
    "source": "Eigen animatieconcept",
    "sourceUrl": "https://www.ncj.nl/",
    "audience": "Ouders en kinderen",
    "channels": [
      "JGZ-website",
      "Wachtkamer"
    ],
    "owner": "Team Communicatie",
    "rights": "Eigen productie",
    "review": "Animatie beoordelen",
    "validation": "Demo-item; beeld, tekst en medische duiding moeten nog worden beoordeeld."
  },
  {
    "id": "JGZ-003",
    "title": "Vragen voorbereiden voor de jeugdarts",
    "type": "Eigen tekst",
    "topic": "Contact met de JGZ",
    "status": "Concept",
    "desc": "Korte checklist waarmee ouders en jongeren hun vragen vooraf kunnen verzamelen.",
    "provider": "JGZ Ouder&Kind",
    "source": "Lokale redactie",
    "sourceUrl": "https://www.ncj.nl/",
    "audience": "Ouders en jongeren",
    "channels": [
      "Ouderportaal",
      "Chatbot"
    ],
    "owner": "Redactie JGZ Ouder&Kind",
    "rights": "Eigen productie",
    "review": "Nog te plannen",
    "validation": "Demo-item; inhoudelijke en taalcontrole staan open."
  },
  {
    "id": "JGZ-004",
    "title": "Vaccinatieschema per geboortejaar",
    "type": "Webpagina",
    "topic": "Vaccinaties",
    "status": "Klaar voor gebruik",
    "desc": "Verwijzing naar het actuele landelijke overzicht van vaccinatiemomenten voor kinderen en jongeren.",
    "provider": "Rijksvaccinatieprogramma",
    "source": "Vaccinatieschema",
    "sourceUrl": "https://rijksvaccinatieprogramma.nl/vaccinaties/vaccinatieschema",
    "audience": "Ouders en jongeren",
    "channels": [
      "JGZ-website",
      "Ouderportaal",
      "Chatbot"
    ],
    "owner": "Medisch inhoudsbeheer",
    "rights": "Alleen verwijzen/embedden toegestaan",
    "review": "Actualiteit elk kwartaal controleren",
    "validation": "Demostatus: bron en verwijzing zijn als voorbeeld gecontroleerd; schema blijft bij de bron."
  },
  {
    "id": "JGZ-005",
    "title": "Uw kind voorbereiden op een vaccinatie",
    "type": "Video",
    "topic": "Vaccinaties",
    "status": "Nog controleren",
    "desc": "Voorbeeldvideo met eenvoudige uitleg over voorbereiding, afleiding en nazorg bij een prik.",
    "provider": "JGZ Ouder&Kind",
    "source": "Eigen videoconcept",
    "sourceUrl": "https://rijksvaccinatieprogramma.nl/",
    "audience": "Ouders en kinderen",
    "channels": [
      "Ouderportaal",
      "Wachtkamer"
    ],
    "owner": "Vaccinatieteam",
    "rights": "Aangeschafte licentie",
    "review": "Video en licentie controleren",
    "validation": "Demo-item; definitieve video, licentie en inhoudelijke beoordeling ontbreken nog."
  },
  {
    "id": "JGZ-006",
    "title": "Eerste hapjes voor uw baby",
    "type": "Webpagina",
    "topic": "Voeding",
    "status": "Klaar voor gebruik",
    "desc": "Praktische informatie over oefenhapjes en de stap naar volledige maaltijden.",
    "provider": "Voedingscentrum",
    "source": "Alles over de eerste hapjes",
    "sourceUrl": "https://www.voedingscentrum.nl/eerstehapjes",
    "audience": "Ouders van baby’s",
    "channels": [
      "JGZ-website",
      "Ouderportaal",
      "Chatbot"
    ],
    "owner": "Jeugdverpleegkundig inhoudsbeheer",
    "rights": "Alleen verwijzen/embedden toegestaan",
    "review": "1 april 2027",
    "validation": "Demostatus: bronselectie en context zijn als voorbeeld gecontroleerd."
  },
  {
    "id": "JGZ-007",
    "title": "Gezond eten voor dreumes en peuter",
    "type": "Webpagina",
    "topic": "Voeding",
    "status": "Nog controleren",
    "desc": "Informatie over maaltijden, drinken, porties en omgaan met de lust-ik-niet-fase.",
    "provider": "Voedingscentrum",
    "source": "Dreumes en peuter",
    "sourceUrl": "https://www.voedingscentrum.nl/nl/zwanger-en-kind/dreumes-en-peuter.aspx",
    "audience": "Ouders van 1 tot 4 jaar",
    "channels": [
      "JGZ-website",
      "Nieuwsbrief"
    ],
    "owner": "Jeugdverpleegkundig inhoudsbeheer",
    "rights": "Alleen verwijzen/embedden toegestaan",
    "review": "Lokale introductie controleren",
    "validation": "Demo-item; de lokale context moet nog inhoudelijk worden beoordeeld."
  },
  {
    "id": "JGZ-008",
    "title": "Veilig slapen van uw baby",
    "type": "Infographic",
    "topic": "Veiligheid",
    "status": "Concept",
    "desc": "Voorbeeldregistratie van een visueel overzicht over een veilige slaapomgeving.",
    "provider": "Kinderveiligheid.nl",
    "source": "Veilig slapen",
    "sourceUrl": "https://www.kinderveiligheid.nl/",
    "audience": "Ouders van baby’s",
    "channels": [
      "Ouderportaal",
      "Wachtkamer"
    ],
    "owner": "Team Preventie",
    "rights": "Onbekend",
    "review": "Bronversie en rechten controleren",
    "validation": "Demo-item; exacte bron, versie en gebruiksrecht moeten nog worden vastgesteld."
  },
  {
    "id": "JGZ-009",
    "title": "Veilig onderweg met jonge kinderen",
    "type": "Webpagina",
    "topic": "Veiligheid",
    "status": "Nog controleren",
    "desc": "Voorbeeldbron over veilig vervoer in auto, bakfiets en op de fiets.",
    "provider": "Kinderveiligheid.nl",
    "source": "Onderweg",
    "sourceUrl": "https://www.kinderveiligheid.nl/",
    "audience": "Ouders en verzorgers",
    "channels": [
      "JGZ-website",
      "Nieuwsbrief"
    ],
    "owner": "Team Preventie",
    "rights": "Alleen verwijzen/embedden toegestaan",
    "review": "Bronpagina controleren",
    "validation": "Demo-item; actualiteit en lokale duiding moeten nog worden gecontroleerd."
  },
  {
    "id": "JGZ-010",
    "title": "Ontwikkeling van uw baby",
    "type": "Webpagina",
    "topic": "Ontwikkeling",
    "status": "Klaar voor gebruik",
    "desc": "Informatie per levensfase over groei, contact, bewegen en wat ouders kunnen verwachten.",
    "provider": "GroeiGids",
    "source": "Baby",
    "sourceUrl": "https://groeigids.nl/baby",
    "audience": "Ouders van baby’s",
    "channels": [
      "Ouderportaal",
      "GroeiGids-app",
      "Chatbot"
    ],
    "owner": "Team 0–4 jaar",
    "rights": "Alleen verwijzen/embedden toegestaan",
    "review": "15 februari 2027",
    "validation": "Demostatus: bronselectie en doelgroep zijn als voorbeeld vastgelegd."
  },
  {
    "id": "JGZ-011",
    "title": "Omgaan met de peuterpuberteit",
    "type": "Webpagina",
    "topic": "Opvoeden",
    "status": "Nog controleren",
    "desc": "Herkenbare informatie over grenzen, emoties en positief contact met een peuter.",
    "provider": "GroeiGids",
    "source": "Peuter",
    "sourceUrl": "https://groeigids.nl/peuter",
    "audience": "Ouders van peuters",
    "channels": [
      "Ouderportaal",
      "GroeiGids-app"
    ],
    "owner": "Team 0–4 jaar",
    "rights": "Alleen verwijzen/embedden toegestaan",
    "review": "Bron en context beoordelen",
    "validation": "Demo-item; lokale inleiding en contextvaliditeit staan open."
  },
  {
    "id": "JGZ-012",
    "title": "Taalontwikkeling volgen",
    "type": "Richtlijn",
    "topic": "Ontwikkeling",
    "status": "Klaar voor gebruik",
    "desc": "Professionele richtlijn als basis voor signalering, uitleg en passende verwijzing.",
    "provider": "JGZ Richtlijnen",
    "source": "JGZ-richtlijn Taalontwikkeling",
    "sourceUrl": "https://www.jgzrichtlijnen.nl/richtlijnen/",
    "audience": "JGZ-professionals",
    "channels": [
      "Consultondersteuning"
    ],
    "owner": "Staf jeugdgezondheidszorg",
    "rights": "Alleen verwijzen/embedden toegestaan",
    "review": "Bij nieuwe richtlijnversie",
    "validation": "Demostatus: richtlijnverwijzing en professionele doelgroep zijn vastgelegd."
  },
  {
    "id": "JGZ-013",
    "title": "Slaapproblemen bespreken",
    "type": "Richtlijn",
    "topic": "Slapen",
    "status": "Nog controleren",
    "desc": "Voorbeeldregistratie van professionele aanbevelingen en oudermaterialen rond slaap.",
    "provider": "JGZ Richtlijnen",
    "source": "JGZ-richtlijn Slaap",
    "sourceUrl": "https://www.jgzrichtlijnen.nl/richtlijnen/",
    "audience": "JGZ-professionals en ouders",
    "channels": [
      "Consultondersteuning",
      "Chatbot"
    ],
    "owner": "Staf jeugdgezondheidszorg",
    "rights": "Alleen verwijzen/embedden toegestaan",
    "review": "Materialen per leeftijd selecteren",
    "validation": "Demo-item; de juiste richtlijnmaterialen en publieksvertaling moeten nog worden beoordeeld."
  },
  {
    "id": "JGZ-014",
    "title": "Opvoedvragen stap voor stap bespreken",
    "type": "Richtlijn",
    "topic": "Opvoeden",
    "status": "Concept",
    "desc": "Professionele basis voor het verkennen van vragen en het kiezen van passende ondersteuning.",
    "provider": "JGZ Richtlijnen",
    "source": "JGZ-richtlijn Opvoedondersteuning",
    "sourceUrl": "https://www.jgzrichtlijnen.nl/richtlijnen/",
    "audience": "JGZ-professionals",
    "channels": [
      "Consultondersteuning"
    ],
    "owner": "Staf jeugdgezondheidszorg",
    "rights": "Alleen verwijzen/embedden toegestaan",
    "review": "Nog te plannen",
    "validation": "Demo-item; versie, samenvatting en lokale werkwijze moeten nog worden gekoppeld."
  },
  {
    "id": "JGZ-015",
    "title": "Wat doet het NCJ voor de jeugdgezondheidszorg?",
    "type": "Webpagina",
    "topic": "Vakmanschap",
    "status": "Klaar voor gebruik",
    "desc": "Achtergrondinformatie over kennis, innovatie en kwaliteit binnen de jeugdgezondheidszorg.",
    "provider": "Nederlands Centrum Jeugdgezondheid",
    "source": "NCJ",
    "sourceUrl": "https://www.ncj.nl/",
    "audience": "Professionals en managers",
    "channels": [
      "Consultondersteuning"
    ],
    "owner": "Staf jeugdgezondheidszorg",
    "rights": "Alleen verwijzen/embedden toegestaan",
    "review": "1 juni 2027",
    "validation": "Demostatus: organisatiebron en gebruiksdoel zijn als voorbeeld gecontroleerd."
  },
  {
    "id": "JGZ-016",
    "title": "Mentale gezondheid van jongeren",
    "type": "Eigen tekst",
    "topic": "Mentale gezondheid",
    "status": "Nog controleren",
    "desc": "Lokale wegwijzer voor jongeren met uitleg waar zij vragen, zorgen of sombere gevoelens kunnen bespreken.",
    "provider": "JGZ Ouder&Kind",
    "source": "Lokale jongerenredactie",
    "sourceUrl": "https://www.ncj.nl/",
    "audience": "Jongeren van 12 tot 18 jaar",
    "channels": [
      "JGZ-website",
      "Chatbot"
    ],
    "owner": "Team 12+",
    "rights": "Eigen productie",
    "review": "Jongerenpanel en jeugdarts laten beoordelen",
    "validation": "Demo-item; taal, verwijzingen en inhoudelijke veiligheid moeten nog worden gecontroleerd."
  },
  {
    "id": "JGZ-017",
    "title": "Pesten signaleren en bespreken",
    "type": "Richtlijn",
    "topic": "School en welzijn",
    "status": "Concept",
    "desc": "Voorbeeldkoppeling naar professionele aanbevelingen over signalering en begeleiding bij pesten.",
    "provider": "JGZ Richtlijnen",
    "source": "JGZ-richtlijn Pesten",
    "sourceUrl": "https://www.jgzrichtlijnen.nl/richtlijnen/",
    "audience": "JGZ-professionals",
    "channels": [
      "Consultondersteuning"
    ],
    "owner": "Team 4–18 jaar",
    "rights": "Alleen verwijzen/embedden toegestaan",
    "review": "Nog te plannen",
    "validation": "Demo-item; lokale route en actuele richtlijnversie moeten nog worden vastgelegd."
  },
  {
    "id": "JGZ-018",
    "title": "Begrijpelijke informatie voor iedere ouder",
    "type": "Document",
    "topic": "Toegankelijkheid",
    "status": "Nog controleren",
    "desc": "Praktische aandachtspunten voor eenvoudige taal, beeld en communicatie die aansluit bij ouders.",
    "provider": "Pharos",
    "source": "Begrijpelijke communicatie",
    "sourceUrl": "https://www.pharos.nl/",
    "audience": "JGZ-professionals en communicatieadviseurs",
    "channels": [
      "Consultondersteuning",
      "Ouderportaal"
    ],
    "owner": "Team Toegankelijke Zorg",
    "rights": "Alleen verwijzen/embedden toegestaan",
    "review": "Passend materiaal selecteren",
    "validation": "Demo-item; exacte publicatie en gebruiksrecht moeten nog worden vastgelegd."
  },
  {
    "id": "JGZ-019",
    "title": "Intake jeugdgezondheidszorg voor nieuwkomers",
    "type": "Document",
    "topic": "Toegankelijkheid",
    "status": "Concept",
    "desc": "Voorbeeldregistratie van een handreiking voor een passende intake en voorlichting aan nieuwkomersgezinnen.",
    "provider": "Pharos",
    "source": "Handreiking intake JGZ",
    "sourceUrl": "https://www.pharos.nl/kennisbank/",
    "audience": "JGZ-professionals",
    "channels": [
      "Consultondersteuning"
    ],
    "owner": "Team Toegankelijke Zorg",
    "rights": "Onbekend",
    "review": "Versie en rechten controleren",
    "validation": "Demo-item; actualiteit, versie en lokale toepassing moeten nog worden beoordeeld."
  },
  {
    "id": "JGZ-020",
    "title": "Mondzorg vanaf de eerste tand",
    "type": "Eigen tekst",
    "topic": "Mondgezondheid",
    "status": "Nog controleren",
    "desc": "Korte ouderuitleg over poetsen, eet- en drinkmomenten en wanneer advies nodig is.",
    "provider": "JGZ Ouder&Kind",
    "source": "Lokale oudertekst op basis van professionele richtlijn",
    "sourceUrl": "https://www.jgzrichtlijnen.nl/richtlijnen/",
    "audience": "Ouders van jonge kinderen",
    "channels": [
      "JGZ-website",
      "Ouderportaal",
      "Nieuwsbrief"
    ],
    "owner": "Team 0–4 jaar",
    "rights": "Eigen productie met bronverwijzing",
    "review": "Jeugdarts en tandartsadviseur laten beoordelen",
    "validation": "Demo-item; inhoudelijke en transformatievalidatie staan open."
  },
  {
    "id": "JGZ-021",
    "title": "Voorbereiding op het 4-jarigencontact",
    "type": "Inforium",
    "topic": "Contact met de JGZ",
    "status": "Concept",
    "desc": "Voorbeeld van een Inforium dat ouders gericht kan worden toegestuurd vóór een contactmoment.",
    "provider": "Inforium CHIP",
    "source": "Inforium CMS",
    "sourceUrl": "https://chip.inforium.nl/platform.html",
    "audience": "Ouders van kinderen rond 4 jaar",
    "channels": ["Ouderportaal", "JGZ-website"],
    "owner": "Team 0–4 jaar",
    "rights": "Eigen productie",
    "review": "Inhoud en verzendmoment beoordelen",
    "validation": "Demo-item; inhoud, doelgroep en context moeten nog worden gevalideerd."
  },
  {
    "id": "JGZ-022",
    "title": "Aandachtspunten bij taalontwikkeling",
    "type": "Inforium Note",
    "topic": "Ontwikkeling",
    "status": "Nog controleren",
    "desc": "Voorbeeld van een Inforium Note met beknopte vakinformatie voor de JGZ-professional.",
    "provider": "Inforium CHIP",
    "source": "Inforium Notes",
    "sourceUrl": "https://chip.inforium.nl/platform.html",
    "audience": "JGZ-professionals",
    "channels": ["Consultondersteuning"],
    "owner": "Staf jeugdgezondheidszorg",
    "rights": "Eigen productie",
    "review": "Vakinhoudelijke controle plannen",
    "validation": "Demo-item; vakinhoudelijke beoordeling en lokale toepasbaarheid staan open."
  }
];

const sources = [
  {
    "name": "JGZ Ouder&Kind",
    "short": "J",
    "color": "green",
    "desc": "Fictieve JGZ-organisatie met lokale informatie voor ouders, jongeren en professionals.",
    "url": "https://www.ncj.nl/",
    "kind": "Eigen hoofdbron"
  },
  {
    "name": "Nederlands Centrum Jeugdgezondheid",
    "short": "N",
    "color": "purple",
    "desc": "Landelijk kennis- en innovatiecentrum voor de jeugdgezondheidszorg.",
    "url": "https://www.ncj.nl/",
    "kind": "Kennisbron"
  },
  {
    "name": "JGZ Richtlijnen",
    "short": "R",
    "color": "blue",
    "desc": "Wetenschappelijk onderbouwde richtlijnen voor het professioneel handelen in de JGZ.",
    "url": "https://www.jgzrichtlijnen.nl/richtlijnen/",
    "kind": "Professionele bron"
  },
  {
    "name": "GroeiGids",
    "short": "G",
    "color": "pink",
    "desc": "Informatie over gezond opgroeien, ontwikkeling en opvoeden per leeftijdsfase.",
    "url": "https://groeigids.nl/",
    "kind": "Publieksbron"
  },
  {
    "name": "Rijksvaccinatieprogramma",
    "short": "V",
    "color": "navy",
    "desc": "Actuele landelijke informatie over vaccinaties en vaccinatiemomenten.",
    "url": "https://rijksvaccinatieprogramma.nl/",
    "kind": "Overheidsbron"
  },
  {
    "name": "Voedingscentrum",
    "short": "E",
    "color": "lime",
    "desc": "Praktische informatie en materialen over gezond en veilig eten voor kinderen.",
    "url": "https://www.voedingscentrum.nl/professionals/zwangerschap-en-kindervoeding/jgz-professionals/eten-en-drinken-0-4-jaar.aspx",
    "kind": "Kennisbron"
  },
  {
    "name": "Kinderveiligheid.nl",
    "short": "K",
    "color": "orange",
    "desc": "Praktische informatie over veilig slapen, onderweg zijn en opgroeien.",
    "url": "https://www.kinderveiligheid.nl/",
    "kind": "Kennisbron"
  },
  {
    "name": "Pharos",
    "short": "P",
    "color": "purple",
    "desc": "Kennis over begrijpelijke communicatie en passende zorg bij gezondheidsverschillen.",
    "url": "https://www.pharos.nl/",
    "kind": "Expertisecentrum"
  },
  {
    "name": "Inforium CHIP",
    "short": "I",
    "color": "blue",
    "desc": "Platformbron voor eigen Inforiums, Inforium Notes en gekoppelde zorginformatie.",
    "url": "https://chip.inforium.nl/",
    "kind": "Platformbron"
  }
];

const OUTPUTS = [
  {
    "id": "website",
    "name": "JGZ-website",
    "desc": "Betrouwbare informatie voor ouders en jongeren",
    "icon": "J",
    "tone": "tone-0"
  },
  {
    "id": "portal",
    "name": "Ouderportaal",
    "desc": "Informatie passend bij leeftijd en contactmoment",
    "icon": "O",
    "tone": "tone-1"
  },
  {
    "id": "chatbot",
    "name": "Chatbot",
    "desc": "Antwoorden uit gecontroleerde en toegestane bronnen",
    "icon": "✦",
    "tone": "tone-2"
  },
  {
    "id": "growth-app",
    "name": "GroeiGids-app",
    "desc": "Geselecteerde informatie per ontwikkelfase",
    "icon": "G",
    "tone": "tone-3"
  },
  {
    "id": "newsletter",
    "name": "Nieuwsbrief",
    "desc": "Een korte selectie voor ouders en jongeren",
    "icon": "✉",
    "tone": "tone-4"
  },
  {
    "id": "professional",
    "name": "Consultondersteuning",
    "desc": "Richtlijnen en materialen voor JGZ-professionals",
    "icon": "✓",
    "tone": "tone-5"
  },
  {
    "id": "waiting-room",
    "name": "Wachtkamer",
    "desc": "Video’s en animaties voor locaties",
    "icon": "▶",
    "tone": "tone-1"
  }
];

const defaultSourceSelections = {
  "JGZ Ouder&Kind": [
    "website",
    "portal",
    "chatbot",
    "newsletter",
    "waiting-room"
  ],
  "Nederlands Centrum Jeugdgezondheid": [
    "professional"
  ],
  "JGZ Richtlijnen": [
    "professional",
    "chatbot"
  ],
  "GroeiGids": [
    "portal",
    "growth-app",
    "chatbot"
  ],
  "Rijksvaccinatieprogramma": [
    "website",
    "portal",
    "chatbot",
    "waiting-room"
  ],
  "Voedingscentrum": [
    "website",
    "portal",
    "chatbot",
    "newsletter"
  ],
  "Kinderveiligheid.nl": [
    "website",
    "portal",
    "newsletter",
    "waiting-room"
  ],
  "Pharos": [
    "professional",
    "portal"
  ],
  "Inforium CHIP": [
    "website",
    "portal",
    "chatbot",
    "professional"
  ]
};

function loadSourceSelections() {
  try {
    const saved = JSON.parse(localStorage.getItem('chip-jgz-source-outputs') || 'null');
    if (saved && saved['JGZ Regio'] && !saved['JGZ Ouder&Kind']) {
      saved['JGZ Ouder&Kind'] = saved['JGZ Regio'];
      delete saved['JGZ Regio'];
      localStorage.setItem('chip-jgz-source-outputs', JSON.stringify(saved));
    }
    return saved && typeof saved === 'object' ? {...JSON.parse(JSON.stringify(defaultSourceSelections)), ...saved} : JSON.parse(JSON.stringify(defaultSourceSelections));
  } catch {
    return JSON.parse(JSON.stringify(defaultSourceSelections));
  }
}
let sourceSelections = loadSourceSelections();
let activeSource = '';

const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));
const esc = value => String(value == null ? '' : value).replace(/[&<>'"]/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'})[character]);
const statusClass = status => status === 'Nog controleren' ? 'check' : status === 'Concept' ? 'draft' : 'ready';
const iconFor = type => ({Webpagina:'↗',Document:'▤',Video:'▶',Animatie:'◇','Eigen tekst':'✎',Keuzehulp:'⇄',Infographic:'▥',Inforium:'i','Inforium Note':'N'})[type] || '•';

async function sha256Hex(value) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest)).map(byte => byte.toString(16).padStart(2,'0')).join('');
}

async function prepareTechnicalIdentity() {
  for (const item of items) {
    if (!item.passportId) item.passportId = 'CHIP-PASS-' + item.id;
    if (!item.hash) item.hash = await sha256Hex(JSON.stringify({id:item.id,title:item.title,type:item.type,topic:item.topic,provider:item.provider,source:item.source,sourceUrl:item.sourceUrl,rights:item.rights,scope:'registered-metadata-v1'}));
    if (!item.validator) item.validator = item.status === 'Klaar voor gebruik' ? item.owner + ' · demorol' : 'Nog niet definitief toegewezen';
  }
}

function card(item) {
  return '<article class="content-card" tabindex="0" data-id="' + esc(item.id) + '">' +
    '<div class="card-icon">' + iconFor(item.type) + '</div>' +
    '<div class="card-main"><div class="card-tags"><span>' + esc(item.type) + '</span><span class="status ' + statusClass(item.status) + '">' + esc(item.status) + '</span></div>' +
    '<h3>' + esc(item.title) + '</h3><p>' + esc(item.desc) + '</p>' +
    '<div class="provider"><span>' + esc(item.provider.charAt(0)) + '</span><div><small>Bron</small><b>' + esc(item.provider) + '</b></div></div></div>' +
    '<button class="card-open" type="button" aria-label="Bekijk ' + esc(item.title) + '">›</button></article>';
}

function bindCards(container) {
  container.querySelectorAll('.content-card').forEach(element => {
    const open = () => openDetail(element.dataset.id);
    element.onclick = open;
    element.onkeydown = event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } };
  });
}

function renderStats() {
  const ready = items.filter(item => item.status === 'Klaar voor gebruik').length;
  const attention = items.filter(item => item.status !== 'Klaar voor gebruik').length;
  $('#stats').innerHTML = [
    [items.length,'informatie-items','▦'],
    [PROVIDERS.length,'bronnen','◎'],
    [ready,'klaar in deze demo','✓'],
    [attention,'nog nakijken','!']
  ].map(stat => '<div class="stat"><span>' + stat[2] + '</span><div><b>' + stat[0] + '</b><small>' + stat[1] + '</small></div></div>').join('');
}

function renderHome() {
  const recent = items.slice(-4).reverse();
  $('#recent-list').innerHTML = recent.map(item => '<button class="list-row" data-id="' + esc(item.id) + '"><span class="mini-icon">' + iconFor(item.type) + '</span><div><b>' + esc(item.title) + '</b><small>' + esc(item.provider) + ' · ' + esc(item.topic) + '</small></div><i>›</i></button>').join('');
  $('#recent-list').querySelectorAll('[data-id]').forEach(button => button.onclick = () => openDetail(button.dataset.id));
  const attention = items.filter(item => item.status !== 'Klaar voor gebruik').slice(0,5);
  $('#attention-count').textContent = attention.length;
  $('#attention-list').innerHTML = attention.map(item => '<button class="attention-row" data-id="' + esc(item.id) + '"><span class="attention-dot ' + statusClass(item.status) + '"></span><div><b>' + esc(item.title) + '</b><small>' + esc(item.status) + ' · ' + esc(item.provider) + '</small></div><i>›</i></button>').join('');
  $('#attention-list').querySelectorAll('[data-id]').forEach(button => button.onclick = () => openDetail(button.dataset.id));
}

function setFilters() {
  const providers = Array.from(new Set(PROVIDERS.concat(items.map(item => item.provider)))).sort();
  const statuses = Array.from(new Set(items.map(item => item.status)));
  $('#provider-filter').innerHTML = '<option value="">Alle bronnen</option>' + providers.map(value => '<option>' + esc(value) + '</option>').join('');
  $('#status-filter').innerHTML = '<option value="">Alle statussen</option>' + statuses.map(value => '<option>' + esc(value) + '</option>').join('');
}

function renderLibrary() {
  const query = $('#search').value.trim().toLowerCase();
  const provider = $('#provider-filter').value;
  const status = $('#status-filter').value;
  const filtered = items.filter(item => [item.title,item.topic,item.desc,item.provider,item.source].join(' ').toLowerCase().includes(query) && (!provider || item.provider === provider) && (!status || item.status === status));
  $('#library-count').textContent = filtered.length + ' van ' + items.length;
  $('#result-help').textContent = filtered.length === 1 ? '1 resultaat gevonden' : filtered.length + ' resultaten gevonden';
  $('#library-grid').innerHTML = filtered.length ? filtered.map(card).join('') : '<div class="empty"><b>Geen informatie gevonden</b><p>Wis uw keuze of probeer een ander woord.</p></div>';
  bindCards($('#library-grid'));
}

function renderSources() {
  $('#source-grid').innerHTML = sources.map(source => {
    const count = items.filter(item => item.provider === source.name).length;
    const selected = sourceSelections[source.name] || [];
    return '<article class="source-card"><div class="source-mark ' + source.color + '">' + source.short + '</div><div class="source-title"><div><h3>' + esc(source.name) + '</h3>' + (source.sub ? '<small>' + esc(source.sub) + '</small>' : '') + '</div><span>' + esc(source.kind) + '</span></div><p>' + esc(source.desc) + '</p><div class="source-foot"><b>' + count + ' voorbeelditems</b><a href="' + esc(source.url) + '" target="_blank" rel="noopener">Bekijk bron ↗</a></div><button class="source-use" type="button" data-source="' + esc(source.name) + '">Kies waar gebruiken <span>' + selected.length + '</span></button></article>';
  }).join('');
  $('#source-grid').querySelectorAll('.source-use').forEach(button => button.onclick = () => openSourceOutput(button.dataset.source));
}

function renderOutputs() {
  $('#output-grid').innerHTML = OUTPUTS.map(output => {
    const count = sources.filter(source => (sourceSelections[source.name] || []).includes(output.id)).length;
    return '<article class="output-card"><div class="output-mark ' + output.tone + '">' + output.icon + '</div><div><h3>' + output.name + '</h3><p>' + output.desc + '</p></div><span>' + count + ' bronnen</span><button type="button" data-output="' + output.id + '">Bronnen beheren</button></article>';
  }).join('');
  $('#output-grid').querySelectorAll('button').forEach(button => button.onclick = () => {
    switchView('sources');
    toast('Kies op een bronkaart de knop ‘Kies waar gebruiken’.');
  });
}

function openSourceOutput(sourceName) {
  activeSource = sourceName;
  $('#source-output-title').textContent = 'Waar mag ' + sourceName + ' gebruikt worden?';
  const selected = sourceSelections[sourceName] || [];
  $('#source-output-checks').innerHTML = OUTPUTS.map(output =>
    '<label><input type="checkbox" name="output" value="' + output.id + '"' + (selected.includes(output.id) ? ' checked' : '') + '><span class="check-icon ' + output.tone + '">' + output.icon + '</span><span><b>' + output.name + '</b><small>' + output.desc + '</small></span></label>'
  ).join('');
  $('#source-output-dialog').showModal();
}

$('#source-output-form').onsubmit = event => {
  event.preventDefault();
  sourceSelections[activeSource] = Array.from(new FormData(event.currentTarget).getAll('output'));
  try { localStorage.setItem('chip-jgz-source-outputs', JSON.stringify(sourceSelections)); } catch {}
  $('#source-output-dialog').close();
  renderSources();
  renderOutputs();
  toast('De toepassingen voor ' + activeSource + ' zijn bewaard in deze demo.');
};
$('[data-cancel-source-output]').onclick = () => $('#source-output-dialog').close();

function openDetail(id) {
  const item = items.find(candidate => candidate.id === id);
  if (!item) return;
  $('#detail-content').innerHTML =
    '<p class="eyebrow">INFORMATIEBEKIJKEN · ' + esc(item.id) + '</p><h2>' + esc(item.title) + '</h2><p class="dialog-lead">' + esc(item.desc) + '</p>' +
    '<div class="detail-summary"><span class="status ' + statusClass(item.status) + '">' + esc(item.status) + '</span><span>' + esc(item.type) + '</span><span>' + esc(item.topic) + '</span></div>' +
    '<div class="passport"><div class="passport-head"><div><b>CHIP-contentpaspoort</b><small>De technische gegevens staan hier rustig bij elkaar</small></div><button class="passport-toggle" type="button" aria-expanded="false">Toon technische gegevens</button></div>' +
    '<div class="passport-grid"><div><span>Contentprovider</span><b>' + esc(item.provider) + '</b></div><div><span>Bron bij provider</span><b>' + esc(item.source) + '</b></div><div><span>Voor wie?</span><b>' + esc(item.audience) + '</b></div><div><span>Verantwoordelijk</span><b>' + esc(item.owner) + '</b></div><div><span>Rechten</span><b>' + esc(item.rights) + '</b></div><div><span>Beoordeling</span><b>' + esc(item.validator) + '</b></div><div><span>Volgende controle</span><b>' + esc(item.review) + '</b></div><div><span>Waar gebruiken?</span><b>' + esc(item.channels.join(', ') || 'Nog niet gekozen') + '</b></div></div>' +
    '<div class="technical"><div><span>Paspoort-ID</span><b>' + esc(item.passportId) + '</b></div><div><span>Hash</span><b class="hash">' + esc(item.hash) + '</b></div><div><span>Hashbereik</span><b>SHA-256 · geregistreerde metadata v1</b></div></div></div>' +
    '<div class="source-link"><div><b>Oorspronkelijke bron bekijken</b><small>Opent in een nieuw venster</small></div><a href="' + esc(item.sourceUrl) + '" target="_blank" rel="noopener">Open bron ↗</a></div>' +
    '<p class="demo-warning"><strong>Demogegevens.</strong> De getoonde status is geen medisch kwaliteitskeurmerk en bewijst geen gebruiksrecht.</p>';
  const technical = $('#detail-content').querySelector('.technical');
  const toggle = $('#detail-content').querySelector('.passport-toggle');
  toggle.onclick = () => {
    const open = technical.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Verberg technische gegevens' : 'Toon technische gegevens';
  };
  $('#detail-dialog').showModal();
}

function switchView(view) {
  $$('.view').forEach(element => element.classList.toggle('active', element.id === view + '-view'));
  $$('.nav-item').forEach(element => element.classList.toggle('active', element.dataset.view === view));
  $('#page-title').textContent = ({home:'Goedemorgen, waar wilt u mee beginnen?',library:'Vind snel de juiste informatie',sources:'Alle bronnen overzichtelijk bij elkaar',outputs:'Kies waar de informatie gebruikt wordt'})[view];
  if (view === 'library') renderLibrary();
  window.scrollTo({top:0,behavior:'smooth'});
}

const localContentKey = 'chip-jgz-local-content';
const isStaticDemo = ['127.0.0.1','localhost'].includes(window.location.hostname) || window.location.hostname.endsWith('.github.io');

function mergeSubmitted(rows) {
  Array.from(rows || []).reverse().forEach(row => {
    if (items.some(item => item.id === row.public_content_id)) return;
    items.unshift({
      id:row.public_content_id,passportId:row.public_passport_id,hash:row.content_hash,title:row.title,type:row.content_type,topic:row.topic,status:'Concept',
      desc:row.description,provider:row.source_organisation,source:row.source_name,sourceUrl:row.media_url,audience:'Nog te kiezen',channels:[],owner:'Redactie JGZ Ouder&Kind',
      rights:row.rights_status,review:row.approval_confirmed ? 'Goedgekeurd in demo' : 'Nog te plannen',
      validator:row.validator_name ? row.validator_name + ' · ' + row.validator_organisation : 'Nog niet toegewezen',
      validation:row.validation_status === 'approved' ? 'Exacte versie goedgekeurd door de ingevulde valideerder.' : 'Voorgestelde controle: ' + row.validation_profile + '.'
    });
  });
}

function loadLocalSubmitted() {
  if (!isStaticDemo) return;
  try { mergeSubmitted(JSON.parse(localStorage.getItem(localContentKey) || '[]')); } catch {}
}

async function loadSubmitted() {
  loadLocalSubmitted();
  if (isStaticDemo) return;
  const response = await fetch('/api/content', {headers:{accept:'application/json'}});
  if (!response.ok) return;
  const data = await response.json();
  mergeSubmitted(data.items);
}

async function saveContentLocally(values) {
  const short = crypto.randomUUID().replaceAll('-','').slice(0,12).toUpperCase();
  const contentId = 'CHIP-JGZ-' + short;
  const approved = values.approvalConfirmed === 'true' || values.approvalConfirmed === true || values.approvalConfirmed === 'on';
  const row = {
    public_content_id:contentId,
    public_version_id:contentId + '-V1',
    public_passport_id:'CHIP-PASS-' + short,
    content_hash:await sha256Hex(JSON.stringify(values)),
    title:values.title,
    content_type:values.contentType,
    media_url:values.mediaUrl,
    language:values.language,
    topic:values.topic,
    description:values.description,
    source_name:values.sourceName,
    source_organisation:values.sourceOrganisation,
    rights_status:values.rightsStatus,
    validation_profile:values.validationProfile,
    validator_name:values.validatorName || null,
    validator_organisation:values.validatorOrganisation || null,
    approval_confirmed:approved,
    validation_status:approved ? 'approved' : 'not_reviewed'
  };
  const stored = JSON.parse(localStorage.getItem(localContentKey) || '[]');
  stored.unshift(row);
  localStorage.setItem(localContentKey, JSON.stringify(stored.slice(0,100)));
  return {...row,title:row.title};
}

async function submitContent(values) {
  if (isStaticDemo) return saveContentLocally(values);
  try {
    const response = await fetch('/api/content', {method:'POST',headers:{'content-type':'application/json',accept:'application/json'},body:JSON.stringify(values)});
    const data = await response.json().catch(() => ({}));
    if (response.ok) return data.item;
    if (!isStaticDemo) throw new Error(data.error || 'Opslaan is niet gelukt.');
  } catch (error) {
    if (!isStaticDemo) throw error;
  }
  return saveContentLocally(values);
}

function toast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('show');
  setTimeout(() => element.classList.remove('show'), 3800);
}

let wizardStep = 1;
function showWizardStep(step) {
  wizardStep = step;
  $$('.wizard-step').forEach(element => element.classList.toggle('active', Number(element.dataset.step) === step));
  $$('.progress span').forEach((element,index) => element.classList.toggle('active', index < step));
  $('#wizard-title').textContent = step === 1 ? 'Stap 1 van 3 · Wat wilt u toevoegen?' : step === 2 ? 'Stap 2 van 3 · Waar gaat het over?' : 'Stap 3 van 3 · Wie kijkt dit na?';
  $('#wizard-back').style.display = step === 1 ? 'none' : '';
  $('#wizard-next').style.display = step === 3 ? 'none' : '';
  $('#wizard-save').style.display = step === 3 ? '' : 'none';
  $('#form-message').textContent = '';
}

function openAdd(kind) {
  $('#content-form').reset();
  document.querySelector('[name="sourceOrganisation"]').value = 'JGZ Ouder&Kind';
  document.querySelector('[name="validatorOrganisation"]').value = 'JGZ Ouder&Kind';
  document.querySelector('[name="language"]').value = 'Nederlands';
  const choice = document.querySelector('[name="contentType"][value="' + kind + '"]');
  if (choice) choice.checked = true;
  showWizardStep(1);
  $('#add-dialog').showModal();
}

$$('.nav-item').forEach(button => button.onclick = () => switchView(button.dataset.view));
$$('[data-go]').forEach(button => button.onclick = () => switchView(button.dataset.go));
$$('[data-add-kind]').forEach(button => button.onclick = () => openAdd(button.dataset.addKind));
$('#add-content').onclick = () => openAdd('Webpagina');
$('#show-help').onclick = () => $('#help-dialog').showModal();
$('[data-help-add]').onclick = () => { $('#help-dialog').close(); openAdd('Webpagina'); };
$$('dialog .close').forEach(button => button.onclick = () => button.closest('dialog').close());
['search','provider-filter','status-filter'].forEach(id => $('#' + id).addEventListener(id === 'search' ? 'input' : 'change', renderLibrary));
$('#clear-filters').onclick = () => { $('#search').value = ''; $('#provider-filter').value = ''; $('#status-filter').value = ''; renderLibrary(); $('#search').focus(); };

$('#wizard-next').onclick = () => {
  if (wizardStep === 2) {
    const fields = $$('.wizard-step[data-step="2"] [required]');
    const invalid = fields.find(field => !field.reportValidity());
    if (invalid) return;
  }
  showWizardStep(Math.min(3,wizardStep + 1));
};
$('#wizard-back').onclick = () => showWizardStep(Math.max(1,wizardStep - 1));

const approvalCheckbox = document.querySelector('[name="approvalConfirmed"]');
const validatorFields = [document.querySelector('[name="validatorName"]'),document.querySelector('[name="validatorOrganisation"]')];
approvalCheckbox.onchange = () => validatorFields.forEach(field => field.required = approvalCheckbox.checked);

$('#content-form').onsubmit = async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = $('#wizard-save');
  const message = $('#form-message');
  button.disabled = true;
  message.textContent = 'Bezig met opslaan…';
  try {
    const values = Object.fromEntries(new FormData(form));
    const chosenType = form.querySelector('[name="contentType"]:checked').value;
    values.contentType = chosenType === 'Video' ? 'Video' : chosenType;
    if (!values.mediaUrl && chosenType === 'Eigen tekst') values.mediaUrl = window.location.origin + '/eigen-tekst/' + Date.now();
    if (!values.mediaUrl) throw new Error('Vul de link naar de informatie in.');
    const saved = await submitContent(values);
    $('#add-dialog').close();
    await loadSubmitted();
    await prepareTechnicalIdentity();
    setFilters(); renderStats(); renderHome(); renderLibrary(); renderSources();
    toast(saved.title + ' is als concept opgeslagen met een automatisch contentpaspoort.');
  } catch (error) {
    message.textContent = error.message;
  } finally {
    button.disabled = false;
  }
};

async function init() {
  await loadSubmitted().catch(() => {});
  await prepareTechnicalIdentity();
  setFilters(); renderStats(); renderHome(); renderLibrary(); renderSources(); renderOutputs();
  showWizardStep(1);
}
init();
