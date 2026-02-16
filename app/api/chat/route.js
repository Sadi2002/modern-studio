export const runtime = "nodejs";

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { message, history } = await req.json();

    // 🔐 FILTR TEMATYCZNY – BACKENDOWA OCHRON
    const keywords = [
      "dom",
      "budowa",
      "działka",
      "projekt",
      "architekt",
      "pozwolenie",
      "mpzp",
      "warunki zabudowy",
      "koncepcja",
      "budynek",
      "plan",
      "inwestycja",
      "garaż",
      "dach",
      "elewacja",
      "fundament",
      "strop",
    ];

    const lower = message.toLowerCase();
    const ok = keywords.some((w) => lower.includes(w));

    if (!ok) {
      return Response.json({
        answer:
          "Nie mam informacji na ten temat. Zadaj proszę pytanie związane z architekturą budowlaną.",
      });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Jesteś asystentem informacyjnym dotyczącym WYŁĄCZNIE architektury budowlanej. " +
            "Odpowiadasz krótko, konkretnie i praktycznie. " +
            "Jeśli pytanie nie dotyczy architektury, zawsze odmawiaj.",
        },
        ...(history || []),
        { role: "user", content: message },
      ],
    });

    const answer = completion.choices[0].message.content;

    return Response.json({ answer });
  } catch (err) {
    console.error("API CHAT ERROR:", err);

    return Response.json({
      answer: "Asystent jest chwilowo niedostępny. Spróbuj ponownie za chwilę.",
    });
  }
}
