let userId;
const pathHistoryCookieKey = 'pathHistory';
const maxMessages = 200; // 100 chat pairs

// Generate UUID
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Cookie utilities
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;SameSite=Strict`;
}

function getCookie(name) {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(nameEQ)) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Strict`;
}

// Initialize userId
async function initUserId() {
    let savedUserId = getCookie(userIdCookieKey);
    if (savedUserId) {
        userId = savedUserId;
        return;
    }
    try {
        const response = await fetch('https://api64.ipify.org?format=json', { mode: 'cors' });
        if (!response.ok) throw new Error(`IP fetch failed: ${response.status}`);
        const data = await response.json();
        userId = btoa(data.ip);
    } catch (error) {
        console.error('Error fetching IP:', error);
        userId = generateUUID();
    }
    setCookie(userIdCookieKey, userId, 30);
}

const chatInput = document.getElementById('chat-input');
const chatHistoryContent = document.getElementById('chat-history-content');
const chatWrapper = document.getElementById('chat-wrapper');
const brandWrapper = document.getElementById('brand-wrapper');
const sendButton = document.getElementById('send-button');
const newChatButton = document.getElementById('new-chat-button');

// IndexedDB setup
const storeName = `chat_${window.location.pathname.replace(/\//g, '_')}`;

// Open IndexedDB
function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = event => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                const store = db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
                store.createIndex('timestamp', 'timestamp', { unique: false });
            }
        };
        request.onsuccess = event => resolve(event.target.result);
        request.onerror = event => reject(event.target.error);
    });
}

// Update path history cookie
function updatePathHistory() {
    let pathHistory = getCookie(pathHistoryCookieKey);
    let paths = pathHistory ? JSON.parse(pathHistory) : [];
    const path = window.location.pathname;
    if (!paths.includes(path)) {
        paths.push(path);
        setCookie(pathHistoryCookieKey, JSON.stringify(paths), 30);
    }
}

// Remove path from history
function removePathFromHistory() {
    let pathHistory = getCookie(pathHistoryCookieKey);
    if (pathHistory) {
        let paths = JSON.parse(pathHistory);
        const path = window.location.pathname;
        paths = paths.filter(p => p !== path);
        if (paths.length > 0) {
            setCookie(pathHistoryCookieKey, JSON.stringify(paths), 30);
        } else {
            deleteCookie(pathHistoryCookieKey);
        }
    }
}

// Migrate old data
async function migrateOldData() {
    const oldCookieKey = `chatHistory_${window.location.pathname.replace(/\//g, '_')}`;
    const oldStorageKey = oldCookieKey;
    let savedChat;

    if (localStorage.getItem(oldStorageKey)) {
        savedChat = localStorage.getItem(oldStorageKey);
        localStorage.removeItem(oldStorageKey);
    } else if (getCookie(oldCookieKey)) {
        savedChat = getCookie(oldCookieKey);
        deleteCookie(oldCookieKey);
    }

    if (savedChat) {
        try {
            const messages = JSON.parse(savedChat);
            const db = await openDB();
            const tx = db.transaction([storeName], 'readwrite');
            const store = tx.objectStore(storeName);
            messages.forEach(msg => {
                store.add({
                    type: msg.type,
                    text: msg.text,
                    images: msg.images || [],
                    timestamp: Date.now()
                });
            });
            await new Promise((resolve, reject) => {
                tx.oncomplete = resolve;
                tx.onerror = () => reject(tx.error);
            });
        } catch (error) {
            console.error('Error migrating old data:', error);
        }
    }
}

// Load chat history
async function loadChatHistory() {
    await initUserId();
    await migrateOldData();
    try {
        const db = await openDB();
        const tx = db.transaction([storeName], 'readonly');
        const store = tx.objectStore(storeName);
        const request = store.getAll();

        request.onsuccess = () => {
            const messages = request.result;
            messages.forEach(message => {
                const messageDiv = document.createElement('div');
                messageDiv.className = message.type === 'user' ? 'user-message' : 'ai-message';
                const textSpan = document.createElement('span');
                textSpan.className = 'message-text';
                textSpan.innerHTML = message.text || '';
                messageDiv.appendChild(textSpan);

                if (message.images && message.images.length > 0) {
                    const imageContainer = document.createElement('div');
                    imageContainer.className = 'image-container';
                    if (message.images.length === 1) {
                        imageContainer.classList.add('single');
                    } else if (message.images.length === 2) {
                        imageContainer.classList.add('pair');
                    } else {
                        imageContainer.classList.add('multiple');
                    }
                    message.images.forEach(url => {
                        const img = document.createElement('img');
                        img.src = url;
                        img.alt = 'Assistant image';
                        imageContainer.appendChild(img);
                    });
                    messageDiv.appendChild(imageContainer);
                }

                chatHistoryContent.appendChild(messageDiv);
            });
            if (messages.length > 0) {
                brandWrapper.classList.add('top-left');
                chatWrapper.scrollTop = chatWrapper.scrollHeight;
            }
            addImageClickListeners();
        };

        request.onerror = () => console.error('Error loading history:', request.error);
        updatePathHistory();
    } catch (error) {
        console.error('Error opening DB:', error);
    }
}

// Save chat message
async function saveChatHistory(message) {
    try {
        const db = await openDB();
        const tx = db.transaction([storeName], 'readwrite');
        const store = tx.objectStore(storeName);

        // Add new message
        const addRequest = store.add({
            type: message.type,
            text: message.text,
            images: message.images || [],
            timestamp: Date.now()
        });
        addRequest.onerror = () => console.error('Error adding message:', addRequest.error);

        // Check message count
        const countRequest = store.count();
        countRequest.onsuccess = () => {
            if (countRequest.result > maxMessages) {
                const index = store.index('timestamp');
                const cursorRequest = index.openCursor(null, 'next');
                cursorRequest.onsuccess = event => {
                    const cursor = event.target.result;
                    if (cursor) {
                        const toDelete = countRequest.result - maxMessages;
                        for (let i = 0; i < toDelete && cursor; i++) {
                            store.delete(cursor.primaryKey);
                            cursor.continue();
                        }
                    }
                };
                cursorRequest.onerror = () => console.error('Error pruning messages:', cursorRequest.error);
            }
        };

        await new Promise((resolve, reject) => {
            tx.oncomplete = resolve;
            tx.onerror = () => reject(tx.error);
        });
    } catch (error) {
        console.error('Error saving to DB:', error);
    }
}

// Clear chat history
async function clearChatHistory(reload = false) {
    try {
        const db = await openDB();
        const tx = db.transaction([storeName], 'readwrite');
        const store = tx.objectStore(storeName);
        const clearRequest = store.clear();
        clearRequest.onerror = () => console.error('Error clearing history:', clearRequest.error);
        await new Promise((resolve, reject) => {
            tx.oncomplete = resolve;
            tx.onerror = () => reject(tx.error);
        });
        chatHistoryContent.innerHTML = '';
        brandWrapper.classList.remove('top-left');
        removePathFromHistory();
        if (reload) {
            window.location.reload();
        }
    } catch (error) {
        console.error('Error clearing DB:', error);
    }
}

// Load history on page load
loadChatHistory();

// Event listener for new chat button
newChatButton.addEventListener('click', () => clearChatHistory(true));

chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

sendButton.addEventListener('click', sendMessage);

function linkifyText(text) {
    let result = text.replace(/</g, '<').replace(/>/g, '>').replace(/\n/g, '<br>');

    // Split long text chunks (>12 chars) for links
    result = result.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (match, displayText, url) => {
        if (url.length > 12) {
            let wrappedUrl = '';
            for (let i = 0; i < url.length; i += 12) {
                wrappedUrl += url.slice(i, i + 12) + '<span style="display: inline;"></span>';
            }
            return `<a href="${url}" target="_blank">${displayText}</a>`;
        }
        return `<a href="${url}" target="_blank">${displayText}</a>`;
    });

    const urlRegex = /(https?:\/\/[^\s<]+)(?=[.,!?]?(\s|$))/g;
    result = result.replace(urlRegex, (match, url) => {
        const cleanUrl = url.replace(/[.,!?]$/, '');
        const isAlreadyLinked = result.includes(`<a href="${cleanUrl}"`) || result.includes(`<a href="${cleanUrl.slice(0, -1)}"`);
        if (!isAlreadyLinked) {
            if (cleanUrl.length > 12) {
                let wrappedUrl = '';
                for (let i = 0; i < cleanUrl.length; i += 12) {
                    wrappedUrl += cleanUrl.slice(i, i + 12) + '<span style="display: inline;"></span>';
                }
                return `<a href="${cleanUrl}" target="_blank">${wrappedUrl}</a>`;
            }
            return `<a href="${cleanUrl}" target="_blank">${cleanUrl}</a>`;
        }
        return match;
    });

    return result;
}

async function sendMessage() {
    const messageText = chatInput.value.trim();
    if (!messageText) return;
    if (!userId) await initUserId();

    // User message
    const userMessage = {
        type: 'user',
        text: linkifyText(messageText),
        images: []
    };
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'user-message';
    const userTextSpan = document.createElement('span');
    userTextSpan.className = 'message-text';
    userTextSpan.innerHTML = userMessage.text;
    userMessageDiv.appendChild(userTextSpan);
    chatHistoryContent.appendChild(userMessageDiv);
    chatWrapper.scrollTop = chatWrapper.scrollHeight;

    chatInput.value = '';
    if (!brandWrapper.classList.contains('top-left')) {
        brandWrapper.classList.add('top-left');
    }

    await saveChatHistory(userMessage);

    try {
        const response = await fetch(webhookEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ userId, message: messageText })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Server error: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        console.log('Parsed response:', result);

        const aiMessage = document.createElement('div');
        aiMessage.className = 'ai-message';

        let output = result.output ? result.output : (Array.isArray(result) && result[0]?.output ? result[0].output : null);
        let outputMessage = 'Error: No valid message received';
        let photoUrls = [];

        if (output && output.outputMessage) {
            outputMessage = output.outputMessage;
            photoUrls = Array.isArray(output.photoUrls) ? output.photoUrls : [];
        } else {
            console.warn('Unexpected response structure:', result);
        }

        const aiTextSpan = document.createElement('span');
        aiTextSpan.className = 'message-text';
        aiTextSpan.innerHTML = linkifyText(outputMessage);
        aiMessage.appendChild(aiTextSpan);

        if (photoUrls.length > 0) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';
            if (photoUrls.length === 1) {
                imageContainer.classList.add('single');
            } else if (photoUrls.length === 2) {
                imageContainer.classList.add('pair');
            } else {
                imageContainer.classList.add('multiple');
            }
            photoUrls.forEach(url => {
                if (typeof url === 'string' && url.trim() !== '') {
                    const img = document.createElement('img');
                    img.src = url;
                    img.alt = 'Assistant image';
                    imageContainer.appendChild(img);
                }
            });
            aiMessage.appendChild(imageContainer);
        }

        chatHistoryContent.appendChild(aiMessage);
        chatWrapper.scrollTop = chatWrapper.scrollHeight;

        await saveChatHistory({
            type: 'ai',
            text: linkifyText(outputMessage),
            images: photoUrls
        });
        addImageClickListeners();
    } catch (error) {
        console.error('Error:', error);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'ai-message';
        const errorTextSpan = document.createElement('span');
        errorTextSpan.className = 'message-text';
        errorTextSpan.innerText = `Error: ${error.message}`;
        errorMessage.appendChild(errorTextSpan);
        chatHistoryContent.appendChild(errorMessage);
        chatWrapper.scrollTop = chatWrapper.scrollHeight;
        await saveChatHistory({
            type: 'ai',
            text: `Error: ${error.message}`,
            images: []
        });
    }
}

function addImageClickListeners() {
    const images = document.querySelectorAll('.ai-message img');
    images.forEach(img => {
        img.removeEventListener('click', openImageModal);
        img.addEventListener('click', openImageModal);
    });
}

function openImageModal(event) {
    const src = event.target.src;

    const modal = document.createElement('div');
    modal.className = 'image-modal';

    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Enlarged image';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerText = '✖';
    closeBtn.addEventListener('click', closeImageModal);

    modal.appendChild(img);
    modal.appendChild(closeBtn);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeImageModal();
        }
    });

    document.body.appendChild(modal);
}

function closeImageModal() {
    const modal = document.querySelector('.image-modal');
    if (modal) modal.remove();
}