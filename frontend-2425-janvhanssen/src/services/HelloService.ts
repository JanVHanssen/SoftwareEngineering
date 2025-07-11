export class HelloService {
  static async fetchHello(): Promise<string> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log("Ontvangen data:", data);
    return data.message;
  } catch (error) {
    console.error("Fout bij ophalen van hello:", error);
    throw error;
  }
}
}
