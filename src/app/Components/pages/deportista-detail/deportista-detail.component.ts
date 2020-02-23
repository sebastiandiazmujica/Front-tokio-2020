import { Component, OnInit } from '@angular/core';
import { ApiService, Deportista, Participacion } from 'src/app/Services/api/api.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-deportista-detail',
  templateUrl: './deportista-detail.component.html',
  styleUrls: ['./deportista-detail.component.css']
})
export class DeportistaDetailComponent implements OnInit {

  deportista: Deportista;
  participaciones: Participacion[];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      const id = params.id;
      this.deportista = this.apiService.getDeportista(id);
      this.participaciones = this.apiService.getParticipaciones(id);
    });
  }

}
