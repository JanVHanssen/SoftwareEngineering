export class HelloService {
  static async fetchHello(): Promise<string> {
    const res = await fetch("http://localhost:8080/hello");
    if (!res.ok) {
      throw new Error("Fout bij ophalen van greeting");
    }
    const data = await res.json();
    return data.message;
  }
}