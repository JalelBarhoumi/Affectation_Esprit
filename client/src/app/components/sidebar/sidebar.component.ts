import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/departement', title: 'Gestion Departements',  icon: 'fa fa-university', class: '' },
    { path: '/up', title: 'Gestion Unité Pédagogique',  icon: 'fa fa-university', class: '' },
    { path: '/Competence', title: 'Gestion Competences',  icon: 'fa fa-university', class: '' },
    { path: '/type', title: 'Gestion des types d Enseignement',  icon: 'fa fa-university', class: '' },
    { path: '/Enseignant', title: 'Gestion des Enseignants',  icon: 'fa fa-university', class: '' },
    { path: '/disponibilite', title: 'Disponibilité des enseignant',  icon: 'fa fa-university', class: '' },
    { path: '/module', title: 'Gestion des Modules',  icon: 'fa fa-university', class: '' },
    { path: '/classe', title: 'Gestion des Niveaux',  icon: 'fa fa-university', class: '' },
    { path: '/heuresup', title: 'Gestion des heures sup',  icon: 'fa fa-university', class: '' },
    { path: '/optup', title: 'Affecter un enseignat a une Autre Unité Pédagogique',  icon: 'fa fa-university', class: '' },
    
    
    { path: '/affectation', title: 'Affectation des Classes',  icon: 'fa fa-university', class: '' },
    { path: '/affectationTH', title: 'Tableaux Horraire',  icon: 'fa fa-university', class: '' },

    


    { path: '/historique', title: 'Historique des affectations',  icon: 'fa fa-university', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
