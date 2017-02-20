let lastTodoId = 0;

export class Todo {
  id: number;
  checked: boolean = false;

  constructor(private text: string) {
    this.id = ++lastTodoId;
  }

};
