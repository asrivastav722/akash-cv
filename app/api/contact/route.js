import { NextResponse } from 'next/server';

const BOT_TOKEN = "8729722993:AAH8OoSPyIRJ5vcmSsypLFt4iWrrV92Is0s";
const CHAT_ID = "6100483021";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    const text = `📬 New Portfolio Message:\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message:\n${message}`;

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      throw new Error(data.description || 'Failed to send telegram message');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Telegram API Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}