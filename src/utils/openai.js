import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from '@env';

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

export const askOpenAI = async (prompt) => {
  try {
    const res = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return res.data.choices[0].message.content;
  } catch (err) {
    console.error('OpenAI Error:', err.response || err.message);
    throw err;
  }
};
