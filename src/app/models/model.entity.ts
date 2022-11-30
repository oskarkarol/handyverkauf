import {Variant} from './variants.entity';

export class Model {
  uuid: number;
  name: string;
  produktbild: string;
  beschreibung: string;
  varianten: Variant[];
}
