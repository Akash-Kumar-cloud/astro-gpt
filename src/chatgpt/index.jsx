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

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setOpen(true)}>Open Chat</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Astro project</h2>
        <div
          style={{
            height: 300,
            overflowY: "scroll",
            border: "1px solid #ccc",
            padding: 10,
          }}
        >
          {messages.map((msg, i) => (
            <div key={i} style={{ margin: "10px 0" }}>
              <b>{msg.role === "chat_gpt_inte" ? "You" : "GPT"}:</b>{" "}
              {msg.content}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10 }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            style={{ width: "80%", marginRight: 10 }}
          />
          <button onClick={handleSend}>Ask</button>
        </div>
      </Modal>
    </div>
  );
};

export default ChatGPTIntegration;
