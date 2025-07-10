export class HelloService {
  static async fetchHello(): Promise<string> {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`);
      console.log("Fetching from:", `${process.env.NEXT_PUBLIC_API_URL}/hello`);
      const data = await res.json();
      console.log("Ontvangen data:", data);
      return data.message;
    } catch (error) {
      console.error("Fout bij ophalen van hello:", error);
      throw error;
    }
  }
}
