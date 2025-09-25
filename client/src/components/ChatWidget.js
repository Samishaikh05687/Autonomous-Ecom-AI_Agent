// Import React and its hooks for component state and lifecycle management
import React, { useState, useEffect, useRef } from 'react'
// Import Font Awesome icons for the chat interface
import { FaRobot, FaPaperPlane, FaTimes, FaCommentDots } from 'react-icons/fa'

// Main chat widget component
const ChatWidget = () => {
  // State to track if chat window is open or closed
  const [isOpen, setIsOpen] = useState(false)
  // State to store all chat messages (array of message objects)
  const [messages, setMessages] = useState([])
  // State to track current input field value
  const [inputValue, setInputValue] = useState('')
  // State to store conversation thread ID (null for new conversations)
  const [threadId, setThreadId] = useState(null)
  // Ref to reference the bottom of messages container for auto-scrolling
  const messagesEndRef = useRef(null)

  // Effect hook: Show initial greeting when chat is first opened
  useEffect(() => {
    // Only run if chat is open AND no messages exist yet
    if (isOpen && messages.length === 0) {
      // Create initial greeting message
      const initialMessages = [
        {
          text: "Hello! I'm your shopping assistant. How can I help you today?", // Greeting text
          isAgent: true // Flag to indicate this is from the AI agent
        }
      ]
      // Add greeting to messages state
      setMessages(initialMessages)
    }
  }, [isOpen, messages.length]) // Dependencies: re-run when isOpen or message count changes

  // Effect hook: Auto-scroll to bottom when new messages are added
  useEffect(() => {
    // Scroll the messages container to bottom smoothly
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages]) // Dependency: re-run whenever messages array changes

  // Function to toggle chat window open/closed
  const toggleChat = () => {
    // Flip the current isOpen state (true becomes false, false becomes true)
    setIsOpen(!isOpen)
  }

  // Function to handle changes in the input field
  const handleInputChange = (e) => {
    // Update inputValue state with current text field value
    setInputValue(e.target.value)
  }

  // Log messages to console for debugging purposes
  console.log(messages)
  
  // Function to send user message and get AI response
  const handleSendMessage = async (e) => {
    // Prevent default form submission behavior (page refresh)
    e.preventDefault()
    // Log user input for debugging
    console.log(inputValue)

    // Create message object for user's input
    const message = {
      text: inputValue,  // User's typed message
      isAgent: false,    // Flag indicating this is from user, not AI
    }

    // Add user message to messages array using spread operator
    setMessages(prevMessages => [...prevMessages, message])
    // Clear input field immediately after sending
    setInputValue("")

    // Determine API endpoint: use existing thread if available, otherwise create new
    const endpoint = threadId ? `http://localhost:8000/chat/${threadId}` : 'http://localhost:8000/chat'

    try {
      // Make HTTP POST request to backend API
      const response = await fetch(endpoint, {
        method: 'POST', // HTTP method
        headers: {
          'Content-Type': 'application/json', // Tell server we're sending JSON
        },
        body: JSON.stringify({
          message: inputValue // Send user's message in request body
        }),
      })

      // Check if response status indicates success (200-299 range)
      if (!response.ok) {
        // Throw error if response status indicates failure
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      // Parse JSON response from server
      const data = await response.json()
      // Log successful response for debugging
      console.log('Success:', data)
      
      // Create message object for AI agent's response
      const agentResponse = {
        text: data.response,    // AI's response text
        isAgent: true,          // Flag indicating this is from AI agent
        threadId: data.threadId // Thread ID for conversation continuity
      }
      
      // Add AI response to messages array
      setMessages(prevMessages => [...prevMessages, agentResponse])
      // Update thread ID for future messages in this conversation
      setThreadId(data.threadId)
      // Log updated messages for debugging
      console.log(messages)
    } catch (error) {
      // Log any errors that occur during API call
      console.error('Error:', error)
    }
  }

  // Render the chat widget UI
  return (
    // Main container with conditional CSS class based on open/closed state
    <div className={`chat-widget-container ${isOpen ? 'open' : ''}`}>
      {/* Conditional rendering: show chat interface if open, otherwise show chat button */}
      {isOpen ? (
        <>
          {/* Chat header with title and close button */}
          <div className="chat-header">
            <div className="chat-title">
              {/* Robot icon */}
              <FaRobot />
              {/* Chat title text */}
              <h3>Shop Assistant</h3>
            </div>
            {/* Close button with X icon */}
            <button className="close-button" onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>

          {/* Messages container */}
          <div className="chat-messages">
            {/* Map through messages array to render each message */}
            {messages.map((message, index) => (
              // Container for each message (key prop required for React lists)
              <div key={index}>
                {/* Message bubble with conditional CSS class for styling */}
                <div className={`message ${message.isAgent ? 'message-bot' : 'message-user'}`}>
                  {/* Display message text */}
                  {message.text}
                </div>
              </div>
            ))}

            {/* Invisible div at bottom for auto-scroll reference */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input form for sending messages */}
          <form className="chat-input-container" onSubmit={handleSendMessage}>
            {/* Text input field */}
            <input
              type="text"                           // Input type
              className="message-input"             // CSS class for styling
              placeholder="Type your message..."    // Placeholder text
              value={inputValue}                    // Controlled input value
              onChange={handleInputChange}          // Handle input changes
            />
            {/* Send button */}
            <button
              type="submit"                         // Submit form when clicked
              className="send-button"               // CSS class for styling
              disabled={inputValue.trim() === ''}   // Disable if input is empty or whitespace
            >
              {/* Paper plane icon for send button */}
              <FaPaperPlane size={16} />
            </button>
          </form>
        </>
      ) : (
        /* Chat toggle button (shown when chat is closed) */
        <button className="chat-button" onClick={toggleChat}>
          {/* Comment/chat icon */}
          <FaCommentDots />
        </button>
      )}
    </div>
  )
}

// Export component as default export
export default ChatWidget