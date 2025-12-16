import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();
  // …walidacja pól…

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.RECIPIENT_EMAIL,
    subject: `Nowa wiadomość od ${name}`,
    text: message,
    html: `<p><strong>Imię:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Wiadomość:</strong><br/>${message.replace(
             /\n/g,
             "<br/>"
           )}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Wiadomość wysłana." }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Błąd przy wysyłaniu e-maila:", error);
    return new Response(
      JSON.stringify({ error: "Wystąpił błąd przy wysyłaniu." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
