import { useState, useRef, useEffect } from "react";
import "./AIChat.css";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

function AIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // TODO: replace with real LLM call, passing fileContext as context
    const placeholderReply: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      text: "This is a placeholder response. Connect this to your LLM backend.",
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, placeholderReply]);
    }, 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="ai-chat">
      <div className="ai-chat-header">Ask about this file</div>
      <div className="ai-chat-messages" ref={scrollRef}>
        {messages.length === 0 ? (
          <p className="ai-chat-empty">
            Upload a file, then ask a question about it.
          </p>
        ) : (
          messages.map((m) => (
            <div key={m.id} className={`ai-chat-bubble ai-chat-bubble-${m.role}`}>
              {m.text}
            </div>
          ))
        )}
      </div>
      <div className="ai-chat-input-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question about this file"
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default AIChat;