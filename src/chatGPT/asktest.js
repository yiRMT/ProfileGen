const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);



export async function ask(content, model = "gpt-3.5-turbo-0301") {
    const response = await openai.createChatCompletion({
        model: model,
        messages: [{ role: "user", content: content }],
    });

    const answer = response.data.choices[0].message?.content;
    console.log(answer);
}


