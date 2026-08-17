# 15 — PACKAGING NOTES: THE DECORATION COST CURVE

**Companion to `15_PACKAGING_SUPPLIERS.csv`.** FX: **1 EUR = 363 HUF**. Batch 1 = **~1,700 cans**, landed COGS **~524 HUF (EUR 1.44)/can** `ESTIMATE, range 460–620`, RRP **899 HUF (EUR 2.48)**.

> ⚠️ **Cans per pallet is UNKNOWN**, so "~1,700 cans" is a planning assumption, not a batch size. This project's own two derivations give **1,680** (`14_FIRST_BATCH.md` §1) and **2,880** (`logistics/23_SHIPPING.md` §1.3) and cannot both be right. Nothing in this file changes if the true figure is 1,680; **if it is 2,880 the batch costs EUR 4,157 and does not fit the capital at all.**

---

## The answer, first

**Batch 1 is decorated with a blank silver 330 ml can plus a shrink sleeve (quote an adhesive wrap label alongside it). Printed cans are not a cheaper option that you are declining — they are an option that does not exist at your volume, and will not exist until roughly 150,000–250,000 cans.**

Three volume gates, in the order you will hit them:

| Cans placed on the HU market in a year | What changes | Tag |
|---|---|---|
| **~1,700 (batch 1)** | Blank can + sleeve/label is the only physically reachable route | STRUCTURAL |
| **~5,000** | **DRS becomes mandatory**: 50 HUF deposit, MOHU registration, 45-day gate, **DRS mark on the artwork**. Below it, EPR only at ~2.4–2.8 HUF/can | LIKELY — **NEEDS PROFESSIONAL CONFIRMATION** |
| **~10,000** | **Wholesale becomes viable** — COGS ~390 HUF against a 470 HUF net wholesale price = **+80 HUF/can**. Below it a 470 HUF wholesale price **loses 54 HUF/can against the 524 HUF batch-1 COGS**. ⚠️ Even then it needs the **899 RRP**: at 799 the retailer's real net-on-net margin is only 25.3%, below the 35–45% the Hungarian drinks trade expects. | DERIVED — corrected from a previously non-monotonic cost curve. See `14_FIRST_BATCH.md` §3 |
| **~150,000–250,000** | **Printed cans become orderable at all** | 150,000/variety/order published (AT); ~200,000 (DE, LIKELY); 250,000 published Rhodius minimum per the agreed plan |

---

## Why the curve has a cliff in it, not a slope

Decoration cost per can is not one number. It is:

> **decoration per can = unit price (u) + setup / origination fee (S) ÷ number of cans (n)**

At 1,700 cans the **second term dominates**, and it dominates by a lot. The arithmetic below is **DERIVED from hypothetical setup fees** — the real Hungarian label and sleeve setup fees are **UNKNOWN — QUOTE REQUIRED**, and nobody on this project obtained one — but the *shape* is not in doubt:

| Setup fee S | S ÷ 1,700 | S ÷ 5,000 | S ÷ 25,000 | S ÷ 150,000 |
|---|---|---|---|---|
| 20,000 HUF (EUR 55) | **11.8 HUF / EUR 0.032** | 4.0 HUF | 0.8 HUF | 0.13 HUF |
| 50,000 HUF (EUR 138) | **29.4 HUF / EUR 0.081** | 10.0 HUF | 2.0 HUF | 0.33 HUF |
| 100,000 HUF (EUR 275) | **58.8 HUF / EUR 0.162** | 20.0 HUF | 4.0 HUF | 0.67 HUF |

*(ILLUSTRATIVE ARITHMETIC ONLY — the S values are hypotheticals chosen to show the curve, not quotes.)*

**Read that as: at 1,700 cans, the setup fee is 30–90× more punishing per can than it will be at 150,000. So the ONLY question that matters when you ring a Hungarian label printer is "what is the origination fee, separately from the per-label price?" — not "what is the per-label price?"** A printer quoting 18 HUF/label with a 20,000 HUF setup beats one quoting 9 HUF/label with a 100,000 HUF setup, by a wide margin, at your volume. The order reverses somewhere around 6,000 cans.

**Printed cans do not sit on this curve at all.** Their minimum order is 150,000–250,000 pieces. That is not a large setup fee to amortise; it is a wall. At the batch-1 landed COGS of ~524 HUF/can:

- 150,000 printed cans ⇒ **~78,600,000 HUF (EUR 216,500)** of production — **88× batch 1**
- 250,000 printed cans ⇒ **~131,000,000 HUF (EUR 360,900)** of production — **147× batch 1**

**DERIVED.** No negotiation closes an 88× gap. This is why "printed cans are cheaper per can" is true and irrelevant.

---

## The four routes, scored at 1,700 units

| Route | Reachable at 1,700? | Decoration cost/can | Artwork reversible? | Verdict |
|---|---|---|---|---|
| **Blank can + shrink sleeve** | **YES** — sleeve minimums are far below can-print minimums | UNKNOWN — QUOTE REQUIRED (+ application cost, also UNKNOWN) | **YES** | ⭐ **BATCH 1** |
| **Blank can + adhesive wrap label** | **YES** — the documented industry workaround; AT/DE fillers apply labels "in a second work step" | UNKNOWN — QUOTE REQUIRED | **YES** | ⭐ **Quote side by side; let the application surcharge break the tie** |
| Digitally printed can | **UNKNOWN** — no European digital can printer's MOQ or price was ever verified | UNKNOWN | **NO** | Cannot be recommended. And see the DRS argument below — it loses even if it is cheap |
| Traditionally printed can | **NO** — 150,000–250,000 minimum | n/a | NO | **ELIMINATED** |

---

## The three reasons the sleeve wins, in order of force

**1. It is the only route whose minimum order you can physically reach.** Everything else in this section is secondary to that.

**2. It keeps the 5,000-can DRS decision reversible — and that is worth more than any per-can saving.**
Below ~5,000 cans a year the product very probably needs **no DRS mark on the artwork** (LIKELY — NEEDS PROFESSIONAL CONFIRMATION; `legal/10_DRS_REPONT.md` is the authority and recommends planning against **4,500** as the operating cap, treating 5,000 as the legal threshold rather than the working limit). Above it, the mark is mandatory. **Print DRS-less artwork onto metal and you have hard-capped that inventory at 5,000 units forever.** Print the mark on, and you have committed to the deposit system, the MOHU registration and the deposit float before you know whether the product sells. A sleeve costs a reprint; a can costs the whole can. **You print 1,700 non-DRS sleeves now and, when volume justifies it, DRS sleeves for the same blank cans — scrapping zero cans.**

**3. A first Hungarian label for a novel functional drink WILL need at least one revision.** Nutrition declaration, allergen statement, the exact wording of the protein claim, the ingredient order once the co-packer finalises the compound. On a sleeve that costs one short reprint. On printed cans it is a five-figure write-off.

Two smaller points that still matter:

- **One pallet of blanks can serve two markets.** 1,200 Hungarian sleeves and 500 Austrian sleeves applied to cans from the same pallet. A second variant costs a setup change, not a five-figure commitment. *(Caveat: dual HU + AT deposit marking on one can is **UNVERIFIED and may not be legal in both systems** — check before committing artwork to a shared can.)*
- **The silver can is not a liability in your channel.** A brite can with a clean full-body sleeve reads as premium in a gym fridge. Appearance is not the binding constraint; cash is.

---

## Where the sleeve could still lose — and how to settle it

**Application cost.** A shrink sleeve needs a steam or heat tunnel; an adhesive label does not. **At 1,700 cans the application surcharge can be larger than the sleeve's own unit-price advantage.** Get three numbers before choosing:

1. the co-packer's surcharge to apply sleeves inside the run,
2. the same for adhesive labels,
3. what it costs to apply 1,700 sleeves **by hand** — at this volume that is a genuinely viable option costing only time, and it should be priced before it is dismissed.

**The one finding that would overturn everything above:** a European digital can printer with a **verified MOQ at or below ~2,500 cans** and a per-can price **under roughly EUR 0.15–0.20 (54–73 HUF) over blank**. Whether such a supplier exists was never established. Even then, re-read reason 2 — a printed can locks the DRS decision into metal, so it would have to be cheap enough to justify hard-capping the inventory at 5,000 units.

---

## What to put in the artwork now, even though batch 1 omits it

Reserve layout space for the **DRS mark**, the deposit-value text **`visszaváltási díj: [X] Ft`**, and a **GTIN registered to you with GS1 Hungary** (`https://gs1hu.org/`, fees **UNKNOWN — QUOTE REQUIRED**). They compete for the same limited surface as the product name, `330 ml`, `édesítőszerekkel` and the nutrition panel. **Retrofitting means re-originating the whole layout and paying the setup fee twice.** Do not buy cheap resold barcodes — they will likely fail DRS registration, which requires the GTIN to be associated with the registered producer.

---

## Every packaging number that is still missing

Nothing below was obtained by anyone on this project. All are **UNKNOWN — QUOTE REQUIRED**, and the first four are real lines in the unit economics:

1. **Per-label and per-sleeve price at 1,000 / 1,700 / 3,000 / 5,000, plus the setup fee stated separately**, from a Hungarian printer — *no Hungarian label printer was identified at all*
2. **Sleeve application cost** — co-packer surcharge vs manual labour vs tunnel hire
3. **blankodosen.de** 330 ml standard and sleek price + MOQ — the one blank-can supplier with a verified URL
4. **Minimum order for undecorated / brite cans direct from a can maker**, as distinct from the 150,000-piece printed minimum — this determines whether you can *ever* buy cans directly
5. Can end (202 B64 / CDL) price — confirm the co-packer includes it in the fill fee
6. Confirmed empty weight of a 330 ml can + end (the 13–15 g industry range is unsourced) — needed to close the EPR calculation
7. Shipper carton, tray, pallet, stretch wrap
8. GS1 Hungary membership and licence fees
9. MOHU DRS producer handling fee per unit beyond the 50 HUF deposit — only bites above 5,000 units
10. Whether dual HU + AT deposit marking on one can is legal in both systems
