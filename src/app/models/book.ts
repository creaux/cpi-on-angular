export class Book {
  id: number;
  name: string;
  year: number;
  color: string;
  pantoneValue: string;

  constructor({ id, name, year, color, pantone_value }) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.color = color;
    this.pantoneValue = pantone_value;
  }
}

export class BookAPI {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;

  constructor({ id, name, year, color, pantone_value }) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.color = color;
    this.pantone_value = pantone_value;
  }
}
