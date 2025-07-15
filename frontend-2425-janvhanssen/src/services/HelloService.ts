export class HelloService {
  static async fetchHello(): Promise<string> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include' // Als je cookies gebruikt
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error('Fetch error:', error);
      throw new Error('Failed to fetch greeting');
    }
  }
}