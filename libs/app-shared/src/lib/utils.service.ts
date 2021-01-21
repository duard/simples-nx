import { EventEmitter, Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import * as momentTZ from 'moment-timezone';
import * as arrayToTree from 'array-to-tree';
import { Subject } from 'rxjs';
import { SwalService } from './swal.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {

  paginatorWasChanged = new EventEmitter<any>();

  public decrementBadgeSubject = new Subject<any>();


  constructor(
    private _swalService: SwalService,
  ) { }

  formIsValid(form: FormGroup): boolean {
    if (form.valid) {
      return true;
    } else {
      this.markFormTouched(form);
      this._swalService.error('Ops', 'Existem campos que não foram preenchidos adequadamente!');
      return false;
    }
  }

  hasRequiredField(abstractControl: AbstractControl): boolean {
    if (abstractControl.validator) {
      const validator = abstractControl.validator({} as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    return false;
  }

  setValuesForm(form: FormGroup, item: any, exceptions = []): void {
    const keys = Object.keys(form.getRawValue());
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < keys.length; i++) {
      if (!(exceptions.includes(keys[i]))) {
        if (form.get(keys[i])) {
          form.get(keys[i]).setValue(item[keys[i]]);
        }
      }
    }
  }

  enableForm(form: FormGroup, exceptions: string[]): void {
    const keys = Object.keys(form.getRawValue());

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < keys.length; i++) {
      if (!(exceptions.includes(keys[i]))) {
        form.get(keys[i]).enable();
      }
    }
  }

  disableForm(form: FormGroup, exceptions: string[]): void {
    const keys = Object.keys(form.getRawValue());

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < keys.length; i++) {
      if (!(exceptions.includes(keys[i]))) {
        form.get(keys[i]).disable();
      }
    }
  }

  // formIsValid(form: FormGroup): boolean {
  //   if (form.valid) {
  //     return true;
  //   } else {
  //     this.markFormTouched(form);
  //     this._swalService.error('Ops', 'Existem campos que não foram preenchidos adequadamente!');
  //     return false;
  //   }
  // }

  markFormTouched(form: FormGroup): void {
    const keys = Object.keys(form.getRawValue());

    for (const key of keys) {
      form.get(key).markAsTouched();
    }
  }

  validateFileImage(file, required?): boolean {
    if (file && typeof file.name === 'string') {
      const mimeType = file.type;
      if (mimeType.match(/image\/png/) || mimeType.match(/image\/jpg/) || mimeType.match(/image\/jpeg/)) {
        return true;
      } else {
        return false;
      }
    } else if (file && typeof file === 'string') {
      return true;
    } else if (required) {
      return false;
    } else {
      return true;
    }

  }

  validateFilePdf(file): boolean {
    const mimeType = file.type;
    if (mimeType.match(/application\/pdf/)) {
      return true;
    } else {
      return false;
    }
  }

  validateFileZip(file): boolean {
    const mimeType = file.type;
    if (mimeType.match(/application\/zip/) || mimeType.match(/application\/x-zip-compressed/)) {
      return true;
    } else {
      return false;
    }
  }

  momentToDate(date): string {
    if (typeof date === 'object') {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    } else {
      return date;
    }
  }

  checkDateIsBefore(date): boolean {
    return moment(date).isBefore(moment());
  }

  formatDecimalValues(value, decimalPlaces): number {
    if (value && decimalPlaces) {
      const wholePlaces = value.length - decimalPlaces;
      value = value.slice(0, wholePlaces) + '.' + value.slice(wholePlaces);

      return parseFloat(value);
    }
    return null;
  }

  convertTimezone(value, format, timezone?): string {
    timezone = timezone ? timezone : momentTZ.tz.guess();
    return momentTZ(value).tz(timezone).format(format);
  }

  generateColor(): string {
    const hexadecimal = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexadecimal[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  changeValueDecimal(event, totalPlaces, decimalPlaces): string {
    const arrayAccepted = [8, 35, 36, 37, 38, 39, 40, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100,
      101, 102, 103, 104, 105, 108, 110, 188, 190, 194];
    if (arrayAccepted.includes(event.keyCode)) {

      let currentValue = event.target.value.toString();
      let ignoreKey;
      const keyPress = event.keyCode;
      const arrayKeyCode = [108, 110, 188, 190, 194];

      if (arrayKeyCode.includes(keyPress)) {
        ignoreKey = currentValue.slice(0, currentValue.length - 1);
        if (ignoreKey.includes('.') && currentValue.length > 1 && currentValue !== '0.') {
          currentValue = currentValue.slice(0, currentValue.length - 1);
        } else {
          currentValue = currentValue.replace(',', '.');
        }
      }

      const positionDot = currentValue.indexOf('.');

      if (positionDot === 0) {
        currentValue = `0${currentValue}`;
      }

      const placesInt = positionDot > 0 ? currentValue.slice(0, positionDot).replace('.', '').replace(',', '') : currentValue.replace('.', '').replace(',', '');
      const placesDec = positionDot > 0 ? currentValue.slice(positionDot + 1, currentValue.length).replace('.', '').replace(',', '') : '';

      if (positionDot > 0) {
        if (placesDec.length > decimalPlaces) {
          currentValue = currentValue.slice(0, positionDot + (decimalPlaces + 1));
        }
      } else {
        if (placesInt.length >= (totalPlaces - decimalPlaces)) {
          currentValue = `${placesInt.slice(0, (totalPlaces - decimalPlaces))}.${placesDec.slice((totalPlaces - decimalPlaces), totalPlaces + decimalPlaces)}`;
        }
      }

      if (placesInt.length > (totalPlaces - decimalPlaces)) {
        currentValue = `${placesInt.slice(0, (totalPlaces - decimalPlaces))}.${placesDec.slice((totalPlaces - decimalPlaces), totalPlaces)}`;
      } else if (placesInt.length <= (totalPlaces - decimalPlaces) && positionDot > 0 && (placesDec.length <= decimalPlaces)) {
        currentValue = `${placesInt}.${placesDec}`;
      }

      return currentValue;
    } else {
      return;
    }
  }

  defineStatusComposition(status: number): string {
    if (status === 1) {
      return 'Disponivel para Fila';
    } else if (status === 2) {
      return 'Aguardando Posição';
    } else if (status === 3) {
      return 'Posicionado na Fila';
    } else if (status === 4) {
      return 'Acionado para Pesagem';
    } else if (status === 5) {
      return 'Checklist Aprovado';
    } else if (status === 6) {
      return 'Checklist Reprovado';
    } else if (status === 7) {
      return 'Dentro da Fábrica';
    } else if (status === 8) {
      return 'Pesagem Inicial Realizada';
    } else if (status === 9) {
      return 'Em Carregamento';
    } else if (status === 10) {
      return 'Carregamento Finalizado';
    } else if (status === 11) {
      return 'Pesagem Final Realizada';
    } else if (status === 12) {
      return 'Encaminhado para Ajuste de Peso';
    } else if (status === 13) {
      return 'Fora da Fábrica';
    } else if (status === 14) {
      return 'Viagem Iniciada';
    } else if (status === 15) {
      return 'Chegada ao Cliente';
    } else if (status === 16) {
      return 'Iniciou Aplicação';
    } else if (status === 17) {
      return 'Interrompeu Aplicação';
    } else if (status === 18) {
      return 'Retomou Aplicação';
    } else if (status === 19) {
      return 'Finalizou Aplicação';
    } else if (status === 20) {
      return 'Retornando para Fábrica';
    } else if (status === 21) {
      return 'Em Manutenção';
    } else if (status === 22) {
      return 'Em Descanso Interjornada';
    } else {
      return '-';
    }
  }

  defineStatusVehicleLoad(loadStatus: number): string {
    if (loadStatus === 1) {
      return 'Sugerida';
    } else if (loadStatus === 2) {
      return 'Pendente';
    } else if (loadStatus === 3) {
      return 'Acordada';
    } else if (loadStatus === 4) {
      return 'Desacordada';
    } else {
      return '-';
    }
  }

  defineStatusRequest(status: number): string {
    if (status === 1) {
      return 'Importado';
    } else if (status === 2) {
      return 'Programado';
    } else if (status === 3) {
      return 'ForeCast Pendente';
    } else if (status === 4) {
      return 'ForeCast Aprovado';
    } else if (status === 5) {
      return 'ForeCast Reprovado';
    } else if (status === 6) {
      return 'Liberado para Produção';
    } else if (status === 7) {
      return 'Encerrado';
    } else {
      return '-';
    }
  }

  defineStatusSanitation(status: number): string {
    if (status === 1) {
      return 'Necessária';
    } else if (status === 2) {
      return 'Desnecessária';
    } else if (status === 3) {
      return 'Aprovada';
    } else {
      return '-';
    }
  }



  defineTitleTimeline(status: number): string {

    if (status === 18) {
      return 'Iniciou viagem';
    } else if (status === 19) {
      return 'Chegou ao cliente';
    } else if (status === 20) {
      return 'Iniciou a aplicação';
    } else if (status === 21) {
      return 'Interrompeu a aplicação';
    } else if (status === 22) {
      return 'Retomou a aplicação';
    } else if (status === 23) {
      return 'Finalizou a aplicação';
    } else if (status === 24) {
      return 'Retornando à fábrica';
    } else if (status === 25) {
      return 'Entrou em manutenção';
    } else if (status === 27) {
      return 'Parou para Descanso Interjornada';
    } else if (status === 26) {
      return 'Encerrou a viagem';
    } else {
      return '-';
    }

  }



  vehicleStatus(status): string {
    if (status === null) {
      return 'Aguardando Chegada';
    } else if (status === 1) {
      return 'Em Carregamento';
    } else if (status === 2) {
      return 'Carregamento Finalizado';
    }
  }

  children(element): void {
    element.children.map(item => {
      if (item.children) {
        delete item.url;
        item.type = 'collapsable';
        this.children(item);
      } else {
        item.type = 'item';
      }
      return item;
    });
  }
}
