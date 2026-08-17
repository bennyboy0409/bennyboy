# 03 — PRODUCT ARCHITECTURE
## What goes in the can, why, and what it costs
**330 ml aluminium can · carbonated · clear · zero sugar · 20 g protein · Lemon-Lime · one SKU**
Date: 2026-08-16 · FX: **1 EUR = 363 HUF** · Nothing in this file is commercially validated. Read §9 before you spend money.

---

## 1. THE DECISION

> ## **ARCH F — 10 g hydrolysed bovine collagen + 10 g whey protein isolate + 1.7 g free L-leucine + 150 mg free L-tryptophan.**
> ## Ingredient cost **212.76 HUF / €0.586 per can** at pilot volumes; **197.99 HUF / €0.545** at scale.
> ## Declared protein **20 g** (recipe delivers ~21 g measurable — see §6). Declared energy **~80 kcal**.

**Why F and not the others, in one line each:**

| | |
|---|---|
| **Not ARCH E (20 g all clear whey)** | **268–334 HUF of ingredients alone.** E2 alone exceeds the 350 HUF absolute COGS ceiling before the can. Working forward at gym-channel margins it needs a **1,500–1,900 HUF RRP** — roughly **2× the 899 HUF founder ceiling**. Dead. |
| **Not ARCH A (20 g collagen only)** | 136.54 HUF, cheapest 20 g on the board — and **DIAAS ≈ 0, leucine 0.50 g, tryptophan zero**. Sold into Hungarian gyms as "20 g protein" this is the fastest way to lose the channel. |
| **Not ARCH C (10+10, unspiked)** | Same cost minus 10.3 HUF, but leucine only **1.30 g** — under the ~2.5–3.0 g threshold that the informed buyer checks. The spike is the cheapest credibility in the whole product. |
| **Not ARCH G (12–15 g protein)** | Cheaper and technically safer, but abandons the 20 g headline. See §8 — this is the live disagreement in the research and you should know about it. |
| **ARCH F** | The **only architecture that holds 20 g, stays optically clear at pH 3.2, and puts 3.0 g of leucine on the spec sheet** — for 10.31 HUF more than the unspiked blend. |

**The single load-bearing physical fact:** ARCH F puts only **10 g of whey into 330 ml = 30.3 g/L**. That is inside the ~30–45 g/L corridor where clear whey behaves. ARCH E puts **60.6 g/L** in — outside it. Collagen carries the other 10 g and is trivially clear at any pH. *(Reasoning: TEXTBOOK — HIGH CONFIDENCE, UNVERIFIED; ceiling NEEDS BENCH CONFIRMATION.)*

---

## 2. THE FIVE ARCHITECTURES, COMPARED

All ingredient costs are **per 330 ml can, protein line + full non-protein deck (6.19 HUF)**. PILOT = 25 kg collagen tier at the Hungarian list price; SCALE = 1 t tier. Whey held at the **July 2026 DCA index (€32,500/t WPI90)** in both tiers — in a sold-out market a 25 kg buyer pays a premium, not a discount, so **every whey-containing number below is optimistic**.

| | **ARCH A** | **ARCH C** | **ARCH E** | **ARCH F** ⭐ | **ARCH G1+** |
|---|---|---|---|---|---|
| **Composition** | 20 g collagen | 10 g collagen + 10 g WPI | 20 g clear WPI | 10 g collagen + 10 g WPI + 1.7 g Leu + 150 mg Trp | 15 g total: 10 g collagen + 5 g WPI + 1.5 g Leu + 30 mg Trp |
| **Declared protein** | 20 g | 20 g | 20 g | **20 g** (≈21 g measurable) | 16 g |
| **Powder per can** | 22.22 g | 22.22 g | 22.22 g | **24.07 g** | 18.37 g |
| **Whey g/L in can** | 0 | 30.3 | **60.6** | **30.3** | 15.2 |
| **Ingredients, PILOT (HUF)** | **136.54** | **202.45** | **268.36** (E1) / **333.90** (E2) | **212.76** | **145.52** |
| **Ingredients, PILOT (EUR)** | €0.376 | €0.558 | €0.739 / €0.920 | **€0.586** | €0.401 |
| **Ingredients, SCALE (HUF)** | 107.03 | 187.69 | 268.36 / 333.90 | **197.99** | 130.76 |
| **Ingredients, SCALE (EUR)** | €0.295 | €0.517 | €0.739 / €0.920 | **€0.545** | €0.360 |
| **Leucine per can** | 0.50 g | 1.30 g | 2.10 g | **3.00 g** | 2.28 g |
| **Tryptophan per can** | **0 mg** | 135 mg | 270 mg | **285 mg** | 98 mg |
| **DIAAS** | **≈ 0** | not computed — see §5 | ~1.09–1.20 | not computed — see §5 | not computed |
| **Clear at pH 3.2?** | ✅ trivially | ✅ | ⚠️ E1 grade-dependent; ✅ E2 — **but at 60.6 g/L clarity degrades over shelf life** | ✅ | ✅ |
| **Taste risk** | MEDIUM — faint broth/savoury note at 6.7% w/v peptides | MEDIUM | **HIGH** — astringency scales with protein × acidity; 60 g/L at pH 3.2 is markedly drying. Plus documented **soapy off-flavour** in clear acidic whey RTDs | **MEDIUM** — collagen note + free-leucine bitterness; both maskable with citrus | MEDIUM |
| **Foam risk at filler** | LOW–MEDIUM | MEDIUM | **HIGH** — whey is the food industry's best foaming agent; 60 g/L can stop a small canning line | **MEDIUM** | LOW–MEDIUM |
| **Gym credibility** | 🔴 RED | 🟢 GREEN-AMBER | 🟢🟢 PERFECT | 🟢 **GREEN** | 🟢 GREEN |
| **Verdict** | REJECT for gym channel | Good, but under-leucined | **REJECTED — price** | ✅ **BUILD THIS** | Fallback if quotes come in high |

**Cost derivations (so you can re-run them when quotes land):**

```
Collagen powder, 10 g protein at 90% (N×6.25) spec  = 10 ÷ 0.90 = 11.111 g
   PILOT  11.111 g × 5.866 HUF/g  =  65.18 HUF
   SCALE  11.111 g × 4.538 HUF/g  =  50.42 HUF
WPI90 powder, 10 g protein at 90%  = 10 ÷ 0.90 = 11.111 g
          11.111 g × 11.7975 HUF/g = 131.08 HUF   (both tiers)
L-leucine  1.70 g × 5.6488 HUF/g   =   9.60 HUF
L-tryptophan 0.150 g × 4.7073 HUF/g =   0.71 HUF
Non-protein deck (acid+flavour+sweetener+sorbate)  =   6.19 HUF
                                        PILOT TOTAL  212.76 HUF = €0.586
                                        SCALE TOTAL  197.99 HUF = €0.545
```
**Status of the inputs:** collagen 5,866 HUF/kg = **PUBLIC LIST PRICE** (FloraVita HU, 20 kg bag, 149,000 HUF gross ÷ 1.27 ÷ 20). Collagen 1 t tier = **ESTIMATE** anchored on a published GELITA €12.50/kg figure. WPI90 €32,500/t and WPC80 €27,500/t = **PUBLISHED MARKET INDEX** (DCA Market Intelligence, Jul 2026, search-extracted). Leucine USD 18/kg and tryptophan USD 15/kg = **PUBLISHED MARKET INDEX corridor midpoints**. All of them: **QUOTE REQUIRED before you buy.**

---

## 3. THE ICELAND TEARDOWN — UPP, and what it actually proves

**The reference product is UPP**, launched **June 2026** by **Ölgerðin Egill Skallagrímsson hf.** (Reykjavík, Nasdaq Iceland: OLGERD), co-developed with **World Class** (Iceland's largest gym chain, 20 sites) and agency **Brandenburg**. Carbonated, canned, **20 g protein, 0 g sugar, 0 g carbohydrate, caffeine-free**, flavours *jarðarberja* (strawberry) and *límónu* (lime). **SEARCH-VERIFIED** from olgerdin.is, vb.is and uppupp.is; pages not opened directly.

**The protein system — branded "Dual Pwr System™":**

| Component | What it is |
|---|---|
| **Arla Foods Ingredients Lacprodan® BLG-100** | A **crystallisation-purified single-fraction β-lactoglobulin** — not WPI90, not WPC. Arla markets it as *"a clear whey protein isolate that works perfectly in sparkling concepts and gives less bitterness for a clear, transparent soda"*, heat-stable, usable to *"up to 23% concentration"*. **SEARCH-VERIFIED** (arlafoodsingredients.com, uppupp.is, priceplow). |
| **Hydrolysed collagen peptides** | The other half. |

**The reconstruction, done three ways — this is the important part:**

```
Solve  0.90x + 0.97y = 20   (x = g isolate powder at 90% protein, y = g collagen powder at 97%)

Equal PROTEIN contribution (10 g each):
   x = 10 ÷ 0.90 = 11.11 g isolate = 3.37% w/v
   y = 10 ÷ 0.97 = 10.31 g collagen = 3.12% w/v
   total protein powder = 21.42 g = 6.49% w/v

CALORIE CROSS-CHECK — the proof:
   20 g protein × 4 kcal/g = 80 kcal.   Declared: ~80 kcal.   EXACT MATCH.
```

> **Every single calorie in the UPP can is protein.** No fat, no sugar, no glycerol, no maltodextrin, no juice. That one arithmetic check tells you the whole formulation: **water + CO₂ + two protein powders + acid + high-intensity sweetener + flavour + preservative. Nothing else.** *(DERIVED. Ingredient list not photographed — see §9.)*

**≈50% of UPP's "20 g protein" is collagen** (9.60–10.00 g of 20 g). The founder's instinct was right. Ölgerðin does not hide it — it **names** the architecture and frames collagen as connective-tissue support rather than muscle protein. **Copy the framing, do not copy the concealment.**

**The cheaper sister product, and the price benchmark:** **Mist Uppbygging** (also Ölgerðin) — 330 ml sleek can, **15 g hydrolysed collagen, zero whey**, ingredient list: carbonated water, **hydrolysed collagen (5%)**, citric acid, **potassium sorbate**, **sucralose**, natural flavour, yerba maté, natural caffeine, B-vitamins, purple-carrot colour. Reconciles to the gram: 0.05 × 330 g = 16.5 g collagen × 0.90 = 14.85 g → declared 15 g. Shelf price **1,656 ISK / 6-pack = 276 ISK/can = 704.5 HUF equivalent**, deposit and 11% VAT included. **PUBLIC LIST PRICE (search-extracted, kronan.is).**

**Three things the teardown proves, and one it disproves:**

1. **The 20 g clear protein soda is real and it is a whey+collagen blend.** Not a milkshake, not a haze product. *Confirms ARCH F's shape.*
2. **Potassium sorbate on the Mist label is strong circumstantial evidence of a COLD-FILLED, unpasteurised process.** A pasteurised product usually doesn't need a chemical yeast control, and brands avoid preservative declarations when they can. If they are carrying the label cost of E202, they are almost certainly not applying heat. **LIKELY inference — this is the single most valuable read in the dossier because it validates the cheap process route.** See `05_FOOD_CHEMISTRY.md` §7.
3. **UPP's shelf price is UNKNOWN — QUOTE REQUIRED.** The product is 10 weeks old and in no reachable catalogue. Modelling it forward from a ~328 HUF ex-works COGS through Icelandic margins, deposit and 11% VAT predicts **~350–420 ISK on shelf (~940 HUF equivalent)**, sitting alongside the verified NOCCO price of 349 ISK. **ESTIMATE.**
4. **DISPROVED: the "~200 ISK Icelandic protein can" premise.** No Icelandic protein can retails at 200 ISK. The verified floor is 276 ISK. **Delete that number from every planning document.**

**And the part that hurts:** Ölgerðin hits ~218–283 HUF ex-works COGS because it owns the can line, the syrup room, the QA lab, the national distribution fleet, the retail listings, and a ~EUR 35 m EBITDA balance sheet, and buys whey in tonne lots on forward contracts. **Iceland does not prove this is easy. It proves the opposite.** The one free thing worth copying: *Ölgerðin did not launch into cold retail — it co-developed with the largest gym chain in the country and had guaranteed placement on day one.*

---

## 4. THE HONEST NOTE ON CONCENTRATION — 330 ml is a harder can than 355 ml

| Format | 20 g protein equals | vs 330 ml |
|---|---|---|
| **330 ml (this product)** | **60.61 g/L** | — |
| 355 ml (12 oz — the US clear-protein-soda format: Be LOVE, Prox) | 56.34 g/L | **+7.6% more concentrated in our can** |
| 500 ml (the European clear-whey RTD convention, 20–25 g) | 40–50 g/L | **+21–52% more concentrated in our can** |

**DERIVED:** 20 ÷ 0.330 = 60.61; 20 ÷ 0.355 = 56.34; 60.61 ÷ 56.34 = 1.076.

**What this costs us, stated plainly:** every problem in this product — haze, astringency, foam at the filler, sediment over shelf life — **scales with g/L, and 330 ml is the least forgiving mainstream format for a 20 g claim.** The category converged on 40–50 g/L in 500 ml because that is where the physics stops fighting back. We are choosing 330 ml because it is the soda format, the deposit-free format we want, and the format the Icelandic reference uses — but we are choosing the harder version.

**ARCH F is what makes 330 ml survivable.** The whey — the only fraction that actually causes haze, astringency and foam — sits at **30.3 g/L**, comfortably inside the safe corridor. The collagen fraction contributes essentially nothing to any of those failure modes. **We are not running a 60 g/L whey drink. We are running a 30 g/L whey drink with 30 g/L of inert clear peptides alongside it.** That is the entire technical argument for the blend, and it is why ARCH F works where ARCH E does not.

**Total dissolved solids are still high:** 24.07 g of protein-source powder in 330 ml = **7.29% w/v** (vs UPP's ~6.5%). Expect a slightly "full" mouthfeel. **This must be bench-tested — it is not proven.**

---

## 5. PROTEIN QUALITY — what you are actually selling

| Metric | Collagen peptides | Whey isolate | Source |
|---|---|---|---|
| **DIAAS as sole protein** | **effectively 0** | **~1.09–1.20** | proteinbenchmark.com/collagen; ACSH Mar 2026 review — **SEARCH-VERIFIED** |
| **Tryptophan** | **ZERO — absent** | ~1.3–1.4 g/100 g protein | ACSH 2026 |
| **Leucine** | **~2.5 g/100 g protein** | **~10.5 g/100 g protein** | ACSH 2026 |
| **Raises muscle protein synthesis?** | **No — not even when leucine-matched to whey** | Yes, above placebo | Randomised trials cited in ACSH review |
| **Raises connective-tissue protein synthesis post-exercise?** | **No** | — | PMC10487367 |

**Why collagen's DIAAS is zero and why that is not a rounding artefact:** DIAAS scores a protein on its **limiting** indispensable amino acid. Collagen's tryptophan content is zero. Zero divided by anything is zero. Collagen is not "a slightly worse protein" — as a *muscle* protein it is, by the reference scoring system, worth nothing. Its evidence base is skin, joint and connective tissue, and even that is under active attack: a **June 2026 large-scale review** found *"little evidence that collagen improves exercise performance or recovery"* and *"no meaningful benefits for post-exercise muscle recovery, muscle soreness, or the mechanical properties of tendons."* **SEARCH-VERIFIED** (sciencedaily.com, Jun 2026).

**DIAAS OF THE ARCH F BLEND: NOT COMPUTED — NEEDS PROFESSIONAL CONFIRMATION.** It cannot be averaged from the two component scores; it must be computed from the blended amino-acid pattern using the **actual supplier AA profiles**, which we do not have. Directionally it will be **materially above zero and materially below whey**, because whey is exceptionally tryptophan-rich and covers collagen's single fatal gap. **Do not put a DIAAS number on a label, a pitch deck or a website until an accredited lab has computed it from the finished product.**

### The amino-acid spike — the best 10 HUF in the entire product

**Leucine gap arithmetic (DERIVED):**
```
Whey     10 g protein × 105 mg/g = 1,050 mg leucine
Collagen 10 g protein ×  25 mg/g =   250 mg leucine
                        subtotal = 1,300 mg
Leucine threshold for maximal MPS in one serving ≈ 2,500–3,000 mg
Deficit to 3,000 mg = 1,700 mg = 1.7 g free L-leucine
Cost: 1.7 g × 5.6488 HUF/g = 9.60 HUF (€0.026)
Solubility: 1.7 g ÷ 0.330 L = 5.15 g/L  vs  L-leucine solubility 22–24 g/L at 25 °C  ✅ SAFE
```
**Result: 3.00 g leucine per can.** That is a number an informed lifter checks, respects, and can verify with a lab report — and it converts the collagen content from a liability into a non-issue.

**Tryptophan (DERIVED):**
```
FAO reference pattern ≈ 7.5 mg Trp per g protein → 20 g protein needs 150 mg
Whey contributes     10 g × 13.5 mg/g = 135 mg
Collagen contributes 10 g ×    0      =   0 mg
                              deficit =  15 mg
Plan specifies 150 mg free L-tryptophan → total 285 mg
Cost: 0.150 g × 4.7073 HUF/g = 0.71 HUF (€0.002)
Solubility: 0.45 g/L vs ~11 g/L limit ✅ trivially safe. Sensorially silent at this level.
```
**Note honestly:** the arithmetic only requires **15–25 mg** to close the gap. The plan's 150 mg is a **deliberate ~10× safety margin costing 0.6 HUF extra**. Keep it for batch 1 (analytical margin is worth more than 0.6 HUF), then reduce it after the finished-can lab analysis if you want a shorter ingredient list. Either choice is defensible.

⚠️ **REGULATORY FLAG — DO NOT SKIP.** Adding **free L-leucine and free L-tryptophan** to a beverage (as opposed to a food supplement) may be governed by **Regulation (EC) No 1925/2006** on the addition of vitamins, minerals and certain other substances to foods, and by national Hungarian rules. **I could not verify their status. NEEDS PROFESSIONAL CONFIRMATION before artwork or production.** This is the single biggest unresolved question hanging over ARCH F, and it is a cheap question to ask a Hungarian food-law consultant. If free amino acids turn out to be restricted, the fallback is **ARCH C unspiked (202.45 HUF)** with the leucine claim dropped.

### The credibility rule that falls out of all this

> **Collagen in a disclosed blend is commercially normal and survives scrutiny. Collagen-only, sold as a muscle protein, is a lie the 2026 gym audience will catch.**

Precedent, verified: **Myprotein sells "Clear Protein Whey & Collagen" in Hungary today** — 21 g protein, whey + collagen peptides, named in the product title. That is ARCH C, on sale, in this market, by the category leader. **SEARCH-VERIFIED** (myprotein.hu). Also **Be LOVE "Power + Restore"** (12 oz, 15 g = 13 g clear whey isolate + 5 g collagen, disclosed on-pack).

**Therefore, mandatory on the front of the can:**
> **20 g PROTEIN — 10 g whey isolate + 10 g collagen peptides + 3 g leucine**

Not on the back. Not in 6-point type. **Front.** This converts an ambush into a positioning statement, and it is the only version of this strategy that survives contact with the Hungarian fitness community — where the informed segment is realistically **20–35% of core buyers and sets the tone for the rest.**

**One legal point you may not use:** **EFSA has authorised no health claims for collagen.** No "supports joints", "supports skin", "supports recovery". Marketing stays on nutrition claims (**HIGH PROTEIN / MAGAS FEHÉRJETARTALMÚ**, zero sugar, low calorie) and non-claim brand language. *(SEARCH-VERIFIED; NEEDS PROFESSIONAL CONFIRMATION of the current EU Register position.)*

---

## 6. THE LABEL ARITHMETIC

**"HIGH PROTEIN" is safe and free.** Reg (EC) 1924/2006 requires ≥20% of energy from protein. **DERIVED:** 20 g × 4 kcal = 80 kcal of 80–100 kcal total = **80–100% of energy from protein**, i.e. clear by a factor of four to five. *(Threshold figure: SEARCH-VERIFIED, primary text not read — NEEDS PROFESSIONAL CONFIRMATION.)*

**Protein is nitrogen, not quality.** Reg (EU) 1169/2011 Annex I defines protein as **total Kjeldahl nitrogen × 6.25**. There is no DIAAS, PDCAAS or completeness qualifier. **Collagen nitrogen counts identically to whey nitrogen, and so does free-amino-acid nitrogen.** This is why the declaration works — and why the honesty problem in §5 is a *marketing* problem, not a legal one. *(SEARCH-VERIFIED; point number given as Annex I point 8 in one dossier and point 11 in another — **the two dossiers disagree; read the Annex before citing a point number**.)*

**Declare 20 g, deliver ~21 g — deliberately.**
```
Intact protein                                = 20.00 g
+ L-leucine   1.7 g × 66.7% (N×6.25 of C₆H₁₃NO₂) =  1.13 g
+ L-tryptophan 0.15 g × 85.7% (2 N atoms)     =  0.13 g
                              MEASURABLE TOTAL ≈ 21.26 g
```
**Declare 20 g.** The ~1.3 g of headroom means an accredited Kjeldahl/Dumas result on the finished can will never fall *below* the declaration — which is the direction that gets you a NÉBIH problem. **DERIVED. The finished-can nitrogen analysis is legally required to justify the claim; do not declare from a recipe calculation.**

**Energy:** at 21.26 g measurable protein × 4 kcal/g = **85 kcal actual**, declared ~80 kcal on a 20 g declaration. Confirm the declaration basis and tolerance treatment with a food-law consultant. **NEEDS PROFESSIONAL CONFIRMATION.**

**Allergen:** **milk** (from the WPI) is an Annex II allergen and must be emphasised (bold) in the ingredient list. In the artwork from version 1. Collagen source must be stated as **bovine**.

---

## 7. WHY EVERY OTHER PROTEIN WAS REJECTED

| Ingredient | HUF per g declared protein | Killed by |
|---|---|---|
| Soy protein isolate | **2.01** | **Opaque at pH 3.2** (pI 4.5), beany off-note, Annex II allergen, phyto-oestrogen perception in CEE gyms |
| **Bovine gelatine** | **2.36** | **It gels in the can.** The Bloom test is *defined* at 6.67% w/v, cooled to 10 °C — our can is 6.9% w/v sold from a gym fridge at 4–8 °C. Those are literally the gelling test conditions. **Full hydrolysis is mandatory and unconditional.** |
| Pea protein isolate | 3.21 | Opaque at pH 3.2 (pI ~4.5), earthy note, gritty |
| Rice protein isolate | 4.81 | Chalkiest of the plant proteins, visible sediment, cereal note |
| **Collagen peptides (25 kg / 1 t)** | **6.52 / 5.04** | ✅ **USE** — clear at any pH, non-gelling, heat-stable, low-foam, **not in the dairy shortage** |
| Whey powder (12% protein) | 5.14 | 167 g of powder into 330 ml, ~120 g of it lactose. Physics. |
| **L-leucine / L-tryptophan** | 5.65 / 4.71 | ✅ **USE AS SPIKE ONLY** (≤2.5 g leucine) |
| Whey permeate | 7.67 | 571 g into 330 ml — more mass than the water |
| **WPC80** | **12.48** | **~4–8% fat + 4–8% lactose → permanent milky haze + Maillard browning fuel.** Not usable in a clear can at any price. |
| **WPI90 (standard)** | **13.11** | ✅ **USE** — but grade-dependent; "standard WPI" ≠ "clear WPI" |
| Whey hydrolysate DH>20 | 15.49 | *More* expensive than WPI90 **and** bitter. No scenario where it wins. |
| Clear WPI (branded) | 16.39 **ESTIMATE** | ✅ best clarity, premium price — quote it |
| MPI / micellar casein | — | **pI 4.6. To reach pH 3.2 you must pass through 4.6, and the casein flocculates irreversibly on the way.** Do not let a co-packer suggest a "milk protein blend". |
| BCAA/EAA-declared protein | — | 29 g of free AAs needed for a 20 g declaration = **2× leucine's solubility limit**, undrinkably bitter, and it is amino spiking |

> **THE DECISIVE RATIO: collagen delivers declared protein at 5.04–6.52 HUF/g; the cheapest whey that can go in a clear can delivers it at 13.11 HUF/g. Over 20 g that spread is 132–227 HUF per can.** This single ratio determines whether the product exists.

**And the market context you are launching into:** EU **WPC80 went €12,500/t (Oct 2025) → €20,250/t (Apr 2026) → €27,500/t (Jul 2026)**; **WPI90 €20,500 → €25,750 → €32,500/t** over the same period. European manufacturers are reported **sold out**, with most not having sold new volumes since the €17,000/t level. *(PUBLISHED MARKET INDEX — DCA Market Intelligence, search-extracted 2026-08-16.)* **A first-time buyer asking for 25–100 kg of WPI in a sold-out market is at the back of the queue and will pay a premium above index, if anyone sells at all.** Collagen comes from hides, not milk, and is **not** in this shortage — no 2026 collagen price spike was found. **That decoupling is the entire commercial opportunity in this product.**

⚠️ **Before you commit to ARCH F, confirm you can actually BUY 25 kg of clear WPI.** Availability, not price, is the live risk. If the answer is no, drop to **ARCH G1+ (5 g whey)** or **ARCH A+ (collagen + full amino spike)** rather than delay the whole launch.

---

## 8. THE DISAGREEMENT YOU SHOULD KNOW ABOUT

**The protein-cost research recommends ARCH G1+ (15 g protein) as the primary architecture, not ARCH F (20 g).** Its argument: at pilot volumes the realistic ingredient budget is **130–150 HUF/can**, ARCH F is **212.76 HUF**, and "HIGH PROTEIN" is legally available at 15 g just as it is at 20 g — so the 20 g headline costs ~67 HUF/can of pure marketing.

**The agreed plan overrides this and takes ARCH F at 20 g.** That is a defensible call, but understand exactly what you are buying and what settles it:

| | ARCH F (20 g) — the plan | ARCH G1+ (16 g) — the research's pick |
|---|---|---|
| Ingredients, pilot | **212.76 HUF / €0.586** | **145.52 HUF / €0.401** |
| Delta | — | **−67.24 HUF / −€0.185 per can** |
| On a 1,700-can batch 1 | — | **−114,308 HUF / −€315 total** |
| Headline | **20 g** — matches UPP, matches Myprotein's 21 g | 16 g — matches Be LOVE's 15 g |
| "HIGH PROTEIN" claim | ✅ | ✅ (protein = ~92% of energy) |
| Leucine | 3.00 g | 2.28 g |
| Whey g/L | 30.3 | 15.2 — technically even safer |

**The test that settles it:** get the **can + tolling quotes** first. Ingredient budget = COGS ceiling − can − everything else.
- If **can + tolling + pack + freight ≤ ~100 HUF/can** → ARCH F fits. Build it.
- If it lands **higher** → you are choosing between ARCH F and your margin. At that point **ARCH G1+ is the disciplined answer** and the 4 g of headline is what you sell to keep the business alive.

At the plan's **~491 HUF landed COGS**, ingredients are **43% of the total**. That is a workable ratio, but it leaves very little room for a can quote that comes in high. **Do not order collagen or whey before the can and tolling quotes are in writing.**

---

## 9. WHAT IS NOT PROVEN — READ THIS BEFORE SPENDING

**No formulation in this file has been made, tasted, filled, or stored. Nothing here is commercially validated.** Specifically:

| Claim | Status |
|---|---|
| ARCH F is optically clear at pH 3.2 at 7.3% w/v total solids | **UNPROVEN — bench test required.** Reasoning is sound (whey at 30 g/L, peptides inert) but the total solids load is above the Icelandic reference's 6.5% |
| The drink is palatable (astringency, collagen note, leucine bitterness) | **UNPROVEN — blind panel required.** This is the most likely reason a first formulation fails |
| It fills without foaming on a small counter-pressure line | **UNPROVEN — the biggest manufacturing risk.** See `05_FOOD_CHEMISTRY.md` §6 |
| It survives 6–9 months without haze or sediment | **UNPROVEN — real-time storage study required** |
| Free L-leucine and L-tryptophan may lawfully be added to a beverage in Hungary | **NEEDS PROFESSIONAL CONFIRMATION — Reg (EC) 1925/2006** |
| Clear WPI is actually purchasable in 25 kg lots in Aug 2026 | **QUOTE REQUIRED — availability, not just price** |
| Collagen at 90% vs 97% protein spec | **QUOTE REQUIRED.** A 97% spec needs 20.62 g not 22.22 g for 20 g protein — **saves ~9.4 HUF/can. Always buy on protein spec, not price per kg.** |
| Every ingredient price in §2 | **Search-extracted or index-derived. Not one is a quote to you.** |
| Whey index price as of Aug 2026 | **Figures are July 2026. In a market moving €7,000/t per quarter this ages fast.** |
| UPP's shelf price, full ingredient list, exact protein split | **UNKNOWN.** One photograph of the back of a UPP can is worth more than a week of desk research. |

**The research constraint you must factor in:** every primary source (EU legal texts, EFSA, supplier datasheets, NÉBIH, all supplier websites) was blocked by the network egress policy during this project. Everything above came from search-result extracts. **Nothing here is tagged CONFIRMED. Do not upgrade a tag.**

**Next three actions, in order, before any ingredient is bought:**
1. Send the **supplier technical brief** (in `05_FOOD_CHEMISTRY.md` §11) to collagen and clear-WPI suppliers. Ask for **1–5 kg samples**.
2. Get **can + tolling quotes** from Opre Label and Bubee — the ARCH F / G1+ decision (§8) hangs on them.
3. Run the **bench matrix** in `05_FOOD_CHEMISTRY.md` §10. Beakers, a pH meter and five willing tasters. It is the highest-return money in this entire project.
