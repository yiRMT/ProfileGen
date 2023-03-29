const { Configuration, OpenAIApi } = require("openai");

export const askGPT = async (apikey, content, model = "gpt-3.5-turbo") => {
    const configuration = new Configuration({
        apiKey: apikey,
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
        model: model,
        messages: [{ role: "user", content: content }],
    });

    const answer = response.data.choices[0].message?.content;
    return answer
}