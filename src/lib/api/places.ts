export interface Listing {
    image: string;
    city: string;
    hotel: string;
    description: string;
    rating: string;
    ratingTotal: string;
    price: string;
}

const API_KEY: string = import.meta.env.VITE_RAPID_API_KEY;
const API_HOST: string = "google-map-places.p.rapidapi.com";

export async function fetchListings(city: string): Promise<Listing[]> {
    const url = `https://${API_HOST}/maps/api/place/textsearch/json?query=hotels+in+${city}&language=nl`;

    if (!API_KEY) {
        throw new Error("API Key is missing");
    }

    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": API_HOST
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (!data.results || !Array.isArray(data.results)) {
            return [];
        }

        return data.results.slice(0, 4).map((listing: unknown) => {
            const hotel = listing as {
                name: string;
                formatted_address: string;
                rating?: number;
                user_ratings_total?: number;
                photos?: { photo_reference: string }[];
            };

            return {
                image: hotel.photos?.[0]?.photo_reference
                // Only returns a image when a valid "Places API" Key is provided
                ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${hotel.photos[0].photo_reference}&key=${API_KEY}`
                : "/images/placeholder.svg",
                city,
                hotel: hotel.name,
                description: hotel.formatted_address, // Uses address as description, as the API does not return a description
                rating: hotel.rating ? hotel.rating.toFixed(1) : "N/A",
                ratingTotal: hotel.user_ratings_total ? `(${hotel.user_ratings_total})` : "(0)",
                price: `€ ${(Math.random() * 300 + 50).toFixed(0)},-`, // Uses random price, as the API does not return a price
            };
        });
    } catch (error) {
        console.error("Failed to fetch listings:", error);
        return [];
    }
}
