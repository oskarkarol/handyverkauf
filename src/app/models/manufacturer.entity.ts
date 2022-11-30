import {Model} from './model.entity';

export class Manufacturer {
  uuid: number;
  name: string;
  logo: string;
  beschreibung: string;
  modelle: Model[];
}
