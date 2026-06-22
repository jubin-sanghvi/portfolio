---
title: 'How I Reduced Token Usage in Claude Code'
date: 2026-06-16
description: "I asked Claude to optimize its own workflow using tiered models and parallel sub-agents. Here's what happened."
tags: ['ai', 'optimization', 'claude', 'developer-tools']
---

I started looking into ways to reduce token usage in Claude Code because costs and limits add up fast. Like most people, my first instinct was to look for YouTube tutorials. But then I tried something simpler: I asked Claude.

I pointed it at my actual workflows and asked: "How would you optimize this workflow using Haiku, Sonnet, Opus, and sub-agents?"

That's when things clicked. It started suggesting improvements I hadn't considered:

- Use Haiku for lightweight steps instead of defaulting to Opus
- Reserve Sonnet and Opus for deeper reasoning
- Split workflows into smaller sub-agents and run them in parallel
- Avoid repeatedly passing large shared context

In one case, I had a process running sequentially on Opus. Claude recommended breaking it into parallel sub-agents and distributing work across tiered models.

The result was faster execution and lower token usage. No tutorial I could have watched would come close to that level of context-aware guidance. You can apply this approach to hooks, skills, permissions, or any Claude concept.

Over time, I realized Claude isn't just helping you complete tasks. It's helping you design better workflows, especially when it comes to model selection and task decomposition.

In my 10+ years in software engineering, I haven't seen another tool that can teach you how to use it this effectively while you're using it.

If you're using Claude Code, try this: ask it how it would redesign your workflow using tiered models and parallel sub-agents.

Bonus tools I've found useful for token efficiency:

- **Rust Token Killer** - CLI proxy that cuts token overhead 60-90%
- **CodeGraph** - Code intelligence over an indexed knowledge graph
- **Caveman** - Ultra-compressed communication mode (this is super fun to use!)
- **Ponytail** - Forces the laziest, simplest solution (still experimenting with this one)
