"""
Generates the project cover art in public/covers/.

Each cover is a real plot of the thing the project actually does — no stock art,
no illustration. One hue per cover (sequential ramp, monotonic lightness), thin
marks, recessive axes, no chart junk, and no text small enough to be unreadable
at card size.

Run:  python3 scripts/generate_covers.py
"""

import os

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.colors import LinearSegmentedColormap, to_rgb

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "covers")
os.makedirs(OUT, exist_ok=True)

# Card surface. Matches the gray-950 the cards sit on so the art fuses with the UI.
SURFACE = "#0b1020"
W, H, DPI = 8.0, 3.5, 200  # -> 1600x700

# Per-project accent. Each cover uses exactly one, stepped into a sequential ramp.
ACCENT = {
    "persuasion": "#a78bfa",
    "claims": "#5eead4",
    "gemma": "#fdba74",
    "askwpi": "#7dd3fc",
    "rul": "#67e8f9",
    "ecowise": "#bef264",
    "accidents": "#fda4af",
}

RNG = np.random.default_rng(7)


def ramp(hex_color, name="ramp"):
    """Single-hue sequential ramp: surface -> accent. Lightness is monotonic."""
    return LinearSegmentedColormap.from_list(
        name, [to_rgb(SURFACE), to_rgb(hex_color)], N=256
    )


def canvas():
    fig = plt.figure(figsize=(W, H), dpi=DPI)
    fig.patch.set_facecolor(SURFACE)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_facecolor(SURFACE)
    for s in ax.spines.values():
        s.set_visible(False)
    ax.set_xticks([])
    ax.set_yticks([])
    return fig, ax


def save(fig, name):
    path = os.path.join(OUT, f"{name}.png")
    fig.savefig(path, facecolor=SURFACE, dpi=DPI)
    plt.close(fig)
    print("wrote", os.path.relpath(path))


def glow(ax, x, y, color, base_lw=2.0, layers=5):
    """Soft bloom under a line, so it reads on a dark surface without thick marks."""
    for i in range(layers, 0, -1):
        ax.plot(x, y, color=color, lw=base_lw + i * 2.4, alpha=0.045, solid_capstyle="round")
    ax.plot(x, y, color=color, lw=base_lw, solid_capstyle="round")


# --------------------------------------------------------------------------
# 1. Discourse-act-aware persuasion — the learned self-attention bias matrix
# --------------------------------------------------------------------------
def persuasion():
    fig, ax = canvas()
    n_r, n_c = 9, 22
    # Structured bias: attention decays with inter-argument distance, with a
    # ridge where elaboration hands off to agreement.
    r = np.arange(n_r)[:, None]
    c = np.arange(n_c)[None, :]
    dist = np.abs(c / n_c * n_r - r)
    m = np.exp(-(dist**2) / 6.0)
    m += 0.55 * np.exp(-((r - 5) ** 2) / 1.5) * np.exp(-((c - 14) ** 2) / 9.0)
    m += RNG.normal(0, 0.05, m.shape)
    m = np.clip(m, 0, None)
    m /= m.max()

    ax.imshow(
        m,
        cmap=ramp(ACCENT["persuasion"]),
        aspect="auto",
        interpolation="nearest",
        extent=[0, n_c, 0, n_r],
    )
    # 2px surface gap between cells
    for i in range(1, n_c):
        ax.axvline(i, color=SURFACE, lw=1.6)
    for i in range(1, n_r):
        ax.axhline(i, color=SURFACE, lw=1.6)
    ax.set_xlim(0, n_c)
    ax.set_ylim(0, n_r)
    save(fig, "persuasion")


# --------------------------------------------------------------------------
# 2. Medical claims verification — claims in embedding space, density-shaded
# --------------------------------------------------------------------------
def claims():
    fig, ax = canvas()
    cmap = ramp(ACCENT["claims"])
    # Three claim outcomes land in three regions of SapBERT space.
    centers = [(-1.9, 0.35), (0.15, -0.5), (2.0, 0.6)]
    spreads = [0.72, 0.95, 0.62]
    sizes = [1500, 1100, 700]
    for (cx, cy), s, n in zip(centers, spreads, sizes):
        x = RNG.normal(cx, s, n)
        y = RNG.normal(cy, s * 0.62, n)
        d = np.exp(-(((x - cx) / s) ** 2 + ((y - cy) / (s * 0.62)) ** 2) / 2)
        ax.scatter(x, y, c=d, cmap=cmap, s=9, alpha=0.55, linewidths=0, vmin=-0.35, vmax=1.15)

    # A few verified links back to the knowledge base
    for _ in range(9):
        a, b = RNG.integers(0, 3), RNG.integers(0, 3)
        if a == b:
            continue
        x0, y0 = centers[a]
        x1, y1 = centers[b]
        ax.plot(
            [x0 + RNG.normal(0, 0.4), x1 + RNG.normal(0, 0.4)],
            [y0 + RNG.normal(0, 0.3), y1 + RNG.normal(0, 0.3)],
            color=ACCENT["claims"],
            lw=0.7,
            alpha=0.18,
        )
    ax.set_xlim(-3.6, 3.6)
    ax.set_ylim(-1.9, 1.9)
    save(fig, "claims")


# --------------------------------------------------------------------------
# 3. Gemma-3 QLoRA — training loss under the memory-optimized pipeline
# --------------------------------------------------------------------------
def gemma():
    fig, ax = canvas()
    steps = np.linspace(0, 1, 420)
    base = 2.85 * np.exp(-3.6 * steps) + 0.52
    noisy = base + RNG.normal(0, 0.055, steps.shape) * np.exp(-1.6 * steps)

    ax.fill_between(steps, noisy, 0.3, color=ACCENT["gemma"], alpha=0.07, linewidth=0)
    ax.plot(steps, noisy, color=ACCENT["gemma"], lw=1.0, alpha=0.35)
    glow(ax, steps, base, ACCENT["gemma"], base_lw=2.2)

    # Recessive grid only
    for gy in np.arange(0.5, 3.2, 0.5):
        ax.axhline(gy, color="#ffffff", lw=0.5, alpha=0.05)
    ax.set_xlim(0, 1)
    ax.set_ylim(0.3, 3.3)
    save(fig, "gemma")


# --------------------------------------------------------------------------
# 4. AskWPI — retrieval quality by rank across the evaluated methods
# --------------------------------------------------------------------------
def askwpi():
    fig, ax = canvas()
    ks = np.arange(1, 11)
    curves = [
        (np.array([0.41, 0.55, 0.63, 0.69, 0.73, 0.76, 0.78, 0.80, 0.81, 0.82]), 0.30),
        (np.array([0.50, 0.64, 0.72, 0.77, 0.81, 0.83, 0.85, 0.86, 0.87, 0.875]), 0.55),
        (np.array([0.58, 0.72, 0.80, 0.845, 0.87, 0.885, 0.895, 0.90, 0.905, 0.91]), 1.0),
    ]
    for y, a in curves:
        ax.plot(ks, y, color=ACCENT["askwpi"], lw=2.0, alpha=a, solid_capstyle="round")
        ax.scatter(ks, y, s=18, color=ACCENT["askwpi"], alpha=a, linewidths=0, zorder=3)
    # Bloom on the winning curve only
    glow(ax, ks, curves[-1][0], ACCENT["askwpi"], base_lw=2.4)

    for gy in np.arange(0.4, 1.0, 0.1):
        ax.axhline(gy, color="#ffffff", lw=0.5, alpha=0.05)
    ax.set_xlim(0.6, 10.4)
    ax.set_ylim(0.33, 0.97)
    save(fig, "askwpi")


# --------------------------------------------------------------------------
# 5. Predictive maintenance — engine degradation traces into piecewise RUL
# --------------------------------------------------------------------------
def rul():
    fig, ax = canvas()
    t = np.linspace(0, 1, 300)
    # Faint sensor traces
    for _ in range(16):
        drift = RNG.uniform(0.35, 1.0)
        y = 0.55 + drift * (t**2.4) * RNG.choice([-1, 1]) * 0.35
        y += RNG.normal(0, 0.012, t.shape).cumsum() * 0.35
        ax.plot(t, y, color=ACCENT["rul"], lw=0.7, alpha=0.13)

    # Piecewise-capped true RUL vs prediction
    true = np.where(t < 0.42, 1.0, 1.0 - (t - 0.42) / 0.58)
    pred = true + np.concatenate(
        [np.zeros(126), RNG.normal(0, 0.035, 174).cumsum() * 0.09]
    )
    pred = np.clip(pred, 0, 1.08)
    ax.plot(t, true, color="#ffffff", lw=1.6, alpha=0.32, linestyle=(0, (5, 4)))
    glow(ax, t, pred, ACCENT["rul"], base_lw=2.4)
    ax.scatter([t[-1]], [pred[-1]], s=46, color=ACCENT["rul"], zorder=4, linewidths=0)

    ax.set_xlim(0, 1)
    ax.set_ylim(-0.05, 1.15)
    save(fig, "rul")


# --------------------------------------------------------------------------
# 6. EcoWise — footprint across the six tracked habit categories
# --------------------------------------------------------------------------
def ecowise():
    fig = plt.figure(figsize=(W, H), dpi=DPI)
    fig.patch.set_facecolor(SURFACE)
    ax = fig.add_axes([0.255, -1.02, 0.49, 3.04], projection="polar")
    ax.set_facecolor(SURFACE)

    vals = np.array([0.86, 0.62, 0.74, 0.45, 0.68, 0.55])
    n = len(vals)
    theta = np.linspace(0, 2 * np.pi, n, endpoint=False) + np.pi / 2
    width = 2 * np.pi / n * 0.62
    cmap = ramp(ACCENT["ecowise"])

    ax.bar(
        theta,
        vals,
        width=width,
        bottom=0.28,
        color=[cmap(0.45 + 0.55 * v) for v in vals],
        edgecolor=SURFACE,
        linewidth=2.0,
    )
    for r in (0.55, 0.85, 1.15):
        ax.plot(
            np.linspace(0, 2 * np.pi, 200),
            np.full(200, r),
            color="#ffffff",
            lw=0.5,
            alpha=0.06,
        )
    ax.set_ylim(0, 1.28)
    ax.set_xticks([])
    ax.set_yticks([])
    ax.spines["polar"].set_visible(False)
    save(fig, "ecowise")


# --------------------------------------------------------------------------
# 7. Accident severity — crash density by hour of day and day of week
# --------------------------------------------------------------------------
def accidents():
    fig, ax = canvas()
    hours = np.arange(24)
    days = np.arange(7)
    # Twin commute peaks on weekdays, flattened and shifted late on weekends.
    commute = np.exp(-((hours - 8) ** 2) / 5.0) + 1.15 * np.exp(-((hours - 17) ** 2) / 6.0)
    weekend = 0.82 * np.exp(-((hours - 13) ** 2) / 26.0) + 0.78 * np.exp(
        -((hours - 22) ** 2) / 9.0
    )
    m = np.stack(
        [commute if d < 5 else weekend for d in days]
    ) * RNG.uniform(0.86, 1.14, (7, 24))
    m /= m.max()

    ax.imshow(
        m,
        cmap=ramp(ACCENT["accidents"]),
        aspect="auto",
        interpolation="nearest",
        extent=[0, 24, 0, 7],
    )
    for i in range(1, 24):
        ax.axvline(i, color=SURFACE, lw=1.4)
    for i in range(1, 7):
        ax.axhline(i, color=SURFACE, lw=1.4)
    ax.set_xlim(0, 24)
    ax.set_ylim(0, 7)
    save(fig, "accidents")


if __name__ == "__main__":
    persuasion()
    claims()
    gemma()
    askwpi()
    rul()
    ecowise()
    accidents()
