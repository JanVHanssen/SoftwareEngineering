export class HelloService {
  static async fetchHello(): Promise<string> {
    try {
      const response = await fetch(
        "https://janvhanssen-backend-bzbsewewaqdhbjcx.westeurope-01.azurewebsites.net/hello", 
        {
          method: "GET",
          headers: { 
            "Accept": "application/json",
            "Content-Type": "application/json" 
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error("Fetch error:", error);
      throw new Error("Failed to fetch greeting");
    }
  }
}