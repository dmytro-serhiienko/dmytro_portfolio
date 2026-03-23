import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // ─── Nodemailer ─────────────────────────────────────────
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Бот Сайту" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: "Повідомлення з сайту PORTFOLIO",
    html: `
      <h2>Нове повідомлення!</h2>
      <p><b>Ім'я:</b> ${name || "Не вказано"}</p>
      <p><b>Email:</b> ${email || "Не вказано"}</p>
      <p><b>Повідомлення:</b> ${message || "—"}</p>
    `,
  };

  try {
    await Promise.all([
      // Email
      transporter.sendMail(mailOptions),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
