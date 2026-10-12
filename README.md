# PTC HA 2026

[![Vue v3](https://img.shields.io/badge/Vue-v3-4FC08D.svg?logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![TypeScript v5](https://img.shields.io/badge/TypeScript-v5-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite v8](https://img.shields.io/badge/Vite-v8-646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Deploy: Vercel](https://img.shields.io/badge/Deploy-Vercel-000000.svg?logo=vercel&logoColor=white)](https://vercel.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/suradet-ps/ptc-ha2026/issues)

---

## ◆ PULSE

A surveyor reads the system, not the slides. PTC HA 2026 is the
medication system (ระบบยา) of Sabot Hospital presented to the HA / สรพ.
survey team in fifteen minutes: thirteen slides, one key message each,
each slide carrying its clause from the 6th edition of the standard
(II-6), each claim carrying its evidence and its script. The numbers
are the hospital's own - RDU passing 9 of 12, prescribing errors down
to 0.09 per 1,000 OPD prescriptions, Level E and repeated allergy at
zero for seven straight years. The deck is built to be driven from a
keyboard, timed against the plan, and printed as a PDF for the day the
projector disagrees.

| 13 slides ▣ | One key message each ▣ | Notes + evidence ▣ | PDF fallback ▣ |
|---|---|---|---|

*v1.0.0 - the deck, the notes, and the print are sealed; the survey room waits.*

> Built with Vue 3 + TypeScript + Vite, dressed in the สรพ. palette and
> the Prompt face - no CSS framework, no chart library, every graph and
> icon drawn in-house.
>
> **suradet-ps**, artifact keeper

---

## ◆ IGNITION

One runtime, two commands.

```
⟫ bun install
⟫ bun run dev        # http://localhost:5173
```

The release artifact: `⟫ bun run build` - `vue-tsc` type-checks first,
then Vite writes `dist/`.

<details>
<summary>Presenter controls</summary>

| Key | Action |
|---|---|
| `→` / `Space` / `PageDown` | next slide |
| `←` / `PageUp` | previous slide |
| `Home` / `End` | first / last slide |
| `1` - `9` (typed in sequence) | jump to a slide, e.g. `1` `2` = slide 12 |
| `S` or `N` | toggle the presenter notes |
| `O` | slide overview |
| `F` | full screen |
| `T` | start / stop the timer (double-click to reset) |
| `?` | shortcut help |
| `Esc` | close any overlay |

The timer arms itself on the first step away from slide one.

</details>

<details>
<summary>Deploying to Vercel</summary>

`vercel.json` is wired for a plain Vite deploy - framework `vite`,
build `bun run build`, output `dist`.

```
⟫ bunx vercel        # preview
⟫ bunx vercel --prod # production
```

Or connect the `suradet-ps/ptc-ha2026` repository to Vercel directly.

</details>

---

## ◆ ANATOMY

One stage, thirteen slides, and a clock that keeps the room honest.

- **Presents** - a fixed 16:9 stage (1280x720) scaled to any screen by
  `FitStage`; no scrolling, no surprises. Hash routing makes every slide
  a deep link - `#/5?panel=notes` opens slide five with the notes
  already out.
- **Notes** - the presenter panel holds each slide's script, its planned
  minutes, and its evidence checklist - preparation kept off-stage until
  the question arrives.
- **Times** - the presenter bar counts against the cumulative plan:
  green on plan, yellow drifting, red beyond 2:30 late.
- **Prints** - `Ctrl / Cmd + P` yields 297mm x 167mm pages, one slide
  each - the paper fallback for a projector emergency.
- **Draws** - charts and icons are hand-drawn SVG
  (`src/components/charts/`); the Prompt font is self-hosted; nothing is
  fetched at runtime.
- **Dresses** - the palette follows สรพ.'s own (น้ำเงิน `#0D5FA8` · แดง
  `#FA0F0C` · ทอง `#EACC55`), and the real Sabot Hospital logo anchors
  the title, the bar, and the favicon.
- **Holds** - the content lives in `src/data/`: `config.ts` for identity
  and contacts, `deck.ts` for titles, key messages, script, standard
  references, and evidence, `metrics.ts` for every number and chart
  series, each with its source in a comment.

Every slide cites its standard clause in the footer and in the notes
(`standardRef` in `src/data/deck.ts`):

| Slide | Clause | Requirement |
|---|---|---|
| 3 Governance | II-6.1 ก (1) | PTC designs and governs the medication system |
| 4 Selection | II-6.1 ค | Drug list, shortages, emergency drugs, closed pharmacy |
| 5 Safety | II-6.1 ก (1)(v) · II-6.2 ก (2) | High-alert drugs · medication reconciliation |
| 6 RDU / AMS | II-6.1 ก (2) | RDU and AMS programs |
| 7 Digital Health | II-6.1 ข (4) · II-6.2 ก (3) | Decision support · CPOE |
| 8 3P Safety | II-6.1 ข (1) · II-6.2 ค | Staff training · dispensing and drug information |
| 9 KPI Dashboard | II-6.1 ก (3) | Process and outcome indicators |
| 10 PDSA | II-6.2 ก | Ordering and order transcription |
| 11 Case Study | II-6.1 ก (1)(i) · (3) | An effective system · innovation in medication |
| 12 Roadmap | II-6.1 ก (1)(iv) | Error prevention policy and its audit |

---

## ◆ RITUALS

**The core ceremony** - the fifteen minutes:

1. Open the deck; the timer arms itself when slide one is left behind.
2. Advance with `→` / `Space`; the bar answers with position and drift.
3. `S` for the notes when a slide needs its script or its evidence
   checklist; `O` to see where the deck is going; `?` when a key is
   forgotten.
4. `T` stops the clock. The buffer is part of the plan, not an accident.

<details>
<summary>The 15-minute plan</summary>

| # | Slide | Time | Cumulative |
|---|---|---|---|
| 1 | Title | 0:30 | 0:30 |
| 2 | Agenda | 0:30 | 1:00 |
| 3 | Governance / PTC | 1:30 | 2:30 |
| 4 | Selection & Procurement | 1:30 | 4:00 |
| 5 | Medication Safety | 2:00 | 6:00 |
| 6 | RDU / AMS | 1:30 | 7:30 |
| 7 | Digital Health & AI | 1:30 | 9:00 |
| 8 | 3P Safety | 1:00 | 10:00 |
| 9 | KPI Dashboard | 1:30 | 11:30 |
| 10 | PDSA | 1:00 | 12:30 |
| 11 | Case Study | 1:00 | 13:30 |
| 12 | Roadmap | 0:45 | 14:15 |
| 13 | Thank You & Q&A | 0:15 | 14:30 |
| - | Buffer | 0:30 | 15:00 |

</details>

**The ceremony of the evidence** - every claim on a slide maps to a
document the survey team can ask for: appointment orders, PTC minutes,
NRLS reports, RCA files, CQI plans. The checklist lives beside the
script, not in someone's memory.

**The ceremony of the numbers** - the deck carries the hospital's real
indicators, not demo figures: the 2569 report (ต.ค. 2568 - มิ.ย. 2569),
the II-6 medication-system report, and the สรพ. feedback response of
19-20 Feb 2568. When a newer report lands, `src/data/metrics.ts` is the
single edit - plus the `years` array and the year footnotes on slides
5, 9, and 10.

**The ceremony of the paper** - before the room, print the deck: Chrome,
Save as PDF, 297mm x 167mm, margins None, background graphics on -
thirteen pages, one slide each, the fallback that never fails.

---

## ◆ ECHOES

**Where this artifact is heading**

```
stage    ▸ fixed 16:9, fit to any screen, no scroll ───────────────── ▸ sealed
notes    ▸ script, plan time, evidence per slide ──────────────────── ▸ sealed
timing   ▸ cumulative plan, green / yellow / red ──────────────────── ▸ sealed
print    ▸ 297mm x 167mm, one slide per page ──────────────────────── ▸ sealed
survey   ▸ 20 October 2026, the room itself ───────────────────────── ▸ open
```

**Raising the artifact** - the design tokens live in
`src/styles/tokens.css`, the slides in `src/slides/`, the shell in
`src/App.vue`; `vercel.json` carries the deploy. Open an issue first to
discuss a change.

**Status** - the gate is the local build: `bun run build` type-checks
with `vue-tsc` before Vite writes `dist/`; Vercel deploys what the build
accepts.

---

```
  ─────────────────────────────────────────
   The survey team reads the system.
   The slides only testify.
  ─────────────────────────────────────────
```
