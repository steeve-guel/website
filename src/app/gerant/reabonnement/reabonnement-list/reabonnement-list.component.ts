import { Component, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';

@Component({
  selector: 'app-reabonnement-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './reabonnement-list.component.html',
  styleUrl: './reabonnement-list.component.css',
})
export class ReabonnementListComponent {

  displayedColumns: string[] = [
    'bouquet',
    'decodeur',
    'duree',
    'dateDemande',
    'date_debutAbonnement',
    'date_finAbonnement',
    'commission',
    'status',
  ];

  dataSource!: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private canalService: CanalPlusServiceService) {}

  ngOnInit() {
    this.canalService.listeReabonnement().subscribe((data) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}

export interface Reabonnement {
  codeReabonnement: string;
  codeDistributeur: string;
  bouquet: string;
  duree: string;
  statut: string;
}

const ELEMENT_DATA: Reabonnement[] = [
  {
    codeReabonnement: 'R001',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeReabonnement: 'R002',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeReabonnement: 'R003',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeReabonnement: 'R004',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeReabonnement: 'R005',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeReabonnement: 'R006',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeReabonnement: 'R007',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeReabonnement: 'R008',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeReabonnement: 'R009',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeReabonnement: 'R010',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeReabonnement: 'R011',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeReabonnement: 'R012',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeReabonnement: 'R013',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
];
