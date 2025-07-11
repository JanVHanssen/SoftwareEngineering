export class HelloService {
  static async fetchHello(): Promise<string> {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) throw new Error("API URL is not configured");
      
      console.log("Fetching from:", `${apiUrl}/hello`);
      
      const res = await fetch(`${apiUrl}/hello`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      if (!res.ok) {
        const errorData = await res.text();
        console.error("Backend error response:", errorData);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      console.log("Received data:", data);
      
      if (!data.message) {
        throw new Error("Invalid response format - missing message field");
      }
      
      return data.message;
    } catch (error) {
      console.error("Error fetching hello:", error);
      throw new Error("Failed to fetch greeting: " + (error instanceof Error ? error.message : String(error)));
    }
  }
}
