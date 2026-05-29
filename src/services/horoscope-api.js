export async function fetchHoroscope(sign) {
  const apiKey = import.meta.env.VITE_HOROSCOPE_API_KEY;

  const response = await fetch(
    `https://api.api-ninjas.com/v1/horoscope?zodiac=${sign.toLowerCase()}`,
    {
      headers: {
        "X-Api-Key": apiKey,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch horoscope.");
  }

  return response.json();
}