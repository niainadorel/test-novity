import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {
  priorities = ['LOW', 'NORMAL', 'HIGH']
  transform(value: number): string {
    return this.priorities[value];
  }

}
