export async function POST(request) {
  const payload = await request.json();

  const webhookRequest = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  try {
    await fetch(process.env.DISCORD_WEBHOOK_URL, webhookRequest);
  } catch (err) {
    return { error: "Something went wrong" };
    console.log(err.message);
  }
}
