import {
  GoogleGenAI,
} from '@google/genai';

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: 'AIzaSyDK2bBLqrUzH5zfDTh5SiG6DFKlmxqW334',
  });
  const tools = [
    {
      googleSearch: {
      }
    },
  ];
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.5-pro';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `prompt: ${prompt}`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let accumulatedText = "";
  for await (const chunk of response) {
    console.log(chunk.text);
    accumulatedText += chunk.text;
  }
  return accumulatedText;
}

export default main;
