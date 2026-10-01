import type { Project } from "./types";

const landscape = { width: 1600, height: 900 } as const;
const desktop = { width: 1440, height: 900 } as const;
const phone = { width: 780, height: 1688 } as const;

export const projects: Project[] = [
  {
    name: "WaveLength",
    slug: "wavelength",
    description:
      "A browser puzzle game about signal processing. Players wire chips together to shape input waveforms into target outputs, and every solved puzzle becomes a reusable chip. Runs on a Canvas 2D engine written from scratch in TypeScript, built with Claude Code.",
    url: "https://ericmchavez.github.io/WaveLength",
    repo: "https://github.com/EricMChavez/WaveLength",
    label: null,
    technologies: ["TypeScript", "Canvas API", "React", "Zustand", "Vitest", "Claude Code"],
    highlights: [
      "Built a custom Canvas 2D game engine and 6 puzzles in February 2026 using AI-assisted development",
      "Re-evaluates all 256 signal cycles on every edit, so there is no run button",
      "Solved puzzles compile into reusable chips that can contain other chips",
      "A* wire routing on a 66×36 grid with three-pass glow and polarity rendering",
      "Full keyboard play, undo/redo, versioned save migrations, and 1,300+ passing tests",
      "LinkedIn showcase post gained 178 likes and 29 comments",
    ],
    outcome: "Public beta with 6 puzzles and 1,300+ passing tests",
    accent: "phosphor",
    featured: true,
    comingSoon: false,
    preview: {
      src: "/images/projects/wavelength/gameboard.webp",
      alt: "WaveLength puzzle in progress: an input sawtooth wired through Divide and Add chips toward target output meters",
      ...landscape,
    },
    gallery: [
      {
        src: "/images/projects/wavelength/title-screen.webp",
        alt: "WaveLength ASCII-art logo on a green retro CRT monitor with Home, About, Settings and Play buttons",
        caption: "The retro CRT title screen",
        ...landscape,
      },
      {
        src: "/images/projects/wavelength/gameboard.webp",
        alt: "Puzzle in progress: an input sawtooth wired through two Divide chips and an Add chip, with output X matching its target and output Y not yet matching",
        caption: "Mid-puzzle: meters show live output against each target",
        ...landscape,
      },
      {
        src: "/images/projects/wavelength/puzzle-solved.webp",
        alt: "Solved puzzle: glowing blue wires route inputs A, B and C to outputs X, Y and Z, with all three output meters outlined in green",
        caption: "Solved: wires glow as the signal reaches full strength",
        ...landscape,
      },
      {
        src: "/images/projects/wavelength/chip-zoom.webp",
        alt: "Mid-transition zoom into a level chip on the motherboard, with the chip opening to reveal its gameboard",
        caption: "Zooming into a chip to reveal the board inside it",
        ...landscape,
      },
      {
        src: "/images/projects/wavelength/level-select.webp",
        alt: "Motherboard level-select screen: level chips wired in a column, with green lights on solved levels and the next level unlocked",
        caption: "The motherboard level select",
        ...landscape,
      },
    ],
  },
  {
    name: "Tabula",
    slug: "tabula",
    description:
      "A desktop app for building repeatable CSV workflows without code. Users compose typed rule blocks on a visual canvas to modify, exclude, or flag rows, see row by row why each value changed, and save every export as a replayable audit. Shipped to a client as a Windows installer.",
    url: null,
    repo: null,
    label: "Private client work",
    technologies: ["Electron", "React", "TypeScript", "SQLite", "Zustand", "Mantine", "Playwright"],
    highlights: [
      "Designed a typed block-based rule language with a drag-and-drop canvas editor",
      "Fault-tolerant evaluation: runtime errors become typed exclusions with per-row rollback and traces",
      "Replayable audits rebuilt from compressed input snapshots, verified deterministic by hash in tests",
      "Single-file SQLite documents with embedded compressed CSVs and versioned migrations",
      "~810 unit tests and ~60 Playwright scenarios driving the real Electron app",
    ],
    outcome: "Shipped to a client as a Windows installer, built solo in four months",
    accent: "blueprint",
    featured: false,
    comingSoon: false,
    preview: {
      src: "/images/projects/tabula/workspace.webp",
      alt: "Tabula workspace: rules sidebar, data table with before-and-after value chips, and the Inspector panel",
      ...desktop,
    },
    gallery: [
      {
        src: "/images/projects/tabula/workspace.webp",
        alt: "Tabula workspace: Exclude, Modify and Alert rules on the left, a data table with status column and before-and-after value chips, and the Inspector with a pipeline trace",
        caption: "The workspace: rules, data, and the Inspector",
        ...desktop,
      },
      {
        src: "/images/projects/tabula/rule-editor.webp",
        alt: "Rule editor showing a WHEN condition built from nested And and Or blocks comparing linked and primary columns",
        caption: "Rules are trees of typed blocks",
        ...desktop,
      },
      {
        src: "/images/projects/tabula/rule-editor-set.webp",
        alt: "Rule editor showing a SET block with a Max expression, and a dimmed unconnected block below it that does not run",
        caption: "Unconnected blocks stay on the canvas, dimmed and inactive",
        ...desktop,
      },
      {
        src: "/images/projects/tabula/inspector-trace.webp",
        alt: "Inspector pipeline trace with three rule cards showing a price moving from 7.99 to 6 to 7.267 to 7.25",
        caption: "Per-row pipeline trace",
        width: 360,
        height: 811,
      },
      {
        src: "/images/projects/tabula/export-dialog.webp",
        alt: "Finalize and export dialog with a column checklist, a changed-rows-only toggle and an audit label field",
        caption: "Finalizing an export",
        ...desktop,
      },
      {
        src: "/images/projects/tabula/audit.webp",
        alt: "A reopened audit in a read-only tab labelled May price refresh, with editing controls hidden",
        caption: "Past exports reopen as read-only audits",
        ...desktop,
      },
    ],
  },
  {
    name: "The House Menu",
    slug: "house-menu",
    description:
      "A phone-first meal-planning PWA built for my household. Meals land on a calendar as diner guest checks, while a Postgres ledger tracks pantry stock, meal costs, and one shared grocery list that buys only what's missing.",
    url: null,
    repo: null,
    label: "Personal project",
    technologies: ["React", "Vite", "Supabase Postgres", "Vercel Functions", "Docker", "Claude Code"],
    highlights: [
      "Stock, money, and lock state enforced in Postgres functions with derived reserved and incoming buckets",
      "Every migration tested in a throwaway Docker Postgres, plus a sabotage pass that proves the tests catch breakage",
      "Secret-free demo mode backed by an in-memory Supabase fake",
      "A narrow, code-enforced write API that lets an AI assistant propose changes safely",
    ],
    outcome: "In daily use at home, backed by 133 tested database migrations",
    accent: "stamp",
    featured: false,
    comingSoon: false,
    preview: {
      src: "/images/projects/house-menu/preview.webp",
      alt: "Three House Menu phone screens on a dark counter: the calendar feed of guest checks, an open meal ticket, and the grocery list",
      ...landscape,
    },
    gallery: [
      {
        src: "/images/projects/house-menu/feed.webp",
        alt: "Calendar feed of meals as paper guest checks with times, diner initials and READY stamps",
        caption: "The calendar feed",
        ...phone,
      },
      {
        src: "/images/projects/house-menu/meal-ticket.webp",
        alt: "An open meal ticket for roast chicken with ratings, prep options, add-ons, nutrition and order cost",
        caption: "An open meal ticket",
        ...phone,
      },
      {
        src: "/images/projects/house-menu/menu-picker.webp",
        alt: "Menu drawer for an empty dinner slot showing full price, discounted cost from stock, and grocery spend",
        caption: "Picking a meal, priced against the pantry",
        ...phone,
      },
      {
        src: "/images/projects/house-menu/grocery-list.webp",
        alt: "Grouped grocery list with needed quantities, prices, crossed-off lines and an expected total",
        caption: "One shared grocery list",
        ...phone,
      },
      {
        src: "/images/projects/house-menu/pantry.webp",
        alt: "Pantry drawer with leftovers, reserved items to verify, a shelf count, and category counts",
        caption: "The pantry ledger",
        ...phone,
      },
      {
        src: "/images/projects/house-menu/recipe.webp",
        alt: "Recipe card with ingredients, numbered method and yield",
        caption: "A recipe card",
        ...phone,
      },
    ],
  },
];
