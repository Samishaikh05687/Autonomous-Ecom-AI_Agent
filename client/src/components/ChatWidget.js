import React, { useState, useEffect, useRef } from 'react'
import { FaRobot, FaPaperPlane, FaTimes, FaCommentDots, FaUser, FaSync, FaMinus, FaPlus, FaHeart, FaShoppingBag, FaStar, FaGift, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [threadId, setThreadId] = useState(null)
  const [isTyping, setIsTyping] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [showQuickActions, setShowQuickActions] = useState(false)
  const messagesEndRef = useRef(null)

  // Enhanced luxury styling with light colors and premium aesthetics
  const styles = {
    container: {
      position: 'fixed',
      bottom: '10px',
      right: '24px',
      width: isMinimized ? '320px' : '420px',
      height: isMinimized ? '60px' : '640px',
      background: 'linear-gradient(135deg, #fdf8f3 0%, #ffffff 50%, #f9f7f4 100%)',
      border: '1px solid rgba(139, 116, 99, 0.15)',
      borderRadius: '24px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000000,
      boxShadow: '0 20px 60px rgba(139, 116, 99, 0.15), 0 8px 25px rgba(139, 116, 99, 0.08)',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
      opacity: isOpen ? 1 : 0,
    },
    header: {
      background: 'linear-gradient(135deg, #8b7463 0%, #a68b7a 50%, #8b7463 100%)',
      color: '#ffffff',
      padding: '20px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      pointerEvents: 'none',
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: "'Playfair Display', serif",
      fontWeight: '600',
      fontSize: '18px',
      letterSpacing: '0.5px',
    },
    titleIcon: {
      fontSize: '24px',
      background: 'linear-gradient(45deg, #ffffff, #f5f5f5)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
    },
    headerButtons: {
      display: 'flex',
      gap: '8px',
    },
    headerButton: {
      background: 'rgba(255, 255, 255, 0.15)',
      border: 'none',
      color: '#ffffff',
      cursor: 'pointer',
      fontSize: '14px',
      padding: '8px',
      borderRadius: '8px',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      ':hover': {
        background: 'rgba(255, 255, 255, 0.25)',
        transform: 'scale(1.05)',
      },
    },
    quickActions: {
      padding: '16px 24px',
      background: 'linear-gradient(135deg, #faf7f2 0%, #ffffff 100%)',
      borderBottom: '1px solid rgba(139, 116, 99, 0.08)',
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
    },
    quickActionBtn: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f6f3 100%)',
      border: '1px solid rgba(139, 116, 99, 0.15)',
      borderRadius: '20px',
      padding: '8px 16px',
      fontSize: '12px',
      fontWeight: '500',
      color: '#6b5b4d',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      boxShadow: '0 2px 8px rgba(139, 116, 99, 0.1)',
    },
    messages: {
      flex: 1,
      overflowY: 'auto',
      padding: '24px',
      background: 'linear-gradient(180deg, #ffffff 0%, #fdfcfb 100%)',
      scrollbarWidth: 'thin',
      scrollbarColor: 'rgba(139, 116, 99, 0.3) transparent',
    },
    messageWrapper: {
      display: 'flex',
      marginBottom: '20px',
      opacity: 0,
      animation: 'fadeIn 0.5s ease forwards',
    },
    message: {
      padding: '16px 20px',
      borderRadius: '20px',
      maxWidth: '85%',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      position: 'relative',
      boxShadow: '0 4px 16px rgba(139, 116, 99, 0.08)',
      backdropFilter: 'blur(10px)',
    },
    botMessage: {
      background: 'linear-gradient(135deg, #f8f6f3 0%, #ffffff 50%, #faf8f5 100%)',
      border: '1px solid rgba(139, 116, 99, 0.1)',
      color: '#4a4138',
    },
    userMessage: {
      background: 'linear-gradient(135deg, #8b7463 0%, #a68b7a 50%, #8b7463 100%)',
      color: '#ffffff',
      boxShadow: '0 6px 20px rgba(139, 116, 99, 0.25)',
    },
    avatar: {
      fontSize: '20px',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxShadow: '0 2px 8px rgba(139, 116, 99, 0.15)',
    },
    botAvatar: {
      background: 'linear-gradient(135deg, #8b7463 0%, #a68b7a 100%)',
      color: '#ffffff',
    },
    userAvatar: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
      color: '#8b7463',
    },
    messageText: {
      flex: 1,
      lineHeight: '1.6',
      fontFamily: "'Inter', sans-serif",
      fontSize: '14px',
    },
    timestamp: {
      fontSize: '11px',
      color: 'rgba(107, 91, 77, 0.6)',
      marginTop: '8px',
      display: 'block',
      fontWeight: '400',
    },
    inputContainer: {
      display: 'flex',
      padding: '20px 24px',
      background: 'linear-gradient(135deg, #faf7f2 0%, #ffffff 100%)',
      borderTop: '1px solid rgba(139, 116, 99, 0.08)',
      alignItems: 'flex-end',
      gap: '12px',
    },
    inputWrapper: {
      flex: 1,
      position: 'relative',
    },
    input: {
      width: '100%',
      padding: '16px 20px',
      border: '1px solid rgba(139, 116, 99, 0.2)',
      borderRadius: '25px',
      background: 'linear-gradient(135deg, #ffffff 0%, #fdfcfb 100%)',
      outline: 'none',
      fontSize: '14px',
      fontFamily: "'Inter', sans-serif",
      color: '#4a4138',
      resize: 'none',
      minHeight: '20px',
      maxHeight: '80px',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 8px rgba(139, 116, 99, 0.05)',
    },
    sendButton: {
      background: 'linear-gradient(135deg, #8b7463 0%, #a68b7a 100%)',
      color: '#ffffff',
      border: 'none',
      padding: '16px',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 16px rgba(139, 116, 99, 0.3)',
      transition: 'all 0.3s ease',
      width: '48px',
      height: '48px',
     
    },
    chatButton: {
      position: 'fixed',
      bottom: '20px',
      left: '1200px',
      background: 'linear-gradient(135deg, #8b7463 0%, #a68b7a 100%)',
      color: '#ffffff',
      border: 'none',
      borderRadius: '50%',
      width: '64px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex:1000,
     
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      
      overflow: 'hidden',
    },
    chatButtonRipple: {
      position:'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
      borderRadius: '50%',
      animation: 'pulse 2s infinite',
    },
    typing: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px 20px',
      color: 'rgba(107, 91, 77, 0.7)',
      fontStyle: 'italic',
      fontSize: '13px',
      background: 'linear-gradient(135deg, #f8f6f3 0%, #ffffff 100%)',
      borderRadius: '20px 20px 20px 4px',
      marginBottom: '16px',
      boxShadow: '0 2px 8px rgba(139, 116, 99, 0.05)',
    },
    typingDots: {
      display: 'flex',
      gap: '4px',
    },
    typingDot: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #8b7463 0%, #a68b7a 100%)',
      animation: 'typingBounce 1.4s infinite',
    },
    welcomeMessage: {
      background: 'linear-gradient(135deg, #f0ede8 0%, #f8f6f3 100%)',
      border: '1px solid rgba(139, 116, 99, 0.15)',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    welcomeTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '18px',
      fontWeight: '600',
      color: '#6b5b4d',
      marginBottom: '8px',
    },
    welcomeSubtitle: {
      fontSize: '13px',
      color: 'rgba(107, 91, 77, 0.8)',
      lineHeight: '1.5',
    },
  }

  // CSS animations
  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.1); opacity: 0.8; }
    }
    @keyframes typingBounce {
      0%, 60%, 100% { transform: translateY(0); }
      30% { transform: translateY(-10px); }
    }
    .typing-dot:nth-child(1) { animation-delay: 0s; }
    .typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .typing-dot:nth-child(3) { animation-delay: 0.4s; }
    
    .chat-input:focus {
      border-color: rgba(139, 116, 99, 0.4) !important;
      box-shadow: 0 0 0 3px rgba(139, 116, 99, 0.1) !important;
    }
    
    .send-button:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 20px rgba(139, 116, 99, 0.4);
    }
    
    .chat-button:hover {
      transform: scale(1.05);
      box-shadow: 0 12px 40px rgba(139, 116, 99, 0.5);
    }
    
    .quick-action:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(139, 116, 99, 0.2);
      border-color: rgba(139, 116, 99, 0.3);
    }
    
    .header-button:hover {
      background: rgba(255, 255, 255, 0.25) !important;
      transform: scale(1.05);
    }

    .messages::-webkit-scrollbar {
      width: 6px;
    }
    
    .messages::-webkit-scrollbar-track {
      background: rgba(139, 116, 99, 0.05);
      border-radius: 3px;
    }
    
    .messages::-webkit-scrollbar-thumb {
      background: rgba(139, 116, 99, 0.3);
      border-radius: 3px;
    }
    
    .messages::-webkit-scrollbar-thumb:hover {
      background: rgba(139, 116, 99, 0.5);
    }
  `

  // Quick actions for luxury bags store
  const quickActions = [
    { icon: FaShoppingBag, text: "New Collections", action: "Tell me about your latest bag collections" },
    { icon: FaStar, text: "Best Sellers", action: "What are your best selling bags?" },
    { icon: FaHeart, text: "Wishlist", action: "Help me manage my wishlist" },
    { icon: FaGift, text: "Gift Guide", action: "I need help choosing a gift" },
  ]

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessages = [
        {
          text: "Welcome to our luxury collection! I'm here to help you find the perfect bag. How may I assist you today?",
          isAgent: true,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]
      setMessages(initialMessages)
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setShowQuickActions(true)
    }
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const startNewChat = () => {
    setMessages([])
    setThreadId(null)
    setInputValue('')
  }

  const handleQuickAction = (action) => {
    setInputValue(action)
    handleSendMessage({ preventDefault: () => {} }, action)
    setShowQuickActions(false)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSendMessage = async (e, quickActionText = null) => {
    e.preventDefault()
    
    const messageText = quickActionText || inputValue
    if (messageText.trim() === '') return

    const message = {
      text: messageText,
      isAgent: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages(prevMessages => [...prevMessages, message])
    setInputValue("")
    setIsTyping(true)

    const endpoint = threadId ? `http://localhost:8000/chat/${threadId}` : 'http://localhost:8000/chat'

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      const agentResponse = {
        text: data.response,
        isAgent: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        threadId: data.threadId
      }
      
      setMessages(prevMessages => [...prevMessages, agentResponse])
      setThreadId(data.threadId)
    } catch (error) {
      setMessages(prevMessages => [...prevMessages, {
        text: 'I apologize, but I\'m experiencing technical difficulties. Please try again in a moment.',
        isAgent: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <>
      <style>{animationStyles}</style>
      
      {isOpen && (
        <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.headerOverlay}></div>
            <div style={styles.title}>
              <div style={styles.titleIcon}>
                <FaShoppingBag />
              </div>
              <span>Luxury Concierge</span>
            </div>
            <div style={styles.headerButtons}>
              <button 
                className="header-button"
                style={styles.headerButton} 
                onClick={toggleMinimize}
                title="Minimize"
              >
                {isMinimized ? <FaChevronDown /> : <FaChevronUp />}
              </button>
              <button 
                className="header-button"
                style={styles.headerButton} 
                onClick={startNewChat}
                title="New Conversation"
              >
                <FaSync />
              </button>
              <button 
                className="header-button"
                style={styles.headerButton} 
                onClick={toggleChat}
                title="Close"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {showQuickActions && (
                <div style={styles.quickActions}>
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="quick-action"
                      style={styles.quickActionBtn}
                      onClick={() => handleQuickAction(action.action)}
                    >
                      <action.icon size={12} />
                      {action.text}
                    </button>
                  ))}
                </div>
              )}

              <div className="messages" style={styles.messages}>
                {messages.length === 1 && (
                  <div style={styles.welcomeMessage}>
                    <div style={styles.welcomeTitle}>✨ Welcome to Luxury Collection</div>
                    <div style={styles.welcomeSubtitle}>
                      Discover our exclusive range of premium handbags, crafted with the finest materials and attention to detail.
                    </div>
                  </div>
                )}

                {messages.map((message, index) => (
                  <div key={index} style={{ 
                    ...styles.messageWrapper, 
                    justifyContent: message.isAgent ? 'flex-start' : 'flex-end',
                    animationDelay: `${index * 0.1}s`
                  }}>
                    <div style={{ 
                      ...styles.message, 
                      ...(message.isAgent ? styles.botMessage : styles.userMessage) 
                    }}>
                      <div style={{
                        ...styles.avatar,
                        ...(message.isAgent ? styles.botAvatar : styles.userAvatar)
                      }}>
                        {message.isAgent ? <FaRobot /> : <FaUser />}
                      </div>
                      <div style={styles.messageText}>
                        {message.text}
                        <span style={{
                          ...styles.timestamp,
                          color: message.isAgent ? 'rgba(107, 91, 77, 0.6)' : 'rgba(255, 255, 255, 0.8)'
                        }}>
                          {message.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div style={styles.typing}>
                    <div style={styles.typingDots}>
                      <div style={styles.typingDot} className="typing-dot"></div>
                      <div style={styles.typingDot} className="typing-dot"></div>
                      <div style={styles.typingDot} className="typing-dot"></div>
                    </div>
                    <span>Our luxury concierge is typing...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <div style={styles.inputContainer}>
                <div style={styles.inputWrapper}>
                  <textarea
                    className="chat-input"
                    style={styles.input}
                    placeholder="Ask about our luxury bags collection..."
                    value={inputValue}
                    onChange={handleInputChange}
                    rows={1}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage(e)
                      }
                    }}
                  />
                </div>
                <button
                  className="send-button"
                  style={styles.sendButton}
                  disabled={inputValue.trim() === ''}
                  onClick={handleSendMessage}
                >
                  <FaPaperPlane size={16} />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <button className="chat-button" style={styles.chatButton} onClick={toggleChat}>
        <div style={styles.chatButtonRipple}></div>
        <FaCommentDots size={28} />
      </button>
    </>
  )
}

export default ChatWidget