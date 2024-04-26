const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Predefined rules and responses
const rules = [
    { pattern: /(hello|hi|hey)/, response: 'Hello! How can I assist you today?' },
    { pattern: /how are you/, response: 'I am just a bot, but thank you for asking!' },
    { pattern: /(bye|goodbye)/, response: 'Goodbye! Have a great day!' },
    { pattern: /help/, response: 'Sure! How can I assist you?' },
    { pattern: /what is your name/, response: 'My name is Chatbot. How can I assist you?' },
    { pattern: /what can you do/, response: "I can help you with a variety of tasks such as answering questions, providing information, giving advice, and much more!" },
    { pattern: /how does Chatbot work/, response: 'Chatbot works by using advanced natural language processing algorithms to understand and respond to your questions and requests.' },
    { pattern: /what are your main features/, response: 'My main features include providing information, answering questions, giving advice, sharing fun facts, telling jokes, and much more!' },
    { pattern: /what kind of questions can I ask you/, response: 'You can ask me anything! I\'m here to help with a wide range of topics, so feel free to ask me anything you\'d like to know.' },
    { pattern: /can you tell me a joke/, response: 'Sure! Here\'s a joke for you: Why do not skeletons fight each other? They do have the guts.' },
    { pattern: /do you have any tips for (.*)/, response: 'Certainly! Here are some tips for $1: [Insert tips here]' },
    { pattern: /how do I customize my experience with Chatbot/, response: 'You can customize your experience by [insert customization options here].' },
    { pattern: /can you provide me with some fun facts/, response: 'Absolutely! Here\'s a fun fact: Did you know that the shortest war in history was between Britain and Zanzibar on August 27, 1896? Zanzibar surrendered after just 38 minutes.' },
    { pattern: /how do you learn and improve/, response: 'I learn and improve through user interactions. The more you ask, the better I become at providing accurate and helpful responses!' },
    { pattern: /are there any hidden features or easter eggs in Chatbot/, response: 'Yes, there might be! But you\'ll have to discover them for yourself. 😉' },
    { pattern: /how can I give feedback about Chatbot/, response: 'You can give feedback by [sending an email to feedback@chatbot.com].' },
    { pattern: /can you explain (.*) to me/, response: 'Of course! Here\'s an explanation of $1: [Insert explanation here]' },
    { pattern: /do you have any recommendations for (.*)/, response: 'Sure! Here are some recommendations for $1: [Insert recommendations here]' }
];

// Function to match user input with predefined rules and generate response
function handleResponse(userInput) {
    let matchedResponse = "I'm sorry, I don't understand that.";
    for (const rule of rules) {
        const regex = new RegExp(rule.pattern, 'i'); // 'i' for case insensitive match
        if (userInput.match(regex)) {
            matchedResponse = rule.response.replace(/\$(\d+)/g, (_, index) => {
                return userInput.match(regex)[index];
            });
            break;
        }
    }
    return matchedResponse;
}

// Function to add message to chat box
function addMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to handle user input and generate chatbot response
function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        addMessage('User', userMessage);
        const botResponse = handleResponse(userMessage.toLowerCase());
        addMessage('Chatbot', botResponse);
        userInput.value = '';
    }
}
