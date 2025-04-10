import axios from 'axios';

// const API_KEY = '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'; 

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
