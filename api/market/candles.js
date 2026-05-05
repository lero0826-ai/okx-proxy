export default async function handler(req, res) {
  const { bar = '1H', instId = 'BTC-USDT', limit = '10' } = req.query;
  const okxUrl = `https://www.okx.com/api/v5/market/candles?bar=${bar}&instId=${instId}&limit=${limit}`;

  try {
    const response = await fetch(okxUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json'
      }
    });
    const data = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(data);
  } catch (e) {
    res.status(502).json({ error: e.message });
  }
}
