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
    const response = await fetch(
      process.env.DISCORD_WEBHOOK_URL,
      webhookRequest,
    );
    return new Response(null, {
      status: response.status,
      headers: { "Content-Type": "text/plain" },
    });
  } catch (err) {
    return { error: "Something went wrong" };
    console.log(err.message);
  }
}
