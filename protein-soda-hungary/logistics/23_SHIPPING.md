# 23 — SHIPPING: WEIGHTS, FREIGHT, COURIERS, AND THE D2C VERDICT

**FX throughout: 1 EUR = 363 HUF. Batch 1 = 1,700 cans (60 samples → 1,640 sellable), landed COGS 524 HUF/can `ESTIMATE, range 460–620`, RRP 899 HUF, contribution 183.87 HUF/can sold direct.**

---

## THE FIVE ANSWERS, FIRST

1. 🔴 **HOW MANY CANS FIT ON A PALLET IS UNKNOWN, AND THE WHOLE BATCH SIZE RESTS ON IT.** This project contains two irreconcilable derivations: `manufacturing/14_FIRST_BATCH.md` §1 gets **~1,680 cans** (280/layer × 6 layers) and this file gets **2,880** (216/layer × 12 layers). **They cannot both be right and neither is a co-packer's build.** The entire batch size, budget and DRS headroom rest on the claim that Opre' Label's published "from one pallet" MOQ equals ~1,700 cans. **If "one pallet" means a real pallet, the minimum order could be ~2,880 cans = EUR 3,895 at 524 HUF — more than the entire EUR 3,000 capital, and over half the DRS ceiling in one order.** **This is Opre question #1 and it is a hard gate before any budget is presented to the father.** See §1.3.
2. **Buy the freight from the co-packer, DDP Budapest — do not arrange it yourself.** One invoice, one counterparty, no forwarder account, no tail-lift argument. This is the single biggest admin saving available in this file.
3. **The finance model budgets inbound freight at 15 HUF/can (= EUR 70 for the whole batch). That is optimistic for a cross-border pallet.** Realistic is **32–64 HUF/can** (EUR 150–300). **Budget 45 HUF/can.** At 45 HUF the landed cost is **~554 HUF** — still inside the 460–620 modelled range — and direct contribution falls from 183.87 to **~154 HUF/can**. See §2.5.
4. **The can format is not decided anywhere in this project, and it changes every table in this file.** Product, co-packer and competitor files assume a **330 ml SLEEK** can (Ø ~58.1 mm); this file's original pallet, case and weight tables were computed on a **standard "211"** can (Ø ~66.3 mm). See §1.3.
5. **D2C single-order shipping is not economically rational below 24 cans, and a 6-can order loses money at every plausible tariff.** Break-even shipping cost on a 6-can order is **1,103 HUF total**. **Never offer free shipping on a 6-pack. Set the free-shipping threshold at 24 cans or don't offer it at all.** See §4.

---

## 1. UNIT AND CASE WEIGHTS

### 1.1 The single can

| Component | Value | Status |
|---|---|---|
| Liquid, 330 ml | 330 g | Brief's figure. A zero-sugar protein solution is ~1.01–1.03 g/ml → true fill **333–340 g**. `ESTIMATE` |
| Aluminium body + end | 13 g | Brief's figure. Modern lightweighted 330 ml cans sit ~12.5–13.5 g. `LIKELY — NOT VERIFIED. Get the can spec sheet from the co-packer.` |
| **Filled can, gross** | **343 g** | `DERIVED` = 330 + 13. Conservative case **350 g**. |

**Plan at 343 g. Carry 350 g when a carrier's weight band is close to a cut-off.** The 2 % difference changes no conclusion in this file, but it can change which price band a parcel falls into.

### 1.2 Weight ladder — the table to quote from

| Qty | Cans only | As shrink trays | **Boxed for courier (gross)** | Notes |
|---|---|---|---|---|
| 6 cans | 2.058 kg | 2.08 kg | **~2.4 kg** | +box ~250 g, filler ~100 g |
| **12 cans** | 4.116 kg | 4.14 kg | **~4.5 kg** | |
| **24 cans (1 case)** | 8.232 kg | **8.5 kg** | **~8.9 kg** | The standard trade unit. ~265 × 400 × 120 mm |
| **48 cans (2 cases)** | 16.46 kg | 17.0 kg | **~17.8 kg** | Two parcels, not one — see §4.2 |
| **96 cans (4 cases)** | 32.93 kg | 34.0 kg | **~35.6 kg** | Beyond most single-parcel caps. Ship as 4 parcels or palletise |
| **1,704 cans (BATCH 1, 71 trays)** | 583.4 kg | 603.6 kg | **~629 kg on pallet** | 8 layers, ~1,066 mm tall incl. pallet |
| **2,880 cans (full pallet, 120 trays)** | 987.8 kg | 1,011.8 kg | **~1,037 kg on pallet** | 15 layers, ~1,872 mm tall |

`DERIVED — arithmetic from 343 g/can + tray board 0.20 kg + film 0.03 kg + EPAL pallet 25 kg.`

**Practical instruction: order in whole trays.** 1,700 ÷ 24 = 70.83. **Tell the co-packer "71 trays = 1,704 cans", not "1,700 cans".** Odd-count part-trays create loose cans that get damaged and cannot be sold as a case.

### 1.3 🔴 Cans per Euro pallet — UNKNOWN, and this is the highest-stakes unknown in the file

> **State it plainly: cans per pallet is UNKNOWN. Our own two derivations give 1,680 and 2,880 and they cannot both be right.**
>
> | Source | Derivation | Cans/pallet |
> |---|---|---|
> | `manufacturing/14_FIRST_BATCH.md` §1 | ~280 cans/layer × 6 layers | **~1,680** ("range 1,500–2,500") |
> | This file, §1.3 below | 216 cans/layer × 12 layers | **2,880** |
>
> **The two disagree on both terms** — 280 vs 216 cans per layer, and 6 vs 12–15 layers. **No file in the project reconciles them, and no co-packer has confirmed either.**
>
> **Why it decides the project:** the batch size, the EUR 2,300 inventory budget and the DRS headroom all rest on "Opre' Label's *from one pallet* MOQ ≈ 1,700 cans". **If a real pallet is 2,880 cans, the minimum order is ~1,509,120 HUF = EUR 4,157 at 524 HUF/can** — above the entire EUR 3,000 capital, and **64% of the 4,500-can DRS operating cap consumed in a single order.**
>
> ### 🛑 OPRE QUESTION #1, BEFORE ANY BUDGET GOES TO THE FATHER:
> **"Hány 330 ml-es doboz van egy raklapon, és vállalnak-e rész-raklapos gyártást?"**
> *(How many 330 ml cans are on one pallet, and will you fill a part-pallet?)*
> **Do not present a EUR 3,000 plan until this is answered in writing. State the EUR 3,900–4,200 downside case out loud when you do.**

**The geometry below is arithmetic, not a quote.** Euro pallet (EPAL) **1200 × 800 mm**, deck 144 mm, ~25 kg.

**⚠️ Format is undecided.** The product, co-packer and competitor files assume a **330 ml SLEEK** can; the tables in this file were built on a **standard "211"** can. `manufacturing/12_COPACKERS.csv` and `13_COPACKER_RANKING.md` both describe the target line's 330 ml as **sleek (Ø 53–58 mm)**. **Recommendation: specify SLEEK** — it is the format the Icelandic benchmark uses and the one that reads premium in a gym fridge — **and put "330 ml SLEEK (Ø ~58 mm), not standard 211" into every RFQ.** Then re-derive the tables below on the confirmed spec.

```
STANDARD 211:  can Ø 66.3 mm, h 115.2 mm.  24-tray ≈ 265 × 398 mm (4 × 6)
   1200/398 = 3  ×  800/265 = 3  →  9 trays = 216 cans/layer.  Layer height ~120 mm
SLEEK:         can Ø 58.1 mm, h 145 mm.    24-tray ≈ 233 × 349 mm (4 × 6)
   1200/349 = 3  ×  800/233 = 3  →  9 trays = 216 cans/layer.  Layer height ~150 mm
```

`DERIVED — arithmetic shown. Both formats give 216 cans/layer; they differ in LAYER HEIGHT, so a sleek pallet reaches a height limit sooner and carries fewer layers for the same stack height.`

| Build | Trays | **Cans** | Gross weight | Height (standard) | Height (sleek) |
|---|---|---|---|---|---|
| 15 layers (max geometric, standard only) | 135 | 3,240 | ~1,166 kg | ~1,872 mm | n/a — too tall |
| 12 layers | 120 | 2,880 | ~1,037 kg | ~1,527 mm | ~1,944 mm |
| **8–10 layers (weight-capped build)** | 72–90 | **~2,000–2,300** | ~700–850 kg | ~1,070–1,300 mm | ~1,344–1,644 mm |
| **BATCH 1 as built (8 layers)** | **71** | **1,704** | **~629 kg** | **~1,066 mm** | **~1,344 mm** |

`ESTIMATE — geometric derivation from dossier B10 §1.3 plus the sleek arithmetic above. NOT a co-packer spec. Gross weight is format-independent (liquid dominates); height is not.`

**Do NOT use any number in this table for planning until Opre answers question #1. Ask every co-packer: "Hány rekesz / hány raklap lesz ez, mennyi a raklap bruttó súlya és magassága, és sleek vagy standard dobozzal dolgoznak?" Their actual build governs, not this table.**

### 1.4 ⚠️ Why a full pallet is a problem and batch 1 is not

A **full** 2,880-can pallet weighs ~1,037 kg. Pallet networks and groupage tariffs commonly cap a "standard Euro pallet" at **700–1,000 kg**, above which the consignment is re-rated, surcharged, or refused. `LIKELY — MODEL KNOWLEDGE, NOT VERIFIED. Check against each carrier's actual tariff.`

**Batch 1 at ~629 kg sits comfortably below any plausible cap — *if* batch 1 is 1,704 cans.** If Opre's one-pallet MOQ turns out to be ~2,880 cans (§1.3), you inherit the overweight problem immediately, on top of an unaffordable order. Otherwise you inherit it only from batch 2 onward. When it arrives, the fix is to **build short** (8–10 layers) rather than pay the overweight band.

**Always quote freight by giving gross weight and dimensions, never "one pallet":**
> **1 raklap, 1200 × 800 × 1100 mm, bruttó 630 kg, NEM rakatolható (nem stackable), általános áru, nem ADR.**

Declaring a load stackable when it is not is the most common way small shippers get re-invoiced.

---

## 2. INBOUND FREIGHT: CO-PACKER → BUDAPEST

### 2.1 The rates — all UNKNOWN

**No freight rate was obtainable. Every cell below is a blank to be filled, never a number to assume.**

| Lane | Distance to Budapest | 1 pallet | 2 pallets | 4 pallets | Relative expectation |
|---|---|---|---|---|---|
| **Slovakia** (Bratislava/Nitra) | ~200 km | UNKNOWN — QUOTE REQUIRED | UNKNOWN | UNKNOWN | **Cheapest lane** |
| **Austria** (Vienna/Styria) | ~245 km | UNKNOWN — QUOTE REQUIRED | UNKNOWN | UNKNOWN | **2nd cheapest** |
| **Czechia** (Bohemia/Moravia) | ~400–600 km | UNKNOWN — QUOTE REQUIRED | UNKNOWN | UNKNOWN | Mid |
| **Poland** (Silesia/Poznań) | ~400–600 km | UNKNOWN — QUOTE REQUIRED | UNKNOWN | UNKNOWN | Mid |
| **Germany** (Bavaria/Saxony) | 900 km+ | UNKNOWN — QUOTE REQUIRED | UNKNOWN | UNKNOWN | **Most expensive** |
| **Hungary domestic** (if Opre/Bubee fill in HU) | 0–200 km | UNKNOWN — QUOTE REQUIRED | UNKNOWN | UNKNOWN | **Cheapest of all** |

`Distances: SEARCH-VERIFIED via dossier B10 §2.1. Rates: UNKNOWN — QUOTE REQUIRED.`

**First question to Opre Label (sales@oprelabel.com) is not price — it is: "Hol töltik? Melyik országban van a töltő üzem?"** The plan targets Opre; the finance model notes freight is "higher if Opre fills in Slovakia". **Until you know the filling country you cannot cost the freight.** `CONFLICT — see §6.`

### 2.2 Four ways to buy it, ranked

| # | Option | What you do | Cost | Verdict |
|---|---|---|---|---|
| **1** | **Co-packer quotes DDP Budapest** | Add one line to the RFQ: *"Kérem, adjanak árat DDP Budapest paritással is."* | Buried in their invoice; they buy freight at trade rates you cannot access | ✅ **DO THIS.** No forwarder account, no customs paperwork, no tail-lift negotiation, one counterparty if the pallet arrives damaged |
| 2 | Groupage forwarder (*gyűjtőfuvar*) | Get 3 quotes, book, brief the driver | Market rate | Use only if the co-packer refuses DDP or the DDP quote is visibly padded |
| 3 | Online freight marketplace | Post the consignment, compare bids | Usually cheapest headline, weakest service recovery | Use as a **price benchmark** to check the co-packer's DDP quote, even if you don't book |
| 4 | Dedicated van/truck | Charter a vehicle | Irrational for 1 pallet | ❌ Never at this scale |

**Who to ask (names taken from dossier B10 §7 verification worklist — these are search targets, not verified providers. No contact detail, URL, rate or MOQ for any of them was obtained. Do not treat this as a shortlist.):**
Freightos · Cargoboard · Onlinespedition · Trans.eu · Shiply · Palletways · Raben · Gebrüder Weiss · Dachser · DSV.
**UNKNOWN — QUOTE REQUIRED for all.** Ask each for an all-in EUR price, 1 pallet, 1200×800×1100 mm, 630 kg, non-stackable, tail-lift delivery to a residential/ground-floor address.

### 2.3 Structural facts that hold regardless of the rate

- **Groupage is the only sane mode at 1–4 pallets.** A dedicated vehicle for one pallet is irrational.
- **Pallets 2, 3 and 4 are much cheaper than pallet 1.** Pickup, delivery and admin barely change with pallet count. **This is the main reason to order more than one pallet at a time — but it collides with the ~5,000-can DRS ceiling. Do not order a second pallet just to save freight.**
- **Intra-EU = no duty, no import VAT at the border.** Intra-Community acquisition, self-assessed and simultaneously deducted on the Hungarian VAT return. **Freight is the only cross-border cash cost.** `LIKELY — per dossier A2.`
- **ADR: not applicable.** A non-alcoholic carbonated beverage is ordinary general cargo.
- **A near co-packer carries a structural landed-cost advantage.** Slovakia/Austria vs Germany could differ by 30+ HUF/can. **Do not choose a co-packer on ex-works price alone.**
- **Tail-lift is mandatory for delivery to anywhere without a dock.** 629 kg cannot come off a truck by hand. Specify **"emelőhátfalas gépkocsi kell"** in every booking. Missing it means a failed delivery and a re-delivery fee.

### 2.4 Freight cost per can — the parametric table (safe to use now)

**At batch 1's 1,704 cans on one short pallet — this is your number:**

| Freight, 1 pallet | EUR/can | **HUF/can** | As % of 524 HUF COGS | Bite out of 183.87 HUF contribution |
|---|---|---|---|---|
| EUR 70 *(what the finance model assumes)* | 0.041 | **15.0** | 2.9 % | 8 % |
| EUR 100 | 0.059 | **21.3** | 4.1 % | 12 % |
| **EUR 150** | 0.088 | **32.0** | 6.1 % | **17 %** |
| **EUR 200** | 0.118 | **42.7** | 8.1 % | **23 %** |
| **EUR 250** | 0.147 | **53.4** | 10.2 % | **29 %** |
| EUR 300 | 0.176 | **64.1** | 12.2 % | 35 % |
| EUR 400 | 0.235 | **85.4** | 16.3 % | 46 % |

`DERIVED — freight × 363 ÷ 1,704. Arithmetic exact; the freight input is the unknown.`

**At a full 2,880-can pallet (batch 2 planning):**

| Freight, 1 pallet | EUR/can | HUF/can |
|---|---|---|
| EUR 150 | 0.052 | 18.9 |
| EUR 200 | 0.069 | 25.2 |
| EUR 300 | 0.104 | 37.8 |
| EUR 400 | 0.139 | 50.4 |

**Read across: freight per can on batch 1 is ~1.7× worse than on a full pallet, because you are paying to move 41 % air.** This is the real cost of the small first batch — accept it, don't fix it by over-ordering into DRS territory.

### 2.5 Budget instruction

> **Budget inbound freight at 45 HUF/can = ~76,700 HUF = EUR 211 for batch 1.**
> `ESTIMATE — midpoint of the EUR 150–300 plausible band ÷ 1,704 cans.`
> If the co-packer's DDP quote implies less, bank the difference into contingency. If it implies more than 65 HUF/can, get a second quote before accepting.

> ### 🔴 RECONCILIATION WITH THE FINANCE MODEL — read this before quoting any margin
> `finance/19_UNIT_ECONOMICS.csv` builds the **524 HUF** landed COGS with freight at **15 HUF/can**, and `18_COMPLETE_STARTUP_COSTS.csv` carries the same item at **0 / QUOTE REQUIRED**. **Two files carry two different numbers for one line, and this file says both are too low.**
>
> | | Freight 15 HUF (finance model) | **Freight 45 HUF (this file's budget)** |
> |---|---|---|
> | Landed COGS | **524 HUF** | **~554 HUF** — still inside the modelled 460–620 range |
> | Contribution, direct @899 | **183.87** | **~153.87** |
> | Contribution, consignment @899, gym keeps 100 | 105.13 | ~75.13 |
> | Contribution, consignment @899, gym keeps 160 | 57.89 | **~27.89 — nearly gone** |
> | Break-even cans at 899 direct (EUR 2,740 deployed) | 1,405 of 1,640 | **~1,405 of 1,640** *(break-even is driven by net revenue, not COGS; what changes is the profit at full sell-through: +EUR 458 → ~+EUR 323)* |
>
> **The decision this forces: make "delivered DDP Budapest, freight inside the per-can price" a written condition of every quote.** Then the freight line stops being a separate risk and the quoted per-can number is the real one. **Do not leave two files carrying 15 HUF and 0 HUF for the same item.** `logistics/25_FULFILMENT.md` §8 also books **15 HUF/can of last-mile cost that appears in no COGS line anywhere** — see §5.2 below for the all-in view.

---

## 3. DOMESTIC COURIER TARIFFS — A 24-CAN CASE

### 3.1 The tariffs — all UNKNOWN

**No carrier tariff, weight limit or locker dimension was obtainable. I am deliberately not writing numbers here from memory: parcel weight caps change by product tier, and the entire viability of the cheap D2C channel hinges on them.**

| Carrier | Domestic HU, ~8.9 kg parcel | Max weight | Locker/point limits | Where to get it |
|---|---|---|---|---|
| **GLS Hungary** | UNKNOWN — QUOTE REQUIRED | **UNKNOWN — VERIFY** | GLS ParcelShop: UNKNOWN | gls-group.eu/HU — business rate card, ask for a *szerződéses ügyfél* tariff |
| **DPD Hungary** | UNKNOWN — QUOTE REQUIRED | **UNKNOWN — VERIFY** | DPD Pickup: UNKNOWN | dpd.hu — request a *keretszerződés* quote |
| **Magyar Posta / MPL** | UNKNOWN — QUOTE REQUIRED | **UNKNOWN — VERIFY** | Posta Pont / MPL automata: UNKNOWN | posta.hu — MPL Üzleti csomag price list |
| **Packeta (Zásilkovna) HU** | UNKNOWN — QUOTE REQUIRED | **UNKNOWN — VERIFY** | **Pickup-point model; the weight cap is the binding constraint** | packeta.hu — register as a sender, tariff appears in the portal |
| **FoxPost (parcel lockers)** | UNKNOWN — QUOTE REQUIRED | **UNKNOWN — VERIFY PER LOCKER SIZE** | **Box dimensions AND weight cap both bind** | foxpost.hu — *csomagautomata méretek és súlyhatár* |

**🔴 THE SINGLE HIGHEST-VALUE VERIFICATION IN THIS ENTIRE PROJECT'S LOGISTICS:**
> **Does any Hungarian parcel-locker network accept an 8.9 kg, 265 × 400 × 120 mm parcel, and at what price?**
> A 24-can case measures ~265 × 400 × 120 mm — **it will fit a medium locker box dimensionally. The weight is the question.** If a locker accepts it cheaply, the 12-can D2C order becomes profitable and the whole §5 verdict softens. If it does not, you are forced onto courier-to-address and the verdict below stands unchanged.
> **This is a 20-minute check on foxpost.hu and packeta.hu. Do it before you design any webshop shipping option.**

### 3.2 What is solid without the tariffs

- **8.9 kg sits comfortably inside the normal road-courier parcel range** (networks generally run to 20–40 kg), so a case-sized parcel is a *supported* shipment at every carrier above. The question is price, not acceptability.
- **48 cans = 17.8 kg is near or over the practical single-parcel limit and is awkward to lift.** Ship 2 × 24 as two parcels. **96 cans = 4 parcels.** Above ~4 parcels, palletise instead.
- **Every courier network prices business senders below the counter rate.** Even at 50 parcels/year, ask. `LIKELY — standard practice, NOT VERIFIED.`
- **EPR is charged on the shipping carton and film regardless of volume** — ~2.52 HUF/can on a ~350 g carton of 24, already inside the 524 HUF COGS (the EPR line there is 5.10 HUF/can, primary + secondary). You never escape it, DRS threshold or not.

### 3.3 Parcel vs pallet — the ratio that decides everything

| Cost of one 24-case parcel | HUF/can | vs. palletised inbound at 42.7 HUF/can |
|---|---|---|
| 1,500 HUF (EUR 4.13) | **62.5** | 1.5× |
| 2,200 HUF (EUR 6.06) | **91.7** | 2.1× |
| 3,000 HUF (EUR 8.26) | **125.0** | 2.9× |

`DERIVED — parcel price ÷ 24. Parcel prices are SCENARIO INPUTS chosen to bracket the plausible range, NOT quotes from any carrier.`

> **Moving cans by parcel costs 1.5–3× more per can than moving them on a pallet.**
> **Never use a courier to restock your own inventory. Couriers exist only to serve an end customer who is paying for it.**

---

## 4. CRITICAL ANALYSIS — IS D2C SINGLE-ORDER SHIPPING RATIONAL?

### 4.1 The economics, at the agreed plan's real numbers

Inputs: **RRP 899 HUF incl. 27 % ÁFA → 707.87 HUF net. COGS 524 HUF. Contribution before shipping = 183.87 HUF/can.**

| Order | Cans-only wt | Boxed wt | **Order value (incl VAT)** | **Contribution before shipping** | **Break-even shipping cost** |
|---|---|---|---|---|---|
| **6 cans** | 2.06 kg | ~2.4 kg | **5,394 HUF / EUR 14.86** | **1,103 HUF / EUR 3.04** | **1,103 HUF** |
| **12 cans** | 4.12 kg | ~4.5 kg | **10,788 HUF / EUR 29.72** | **2,206 HUF / EUR 6.08** | **2,206 HUF** |
| **24 cans** | 8.23 kg | ~8.9 kg | **21,576 HUF / EUR 59.44** | **4,413 HUF / EUR 12.16** | **4,413 HUF** |

`DERIVED — 183.87 HUF × n. Break-even shipping = the point at which absorbing delivery consumes 100 % of contribution.`

### 4.2 Shipping as % of order value

| Order | @ 1,500 HUF | @ 2,200 HUF | @ 3,000 HUF |
|---|---|---|---|
| **6 cans** (5,394 HUF) | **27.8 %** | **40.8 %** | **55.6 %** |
| **12 cans** (10,788 HUF) | **13.9 %** | **20.4 %** | **27.8 %** |
| **24 cans** (21,576 HUF) | **7.0 %** | **10.2 %** | **13.9 %** |

### 4.3 Net contribution if you absorb shipping ("free delivery")

| Order | @ 1,500 HUF | @ 2,200 HUF | @ 3,000 HUF |
|---|---|---|---|
| **6 cans** | **−397 HUF** | **−1,097 HUF** | **−1,897 HUF** |
| **12 cans** | +706 HUF | **+6 HUF** | **−794 HUF** |
| **24 cans** | +2,913 HUF | +2,213 HUF | +1,413 HUF |

**And this is before** box + filler (~200–400 HUF/order), card-payment fee (~1.5 % = 81–324 HUF), and your packing time. **Add those and the 12-can order goes negative at anything above ~1,500 HUF of postage.**

### 4.4 🔴 THE BLUNT VERDICT

**No. D2C single-order shipping is not economically rational for this product below 24 cans, and this holds across the entire plausible shipping-cost range.**

1. **A 6-can order with free shipping loses money at every plausible tariff.** Break-even is **1,103 HUF** all-in for a 2.4 kg parcel — still below anything a Hungarian courier is likely to charge for a doorstep delivery. **Do not offer a 6-pack with free shipping. Ever.**
2. **The 899 RRP improved this, but did not fix it.** At 799 the 6-can break-even was 828 HUF; at 899 it is 1,103 HUF and the 12-can order moves from clearly negative to roughly break-even at a 2,200 HUF tariff. **The structure is unchanged: the higher price bought you one tier, not a business model.**
3. **The product is heavy relative to its value.** At 899 HUF and 343 g, value density is **~2,621 HUF/kg (EUR 7.2/kg)**. Parcel shipping costs the equivalent of hundreds of HUF per kg on small consignments. **You are posting something barely more valuable per kilo than the postage.** This is the structural reason no soft-drink brand sells single cases by mail, and no amount of marketing fixes it.
4. **The one workable D2C configuration: minimum order 24 cans, shipping charged explicitly, or a free-shipping threshold set at 24 cans (21,576 HUF).** At that size shipping is 7–14 % of order value and contribution is a real 1,400–2,900 HUF.
5. **Therefore D2C's job in batch 1 is not profit. It is brand, sampling, email capture and proof of demand.** The startup-cost file is right to say *"do not build a webshop for batch 1."* **Take D2C orders by DM and bank transfer, deliver by hand in Budapest, and charge for shipping outside it.**
6. **The one thing that could change this verdict:** a parcel-locker product that accepts 8.9 kg cheaply (§3.1). **Check it first.**

---

## 5. CHANNEL RANKING BY CONTRIBUTION PER CAN

**At batch-1 economics: COGS 524 HUF, RRP 899 HUF, net revenue 707.87 HUF.**

| Rank | Channel | What you receive incl. VAT | Net of 27 % | **Contribution/can** | Verdict |
|---|---|---|---|---|---|
| **1** | **DIRECT — founder sells at full RRP** (hand-sold at gyms, events, DM + bank transfer, hand delivery) | 899 | 707.87 | **+183.87 HUF / EUR 0.51** | ✅ **The channel the batch is funded on** |
| **2** | **D2C, 24-can order, shipping CHARGED to customer** | 899 | 707.87 | **+145 to +155 HUF** *(after ~15–25 HUF/can packaging + ~14 HUF card fee)* | ✅ Works at 24 cans. Marginal at 12, negative at 6 |
| **3** | **CONSIGNMENT @899, gym keeps 100 HUF (11 %)** ⭐ | 799 | 629.13 | **+105.13 HUF / EUR 0.29** | ✅ **The gym offer to open with** |
| **4** | **CONSIGNMENT @899, gym keeps 160 HUF (18 %)** | 739 | 581.89 | **+57.89 HUF / EUR 0.16** | ⚠️ Thin but positive. **The maximum gym cut batch 1 can carry** |
| **5** | **CONSIGNMENT @799, gym keeps 160 HUF** | 639 | 503.15 | **−20.85 HUF** | 🛑 **FORBIDDEN.** This was the previously recommended offer |
| **6** | **GYM WHOLESALE at ~470 net** | 470 net | 470.00 | **−54.00 HUF** | 🛑 **FORBIDDEN in batch 1** |
| **7** | **SUPPLEMENT STORE WHOLESALE** (stores demand 35–40 % of RRP and expect payment terms) | 539–584 | 425–460 | **−64 to −99 HUF** | ❌ **Do not open this channel in batch 1** |
| **8** | **DISTRIBUTOR** (25–40 % off wholesale) | ~404–438 | ~318–345 | **−179 to −206 HUF** | ❌ Not available until ~10,000 cans at the earliest |

`DERIVED — arithmetic from the agreed 524 HUF COGS and 899 HUF RRP. The channel discount percentages in rows 7–8 are ESTIMATE assumptions, not quoted trade terms. UNKNOWN — QUOTE REQUIRED: actual margin demanded by any named Hungarian gym, store or distributor.`

### 5.1 The four things this table tells you

1. **At 524 HUF COGS, only channels where you capture at least ~665 HUF gross are profitable.** **The break-even gym cut at a 899 RRP is 233 HUF (26 % of RRP).** `DERIVED: 899 − (524 × 1.27) = 233.52.` Above that you are paying a gym to hold your inventory.
2. **Raising the RRP from 799 to 899 is what re-opened the consignment channel.** At 799 a 160 HUF gym cut was **loss-making**; at 899 the same 160 HUF cut yields +57.89. **The price move, not a cost move, is what made the gym channel viable.**
3. **The ranking inverts on scalability.** Contribution runs 1→8; ability to grow without the founder in a car runs 8→1. **Start at rank 1, prove demand, and only buy your way down the list once COGS falls below ~390 HUF at ~10,000 cans** — the rebuilt cost curve puts the wholesale crossover there, not at 25,000.
4. **Total contribution on the batch is 1,640 sellable × 183.87 = 301,547 HUF ≈ EUR 831** *if every sellable can goes direct at full RRP.* **That is your entire batch-1 upside, before the EUR 440 of setup.** Every 10 HUF/can of freight, storage or courier cost you fail to control removes **16,400 HUF (EUR 45)** from it. That is why §2.5 tells you to budget freight properly and §3.3 tells you never to courier your own stock.

### 5.2 🔴 The all-in cost per SELLABLE can delivered — the stress test

The 524 HUF COGS is a per-*produced*-can factory-gate-plus-freight number. Three real costs sit outside it:

| Line | HUF/can | Where it comes from |
|---|---|---|
| Landed COGS as modelled | **524.00** | `finance/19_UNIT_ECONOMICS.csv` |
| **Sample dilution** — batch cost spreads over 1,640 sellable, not 1,700 | **+19.2** | `DERIVED: 524 × 1700/1640 = 543.2` |
| **Corrected inbound freight** — 45 HUF instead of the 15 modelled | **+30.0** | §2.5 above |
| **Last-mile** — hand delivery, in no COGS line anywhere | **+15.0** | `logistics/25_FULFILMENT.md` §8 |
| **ALL-IN PER SELLABLE CAN DELIVERED** | **≈ 588 HUF** | `DERIVED` |

**Against 707.87 HUF net at 899 RRP that is still +120 HUF/can — the batch survives the stress test.** *(At the old 799 RRP it would have been 629.13 − 588 = **+41 HUF**, which is why 799 was abandoned.)*

> **Use 524 for the decision of record and 588 for the "what if everything lands at the pessimistic end" conversation with your father.** Do not blend them. `finance/19_UNIT_ECONOMICS.csv`'s 1,405-can break-even is the number of record.

---

## 6. CONFLICTS AND OPEN QUOTES

| # | Issue | Detail |
|---|---|---|
| C1 | **Inbound freight budgeted twice, inconsistently** | `19_UNIT_ECONOMICS.csv` carries **15 HUF/can (ESTIMATE)**; `18_COMPLETE_STARTUP_COSTS.csv` carries **0 / QUOTE REQUIRED**. 15 HUF/can = **EUR 70 for a cross-border pallet** — achievable domestically or if buried in a DDP tolling price, unlikely as a standalone international groupage rate. **This file recommends 45 HUF/can (landed ~554 instead of 524).** Settled by: one DDP quote from Opre Label. **Fix it at source by requiring DDP Budapest pricing.** |
| C2 | **Dossier B10 ranked D2C 4th and gym wholesale 2nd; this file ranks D2C 2nd and gym wholesale 6th** | B10 used an illustrative EUR 0.69 (250 HUF) COGS. **The agreed plan's COGS is 524 HUF.** At 524 HUF every trade discount goes negative and full-price channels win. **This file's ranking supersedes B10's** because it uses the agreed numbers. |
| C3 | **Filling country unknown** | Opre Label may fill in Slovakia (per finance-file note) — the lane, and therefore the freight, is unpriceable until confirmed. |
| **C4** | 🔴 **CANS PER PALLET — two irreconcilable derivations** | `14_FIRST_BATCH.md` §1 says ~1,680 (280/layer × 6); this file says 2,880 (216/layer × 12). **The batch size, the budget and the DRS headroom all rest on the smaller figure being right.** Settled by: **Opre question #1** (§1.3). **Nothing should be presented to the father before this is answered.** |
| **C5** | 🔴 **CAN FORMAT — sleek vs standard 211, never decided** | Product, co-packer and competitor files assume **330 ml SLEEK (Ø ~58.1 mm)**; this file's and `24_STORAGE.md`'s pallet, case, floor-loading and freight tables were built on **standard 211 (Ø ~66.3 mm)**. Format drives cans-per-pallet, case dimensions, sleeve dimensions and artwork. **No RFQ in `31_EMAILS_ENGLISH.md` or `32_EMAILS_HUNGARIAN.md` specifies it.** Recommendation: **specify SLEEK** and add "330 ml SLEEK (Ø ~58 mm), not standard 211" to every RFQ. |
| **C6** | **Last-mile cost appears in no COGS line** | `25_FULFILMENT.md` §8 books **15 HUF/can** of hand-delivery cost. It is in neither `19_UNIT_ECONOMICS.csv` nor `18_COMPLETE_STARTUP_COSTS.csv`. Carried here in the §5.2 all-in view. |

**UNKNOWN — QUOTE REQUIRED, with who to ask:**

| Item | Ask |
|---|---|
| 🛑 **CANS PER PALLET, and will they fill a part-pallet?** | **Opre Label — sales@oprelabel.com. QUESTION #1. Hard gate before any budget is presented.** |
| Freight, co-packer → Budapest, DDP | **Opre Label — sales@oprelabel.com**; **Bubee Hungary Kft — info@bubee.eu, +36 30 240 0493** |
| Filling country / plant location | Same two |
| Actual pallet build (trays/layer, layers, gross kg, gross height) | Same two |
| **Can format: 330 ml SLEEK (Ø ~58 mm) or standard 211 (Ø ~66.3 mm)?** | Same two — **put it in the first email; it changes the sleeve artwork** |
| Can spec sheet (exact weight, Ø, height, standard vs sleek) | Co-packer → can supplier |
| **Thermal process and the resulting AMBIENT shelf life, in writing** | Same two. **A cold-fill route with no thermal step may give days-to-weeks, which would destroy the gym-fridge model** (`product/06_SAFETY_AND_SHELF_LIFE.md`) |
| Groupage rate benchmark, 630 kg non-stackable | Freightos / Cargoboard / Onlinespedition / Shiply / Palletways / Raben / Gebrüder Weiss / Dachser / DSV *(names from B10 §7 target list — unverified, no contacts held)* |
| Domestic parcel tariff, 8.9 kg | gls-group.eu/HU · dpd.hu · posta.hu (MPL Üzleti) |
| **Parcel-locker weight cap + box dimensions** | **foxpost.hu · packeta.hu — DO THIS FIRST** |
| Hungarian fuel price (feeds file 25) | holtankoljak.hu |
