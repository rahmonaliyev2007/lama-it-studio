
export const sendMessageToBot = async ({ name, phone, message }: { name: string, phone: string, message: string }) => {
    try {
      await fetch(`https://api.telegram.org/bot8223335732:AAGiLSReVe0BaHWGZg1Z8YUTeE4toGVw3pY/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: -4804610338,
          text: `<b>📩 Новая заявка!</b>
          
<i>${message}</i>

<b>👤 Имя:</b> ${name}
<b>📞 Телефон:</b> ${phone && phone.startsWith('+998') ? phone : `+998${phone}`}`,
          parse_mode: 'HTML',
        }),
      });
    } catch (telegramErr) {
      console.error(telegramErr);
    }
  };