import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  res!: string;

  transform(value: Date, ...args: unknown[]):string {
    const time = value;
    const now = new Date();
    const seconds = Math.floor((now.getTime() - value.getTime()) / 1000);
    console.log(seconds)

    if (seconds < 60) {
      this.res = 'just now';
    } else if (seconds < 120) {
      this.res = 'a minute ago';
    } else if (seconds < 3600) {
      this.res = Math.floor(seconds / 60) + ' minutes ago';
    } else if (seconds < 7200) {
      this.res = 'an hour ago';
    } else if (seconds < 86400) {
      this.res = Math.floor(seconds / 3600) + ' hours ago';
    } else {
      this.res = time.toLocaleString();
    }
    console.log(this.res)
    return this.res
  }

}
