import React, { useRef, useEffect, useState } from 'react';
import { X, Play, RotateCcw, Trophy, Sparkles, Shield, Zap, Flame, Volume2, VolumeX } from 'lucide-react';

interface PokemonGameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PokemonGameModal: React.FC<PokemonGameModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(() => {
    return parseInt(localStorage.getItem('pkmn_high_score') || '0', 10);
  });
  const [activeBuff, setActiveBuff] = useState<string | null>(null);

  // Game Engine Reference
  const gameRef = useRef<{
    player: { x: number; y: number; size: number; speed: number; shield: boolean; shieldTimer: number; speedTimer: number };
    pokeballs: Array<{ x: number; y: number; vx: number; vy: number; radius: number; color: string; rotation: number }>;
    buffs: Array<{ x: number; y: number; type: 'shield' | 'speed' | 'multiplier'; radius: number; pulse: number }>;
    keys: { [key: string]: boolean };
    score: number;
    scoreMultiplier: number;
    multiplierTimer: number;
    animationId: number;
    lastSpawnTime: number;
    lastBuffSpawnTime: number;
  }>({
    player: { x: 250, y: 200, size: 24, speed: 5, shield: false, shieldTimer: 0, speedTimer: 0 },
    pokeballs: [],
    buffs: [],
    keys: {},
    score: 0,
    scoreMultiplier: 1,
    multiplierTimer: 0,
    animationId: 0,
    lastSpawnTime: 0,
    lastBuffSpawnTime: 0,
  });

  const startGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    gameRef.current.player = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      size: 20,
      speed: 5,
      shield: false,
      shieldTimer: 0,
      speedTimer: 0,
    };
    gameRef.current.pokeballs = [];
    gameRef.current.buffs = [];
    gameRef.current.score = 0;
    gameRef.current.scoreMultiplier = 1;
    gameRef.current.multiplierTimer = 0;
    gameRef.current.lastSpawnTime = Date.now();
    gameRef.current.lastBuffSpawnTime = Date.now();

    setScore(0);
    setActiveBuff(null);
    setGameState('playing');
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'].includes(e.key)) {
        e.preventDefault();
      }
      gameRef.current.keys[e.key.toLowerCase()] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      gameRef.current.keys[e.key.toLowerCase()] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || gameState !== 'playing') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isRunning = true;

    const gameLoop = () => {
      if (!isRunning) return;
      const game = gameRef.current;
      const player = game.player;

      // Clear canvas
      ctx.fillStyle = '#0F172A'; // Dark slate arcade canvas
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid
      ctx.strokeStyle = '#1E293B';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Handle Player Movement
      const currentSpeed = player.speedTimer > 0 ? 8 : 5;
      if (game.keys['arrowup'] || game.keys['w']) player.y -= currentSpeed;
      if (game.keys['arrowdown'] || game.keys['s']) player.y += currentSpeed;
      if (game.keys['arrowleft'] || game.keys['a']) player.x -= currentSpeed;
      if (game.keys['arrowright'] || game.keys['d']) player.x += currentSpeed;

      // Keep player inside boundary
      player.x = Math.max(player.size, Math.min(canvas.width - player.size, player.x));
      player.y = Math.max(player.size, Math.min(canvas.height - player.size, player.y));

      // Timers decrement
      if (player.shieldTimer > 0) {
        player.shieldTimer--;
        if (player.shieldTimer === 0) player.shield = false;
      }
      if (player.speedTimer > 0) {
        player.speedTimer--;
      }
      if (game.multiplierTimer > 0) {
        game.multiplierTimer--;
        if (game.multiplierTimer === 0) game.scoreMultiplier = 1;
      }

      // Update active buff text for UI
      if (player.shield) setActiveBuff('Shield Activated!');
      else if (player.speedTimer > 0) setActiveBuff('⚡ Speed Boost 2x!');
      else if (game.scoreMultiplier > 1) setActiveBuff('⭐ 2x Score Multiplier!');
      else setActiveBuff(null);

      // Spawn Pokeballs
      const now = Date.now();
      const spawnInterval = Math.max(400, 1200 - Math.floor(game.score / 100) * 80);
      if (now - game.lastSpawnTime > spawnInterval) {
        game.lastSpawnTime = now;
        const side = Math.floor(Math.random() * 4);
        let px = 0, py = 0;
        if (side === 0) { px = Math.random() * canvas.width; py = -20; }
        else if (side === 1) { px = canvas.width + 20; py = Math.random() * canvas.height; }
        else if (side === 2) { px = Math.random() * canvas.width; py = canvas.height + 20; }
        else { px = -20; py = Math.random() * canvas.height; }

        const angle = Math.atan2(player.y - py, player.x - px) + (Math.random() - 0.5) * 0.5;
        const baseSpeed = 2.5 + Math.random() * 2 + (game.score / 300);

        game.pokeballs.push({
          x: px,
          y: py,
          vx: Math.cos(angle) * baseSpeed,
          vy: Math.sin(angle) * baseSpeed,
          radius: 12 + Math.random() * 4,
          color: Math.random() > 0.3 ? '#EF4444' : '#8B5CF6', // Standard Red or Great/Master Ball
          rotation: 0
        });
      }

      // Spawn Buffs occasionally
      if (now - game.lastBuffSpawnTime > 6000) {
        game.lastBuffSpawnTime = now;
        const types: Array<'shield' | 'speed' | 'multiplier'> = ['shield', 'speed', 'multiplier'];
        const chosenType = types[Math.floor(Math.random() * types.length)];
        game.buffs.push({
          x: 40 + Math.random() * (canvas.width - 80),
          y: 40 + Math.random() * (canvas.height - 80),
          type: chosenType,
          radius: 14,
          pulse: 0
        });
      }

      // Draw & Update Buffs
      for (let i = game.buffs.length - 1; i >= 0; i--) {
        const buff = game.buffs[i];
        buff.pulse += 0.05;

        // Draw Buff Glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(buff.x, buff.y, buff.radius + Math.sin(buff.pulse) * 3, 0, Math.PI * 2);
        if (buff.type === 'shield') ctx.fillStyle = '#38BDF8';
        else if (buff.type === 'speed') ctx.fillStyle = '#FBBF24';
        else ctx.fillStyle = '#A855F7';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();

        // Check buff pickup
        const dist = Math.hypot(player.x - buff.x, player.y - buff.y);
        if (dist < player.size + buff.radius) {
          if (buff.type === 'shield') {
            player.shield = true;
            player.shieldTimer = 300; // ~5 seconds
          } else if (buff.type === 'speed') {
            player.speedTimer = 300;
          } else if (buff.type === 'multiplier') {
            game.scoreMultiplier = 2;
            game.multiplierTimer = 360;
          }
          game.score += 50 * game.scoreMultiplier;
          game.buffs.splice(i, 1);
        }
      }

      // Draw & Update Pokeballs
      for (let i = game.pokeballs.length - 1; i >= 0; i--) {
        const ball = game.pokeballs[i];
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.rotation += 0.05;

        // Draw Pokeball
        ctx.save();
        ctx.translate(ball.x, ball.y);
        ctx.rotate(ball.rotation);

        // Top half (Red/Purple)
        ctx.beginPath();
        ctx.arc(0, 0, ball.radius, Math.PI, 0, false);
        ctx.fillStyle = ball.color;
        ctx.fill();

        // Bottom half (White)
        ctx.beginPath();
        ctx.arc(0, 0, ball.radius, 0, Math.PI, false);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        // Center line & button
        ctx.beginPath();
        ctx.arc(0, 0, ball.radius, 0, Math.PI * 2);
        ctx.strokeStyle = '#0F172A';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-ball.radius, 0);
        ctx.lineTo(ball.radius, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.stroke();

        ctx.restore();

        // Collision with Player
        const dist = Math.hypot(player.x - ball.x, player.y - ball.y);
        if (dist < player.size + ball.radius) {
          if (player.shield) {
            // Shield absorbs hit
            player.shield = false;
            player.shieldTimer = 0;
            game.pokeballs.splice(i, 1);
            continue;
          } else {
            // Game Over!
            setGameState('gameover');
            if (game.score > highScore) {
              setHighScore(game.score);
              localStorage.setItem('pkmn_high_score', game.score.toString());
            }
            isRunning = false;
            return;
          }
        }

        // Remove offscreen pokeballs
        if (
          ball.x < -50 ||
          ball.x > canvas.width + 50 ||
          ball.y < -50 ||
          ball.y > canvas.height + 50
        ) {
          game.pokeballs.splice(i, 1);
          game.score += 5 * game.scoreMultiplier;
        }
      }

      // Draw Player (Pikachu yellow orb avatar with electric spark ears)
      ctx.save();
      ctx.translate(player.x, player.y);

      // Shield Aura
      if (player.shield) {
        ctx.beginPath();
        ctx.arc(0, 0, player.size + 8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.3)';
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 2;
        ctx.shadowColor = '#38BDF8';
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.fill();
      }

      // Player Body (Yellow Avatar)
      ctx.beginPath();
      ctx.arc(0, 0, player.size, 0, Math.PI * 2);
      ctx.fillStyle = '#FBBF24';
      ctx.shadowColor = '#F59E0B';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.strokeStyle = '#B45309';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Cheeks (Red dots)
      ctx.beginPath();
      ctx.arc(-8, 3, 3.5, 0, Math.PI * 2);
      ctx.arc(8, 3, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#EF4444';
      ctx.fill();

      // Eyes
      ctx.beginPath();
      ctx.arc(-5, -4, 2, 0, Math.PI * 2);
      ctx.arc(5, -4, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#0F172A';
      ctx.fill();

      ctx.restore();

      // Increment Survival Score
      game.score += 1 * game.scoreMultiplier;
      setScore(game.score);

      gameRef.current.animationId = requestAnimationFrame(gameLoop);
    };

    gameRef.current.animationId = requestAnimationFrame(gameLoop);

    return () => {
      isRunning = false;
      cancelAnimationFrame(gameRef.current.animationId);
    };
  }, [isOpen, gameState, highScore]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-xl w-full p-6 shadow-2xl relative text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold tracking-tight">Pokémon Dodge & Buff</h3>
              <p className="text-xs text-slate-400">Interactive HTML5 Canvas Arcade Minigame</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Score & HUD */}
        <div className="flex items-center justify-between mb-3 px-2 text-xs font-mono">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">Score:</span>
              <span className="text-amber-400 font-bold text-sm">{score}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-yellow-500" />
              <span className="text-slate-400">Best:</span>
              <span className="text-white font-bold">{highScore}</span>
            </div>
          </div>

          {activeBuff && (
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-bold text-[11px] animate-pulse">
              {activeBuff}
            </span>
          )}
        </div>

        {/* Game Canvas Container */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center shadow-inner">
          <canvas
            ref={canvasRef}
            width={520}
            height={320}
            className="w-full h-auto max-h-[340px] block"
          />

          {/* Idle / Overlay Screen */}
          {gameState === 'idle' && (
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 mb-3 shadow-lg shadow-amber-500/20">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold mb-1">Dodge the Pokeballs!</h4>
              <p className="text-xs text-slate-400 max-w-sm mb-4">
                Use <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono">WASD</kbd> or <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono">Arrow Keys</kbd> to steer Pikachu. Collect blue shields, speed sparks, and 2x stars!
              </p>
              <button
                onClick={startGame}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md shadow-blue-500/30 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Start Game</span>
              </button>
            </div>
          )}

          {/* Game Over Screen */}
          {gameState === 'gameover' && (
            <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center animate-in fade-in">
              <div className="text-rose-500 font-extrabold text-2xl mb-1">You Got Caught!</div>
              <p className="text-xs text-slate-400 mb-3">Final Score: <span className="text-amber-400 font-bold text-base">{score}</span></p>
              
              <button
                onClick={startGame}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md shadow-blue-500/30 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Play Again</span>
              </button>
            </div>
          )}
        </div>

        {/* Controls Footer */}
        <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Controls: [W A S D] or Arrow Keys</span>
          <span className="text-slate-500">HTML5 Canvas Engine</span>
        </div>

      </div>
    </div>
  );
};
