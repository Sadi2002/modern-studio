// components/ContactForm.js
"use client";
import ArrowWhite from "../../public/arrow-right-white.png";
import { useState } from "react";
import Button from "../components/Button"; // dostosuj ścieżkę do Twojego projektu

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
        // czyszczenie pól
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const { error } = await response.json();
        setStatus(error || "Wystąpił błąd.");
      }
    } catch {
      setStatus("Nie udało się wysłać wiadomości.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 max-w-[100%] lg:max-w-[800px]"
    >
      <h2 className="text-[20px] font-medium-font-weight mb-[20px] lg:mb-[40px]">
        {formTitle}
      </h2>
      <div className="flex flex-col gap-[20px] md:flex-row md:gap-8 max-w-[80%] lg:max-w-[100%] mb-[40px]">
        <div className="flex-1">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={nameLabel}
            autoComplete="off"
            className="w-full border-b border-black outline-none py-1 bg-transparent placeholder:text-[12px] lg:placeholder:text-[16px] placeholder:font-light"
          />
        </div>
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailLabel}
            autoComplete="off"
            className="w-full border-b border-black outline-none py-1 bg-transparent placeholder:text-[12px] lg:placeholder:text-[16px] placeholder:font-light"
          />
        </div>
      </div>
      <div className="max-w-[80%] lg:max-w-[100%]">
        <textarea
          rows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={messageLabel}
          className="w-full border-b border-black outline-none py-1 bg-transparent resize-none placeholder:text-[12px] lg:placeholder:text-[16px] placeholder:font-light"
        />
      </div>
      {status && <p className="text-sm mt-2">{status}</p>}
      <div className="flex justify-end">
        {/* Używamy Button jako elementu button; linkTo pomijamy, aby nie przekierowywać */}
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
