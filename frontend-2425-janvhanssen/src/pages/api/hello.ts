import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Log de request voor debugging
    console.log('Proxy request to backend:', req.method, req.url);

    const backendResponse = await fetch(
      `${process.env.BACKEND_URL}/hello`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Voeg andere headers toe indien nodig
        }
      }
    );

    if (!backendResponse.ok) {
      throw new Error(`Backend responded with ${backendResponse.status}`);
    }

    const data = await backendResponse.json();
    
    // Stel CORS headers in voor de proxy response
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
    
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}