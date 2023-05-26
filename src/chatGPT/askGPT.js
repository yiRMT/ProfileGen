import {
    ChatCompletionRequestMessage,
    ChatCompletionRequestMessageRoleEnum,
    Configuration,
    OpenAIApi,
} from 'openai';
import { setPrompt } from "./setPrompt";

export const askGPT = async (apikey, content, charnum, question, chk, model = "gpt-3.5-turbo") => {
    const configuration = new Configuration({
        apiKey: apikey,
    });

    const openai = new OpenAIApi(configuration);

    const messages = [
        {
            role: ChatCompletionRequestMessageRoleEnum.System, 
            content: setPrompt(content, charnum),
        },
    ];
    messages.push({
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: question,
    });

    const response = await openai.createChatCompletion({
        model: model,
        messages: messages,
    });

    const answer = response.data.choices[0].message?.content;
    return answer
}