# 02 — EXECUTIVE SUMMARY

**For the person being asked for the money. If you read one file, read this one.**
Prepared 2026-08-16 · **1 EUR = 363 HUF** throughout · Every figure is tagged for how much it can be trusted

---

## THE OPPORTUNITY, IN THREE SENTENCES

A 330 ml carbonated, clear, zero-sugar can carrying **20 g of protein** is selling well in the United States and, since June 2026, in Iceland — but **no complete-protein carbonated can was found shipping anywhere in the European Union**. Hungarians already pay **690–999 HUF (EUR 1.90–2.75)** for a 330 ml functional can with almost no protein in it (NOCCO) or one that is an opaque dairy milkshake (Barebells), which is the price band this product would sit in at **899 HUF (EUR 2.48)**. The proposal is a **1,700-can pilot — EUR 2,300 (834,900 HUF) of stock plus EUR 440 (159,720 HUF) of setup and legal, EUR 3,000 raised in total** — to find out, in about ten weeks, whether Hungarian gyms will reorder.

> ⚠️ **The price is 899 HUF, not 799.** At 799 this batch returns **+EUR 102** and needs a 96% sell-through. At 899 it returns **+EUR 458** and breaks even at 86%. An earlier draft of this document was built on 799 and on a landed cost of 491 HUF; both were wrong. The corrected figures are used throughout below.

---

## THE HONEST COMPETITIVE PICTURE — READ THIS BEFORE THE MONEY SECTION

**This is not an invention, and anyone who presents it as one is selling you something.**

| Fact | Status |
|---|---|
| **Fizzique** (USA) has been shipping this exact spec — 355 ml, 20 g whey isolate, ~80 kcal, clear, carbonated — since **2017**, protected by **7 US patents** | SEARCH-VERIFIED |
| **C4 Sparkling Protein** (Nutrabolt, a top-tier US energy-drink company) launched **30 July 2026** — 20 g, 95 kcal — into Walmart, Target, Kroger, 7-Eleven, Publix, GNC and six more chains at once | SEARCH-VERIFIED |
| **Bucked Up** added a 355 ml / 20 g version at Walmart **this month** | SEARCH-VERIFIED |
| **Protein Pop Plus** (30 g, whey + collagen) is in **all 607 US Costco clubs** | SEARCH-VERIFIED |
| **Premier Protein** (BellRing, a multi-billion-dollar RTD business) has announced it is entering | SEARCH-VERIFIED |

So the category is eight years old and, in 2026 alone, four well-capitalised American companies piled into it.

**And yet the European shelf is empty.** Everything verified shipping in Europe is either collagen at low grams or amino acids pretending to be protein:

| European product | Protein | What it really is |
|---|---|---|
| NOCCO (Sweden, sold in Hungary) | **~3 g** | BCAA amino acids, 180 mg caffeine |
| Mist Uppbygging (Iceland) | **15 g** | 100% collagen, zero whey |
| COLLAB (Iceland → Germany, Denmark) | **5.9 g** | Marine collagen energy drink |
| Barebells (sold in Hungary) | ~20–24 g | Opaque dairy milkshake, not carbonated |
| **UPP (Iceland, launched June 2026)** | **20 g** | **The only real one — half clear whey isolate, half collagen. Iceland is EEA, not EU.** Its fill volume is **ASSUMED to be 330 ml — NOT verified** (`sales/29_COMPETITORS.csv`), and its shelf price is **UNKNOWN**. |

**The honest classification: this is a speed-and-distribution race with a head start measured in months, not a novelty business.** UPP proves the formula works and sells. C4 and Premier Protein prove the big money is now moving. The question is not "will anyone want this" — the Americans and the Icelanders have answered that. The question is **"can a Hungarian teenager with EUR 3,000 get to the Hungarian gym fridge before Nutrabolt's European distributor does."**

One caveat stated plainly: **no dedicated UK, German or Polish competitor sweep was ever completed** in this project. The claim "nothing complete-protein in the EU" is *absence of evidence*, not proof of absence. A European entrant may exist that we never found. `SEARCH-VERIFIED for what was found; the European negative is UNCONFIRMED`

---

## THE PRODUCT DECISION

**One SKU. Lemon-lime. No caffeine version. 330 ml aluminium can, blank silver, shrink sleeve.**

**Formula ARCH F:** 10 g hydrolysed bovine collagen + 10 g whey protein isolate + 1.7 g L-leucine + 150 mg L-tryptophan = **20 g declared protein at 256.88 HUF (EUR 0.708) of ingredients per can**. `ESTIMATE — line-by-line derivation in product/04_FORMULATION_V1.csv, which is the authoritative per-ingredient source`

> **Correction:** earlier drafts said 213 HUF. That figure priced the whey at commodity WPI90. The formula **requires a clear / acid-stable whey grade** — commodity whey hazes at pH 3.2, so it is not a cheaper substitute, it is a different product. Clear grade costs **163.90 HUF/can** against 131.08 for commodity. This single line is the largest cost risk in the project (±50 HUF/can) and it is **QUOTE REQUIRED**.

Three decisions inside that are worth understanding:

1. **Why half the protein is collagen.** Collagen costs **6.52 HUF per gram of protein** against **16.39 HUF** for the clear/acid-stable whey grade — **60% cheaper** `DERIVED from product/04_FORMULATION_V1.csv`. It stays optically clear at pH 3.2 and is not exposed to the 2026 whey shortage. All-whey (ARCH E) costs **268–334 HUF (EUR 0.74–0.92)** in ingredients alone. **The reason ARCH E is rejected is not only cost: it doubles our exposure to a whey market that European producers reported SOLD OUT in April 2026.** Half-collagen is also the same architecture Iceland's UPP uses and the same one Myprotein already sells in Hungary. `SEARCH-VERIFIED`
2. **Why the leucine and tryptophan spike.** Collagen is an incomplete protein — no tryptophan, low leucine. **1.7 g of L-leucine costs 9.6 HUF (EUR 0.026) and 150 mg of tryptophan costs 0.7 HUF (EUR 0.002)**, and together they turn a label a gym buyer would argue with into one he respects.
   > 🛑 **But this is not a settled decision.** Whether free L-leucine and free L-tryptophan may lawfully be **added to a beverage** (as opposed to a food supplement) under Reg. (EC) 1925/2006 and Hungarian national rules is **UNVERIFIED — NEEDS PROFESSIONAL CONFIRMATION**. Two independent research workstreams failed to resolve it. **It blocks raw-material purchase and it blocks artwork.** The fallback — drop both amino acids and the leucine claim — costs 10.31 HUF/can and is survivable, but it must be decided before money moves, not after. No leucine figure goes on the front panel in batch 1 in any case.
3. **Why no caffeine version in batch 1.** It would trigger a mandatory caffeine warning, expose us to the NETA public-health product tax (scope unconfirmed), require a second barcode and second artwork, split a 1,700-can run into two unsellable halves, and raise under-18 selling questions in a channel full of teenagers.

**One open technical question that must be answered before any money moves:** 20 g in 330 ml is **6.06 g of protein per 100 ml** against the US-standard 20 g in 355 ml, which is 5.63 g — **we are asking for ~7.6% more concentration than the product five independent US formulators converged on.** `DERIVED` (The Icelandic 330 ml comparison does not settle this, because UPP's fill volume is assumed, not verified.) Probably survivable because half our protein is collagen, but the co-packer's technologist must confirm it holds clear and stable through shelf life. **Do not commission artwork before that answer.**

---

## THE MONEY

**Total capital: EUR 3,000 (1,089,000 HUF) — EUR 1,000 (363,000 HUF) from the founder, EUR 2,000 (726,000 HUF) requested from the father.**

**Of 1,700 cans, 60 are withheld as samples. 1,640 are sellable.** That cap matters: an earlier draft budgeted 175 sample cans, which made break-even arithmetically impossible.

| Batch 1 economics, sold DIRECT at 899 | Per can |
|---|---|
| Consumer pays (incl. 27% ÁFA) | **899 HUF / EUR 2.48** |
| less ÁFA | −191.13 HUF / −EUR 0.53 |
| **Net revenue** | **707.87 HUF / EUR 1.95** |
| less landed COGS | −524 HUF / −EUR 1.44 |
| **Contribution** | **+183.87 HUF / +EUR 0.51** |

`ESTIMATE — the 524 HUF landed COGS carries a range of 460–620 HUF and roughly half of it is QUOTE REQUIRED, not quoted`

**What each channel actually earns, at a 524 HUF cost:**

| Channel | Net revenue/can | Contribution |
|---|---|---|
| **Direct @ 899** ⭐ | 707.87 | **+183.87** |
| Direct @ 799 | 629.13 | +105.13 |
| Consignment @ 899, gym keeps 100 | 629.13 | +105.13 |
| Consignment @ 899, gym keeps 160 | 581.89 | +57.89 |
| **Consignment @ 799, gym keeps 160** | 503.15 | **−20.85 ❌ FORBIDDEN** |
| **Wholesale @ 470 net** | 470.00 | **−54.00 ❌ FORBIDDEN in batch 1** |

**Where the EUR 3,000 goes:** ~EUR 2,300 (834,900 HUF) into the cans themselves, **EUR 440 (159,720 HUF)** into food-business registration, a Hungarian food-law opinion, benchmark products and domain, and **EUR 260 (94,380 HUF) held back as contingency and not deployed.**

**Break-even is 1,405 of the 1,640 sellable cans — an 86% sell-through.** `DERIVED: total cash deployed EUR 2,740 (inventory EUR 2,300 + setup EUR 440 = 994,620 HUF) ÷ 707.87 HUF net revenue per can = 1,405 cans` **At full sell-through the batch returns +166,286 HUF = +EUR 458.**

At 799 the same batch needs 1,581 of 1,640 cans (96%) and returns **+EUR 102** — essentially nothing, with no margin for a single unsold case. That is the whole argument for 899.

> **One reconciliation still open, stated rather than hidden:** the EUR 2,300 inventory line and the 524 HUF/can landed cost do not reconcile exactly (524 × 1,700 = EUR 2,454). The EUR 2,740 cash-deployed figure is the one all break-even arithmetic uses. **Treat EUR 2,300–2,460 as the inventory range and close it on the first written co-packer quote.** `UNRECONCILED — QUOTE REQUIRED`

**Two things the father is actually being asked for, and only one of them is money.**

A minor **cannot** be an egyéni vállalkozó (Evectv. 2009. évi CXV. 3. § (2)) and **cannot** be an ügyvezető (Ptk. 3:22 § (1)). No parental consent cures either. `LIKELY / SEARCH-VERIFIED — njt.hu was egress-blocked, so no primary text was read; the wording is quoted consistently across multiple practitioner sources and is safe to plan against` So the legal food business operator — the name on the NÉBIH registration, on the can, and on the liability — **must be an adult.** The cheapest route is to use an **existing adult family company** and add TEÁOR codes 4634 and 4725 — **but nowhere in this project is it established that such a company exists.** That is a Day-1 question, not an assumption. The fallback is the **father as a secondary-occupation egyéni vállalkozó**, which is **not free**: ~185,000 HUF/yr (EUR 510) in bookkeeping and chamber fees `ESTIMATE`, taking setup/legal from EUR 440 to roughly EUR 950 and total capital need to ~EUR 3,500. (A *full-time* EV costs **101,682 HUF / EUR 280 per month with zero revenue** — avoid it entirely.) The NAV Ügyfélportál went live **2026-02-19**; the old nyilvántartó.hu Webes Ügysegéd stopped accepting new applications **2026-03-01**.

**Say it plainly: the father is not a passive investor. He is the food business operator of record.**

---

## THE HONEST RISK STATEMENT

**Batch 1 is paid market validation. It is not a profit centre and must not be presented as one.**

At **100%** sell-through of the 1,640 sellable cans — which would be an exceptional outcome — the batch returns **+EUR 458 (166,286 HUF)** against **EUR 2,740 (994,620 HUF)** of cash deployed, and the founder will have worked for months. That is a 17% return on a year of unpaid work. It is not a return on capital. It is **the price of finding out whether Hungarian gym owners reorder**, which is the only fact that matters and cannot be bought any cheaper.

The realistic distribution of outcomes:

- **Good case:** the cans sell through, two or three gyms reorder, and there is a real business to raise money for. The EUR 2,000 comes back plus a few hundred euro.
- **Middle case:** it sells slowly, some stock ages out, roughly half the money comes back, and we learn exactly why.
- **Bad case:** the co-packer quote comes in above budget or the formula fails technically, and **most of the money is spent before a single can exists.** See failure 1 below.

**Treat the EUR 2,000 as money that may not come back.** If losing it would matter, do not send it.

---

## THE ESCALATION LADDER

Every step is conditional on the step below it working. **Nobody is being asked to fund step 2 today.**

All rows use **one cost architecture**: blank can + shrink sleeve + co-packer stock cans + 119,000 HUF fixed setup amortised over the run. An earlier version of this table was non-monotonic (491 → 699 → 556 → 420) because it spliced two incompatible models together. Making more cans cannot raise unit cost.

| Step | Volume | Landed COGS/can | Capital needed | Gate to pass first |
|---|---|---|---|---|
| **0. Free** | 0 cans | — | **EUR 0** | Get quotes from Opre' Label and Bubee. Buy one Hungarian food-law opinion (**EUR 150–400 / 54,500–145,200 HUF**) settling the five blocking questions. Get a gym to agree to a fridge in principle. |
| **1. Pilot** ⭐ | **1,700 cans** | **~524 HUF / EUR 1.44** | **EUR 3,000** (1,089,000 HUF), of which EUR 2,740 deployed | Sold **direct at 899, or on consignment at 899 with the gym keeping 100–160 HUF.** Never wholesale, never 799-with-a-160-cut. Stays under the DRS threshold. |
| **2. Repeat** | up to ~2,800 more, **year-one total under 4,500** | ~470 HUF / EUR 1.29 `INTERPOLATED` | ~EUR 3,600 (1,306,800 HUF) | Only if gyms **reorder**. Reordering is the single signal that matters. |
| **3. The DRS decision** | crossing ~5,000 cans/year | ~431 HUF at 5,000 | ~EUR 5,900 (2,155,000 HUF) | **Irreversible.** Above the threshold the deposit system is mandatory: 50 HUF deposit per can, MOHU registration, a deposit float, and **the DRS mark permanently on the artwork.** |
| **4. Wholesale** | **~10,000 cans** | **~390 HUF / EUR 1.07** | ~EUR 10,700 (3,900,000 HUF) | **Wholesale becomes viable here, not at 25,000** — at 390 HUF cost a 470 HUF net wholesale price earns **+80 HUF/can.** Below ~10,000 it loses money. |
| **5. Scale** | ~25,000 cans | ~349 HUF / EUR 0.96 | ~EUR 24,000 (8,725,000 HUF) | Meets the 350 HUF cost target. |
| **6. Real economics** | ~100,000 cans | ~296 HUF / EUR 0.82 | ~EUR 81,500 (29,600,000 HUF) | Iceland-equivalent cost base. Not our money — someone else's. |

**Crossovers:** below 400 HUF at **~10,000 cans** · below 350 at **~25,000** · below 300 at **~95,000** · **below 250 is not reachable at 20 g of protein at any volume.**

`Costs above 1,700 cans are ESTIMATE, built from a component model, not from any quote` · `The ~5,000-can DRS threshold is LIKELY — NEEDS PROFESSIONAL CONFIRMATION and is question one for the food lawyer. Plan volume decisions against 4,500, not 5,000: nobody has read 450/2023 and we do not know whether the count is per calendar year, rolling 12 months, or retrospective.`

---

## THE FIVE WAYS THIS FAILS

**1. The co-packer says no, or quotes a price we cannot pay. — MOST LIKELY.**
Opre' Label's actual MOQ and price per can are **UNKNOWN — QUOTE REQUIRED**. So are Bubee's. Nobody has quoted us anything. The whole plan rests on "one pallet MOQ" appearing on a website. MONYO, the nearest alternative, has a 2,000-litre minimum batch (~6,060 cans) and takes a 50% deposit. If the quotes come back at 5,000 cans minimum, the plan does not survive contact with them and **EUR 3,000 does not reach a first production run.**

> 🛑 **And "one pallet" may not mean 1,700 cans.** This project's own two derivations of cans-per-pallet **do not agree and cannot both be right**: the batch file computes ~1,680 cans (280/layer × 6 layers), the logistics file computes 2,880 as its planning figure (216/layer). **Cans per pallet is UNKNOWN.** If a pallet is really 2,880 cans, the minimum order at 524 HUF is **1,509,120 HUF = EUR 4,157** — more than the entire capital raise, and it would put 64% of the DRS ceiling into a single order. **Question one to Opre' is "how many 330 ml cans are on one pallet, and will you fill and ship a part-pallet?" That answer must arrive before any budget is presented.**

**2. The whey market.** European whey isolate producers were reported **sold out** in April 2026, and WPC80 went from EUR 15,780 to EUR 20,250 per tonne in eight weeks — **+28% in a quarter.** `SEARCH-VERIFIED` A buyer of 25 kg sacks has zero allocation priority in a sold-out market, and the grade we need is the **clear / acid-stable** one, which carries a further premium on top of the index. The 163.90 HUF/can we have budgeted for it is an **ESTIMATE built on a +25% clear-grade premium that no supplier has quoted**, and it moves the whole batch by ±EUR 154. A written clear-WPI quote **and** an availability confirmation is a hard gate before any deposit is paid. Either the ingredient cost blows past 257 HUF/can, or nobody sells to us at all.

**3. The formulation fails.** 20 g of protein solids, clear, at pH 3.2, under carbonation, in 330 ml — **7.6% more concentrated than the US industry standard.** Fizzique holds 7 patents on solving this, which is evidence it is hard. Failure looks like haze, sediment at the bottom of the can, gushing on opening, or off-flavour developing over shelf life — and it usually shows up weeks *after* the run is paid for.

**4. Regulation moves the goalposts.** **Five** unresolved items, any one of which changes the plan: whether a whey-containing drink needs a **Reg. 853/2004 dairy-approved filling plant** (this alone would eliminate most of the co-packer pool); whether **free L-leucine and L-tryptophan may lawfully be added to a beverage** under Reg. (EC) 1925/2006 (this blocks raw-material purchase); whether the **~5,000-can DRS exemption** is real; whether ÁFA is **27% or 18%**; whether **NETA** catches the product. All five `NEEDS PROFESSIONAL CONFIRMATION`. **One food-law opinion at EUR 150–400 settles all five. Buy it before the cans, not after.** The brief is already written out in `execution/32_EMAILS_HUNGARIAN.md` §7.

> **A sixth item, cheap and on the critical path: freedom to operate.** A granted European patent, **EP2001312B1**, appears to cover carbonated beverages at pH 2–3.4 using whey isolate ≥90% — and batch 1's own spec (WPI90, pH 3.2, ~2.2 vol CO₂) sits inside all three recited elements simultaneously. ARCH F is **50% whey**, not "collagen-dominant", so it is not obviously outside the claim. The patent runs to roughly **9 March 2027**, i.e. it is live while batch 1 would be produced and sold. **Its claim scope, its validation in Hungary and its renewal status are all UNVERIFIED** — the EPO register was blocked, and the patent number itself was found by direct web search during write-up, not in any research dossier. **A 30-minute EP/HU patent-attorney check belongs before batch 1 is filled, not before batch 2.** It is the cheapest line in the budget.

**5. It simply does not sell.** Break-even needs **1,405 of the 1,640 sellable cans — an 86% sell-through.** Gyms take consignment stock and it sits in a fridge nobody opens. Meanwhile C4, Bucked Up or Premier Protein arrive in Europe with a marketing budget larger than everything this project will ever spend, and the head start evaporates.

---

## WHAT WOULD MAKE THIS A YES

Not the founder's enthusiasm, and not this document. **Four things, all obtainable for under EUR 400 (145,200 HUF) and all before the EUR 2,000 moves:**

1. **A written quote** from Opre' Label or Bubee for ~1,700 cans — price per can, **cans per pallet**, whether a part-pallet will be filled, and a confirmed ability to fill a whey-containing carbonated beverage.
2. **One Hungarian food-law opinion** settling the DRS threshold, the dairy-plant question, ÁFA, NETA and the free-amino-acid question.
3. **One gym owner saying yes in writing** to putting the product in their fridge at **899 Ft with the gym keeping 100–160 Ft** — the single move Iceland's Ölgerðin made when it co-developed UPP with the country's largest gym chain and had guaranteed placement on day one. It costs a phone call.
4. **Thirty minutes and EUR 0 spent proving the European shelf is actually empty.** The entire strategic premise — that nothing complete-protein ships in the EU — rests on a sweep that was never run. Search German, Polish and UK retailer and supplement sites for a 20 g carbonated protein can. **If one exists and is shipping, the premise is dead and this plan should be rewritten before anything is spent.**

**If all four come back clean, the EUR 2,000 buys a real experiment. If any one of them comes back badly, the money stays where it is and nothing has been lost.**

Full open-questions list with contacts and ready-to-send emails: **`execution/34_OPEN_QUOTES.md`**
Full competitive set with sources: **`sales/29_COMPETITORS.csv`**
Full unit economics line by line: **`finance/19_UNIT_ECONOMICS.csv`**

---

**A note on how this research was done, because it affects how much you should trust it.** Every primary source in this project — EUR-Lex, NÉBIH, NAV, MOHU, the EPO register and every supplier website — was blocked by the network policy under which the work was done. Only web *search* worked. That means figures here were seen in search results attributed to real URLs, but **no page was opened and verified.** Nothing has been invented; where a number was not found, the file says UNKNOWN.

**Say the sharpest version of it plainly: not one supplier price per can exists anywhere in this project.** The 524 HUF landed cost is a bottom-up component build with **zero external corroboration** — an earlier draft claimed it was validated by a second independent route, but that second route was the same range the build was set to match, and it described a cheaper collagen-only product in any case. **Treat every number in this summary as a hypothesis to confirm with a quote, not as a fact to spend against.**
