export class HelloService {
  static async fetchHello(): Promise<string> {
    try {
      // Gebruik NEXT_PUBLIC_API_URL die nu '/api' is
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Backend error details:', {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
          errorData
        });
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error('Full error:', error);
      throw new Error('Failed to fetch greeting');
    }
  }
}