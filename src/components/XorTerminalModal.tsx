import React, { useState } from 'react';
import { X, Terminal, Play, RotateCcw, Check, Gamepad2, ShoppingBag, HardDrive } from 'lucide-react';

interface XorTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const XorTerminalModal: React.FC<XorTerminalModalProps> = ({ isOpen, onClose }) => {
  const [logs, setLogs] = useState<string[]>([
    "=== XOR GAMING CAFE & RESTAURANT MANAGEMENT SYSTEM (v2.4) ===",
    "[INIT] Loading binary file 'inventory.bin' ... OK",
    "[INIT] Loading active console rental slots 'slots.dat' ... OK",
    "[SYSTEM] Ready. All 8 PlayStation Booths online.",
    "",
    "--- MAIN MENU ---",
    "1. Start / Manage Console Rental (PS1 - PS4)",
    "2. Order Kitchen / Cafeteria Refreshments",
    "3. View Active Booth Sessions & Invoices",
    "4. Flush & Save Binary State to Disk",
    ""
  ]);

  const [inputVal, setInputVal] = useState<string>('');
  const [activeSession, setActiveSession] = useState<{ booth: string; console: string; controllers: number; startTime: string } | null>({
    booth: "Booth #3",
    console: "PlayStation 4 Pro",
    controllers: 2,
    startTime: "21:30:00"
  });

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const newLogs = [...logs, `> ${cmd}`];

    if (cmd === '1') {
      newLogs.push(
        "--- CONSOLE BOOTH RENTAL SELECTOR ---",
        "[1] PS1 Classic (Rate: $2.50/hr + $0.50/controller)",
        "[2] PS2 Slim (Rate: $3.50/hr + $0.75/controller)",
        "[3] PS3 Super Slim (Rate: $4.50/hr + $1.00/controller)",
        "[4] PS4 Pro 4K (Rate: $6.00/hr + $1.50/controller)",
        ">> Assigned Booth #5 [PS4 Pro, 2 Controllers]. Clock timer initiated."
      );
      setActiveSession({
        booth: "Booth #5",
        console: "PlayStation 4 Pro",
        controllers: 2,
        startTime: new Date().toLocaleTimeString()
      });
    } else if (cmd === '2') {
      newLogs.push(
        "--- KITCHEN & CAFETERIA ORDER DISPATCH ---",
        "[+] 1x Pepperoni Gaming Pizza Slice -> Dispatched",
        "[+] 1x Cold Brew Energy Coffee -> Dispatched",
        "[SYSTEM] Inventory binary table updated (-1 pizza_dough, -1 beans_oz).",
        ">> Kitchen bill added to active Booth bill."
      );
    } else if (cmd === '3') {
      newLogs.push(
        "--- ACTIVE BOOTH SESSIONS ---",
        "Booth #3: PS4 Pro (2 Players) | Time: 45 mins | Subtotal: $5.62",
        "Booth #5: PS4 Pro (2 Players) | Time: 12 mins | Subtotal: $1.50",
        "Cafeteria Add-ons: $7.50",
        "Total Projected Revenue: $14.62 (Tax Incl.)"
      );
    } else if (cmd === '4') {
      newLogs.push(
        "--- SERIALIZATION ENGINE (C++ Binary I/O) ---",
        "Writing struct 'RentalRecord' (sizeof=128 bytes) ... DONE",
        "Writing struct 'InventoryEntry' (sizeof=64 bytes) ... DONE",
        "[SUCCESS] 0x004F9A bytes written to 'xor_store.dat'. Integrity checksum OK."
      );
    } else if (cmd.toLowerCase() === 'clear') {
      setLogs([
        "=== XOR GAMING CAFE & RESTAURANT MANAGEMENT SYSTEM (v2.4) ===",
        "Terminal cleared. Enter 1-4 to interact."
      ]);
      setInputVal('');
      return;
    } else {
      newLogs.push(`[ERROR] Unrecognized selection '${cmd}'. Enter 1, 2, 3, 4 or 'clear'.`);
    }

    setLogs(newLogs);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl text-slate-200 font-mono">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">XOR Systems & OOP Console Simulator</h3>
              <p className="text-[11px] text-slate-400">C++ Console Binary Engine (x86_64 CLI)</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Active Status Bar */}
        <div className="grid grid-cols-3 gap-2 mb-3 text-[11px] font-sans">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-2 flex items-center gap-2">
            <Gamepad2 className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">Active Booth</div>
              <div className="font-bold text-white">{activeSession?.booth || 'None'}</div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-2 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">Kitchen Mode</div>
              <div className="font-bold text-white">POS Linked</div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-2 flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">Storage Mode</div>
              <div className="font-bold text-white">Binary .DAT</div>
            </div>
          </div>
        </div>

        {/* Terminal Screen */}
        <div className="bg-slate-900 rounded-2xl p-4 h-72 overflow-y-auto border border-slate-800 text-xs space-y-1.5 shadow-inner text-emerald-400">
          {logs.map((log, idx) => (
            <div key={idx} className={log.startsWith('>') ? 'text-amber-300 font-bold' : log.startsWith('[ERROR]') ? 'text-rose-400' : 'text-slate-300'}>
              {log}
            </div>
          ))}
        </div>

        {/* Command Form */}
        <form onSubmit={handleCommand} className="mt-4 flex items-center gap-2">
          <span className="text-amber-400 text-sm font-bold">&gt;</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 1, 2, 3, 4, or 'clear'..."
            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
            autoFocus
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold font-sans cursor-pointer transition-colors"
          >
            Execute
          </button>
        </form>

        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 font-sans">
          <span>Simulation of C++ Operator Overloading & Binary File Stream</span>
          <button
            onClick={() => setLogs(["=== XOR GAMING CAFE SYSTEM ===", "1. Rent Console | 2. Kitchen Order | 3. Status | 4. Save Binary"])}
            className="hover:text-slate-300 underline"
          >
            Reset Logs
          </button>
        </div>

      </div>
    </div>
  );
};
