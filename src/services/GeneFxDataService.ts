export class GeneFxDataService {
  static num: number = 0;

  static test() {
    return this.num++;
  }

  static async testFetch() {
    const res = await fetch("https://www.genefx.com/");
    return res.text();
  }
}
