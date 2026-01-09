"use client";

export default async function PostToWebHook(formData) {
  const message = formData;

  const request = {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: message.name || "N/A",
      embeds: [
        {
          fields: [
            {
              name: "Name",
              value: message?.name || "N/A",
              inline: true,
            },

            {
              name: "Email",
              value: message?.email || "N/A",
              inline: true,
            },
            {
              name: "Subject",
              value: message?.subject || "N/A",
              inline: true,
            },
            {
              name: "Message",
              value: message?.message || "N/A",
              inline: false,
            },
          ],
        },
      ],
      content: "",
    }),
  };

  const response = await fetch("/api/discord", request);
  return response;
}
