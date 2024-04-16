import { Component } from '@angular/core';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.page.html',
  styleUrls: ['./insurance-form.page.scss'],
})
export class InsuranceFormPage {

  nom: string = '';
  prenom: string = '';
  adresse: string = '';
  email: string = '';
  telephone: string = '';
  typeAssurance: string = '';
  montantAssure: number = 0;

  constructor() { }

  submitForm() {
    // Vous pouvez implémenter ici la logique pour traiter les données du formulaire,
    // telles que l'envoi à un serveur backend ou le stockage local.
    console.log('Nom:', this.nom);
    console.log('Prénom:', this.prenom);
    console.log('Adresse:', this.adresse);
    console.log('Email:', this.email);
    console.log('Téléphone:', this.telephone);
    console.log('Type d\'Assurance:', this.typeAssurance);
    console.log('Montant Assuré:', this.montantAssure);
  }

}
