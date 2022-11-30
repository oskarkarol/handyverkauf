import {Component, OnInit} from '@angular/core';
import {Variant} from '../../models/variants.entity';
import {AssortmentService} from '../../services/assortment.service';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})

export class SaleComponent implements OnInit {
  variant: Variant;

  constructor(private assortmentService: AssortmentService, private routeSnapshot: ActivatedRoute) {
    const manufacturerId = this.routeSnapshot.snapshot.params.manufacturerId;
    const modelId = this.routeSnapshot.snapshot.params.modelId;
    const variantId = this.routeSnapshot.snapshot.params.variantId;
    this.assortmentService.getAssortment()
      .pipe(first(data => data.length > 0))
      .subscribe((data) => {
        const modelle = data?.find(manufacturer => manufacturer.uuid === +manufacturerId)?.modelle;
        const variants = modelle?.find(m => m.uuid === +modelId)?.varianten;
        this.variant = variants?.find(v => v.uuid === +variantId);
      });
  }

  ngOnInit() {}
}
