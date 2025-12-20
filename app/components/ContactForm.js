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
  thankYouMessage,
  errorMessage,
  privacyText,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const textareaRef = useRef(null);

  const isFormValid =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    message.trim().length > 0 &&
    acceptedPolicy;

  const autoGrow = (el) => {
    if (el.style.height >= "96px") return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!isFormValid) {
      setStatus(requiredMessage);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus(thankYouMessage);
        setName("");
        setEmail("");
        setMessage("");
        setAcceptedPolicy(false);

        if (textareaRef.current) {
          textareaRef.current.style.height = "";
        }
      } else {
        setStatus(data.error || errorMessage);
      }
    } catch {
      setStatus(errorMessage);
    }
  }

  const baseInputClasses = `
    w-full border-b border-black outline-none bg-transparent
    h-[32px] leading-[32px]
    placeholder:text-[clamp(12px,3.35vw,1rem)]
    placeholder:leading-[clamp(0.75rem,10vw,1.5rem)]
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
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={nameLabel}
          className={baseInputClasses}
          required
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={emailLabel}
          className={baseInputClasses}
          required
        />
      </div>

      <div className="max-w-[80%] lg:max-w-full">
        <textarea
          ref={textareaRef}
          rows={1}
          value={message}
          placeholder={messageLabel}
          required
          onInput={(e) => {
            setMessage(e.target.value);
            autoGrow(e.target);
          }}
          className={`${baseInputClasses} resize-none overflow-hidden py-0`}
        />
      </div>

      <div className="max-w-[80%] lg:max-w-full flex items-start gap-[10px] mt-[12px]">
        <input
          id="privacy"
          type="checkbox"
          checked={acceptedPolicy}
          onChange={(e) => setAcceptedPolicy(e.target.checked)}
          className="mt-[4px] accent-black cursor-pointer"
        />
        <label
          htmlFor="privacy"
          className="text-[clamp(12px,3.35vw,0.9rem)] font-light cursor-pointer"
        >
          {privacyText}
        </label>
      </div>

      {status && <p className="text-sm mt-2">{status}</p>}

      <div className="flex justify-end">
        <Button
          arrow={ArrowWhite}
          type="submit"
          bgColor="main-black"
          textColor="main-white"
          additionalStyles={`md:self-end mt-[8px] ${
            !isFormValid ? "pointer-events-none" : ""
          }`}
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
