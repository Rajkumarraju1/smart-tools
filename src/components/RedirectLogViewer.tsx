'use client';

import React, { useEffect, useState } from 'react';
import { ShieldAlert, Trash2, X } from 'lucide-react';

interface RedirectLog {
  type: string;
  url: string;
  timestamp: string;
  readyState: string;
  hasInteraction: boolean;
  timeSinceLastInteractionMs: number;
  pageUrl: string;
}

export default function RedirectLogViewer() {
  const [logs, setLogs] = useState<RedirectLog[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Read initial logs from localStorage
    const storedLogs = localStorage.getItem('redirect_logs');
    if (storedLogs) {
      try {
        setLogs(JSON.parse(storedLogs));
      } catch (e) {}
    }

    // Set up a listener for storage updates (e.g. from redirects on other tabs/reloads)
    const handleStorageChange = () => {
      const stored = localStorage.getItem('redirect_logs');
      if (stored) {
        try {
          setLogs(JSON.parse(stored));
        } catch (e) {}
      }
    };
    window.addEventListener('storage', handleStorageChange);
    
    // Poll localstorage periodically in case of local tab updates
    const interval = setInterval(handleStorageChange, 2000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const clearLogs = () => {
    localStorage.removeItem('redirect_logs');
    setLogs([]);
  };

  if (logs.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[9999] max-w-lg bg-white rounded-2xl shadow-2xl border border-red-100 overflow-hidden font-sans">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-lg transition-all animate-bounce"
        >
          <ShieldAlert className="h-5 w-5" />
          <span>Blocked/Tracked Redirects ({logs.length})</span>
        </button>
      ) : (
        <div className="flex flex-col max-h-[400px]">
          <div className="p-4 bg-red-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldAlert className="h-5 w-5" />
              <span className="font-bold">Tracked Redirect Audit Logs</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={clearLogs}
                className="text-white/80 hover:text-white p-1 transition-colors"
                title="Clear Logs"
              >
                <Trash2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="p-4 overflow-y-auto space-y-3 bg-gray-50 flex-1">
            {logs.map((log, index) => (
              <div key={index} className="p-3 bg-white rounded-xl border border-gray-100 text-xs space-y-1 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-red-600 uppercase tracking-wider text-[9px] bg-red-50 px-2 py-0.5 rounded">
                    {log.type}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    {new Date(log.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                
                <div className="font-mono bg-gray-50 p-2 rounded border border-gray-100 break-all text-gray-700">
                  <strong>Target:</strong> {log.url}
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-gray-500 text-[10px]">
                  <div>
                    <strong>Trigger:</strong>{' '}
                    <span className={log.hasInteraction ? 'text-orange-600 font-semibold' : 'text-red-600 font-semibold'}>
                      {log.hasInteraction ? 'User Interaction' : 'Auto on Page Load'}
                    </span>
                  </div>
                  <div>
                    <strong>DOM ReadyState:</strong> {log.readyState}
                  </div>
                  {log.hasInteraction && (
                    <div className="col-span-2">
                      <strong>Time from Interaction:</strong> {log.timeSinceLastInteractionMs}ms
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
