import { Time } from "@angular/common";

export class Annonce {
    id:number;
    adresseDepart:Adresse;
    adresseArriver:Adresse;
    heure:string;
    duree:string;
    distance:number;
    placeDispo:number;
    constructor(public vehicule:Vehicule, public conducteur:Personne){}
}

export class Reservation {
  constructor(public passagerMatricule:string, public annonceID:number){}
}

export class Adresse {
    rue:string;
    codePostal:number;
    ville:string;
    constructor() {}
    
    afficher() :string {
        return `${this.rue}, ${this.ville}, ${this.codePostal}`;
    }
}

export enum Categorie {
  MICRO_URBAINE = "Micro-urbaines",
  MINI_CITADINE = "Mini-citadines",
  CITADINE_POLYVALENTE = "Citadines polyvalentes",
  COMPACTES = "Compactes",
  BERLINE_S = "Berlines Taille S",
  BERLINE_M = "Berlines Taille M",
  BERLINE_L = "Berlines Taille L",
  SUV = "SUV, Tout-terrains et Pick-up"
}

export enum StatusVehicule {
  REPARATION,
  HORS_SERVICES,
  EN_SERVICE
}

export enum Role {
  COLLABORATEUR,
  CHAUFFEUR,
  ADMINISTRATEUR
}

export class Vehicule {
  immatriculation: string;
  marque: string;
  modele: string;
  nbPlace: number;
  urlImage: string;
  categorie: Categorie;
  status: StatusVehicule;
  constructor() {}
}

export class Personne {
  nom: string;
  prenom: string;
  email: string;
  photo: string;
  matricule: string;
  password: string;
  role: Role;
  constructor() {}
}
