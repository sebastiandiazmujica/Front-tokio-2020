import { Component, OnInit } from '@angular/core';
import { ApiService, Deportista, Participacion } from 'src/app/Services/api/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalServiceService } from 'src/app/Services/modalService/modal-service.service';

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
    private modalServiceService: ModalServiceService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      const id = params.id;
      this.deportista = this.apiService.getDeportista(id);
      this.participaciones = this.apiService.getParticipaciones(id);
    });
  }

  openComment(idParticipacion: number, linkVideo: string): void {
    // tslint:disable-next-line:max-line-length
    this.modalServiceService.commentDialog({idParticipacion, linkVideo}).afterClosed().subscribe((res: {username: string, login: boolean}) => {
      }
    );
  }
}
