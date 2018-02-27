export class Todo {
  id: string;
  text: string;
  status: boolean;

  constructor(data) {
    this.id = data.id;
    this.text = data.text;
    this.status = !!data.status;

  }
}
