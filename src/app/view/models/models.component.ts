import {Component, OnInit} from '@angular/core';
import {Model} from '../../models/model.entity';
import {AssortmentService} from '../../services/assortment.service';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {CONFIG} from '../../config/config';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss'],
})

export class ModelsComponent implements OnInit {
  baseUrl = CONFIG.baseUrl;
  modelle: Model[] = [];
  manufacturerId: string;

  constructor(private assortmentService: AssortmentService, private routeSnapshot: ActivatedRoute) {
    this.manufacturerId = this.routeSnapshot.snapshot.params.manufacturerId;
    this.assortmentService.getAssortment()
      .pipe(first(data => data.length > 0))
      .subscribe((data) => {
        this.modelle = data.find(manufacturer => manufacturer.uuid === +this.manufacturerId).modelle;
      });
  }

  ngOnInit(){}
}
