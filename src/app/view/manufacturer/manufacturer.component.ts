import {Component, OnInit} from '@angular/core';
import {Manufacturer} from '../../models/manufacturer.entity';
import {AssortmentService} from '../../services/assortment.service';
import {first} from 'rxjs/operators';
import {CONFIG} from '../../config/config';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.scss'],
})
export class ManufacturerComponent implements OnInit {
  baseurl = CONFIG.baseUrl;
  manufacturers: Manufacturer[] = [];

  constructor(private readonly assortmentService: AssortmentService) {
    this.assortmentService.getAssortment()
      .pipe(first(data => !!data))
      .subscribe(data => {
        this.manufacturers = data;
      });
  }

  async ngOnInit() {
  }
}
