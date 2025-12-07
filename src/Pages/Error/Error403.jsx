import { Hand, ShieldAlert, Lock } from 'lucide-react';

export default function Error403() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden font-mono">
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 max-w-lg w-full bg-slate-900 border border-red-900/50 p-8 rounded-lg shadow-2xl shadow-red-900/20">
        <div className="flex justify-between items-center mb-8 border-b border-red-900/30 pb-4">
          <span className="text-red-500 text-xs tracking-widest uppercase">sys_auth_failure</span>
          <span className="text-red-500 font-bold">ERROR 403</span>
        </div>

        <div className="flex justify-center mb-8 relative">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
            <div className="bg-slate-950 border-2 border-red-500 p-6 rounded-full relative z-10">
              <Hand className="w-16 h-16 text-red-500" strokeWidth={1} />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-red-500 p-1 rounded">
              <Lock className="w-4 h-4 text-red-500" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl text-slate-100 font-bold text-center mb-2">
          Access Denied
        </h1>
        <p className="text-slate-400 text-center text-sm mb-6">
            Authentication signature mismatch detected. The system has halted the request for security compliance.
        </p>

        <div className="bg-red-950/20 border border-red-900/50 p-3 rounded mb-6 text-xs text-red-400 font-mono">
          <p>{`> ENCRYPTION: KYBER-1024`}</p>
          <p>{`> STATUS: REJECTED`}</p>
          <p>{`> AUDIT_LOG: WRITING TO CHAIN...`}</p>
        </div>

        <button 
          onClick={() => window.location.href = '/'}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide text-sm font-bold"
        >
          <ShieldAlert className="w-4 h-4" />
          Re-initialize Handshake
        </button>
      </div>
    </div>
  );
};
