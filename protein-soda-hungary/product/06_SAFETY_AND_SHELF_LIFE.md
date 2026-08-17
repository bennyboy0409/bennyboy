# 06 — SAFETY, TESTING AND SHELF LIFE
## The cheapest legitimate way to prove this drink can be sold

**Product:** 330 ml aluminium can, carbonated, clear, zero sugar, **20 g protein** — Formula ARCH F (10 g hydrolysed bovine collagen + 10 g whey protein isolate + 1.7 g L-leucine + 150 mg L-tryptophan), Lemon-Lime, one SKU, **no caffeine**.
**Batch 1:** ~1,700 cans. **FX: 1 EUR = 363 HUF.** Date: 2026-08-16.

---

# 1. THE ANSWER IN ONE BOX

> **Target external laboratory spend for batch 1: 0 HUF / EUR 0.**
> **Hard ceiling if you decide to buy insurance anyway: 54,450 HUF / EUR 150.**
>
> You are very probably not legally required to buy a single laboratory test to sell batch 1 in Hungary. The three things that replace testing are all free: **(1) a nutrition table built by calculation under Reg. (EU) 1169/2011 Art. 31(4)**, **(2) the co-packer's own release micro and Certificate of Analysis**, and **(3) a short best-before date backed by cans you store in a cupboard yourself.**
>
> `Status of the overall position: LIKELY — see §2 for the tag on each limb. The Art. 31(4) point must be confirmed in writing in the classification opinion before you print artwork.`

**What this saves:** the finance file already books this. `finance/18_COMPLETE_STARTUP_COSTS.csv` line "Nutrition analysis (laboratory)" = **0 HUF / EUR 0, NOT REQUIRED**, avoiding **EUR 800–2,000 / 290,400–726,000 HUF**. This file is the justification for that line. `DERIVED from the avoided-cost range recorded in the cost file; the range itself is ESTIMATE — no Hungarian lab price could be sourced (see §9).`

---

# 2. THE LEGAL SAVER — READ THIS BEFORE YOU SPEND ANYTHING

## Reg. (EU) No 1169/2011, Article 31(4)

> **The declared nutrition values shall, according to the individual case, be average values based on:**
> **(a) the manufacturer's analysis of the food;**
> **(b) a calculation from the known or actual average values of the ingredients used; or**
> **(c) a calculation from generally established and accepted data.**

**`CONFIRMED-BY-SEARCH`** — the provision and its three-route structure were established by search during research; **the verbatim wording was NOT read from EUR-Lex, because eur-lex.europa.eu returned 403 to every request in this project.** CELEX **32011R1169**.

**Three consequences, and they are worth more than every other line in this file combined:**

| # | Consequence | Why it matters to you |
|---|---|---|
| 1 | **(a), (b) and (c) are alternatives, not a hierarchy.** | A nutrition panel produced with a spreadsheet is **exactly as compliant** as one produced by WESSLING. There is no legal preference for the lab. |
| 2 | **The declared figure is an *average value*, not a measurement of any individual can.** | It is a calculated construct even when a lab is used. Nobody can "catch" you for a can that measures 19.4 g. |
| 3 | **Route (b) needs ingredient documentation, not analysis.** | The cost moves from the lab to **free PDFs you must collect anyway** — protein supplier spec sheets, flavour house spec, sweetener spec. You need these for the co-packer and for the allergen declaration regardless. |

### 2.1 What you must do to actually rely on Art. 31(4)

**All free. All mandatory if you take this route.**

1. **Collect a technical data sheet / specification for every ingredient** — collagen hydrolysate, whey protein isolate, L-leucine, L-tryptophan, acidulant, sweeteners, flavour, preservative if any. Each must state **protein % (and the nitrogen factor used)**, allergen status, origin.
2. **Build one spreadsheet** — ingredient, dosage per litre, dosage per 330 ml can, protein contribution, energy contribution using the **Annex XIV** conversion factors (protein 17 kJ / 4 kcal per g). `Annex XIV factors: UNVERIFIED-CORE per A4 §6.4 — verify.`
3. **Version and date it against each artwork revision.** `Nutrition calc v1.0 — artwork rev A — 2026-XX-XX`.
4. **File it with the ingredient spec PDFs.** That folder *is* your legal substantiation. It is the document an inspector asks for.
5. **Over-deliver the protein.** Formulate to land **above** 20 g, not exactly at 20 g. See §2.3 — the realistic threat is not NÉBIH.

### 2.2 The catch (state it to yourself honestly)

Art. 31(4) permits calculation. **Art. 7 (fair information practices) still forbids misleading information**, and NÉBIH / the county government office may sample your can and analyse it. Your calculated figure is then checked against the Commission's **December 2012 tolerances guidance** for nutrient values. `The numeric tolerance band for protein: NEEDS PROFESSIONAL CONFIRMATION — food.ec.europa.eu was blocked in research and no band should be relied on.`

**The practical read:** a single confirmatory assay is not a knife-edge test, but it is not a licence to under-deliver either.

### 2.3 ⚠️ THE COLLAGEN NITROGEN-FACTOR TRAP — the highest-value technical point in this file

**FIC Annex I defines protein, for labelling purposes, as total nitrogen × 6.25.** `LIKELY — RECOLLECTION OF PRIMARY TEXT. VERIFY VERBATIM in CELEX 32011R1169 Annex I.`

But **collagen is conventionally assayed with a different (lower) nitrogen conversion factor than generic protein**, because collagen's amino-acid profile is nitrogen-rich. `NEEDS PROFESSIONAL CONFIRMATION — the specific factors are not stated here because no primary source could be opened.`

**Why this can bite you in public:** your formula is **half collagen**. If you declare 20 g on a 6.25 basis and a competitor sends your can to a lab that reports collagen on a lower factor — or vice versa — the two numbers will not match, and the disagreement will be published as "their 20 g is fake". This is a **reputational** failure mode in the fitness channel, not a regulatory one, and it is by far the most likely way this product gets attacked.

**Do these two free things:**
- **Ask each ingredient supplier, in writing:** *"What nitrogen-to-protein conversion factor is your stated protein % based on?"*
- **Ask any lab you ever commission, in writing, in the quote request:** *"Which nitrogen-to-protein conversion factor do you apply to a beverage containing both hydrolysed collagen and whey isolate?"*

Record both answers next to the calculation spreadsheet. If they differ from 6.25, note the difference and the reason. **That one paragraph is your defence.**

**Second-order point on free amino acids:** the 1.7 g L-leucine and 150 mg L-tryptophan carry nitrogen and will show up in a nitrogen-based assay. Whether they may be counted toward the declared "protein" figure — and how you describe them in marketing — is `NEEDS PROFESSIONAL CONFIRMATION`. **Conservative and honest position: declare protein from the collagen + whey only, and treat the leucine/tryptophan as a bonus you name separately in the ingredients list.** If the two proteins alone reach 20 g, this question never has to be answered.

---

# 3. THE THREE BUCKETS — the only classification that matters

Everything anyone will try to sell you falls into exactly one of these. **Only bucket A is law. Bucket B is contract. Bucket C is optional.**

| Bucket | What it means | Who enforces it | Batch-1 cost to you |
|---|---|---|---|
| **A — LEGALLY MANDATORY** | An EU or Hungarian instrument requires it before you may place the food on the market | NÉBIH / district office, on inspection | **0 HUF / EUR 0 — see §3.1: there is no mandatory analytical test for this product** |
| **B — CO-PACKER REQUIRED** | The filler will not run or release your batch without it | Your co-packer's QA manager | **Probably 0 HUF extra — usually inside the tolling fee. §5 tells you how to confirm.** |
| **C — COMMERCIALLY ADVISABLE** | Nobody makes you buy it; it protects the brand, the sale or the listing | Your own judgement, or a named buyer's written demand | **0 HUF unless a named counterparty demands it in writing** |

## 3.1 Bucket A — what the law actually mandates

| Instrument | What it requires | Does it force a lab test? |
|---|---|---|
| **Reg. (EC) 178/2002 Art. 14** — CELEX 32002R0178 | Food must not be *unsafe* | **No.** No test, frequency or laboratory is prescribed. |
| **Reg. (EC) 178/2002 Art. 17** | FBO shall *verify* that requirements are met | **No.** "Verify" is a systems obligation. |
| **Reg. (EC) 178/2002 Art. 18** | Traceability, one step back / one step forward | **No.** A spreadsheet with an IN tab and an OUT tab. **0 HUF.** |
| **Reg. (EC) 852/2004 Art. 5** — CELEX 32004R0852 | Permanent HACCP-based procedure | **No test named.** As a brand owner who only stores sealed cans, the burden is light and mostly discharged by the co-packer's system. |
| **Reg. (EC) 2073/2005** — CELEX 32005R2073 | Microbiological criteria **by named food category** | **No.** **There is no criterion written for a carbonated soft drink, flavoured water or protein beverage.** See §4.1. |
| **Reg. (EU) 1169/2011 Art. 30, 31(4)** | Nutrition declaration (the "big 7") | **No — may be calculated.** §2. |
| **Reg. (EU) 1169/2011 Art. 9(1)(f), Art. 24, Annex X** | A best-before date must appear | **No study prescribed.** The FBO sets the date and must be able to justify it. §6. |
| **Reg. (EC) 1333/2008** — additive maxima | Compliance with maximum levels | **No.** Demonstrated by **dosing records**, not assay. §4.5. |
| **Reg. (EU) 2023/915** — contaminants | Maximum levels for heavy metals etc. | **No test on the finished drink.** Risk sits in ingredients → **ingredient CoAs transfer it upstream at zero cost.** §4.6. |

`All rows: LIKELY — RECOLLECTION OF PRIMARY TEXT, NOT RE-VERIFIED. Every primary-source host (EUR-Lex, EC, EFSA, NÉBIH) returned 403 throughout this project. CELEX numbers are given so each can be checked in minutes.`

> **BOTTOM LINE ON BUCKET A: there is no pre-market approval, no compulsory analysis certificate, and no mandatory test panel for a normal food in the EU. `A3 §8.2` independently reaches the matching conclusion that this product is a NORMAL FOOD (*élelmiszer*) with no product notification and no OGYÉI fee. `LIKELY — MUST BE CONFIRMED by a Hungarian food lawyer or NÉBIH.`**

---

# 4. TEST BY TEST — buy, skip, or make the co-packer do it

## 4.1 Microbiological analysis

**Verdict: `CO-PACKER REQUIRED (bucket B). Do not commission your own pathogen panel. 0 HUF / EUR 0.`**

- **Reg. 2073/2005 sets no named criterion for this food category.** No *Salmonella*, *Listeria* or *E. coli* limit is written for carbonated soft drinks. `LIKELY — VERIFY Annex I Ch.1 and Ch.2.`
- The *Listeria* limb applies to ready-to-eat foods, and the Regulation treats products at **pH ≤ 4.4** as **not able to support *L. monocytogenes* growth**. Your target is **pH ~3.2–3.8** — far below. `LIKELY — VERIFY THE FOOTNOTE WORDING; the numeric threshold is the part to double-check.`
- **Pathogen testing on a thermally processed pH-3.x canned beverage is money burned.**

**But micro is not irrelevant — the risk is spoilage, not pathogens.** The organisms that ruin a low-pH sweetened protein drink are **acid-tolerant yeasts, moulds, lactic acid bacteria** and, in fruit-flavour systems, ***Alicyclobacillus***. A hazy, ropy or blown can in a gym fridge is a brand-ending event.

**What to do instead of buying a panel:**
1. Get the co-packer's **micro release result** on the batch, in writing, on the CoA (§5).
2. If — and only if — you want one panel of your own, buy **TVC + yeasts + moulds + LAB** on **one can pulled at the end of accelerated storage** (§6.3). That is the cheapest possible evidence the hurdle system works. `QUOTE REQUIRED.`
3. **Never buy the pathogen suite.**

## 4.2 Protein verification

**Verdict: `COMMERCIALLY ADVISABLE (bucket C). Not legally required. The single test worth paying for — if any.`**

**"20 g" is the entire product proposition.** The realistic enforcement threat is not NÉBIH — it is a competitor or a fitness influencer paying a lab to test your can and posting the result. One Dumas or Kjeldahl assay on a finished can from batch 1 buys you the right to answer that publicly.

| Question to settle before ordering | Why |
|---|---|
| Which **nitrogen conversion factor** does the lab apply? | §2.3 — this is where a "disproof" comes from |
| Is the method **within the lab's accredited scope for a carbonated beverage matrix**? | An accreditation for protein in milk is not an accreditation for protein in a soda |
| How many cans does the lab need? | Typically **3** (analysis, repeat, retain) — confirm in the quote request |

**Price: `UNKNOWN — QUOTE REQUIRED`. Decision rule: if one protein assay quotes above 36,300 HUF / EUR 100, get three quotes including a foreign Eurofins entity and MATE before accepting.** `ESTIMATE — budgeting heuristic. Arithmetic: 0.10 × EUR 1,000 personal capital = EUR 100; 100 × 363 = 36,300 HUF.`

## 4.3 Shelf-life / stability

**Verdict: `NOT LEGALLY MANDATORY. Run it yourself, free. Declare a SHORT date on batch 1.` See §6 for the full protocol.**

## 4.4 pH, °Brix, CO₂, fill volume

**Verdict: `CO-PACKER REQUIRED (bucket B), included in normal production. Buy a cheap meter for yourself.`**

The filler runs these in-line as a matter of course. You should own a **pH meter and a refractometer** anyway — they cost a one-time amount, they never expire, and they let you check every retention can you open for free. `Equipment price: UNKNOWN — price it yourself in five minutes on a Hungarian marketplace. Do not let anyone quote you a "laboratory" price for a consumer meter.`

**pH is your primary safety hurdle.** It is what removes the *Listeria* question (§4.1), it is what makes a short thermal process sufficient, and it is what you will be asked for by every co-packer. **Fix a target pH and a tolerance band in the product specification** (e.g. target 3.4, band 3.2–3.6 — `PLACEHOLDER: set with the co-packer, not from this file`) and put it in the contract as a release criterion.

## 4.5 Sweetener and preservative quantification

**Verdict: `SKIP both. 0 HUF / EUR 0.`**

Compliance with a Reg. 1333/2008 maximum level is normally demonstrated by **dosing control** — you know how many grams went into how many litres, and the co-packer's batch sheet is the evidence. An assay is warranted only if you sit near a limit or the filler's dosing accuracy is unproven.

**One genuine exception:** if the product is stabilised by **preservative instead of a thermal step**, the preservative concentration becomes a **HACCP critical limit**, and a critical limit that is never measured is a weak HACCP plan. In that case, **one sorbate/benzoate assay on batch 1 is defensible**. `A4 §7.4 recommends thermal processing over chemical preservation for this product — prefer that and the question disappears.`

## 4.6 Heavy metals / contaminants

**Verdict: `SKIP on the finished drink. Collect ingredient CoAs instead. 0 HUF / EUR 0.`**

Reg. (EU) 2023/915 risk enters through **ingredients and water**, not through a flavoured water base. A reputable collagen or whey supplier issues a **CoA per lot including the heavy-metal section**. Demanding it is free and it transfers the evidential burden upstream.

**This verdict changes if** you ever add cocoa, botanical extracts or natural colours. `LIKELY — flag as NEEDS PROFESSIONAL CONFIRMATION if the recipe changes.`

## 4.7 Challenge test (deliberate inoculation)

**Verdict: `SKIP for batch 1. 0 HUF / EUR 0.`**

A challenge test validates a hurdle system. It becomes relevant only if (a) you claim ambient stability with **no thermal step**, relying on pH + CO₂ + preservative alone, (b) a co-packer or retailer demands validation, or (c) you are in the *Listeria*-relevant space — which at pH 3.x you are not.

⚠️ **Reconsider immediately if the manufacturing route turns out to be cold-fill with no pasteurisation.** `B6 warns that a mobile-canning / no-pasteurisation route gives a fridge-only shelf life measured in days-to-weeks.` That would be a **formulation and process problem, not a testing problem** — and it would destroy the gym-fridge distribution model. **Ask every co-packer what thermal process they apply. Put the answer in writing.**

## 4.8 ⚠️ Packaging compatibility — the test nobody puts on the list, and the biggest physical risk

**Verdict: `NOT A TEST YOU BUY. A FREE EMAIL YOU SEND.`**

**A protein drink at pH ~3.2–3.8 inside an aluminium can is a corrosion question before it is a microbiology question.** The failure modes:

| Failure | What it looks like | When it shows up |
|---|---|---|
| **Internal lacquer attack / pinholing** | Metallic off-taste, then perforation and leakage | Months 3–12 |
| **Hydrogen swelling** | Cans dome, then bulge — indistinguishable to a consumer from microbial spoilage | Months 3–12 |
| **Protein–metal interaction** | Haze, sediment, colour drift | Weeks to months |
| **Seam failure** | Slow leak, loss of carbonation | Any time; caused at the filler, not by the formula |

**The free actions, in order:**

1. **Email the can supplier (via `B9_packaging` / the blank-silver-can supplier):**
   > *"Is your internal lacquer validated for a pH 3.2–3.8, high-protein, carbonated beverage? Do you have compatibility data, or a recommended coating specification for this application?"*
   **This email costs nothing and de-risks the single largest physical failure mode in the project.**
2. **Ask the co-packer whether they have filled a low-pH protein beverage in aluminium before, and what shelf life it achieved.** Their answer is worth more than any test you can afford.
3. **In your own retention study (§6), photograph the can base at every opening.** Doming is visible with the naked eye and is free to detect.

⚠️ **Sleeve note, practical:** the plan uses a **blank silver can + shrink sleeve**. A full-body sleeve **hides the can wall and base**. For the retention set, either **keep 6–8 cans unsleeved**, or **slit the sleeve** before inspecting. If you cannot see the metal, you cannot see the corrosion. `Practical judgement — ESTIMATE.`

## 4.9 Sensory

**Verdict: `NO LEGAL REQUIREMENT OF ANY KIND. 0 HUF / EUR 0.`**

A trained ISO panel is for brands with budgets. Yours is: **8–12 gym members, a one-page scoring sheet, blind if possible.** Score sweetness, acidity, carbonation bite, off-notes (metallic, cardboard, sulphur, "protein" note), aftertaste, and "would you buy this at 799 HUF". Run it at month 0 and repeat at each retention opening — that is your shelf-life sensory data and it costs nothing.

---

# 5. THE CO-PACKER INTERFACE — where your real "lab budget" already lives

## 5.1 ⚠️ THE HIGHEST-LEVERAGE EMAIL IN THE ENTIRE PROJECT

Send this **verbatim** to Opre' Label (`sales@oprelabel.com`), Bubee Hungary (`info@bubee.eu`), MONYO, Sajátital and Private Label Drink — **before you commission anything from any laboratory:**

> *"Which finished-product analyses are included in the tolling price, and which are charged separately? Please send the list with per-test prices, and confirm whether you release the batch on your own microbiological result or whether we must commission an external laboratory. Please also confirm which thermal process you apply, and whether you provide a Certificate of Analysis per batch."*

**A "yes, included" answer here reduces your external lab budget for batch 1 to zero.** `Status: this question has NOT yet been asked of anyone. It is the largest open item in this workstream.`

## 5.2 What they will demand from you (all paperwork, all free)

1. A signed **finished-product specification** — target pH, °Brix, CO₂ volumes, appearance, fill volume, protein content, best-before period.
2. **Ingredient specifications and CoAs** for every raw material, with allergen status and origin.
3. **Allergen declaration** — **whey = milk, a declarable Annex II allergen.** Non-negotiable.
4. Confirmation of **who is the FBO on the label** and the address printed there — that is **you**, under FIC Art. 8(1). `A3 §3.2.`
5. Often: **product liability insurance** evidence and your **FELIR registration** number. `A3 §4.2.`

## 5.3 What they run as part of normal production (usually inside the tolling fee)

`LIKELY — INDUSTRY PRACTICE. NOT SOURCED. CONFIRM ITEM BY ITEM WITH EACH CO-PACKER.`

- In-line **pH, °Brix/refractometry, CO₂ volumes, fill weight/volume, headspace oxygen**
- **Seam inspection** — teardown, seam thickness/height/overlap. **Non-negotiable in canning; a bad seam is a recall.**
- **Thermal process validation** — pasteurisation units (PU) if a tunnel pasteuriser or hot-fill is used
- A **micro release check** on finished product before batch release
- **Retention samples** ("retains") held for the shelf life

## 5.4 THE CERTIFICATE OF ANALYSIS — demand this per batch, in the contract

**A CoA per batch is the document that replaces your lab budget. Without it you have paid for cans and bought no evidence.**

**Minimum CoA content to specify in writing:**

| Field | Why |
|---|---|
| **Batch / lot code** — matching the code inkjetted on the can | Ties the certificate to physical stock; without this the CoA is worthless in a recall |
| **Production date and best-before date** | Traceability, FEFO rotation |
| **Quantity produced** | Reconciliation; and it is how you prove you stayed under 5,000 cans |
| **pH** — measured value against your specification band | Your primary safety hurdle |
| **°Brix / soluble solids** | Formulation consistency |
| **CO₂ volumes** | Consumer-perceptible quality attribute |
| **Fill volume** — average and range | Net-quantity compliance (Art. 23), and the ℮-mark system if used |
| **Thermal process record** — PU or time/temperature achieved | The evidence that the safety step happened |
| **Microbiological release result** — with the method and the limit applied | Bucket B evidence; this is what you show an inspector |
| **Seam inspection result** | The recall you avoid |
| **Statement of conformity to the agreed specification, signed and dated** | The single sentence that transfers responsibility |

## 5.5 What to demand contractually — put these clauses in the tolling agreement

**Do not sign a tolling agreement that lacks these. They are free to ask for and expensive to add later.**

| # | Clause | Plain-language wording to insist on |
|---|---|---|
| 1 | **CoA per batch** | *"The manufacturer shall supply a Certificate of Analysis for each production batch, containing the fields listed in the agreed specification, before or with delivery."* |
| 2 | **Release criteria** | *"The batch shall not be released unless pH, fill volume, CO₂ and the microbiological release check are within the agreed specification."* |
| 3 | **Retention samples** | *"The manufacturer shall retain no fewer than [12] cans of each batch for the full declared shelf life and make them available on request."* |
| 4 | **Ingredient CoAs passed through** | *"The manufacturer shall supply, or procure from its suppliers, a Certificate of Analysis for each ingredient lot used, including heavy metals and allergen status."* |
| 5 | **Specification change control** | *"No change to formulation, ingredient supplier, process or packaging shall be made without the customer's prior written consent."* |
| 6 | **Shelf-life basis** | *"The manufacturer shall state in writing the basis on which the recommended best-before period is given, and whether it is supported by stability data on this or a comparable product."* |
| 7 | **Non-conformance and re-work** | *"Batches failing the release criteria shall not be delivered or invoiced; the manufacturer shall notify the customer within [2] working days."* |
| 8 | **Traceability cooperation** | *"The manufacturer shall provide, within 24 hours of request, all records necessary to trace ingredient lots into finished batches."* (Reg. 178/2002 Art. 18) |
| 9 | **Recall cooperation** | *"The manufacturer shall cooperate promptly and at its own cost in any withdrawal or recall attributable to its process or materials."* (Reg. 178/2002 Art. 19) |
| 10 | **Liability and insurance** | *"The manufacturer shall maintain product liability insurance and evidence it on request."* |

⚠️ **Clause 6 is the one founders forget.** If the co-packer recommends "12 months" and you print it, **you** carry it under FIC Art. 8(1). Ask them to say in writing *why* 12 months. If they cannot, print 6 (§6.4).

⚠️ **Product-liability context:** `A3 §12.2` records that **Directive (EU) 2024/2853 sharpens product-liability exposure for own-brand sellers from 2026-12-09 (CONFIRMED by A1).** You are the own-brand seller. The genuine financial risk in this business is **not a fine — it is a recall plus liability.** Clauses 7–10 are what stand between you and that.

---

# 6. SHELF LIFE — how to establish it for 0 HUF

## 6.1 The legal position

A **date of minimum durability** (`Minőségét megőrzi:`) is mandatory. **The law does not tell you how to determine it and does not require a study.** The FBO sets it and must be able to justify it. `Reg. (EU) 1169/2011 Art. 9(1)(f), Art. 24, Annex X — LIKELY, VERIFY.`

⚠️ **CONFLICT BETWEEN DOSSIERS — resolve it this way.** `A4 §9.1` states *"Shelf life itself must be established by stability testing, not assumed"*, and `A4 §6.6` says to *"declare from actual analysis of production batches, not from the raw-material supplier's theoretical calculation."* `A9 §2.8 and §2.1` state the opposite: no study is mandated, and Art. 31(4) expressly permits calculation.

**The reconciliation, and it is not a fudge:**
- **On the nutrition declaration, A9 is right as a matter of law and A4 is right as a matter of commercial prudence.** Calculation is legally sufficient (Art. 31(4)); analysis is what protects you from a competitor's published test (§2.3, §4.2). **Calculate for batch 1; buy one confirmatory assay if the quote is cheap.**
- **On shelf life, A4 is describing good practice, not a legal duty.** No instrument prescribes a stability protocol. **The honest resolution: run the study yourself in real time and declare a SHORT date, so the date you print is one you can actually justify.**

**The test that settles both:** ask the classification opinion (§8) to answer, in writing: *"May the nutrition declaration for this product be established by calculation under Art. 31(4), and is a documented stability study required to justify the best-before date?"* **Two sentences of a lawyer's answer close both questions permanently.**

## 6.2 What actually determines shelf life here, in order of real risk

1. **Can / lacquer compatibility at low pH with high protein** — corrosion, pinholing, hydrogen swelling, metallic taste. **#1 physical risk.** §4.8.
2. **Sensory and physical stability** — protein aggregation, sedimentation, haze, Maillard browning between protein and residual reducing sugars/flavours, flavour fade, sweetener degradation. **Note: `A4 §7.4` warns that whey protein isolate at pH ~3.5 in a clear carbonated system is prone to haze and, on heating, to aggregation and astringency. Your formula is half WPI. This is the clarity risk.**
3. **CO₂ retention and pressure drift.**
4. **Microbiological spoilage** — yeasts, moulds, LAB.
5. **Protein assay drift** — protein does not vanish, but confirm the 20 g holds at end of life if you ever extend the date.

## 6.3 The free protocol — do this on production day

`ESTIMATE — practical method design, not a sourced protocol.`

**Pull 40–60 cans off the line** at start, middle and end of the run. Mark each with run position and date in permanent marker. Split them:

| Set | Cans | Storage | Opened at |
|---|---|---|---|
| **Retention** | 20 | Ambient, untouched | Not opened — held for the full shelf life as your reference |
| **Real-time** | 12 | Ambient 20–25 °C | **0, 1, 2, 3, 6, 9, 12 months** |
| **Accelerated** | 8 | **30–37 °C** (a warm cupboard, a boiler room) | **2, 4, 6, 8 weeks** |
| **Lab reserve** | 6–8 | Ambient | Held in case you commission any assay |
| **Photo / pitch** | 6 | Ambient | Marketing |

**Keep 6–8 of these cans UNSLEEVED** so the metal is visible (§4.8).

**Record at every opening — one page, a phone camera, a pH meter:**
date · storage temperature · **pH** · **°Brix** · visual (haze / sediment / colour) · aroma · taste · **can condition (doming, denting, corrosion, base profile)** · carbonation on opening.

**Use accelerated storage to *find failures fast*, not to *prove a 12-month date*.** There is no legally sanctioned time-multiplier, and the Arrhenius shortcut is unreliable for sensory and corrosion endpoints. `LIKELY — technical judgement.`

## 6.4 The date to actually print on batch 1

> **Print a 6-month best-before on batch 1.** Extend to 9 or 12 on batch 2, once you have real-time data from your own cupboard.

**Why this is right for you, not just cheap:**
- At gym-channel velocity a **1,700-can batch sold direct/on consignment will clear long before 6 months**. A short date costs you nothing in practice.
- A long declared date with no data behind it **is** the exposure. A short date with a stack of dated tasting notes behind it is defensible.
- It removes the need to buy a stability study you cannot afford.

⚠️ **THE LOT-CODE TRAP — `A4 §9.3`, and it is free to avoid.** Directive 2011/91/EU exempts you from a separate lot code **only where the best-before date shows at least the uncoded day and month**. A 6-month shelf life permits month+year (`Minőségét megőrzi: 2027.03. végéig`) — **but that format kills the exemption and makes an "L" lot code MANDATORY.**

> **DO BOTH: print a full day-month-year date AND an "L" lot code.** Compliant either way, essential for traceability and recall, and applied by the same inkjet coder at the filling line at **zero extra cost**. Confirm the coder's format and character height with the co-packer.

---

# 7. THE BUDGET

## 7.1 LOW — "minimum legally compliant" — **THIS IS THE RECOMMENDATION**

| # | Line | Cost HUF | Cost EUR | Basis |
|---|---|---|---|---|
| 1 | Nutrition declaration — **calculated** | **0** | **0** | Reg. 1169/2011 Art. 31(4)(b) |
| 2 | Micro release on finished batch | **0** | **0** | Co-packer's HACCP — **confirm it is in the tolling fee (§5.1)** |
| 3 | Real-time shelf-life study | **0** | **0** | 40–60 cans in a cupboard + your notes |
| 4 | Sensory | **0** | **0** | Gym-member panel, one-page scoring sheet |
| 5 | Ingredient CoAs + spec sheets | **0** | **0** | Free from every supplier — **demand them** |
| 6 | pH meter + refractometer (one-time, reusable) | `UNKNOWN — price it yourself` | `UNKNOWN` | Consumer equipment, not a lab purchase |
| | **LOW TOTAL — external lab spend** | **0 HUF** | **EUR 0** | |

**This is a legally defensible position, conditional on all four of:**
(i) the calculation spreadsheet and ingredient specs are kept and dated; (ii) the co-packer releases on its own micro and issues a CoA per batch; (iii) the best-before date is **short**; (iv) ingredient CoAs are collected and filed.

## 7.2 BASE — one euro of insurance per problem that could actually kill you

| # | Line | Qty | Price | Why it is here |
|---|---|---|---|---|
| 1 | Everything in LOW | — | **0 HUF / EUR 0** | — |
| 2 | **Protein assay (Dumas or Kjeldahl), finished can** | 1 | `UNKNOWN — QUOTE REQUIRED` | "20 g" is the whole proposition and a rival can test it (§2.3, §4.2) |
| 3 | **Spoilage micro panel — TVC + yeasts + moulds + LAB** on one end-of-accelerated-storage can | 1 | `UNKNOWN — QUOTE REQUIRED` | Spoilage, not pathogens, is the realistic failure mode |
| | **BASE TOTAL** | | **`QUOTE REQUIRED` — hard ceiling 54,450 HUF / EUR 150** | |

**Caffeine assay: NOT APPLICABLE.** The agreed plan has **no caffeine SKU in batch 1**, so there is no caffeine figure on the label and nothing to verify. `A9 §2.5 rated caffeine quantification the highest-value single analyte — that value is deferred with the SKU. Revisit only if a caffeine SKU is ever launched.`

## 7.3 HIGH — only against a written demand from a named buyer

**Do not buy any of this speculatively. Buy the line item that a named counterparty has named in writing.**

| Line | When it becomes justified |
|---|---|
| Full analytical nutrition panel (7 nutrients) | An Austrian retailer or a distributor demands an analysis certificate |
| Preservative quantification | You end up preservative-stabilised with no thermal step (§4.5) |
| Sweetener quantification | You are near a Reg. 1333/2008 maximum, or exporting to a different limit |
| Heavy metals, finished product | Cocoa, botanicals or natural colours enter the recipe |
| Formal accelerated + real-time programme at an external lab | A listing requires documented stability |
| Challenge test | The process turns out cold-fill with no pasteurisation (§4.7) |
| Trained sensory panel | Never, at this scale |
| Can lacquer compatibility / corrosion study | The can supplier cannot answer the free question in §4.8 |

**All: `UNKNOWN — QUOTE REQUIRED`.**

## 7.4 The decision rules that replace the missing prices

**No Hungarian laboratory price could be sourced anywhere in this project (§9). Use budget fractions instead of absolutes.** `ESTIMATE — budgeting heuristic. Arithmetic exact.`

| Rule | Trigger | Action |
|---|---|---|
| **1** | Co-packer confirms micro release is included | **Delete BASE line 3 immediately.** Re-run the arithmetic. |
| **2** | BASE package quotes above **54,450 HUF / EUR 150** (0.15 × EUR 1,000 personal capital) | **Drop to LOW.** Launch on calculation alone. |
| **3** | The protein assay alone quotes above **36,300 HUF / EUR 100** | Get **three** quotes — one Hungarian commercial lab, one foreign Eurofins entity, one university — before accepting. |
| **4** | Any test at all | **Write the decision down before ordering: *"If this comes back at X, we will do Y."* If you cannot complete that sentence, do not order the test.** |

**Context on the ceiling:** total capital ≈ **EUR 3,000 / 1,089,000 HUF** (EUR 1,000 personal + ~EUR 2,000 family). Base-case batch 1 costs **EUR 2,300 / 834,900 HUF**, leaving **EUR 700 / 254,100 HUF**. A **EUR 150 / 54,450 HUF** lab spend is **21% of everything you have left after production.** `DERIVED: 3,000 − 2,300 = 700; 150 ÷ 700 = 21.4%.` **That is why the recommendation is LOW.**

---

# 8. THE SKIP LIST — what you are not buying, and the legal reason

| Skipped | Legal justification | Residual risk | How the risk is covered instead |
|---|---|---|---|
| **Analytical nutrition panel** | **Reg. 1169/2011 Art. 31(4)(b)/(c)** permits calculation from ingredient values or generally accepted data | Authority sampling against tolerances | Keep the dated calculation file + ingredient specs; **over-deliver protein** |
| **Salmonella, Listeria, E. coli, coliforms on the finished can** | **Reg. 2073/2005 sets no criterion for this food category**; at **pH ≤ 4.4** the product is treated as not supporting *L. monocytogenes* growth | Near zero for a thermally processed pH-3.x canned beverage | Co-packer's micro release check on the CoA |
| **Sweetener quantification** | Reg. 1333/2008 maxima demonstrated by **dosing records** | Dosing error | Co-packer batch sheets; flavour-house compliance warranty **in writing** (free) |
| **Preservative quantification** | Same — **unless** preservative is the sole hurdle | Spoilage | Prefer a thermal process (`A4 §7.4`); one BASE micro panel |
| **Heavy metals on the finished drink** | **Reg. (EU) 2023/915** risk sits in ingredients | Rises materially if cocoa/botanicals/colours are added | **Ingredient CoAs — free, and you need them anyway** |
| **Challenge test** | Validation tool; not required where pH + thermal step give a robust hurdle | Rises to significant if the process is cold-fill | Ask every co-packer what thermal process they run |
| **External shelf-life study** | **No method mandated**; the FBO sets the date | A long date with no data is the real exposure | **Declare 6 months**; run the cupboard study (§6.3) |
| **Trained sensory panel** | No legal requirement whatsoever | None legally | 8–12 gym members and a scoring sheet |
| **Caffeine assay** | No caffeine in the product | None | No caffeine SKU in batch 1 |

## 8.1 ⚠️ THE ONE THING THAT MUST NOT BE SKIPPED — and it costs 0 HUF

**An inspection is a documents inspection far more often than it is a laboratory inspection.** `A3 §12.1` lists what a Hungarian inspector actually opens, and **item 10 is "documentation from the co-packer — specifications, certificates of analysis, shelf-life justification".**

**The folder you must be able to produce on the spot:**

1. **Ingredient specifications** — one PDF per raw material
2. **Ingredient CoAs** — per lot, including heavy metals and allergen status
3. **The nutrition calculation spreadsheet** — dated, versioned, matched to the artwork revision
4. **The nitrogen-factor note** (§2.3) — supplier answers, in writing
5. **The signed finished-product specification**
6. **The co-packer's CoA and release certificate** for every batch
7. **The traceability register** — one spreadsheet, IN tab and OUT tab, with a batch column. `A3 §9.3: this is fully compliant. There is no requirement to buy software.`
8. **The GHP/HACCP document** — self-drafted from the free Hungarian national GHP guide for *kereskedelem*. `A3 §7: cost expected 0 HUF; a competent founder can draft it in a weekend. Consultant price: UNKNOWN — QUOTE REQUIRED. Do not assume you need one.`
9. **The written withdrawal/recall procedure** — `A3 §10.1` has the ten-point template
10. **Dated retention samples and the tasting-note sheets**

`A3 §12.1` names the three most likely findings for exactly this business: **(1) traceability records that cannot link inbound lot to outbound customer; (2) storage that co-locates food with chemicals or cannot hold temperature; (3) a label detail.** **All three are preventable at zero cost. None of them is a laboratory problem.**

---

# 9. LABORATORIES — and an honest statement of what could not be found

> ⚠️ **NO LABORATORY PRICE, EMAIL ADDRESS OR PHONE NUMBER COULD BE SOURCED ANYWHERE IN THIS PROJECT. NOT ONE.**
>
> The research ran under an egress policy that returned **403 to every primary source** — EUR-Lex, the European Commission, EFSA, NÉBIH, NAV, MOHU and every supplier and laboratory website — and the WebSearch budget was exhausted (200/200) before the laboratory workstream began. `CONFIRMED — the denial log is recorded in A9 §0.`
>
> **Nothing has been invented to fill the gap.** The company list lives in **`manufacturing/17_LABS.csv`** with every price, email, phone and turnaround marked **`UNKNOWN - QUOTE REQUIRED`**. **Getting three comparable quotes is the single largest open item in this workstream** — and, if you follow §7.1, it may never need to be closed at all.

## 9.1 The quote request — send the identical text to every lab

**Comparability matters more than politeness. Copy-paste, do not personalise.**

> *"We are launching a 330 ml canned, carbonated, zero-sugar protein beverage (pH approx. 3.4, containing hydrolysed bovine collagen and whey protein isolate). Please quote for:*
> *1. Protein determination (Dumas or Kjeldahl) on finished product*
> *2. Spoilage microbiology panel: total viable count, yeasts, moulds, lactic acid bacteria*
> *3. Optionally: full nutrition declaration panel (energy, fat, saturates, carbohydrate, sugars, protein, salt)*
>
> *For each, please state: price per test, turnaround in working days, the number of cans required, whether the method is within your accredited scope for a carbonated beverage matrix, and — for protein — which nitrogen-to-protein conversion factor you apply to a product containing both collagen and whey."*

## 9.2 Two free moves worth more than any test you can afford

| Move | What to send | Why |
|---|---|---|
| **The university thesis route** | Email the **MATE Élelmiszertudományi és Technológiai Intézet** (Budai Campus): ***not*** *"can we buy analysis"* but ***"would a student take the formulation and shelf-life stability of a carbonated high-protein beverage at pH 3.2 as a szakdolgozat / TDK topic?"*** | Costs the university nothing, gives a supervisor an industrially relevant topic, and gives you **months of instrument time, a stability dataset and a written report** — the exact document a co-packer or distributor asks for. `B6 rates this the highest-value unresearched item in the whole project; A9 §4.4 concurs.` |
| **Campden BRI Magyarország** | Ask **first** whether they sell **short paid advisory time** to start-ups, before asking for a project quote | A food and drink RTO that has stabilised protein beverages before. A full engagement will exceed your budget; **an hour of paid consultancy may be the best euro this project spends, because it can prevent an entire failed production run.** `LIKELY — entity believed to exist; contacts and prices UNVERIFIED.` |

**Find every email and phone number on the organisation's own domain only.** Do not use aggregator directories. **Do not print any contact detail in this project's files until it has been read off the company's own website.**

---

# 10. THE SEQUENCE — do these in this order

| # | Action | Cost | When |
|---|---|---|---|
| 1 | Send the §5.1 email to **all five** co-packers | **0 HUF / EUR 0** | **Today** |
| 2 | Send the §4.8 lacquer question to the can supplier | **0 HUF / EUR 0** | **Today** |
| 3 | Demand spec sheets + CoAs from every ingredient supplier, including the **nitrogen factor** question (§2.3) | **0 HUF / EUR 0** | With the first ingredient enquiry |
| 4 | Build the nutrition calculation spreadsheet; version it against artwork rev A | **0 HUF / EUR 0** | Before artwork is finalised |
| 5 | Get the classification opinion to confirm **Art. 31(4) calculation** and **that no stability study is required** (§6.1) | with the legal opinion | Before artwork is finalised |
| 6 | Send the §9.1 quote request to 4–5 labs, so you know the number even if you never spend it | **0 HUF / EUR 0** | This week |
| 7 | Send the §9.2 MATE thesis email | **0 HUF / EUR 0** | This week |
| 8 | Agree the specification + the §5.5 contract clauses **before** paying the deposit | **0 HUF / EUR 0** | Before deposit |
| 9 | On production day: pull 40–60 cans, split per §6.3, keep 6–8 unsleeved | **0 HUF / EUR 0** | Production day |
| 10 | Print **6-month** best-before, **full DD.MM.YYYY**, **plus an "L" lot code** | **0 HUF / EUR 0** | Artwork + coder setup |
| 11 | Open the accelerated set at weeks 2/4/6/8; the real-time set at months 1/2/3/6 | **0 HUF / EUR 0** | Ongoing |
| 12 | Decide on the BASE assays **only after** rules 1–4 in §7.4 have been applied | ≤ **54,450 HUF / EUR 150** | After quotes land |

---

# 11. OPEN ITEMS — what must be confirmed before this file is safe to rely on

| # | Item | Status | Who settles it |
|---|---|---|---|
| 1 | **Art. 31(4) verbatim wording** — that calculation is a full alternative to analysis | `CONFIRMED-BY-SEARCH` — **not read from EUR-Lex; every attempt returned 403** | Read CELEX 32011R1169 Art. 31(4); confirm in the classification opinion |
| 2 | Whether a **documented stability study** is required to justify the best-before date (the A4/A9 conflict, §6.1) | `NEEDS PROFESSIONAL CONFIRMATION` | The same classification opinion, same email |
| 3 | **Nitrogen-to-protein conversion factor** for a collagen + whey blend, and whether free leucine/tryptophan count toward declared protein | `NEEDS PROFESSIONAL CONFIRMATION` | Ingredient suppliers (free) + the lab in the quote request (free) |
| 4 | That **Reg. 2073/2005 sets no criterion** for this food category, and the **pH ≤ 4.4** *Listeria* threshold | `LIKELY — RECOLLECTION, NOT VERIFIED` | Read CELEX 32005R2073 Annex I Ch.1 and Ch.2 |
| 5 | **Which analyses are inside each co-packer's tolling fee**, and whether they release on their own micro | `UNKNOWN — NOT YET ASKED OF ANYONE` | The §5.1 email. **Highest-leverage open item in the file.** |
| 6 | **Thermal process** each co-packer applies — pasteurised/hot-fill vs cold-fill | `UNKNOWN` | The §5.1 email. **A cold-fill answer changes §4.7 and §6.4 immediately.** |
| 7 | **Can internal lacquer validated for pH 3.2–3.8 high-protein**? | `UNKNOWN` | The §4.8 email to the can supplier |
| 8 | **Any Hungarian laboratory price, email or phone** | `UNKNOWN — QUOTE REQUIRED, for every lab in 17_LABS.csv` | The §9.1 quote request |
| 9 | Protein tolerance band in the **Dec 2012 Commission tolerances guidance** | `NEEDS PROFESSIONAL CONFIRMATION` — food.ec.europa.eu blocked | Food lawyer, or read the guidance |
| 10 | That the product is a **normal food**, not an *étrend-kiegészítő* — no product notification, no OGYÉI fee | `LIKELY` per A3 §8.2 | Hungarian food lawyer or NÉBIH. **Load-bearing for this entire file.** |

---

# 12. THE PARAGRAPH TO REMEMBER

You almost certainly do not need to buy a single laboratory test to sell batch 1 legally in Hungary. The nutrition table on your can may be **calculated** from ingredient specification sheets rather than measured — Reg. (EU) 1169/2011 Art. 31(4) says so explicitly — and there is **no EU microbiological criterion written for a low-pH carbonated soft drink**, so no pathogen test is mandated either. Your co-packer will run pH, Brix, CO₂, fill, seam and a micro release check as part of normal production; **ask each of them in writing whether that sits inside the tolling price, because it probably does.** Keep the calculation spreadsheet, the ingredient CoAs and a two-tab traceability spreadsheet — an inspection is a paperwork inspection far more often than a laboratory one. **Print a 6-month best-before with a full day-month-year date and an "L" lot code**, and extend it on batch 2 using cans you stored in a cupboard for free. Spend one free email asking the can supplier whether their internal lacquer is validated for a pH 3.2 high-protein drink, and one asking MATE whether a student would take your product's stability as a thesis. **Those two emails are worth more than any test you could afford — and your target external lab spend for batch 1 is 0 HUF / EUR 0.**

---

*Sources: `A9_labs.md` (legal analysis, budget structure, lab landscape, sampling protocol), `A4_label_compliance.md` §6, §7.4, §9 (nutrition declaration, energy factors, best-before and lot-code rules, WPI haze warning), `A3_hu_food_business_registration.md` §7–§12 (HACCP/GHP, classification, traceability, recall, inspection). Every primary legal source in this file was blocked at 403 during research; tags are as stated per line.*
