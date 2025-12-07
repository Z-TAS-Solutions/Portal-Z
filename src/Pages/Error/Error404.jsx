import { Radar, Database, ArrowLeft } from 'lucide-react';

export default function Error404() {

  return (
    <div className="min-h-screen bg-black text-cyan-400 font-mono flex flex-col items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none select-none">
        <div className="text-[10px] break-all">
          01000100 01000001 01010100 01000001 00100000 01001100 01001111 01010011 01010100
        </div>
      </div>

      <div className="relative z-10 text-center max-w-md">
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center border border-cyan-500/30 rounded-full">
            <div className="absolute w-full h-full border-t-2 border-cyan-500 rounded-full animate-spin"></div>
            <Radar className="w-12 h-12 text-cyan-500 opacity-80" />
            <div className="absolute -right-4 top-0 text-xs bg-black border border-cyan-800 px-1">ERR_404</div>
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          NODE_NOT_FOUND
        </h1>
        
        <div className="h-px w-full bg-cyan-900 my-6"></div>

        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          The requested resource could not be located within the secure endpoint. The hash pointer refers to a null block or an invalid endpoint.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-3 rounded flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-slate-500">Tunnel Status: Active</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-3 rounded flex items-center gap-2">
            <Database className="w-3 h-3 text-slate-500" />
            <span className="text-xs text-slate-500">Ledger: Synced</span>
          </div>
        </div>

        <button 
          onClick={() => window.history.back()}
          className="group px-6 py-3 border border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400 rounded transition-all flex items-center justify-center gap-2 mx-auto uppercase text-xs tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Return to Safe Harbor
        </button>
      </div>
    </div>
  );
};
