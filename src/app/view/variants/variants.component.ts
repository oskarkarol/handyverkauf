import {Component, OnInit} from '@angular/core';
import {Variant} from '../../models/variants.entity';
import {AssortmentService} from '../../services/assortment.service';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-variants',
  templateUrl: './variants.component.html',
  styleUrls: ['./variants.component.scss'],
})

export class VariantsComponent implements OnInit {
  variants: Variant[] = [];
  manufacturerId: string;
  modelId: string;

  constructor(private assortmentService: AssortmentService, private routeSnapshot: ActivatedRoute) {
    this.manufacturerId = this.routeSnapshot.snapshot.params.manufacturerId;
    this.modelId = this.routeSnapshot.snapshot.params.modelId;
    this.assortmentService.getAssortment()
      .pipe(first(data => data.length > 0))
      .subscribe((data) => {
        const modelle = data?.find(manufacturer => manufacturer.uuid === +this.manufacturerId)?.modelle;
        if (modelle) {
          this.variants = modelle.find(m => m.uuid === +this.modelId)?.varianten;
        }
      });
  }

  ngOnInit() {
  }
}
