document.addEventListener('DOMContentLoaded', function () {
	const messages = [
	    "Hello, I'm Stepan",
	    "Lead JavaScript Developer with 8 years of production code experience",
	    "Mostly helping tech companies build web and mobile applications",
	    "Traveling around the world, exploring new countries and cultures",
	    "Sharing my journey through a personal blog..."
	];

    const messagesContainer = document.getElementById('messages');

    function displayMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<span class="bubble">${text}</span>`;
        messagesContainer.appendChild(messageElement);

        // Scroll to the latest message
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function displayTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'typing-indicator');
        typingIndicator.innerHTML = `
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        `;
        messagesContainer.appendChild(typingIndicator);
        return typingIndicator;
    }

    function simulateTypingEffect() {
        let currentMessageIndex = 0;

        function nextMessage() {
            if (currentMessageIndex < messages.length) {
                // Display typing indicator under the last message
                const typingIndicator = displayTypingIndicator();

                setTimeout(() => {
                    // Remove typing indicator, show the next message
                    typingIndicator.remove();
                    displayMessage(messages[currentMessageIndex]);

                    // Move to the next message
                    currentMessageIndex++;
                    if (currentMessageIndex < messages.length) {
                        setTimeout(nextMessage, 1500); // Delay before next typing effect
                    }
                }, 2000); // Typing simulation duration
            }
        }

        nextMessage();
    }

    simulateTypingEffect();
});
