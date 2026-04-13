<!DOCTYPE html>
<html lang="en" data-bs-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic × Bootstrap — Component Guide</title>

    <!-- Google Fonts: Lato + JetBrains Mono + Playfair Display -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=JetBrains+Mono:wght@400;600&family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet">

    <style>
        /* ── CSS Custom Properties ─────────────────────────────────── */
        :root {
            --sem-red: #db2828;
            --sem-orange: #f2711c;
            --sem-yellow: #fbbd08;
            --sem-olive: #b5cc18;
            --sem-green: #21ba45;
            --sem-teal: #00b5ad;
            --sem-blue: #2185d0;
            --sem-violet: #6435c9;
            --sem-purple: #a333c8;
            --sem-pink: #e03997;
            --sem-brown: #a5673f;
            --sem-grey: #767676;
            --sem-black: #1b1c1d;

            --radius: .28rem;
            --shadow-sm: 0 1px 2px rgba(0, 0, 0, .08);
            --shadow: 0 1px 3px rgba(0, 0, 0, .08), 0 0 0 1px rgba(0, 0, 0, .05);
            --shadow-lg: 0 4px 14px rgba(0, 0, 0, .12), 0 0 0 1px rgba(0, 0, 0, .05);

            --font-body: "Lato", system-ui, sans-serif;
            --font-mono: "JetBrains Mono", monospace;
            --font-display: "Playfair Display", serif;

            --bg: #f8f9fb;
            --surface: #ffffff;
            --border: rgba(34, 36, 38, .12);
            --text: #1b1c1d;
            --text-muted: #767676;
            --sidebar-bg: #1b1c1d;
            --sidebar-text: rgba(255, 255, 255, .75);
            --sidebar-active: #2185d0;
            --code-bg: #f3f4f6;
            --code-border: rgba(34, 36, 38, .1);
        }

        [data-bs-theme="dark"] {
            --bg: #111218;
            --surface: #1a1b24;
            --border: rgba(255, 255, 255, .08);
            --text: rgba(255, 255, 255, .92);
            --text-muted: rgba(255, 255, 255, .4);
            --code-bg: #0d0e14;
            --code-border: rgba(255, 255, 255, .08);
        }

        /* ── Reset & Base ──────────────────────────────────────────── */
        *,
        *::before,
        *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: var(--font-body);
            font-size: 14px;
            line-height: 1.6;
            background: var(--bg);
            color: var(--text);
            display: flex;
            min-height: 100vh;
        }

        /* ── Sidebar ───────────────────────────────────────────────── */
        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: 240px;
            background: var(--sidebar-bg);
            overflow-y: auto;
            z-index: 100;
            display: flex;
            flex-direction: column;
        }

        .sidebar-brand {
            padding: 1.75rem 1.5rem 1.25rem;
            border-bottom: 1px solid rgba(255, 255, 255, .08);
        }

        .sidebar-brand h1 {
            font-family: var(--font-display);
            font-size: 1.1rem;
            color: #fff;
            line-height: 1.2;
        }

        .sidebar-brand p {
            font-size: .7rem;
            color: rgba(255, 255, 255, .4);
            margin-top: .3rem;
            letter-spacing: .06em;
            text-transform: uppercase;
        }

        .sidebar-nav {
            padding: 1rem 0;
            flex: 1;
        }

        .sidebar-section {
            padding: .5rem 1.5rem .25rem;
            font-size: .65rem;
            font-weight: 900;
            letter-spacing: .1em;
            text-transform: uppercase;
            color: rgba(255, 255, 255, .25);
            margin-top: .5rem;
        }

        .sidebar-link {
            display: block;
            padding: .45rem 1.5rem;
            font-size: .8rem;
            font-weight: 400;
            color: var(--sidebar-text);
            text-decoration: none;
            transition: color .15s, background .15s;
            border-left: 2px solid transparent;
        }

        .sidebar-link:hover {
            color: #fff;
            background: rgba(255, 255, 255, .05);
            border-left-color: rgba(255, 255, 255, .2);
        }

        .sidebar-link.active {
            color: #54c8ff;
            border-left-color: #2185d0;
            background: rgba(33, 133, 208, .12);
        }

        .sidebar-footer {
            padding: 1rem 1.5rem;
            border-top: 1px solid rgba(255, 255, 255, .08);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .sidebar-footer span {
            font-size: .7rem;
            color: rgba(255, 255, 255, .3);
        }

        /* Theme toggle */
        .theme-btn {
            background: rgba(255, 255, 255, .1);
            border: none;
            border-radius: 2rem;
            padding: .3rem .65rem;
            font-size: .75rem;
            color: rgba(255, 255, 255, .6);
            cursor: pointer;
            transition: background .15s;
        }

        .theme-btn:hover {
            background: rgba(255, 255, 255, .2);
            color: #fff;
        }

        /* ── Main Content ──────────────────────────────────────────── */
        .main {
            margin-left: 240px;
            flex: 1;
            max-width: 960px;
            padding: 3rem 3.5rem;
        }

        /* ── Section headers ───────────────────────────────────────── */
        .doc-section {
            margin-bottom: 4rem;
            padding-top: 1rem;
        }

        .doc-section__tag {
            display: inline-block;
            font-size: .65rem;
            font-weight: 900;
            letter-spacing: .1em;
            text-transform: uppercase;
            color: var(--sem-blue);
            margin-bottom: .5rem;
        }

        .doc-section__title {
            font-family: var(--font-display);
            font-size: 1.75rem;
            font-weight: 700;
            color: var(--text);
            margin-bottom: .5rem;
            line-height: 1.2;
        }

        .doc-section__desc {
            font-size: .9rem;
            color: var(--text-muted);
            max-width: 560px;
            margin-bottom: 2rem;
            line-height: 1.7;
        }

        /* Sub-headings */
        .doc-sub {
            font-size: .75rem;
            font-weight: 900;
            letter-spacing: .08em;
            text-transform: uppercase;
            color: var(--text-muted);
            margin: 2rem 0 1rem;
            padding-bottom: .5rem;
            border-bottom: 1px solid var(--border);
        }

        /* ── Demo card (preview + code) ────────────────────────────── */
        .demo-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: .5rem;
            overflow: hidden;
            margin-bottom: 1.5rem;
            box-shadow: var(--shadow-sm);
        }

        .demo-preview {
            padding: 2rem 2rem;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: .75rem;
            background:
                radial-gradient(circle at 20% 80%, rgba(33, 133, 208, .04) 0%, transparent 50%),
                var(--surface);
            min-height: 80px;
        }

        .demo-preview--block {
            flex-direction: column;
            align-items: flex-start;
        }

        .demo-code {
            background: var(--code-bg);
            border-top: 1px solid var(--code-border);
        }

        .demo-code-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: .5rem 1rem;
            border-bottom: 1px solid var(--code-border);
        }

        .demo-code-header span {
            font-size: .65rem;
            font-weight: 700;
            letter-spacing: .08em;
            text-transform: uppercase;
            color: var(--text-muted);
        }

        .copy-btn {
            background: none;
            border: 1px solid var(--code-border);
            border-radius: .25rem;
            padding: .2rem .55rem;
            font-size: .65rem;
            font-weight: 700;
            color: var(--text-muted);
            cursor: pointer;
            transition: all .1s;
        }

        .copy-btn:hover {
            border-color: var(--sem-blue);
            color: var(--sem-blue);
        }

        .copy-btn.copied {
            border-color: var(--sem-green);
            color: var(--sem-green);
        }

        pre {
            margin: 0;
            padding: 1rem 1.25rem;
            font-family: var(--font-mono);
            font-size: .75rem;
            line-height: 1.7;
            color: var(--text);
            overflow-x: auto;
            white-space: pre;
        }

        /* ── Syntax highlight (lightweight, CSS-only) ──────────────── */
        .kw {
            color: #9333ea;
            font-weight: 600;
        }

        .at {
            color: #2185d0;
        }

        .str {
            color: #21ba45;
        }

        .cm {
            color: var(--text-muted);
            font-style: italic;
        }

        .cl {
            color: #db2828;
            font-weight: 600;
        }

        .mo {
            color: #f2711c;
        }

        /* ── Prop table ────────────────────────────────────────────── */
        .prop-table {
            width: 100%;
            border-collapse: collapse;
            font-size: .8rem;
            margin-bottom: 1.5rem;
        }

        .prop-table th {
            text-align: left;
            padding: .6rem 1rem;
            font-weight: 700;
            font-size: .7rem;
            letter-spacing: .06em;
            text-transform: uppercase;
            background: var(--code-bg);
            border-bottom: 1px solid var(--border);
            color: var(--text-muted);
        }

        .prop-table td {
            padding: .65rem 1rem;
            border-bottom: 1px solid var(--border);
            vertical-align: top;
        }

        .prop-table tr:last-child td {
            border-bottom: none;
        }

        .prop-table code {
            font-family: var(--font-mono);
            font-size: .75rem;
            background: var(--code-bg);
            border: 1px solid var(--code-border);
            border-radius: .2rem;
            padding: .1em .35em;
            color: var(--sem-purple);
        }

        .prop-table .mod {
            color: var(--sem-blue);
            font-family: var(--font-mono);
            font-size: .75rem;
        }

        /* ── Color pill grid ───────────────────────────────────────── */
        .color-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: .75rem;
            margin-bottom: 1.5rem;
        }

        .color-swatch {
            border-radius: .35rem;
            overflow: hidden;
            border: 1px solid var(--border);
            box-shadow: var(--shadow-sm);
        }

        .color-swatch__block {
            height: 56px;
        }

        .color-swatch__info {
            padding: .4rem .6rem;
            background: var(--surface);
        }

        .color-swatch__name {
            font-size: .7rem;
            font-weight: 700;
            text-transform: capitalize;
        }

        .color-swatch__hex {
            font-family: var(--font-mono);
            font-size: .65rem;
            color: var(--text-muted);
        }

        /* ── Intro hero ────────────────────────────────────────────── */
        .hero {
            margin-bottom: 3.5rem;
            padding-bottom: 2.5rem;
            border-bottom: 1px solid var(--border);
        }

        .hero__eyebrow {
            display: inline-flex;
            align-items: center;
            gap: .5rem;
            font-size: .7rem;
            font-weight: 700;
            letter-spacing: .08em;
            text-transform: uppercase;
            color: var(--sem-blue);
            margin-bottom: 1rem;
        }

        .hero__eyebrow span {
            display: inline-block;
            width: 24px;
            height: 2px;
            background: var(--sem-blue);
        }

        .hero__title {
            font-family: var(--font-display);
            font-size: 2.75rem;
            font-weight: 700;
            line-height: 1.15;
            color: var(--text);
            margin-bottom: 1rem;
        }

        .hero__title em {
            font-style: italic;
            color: var(--sem-blue);
        }

        .hero__desc {
            font-size: .95rem;
            color: var(--text-muted);
            max-width: 560px;
            line-height: 1.8;
            margin-bottom: 1.5rem;
        }

        .badge-row {
            display: flex;
            flex-wrap: wrap;
            gap: .5rem;
        }

        .badge-pill {
            display: inline-flex;
            align-items: center;
            gap: .3rem;
            padding: .25rem .7rem;
            border-radius: 2rem;
            font-size: .7rem;
            font-weight: 700;
            border: 1px solid var(--border);
            color: var(--text-muted);
            background: var(--surface);
        }

        .badge-pill .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
        }

        /* ── Import order box ──────────────────────────────────────── */
        .import-order {
            background: var(--sidebar-bg);
            border-radius: .5rem;
            overflow: hidden;
            margin-bottom: 1.5rem;
        }

        .import-order pre {
            color: rgba(255, 255, 255, .85);
        }

        .import-order .kw {
            color: #a78bfa;
        }

        .import-order .str {
            color: #6ee7b7;
        }

        .import-order .cm {
            color: rgba(255, 255, 255, .35);
        }

        /* ── Live sem-label demo ───────────────────────────────────── */
        .sem-label {
            display: inline-flex;
            align-items: center;
            gap: .35em;
            padding: .35em .75em;
            font-size: .75rem;
            font-weight: 700;
            line-height: 1;
            letter-spacing: .02em;
            white-space: nowrap;
            border: 1px solid transparent;
            border-radius: .28rem;
            background-color: #e8e8e8;
            color: rgba(0, 0, 0, .87);
            border-color: rgba(34, 36, 38, .15);
            font-family: var(--font-body);
            cursor: default;
        }

        /* sem-label colors */
        .sem-label-red {
            background: var(--sem-red);
            color: #fff;
            border-color: #b21e1e;
        }

        .sem-label-orange {
            background: var(--sem-orange);
            color: #fff;
            border-color: #c05e0a;
        }

        .sem-label-yellow {
            background: var(--sem-yellow);
            color: rgba(0, 0, 0, .87);
            border-color: #c89500;
        }

        .sem-label-olive {
            background: var(--sem-olive);
            color: rgba(0, 0, 0, .87);
            border-color: #8fa510;
        }

        .sem-label-green {
            background: var(--sem-green);
            color: #fff;
            border-color: #198636;
        }

        .sem-label-teal {
            background: var(--sem-teal);
            color: #fff;
            border-color: #008c84;
        }

        .sem-label-blue {
            background: var(--sem-blue);
            color: #fff;
            border-color: #1a6da6;
        }

        .sem-label-violet {
            background: var(--sem-violet);
            color: #fff;
            border-color: #4d28a3;
        }

        .sem-label-purple {
            background: var(--sem-purple);
            color: #fff;
            border-color: #8228a3;
        }

        .sem-label-pink {
            background: var(--sem-pink);
            color: #fff;
            border-color: #b32c7a;
        }

        .sem-label-brown {
            background: var(--sem-brown);
            color: #fff;
            border-color: #835230;
        }

        .sem-label-grey {
            background: var(--sem-grey);
            color: #fff;
            border-color: #5c5c5c;
        }

        .sem-label-black {
            background: var(--sem-black);
            color: #fff;
            border-color: #000;
        }

        .sem-label-red--basic {
            background: transparent;
            color: var(--sem-red);
            border-color: var(--sem-red);
        }

        .sem-label-blue--basic {
            background: transparent;
            color: var(--sem-blue);
            border-color: var(--sem-blue);
        }

        .sem-label-teal--basic {
            background: transparent;
            color: var(--sem-teal);
            border-color: var(--sem-teal);
        }

        .sem-label-purple--basic {
            background: transparent;
            color: var(--sem-purple);
            border-color: var(--sem-purple);
        }

        /* ── sem-segment demo ──────────────────────────────────────── */
        .sem-segment {
            position: relative;
            background: var(--surface);
            padding: 1rem 1.25rem;
            border: 1px solid var(--border);
            border-radius: .28rem;
            box-shadow: var(--shadow);
            font-size: .85rem;
            color: var(--text);
            line-height: 1.6;
        }

        .sem-segment--raised {
            box-shadow: var(--shadow-lg);
        }

        .sem-segment-red {
            border-top: 2px solid var(--sem-red);
        }

        .sem-segment-blue {
            border-top: 2px solid var(--sem-blue);
        }

        .sem-segment-teal {
            border-top: 2px solid var(--sem-teal);
        }

        .sem-segment-green {
            border-top: 2px solid var(--sem-green);
        }

        .sem-segment-violet {
            border-top: 2px solid var(--sem-violet);
        }

        .sem-segment-orange {
            border-top: 2px solid var(--sem-orange);
        }

        .sem-segment-purple {
            border-top: 2px solid var(--sem-purple);
        }

        .sem-segment-blue--inverted {
            background: var(--sem-blue);
            color: #fff;
            border-color: #1a6da6;
        }

        .sem-segment-teal--inverted {
            background: var(--sem-teal);
            color: #fff;
            border-color: #008c84;
        }

        .sem-segment-violet--inverted {
            background: var(--sem-violet);
            color: #fff;
            border-color: #4d28a3;
        }

        /* ── sem-divider demo ──────────────────────────────────────── */
        .sem-divider {
            display: flex;
            align-items: center;
            gap: .75rem;
            margin: 1rem 0;
            font-size: .7rem;
            font-weight: 900;
            letter-spacing: .08em;
            text-transform: uppercase;
            color: var(--text-muted);
        }

        .sem-divider::before,
        .sem-divider::after {
            content: "";
            flex: 1;
            border-top: 1px solid var(--border);
        }

        .sem-divider--hidden {
            border-top: 1px solid var(--border);
            justify-content: center;
        }

        .sem-divider--hidden::before,
        .sem-divider--hidden::after {
            display: none;
        }

        /* ── sem-statistic demo ────────────────────────────────────── */
        .sem-statistic {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            gap: .15rem;
            margin: 0 1.5rem;
        }

        .sem-statistic__value {
            font-size: 3rem;
            font-weight: 900;
            line-height: 1;
            color: var(--text);
            font-family: var(--font-display);
        }

        .sem-statistic__label {
            font-size: .65rem;
            font-weight: 700;
            letter-spacing: .08em;
            text-transform: uppercase;
            color: var(--text-muted);
        }

        .sem-statistic--mini .sem-statistic__value {
            font-size: 1rem;
        }

        .sem-statistic--small .sem-statistic__value {
            font-size: 1.75rem;
        }

        .sem-statistic--large .sem-statistic__value {
            font-size: 4rem;
        }

        .sem-statistic-blue .sem-statistic__value {
            color: var(--sem-blue);
        }

        .sem-statistic-green .sem-statistic__value {
            color: var(--sem-green);
        }

        .sem-statistic-red .sem-statistic__value {
            color: var(--sem-red);
        }

        .sem-statistic-violet .sem-statistic__value {
            color: var(--sem-violet);
        }

        /* ── Statistic divider ─────────────────────────────────────── */
        .stat-row {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            padding: 1.5rem 0;
        }

        .stat-divider {
            width: 1px;
            height: 60px;
            background: var(--border);
        }

        /* ── Utility ───────────────────────────────────────────────── */
        .w-full {
            width: 100%;
        }

        .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }

        .mt-1 {
            margin-top: .5rem;
        }

        .note {
            font-size: .8rem;
            color: var(--text-muted);
            background: var(--code-bg);
            border-left: 3px solid var(--sem-blue);
            border-radius: 0 .28rem .28rem 0;
            padding: .75rem 1rem;
            margin-bottom: 1.5rem;
        }

        /* ── Scrollbar styling ─────────────────────────────────────── */
        .sidebar::-webkit-scrollbar {
            width: 4px;
        }

        .sidebar::-webkit-scrollbar-track {
            background: transparent;
        }

        .sidebar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, .15);
            border-radius: 2px;
        }

        /* ── Responsive ────────────────────────────────────────────── */
        @media (max-width: 768px) {
            .sidebar {
                width: 200px;
            }

            .main {
                margin-left: 200px;
                padding: 2rem 1.5rem;
            }

            .hero__title {
                font-size: 2rem;
            }

            .grid-2 {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>

<body>

    <!-- ══════════════════════════════════════════════════════════════
     SIDEBAR
══════════════════════════════════════════════════════════════ -->
    <aside class="sidebar">
        <div class="sidebar-brand">
            <h1>Semantic × BS</h1>
            <p>Component Guide v1.0</p>
        </div>

        <nav class="sidebar-nav">
            <div class="sidebar-section">Getting started</div>
            <a href="#intro" class="sidebar-link active">Introduction</a>
            <a href="#install" class="sidebar-link">Import Order</a>
            <a href="#colors" class="sidebar-link">Color Palette</a>

            <div class="sidebar-section">Components</div>
            <a href="#label" class="sidebar-link">Label</a>
            <a href="#segment" class="sidebar-link">Segment</a>
            <a href="#divider" class="sidebar-link">Divider</a>
            <a href="#statistic" class="sidebar-link">Statistic</a>

            <div class="sidebar-section">Theming</div>
            <a href="#darkmode" class="sidebar-link">Dark Mode</a>
            <a href="#vars" class="sidebar-link">CSS Variables</a>
        </nav>

        <div class="sidebar-footer">
            <span>BS 5.3 × SUI</span>
            <button class="theme-btn" onclick="toggleTheme()">☀ / ☾</button>
        </div>
    </aside>

    <!-- ══════════════════════════════════════════════════════════════
     MAIN
══════════════════════════════════════════════════════════════ -->
    <main class="main">

        <!-- Hero ─────────────────────────────────────────────────────── -->
        <div class="hero" id="intro">
            <div class="hero__eyebrow"><span></span> Custom Component Library</div>
            <h1 class="hero__title">Bootstrap 5.3<br><em>× Semantic UI</em></h1>
            <p class="hero__desc">
                Four hand-crafted components — Label, Segment, Divider, Statistic —
                ported from Semantic UI's design language onto Bootstrap's SCSS
                architecture. Every color variant is generated by a single
                <code>&commat;each</code> loop, so adding a new color is a one-liner.
            </p>
            <div class="badge-row">
                <span class="badge-pill"><span class="dot" style="background:var(--sem-blue)"></span> Bootstrap
                    5.3</span>
                <span class="badge-pill"><span class="dot" style="background:var(--sem-teal)"></span> SCSS /
                    DRY</span>
                <span class="badge-pill"><span class="dot" style="background:var(--sem-violet)"></span> 13
                    Colors</span>
                <span class="badge-pill"><span class="dot" style="background:var(--sem-green)"></span> Dark
                    Mode</span>
                <span class="badge-pill"><span class="dot" style="background:var(--sem-orange)"></span> WCAG
                    AA</span>
            </div>
        </div>

        <!-- Install ─────────────────────────────────────────────────── -->
        <section class="doc-section" id="install">
            <div class="doc-section__tag">Getting started</div>
            <h2 class="doc-section__title">Import Order</h2>
            <p class="doc-section__desc">
                SCSS must be imported in this exact order. Bootstrap's
                <code>functions</code> partial must load first so that
                <code>tint-color()</code> and <code>shade-color()</code>
                are available when <code>_variables.scss</code> is parsed.
            </p>

            <div class="import-order">
                <pre><span class="cm">// 1. Bootstrap color/math functions (required first)</span>
<span class="kw">@import</span> <span class="str">"bootstrap/scss/functions"</span>;

<span class="cm">// 2. Your custom variable overrides</span>
<span class="kw">@import</span> <span class="str">"variables"</span>;          <span class="cm">// ← _variables.scss</span>

<span class="cm">// 3. Bootstrap internals</span>
<span class="kw">@import</span> <span class="str">"bootstrap/scss/variables"</span>;
<span class="kw">@import</span> <span class="str">"bootstrap/scss/variables-dark"</span>;
<span class="kw">@import</span> <span class="str">"bootstrap/scss/maps"</span>;
<span class="kw">@import</span> <span class="str">"bootstrap/scss/mixins"</span>;
<span class="kw">@import</span> <span class="str">"bootstrap/scss/utilities"</span>;

<span class="cm">// 4. Full Bootstrap component output</span>
<span class="kw">@import</span> <span class="str">"bootstrap/scss/bootstrap"</span>;

<span class="cm">// 5. Custom Semantic components (after Bootstrap — uses its mixins)</span>
<span class="kw">@import</span> <span class="str">"custom-semantic"</span>;    <span class="cm">// ← _custom-semantic.scss</span></pre>
            </div>

            <p class="note">
                💡 If you use <strong>Vite</strong> or <strong>webpack</strong>, load the Lato font before
                your stylesheet:
                <code>&lt;link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&amp;display=swap"
                    rel="stylesheet"&gt;</code>
            </p>
        </section>

        <!-- Colors ──────────────────────────────────────────────────── -->
        <section class="doc-section" id="colors">
            <div class="doc-section__tag">Reference</div>
            <h2 class="doc-section__title">Color Palette</h2>
            <p class="doc-section__desc">
                All 13 Semantic UI named colors. Each one drives utility generation
                in Bootstrap and variant classes in every custom component below.
            </p>

            <div class="color-grid">
                <!-- swatches generated by JS below -->
            </div>
        </section>

        <!-- ═══════════════ LABEL ═══════════════════════════════════════ -->
        <section class="doc-section" id="label">
            <div class="doc-section__tag">Component</div>
            <h2 class="doc-section__title">Label</h2>
            <p class="doc-section__desc">
                Compact colored badges for metadata, status, tags, and categories.
                Mirrors Semantic UI's <code>.ui.label</code>. Every named color
                produces a filled and a <em>basic</em> (outline) variant.
            </p>

            <!-- Base -->
            <div class="doc-sub">Base &amp; default</div>
            <div class="demo-card">
                <div class="demo-preview">
                    <span class="sem-label">Default</span>
                    <span class="sem-label sem-label-blue">Blue</span>
                    <span class="sem-label sem-label-teal">Teal</span>
                    <span class="sem-label sem-label-green">Green</span>
                    <span class="sem-label sem-label-red">Red</span>
                    <span class="sem-label sem-label-orange">Orange</span>
                    <span class="sem-label sem-label-yellow">Yellow</span>
                    <span class="sem-label sem-label-olive">Olive</span>
                </div>
                <div class="demo-code">
                    <div class="demo-code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre>&lt;<span class="kw">span</span> <span class="at">class</span>=<span class="str">"sem-label"</span>&gt;Default&lt;/<span class="kw">span</span>&gt;
&lt;<span class="kw">span</span> <span class="at">class</span>=<span class="str">"sem-label sem-label-blue"</span>&gt;Blue&lt;/<span class="kw">span</span>&gt;
&lt;<span class="kw">span</span> <span class="at">class</span>=<span class="str">"sem-label sem-label-teal"</span>&gt;Teal&lt;/<span class="kw">span</span>&gt;
&lt;<span class="kw">span</span> <span class="at">class</span>=<span class="str">"sem-label sem-label-green"</span>&gt;Green&lt;/<span class="kw">span</span>&gt;
&lt;<span class="kw">span</span> <span class="at">class</span>=<span class="str">"sem-label sem-label-red"</span>&gt;Red&lt;/<span class="kw">span</span>&gt;</pre>
                </div>
            </div>

            <!-- All colors -->
            <div class="doc-sub">All 13 colors</div>
            <div class="demo-card">
                <div class="demo-preview">
                    <span class="sem-label sem-label-red">Red</span>
                    <span class="sem-label sem-label-orange">Orange</span>
                    <span class="sem-label sem-label-yellow">Yellow</span>
                    <span class="sem-label sem-label-olive">Olive</span>
                    <span class="sem-label sem-label-green">Green</span>
                    <span class="sem-label sem-label-teal">Teal</span>
                    <span class="sem-label sem-label-blue">Blue</span>
                    <span class="sem-label sem-label-violet">Violet</span>
                    <span class="sem-label sem-label-purple">Purple</span>
                    <span class="sem-label sem-label-pink">Pink</span>
                    <span class="sem-label sem-label-brown">Brown</span>
                    <span class="sem-label sem-label-grey">Grey</span>
                    <span class="sem-label sem-label-black">Black</span>
                </div>
                <div class="demo-code">
                    <div class="demo-code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre><span class="cm">&lt;!-- Pattern: sem-label-{colorname} --&gt;</span>
&lt;<span class="kw">span</span> <span class="at">class</span>=<span class="str">"sem-label sem-label-violet"</span>&gt;Violet&lt;/<span class="kw">span</span>&gt;
&lt;<span class="kw">span</span> <span class="at">class</span>=<span class="str">"sem-label sem-label-purple"</span>&gt;Purple&lt;/<span class="kw">span</span>&gt;
&lt;<span class="kw">span</span> <span class="at">class</span>=<span class="str">"sem-label sem-label-pink"</span>&gt;Pink&lt;/<span class="kw">span</span>&gt;
&lt;<span class="kw">span</span> <span class="at">class</span>=<span class="str">"sem-label sem-label-brown"</span>&gt;Brown&lt;/<span class="kw">span</span>&gt;</pre>
                </div>
            </div>

            <!-- Basic / outline -->
            <div class="doc-sub">Basic (outline) variant</div>
            <div class="demo-card">
                <div class="demo-preview">
                    <span class="sem-label sem-label-red--basic">Red</span>
                    <span class="sem-label sem-label-blue--basic">Blue</span>
                    <span class="sem-label sem-label-teal--basic">Teal</span>
                    <span class="sem-label sem-label-purple--basic">Purple</span>
                </div>
                <div class="demo-code">
                    <div class="demo-code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre><span class="cm">&lt;!-- Pattern: sem-label-{colorname}--basic --&gt;</span>
&lt;<span class="kw">span</span> <span class="at">class</span>=<span class="str">"sem-label sem-label-red--basic"</span>&gt;Red&lt;/<span class="kw">span</span>&gt;
&lt;<span class="kw">span</span> <span class="at">class</span>=<span class="str">"sem-label sem-label-blue--basic"</span>&gt;Blue&lt;/<span class="kw">span</span>&gt;
&lt;<span class="kw">span</span> <span class="at">class</span>=<span class="str">"sem-label sem-label-teal--basic"</span>&gt;Teal&lt;/<span class="kw">span</span>&gt;</pre>
                </div>
            </div>

            <!-- Props table -->
            <div class="doc-sub">Modifier classes</div>
            <div class="demo-card">
                <table class="prop-table">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>sem-label</code></td>
                            <td>Base label — neutral grey background</td>
                            <td class="mod">Required on all labels</td>
                        </tr>
                        <tr>
                            <td><code>sem-label-{color}</code></td>
                            <td>Filled background using named Semantic color</td>
                            <td class="mod">sem-label-teal</td>
                        </tr>
                        <tr>
                            <td><code>sem-label-{color}--basic</code></td>
                            <td>Outline/ghost version of the color variant</td>
                            <td class="mod">sem-label-blue--basic</td>
                        </tr>
                        <tr>
                            <td><code>sem-label--tag</code></td>
                            <td>Visual "tag" nub on the left edge</td>
                            <td class="mod">Optional modifier</td>
                        </tr>
                        <tr>
                            <td><code>sem-label--ribbon</code></td>
                            <td>Ribbon-style positioned label (use with <code>position: relative</code> parent)</td>
                            <td class="mod">Optional modifier</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- ═══════════════ SEGMENT ══════════════════════════════════════ -->
        <section class="doc-section" id="segment">
            <div class="doc-section__tag">Component</div>
            <h2 class="doc-section__title">Segment</h2>
            <p class="doc-section__desc">
                A bordered, shadowed container for grouping related content.
                Equivalent to Semantic UI's <code>.ui.segment</code>. Color variants
                apply a 2 px top accent border; inverted variants flip to a full
                colored background.
            </p>

            <!-- Base -->
            <div class="doc-sub">Base segment</div>
            <div class="demo-card">
                <div class="demo-preview demo-preview--block">
                    <div class="sem-segment w-full">
                        This is a basic segment. It provides a clean, subtle container
                        for any content block.
                    </div>
                </div>
                <div class="demo-code">
                    <div class="demo-code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre>&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-segment"</span>&gt;
  Content goes here.
&lt;/<span class="kw">div</span>&gt;</pre>
                </div>
            </div>

            <!-- Color accents -->
            <div class="doc-sub">Top-accent color variants</div>
            <div class="demo-card">
                <div class="demo-preview demo-preview--block" style="gap:1rem;">
                    <div class="sem-segment sem-segment-blue w-full">Blue — <code>sem-segment-blue</code></div>
                    <div class="sem-segment sem-segment-teal w-full">Teal — <code>sem-segment-teal</code></div>
                    <div class="sem-segment sem-segment-red w-full">Red — <code>sem-segment-red</code></div>
                    <div class="sem-segment sem-segment-violet w-full">Violet — <code>sem-segment-violet</code></div>
                    <div class="sem-segment sem-segment-orange w-full">Orange — <code>sem-segment-orange</code></div>
                </div>
                <div class="demo-code">
                    <div class="demo-code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre><span class="cm">&lt;!-- Pattern: sem-segment-{colorname} --&gt;</span>
&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-segment sem-segment-blue"</span>&gt;Blue accent&lt;/<span class="kw">div</span>&gt;
&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-segment sem-segment-teal"</span>&gt;Teal accent&lt;/<span class="kw">div</span>&gt;
&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-segment sem-segment-red"</span>&gt;Red accent&lt;/<span class="kw">div</span>&gt;</pre>
                </div>
            </div>

            <!-- Inverted -->
            <div class="doc-sub">Inverted (full background)</div>
            <div class="demo-card">
                <div class="demo-preview demo-preview--block" style="gap:1rem;">
                    <div class="sem-segment sem-segment-blue--inverted w-full">Blue inverted — full color background
                    </div>
                    <div class="sem-segment sem-segment-teal--inverted w-full">Teal inverted — full color background
                    </div>
                    <div class="sem-segment sem-segment-violet--inverted w-full">Violet inverted — full color
                        background</div>
                </div>
                <div class="demo-code">
                    <div class="demo-code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre><span class="cm">&lt;!-- Pattern: sem-segment-{colorname}--inverted --&gt;</span>
&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-segment sem-segment-blue--inverted"</span>&gt;
  Inverted blue segment
&lt;/<span class="kw">div</span>&gt;</pre>
                </div>
            </div>

            <!-- Raised -->
            <div class="doc-sub">Raised &amp; elevated</div>
            <div class="demo-card">
                <div class="demo-preview demo-preview--block" style="gap:1rem; padding: 2.5rem 2rem;">
                    <div class="sem-segment sem-segment--raised w-full">
                        Raised segment — <code>sem-segment--raised</code> — adds a stronger shadow.
                    </div>
                </div>
                <div class="demo-code">
                    <div class="demo-code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre>&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-segment sem-segment--raised"</span>&gt;
  Raised content
&lt;/<span class="kw">div</span>&gt;</pre>
                </div>
            </div>

            <!-- Props table -->
            <div class="doc-sub">Modifier classes</div>
            <div class="demo-card">
                <table class="prop-table">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Effect</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>sem-segment</code></td>
                            <td>Base — white bg, subtle shadow + border</td>
                        </tr>
                        <tr>
                            <td><code>sem-segment-{color}</code></td>
                            <td>2 px solid top-accent border</td>
                        </tr>
                        <tr>
                            <td><code>sem-segment-{color}--inverted</code></td>
                            <td>Full colored background with contrast text</td>
                        </tr>
                        <tr>
                            <td><code>sem-segment--raised</code></td>
                            <td>Larger drop shadow (elevation effect)</td>
                        </tr>
                        <tr>
                            <td><code>sem-segment--stacked</code></td>
                            <td>Pseudo-element pages behind the card</td>
                        </tr>
                        <tr>
                            <td><code>sem-segment--piled</code></td>
                            <td>Rotated offset pseudo-elements (messy pile)</td>
                        </tr>
                        <tr>
                            <td><code>sem-segment--compact</code></td>
                            <td><code>display: inline-block</code> with tighter padding</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- ═══════════════ DIVIDER ══════════════════════════════════════ -->
        <section class="doc-section" id="divider">
            <div class="doc-section__tag">Component</div>
            <h2 class="doc-section__title">Divider</h2>
            <p class="doc-section__desc">
                A horizontal rule with optional centered label. Useful for
                separating groups of content or form fields — mimics Semantic UI's
                <code>.ui.divider</code> and <code>.ui.horizontal.divider</code>.
            </p>

            <!-- Base -->
            <div class="doc-sub">Basic dividers</div>
            <div class="demo-card">
                <div class="demo-preview demo-preview--block" style="gap:.5rem;">
                    <div class="sem-divider">or</div>
                    <div class="sem-divider">Section Break</div>
                    <div class="sem-divider"></div>
                </div>
                <div class="demo-code">
                    <div class="demo-code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre><span class="cm">&lt;!-- With label --&gt;</span>
&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-divider"</span>&gt;or&lt;/<span class="kw">div</span>&gt;

<span class="cm">&lt;!-- Without label (plain line) --&gt;</span>
&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-divider"</span>&gt;&lt;/<span class="kw">div</span>&gt;</pre>
                </div>
            </div>

            <!-- In a form context -->
            <div class="doc-sub">In a login form</div>
            <div class="demo-card">
                <div class="demo-preview demo-preview--block" style="max-width:360px; margin: 0 auto;">
                    <button
                        style="width:100%;padding:.6rem;background:var(--sem-blue);color:#fff;border:none;border-radius:.28rem;font-family:var(--font-body);font-size:.875rem;font-weight:700;cursor:pointer;">
                        Continue with Google
                    </button>
                    <div class="sem-divider mt-1" style="margin-top:1rem;">or sign in with email</div>
                    <input type="email" placeholder="you@example.com"
                        style="width:100%;padding:.55rem .75rem;border:1px solid var(--border);border-radius:.28rem;font-family:var(--font-body);font-size:.875rem;background:var(--surface);color:var(--text);margin-top:.5rem;">
                </div>
                <div class="demo-code">
                    <div class="demo-code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre>&lt;<span class="kw">button</span>&gt;Continue with Google&lt;/<span class="kw">button</span>&gt;

&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-divider"</span>&gt;or sign in with email&lt;/<span class="kw">div</span>&gt;

&lt;<span class="kw">input</span> <span class="at">type</span>=<span class="str">"email"</span> <span class="at">placeholder</span>=<span class="str">"you@example.com"</span>&gt;</pre>
                </div>
            </div>

            <!-- Props -->
            <div class="doc-sub">Modifier classes</div>
            <div class="demo-card">
                <table class="prop-table">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Effect</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>sem-divider</code></td>
                            <td>Horizontal divider — full width with centered text label</td>
                        </tr>
                        <tr>
                            <td><code>sem-divider--vertical</code></td>
                            <td>Vertical divider (flex column, use inside a flex row)</td>
                        </tr>
                        <tr>
                            <td><code>sem-divider--hidden</code></td>
                            <td>Invisible spacer — just the line, no label rendered</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- ═══════════════ STATISTIC ════════════════════════════════════ -->
        <section class="doc-section" id="statistic">
            <div class="doc-section__tag">Component</div>
            <h2 class="doc-section__title">Statistic</h2>
            <p class="doc-section__desc">
                Big-number data callouts, ideal for dashboards and KPI summaries.
                Mirrors Semantic UI's <code>.ui.statistic</code>. Stack multiple
                statistics in a row separated by the <code>.stat-divider</code>
                helper.
            </p>

            <!-- Base -->
            <div class="doc-sub">Basic statistic</div>
            <div class="demo-card">
                <div class="demo-preview">
                    <div class="sem-statistic">
                        <div class="sem-statistic__value">2,048</div>
                        <div class="sem-statistic__label">Downloads</div>
                    </div>
                </div>
                <div class="demo-code">
                    <div class="demo-code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre>&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic"</span>&gt;
  &lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic__value"</span>&gt;2,048&lt;/<span class="kw">div</span>&gt;
  &lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic__label"</span>&gt;Downloads&lt;/<span class="kw">div</span>&gt;
&lt;/<span class="kw">div</span>&gt;</pre>
                </div>
            </div>

            <!-- Color variants -->
            <div class="doc-sub">Color variants</div>
            <div class="demo-card">
                <div class="demo-preview">
                    <div class="sem-statistic sem-statistic-blue">
                        <div class="sem-statistic__value">14.2k</div>
                        <div class="sem-statistic__label">Visitors</div>
                    </div>
                    <div class="sem-statistic sem-statistic-green">
                        <div class="sem-statistic__value">98%</div>
                        <div class="sem-statistic__label">Uptime</div>
                    </div>
                    <div class="sem-statistic sem-statistic-red">
                        <div class="sem-statistic__value">3</div>
                        <div class="sem-statistic__label">Errors</div>
                    </div>
                    <div class="sem-statistic sem-statistic-violet">
                        <div class="sem-statistic__value">₊47</div>
                        <div class="sem-statistic__label">New Users</div>
                    </div>
                </div>
                <div class="demo-code">
                    <div class="demo-code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre><span class="cm">&lt;!-- Pattern: sem-statistic-{colorname} --&gt;</span>
&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic sem-statistic-blue"</span>&gt;
  &lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic__value"</span>&gt;14.2k&lt;/<span class="kw">div</span>&gt;
  &lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic__label"</span>&gt;Visitors&lt;/<span class="kw">div</span>&gt;
&lt;/<span class="kw">div</span>&gt;

&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic sem-statistic-green"</span>&gt;
  &lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic__value"</span>&gt;98%&lt;/<span class="kw">div</span>&gt;
  &lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic__label"</span>&gt;Uptime&lt;/<span class="kw">div</span>&gt;
&lt;/<span class="kw">div</span>&gt;</pre>
                </div>
            </div>

            <!-- Sizes -->
            <div class="doc-sub">Size modifiers</div>
            <div class="demo-card">
                <div class="demo-preview" style="align-items:flex-end; gap: 2rem;">
                    <div class="sem-statistic sem-statistic--mini">
                        <div class="sem-statistic__value">42</div>
                        <div class="sem-statistic__label">mini</div>
                    </div>
                    <div class="sem-statistic sem-statistic--small">
                        <div class="sem-statistic__value">42</div>
                        <div class="sem-statistic__label">small</div>
                    </div>
                    <div class="sem-statistic">
                        <div class="sem-statistic__value">42</div>
                        <div class="sem-statistic__label">default</div>
                    </div>
                    <div class="sem-statistic sem-statistic--large">
                        <div class="sem-statistic__value">42</div>
                        <div class="sem-statistic__label">large</div>
                    </div>
                </div>
                <div class="demo-code">
                    <div class="demo-code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre>&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic sem-statistic--mini"</span>&gt;…&lt;/<span class="kw">div</span>&gt;
&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic sem-statistic--small"</span>&gt;…&lt;/<span class="kw">div</span>&gt;
&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic"</span>&gt;…&lt;/<span class="kw">div</span>&gt;             <span class="cm">&lt;!-- default --&gt;</span>
&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic sem-statistic--large"</span>&gt;…&lt;/<span class="kw">div</span>&gt;</pre>
                </div>
            </div>

            <!-- Row with divider -->
            <div class="doc-sub">Dashboard row with dividers</div>
            <div class="demo-card">
                <div class="demo-preview">
                    <div class="stat-row">
                        <div class="sem-statistic sem-statistic-blue">
                            <div class="sem-statistic__value">1.2M</div>
                            <div class="sem-statistic__label">Page Views</div>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="sem-statistic sem-statistic-green">
                            <div class="sem-statistic__value">99.9%</div>
                            <div class="sem-statistic__label">Availability</div>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="sem-statistic sem-statistic-red">
                            <div class="sem-statistic__value">0</div>
                            <div class="sem-statistic__label">Critical Bugs</div>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="sem-statistic sem-statistic-violet">
                            <div class="sem-statistic__value">↑32%</div>
                            <div class="sem-statistic__label">Growth</div>
                        </div>
                    </div>
                </div>
                <div class="demo-code">
                    <div class="demo-code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre>&lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"stat-row"</span>&gt;
  &lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic sem-statistic-blue"</span>&gt;
    &lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic__value"</span>&gt;1.2M&lt;/<span class="kw">div</span>&gt;
    &lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic__label"</span>&gt;Page Views&lt;/<span class="kw">div</span>&gt;
  &lt;/<span class="kw">div</span>&gt;

  &lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"stat-divider"</span>&gt;&lt;/<span class="kw">div</span>&gt;  <span class="cm">&lt;!-- vertical separator --&gt;</span>

  &lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic sem-statistic-green"</span>&gt;
    &lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic__value"</span>&gt;99.9%&lt;/<span class="kw">div</span>&gt;
    &lt;<span class="kw">div</span> <span class="at">class</span>=<span class="str">"sem-statistic__label"</span>&gt;Availability&lt;/<span class="kw">div</span>&gt;
  &lt;/<span class="kw">div</span>&gt;
&lt;/<span class="kw">div</span>&gt;</pre>
                </div>
            </div>
        </section>

        <!-- ═══════════════ DARK MODE ════════════════════════════════════ -->
        <section class="doc-section" id="darkmode">
            <div class="doc-section__tag">Theming</div>
            <h2 class="doc-section__title">Dark Mode</h2>
            <p class="doc-section__desc">
                Add <code>data-bs-theme="dark"</code> to any ancestor element — or
                the <code>&lt;html&gt;</code> tag — to switch all components to their
                dark variants. Colors shift to luminous tints (e.g. <code>#ff695e</code>
                instead of <code>#db2828</code>) with reduced-opacity backgrounds so
                they feel vibrant, not glaring.
            </p>

            <div class="demo-card">
                <div class="demo-preview demo-preview--block" style="gap:1rem;" data-bs-theme="dark"
                    id="dark-preview">
                    <div style="display:flex;flex-wrap:wrap;gap:.5rem;">
                        <span class="sem-label sem-label-red">Red</span>
                        <span class="sem-label sem-label-blue">Blue</span>
                        <span class="sem-label sem-label-teal">Teal</span>
                        <span class="sem-label sem-label-violet">Violet</span>
                        <span class="sem-label sem-label-green">Green</span>
                        <span class="sem-label sem-label-pink">Pink</span>
                    </div>
                    <div class="sem-segment sem-segment-teal w-full"
                        style="background:#1e1e2e;color:rgba(255,255,255,.87);border-color:rgba(255,255,255,.08);">
                        Dark segment with teal accent
                    </div>
                    <div class="sem-divider" style="color:rgba(255,255,255,.4)">Dark divider</div>
                    <div style="display:flex;gap:2rem;align-items:center;">
                        <div class="sem-statistic sem-statistic-blue">
                            <div class="sem-statistic__value">42k</div>
                            <div class="sem-statistic__label">Stars</div>
                        </div>
                        <div class="sem-statistic sem-statistic-green">
                            <div class="sem-statistic__value">100%</div>
                            <div class="sem-statistic__label">Coverage</div>
                        </div>
                    </div>
                </div>
                <div class="demo-code">
                    <div class="demo-code-header">
                        <span>HTML — activate dark mode</span>
                        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre><span class="cm">&lt;!-- On root element --&gt;</span>
&lt;<span class="kw">html</span> <span class="at">data-bs-theme</span>=<span class="str">"dark"</span>&gt;

<span class="cm">&lt;!-- Or scoped to a single container --&gt;</span>
&lt;<span class="kw">div</span> <span class="at">data-bs-theme</span>=<span class="str">"dark"</span>&gt;
  &lt;<span class="kw">span</span> <span class="at">class</span>=<span class="str">"sem-label sem-label-teal"</span>&gt;Dark label&lt;/<span class="kw">span</span>&gt;
&lt;/<span class="kw">div</span>&gt;</pre>
                </div>
            </div>
        </section>

        <!-- ═══════════════ CSS VARIABLES ═══════════════════════════════ -->
        <section class="doc-section" id="vars">
            <div class="doc-section__tag">Reference</div>
            <h2 class="doc-section__title">CSS Variables</h2>
            <p class="doc-section__desc">
                All Semantic colors are exposed as CSS custom properties on
                <code>:root</code>. You can use them anywhere in plain CSS without
                touching SCSS.
            </p>
            <div class="demo-card">
                <div class="demo-code">
                    <div class="demo-code-header"><span>CSS</span></div>
                    <pre><span class="at">:root</span> {
  <span class="kw">--sem-red</span>:    <span class="mo">#db2828</span>;
  <span class="kw">--sem-orange</span>: <span class="mo">#f2711c</span>;
  <span class="kw">--sem-yellow</span>: <span class="mo">#fbbd08</span>;
  <span class="kw">--sem-olive</span>:  <span class="mo">#b5cc18</span>;
  <span class="kw">--sem-green</span>:  <span class="mo">#21ba45</span>;
  <span class="kw">--sem-teal</span>:   <span class="mo">#00b5ad</span>;
  <span class="kw">--sem-blue</span>:   <span class="mo">#2185d0</span>;
  <span class="kw">--sem-violet</span>: <span class="mo">#6435c9</span>;
  <span class="kw">--sem-purple</span>: <span class="mo">#a333c8</span>;
  <span class="kw">--sem-pink</span>:   <span class="mo">#e03997</span>;
  <span class="kw">--sem-brown</span>:  <span class="mo">#a5673f</span>;
  <span class="kw">--sem-grey</span>:   <span class="mo">#767676</span>;
  <span class="kw">--sem-black</span>:  <span class="mo">#1b1c1d</span>;
}

<span class="cm">/* Usage example */</span>
<span class="at">.my-element</span> {
  <span class="kw">color</span>: <span class="mo">var(--sem-teal)</span>;
  <span class="kw">border-color</span>: <span class="mo">var(--sem-blue)</span>;
}</pre>
                </div>
            </div>
        </section>

    </main>

    <!-- ══════════════════════════════════════════════════════════════
     JS — color swatches, copy button, theme toggle, active link
══════════════════════════════════════════════════════════════ -->
    <script>
        // Color palette
        const colors = [{
                name: "red",
                hex: "#db2828"
            },
            {
                name: "orange",
                hex: "#f2711c"
            },
            {
                name: "yellow",
                hex: "#fbbd08"
            },
            {
                name: "olive",
                hex: "#b5cc18"
            },
            {
                name: "green",
                hex: "#21ba45"
            },
            {
                name: "teal",
                hex: "#00b5ad"
            },
            {
                name: "blue",
                hex: "#2185d0"
            },
            {
                name: "violet",
                hex: "#6435c9"
            },
            {
                name: "purple",
                hex: "#a333c8"
            },
            {
                name: "pink",
                hex: "#e03997"
            },
            {
                name: "brown",
                hex: "#a5673f"
            },
            {
                name: "grey",
                hex: "#767676"
            },
            {
                name: "black",
                hex: "#1b1c1d"
            },
        ];

        // Build swatches
        const grid = document.querySelector(".color-grid");
        colors.forEach(c => {
            grid.insertAdjacentHTML("beforeend", `
      <div class="color-swatch">
        <div class="color-swatch__block" style="background:${c.hex}"></div>
        <div class="color-swatch__info">
          <div class="color-swatch__name">${c.name}</div>
          <div class="color-swatch__hex">${c.hex}</div>
        </div>
      </div>
    `);
        });

        // Copy button
        function copyCode(btn) {
            const pre = btn.closest(".demo-code").querySelector("pre");
            const text = pre.innerText;
            navigator.clipboard.writeText(text).then(() => {
                btn.textContent = "Copied!";
                btn.classList.add("copied");
                setTimeout(() => {
                    btn.textContent = "Copy";
                    btn.classList.remove("copied");
                }, 1800);
            });
        }

        // Theme toggle
        function toggleTheme() {
            const html = document.documentElement;
            html.setAttribute("data-bs-theme",
                html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark"
            );
        }

        // Active sidebar link on scroll
        const sections = document.querySelectorAll(".doc-section, .hero");
        const links = document.querySelectorAll(".sidebar-link");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    links.forEach(l => l.classList.remove("active"));
                    const id = e.target.id;
                    const active = document.querySelector(`.sidebar-link[href="#${id}"]`);
                    if (active) active.classList.add("active");
                }
            });
        }, {
            rootMargin: "-30% 0px -60% 0px"
        });

        sections.forEach(s => observer.observe(s));
    </script>

</body>

</html>
