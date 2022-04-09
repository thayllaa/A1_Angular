import { Injectable } from '@angular/core';

interface Disciplinas {
  id: string;
  name: string;
  day: string;
  hour: string;
  ement: string;
}

@Injectable()
export class ThayllaDisciplinasService {
  lista: Array<Disciplinas> = [];

  constructor() {}

  getLista() {
    return this.lista;
  }

  add(id: string, name: string, day: string, hour:string, ement: string) {
    this.lista.push({ id, name, day, hour, ement });
  }

  remove(index: number) {
    this.lista.splice(index, 1);
  }
}