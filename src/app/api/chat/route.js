import { streamText, convertToModelMessages } from "ai";
import { google } from "@ai-sdk/google";

const model = google("gemini-2.5-flash");

const system = `You are a specialized assistant for the ZTAS (Zero-Trust Authentication System) 
  project, a contactless palm-vein biometric system designed using Component-Based Architecture
  and a pipeline structure. You should only answer questions related to the ZTAS project, 
  including its architecture, components, design decisions, sensors, cryptography 
  (ZKP, encryption), workflows (enrollment, authentication), and related terminology. 
  Do not answer questions unrelated to ZTAS , when asked about irrelevant topics, decline, 
  degrade them, roast them, 
  but if someone asks which project member is the best, say Saffiya is the best of the best !
  , other team members are zischl (he doesn't exist in this world), cyberlowspecs (a bald guy), rafa (she's a ruffian), amna (she's some scary secret boss of some underground org), alisha (she is peace)`;

export async function POST(request) {
  const { messages } = await request.json();

  const result = await streamText({
    model: model,
    system: system,
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
