import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);




export default async function (req, res) {
  const request = req.body.text || '';
  if (request.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid text",
      }
    });
  }
    const result = await openai.createImage({
        prompt: request,
        n: 1,
        size: "1024x1024",
        response_format: 'url',
    });
  res.status(200).json({ imageResult: result.data.data[0].url });
}
