import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

// interface regionInterface {
//   id: string, name: string
// };

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 5px;
    }
    `
  ]
})

export class PorRegionComponent {

  //regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  paises: Country[] = [];
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  // regiones: regionInterface[] = [
  //   {id: 'EU', name: 'European Union'},
  //   {id: 'EFTA', name: 'European Free Trade Association'}, 
  //   {id: 'CARICOM', name: 'Caribbean Community'}, 
  //   {id: 'PA', name: 'Pacific Alliance'}, 
  //   {id: 'AU', name: 'African Union'},  
  //   {id: 'USAN', name: 'Union of South American Nations'},
  //   {id: 'EEU', name: 'Eurasian Economic Union'}, 
  //   {id: 'AL', name: 'Arab League'}, 
  //   {id: 'ASEAN', name: 'Association of Southeast Asian Nations'}, 
  //   {id: 'CAIS', name: 'Central American Integration System'}, 
  //   {id: 'CEFTA', name: 'Central European Free Trade Agreement'}, 
  //   {id: 'NAFTA', name: 'North American Free Trade Agreement'}, 
  //   {id: 'SAARC', name: 'South Asian Association for Regional Cooperation'}];
  
  //regionActiva: regionInterface = {id:'',name:''};
  regionActiva: string = '';

  constructor(private paisService: PaisService) { }

  getClassCSS(region: string):string {
    console.log(region);
    console.log(this.regionActiva);
    return (region===this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region===this.regionActiva) { return;}
    
    this.regionActiva = region;
    this.paises = [];
    this.buscarRegion(region);
  }

  buscarRegion(region: string) {
    this.paisService.getPaisesPorRegion(region)
    .subscribe( {next: (paises) => {
        this.paises=paises;
        console.log(paises);
      }, error: (err) => {
        this.paises = [];
      }
    });
  }

}
