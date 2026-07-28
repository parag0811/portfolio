"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Mail } from "lucide-react";

type ToastContextType = {
  showToast: (message: string, description?: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{
    id: number;
    message: string;
    description?: string;
  } | null>(null);

  const showToast = (message: string, description?: string) => {
    const id = Date.now();
    setToast({ id, message, description });
    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 3500);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3.5 rounded-[var(--radius-lg)] border-2 border-foreground bg-card p-4 shadow-[var(--shadow-pop)] text-foreground max-w-sm"
          >
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-foreground bg-tertiary">
              <Check size={20} strokeWidth={3} className="text-foreground" />
            </div>
            <div className="flex-1 min-w-0 pr-2">
              <p className="font-extrabold text-sm leading-tight text-foreground flex items-center gap-1.5">
                {toast.message}
              </p>
              {toast.description && (
                <p className="text-xs font-bold text-muted-foreground mt-1 truncate">
                  {toast.description}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="flex h-7 w-7 flex-none items-center justify-center rounded-full border-2 border-foreground bg-muted text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Close notification"
            >
              <X size={14} strokeWidth={2.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
