# 20 — CAPITAL SCENARIOS

**How much money do you actually need, and what does each amount buy?**
1 EUR = 363 HUF · All figures `ESTIMATE` unless tagged otherwise

---

## THE HEADLINE

> **€1,000 does not buy 330 ml cans.**
> **€3,000 buys 1,700 real, sellable, professionally filled cans — 1,640 of them sellable after samples.**
> **€2,000 no longer works.** At the corrected 524 HUF/can it buys ~1,080 cans and needs a 99% sell-through.
> **€7,500–15,000 is the wrong place to be — but not for the reason an earlier draft gave.**

**All figures below use the corrected cost basis:** landed COGS **524 HUF/can** at 1,700 cans (range 460–620), RRP **899 HUF**, net revenue **707.87 HUF/can**, **60** cans withheld as samples. Source of record: `19_UNIT_ECONOMICS.csv`.

**Unified scale curve** (one architecture throughout: blank can + shrink sleeve + co-packer stock cans + 119,000 HUF fixed setup amortised):

| Cans | 1,700 | 5,000 | 10,000 | 25,000 | 50,000 | 100,000 |
|---|---|---|---|---|---|---|
| **Landed COGS HUF/can** | **524** | **431** | **390** | **349** | **319** | **296** |

---

## ⚠️ THE DEAD ZONE — restated honestly

**An earlier version of this file said the dead zone existed because unit costs got *worse* in the middle. That was wrong.** It came from a non-monotonic cost curve (491 → 699 → 556 → 420) that spliced two incompatible build models together. Making more cans cannot raise unit cost. On the corrected curve **COGS falls monotonically at every step**, and **wholesale at 470 HUF net becomes contribution-positive at ~10,000 cans (+80 HUF/can), not 25,000.** That is a correction in your favour.

**The dead zone is still real. It is now about two different things.**

### 1. Capital availability — the binding constraint

| Volume | Inventory cash needed | Against committed capital of €3,000 |
|---|---|---|
| 1,700 | €2,454 at 524 HUF | ✅ fits |
| 5,000 | €5,937 at 431 HUF | ❌ 2.0× |
| 10,000 | €10,744 at 390 HUF | ❌ 3.6× |
| 25,000 | €24,036 at 349 HUF | ❌ 8.0× |

Everything between 5,000 and 25,000 cans requires **two to eight times the money the family has agreed to put in**, spent on a product with **zero sell-through data**. The economics improve; the ability to pay for them does not.

### 2. DRS burden — a step change, not a slope

Crossing **~5,000 units placed on the market in a year** triggers, all at once:

- MOHU producer registration + per-SKU product registration `LIKELY — NEEDS PROFESSIONAL CONFIRMATION`
- A 45-day pre-launch gate before you may sell
- **The DRS mark permanently printed on the can artwork — irreversible once the sleeve prints**
- A deposit working-capital float of 50 HUF × every can in the channel
- Gyms having to charge deposits and handle empties — real listing friction
- A MOHU per-unit service fee that is `UNKNOWN — QUOTE REQUIRED`

The burden arrives **in full at unit 5,001**. The margin arrives **gradually**. Between 5,000 and ~10,000 cans you are carrying the entire compliance apparatus plus the float while contribution at wholesale is still only +39 to +80 HUF/can.

> ⚠️ **The 5,000 figure itself is `LIKELY — NEEDS PROFESSIONAL CONFIRMATION`.** Decree 450/2023 was never read (egress blocked). `legal/10_DRS_REPONT.md` is the authority and recommends a **4,500-can working cap**, because you do not know whether the count is per calendar year or rolling 12 months, whether it aggregates across SKUs, or whether crossing bites retrospectively. **Plan against 4,500. Treat 5,000 as the legal threshold, not the operating limit.**

| Zone | Cans | Verdict |
|---|---|---|
| €1,000 | 0 | ✅ Buys certainty, not cans. Correct first step |
| **€3,000** | **1,700** | ✅ ⭐ **Sub-DRS. Validate cheaply. THE RECOMMENDATION** |
| €5,000 | ~3,400 | ✅ Still sub-DRS (under the 4,500 cap). Only with LOIs in hand |
| €5,500–7,000 | 4,000–5,000 | ⚠️ Sitting on the DRS line with no headroom. Avoid |
| **€7,500–15,000** | **5,500–12,000** | ❌ **DEAD ZONE — full DRS burden, capital you do not have, no sell-through data** |
| €25,000+ | 25,000+ | ✅ 349 HUF COGS, a real trade margin is affordable, DRS is worth carrying |

**Practical rule: stay under 4,500 cans until you can fund a jump to at least 10,000 — and only after batch 1 has actually sold.**

---

## SCENARIO: €1,000 (founder's own capital only)

**Can you legally produce and sell cans? NO.**

**What €1,000 does buy — and it is not nothing:**

| Item | Cost |
|---|---|
| Business setup (add TEÁOR to family company) | €0–165 |
| Chamber contribution | €14 |
| Food business registration + FELIR | €0 |
| **Hungarian food-law classification opinion** | €150–400 |
| Benchmark products for tasting | €25 |
| Domain + one-page site | €45 |
| Gym sampling campaign (see below) | €0 |
| **Reserve** | **€351–766** `DERIVED: 1,000 − (234 to 649)` |

> ⚠️ **This table assumes an adult-owned family company already exists** and the route is a €0–165 TEÁOR addition. **That has never been established anywhere in this project.** If no family company exists, the route is a secondary-occupation *egyéni vállalkozó* at **~185,000 HUF/yr (€510)** — registration is free, the bookkeeping is not — and the reserve drops to **−€159 to +€256** — i.e. at the top of the opinion's price range **your own €1,000 does not even cover phase 0**. **Ask this on Day 1, before anything else.** See the fallback scenario at the foot of this file.

**Milestone reached:** a legally constituted food business, the make-or-break legal questions answered (DRS scope / Reg. 853/2004 dairy-plant approval / ÁFA / free amino-acid legality / the nitrogen basis for the 20 g claim), written co-packer quotes in hand, and signed LOIs from gyms.

**That is the correct use of €1,000.** It buys certainty, and certainty is what lets your father decide rationally.

### The alternative €1,000 route: launch a powder SKU first

~1,000 stick-packs / sachets for **€700–1,500**. This is the **only** route that puts a real, sellable, branded product in your hands for under €1,000. It de-risks everything downstream: you learn the flavour, build the gym relationships, register the business, and test whether anyone actually buys.

**Verdict:** worth serious consideration. It is not the product you want, but it is a real business, and it makes the can order far less speculative.

---

## SCENARIO: €2,000 ❌ NO LONGER VIABLE

| | |
|---|---|
| **Setup + legal** | €439 |
| **Left for cans** | €1,561 = 566,643 HUF |
| **COGS/can** | **524 HUF** |
| **Cans bought** | **~1,080** `DERIVED: 566,643 ÷ 524` |
| Samples withheld | 40 |
| **Sellable cans** | **~1,040** |
| **Cash buffer** | **€0** ⚠️ none at all |
| Net revenue/can @ 899 direct | 707.87 HUF |
| **Revenue at 100% sell-through** | ~€2,030 |
| **Break-even** | **~1,026 of 1,040 cans = 99%** ❌ |
| **Result at 100% sell-through** | **+€30** |

**Verdict:** ❌ **This does not work any more.** At 491 HUF/can it looked marginal; at the corrected 524 HUF it needs a **99% sell-through to return the capital**, with no contingency and no room for a single rejected pallet. Separately, ~1,080 cans is **below one pallet** and may be below any co-packer's minimum — you may not even be able to place the order. **Do not attempt batch 1 on €2,000.**

---

## SCENARIO: €3,000 ⭐ RECOMMENDED

| | |
|---|---|
| **Cans produced** | **1,700** |
| Samples withheld (hard cap) | **60** |
| **Sellable cans** | **1,640** |
| **Setup + legal** | **€440** |
| **Inventory cost** | **€2,300** headline / **€2,454** at 524 HUF actual |
| **Contingency** | **€260** — of which ~€154 is already consumed by the inventory gap |
| **COGS/can** | **524 HUF** `range 460–620` |
| **RRP** | **899 HUF** |
| **Net revenue/can** | **707.87 HUF** `899 ÷ 1.27` |
| **Contribution/can** | **+183.87 HUF** |
| **Cash deployed** | **€2,740** = 994,620 HUF |
| **Break-even** | **1,405 of 1,640 cans = 86%** ✅ |
| **Headroom** | **235 cans** |
| **Result at 100% sell-through** | **+166,286 HUF = +€458** |
| **Capital at risk** | €3,000 |

**Verdict:** ⭐ **This is the recommendation.** Real cans, sub-DRS, 235 cans of break-even headroom, and enough product to supply 8–15 gyms and learn whether the product sells.

**Father's contribution required: €2,000.**

> ⚠️ **Two honest caveats on this table.**
> **(1)** At 799 RRP instead of 899 the same batch returns **+€102** and needs **1,581 of 1,640 cans = 96%**. That is not a plan, it is a coin flip. **899 is the batch-1 price.**
> **(2)** The €2,300 inventory line is the project-standard headline. At 524 HUF × 1,700 the batch actually costs **€2,454**. The €154 gap plus the €100–150 nitrogen assay plus €0–200 of sleeve origination all land on the €260 contingency, which is **€138 short at base case**. Levers, in order: self-design the artwork (−€80), skip the card reader (−€39), demand sleeves and DDP freight inside the co-packer quote (−€200), or cut the batch to ~1,550 cans. See `18_COMPLETE_STARTUP_COSTS.csv` MEMO row.

---

## SCENARIO: €5,000

| | |
|---|---|
| **Setup + legal** | ~€450 |
| **Cans produced** | **~3,400** — deliberately capped below the 4,500 working cap |
| **COGS/can** | **~465 HUF** `interpolated on the unified curve between 524 @1,700 and 431 @5,000` |
| **Inventory cost** | ~€4,355 |
| **Cash buffer** | ~€195 ⚠️ thin |
| Samples withheld | ~100 |
| **Sellable cans** | ~3,300 |
| **Revenue at 899 direct, 100%** | ~€6,435 |
| **Cash deployed** | ~€4,805 |
| **Break-even** | **~2,464 of 3,300 cans = 75%** |
| **Result at 100% sell-through** | **~+€1,630** |
| **Capital at risk** | €5,000 |

**Verdict:** viable **only if you already hold LOIs for 2,000+ cans.** The per-can economics are genuinely better (465 vs 524) and break-even falls to 75%. But you have doubled your unsold-inventory risk, and selling 3,300 cans through gyms in one season is real, unproven work. Still sub-DRS.

---

## SCENARIO: €7,500 ❌ AVOID

| | |
|---|---|
| **Setup + legal** | ~€500 |
| **Cans produced** | **~6,000** `DERIVED on the unified curve` |
| **COGS/can** | **~421 HUF** |
| **DRS status** | ❌ **THRESHOLD CROSSED — full compliance triggered** |
| **Deposit float** | **€826** locked up `50 HUF × 6,000` |
| Contribution at 470 wholesale | **+49 HUF/can** — positive, but the gym's net margin is only 33.6% |
| Contribution at 899 direct | +287 HUF/can |
| **Capital at risk** | €7,500 |

**Verdict:** ❌ **Avoid — but for the right reasons.** An earlier draft rejected this scenario because COGS (699 HUF) exceeded the wholesale price. **That was an artefact of a broken cost curve and it is not true.** At ~421 HUF the unit economics here are fine. What is wrong with €7,500 is everything else:

1. You cross the DRS threshold and **print the DRS mark on the sleeve — irreversible**, on a 45-day pre-launch gate, with a MOHU per-unit fee that is `UNKNOWN — QUOTE REQUIRED`.
2. €826 of your capital sits frozen as deposit float.
3. You must personally move ~5,880 cans with **no sell-through data whatsoever**, because nobody has ever bought this product.
4. €7,500 is 2.5× the committed family capital.

**Do not spend €7,500 as a first order.** It is a reasonable *second* order, after batch 1 has sold out.

---

## SCENARIO: €10,000

| | |
|---|---|
| **Setup + legal** | ~€500 |
| **Cans produced** | **~8,600** |
| **COGS/can** | **~400 HUF** |
| **DRS status** | Mandatory |
| **Deposit float** | **€1,185** `50 HUF × 8,600` |
| Contribution at 470 wholesale | **+70 HUF/can** ✅ |
| Contribution at 425 wholesale (gives the gym a genuine 40% net margin at 899 RRP) | +25 HUF/can |
| Contribution at 899 direct | +308 HUF/can |
| **Break-even at 899 direct** | ~5,128 of ~8,430 sellable = **61%** |
| **Capital at risk** | €10,000 |

**Verdict:** the first volume at which **wholesale actually works** — a gym can be given a real trade margin and you still earn. But 8,430 cans is roughly **94 cans a day for 90 days**, which is a full-time job, and the DRS apparatus is now permanent. **Not recommended without a signed chain agreement or two sold-out batches behind you.**

---

## FALLBACK SCENARIO: no family company exists

If no adult-owned family company is available, the legal route is a secondary-occupation *egyéni vállalkozó*: registration free, but **~185,000 HUF/yr (€510)** in bookkeeping and chamber contribution `ESTIMATE — dossier A1 §12`.

| | €3,000 plan | Fallback |
|---|---|---|
| Setup + legal | €440 | **€950** |
| Inventory | €2,300 | €2,300 |
| Contingency | €260 | €260 |
| **Total capital needed** | **€3,000** | **€3,510** |
| Father's contribution | €2,000 | **€2,510** |

**This is a Day-1 question, not a Week-6 discovery.** Ask before the conversation about money happens.

---

## THE SMALLEST SENSIBLE AMOUNT

> ## **€3,000 total — of which €2,000 from your father.**

**Why not less:** €2,000 needs a 99% sell-through at the corrected 524 HUF cost, buys less than a pallet, and leaves nothing when the first production run goes wrong — which first production runs do.

**Why not more:** every euro above €3,000 buys cans you have not yet proven you can sell, and above ~4,500 cans you cross into the DRS zone where an irreversible artwork commitment and a compliance apparatus arrive in one step, funded with capital the family does not have.

**What the €2,000 buys your father:** a real product, in real gyms, with real sell-through data, inside 90 days — for less than the price of a used phone. If it works, the case for a €10,000 second round writes itself, and that is the round where wholesale starts paying. If it doesn't, he has lost €2,000 and you have learned more than any business course teaches.

---

## THE ESCALATION LADDER

| Stage | Trigger | Capital | Cans | COGS | What changes |
|---|---|---|---|---|---|
| **0** | Today | €1,000 (yours) | 0 | — | Legal setup + LOIs + written quotes |
| **1** | 8+ signed LOIs | +€2,000 (father) | 1,700 | **524 HUF** | Direct + consignment at 899 only. Sub-DRS |
| **2** | Batch 1 sold in <90 days, 3+ repeat orders | +€5,000 | 3,400 | ~465 HUF | Still sub-DRS. Still no wholesale |
| **3** | Chain agreement OR 2 sold-out batches | +€10,700 | 10,000 | **390 HUF** | ⭐ **Wholesale becomes profitable.** DRS becomes permanent |
| **4** | Regional distributor | +€24,000 | 25,000 | 349 HUF | Meets your 350 HUF target |
| **5** | National listing | +€81,500 | 100,000 | 296 HUF | Meets your 300 HUF target. Iceland-equivalent economics |

**Never skip a stage.** Each one is priced so that failure is survivable.

> **Stage 3 is where the business becomes real** — 10,000 cans at 390 HUF is the first point at which you can give a gym a genuine 35–45% trade margin and still earn (+35 to +80 HUF/can), which is the only way to sell volume without personally handling every can. **An earlier draft put this at 25,000 cans. The corrected cost curve moves it to ~10,000 — the milestone is closer than the plan previously claimed.**

> ⚠️ **Stage 3 is also where DRS stops being optional.** The 45-day gate, the MOHU registrations, the deposit float and the permanently printed DRS mark all arrive with it. Budget the float (€1,185 at 8,600 cans) as capital, not as a fee, and get the MOHU per-unit service fee in writing before ordering — it is still `UNKNOWN — QUOTE REQUIRED`.

---

## WHAT THIS FILE COULD NOT VERIFY

- **The ~5,000-unit DRS carve-out** — `LIKELY — NEEDS PROFESSIONAL CONFIRMATION`. Decree 450/2023 was never read; `legal/10_DRS_REPONT.md` is the authority. Plan against **4,500**.
- **Every COGS figure on the scale curve** — `ESTIMATE`. **Not one supplier price per can exists anywhere in this project.** The 524 HUF base case has no external corroboration.
- **The MOHU per-unit service fee** above the threshold — `UNKNOWN — QUOTE REQUIRED`. It is the most important missing number in Stage 3.
- **Whether a family company exists** — never established. It changes the €1,000 and €3,000 scenarios by €510/yr.
- **Cans per pallet, and therefore whether 1,700 is even an orderable quantity** — this project's own two derivations give 1,680 and 2,880 and cannot both be right. Ask the co-packer before presenting any budget.
