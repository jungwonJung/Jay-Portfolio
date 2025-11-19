import React, { useState, useEffect, useRef } from "react";

const commands = [
  { command: "whoami", output: "jay" },
  { command: "pwd", output: "~/portfolio" },
  { command: "git status", output: "On branch main\nYour branch is up to date." },
  { command: "ls -la", output: "total 24\ndrwxr-xr-x  8 jay  staff   256 Jan 15 10:30 ." },
  { command: "npm run dev", output: "> portfolio@1.0.0 dev\n> next dev\n\n  ▲ Next.js 14.0.0\n  - Local:        http://localhost:3000" },
];

const TerminalBackground: React.FC = () => {
  const [lines, setLines] = useState<Array<{ type: 'prompt' | 'command' | 'output', content: string }>>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const commandIndexRef = useRef(0);
  const phaseRef = useRef<'prompt' | 'typing' | 'output' | 'wait'>('prompt');
  const charIndexRef = useRef(0);

  useEffect(() => {
    const prompt = "jay@portfolio ~ % ";

    const animate = () => {
      if (commandIndexRef.current >= commands.length) {
        // Reset
        commandIndexRef.current = 0;
        setLines([]);
        setCurrentCommand("");
        phaseRef.current = 'prompt';
        charIndexRef.current = 0;
        setTimeout(animate, 1000);
        return;
      }

      const cmd = commands[commandIndexRef.current];

      if (phaseRef.current === 'prompt') {
        // Add prompt line
        setLines(prev => [...prev, { type: 'prompt', content: prompt }]);
        phaseRef.current = 'typing';
        charIndexRef.current = 0;
        setCurrentCommand("");
        setIsTyping(true);
        setTimeout(animate, 300);
      } else if (phaseRef.current === 'typing') {
        // Type command character by character
        if (charIndexRef.current < cmd.command.length) {
          setCurrentCommand(cmd.command.slice(0, charIndexRef.current + 1));
          charIndexRef.current++;
          setTimeout(animate, 80);
        } else {
          // Command typed, show output
          phaseRef.current = 'output';
          setIsTyping(false);
          setTimeout(animate, 500);
        }
      } else if (phaseRef.current === 'output') {
        // Add output
        setLines(prev => [...prev, { type: 'output', content: cmd.output }]);
        setCurrentCommand("");
        phaseRef.current = 'wait';
        commandIndexRef.current++;
        setTimeout(animate, 1500);
      } else if (phaseRef.current === 'wait') {
        // Wait before next command
        phaseRef.current = 'prompt';
        charIndexRef.current = 0;
        setTimeout(animate, 500);
      }
    };

    const timer = setTimeout(animate, 500);
    return () => clearTimeout(timer);
  }, [commands]);

  const renderLine = (line: { type: 'prompt' | 'command' | 'output', content: string }, index: number) => {
    if (line.type === 'prompt') {
      const parts = line.content.split(" ");
      const username = parts[0].split("@")[0];
      const hostname = parts[0].split("@")[1];
      const path = parts[1];
      const symbol = parts[2];

      return (
        <div key={index} className="flex items-center gap-1">
          <span className="text-green-400">{username}</span>
          <span className="text-white">@</span>
          <span className="text-blue-400">{hostname}</span>
          <span className="text-yellow-400"> {path}</span>
          <span className="text-white"> {symbol}</span>
        </div>
      );
    } else if (line.type === 'output') {
      return (
        <div key={index} className="text-gray-300 ml-4 whitespace-pre-line">
          {line.content}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="absolute inset-0 opacity-40 font-mono text-xs sm:text-sm p-6 sm:p-8 space-y-0.5 overflow-hidden">
      {lines.map((line, index) => renderLine(line, index))}
      {isTyping && currentCommand && (
        <div className="flex items-center gap-1">
          <span className="text-green-400">jay</span>
          <span className="text-white">@</span>
          <span className="text-blue-400">portfolio</span>
          <span className="text-yellow-400"> ~</span>
          <span className="text-white"> %</span>
          <span className="text-gray-300"> {currentCommand}</span>
          <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1"></span>
        </div>
      )}
    </div>
  );
};

export default TerminalBackground;
