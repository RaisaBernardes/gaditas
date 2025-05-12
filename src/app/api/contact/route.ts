import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, phone, whatsapp, projectType, message } = await req.json();

    const brevoPayload = {
      sender: {
        name: 'Site Gaditas',
        email: process.env.SENDER_EMAIL || '', // assegura que nunca seja undefined
      },
      to: [
        {
          email: process.env.RECEIVER_EMAIL || '',
          name: 'Gaditas Engenharia',
        },
      ],
      subject: 'Preenchimento de Formulário',
      htmlContent: `
        <h2>Formulário do site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    };

    // DEBUG: Mostra no console o que será enviado para o Brevo
    console.log("🔄 Enviando para o Brevo:", brevoPayload);

    // ENVIA PARA O BREVO
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || '',
      },
      body: JSON.stringify(brevoPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Brevo response:", errorText);
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ message: 'Email enviado com sucesso!' });
  } catch (error: any) {
    console.error("❌ Erro ao enviar email:", error?.message || error);
    return NextResponse.json(
      { error: error?.message || 'Erro desconhecido' },
      { status: 500 }
    );
  }
}
