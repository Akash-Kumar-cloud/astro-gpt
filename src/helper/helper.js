import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const API_URL = "https://api.openai.com/v1/chat/completions";

export const getChatGptResponse = async (messages) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-4.1", // or gpt-4 if available on your account
        messages: messages,
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
    console.error("Error calling ChatGPT API:", error);
    return "Sorry, something went wrong.";
  }
};
