"use client";

import { useState, type FormEvent } from "react";
import { portfolioProjects, skillGroups } from "@/lib/portfolio-data";

type TerminalEntry = { command: string; output: string };

const commandHelp = "Commands: help · about · skills · projects · contact · clear";

export default function PortfolioTerminal() {
  const [command, setCommand] = useState("");
  const [entries, setEntries] = useState<TerminalEntry[]>([
    { command: "", output: 'Welcome. Type "help" to explore.' },
  ]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = command.trim().toLowerCase();
    if (!normalized) return;
    setCommand("");

    if (normalized === "clear") {
      setEntries([]);
      return;
    }

    const outputByCommand: Record<string, string> = {
      help: commandHelp,
      about: "Vikash Gajraj Yadav · B.Sc. Computer Science · Titwala, Maharashtra · IST (UTC+05:30).",
      skills: skillGroups.map((group) => `${group.name}: ${group.skills.join(", ")}`).join(" | "),
      projects: portfolioProjects.map((project) => project.name).join(" · "),
      contact: "yadavvikashgajraj@gmail.com",
    };

    const output = outputByCommand[normalized] ?? `Unknown command: ${normalized}. Type "help" for available commands.`;
    setEntries((current) => [...current, { command: normalized, output }].slice(-6));
  }

  return (
    <section className="portfolio-terminal" aria-labelledby="terminal-title">
      <div className="terminal-titlebar"><span id="terminal-title">VY / QUICK INFO</span><span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span></div>
      <div className="terminal-output" role="log" aria-live="polite" aria-relevant="additions text">
        {entries.map((entry, index) => (
          <p className="terminal-entry" key={`${entry.command}-${index}`}>
            {entry.command && <span className="terminal-command">$ {entry.command}</span>}
            <span>{entry.output}</span>
          </p>
        ))}
      </div>
      <form className="terminal-form" onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="terminal-command">Enter help, about, skills, projects, contact, or clear</label>
        <span aria-hidden="true">$</span>
        <input
          id="terminal-command"
          className="w-full min-w-0"
          value={command}
          onChange={(event) => setCommand(event.target.value)}
          autoComplete="off"
          spellCheck={false}
          aria-describedby="terminal-hint"
        />
        <button type="submit" aria-label="Run portfolio terminal command">Run</button>
        <span id="terminal-hint" className="visually-hidden">This is a portfolio information terminal, not a system shell.</span>
      </form>
    </section>
  );
}