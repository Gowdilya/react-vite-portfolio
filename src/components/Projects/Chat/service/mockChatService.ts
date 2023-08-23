interface ChatResponse {
  text: string;
  isUser: boolean;
}

const mockResponses: ChatResponse[] = [
  { text: "Hello!", isUser: false },
  { text: "How can I help you?", isUser: false },
  { text: "Sure thing!", isUser: false },
  { text: "I'm here to assist.", isUser: false },
  { text: "Thanks!", isUser: false },
];

const mockChatService = {
  getResponse: (): Promise<ChatResponse> => {
    // throw Error(); Test error handling
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * mockResponses.length);
        resolve(mockResponses[randomIndex]);
      }, 1000); // delay to simulate real chat bots...
    });
  },
};

export default mockChatService;