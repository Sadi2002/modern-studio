// components/ContactForm.js
"use client";

import ArrowWhite from "../../public/arrow-right-white.png";
import { useState, useRef } from "react";
import Button from "../components/Button";

export default function ContactForm({
  formTitle,
  nameLabel,
  emailLabel,
  messageLabel,
  submitLabel,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const textareaRef = useRef(null);

  const autoGrow = (el) => {
    if (el.style.height >= "96px") return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("Wiadomość wysłana pomyślnie.");
        setName("");
        setEmail("");
        setMessage("");

        if (textareaRef.current) {
          textareaRef.current.style.height = "";
        }
      } else {
        const { error } = await response.json();
        setStatus(error || "Wystąpił błąd.");
      }
    } catch {
      setStatus("Nie udało się wysłać wiadomości.");
    }
  }

  const baseInputClasses = `
    w-full border-b border-black outline-none bg-transparent
    h-[32px] leading-[32px]  
    placeholder:text-[clamp(12px,3.35vw,1rem)] placeholder:leading-[clamp(0.75rem,10vw,1.5rem)]
    placeholder:font-light
  `;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 max-w-full lg:max-w-[800px]"
    >
      <h2 className="text-[20px] font-medium mb-[20px] lg:mb-[40px]">
        {formTitle}
      </h2>

      <div className="flex flex-col gap-[20px] md:flex-row md:gap-8 max-w-[80%] lg:max-w-full mb-[40px]">
        <div className="flex-1">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={nameLabel}
            autoComplete="off"
            className={baseInputClasses}
          />
        </div>

        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailLabel}
            autoComplete="off"
            className={baseInputClasses}
          />
        </div>
      </div>

      <div className="max-w-[80%] lg:max-w-full">
        <textarea
          ref={textareaRef}
          rows={1}
          value={message}
          placeholder={messageLabel}
          onInput={(e) => {
            setMessage(e.target.value);
            autoGrow(e.target);
          }}
          className={`
            ${baseInputClasses}
            resize-none overflow-hidden py-0
            placeholder:break-keep placeholder:break-words
          `}
        />
      </div>

      {status && <p className="text-sm mt-2">{status}</p>}

      <div className="flex justify-end">
        <Button
          arrow={ArrowWhite}
          type="submit"
          bgColor="main-black"
          textColor="main-white"
          additionalStyles="md:self-end mt-[8px]"
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
