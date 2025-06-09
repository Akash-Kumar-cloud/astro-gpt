import React, { useState } from "react";
import { getChatGptResponse } from "../helper/helper";
import Modal from "../components/modal";

const ChatGPTIntegration = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "chat_gpt_inte", content: input };
    setMessages((prev) => [...prev, userMessage]);

    const reply = await getChatGptResponse(input);
    const botMessage = { role: "assistant", content: reply };

    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917978789694?text=Hello%21%20I%27m%20interested%20in%20your%20astrology%20consultation.",
      "_blank"
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <div>
        <h1 style={{ color: "white" }}>Welcome to Astro World</h1>
      </div>
      <div>
        <h5 style={{ color: "white" }}>
          "The stars don’t compel, they reveal."
        </h5>
      </div>

      <div
        style={{
          display: "flex", // ✅ Important!
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          padding: "40px 20px", // top-bottom & side spacing
          backgroundColor: "transparent", // change as needed
        }}
      >
        <button
          onClick={() => setOpen(true)}
          style={{
            backgroundColor: "#6a0dad",
            color: "#fff",
            padding: "16px 32px",
            border: "none",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(106, 13, 173, 0.4)",
            transition: "transform 0.2s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 10px rgba(106, 13, 173, 0.4)";
          }}
        >
          Open Chat
        </button>

        <button
          onClick={() => openWhatsApp()}
          style={{
            backgroundColor: "#25D366",
            color: "#fff",
            padding: "16px 32px",
            border: "none",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "transform 0.2s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
          }}
        >
          Contact Us
        </button>
      </div>

      <div
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            display: "inline-block",
            animation: "scrollLeft 120s linear infinite",
          }}
        >
          <h5
            style={{ color: "white", display: "inline", marginRight: "100px" }}
          >
            "We are born at a given moment, in a given place, and like vintage
            years of wine, we have the qualities of the year and of the season
            in which we are born — astrology simply reveals that unique cosmic
            signature" — Carl Jung
          </h5>
          <h5
            style={{ color: "white", display: "inline", marginRight: "100px" }}
          >
            “At the time of birth, the soul takes on a body in alignment with
            the karmic patterns reflected in the position of the planets. This
            divine blueprint is not fate—it is guidance.” — B.V. Raman, father
            of modern Vedic astrology
          </h5>
          <h5
            style={{ color: "white", display: "inline", marginRight: "100px" }}
          >
            “Astrology is a science in itself and contains an illuminating body
            of knowledge. It taught me many things and I am greatly indebted to
            it.” — Albert Einstein
          </h5>
          <h5
            style={{ color: "white", display: "inline", marginRight: "100px" }}
          >
            “Your astrology chart is a snapshot of the soul’s intention at
            birth—a map of your greatest challenges, strengths, and growth. It
            is a mirror, not a mandate.” — Steven Forrest, evolutionary
            astrologer
          </h5>
          <h5
            style={{ color: "white", display: "inline", marginRight: "100px" }}
          >
            “As is the macrocosm, so is the microcosm; as is the universe, so is
            the individual soul.” — The Rig Veda
          </h5>
          <h5
            style={{ color: "white", display: "inline", marginRight: "100px" }}
          >
            “Yatha pinde tatha brahmande, yatha brahmande tatha pinde.” “As is
            the individual, so is the universe; as is the universe, so is the
            individual.” — Vedic Proverb{" "}
          </h5>
          <h5
            style={{ color: "white", display: "inline", marginRight: "100px" }}
          >
            “Jyotisha is the eye of the Vedas; it illuminates the path of life
            by revealing the unseen threads of karma.” — Parashara Rishi, author
            of Brihat Parashara Hora Shastra
          </h5>
          <h5
            style={{ color: "white", display: "inline", marginRight: "100px" }}
          >
            “Kaala chakram pravartate — Time moves in cycles, and all beings
            move within its rhythm.” — Bhagavata Purana
          </h5>
          <h5
            style={{ color: "white", display: "inline", marginRight: "100px" }}
          >
            “The purpose of astrology is not to predict fate, but to understand
            the dharma of the soul and walk the path of higher consciousness.” —
            Sri Yukteswar Giri, guru of Paramahansa Yogananda
          </h5>
          <h5
            style={{ color: "white", display: "inline", marginRight: "100px" }}
          >
            “Grahas (planets) indicate tendencies, but not certainty. Man’s
            efforts, guided by wisdom, can alter the path shown by the stars.” —
            Varahamihira, ancient Indian astronomer and astrologer{" "}
          </h5>
        </div>

        <style>
          {`
      @keyframes scrollLeft {
        from { transform: translateX(100%); }
        to { transform: translateX(-100%); }
      }
    `}
        </style>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2 style={{ textAlign: "center", marginBottom: 10 }}>🔮 Astro Chat</h2>

        <div
          style={{
            maxHeight: 300,
            overflowY: "auto",
            borderRadius: 8,
            padding: 16,
            backgroundColor: "#f9f9f9",
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.1)",
            marginBottom: 10,
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                marginBottom: 12,
                textAlign: msg.role === "chat_gpt_inte" ? "right" : "left",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  backgroundColor:
                    msg.role === "chat_gpt_inte" ? "#DCF8C6" : "#fff",
                  padding: "10px 15px",
                  borderRadius: 20,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  maxWidth: "80%",
                }}
              >
                <strong style={{ fontSize: 12, color: "#666" }}>
                  {msg.role === "chat_gpt_inte" ? "You" : "Astro Bot"}
                </strong>
                <div style={{ marginTop: 5 }}>{msg.content}</div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask something about your stars..."
            style={{
              flex: 1,
              padding: "10px 15px",
              fontSize: 14,
              borderRadius: 20,
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
          <button
            onClick={handleSend}
            style={{
              backgroundColor: "#25D366",
              color: "#fff",
              padding: "10px 18px",
              border: "none",
              borderRadius: 20,
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Send
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ChatGPTIntegration;
