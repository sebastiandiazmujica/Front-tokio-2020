import { Component, OnInit } from '@angular/core';
import { ApiService,Deportista } from '../../../Services/api/api.service';

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
    deportistas:Deportista[];
  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    this.getDeportistasByPage(this.page);
  }
    goToPage(page: number){
        this.page = page;
        this.getDeportistasByPage(page);
      }

      getDeportistasByPage(page: Number) {

      this.apiservice.GetDeportistas().subscribe((res)=>{
        this.deportistas = res;
        this.numDeportistas = res.length;
        this.totalPages = Math.round(this.numDeportistas / this.numResults);
        this.deportistas=res.slice((this.page-1)*this.numResults,this.page*this.numResults);
    });
        }
}
