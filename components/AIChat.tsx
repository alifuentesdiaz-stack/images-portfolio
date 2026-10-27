import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { GenerateContentResponse } from "@google/genai";

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I'm Ali's design assistant. Need help finding a specific project or info on rates?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const botMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '', isTyping: true }]);

    try {
      const streamResult = await sendMessageToGemini(userMsg.text);
      
      let fullText = '';
      
      for await (const chunk of streamResult) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
           fullText += c.text;
           setMessages(prev => prev.map(msg => 
             msg.id === botMsgId ? { ...msg, text: fullText, isTyping: false } : msg
           ));
        }
      }
    } catch (error) {
      setMessages(prev => prev.map(msg => 
        msg.id === botMsgId ? { ...msg, text: "Sorry, I'm having trouble connecting right now. Please try again later.", isTyping: false } : msg
      ));
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-brand-cream border border-brand-blue/20 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="p-3.5 bg-brand-blue text-brand-cream border-b border-brand-blue/10 flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <img 
                src="/assets/aistudio/1697139374038_5961ba28.jpg" 
                alt="Ali Fuentes Diaz" 
                className="w-7 h-7 rounded-full object-cover border border-white/30"
              />
              <div>
                <span className="font-bold text-sm tracking-wide block leading-none">Ali's Assistant</span>
                <span className="text-[10px] text-brand-cream/70 font-medium tracking-wider">Online • Ask anything</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-brand-cream/70 hover:text-brand-cream transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <img 
                    src="/assets/aistudio/1697139374038_5961ba28.jpg" 
                    alt="Ali" 
                    className="w-6 h-6 rounded-full object-cover border border-brand-blue/10 flex-shrink-0 mb-1"
                  />
                )}
                <div 
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-blue text-brand-cream rounded-2xl rounded-br-none' 
                      : 'bg-white border border-brand-blue/10 text-brand-blue rounded-2xl rounded-bl-none'
                  }`}
                >
                  {msg.text}
                  {msg.isTyping && msg.text === '' && (
                     <Loader2 className="w-4 h-4 animate-spin text-brand-blue/50" />
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-brand-blue/10">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about rates or services..."
                className="w-full bg-brand-cream border border-brand-blue/10 rounded-full pl-4 pr-12 py-3 text-sm text-brand-blue focus:outline-none focus:border-brand-blue/50 transition-colors placeholder:text-brand-blue/40"
                disabled={isTyping}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-blue rounded-full text-brand-cream disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-darkBlue transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-brand-blue text-brand-cream rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-brand-blue/20"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <>
            <MessageSquare size={24} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </>
        )}
      </button>
    </div>
  );
};