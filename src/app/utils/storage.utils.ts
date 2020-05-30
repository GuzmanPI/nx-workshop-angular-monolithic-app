export class StorageUtils {
  static store(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static retrieve<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key));
  }
}
