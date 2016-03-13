export class Elements {
  elments: HTMLElement[] = [];
  get(): HTMLElement[] {
    return this.elments;
  }
  add(value: HTMLElement): void {
    this.elments.push(value);
  }
}

export class Container extends Elements
{

}
