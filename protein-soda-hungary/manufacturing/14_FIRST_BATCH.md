# 14 — FIRST BATCH: THE DECISION

**Basis: 2026-08-16 · 1 EUR = 363 HUF**
Ranking and reasoning: `13_COPACKER_RANKING.md`. Supplier data and sources: `12_COPACKERS.csv`. Cost lines: `finance/19_UNIT_ECONOMICS.csv`, `finance/18_COMPLETE_STARTUP_COSTS.csv`.

---

## THE DECISION

| | |
|---|---|
| **Product** | **ONE SKU.** 330 ml **SLEEK** aluminium can (Ø ~58 mm — **not** the 66.3 mm standard "211" body), carbonated, clear, zero sugar, **20 g protein**. **Flavour: Lemon-Lime.** |
| **Formula** | **ARCH F** — 10 g hydrolysed bovine collagen + 10 g **clear / acid-stable** whey protein isolate + 1.7 g L-leucine + L-tryptophan (**dose unsettled: the plan says 150 mg added, dossier D2 says 25 mg — settle before the RFQ, see §2.5**) |
| **Quantity** | **~1,700 cans.** ⚠️ Cans per pallet is **UNKNOWN** — see §1. |
| **Manufacturer** | **Opre' Label** — `sales@oprelabel.com` — "from one pallet" MOQ (**not a quoted can count**), collagen beverages on their published capability list |
| **Backup** | **Bubee Hungary Kft.** — `info@bubee.eu` · **+36 30 240 0493** · Kiskőrös, ~110 km — owns 0.33 L can filling, advertises BCAA/sports/functional contract manufacture |
| **Packaging** | **Blank silver can + shrink sleeve.** NOT printed cans. |
| **Landed cost** | **524 HUF/can** = **EUR 1.44** `ESTIMATE` (range 460–620). ⚠️ **Above 546 HUF the batch is unfunded; above 589 HUF it cannot break even at any sell-through.** See §2.1 and Gate 3. |
| **RRP** | **899 HUF** incl. 27% ÁFA. **799 is the floor, not the target** — at 799 the whole batch returns +EUR 102 and needs 96% sell-through. |
| **Channel** | **DIRECT first, consignment second. NEVER wholesale in batch 1.** At 524 HUF COGS a 470 HUF wholesale price **loses 54 HUF per can.** See the forbidden-deal table in §3. |
| **Total cash needed** | **EUR 3,000 = 1,089,000 HUF** — the project-standard figure |
| **Hard ceiling** | ⚠️ **Stay under ~5,000 cans in year one — and plan against 4,500.** Below that the Hungarian DRS/MOHU deposit system very probably does not apply. **`LIKELY — NEEDS PROFESSIONAL CONFIRMATION.`** `legal/10_DRS_REPONT.md` is the authority on DRS and recommends 4,500 as the operating cap; 5,000 is the legal threshold, not the working limit. |

> **Reconciliation of the cash figures used across this project.** They measure different things:
>
> | Figure | What it is |
> |---|---|
> | **€2,300** | **Co-packer invoice only** — ingredients + can + sleeve + filling + setup fee + tray, ex-works, for ~1,700 cans. `DERIVED: 488.88 HUF/can × 1,700 = 831,096 HUF = EUR 2,289, carried as EUR 2,300` |
> | **€2,740** | **Cash actually deployed** = €2,300 co-packer invoice + €440 setup/legal. **Break-even is computed on this: 1,405 cans at a 899 RRP.** |
> | **€3,000** | **Total to raise** = €2,740 + €260 contingency. **This is what to ask your father for** |
>
> ⚠️ **Read this before you treat the €260 as a buffer.** The 524 HUF landed cost includes **35.1 HUF/can of inbound freight, EPR and waste allowance (EUR 164)** that sits *outside* the co-packer invoice. That EUR 164 comes out of the €260. **EUR 3,000 − EUR 2,454 landed − EUR 440 setup = ~EUR 106 of real uncommitted contingency**, about 3.5% of the raise — not €260. That is thin, and it is the honest number.
>
> Setup/legal €440 = food-law opinion €275 + registration and chamber €95 + benchmark products €25 + domain €45. See `finance/18_COMPLETE_STARTUP_COSTS.csv`.

**NO caffeine SKU in batch 1.** It would add NETA exposure (~21.45 HUF/can), a mandatory caffeine warning, a second GTIN and under-18 restrictions — for zero learning you cannot get from SKU 1.

---

## 1. WHY 1,700 CANS AND NOT MORE, AND NOT LESS

> ### 🛑 CANS PER PALLET IS UNKNOWN. THIS IS A HARD GATE, NOT A DETAIL.
> **This project contains two of its own derivations of "one pallet" and they cannot both be right.** This file previously computed ~280 cans/layer × 6 layers ≈ **1,680 cans**. `logistics/23_SHIPPING.md` §1.3 independently computes **216 cans/layer** and instructs "use **2,880 cans/pallet** for planning" (2,000–2,300 on a weight-capped build), and calls batch 1 "0.59 of a pallet".
>
> **Neither is a quote. Delete the old "1,500–2,500" range from your head.**
>
> **Why this decides the whole plan:** if Opre's "from one pallet" means a real, full pallet at the logistics file's figure, the minimum order is ~2,880 cans = **1,509,120 HUF at 524 HUF/can = EUR 4,157** — more than the entire EUR 3,000 of capital, and 64% of the 4,500-can DRS working cap consumed in one order.
>
> **Therefore Opre' question #1 is: "How many 330 ml SLEEK cans are on one pallet, and will you fill a PART pallet?" Get that answer in writing before any budget goes to your father.** Until it lands, ~1,700 cans is a planning assumption, not a batch size.

**Not less,** because a run materially below ~1,500 cans cannot carry the 119,000 HUF fixed setup fee. `DERIVED:` at 1,000 cans the setup line alone is **119 HUF/can instead of 70**, pushing landed cost to roughly **573 HUF** — inside the unfunded band in Gate 3 — while leaving only ~940 sellable cans to recover the cash. **The fixed fee, not the ingredients, is what sets the floor on batch size.**

**Not more, for a regulatory reason that is irreversible at the artwork stage.**

> ### ⚠️ THE 5,000-CAN CEILING
> Below roughly **5,000 units of 0.1–3 L beverage packaging placed on the Hungarian market in a calendar year**, the DRS/MOHU deposit-return system very probably does not apply to you: **no 50 HUF deposit, no MOHU product registration, no 45-day pre-launch waiting period, NO DRS MARK ON THE ARTWORK, and no deposit float tying up cash.** Above it, DRS is **mandatory**.
>
> **`LIKELY — NEEDS PROFESSIONAL CONFIRMATION.` This must be settled by a Hungarian food-law opinion BEFORE artwork goes to print.**
>
> **Why it is irreversible: a sleeve printed without the DRS mark can never legally carry you past 5,000 units.** You would scrap the sleeves. **Decide before you print, not after.**

At 1,700 cans you sit at **38% of the 4,500-can working cap** (34% of the 5,000 legal threshold) — enough headroom for one second small run in the same year if the first sells out. **Size that second run against 4,500, not 5,000:** `10_DRS_REPONT.md` §3.2 lists six open sub-questions, including whether the count is per calendar year or rolling 12 months and whether crossing bites retrospectively.

**Levy stack at this volume is trivial: ≈5 HUF/can total (EUR 0.014)** — EPR ~2.6 HUF on the can + ~2.52 HUF on the shipper carton. NETA 0 HUF for a zero-sugar, caffeine-free protein soda `LIKELY`. Környezetvédelmi termékdíj abolished 1 Jan 2025 `LIKELY`. DRS deposit 0 under the threshold. **Hungarian product taxation is not your obstacle at this scale. Do not let it distract you.**

⚠️ **And do not use taurine, ever.** It reportedly pushes NETA to ~128.70 HUF/can — EUR 0.35 of pure tax, which alone would exceed your gross margin.

---

## 2. THE MONEY — WHAT THE BATCH COSTS

### 2.1 Landed COGS build, 1,700 cans

**Ingredient lines below are taken from `product/04_FORMULATION_V1.csv`, which is the authoritative formulation file.** The whey line is priced at the **clear / acid-stable grade**, because that is the grade the formula requires — see the box under the table.

| Line | HUF/can | EUR/can | Batch HUF | Batch EUR | Status |
|---|---:|---:|---:|---:|---|
| Collagen — 11.111 g powder at **90% protein** (confirm on CoA) | 65.18 | 0.180 | 110,806 | 305 | PUBLIC LIST PRICE (FloraVita HU 20 kg) — QUOTE REQUIRED |
| **Whey protein isolate — CLEAR / ACID-STABLE grade, 11.111 g** | **163.90** | **0.451** | **278,630** | **768** | ⚠️ **ESTIMATE ONLY — index +25%. NO QUOTE EXISTS. See the box below.** |
| L-leucine 1.7 g | 9.60 | 0.026 | 16,320 | 45 | ESTIMATE — **legality in a beverage UNRESOLVED, see §2.5** |
| L-tryptophan (dose unsettled, §2.5) | 0.71 | 0.002 | 1,207 | 3 | ESTIMATE — **same legality flag** |
| Sweetener (sucralose + acesulfame K) | 6.19 | 0.017 | 10,523 | 29 | ESTIMATE ⚠️ **variance vs 04_FORMULATION — see below** |
| Acid system (citric + malic) | 2.50 | 0.007 | 4,250 | 12 | ESTIMATE ⚠️ **variance** |
| Natural flavour, lemon-lime | 8.00 | 0.022 | 13,600 | 37 | ESTIMATE ⚠️ **variance** |
| Potassium sorbate | 0.80 | 0.002 | 1,360 | 4 | ESTIMATE — **omit if tunnel-pasteurised** |
| **Subtotal ingredients** | **256.88** | **0.708** | **436,696** | **1,203** | ESTIMATE |
| Can body + end (co-packer stock, 330 ml SLEEK) | 52.00 | 0.143 | 88,400 | 244 | **QUOTE REQUIRED** |
| Shrink sleeve + application | 42.00 | 0.116 | 71,400 | 197 | **QUOTE REQUIRED** |
| Filling / tolling, variable | 60.00 | 0.165 | 102,000 | 281 | **QUOTE REQUIRED — the largest unknown** |
| Setup / changeover / recipe fee, amortised (**119,000 HUF fixed**) | 70.00 | 0.193 | 119,000 | 328 | **QUOTE REQUIRED — dominates at this volume** |
| Tray / carton / film | 8.00 | 0.022 | 13,600 | 37 | ESTIMATE |
| **— co-packer invoice subtotal —** | **488.88** | **1.347** | **831,096** | **2,289** | **= the "EUR 2,300" line** |
| Inbound freight to Hungary | 15.00 | 0.041 | 25,500 | 70 | ⚠️ **ESTIMATE — logistics/23 says 32–64. See freight box below.** |
| EPR packaging fee | 5.10 | 0.014 | 8,670 | 24 | ESTIMATE |
| Waste / reject allowance 3% | 15.00 | 0.041 | 25,500 | 70 | ESTIMATE — first runs reject more |
| **TOTAL LANDED COGS** | **524.0** | **1.444** | **890,800** | **2,454** | **ESTIMATE, range 460–620** |

> ### ⚠️ THE WHEY LINE IS THE SINGLE BIGGEST RISK IN THIS TABLE
> The formula requires a **clear / acid-stable** WPI grade — `04_FORMULATION_V1.csv` names the line *"Whey protein isolate — CLEAR / ACID-STABLE GRADE"*, and `05_FOOD_CHEMISTRY.md` states plainly that **"standard WPI" is not automatically "clear WPI"** and that specifying the wrong grade is the classic cause of a failed first trial run.
>
> | Case | HUF/can | Landed COGS | Basis |
> |---|---:|---:|---|
> | **Optimistic — commodity WPI90** | 131.08 | **491** | DCA Jul-2026 index, EUR 32,500/t. **This is the number the old plan used. It buys the wrong grade.** |
> | **BASE CASE — clear/acid-stable grade** | **163.90** | **524** | Index **+25%**, the midpoint of the 15–35% branded-beverage-grade premium. `16_INGREDIENT_SUPPLIERS.csv` row 16. |
> | Small-lot uplift on top (+10–25%) | +16 to +41 | **540–565** | `16_INGREDIENT_SUPPLIERS.csv`: *"a 25 kg buyer should budget index +10–25%"* |
>
> **163.90 HUF/can is an ESTIMATE, not a quote. No branded clear-WPI list price is published anywhere and nobody on this project obtained one.** `16_INGREDIENT_SUPPLIERS.csv` states the swing is **±50 HUF/can** — against a base contribution of 184 HUF/can that is 27% of your entire upside.
>
> **European whey producers were reported SOLD OUT in April 2026 and the shortage is forecast structural through 2026.** A 25 kg first-time Hungarian buyer has no allocation at any price. **Ask the ACCESS question before the price question, and see Gate 2 — this is now a hard blocking gate, not a warning.**

> ### ⚠️ FREIGHT: THIS TABLE CARRIES 15 HUF/CAN AND THE LOGISTICS FILE SAYS THAT IS WRONG
> `logistics/23_SHIPPING.md` states the 15 HUF/can line is *"optimistic for a cross-border pallet"*, puts the realistic band at **32–64 HUF/can** and instructs *"budget 45 HUF/can"*. At 45 HUF the landed cost is **554 HUF** — past the 546 HUF affordability cap in Gate 3.
>
> **The resolution is commercial, not arithmetic: make "delivered DDP Budapest, inbound freight inside the per-can price" a written condition of every quote.** If a co-packer will not quote DDP, add 30 HUF/can to their number before comparing it, and re-test against Gate 3. If Opre' fills in **Slovakia**, this is the expensive case.

**Line-by-line variance against `product/04_FORMULATION_V1.csv` — the true reconciliation.** The old note in this section claimed the gap between the 213 HUF plan figure and the 224.8 HUF model figure "appears to be flavour and sweetener treated inside or outside the ingredient line." **That was wrong.** Here is where the money actually is:

| Line | 04_FORMULATION_V1.csv | This batch model | Variance | Why |
|---|---:|---:|---:|---|
| Collagen | 65.18 | 65.18 | **0** | Now identical. The old 79.0 figure was unsourced and self-refuting. |
| Whey isolate | 131.08 *(standard WPI90)* | **163.90** *(clear grade)* | **+32.82** | **Grade change, not a price error.** The formulation file's own note flags the +25% clear-grade premium. |
| L-leucine | 9.60 | 9.60 | 0 | — |
| L-tryptophan | 0.71 | 0.71 | 0 | — |
| Sweetener | 0.192 | 6.19 | **+6.00** | ⚠️ **Unexplained.** 04 prices sucralose 0.141 + Ace-K 0.051; `16_INGREDIENT_SUPPLIERS.csv` agrees the system "does the entire job for 0.19 HUF/can". The 6.19 is a **32× uplift with no stated basis.** |
| Acids | 0.458 | 2.50 | **+2.04** | ⚠️ **Unexplained.** 04 prices citric 0.247 + malic 0.211. |
| Flavour | 5.437 | 8.00 | **+2.56** | Defensible: 04 models 0.15% dosage and notes a zero-sugar protein drink may need 0.20% (~7.25 HUF). |
| Sorbate | 0.105 | 0.80 | **+0.70** | ⚠️ Unexplained. |
| **TOTAL** | **212.76** | **256.88** | **+44.12** | 74% of the variance is the clear-WPI grade decision. |

**A likely explanation for the "sweetener" line, worth checking before you quote it to anyone:** the non-protein deck in `04_FORMULATION_V1.csv` (acids + sweeteners + flavour + sorbate) sums to **exactly 6.19 HUF/can**. The batch model's "Sweetener 6.19" line is almost certainly **that whole deck, mislabelled as sweetener** — and then acids, flavour and sorbate were added again on top. If so, the true ingredient subtotal is ~250 HUF/can and the four "variance" lines are a **double count**, not an uplift.

**What to do:** the 256.88 subtotal is retained because it is conservative (it overstates cost by ~EUR 44 on the batch, which is safe). **But it will not reconcile against any supplier quote you receive.** When the first ingredient quotes land, rebuild this block line-for-line off `04_FORMULATION_V1.csv`, resolve the double-count, and either delete the uplift or state the factor and why it exists.

**What this build does NOT have:** any external corroboration.

- **The old "cross-check" against dossier B6 has been deleted, because it was circular and it was for a different product.** B6's EUR 2,000–2,600 range is the *same* range `18_COMPLETE_STARTUP_COSTS.csv` carries, and 491 × 1,700 = EUR 2,299 was set to its midpoint — checking a build against a range whose midpoint it was set to equal validates nothing. **Worse, B6 §1.3 states its range with a condition that was stripped out: *"…if the collagen variant is used instead of whey isolate."* B6's own table row is titled "Opre' Label — one pallet, **collagen version**".** ARCH F adds 131–164 HUF/can of whey isolate. **B6 does not validate this build.**
- `13_COPACKER_RANKING.md` §8 states the position correctly: **"Not one supplier price per can exists anywhere in this project."** Say that sentence to your father before you show him the 524.
- **Cross-check the collagen-only fallback side by side** when the quotes land: dropping the whey removes 163.90 HUF/can and lands COGS at ~**360 HUF** — but you lose the complete-protein claim, which is the entire proposition. That is a decision, not a saving.

### 2.2 Total cash required to get batch 1 sold

Landed cost per can drives the top line: **lean 460 / base 524 / high 620 HUF.**

| Item | Lean EUR | Base EUR | High EUR | Base HUF | Status |
|---|---:|---:|---:|---:|---|
| **Production — 1,700 cans all-in landed** (460 / **524** / 620 HUF per can) | 2,154 | **2,454** | 2,904 | **890,800** | ESTIMATE |
| Hungarian food-law classification opinion | 150 | **275** | 400 | 99,825 | **QUOTE REQUIRED — highest-leverage spend in the project** |
| Business setup — add TEÁOR 4634 + 4725 to an existing adult family company | 0 | **80** | 165 | 29,040 | ESTIMATE |
| Chamber of commerce contribution (kamarai hozzájárulás) | 14 | **14** | 14 | 5,000 | LIKELY — 5,000 HUF/yr flat, mandatory |
| Food business registration + FELIR identifier | 0 | **0** | 0 | 0 | LIKELY — registration itself is free |
| Label / sleeve artwork | 0 (DIY) | **80** | 400 | 29,040 | ESTIMATE — **do not spend >EUR 150; it will change** |
| GS1 Hungary membership + GTIN | ? | **?** | ? | ? | ⚠️ **UNKNOWN — QUOTE REQUIRED. Ask for the smallest package.** |
| Laboratory — nutrition declaration by calculation | 0 | **0** | 0 | 0 | **NOT LEGALLY REQUIRED** — see 2.4 |
| **Laboratory — one finished-can nitrogen analysis** | 0 | **125** | 150 | 45,375 | ⚠️ **NOT inside the EUR 440 "setup/legal" figure. Unfunded. See 2.4 — do not print a front-of-pack "20 g" at scale without it.** |
| Laboratory — microbiology | 0 | **0** | 0 | 0 | **QUOTE REQUIRED** — should be in the co-packer's CoA. Confirm. |
| Domain + one-page site | 15 | **45** | 110 | 16,335 | ESTIMATE |
| Benchmark products for tasting (NOCCO, Barebells, Myprotein) | 20 | **25** | 40 | 9,075 | ESTIMATE |
| Card reader for direct sales | 0 | **39** | 55 | 14,157 | ESTIMATE — cash is fine at pilot scale |
| MOHU DRS registration | **0** | **0** | **0** | **0** | **NOT REQUIRED below ~5,000 units — NEEDS PROFESSIONAL CONFIRMATION** |
| Trademark filing | 0 | **0** | 0 | 0 | **DEFER past batch 1.** Free name search only. |
| **SUBTOTAL** | **2,353** | **3,137** | **4,238** | **1,138,731** | |
| Contingency actually held | 235 | **260** | 425 | 94,380 | **DO NOT SKIP.** ⚠️ At base this is **8.3%**, not the 15% previously claimed here (and the old "15%" figures were not 15% of anything). |
| **TOTAL CASH REQUIRED** | **~2,588** | **~3,397** | **~4,663** | **~1,233,111** | |

### 2.3 ⚠️ THE BLUNT VERDICT ON THE CAPITAL

**Available: EUR 1,000 personal + ~EUR 2,000 family = EUR 3,000 = 1,089,000 HUF.**
**Base case needs ~EUR 3,397. The gap is ~EUR 397 (≈144,000 HUF).**

**The gap widened from EUR 250 to EUR 397 because the whey line was repriced to the grade the formula actually requires.** That is not a new cost; it is a cost that was previously mis-stated.

**EUR 1,000 alone does not buy a can run. It never did.** The batch only fits inside EUR 3,000 if you take all four of these:

| # | Lever | Saves |
|---|---|---:|
| 1 | **Self-design the artwork** (Canva/Figma) | EUR 80 |
| 2 | **Skip the card reader**, take cash and bank transfer | EUR 39 |
| 3 | **Scope the food-law opinion to written questions** rather than commissioning a full opinion | ~EUR 125 |
| 4 | **Defer the finished-can nitrogen analysis** until after the first sales — and keep the "20 g" off the front panel until it is paid for | EUR 125 |
| | **Total** | **EUR 369** |

**EUR 3,397 − 369 = EUR 3,028. You are still ~EUR 28 over, and the contingency inside that is only EUR 260 of which EUR 164 is already committed to freight, EPR and waste.** The honest statement to your father is: *"EUR 3,000 covers this only if nothing goes wrong and I do four things myself."*

**If you will not take lever 4, the number to ask for is EUR 3,150, not EUR 3,000.**

⚠️ **Two lines that could break this budget on their own:**
- **The clear-WPI line at 163.90 HUF/can is the largest single ingredient and has no quote behind it.** `16_INGREDIENT_SUPPLIERS.csv` states it swings ARCH F by **±50 HUF/can** — that is ±EUR 234 on the batch, which is larger than the entire base-case profit. European producers were reported **SOLD OUT in April 2026**. **This is now a hard Gate 2 blocker, not a warning.** The collagen-only fallback is your protection — have it costed before you send the RFQs, not after a refusal.
- **The setup/changeover fee (119,000 HUF, 70 HUF/can amortised) is a QUOTE REQUIRED figure that could be double.** At 1,700 cans a fixed fee is punishing: every EUR 100 of setup fee is **21 HUF on every can.** Ask for it as a number, not a percentage.

### 2.4 Lab cost: the declaration is free, the front-panel claim is not

**A full nutrition analysis is NOT legally required for the DECLARATION. This saves EUR 800–2,000.** Reg. (EU) 1169/2011 Art. 31(4) permits nutrition declaration values to be established **by calculation from known average values of the ingredients used.** Your formula is a defined recipe of purchased ingredients with supplier specification sheets — calculate the panel from those specs. `LIKELY — confirm in the food-law classification opinion.`

⚠️ **The declaration and a front-of-pack CLAIM are not the same question, and this project has not resolved it.** `product/03_PRODUCT_ARCHITECTURE.md` §6 states in bold that a finished-can nitrogen analysis *is* legally required to justify the claim; `legal/11_LEGAL_CHECKLIST.md` #47 says no lab is legally required and tags that **CONFIRMED**, which is not defensible given the disclosed egress block. **Treat it as commercially, not legally, mandatory: "20 g" is the single number the entire proposition rests on, and printing it on the front of 1,700 cans on a spreadsheet calculation is indefensible if anyone ever tests it.** Budget one assay at **EUR 100–150** (see §2.2 — it is currently unfunded), and put "does a front-of-pack quantitative protein claim require finished-product analysis?" on the food-law question list.

**Microbiological testing** should sit inside the co-packer's own QA and arrive as a **Certificate of Analysis with the batch**. Private Label Drink publishes exactly that commitment. **Make a per-batch CoA a written condition of the order.** If a co-packer will not provide one, budget for a lab and re-rank them.

**If you have any money left over, spend it here instead:** one **paid advisory hour** with a beverage technologist on protein clarity and can-lacquer compatibility at pH 3.2 — Campden BRI Magyarország and Drink Creator (the &T Tonic team) are the two named leads. **One hour may prevent a failed 1,700-can run.**

### 2.5 ⚠️ TWO FORMULA QUESTIONS THAT ARE NOT SETTLED — and one blocks buying raw materials

**(a) Free amino acids in a beverage — legality UNRESOLVED. `NEEDS PROFESSIONAL CONFIRMATION`.**
ARCH F adds **1.7 g of free L-leucine and free L-tryptophan** to a normal beverage. Whether that is lawful under **Reg. (EC) 1925/2006** and Hungarian national rules **was never verified** — `04_FORMULATION_V1.csv` records "I COULD NOT VERIFY THIS", `03_PRODUCT_ARCHITECTURE.md` §5 calls it *"the single biggest unresolved question hanging over ARCH F"*, and `09_LABEL_COMPLIANCE.md` §18.3 lists it as **"YES — blocks raw-material purchase."**

- **It is a Gate 1 item, not a footnote.** Do not buy leucine or tryptophan until it is answered in writing.
- **The fallback is cheap and already costed: drop both amino acids and save 10.31 HUF/can.** You lose the 3.00 g leucine talking point, not the product.
- **Do not print any leucine figure on the pack.** A leucine-content claim is not in the Annex to Reg. 1924/2006, so Art. 8(1)'s closed list prohibits it however true it is.

**(b) The tryptophan dose is stated two different ways in this project. Settle it before the RFQ goes out.**

| Source | Added L-tryptophan | Total in can |
|---|---:|---:|
| The agreed plan / `04_FORMULATION_V1.csv` | **150 mg** | ~285 mg |
| Dossier D2 §8 ARCH F | **25 mg** (15 mg deficit + analytical margin) | ~160 mg |

FAO reference need for 20 g protein is ~150 mg, and the whey fraction alone supplies ~135 mg — so the **true deficit is ~15 mg**. Cost difference is **0.59 HUF/can — immaterial.** But **the co-packer will dose what the spec sheet says and the label will declare it**, so one number must be chosen and carried into `01`, `02`, `04_FORMULATION_V1.csv` and this file. `16_INGREDIENT_SUPPLIERS.csv` row 23 already flags this conflict; it had not reached the decision files.

---

## 3. THE MARGIN — AND THE NUMBER YOU MUST NOT FORGET

> ### 🛑 SELL AT 899 HUF, NOT 799.
> **At 799 the entire batch returns +EUR 102 and needs 96% sell-through. At 899 it returns +EUR 458 and breaks even at 86%.** The 100 HUF is the difference between a project that survives one bad week and one that does not. **799 is the floor. 899 is the plan.**

At **899 HUF RRP** including 27% ÁFA:

| | HUF | EUR |
|---|---:|---:|
| Consumer price incl. ÁFA | **899.00** | 2.476 |
| less ÁFA at 27% (899 ÷ 1.27) | −191.13 | −0.527 |
| **Net revenue per can** | **707.87** | **1.950** |
| less landed COGS | −524.00 | −1.444 |
| **CONTRIBUTION PER CAN** | **+183.87** | **+0.507** |

**You keep the retail margin only when you sell direct. Every intermediary comes straight out of that 183.87 HUF, and two of the four deals on the table take more than all of it.**

| Channel and price | You net | Contribution/can | Verdict |
|---|---:|---:|---|
| **DIRECT at 899 HUF** | 707.87 | **+183.87** | ✅ **THE PLAN** |
| Direct at 799 HUF | 629.13 | +105.13 | ⚠️ Survivable. Needs 96% sell-through. |
| **Consignment at 899, gym keeps 100 HUF** | 629.13 | **+105.13** | ✅ **The consignment deal to ask for.** Same economics as a direct sale at 799. |
| Consignment at 899, gym keeps 160 HUF | 581.89 | +57.89 | ⚠️ **Thin.** Accept only for an anchor account you actually want. |
| **Consignment at 799, gym keeps 160 HUF** | 503.15 | **−20.85** | ❌ **FORBIDDEN. You pay 21 HUF for the privilege of the gym selling your can.** |
| **Wholesale at 470 HUF net** | 470.00 | **−54.00** | ❌ **FORBIDDEN IN BATCH 1. A loss on every can.** |

> ### 🛑 THE TWO DEALS YOU MUST NEVER SIGN IN BATCH 1
> **1. Consignment at a 799 RRP with a 160 HUF gym cut.** 799 − 160 = 639 gross; 639 ÷ 1.27 = **503.15 net** against a 524 HUF cost. Every can sold loses 20.85 HUF. **If the gym insists on 160 HUF, the RRP must be 899.**
> **2. Any wholesale price in batch 1.** At 470 HUF net you lose 54 HUF/can. Once a trade price is quoted in writing it cannot be withdrawn without losing the account. **Anyone who offers to "take a pallet at wholesale" in month one is offering to take your money. Say no politely and offer consignment at 899 instead.**

> ### WHOLESALE BECOMES VIABLE AT ~10,000 CANS — NOT 25,000
> **This is a correction in your favour.** The old curve was built from two incompatible cost models spliced together and produced an impossible non-monotonic result (491 at 1,700 → 699 at 5,000 → 556 at 10,000). Rebuilt on **one architecture** — blank can + shrink sleeve, co-packer can stock, the same 119,000 HUF fixed setup fee amortised over the run — the curve falls monotonically and wholesale turns positive far earlier:
>
> | Cans | Ingredients | Can + sleeve + fill + tray | Setup amortised | Freight + EPR + waste | **LANDED COGS** | vs 470 wholesale |
> |---:|---:|---:|---:|---:|---:|---:|
> | **1,700** | 256.9 | 162.0 | 70.0 | 35.1 | **524** | **−54** ❌ |
> | 5,000 | 232 | 143 | 23.8 | 32.0 | **431** | +39 ⚠️ too thin |
> | **10,000** | 220 | 131.5 | 11.9 | 26.6 | **390** | **+80** ✅ |
> | 25,000 | 205 | 119 | 4.8 | 20.2 | **349** | +121 ✅ |
> | 50,000 | 195 | 108 | 2.4 | 13.6 | **319** | +151 ✅ |
> | 100,000 | 185 | 100 | 1.2 | 9.8 | **296** | +174 ✅ |
>
> `ESTIMATE / DERIVED — one architecture, no quotes. Every row is a hypothesis to be destroyed by the first written quote.`
>
> **Crossovers:** below **400 HUF at ~10,000 cans** · below **350 at ~25,000** · below **300 at ~95,000** · **below 250 is NOT REACHABLE at 20 g of protein at any volume you could fund.** The floor is ~296 HUF.
>
> ⚠️ **Contribution-positive is not the same as sellable.** A 470 HUF net price against an 899 RRP gives the retailer (707.87 − 470) ÷ 707.87 = **33.6% net-on-net margin**, which is at the bottom of the 35–45% Hungarian drinks trade expects. Against a **799** RRP it is only **25.3%** and will be refused in the room. **Wholesale needs the 899 RRP as well as the 10,000-can volume.** See `finance/22_PRICING.md`.
>
> **Any figure previously carried in this project from dossier D1's alternative architecture — printed cans, a EUR 2,500 one-off amortisation, a ×1.40 small-lot protein premium — does not belong on this curve and has been removed.**

### 3.1 Break-even, stated plainly — ONE definition, used everywhere

**The definition, and it is the only one this project uses: total cash deployed ÷ net revenue per can.** Not inventory-only. Not "of 1,700 cans". The EUR 440 of setup/legal is real money that has to come back too, and cans you give away cannot be sold.

- **Total cash deployed: EUR 2,740 = 994,620 HUF.**
- **Net revenue per can at 899 RRP: 707.87 HUF.**
- **BREAK-EVEN = 994,620 ÷ 707.87 = 1,405 cans.** `DERIVED`

**Sample budget: 60 cans, hard cap.** That is 3.5% of the batch and it sits inside the 5% rule in `sales/27_GYM_SALES_STRATEGY.md` §5. **That leaves 1,640 sellable cans, and you must sell 1,405 of them = 86%.**

> ⚠️ **Why the sample budget is 60 and not 175.** The old plan budgeted ~175 free cans (10.3% of the batch) *and* computed break-even against the full 1,700. Those two statements cannot both be true. At 175 samples and a 799 RRP the batch could not break even **even at 100% sell-through**. **Samples are the one line where generosity is arithmetically fatal.** `DERIVED:` break-even is 1,405 cans, so **above ~295 free cans there is not enough sellable stock left to break even at 899 no matter how well you sell** — and on the fuller EUR 2,894 basis (landed batch + setup, rather than the EUR 2,740 project standard) the ceiling is ~215. **60 keeps you clear of both.** Allocate all 60 to named prospects in advance.

| RRP | Cans sold (of 1,640) | Net position after ALL cash deployed |
|---|---|---|
| **899 HUF** | **all 1,640** | **+166,300 HUF (+EUR 458)** ✅ |
| 899 HUF | **1,405** | **0 — break-even (86%)** |
| 899 HUF | 1,200 (73%) | −145,200 HUF (−EUR 400) |
| 799 HUF | all 1,640 | **+37,200 HUF (+EUR 102)** — break-even needs **1,581 = 96%** ⚠️ |
| 699 HUF | all 1,640 | **−92,000 HUF (−EUR 253)** ❌ **699 is below viability. It is not a floor, it is a loss.** |

**The honest read: batch 1 is a paid education, not a profit centre.** If everything goes right — 899 RRP, 60 samples, every can sold — you end with your money back plus ~EUR 458, and, far more valuable, a real product, real stockists and real quotes. **Plan for that outcome, not for a windfall. And note that at 799 the same perfect execution returns EUR 102, which is inside the error bar on a single unquoted cost line.**

**Open question for your accountant:** this model assumes you charge 27% ÁFA. Whether your chosen legal structure is VAT-registered or VAT-exempt materially changes the 629 HUF net-revenue line. **Ask before you set the price list.**

---

## 4. WHAT MUST BE REQUESTED — every number below is genuinely unknown

**No supplier price per can exists anywhere in this research programme. No MOQ was confirmed by opening a page. Every figure in §2 is arithmetic or a benchmark, not a quote.** These are the questions that convert this plan into a real one.

### 4.1 From Opre' Label (`sales@oprelabel.com`) — send today

| # | Request | Why it is decisive |
|---|---|---|
| 1 | **Exact cans per pallet at 330 ml SLEEK — and will you fill a PART pallet?** | 🛑 **THE GATE.** Our own two derivations give 1,680 and 2,880 and cannot both be right. At 2,880 cans the minimum order is EUR 4,157 — more than the entire capital. **Nothing goes to your father until this is answered.** |
| 2 | **Is the filling site in Hungary or Slovakia?** | Changes freight, changes who registers EPR, changes whether the DRS analysis even applies the same way. |
| 3 | **Price per can at 1 / 3 / 10 pallets, delivered Budapest**, itemised: filling, cans, sleeve, setup | Replaces four QUOTE REQUIRED lines at once. |
| 4 | **Setup / changeover / recipe-development fee as a number** | 70 HUF/can amortised is a placeholder. This single fee can move total cost by ±EUR 300. |
| 5 | **Minimum CAN PURCHASE quantity, separately from minimum filling quantity** | The most common reason a promising quote collapses. |
| 6 | **Do you stock blank 330 ml cans and apply shrink sleeves?** | Printed cans need 150,000–250,000 units. Without blanks + sleeves there is no batch 1. |
| 7 | **What protein load have you actually run, in g/can, and which protein?** | "Collagen beverages" could mean 2 g. You need 20 g. |
| 8 | **Do you accept dairy raw materials on site (10 g WPI), and what is the allergen changeover surcharge?** | The gate for ARCH F as specified. |
| 9 | **Thermal process: tunnel pasteurisation, hot-fill or cold-fill + sorbate?** — and **the resulting AMBIENT shelf life at pH 3.2 with 20 g protein, in writing** | 🛑 **Gate 2 no-go item.** Cold-fill with no thermal step and no challenge test gives a **fridge-only shelf life of days-to-weeks** (`06_SAFETY_AND_SHELF_LIFE.md`), which destroys the gym-fridge distribution model and makes 1,700 ambient-distributed cans a total loss. **Do not accept "it should be fine".** |
| 10 | **Can internal lacquer specification, and can you supply 330 ml SLEEK (Ø ~58 mm)?** | Low pH + protein + long shelf life needs the right liner. Format also drives cans/pallet, sleeve dimensions and artwork. |
| 11 | **Lead time from approved recipe to finished pallet; deposit %; payment terms** | MONYO publishes 50% up front — assume Opre' wants something similar and plan the cash. |
| 12 | **Certificate of Analysis per batch — yes or no?** | If no, add a lab line to the budget and re-rank. |

### 4.2 From Bubee Hungary (`info@bubee.eu`, **+36 30 240 0493**) — send the same day, in Hungarian

Same twelve, plus the two that only they can answer:

| # | Request | Why |
|---|---|---|
| 13 | **Minimum batch in litres AND in cans at 0.33 L** | **The single most important unknown in the Hungarian workstream.** If it comes back at 3,000–5,000 cans, Bubee becomes the #1 choice outright. |
| 14 | **NÉBIH establishment number, and are dairy raw materials permitted on site?** | **No dairy establishment approval number was found for any Hungarian filler in this entire study.** Bubee is the open question. |
| 15 | **Do you have an existing BCAA or sports base we could take under our own label?** | The cheapest shortcut available. Never been asked. |
| 16 | IFS / BRC / ISO 22000 status | Gym chains and supplement stores will ask before they list you. |

### 4.3 The parallel enquiries that cost nothing and might change everything

| To | Ask | Payoff |
|---|---|---|
| **Füllkopf (DE)**, `info@fuellkopf.com`, att. **Stefano Sambito** | *"Do you have an EXISTING protein or BCAA formulation we can take under our own label — MOQ and price versus a custom recipe? Does your IFS scope cover dairy-derived ingredients?"* | **The highest-expected-value unasked question in the project.** A "yes" reframes 2027. |
| **Taste Your Brand (DE)**, booking page at /kontakt | Book the **free 30–45 min consultation**. Ask: does the 50 L line **seam only, or seam AND pasteurise**? Cost of 150 × 330 ml? | Fastest route to a real number from someone who owns a can line. Zero cost. |
| **BeverageScouts (AT)**, `office@beveragescouts.com`, +43 2952 36063 | Price for a **1,000-can test filling**, 330 ml Sleek, blank + label, post-fill pasteurised, ARCH F and collagen-only quoted separately, delivered Budapest | Lowest published can MOQ in AT/DE, and the technically correct process. |
| **MONYO, HopTop, Fehér Nyúl, Mad Scientist** | One Hungarian sentence: ***"Ki dobozol nektek — saját soron vagy mobil szolgáltatóval?"*** | Three replies name every canner operating in Hungary. Free. |
| **Ölgerðin (Iceland)** — find the contact on olgerdin.is | *"Do you contract-manufacture or white-label your carbonated collagen can for third parties? MOQ, price, EU export terms?"* **Plus: "What is the fill volume of UPP and of Mist Uppbygging — 330 ml or 355 ml?"** | The only European producer already making this exact product. Even a "no" gives you the only real category benchmark that exists. ⚠️ **UPP's 330 ml format is ASSUMED, not verified** (`29_COMPETITORS.csv`: *"size not confirmed"*), and the "we are 7.6% more concentrated than the standard" argument rests on it. |
| **Private Label Drink** | **Before anything else:** *"What is the operating Kft. name, adószám and plant address?"* | ⚠️ Legal entity unidentified. **Do not pay this company anything until you have checked it in Nemzeti Cégtár / OPTEN.** |
| **Hungarian food lawyer / élelmiszerjogi tanácsadó** | One scoped opinion covering **all FIVE Tier-1 blocking items**, not three: **(a) DRS scope below ~5,000 units** · **(b) does Reg. 853/2004 require a dairy-APPROVED filling plant for 10 g of WPI** — this decides your entire co-packer pool · **(c) ÁFA rate 27 vs 18** · **(d) may free L-leucine and L-tryptophan lawfully be added to a BEVERAGE under Reg. (EC) 1925/2006** — this blocks raw-material purchase · **(e) the nitrogen-factor basis for a front-of-pack "20 g" claim.** NETA scope for a zero-sugar caffeine-free soda is a sixth, cheap add-on. | **The highest-leverage EUR 275 in this project — but only if it is scoped to all five.** The old three-item scope bought an opinion that answered neither the question deciding whether any co-packer can make the product, nor the one deciding whether the formula is legal. `execution/32_EMAILS_HUNGARIAN.md` §7 already contains all five as a ready-to-send brief — use it verbatim. |
| **EP / HU patent attorney — 30 minutes, paid** | *"Does a 20 g carbonated protein can at pH 3.2 with ≥90% whey isolate and ~2.2 vol CO₂ infringe any live European patent in Hungary?"* | ⚠️ **Moved to Gate 1 — BEFORE batch 1 is filled, not before batch 2.** `29_COMPETITORS.csv` names a granted EP whose recited elements batch 1 meets on all three counts and which runs to ~March 2027 — but **that patent number and its claim scope are NOT corroborated anywhere in the research record and must be treated as UNVERIFIED.** ARCH F is **50% whey isolate**, not "collagen-dominant", so the dismissal previously used does not hold. This is the cheapest item in the budget and it is on the critical path while the patent is live. |
| **GS1 Hungary**, gs1hu.org | Fee for the smallest membership package + one GTIN | ⚠️ Unknown cost sitting on the critical path — you cannot finalise artwork without a barcode. **Reseller barcodes may be rejected by MOHU and retailers — use a GS1-issued GTIN.** |

**Send every co-packer the same one-page spec so the quotes are comparable:** **330 ml SLEEK can (Ø ~58 mm), not standard 211**, carbonated 4–5 g/L CO₂, zero sugar, sucralose + acesulfame K, pH ~3.2, 80–100 kcal, **quote ARCH F (10 g collagen + 10 g CLEAR / ACID-STABLE whey isolate — not standard WPI90 — + 1.7 g leucine + tryptophan at the settled dose) AND a collagen-only fallback separately**, **blank cans + shrink sleeve — never printed**, quantities 1,700 / 5,000 / 10,000 / 25,000, **delivered DDP Budapest with inbound freight inside the per-can price**.

---

## 5. GO / NO-GO GATE LIST

Work top to bottom. **Do not pass a gate until it is green. Do not pay for the next gate until the previous one clears.**

### Gate 0 — LEGAL PERSON (before any contract, any deposit)
- [ ] **A legal entity exists that can sign the order and issue an invoice.** ⚠️ **A minor CANNOT be an egyéni vállalkozó (Evectv. 2009. évi CXV. 3. § (2)) and CANNOT be an ügyvezető (Ptk. 3:22 § (1)). No parental consent cures either.**
- [ ] **Cheapest route taken: an existing adult family company, with TEÁOR 4634 + 4725 added.** Fallback: father registers as a **SECONDARY-occupation** egyéni vállalkozó at `https://ugyfelportal.nav.gov.hu/vallalkozoi-ugyseged/main` (portal changed 2026-02-19; nyilvantarto.hu closed to new applications 2026-03-01).
- [ ] ⚠️ **A full-time EV costs 101,682 HUF/month with zero revenue — 1,220,184 HUF/year. That burns the entire capital in under four months. AVOID.**
- [ ] Chamber of commerce contribution paid (5,000 HUF/yr) within 5 days of registration.
- **🛑 NO-GO IF:** the only available signatory is the minor founder. **Stop and fix the structure first.**

### Gate 1 — REGULATORY SCOPE (before artwork goes to print)
- [ ] **Food business notification made and FELIR identifier issued** (free; via the járási hivatal / portal.nebih.gov.hu). **Must be done before the first sale.**
- [ ] **Hungarian food-law opinion obtained, scoped to all FIVE Tier-1 items** (§4.3): DRS scope below ~5,000 units · Reg. 853/2004 dairy-approved-plant question · ÁFA rate · **free amino acid legality** · nitrogen-factor basis for the 20 g claim.
- [ ] **DRS answer is written down and dated.** If DRS applies, **the artwork needs the mark, MOHU registration is required, and a 45-day gate opens.**
- [ ] 🛑 **FREE AMINO ACID LEGALITY ANSWERED IN WRITING** — may 1.7 g L-leucine and free L-tryptophan be added to a normal beverage under Reg. (EC) 1925/2006? **This blocks raw-material purchase.** If the answer is no, drop both (−10.31 HUF/can) and proceed. See §2.5.
- [ ] 🛑 **30-minute EP/HU patent-attorney check completed BEFORE the fill** — not before batch 2. See §4.3.
- [ ] **Free trade-mark sweep of the chosen name in Nice class 32** (and 5/29/30) on TMview + EUIPO eSearch + SZTNH. Cost 0. **Zero trade-mark searches were performed anywhere in this project** and class 32 is one of the most crowded classes there is.
- [ ] **GTIN obtained from GS1 Hungary** (not a reseller barcode). ⚠️ Fee **UNKNOWN — QUOTE REQUIRED**, and it sits on the critical path.
- [ ] Nutrition panel calculated from ingredient specification sheets; allergen declaration includes **MILK** (ARCH F contains WPI).
- [ ] **Tryptophan dose settled** (§2.5) so the spec sheet and the label agree.
- **🛑 NO-GO IF:** the DRS answer is still "probably" when the sleeve goes to print. **This decision is irreversible at the artwork stage.**
- **🛑 NO-GO IF:** the amino-acid question is unanswered and you are about to buy leucine or tryptophan.

### Gate 2 — SUPPLIER (before any deposit)
- [ ] **Written quote in hand**, itemised: filling, cans, sleeve, setup fee, freight, delivered Budapest.
- [ ] **Both MOQs confirmed in writing** — minimum **filling** quantity AND minimum **can purchase** quantity.
- [ ] **Blank cans + shrink sleeve confirmed available.** ❌ **NO-GO on any printed-can quote.**
- [ ] **Dairy question answered in writing:** either the site accepts dairy raw materials (and the changeover surcharge is quoted), **or** you switch to the collagen-only fallback formula.
- [ ] 🛑 **WRITTEN CLEAR-WPI QUOTE *AND* WRITTEN AVAILABILITY CONFIRMATION IN HAND.** Not standard WPI90 — a named clear / acid-stable grade (Arla Lacprodan Clear Whey Isolate, Volac Volactive Pro2O RTM, Agropur BiPRO or equivalent), with **a price per kg at the quantity you will actually buy (~19 kg) and a stated lead time.** ⚠️ **This is the largest unquoted line in the build and it swings the batch by ±50 HUF/can. European producers were reported SOLD OUT in April 2026 — ask the ACCESS question ("will you sell 25 kg to a first-time Hungarian buyer, and when?") before the price question.**
  - **🛑 NO-GO:** no written clear-grade price → **do not pay a deposit.**
  - **🛑 NO-GO:** no written availability/lead time, or a lead time that lands after your production slot → **do not pay a deposit.** A quote you cannot buy against is not a quote.
  - **Acceptable resolution:** the co-packer sources the protein and bills it into the run. **Ask this in the first email** — it removes the sack minimum, the small-lot uplift and the allocation problem in one move.
- [ ] 🛑 **Thermal process AND the resulting AMBIENT shelf life stated in writing** for a pH 3.2, 20 g/can protein matrix.
  - **🛑 NO-GO on cold-fill with no thermal step and no challenge test.** That route gives a fridge-only, days-to-weeks shelf life and would make 1,700 ambient-distributed cans a total loss plus a recall exposure. If the co-packer will only cold-fill, a **microbiological challenge test on the finished can must pass first** — and it must be budgeted.
- [ ] **Certificate of Analysis per batch confirmed in writing.**
- [ ] **Legal entity verified in Nemzeti Cégtár / OPTEN** — company name, adószám, and a physical **plant** address, not an office.
- [ ] Deposit % and payment terms agreed and affordable.
- [ ] ❌ **NO-GO on any demand for 100% prepayment before a signed spec sheet.**
- [ ] ❌ **NO-GO on any contractual annual minimum volume.** MONYO's published 6,000 L/year (~18,180 cans) would destroy the DRS exemption on its own.

### Gate 3 — MONEY (before placing the order)
- [ ] **Total cash confirmed ≥ EUR 3,000** (EUR 2,454 landed batch + EUR 440 setup/legal + ~EUR 106 real contingency), with the **contingency held separately and not spent.**
- [ ] **The quote is DDP Budapest with inbound freight inside the per-can price.** If it is ex-works, add 30 HUF/can before applying the thresholds below.
- [ ] Collagen-only fallback formula costed, so a dairy refusal does not stop the batch.

**One landed-cost ladder. Use it and nothing else:**

| Landed cost from the actual quote | Verdict |
|---|---|
| **≤ 524 HUF/can** | ✅ **Base case. Proceed.** |
| **525 – 545 HUF/can** | ⚠️ **Fundable only by spending the entire contingency.** Renegotiate, cut the batch size, or accept that you have no buffer at all. |
| **> 546 HUF/can** | 🛑 **NO-GO — UNFUNDED.** `DERIVED: EUR 3,000 − EUR 440 setup = EUR 2,560 = 929,280 HUF ÷ 1,700 = 546.6 HUF/can.` You cannot pay the invoice. |
| **> 589 HUF/can** | 🛑 **NO-GO — ARITHMETICALLY IMPOSSIBLE.** `DERIVED: 1,640 sellable × 707.87 = 1,160,907 HUF; less EUR 440 setup = 1,001,187 HUF ÷ 1,700 = 588.9.` Above this the batch **cannot break even even at 899 RRP and 100% sell-through.** |

> ⚠️ **The old no-go trigger of 620 HUF/can was wrong and dangerous.** 620 is the top of the *modelled cost range*, not a funded or survivable number. A 600 HUF quote would have passed the old gate and been both unpayable and unrecoverable. **The modelled range remains 460–620; the FUNDED range is 460–546.**

### Gate 4 — DEMAND (before production, not after)
- [ ] **At least 3 gyms / studios / supplement stores have agreed in writing (email is fine) to take stock on consignment** — at **899 RRP with a gym cut of 100 HUF**, not 160 at 799. See the forbidden-deal box in §3.
- [ ] **A route to 1,405 sold cans exists on paper** — that is break-even on total cash deployed, and it is **86% of your 1,640 sellable cans.**
- [ ] **60 cans budgeted as free samples — HARD CAP** — and allocated to named prospects, not handed out at random. **Above ~295 free cans there is not enough sellable stock left to reach break-even at any sell-through.**
- [ ] Price tested verbally at **899 HUF** against NOCCO (690–940 HUF) and Barebells (890–999 HUF) with at least five real gym-goers. **Ask what the most expensive drink in their gym fridge costs before you name your price.**
- **🛑 NO-GO IF:** you cannot name where the first 500 cans go. **1,700 cans in a garage is not a business, it is 890,800 HUF of inventory.**

### Gate 5 — PRODUCT (before the full run, if the supplier allows it)
- [ ] A tasting sample of the actual formula has been made and tasted — via the co-packer's demo stage, a **Taste Your Brand 50 L prototype (~150 cans)**, or a kitchen-scale mix.
- [ ] **Clarity confirmed at pH 3.2** — no haze, no sediment after 48 h cold and 48 h ambient.
- [ ] Carbonation level agreed with the filler (**4–5 g/L CO₂**).
- [ ] Shelf-life claim agreed with the filler and matched to the thermal process. **Never claim a shelf life the process does not support.**
- **🛑 NO-GO IF:** nobody has tasted it. **Do not produce 1,700 cans of a drink you have never drunk.**

---

## 6. IF THE GATES FAIL — the fallback ladder

> ### 🛑 ONE AFFORDABILITY RULE FOR MOQ. IT OVERRIDES EVERY SUPPLIER PREFERENCE.
> **Maximum acceptable MOQ = (capital available for inventory) ÷ (quoted landed cost per can) — and in no case above 4,000 cans in year one.**
>
> At the base-case 524 HUF and EUR 2,560 of inventory capital that is **1,773 cans.** At 3,000 cans you would need **EUR 4,331** of inventory. At 5,000 cans, **EUR 7,218.** You have EUR 3,000 in total.
>
> **The 4,000-can hard ceiling is separate and regulatory:** it keeps you inside the 4,500-can DRS working cap that `10_DRS_REPONT.md` recommends, with room for nothing else in the year.
>
> **This corrects three different answers previously given in this project** — "≤2,500" (00), "3,000–5,000, take it" (13 and this file), "stay under 4,500" (10). **There is one rule. It is the one above.**

| If | Then |
|---|---|
| **Opre' quotes above budget or has no real one-pallet MOQ** | Go to **Bubee**. **If Bubee's MOQ is 3,000 cans or more, that is a NO-GO at current capital, not a promotion to #1** — 3,000 cans is EUR 4,331 of inventory against EUR 2,560 available. Ask them for a **trial / part-batch route** instead. Only if they can go to ~1,800 cans do they become the launch partner. |
| **Both refuse dairy on site** | Switch batch 1 to the **collagen-only fallback formula**. You lose the complete-protein claim, you keep the batch. Have this formula and its costing ready **before** you send the RFQs. |
| **No filler will go below ~6,000 cans** | ❌ Do not stretch. **6,000 cans is EUR 8,662 of inventory against EUR 2,560 of capital, and it breaks the 5,000-unit DRS exemption** — adding registration, a 45-day gate, a deposit float and a DRS mark to the artwork. **Never volunteer a 6,000-can run in a negotiation email**, whatever the per-can price looks like. |
| **Total cash lands above EUR 3,000 and cannot be closed** | **Do the powder stick-pack SKU first: ~1,000 sachets, EUR 650–1,570.** It is the only route that fits EUR 1,000, it carries none of the can's four risks, it sells into the same gyms at a comparable price (ProteinaCo: 790 HUF for one 25 g clear-whey serving), and **the ~EUR 1,200–1,400 it returns is what funds the can run.** Email **TUTTI Kft.** (tutti.hu/bergyartas) for the setup fee — that one number decides it. |
| **You need something physical in hand this quarter and nothing else has cleared** | **Taste Your Brand, ~150 cans from a 50 L prototype.** Not sellable stock unless they pasteurise — but it buys tastings, photography, an investor sample and a Hungarian label test. **Book the free consultation this week regardless.** |

---

## 7. THE HONEST HEALTH WARNING

**Every euro figure in this file is arithmetic on estimates, or a journalist's craft-lemonade benchmark. Not one supplier price per can was obtained anywhere in this research programme.** The four MOQ figures the plan rests on — one pallet, 1,500 units, 1,000 test cans, 2,000 L — all came from search-engine extracts of pages nobody was able to open. **"One pallet" is not even a can count: our own two derivations of it differ by 1,200 cans.**

**The 524 HUF landed cost has no external corroboration.** Its largest single line — clear/acid-stable whey isolate at 163.90 HUF/can — is an index-plus-25%-premium estimate with no published price behind it anywhere, in a market the same research says was **sold out**. The previously-printed "two independent routes to the same number" validation was circular and referred to a **collagen-only** product. It has been deleted.

**The first written quote will destroy or confirm this model. Get it before you spend anything except the classification opinion.**
