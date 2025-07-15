export class HelloService {
  static async fetchHello(): Promise<string> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        },
        // credentials: 'include' // Alleen als backend met cookies werkt
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
