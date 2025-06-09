import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const API_URL = "https://api.openai.com/v1/chat/completions";

const ASTROLOGY_KEYWORDS = [
  // General Astrology
  "Astrology",
  "Horoscope",
  "Zodiac",
  "Birth Chart",
  "Natal Chart",
  "Ascendant",
  "Sun Sign",
  "Moon Sign",
  "Planets",
  "Houses",
  "Transits",
  "Retrograde",
  "Compatibility",
  "Predictions",
  "Elements",
  "Signs",
  "Modalities",

  // Vedic/Hindu Astrology Specific
  "Vedic Astrology",
  "Jyotish",
  "Kundli",
  "Rashi",
  "Nakshatra",
  "Dasha",
  "Mahadasha",
  "Antardasha",
  "Gochar",
  "Shani",
  "Mangal",
  "Rahu",
  "Ketu",
  "Lagna",
  "Chandra",
  "Surya",
  "Navamsa",
  "Bhava",
  "Graha",
  "Drishti",
  "Panchang",
  "Muhurta",
  "Kaal Sarp Dosh",
  "Manglik",
  "Ashtakvarga",
  "Charan",
  "Janam Kundali",
  "Nadi Astrology",
  "Shubh Muhurat",
  "Ketu Dasha",
  "Saturn Return",
  "Graha Dosha",
  "Yoga",
  "Raja Yoga",
  "Neech Bhang",
  "Planetary Positions",
  "Retrograde Planets",
  "House Lords",
];

export const getChatGptResponse = async (messages) => {
  try {
    const keywordInstruction = `\n\nPlease include the following Vedic astrology keywords where relevant: ${ASTROLOGY_KEYWORDS.join(
      ", "
    )}.`;

    const validMessages =
      Array.isArray(messages) &&
      messages.every((msg) => msg.role && msg.content)
        ? messages
        : [
            {
              role: "user",
              content: `${messages}${keywordInstruction}`,
            },
          ];

    const response = await axios.post(
      API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: validMessages,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(
      "Error calling ChatGPT API:",
      error?.response?.data || error.message
    );
    return "Sorry, something went wrong.";
  }
};
