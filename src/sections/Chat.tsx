import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';
import {
  chatResponses,
  defaultChatResponse,
  suggestedQuestions,
} from '../data/resume';

interface Message {
  role: 'user' | 'bot';
  text: string;
  followUp?: string;
}

function matchResponse(input: string) {
  const tokens = input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/);

  let bestMatch = defaultChatResponse;
  let bestScore = 0;

  for (const entry of chatResponses) {
    let score = 0;
    for (const token of tokens) {
      for (const pattern of entry.patterns) {
        if (token.includes(pattern) || pattern.includes(token)) {
          score += token === pattern ? 3 : 1;
        }
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestMatch;
}

const TypingText = ({
  text,
  onComplete,
}: {
  text: string;
  onComplete: () => void;
}) => {
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayed('');

    const interval = setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current <= text.length) {
        setDisplayed(text.slice(0, indexRef.current));
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, 12);

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-1.5 h-4 bg-primary animate-pulse ml-0.5 align-text-bottom" />
      )}
    </span>
  );
};

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Ask me anything you won't find on the resume — my methodology, how I approach engagements, my reporting philosophy, or how my business background strengthens my security work.",
      followUp: 'Try one of the suggested questions below to get started.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', text: text.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const match = matchResponse(text);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: match.response, followUp: match.followUp },
      ]);
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <section id="chat" className="py-24 bg-bg-deep relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-10 text-primary font-mono text-lg">
            <span className="text-accent">$</span> ./ask-jason --interactive
            <span className="w-2 h-5 bg-primary animate-pulse ml-1" />
          </div>

          <div className="bg-bg-card border border-border rounded-sm overflow-hidden">
            <div className="bg-bg-elevated px-4 py-2.5 border-b border-border flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-danger/60" />
                <span className="w-3 h-3 rounded-full bg-warning/60" />
                <span className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <span className="text-xs font-mono text-text-muted ml-2">
                jason-assistant v1.0 — interactive mode
              </span>
            </div>

            <div ref={chatContainerRef} className="h-96 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${
                      msg.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {msg.role === 'bot' && (
                      <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-sm text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-accent/10 border border-accent/20 text-text-primary'
                          : 'bg-bg-elevated border border-border text-text-secondary'
                      }`}
                    >
                      {msg.role === 'bot' && i === messages.length - 1 && isTyping ? (
                        <TypingText
                          text={msg.text}
                          onComplete={() => setIsTyping(false)}
                        />
                      ) : (
                        <p>{msg.text}</p>
                      )}
                      {msg.followUp && !isTyping && (
                        <p className="mt-2 text-xs text-text-muted italic">
                          {msg.followUp}
                        </p>
                      )}
                    </div>
                    {msg.role === 'user' && (
                      <div className="shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-accent" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-border p-4">
              <div className="flex flex-wrap gap-2 mb-3">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    disabled={isTyping}
                    className="px-3 py-1 text-xs font-mono bg-bg-elevated border border-border rounded-sm text-text-muted hover:text-primary hover:border-primary/30 transition-colors disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="flex-1 flex items-center bg-bg-deep border border-border rounded-sm px-3 focus-within:border-primary/50 transition-colors">
                  <span className="text-primary font-mono mr-2 text-sm">
                    &gt;
                  </span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about experience, skills, projects..."
                    disabled={isTyping}
                    className="flex-1 bg-transparent border-none outline-none text-sm text-text-primary placeholder-text-muted py-2.5 font-mono disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="px-4 py-2.5 bg-primary text-bg-deep rounded-sm hover:bg-primary-dim transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
