export class Todo {

  get isChecked() {
    return this.checked;
  }

  private checked: boolean = false;

  constructor(private text: string) {}

  getText(): string {
    return this.text;
  }

  toggleChacked() {
    this.checked = !this.checked;
  }
};
