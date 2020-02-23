import { Component, OnInit } from '@angular/core';
import { ApiService, Deportista } from '../../../Services/api/api.service';

@Component({
  selector: 'app-deportistas',
  templateUrl: './deportistas.component.html',
  styleUrls: ['./deportistas.component.css']
})
export class DeportistasComponent implements OnInit {


  public page: number = 1; //Número de página en la que estamos. Será 1 la primera vez que se carga el componente
  public totalPages: number; //Número total de páginas
  public numDeportistas: number; //Total de tiendas existentes
  private numResults: number = 10;
  deportistas: Deportista[];
  deportes: any[];
  modalidades: any[];

  opcionSeleccionadoDeporte = -1;

  opcionSeleccionadaModalidad: -1;



  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.getDeportistasByPage(this.page);
    this.getDeportes();
  }
  goToPage(page: number) {
    this.page = page;
    this.getDeportistasByPage(page);
  }

  getDeportistasByPage(page: Number) {
    this.apiservice.GetDeportistas().subscribe((res) => {
      this.deportistas = res;
      this.numDeportistas = res.length;
      this.totalPages = Math.round(this.numDeportistas / this.numResults);
      this.deportistas = res.slice((this.page - 1) * this.numResults, this.page * this.numResults);
    });
  }

  getDeportes() {
    this.deportes = this.apiservice.getDeportes();
  }

  getDeportistasDeporte(deporte: string) {
    this.deportistas = this.apiservice.getDeportistasDeporte(deporte);
  }

  capturarDeporte() {
    if (this.opcionSeleccionadoDeporte != -1) {
      this.modalidades = this.apiservice.getModalidades(this.deportes[this.opcionSeleccionadoDeporte].nombre);
      this.getDeportistasDeporte(this.deportes[this.opcionSeleccionadoDeporte].nombre);
      if (this.modalidades.length === 0) {
        this.modalidades = [];
      }
    }
    if (this.opcionSeleccionadoDeporte == -1) {
      this.getDeportistasByPage(this.page);
      this.opcionSeleccionadaModalidad = -1;
      this.modalidades = [];
    }
  }

  capturarModalidad() {
    if (this.opcionSeleccionadaModalidad != -1) {
      this.deportistas = this.apiservice.getDeportistasDeporteModalidad(this.modalidades[this.opcionSeleccionadaModalidad])
    }
  }





}
