"use client";

import { useState, useRef, useEffect } from "react";

// Gotowe pytania startowe (architektura budowlana)
const qa = [
  {
    question: "Jak wygląda proces projektu domu jednorodzinnego?",
    answer:
      "Proces obejmuje: analizę działki, koncepcję, projekt budowlany, uzyskanie pozwolenia oraz projekt wykonawczy.",
  },
  {
    question: "Co to jest MPZP?",
    answer:
      "MPZP (Miejscowy Plan Zagospodarowania Przestrzennego) określa, co i w jaki sposób można wybudować na danej działce.",
  },
  {
    question: "Czym różni się projekt koncepcyjny od budowlanego?",
    answer:
      "Koncepcja to ogólny pomysł i układ, projekt budowlany to dokumentacja do pozwolenia na budowę.",
  },
  {
    question: "Ile trwa wykonanie projektu architektonicznego?",
    answer:
      "Zwykle od 4 do 12 tygodni – zależnie od skali inwestycji i zakresu opracowania.",
  },
];

export default function ChatArchitekt() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Cześć! Jestem asystentem architekta. Wybierz pytanie lub napisz własne 👇",
    },
  ]);
  const [asked, setAsked] = useState([]);
  const [showQuestions, setShowQuestions] = useState(true);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleQuestionClick(item) {
    const userMessage = { from: "user", text: item.question };
    const botMessage = { from: "bot", text: item.answer };
    const followUp = {
      from: "bot",
      text: "Masz inne pytanie? Możesz też wpisać własne poniżej.",
    };

    setMessages((prev) => [...prev, userMessage, botMessage, followUp]);
    setAsked((prev) => [...prev, item.question]);
    setShowQuestions(false);
  }

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const text = input;
    setInput("");

    const userMessage = { from: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({
            role: m.from === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });

      const data = await res.json();

      const botMessage = {
        from: "bot",
        text: data.answer || "Nie udało się wygenerować odpowiedzi.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Wystąpił błąd połączenia z serwerem." },
      ]);
    }

    setLoading(false);
  }

  const availableQuestions = qa.filter(
    (item) => !asked.includes(item.question)
  );

  return (
    <>
      {/* Dymek */}
      <div style={styles.bubble} onClick={() => setOpen(!open)}>
        💬
      </div>

      {open && (
        <div style={styles.window}>
          <div style={styles.header}>Asystent architekta</div>

          <div
            style={styles.chatBox}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={msg.from === "user" ? styles.userMsg : styles.botMsg}
              >
                {msg.text}
              </div>
            ))}

            {!showQuestions && availableQuestions.length > 0 && (
              <button
                style={styles.moreButton}
                onClick={() => setShowQuestions(true)}
              >
                ➕ Wybierz kolejne pytanie
              </button>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Lista pytań */}
          {showQuestions && availableQuestions.length > 0 && (
            <div style={styles.questionsBox}>
              {availableQuestions.map((item, index) => (
                <button
                  key={index}
                  style={styles.questionButton}
                  onClick={() => handleQuestionClick(item)}
                >
                  {item.question}
                </button>
              ))}
            </div>
          )}

          {/* Input do rozmowy z AI */}
          <div style={styles.inputBox}>
            <input
              style={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Zadaj pytanie architektowi..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              style={styles.sendButton}
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? "..." : "Wyślij"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  bubble: {
    position: "fixed",
    right: "24px",
    bottom: "24px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#000",
    color: "white",
    fontSize: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    zIndex: 1000,
  },

  window: {
    position: "fixed",
    right: "24px",
    bottom: "100px",
    width: "340px",
    height: "460px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: 1000,
  },

  header: {
    padding: "12px",
    background: "#000",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  chatBox: {
    flex: 1,
    padding: "12px",
    background: "#f9f9f9",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    overflowY: "auto",
    overscrollBehavior: "contain",
  },

  botMsg: {
    alignSelf: "flex-start",
    background: "#e0e7ff",
    padding: "8px 12px",
    borderRadius: "12px",
    maxWidth: "85%",
  },

  userMsg: {
    alignSelf: "flex-end",
    background: "#c7f9cc",
    padding: "8px 12px",
    borderRadius: "12px",
    maxWidth: "85%",
  },

  moreButton: {
    alignSelf: "center",
    marginTop: "8px",
    padding: "6px 10px",
    borderRadius: "6px",
    border: "1px solid #000",
    background: "white",
    color: "#000",
    cursor: "pointer",
    fontSize: "13px",
  },

  questionsBox: {
    padding: "10px",
    borderTop: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    background: "#fff",
  },

  questionButton: {
    padding: "6px 10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    background: "#f1f1f1",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "13px",
  },

  inputBox: {
    display: "flex",
    borderTop: "1px solid #ddd",
    padding: "8px",
    gap: "6px",
    background: "#fff",
  },

  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  sendButton: {
    padding: "8px 12px",
    borderRadius: "6px",
    border: "none",
    background: "#000",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
  },
};
