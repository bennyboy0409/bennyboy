# 23 — SHIPPING: WEIGHTS, FREIGHT, COURIERS, AND THE D2C VERDICT

**FX throughout: 1 EUR = 363 HUF. Batch 1 = ~1,700 cans, landed COGS 491 HUF/can, RRP 799 HUF, contribution 138 HUF/can.**

---

## THE FOUR ANSWERS, FIRST

1. **Batch 1 is 0.59 of a pallet — 71 trays, ~629 kg gross, ~1.07 m tall.** That is good news: it is **under** the 700–1,000 kg weight cap that re-rates a full beverage pallet into a penalty band, and it is short enough to fit anywhere. You are shipping an *easy* consignment.
2. **Buy the freight from the co-packer, DDP Budapest — do not arrange it yourself.** One invoice, one counterparty, no forwarder account, no tail-lift argument. This is the single biggest admin saving available in this file.
3. **The finance model budgets inbound freight at 15 HUF/can (= EUR 70 for the whole batch). That is optimistic for a cross-border pallet.** Realistic is **32–64 HUF/can** (EUR 150–300). It does not break the plan — it costs you **~20–35 % of your contribution per can**. Budget 45 HUF/can and be pleased if it comes in lower. See §3.3.
4. **D2C single-order shipping is not economically rational below 12 cans, and is a guaranteed loss at 6 cans.** Break-even shipping cost on a 6-can order is **828 HUF total** — below anything a Hungarian courier is likely to charge. **Never offer free shipping on a 6-pack. Set the free-shipping threshold at 24 cans or don't offer it at all.** See §5.

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

### 1.3 Cans per Euro pallet

Euro pallet (EPAL) **1200 × 800 mm**, deck 144 mm, ~25 kg. 330 ml can Ø ~66.3 mm, height ~115.2 mm ("211" diameter).
`LIKELY — definitional standard / can-maker spec. NOT VERIFIED this session. Confirm the can format with the co-packer before ordering — a "sleek" 330 ml is ~58.1 × 145 mm and packs completely differently.`

```
24-tray footprint  ≈ 265 × 398 mm  (4 × 6 cans)
Orientation B:  1200/398 = 3  ×  800/265 = 3  →  9 trays = 216 cans per layer
Loose square packing gives 18 × 12 = 216 cans per layer → layer efficiency 100 %
```

| Build | Trays | **Cans** | Gross weight | Height |
|---|---|---|---|---|
| 15 layers (max geometric) | 135 | 3,240 | ~1,166 kg | ~1,872 mm |
| **12 layers (planning figure)** | **120** | **2,880** | **~1,037 kg** | ~1,527 mm |
| **8–10 layers (realistic weight-capped build)** | 72–90 | **~2,000–2,300** | ~700–850 kg | ~1,070–1,300 mm |
| **BATCH 1 as built** | **71** | **1,704** | **~629 kg** | **~1,066 mm** |

`ESTIMATE — derivation shown above. Source: geometric derivation in dossier B10 §1.3, not a co-packer spec.`

**Use 2,880 cans/pallet for planning. Ask every co-packer: "Hány rekesz / hány raklap lesz ez, és mennyi a raklap bruttó súlya?" Their actual build governs, not this table.**

### 1.4 ⚠️ Why a full pallet is a problem and batch 1 is not

A **full** 2,880-can pallet weighs ~1,037 kg. Pallet networks and groupage tariffs commonly cap a "standard Euro pallet" at **700–1,000 kg**, above which the consignment is re-rated, surcharged, or refused. `LIKELY — MODEL KNOWLEDGE, NOT VERIFIED. Check against each carrier's actual tariff.`

**Batch 1 at ~629 kg sits comfortably below any plausible cap.** You inherit this problem only from batch 2 onward. When it arrives, the fix is to **build short** (8–10 layers) rather than pay the overweight band.

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

| Freight, 1 pallet | EUR/can | **HUF/can** | As % of 491 HUF COGS | Bite out of 138 HUF contribution |
|---|---|---|---|---|
| EUR 70 *(what the finance model assumes)* | 0.041 | **15.0** | 3.1 % | 11 % |
| EUR 100 | 0.059 | **21.3** | 4.3 % | 15 % |
| **EUR 150** | 0.088 | **32.0** | 6.5 % | **23 %** |
| **EUR 200** | 0.118 | **42.7** | 8.7 % | **31 %** |
| **EUR 250** | 0.147 | **53.4** | 10.9 % | **39 %** |
| EUR 300 | 0.176 | **64.1** | 13.1 % | 46 % |
| EUR 400 | 0.235 | **85.4** | 17.4 % | 62 % |

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
- **EPR is charged on the shipping carton and film regardless of volume** — ~2.52 HUF/can on a ~350 g carton of 24, already in the 491 HUF COGS. You never escape it, DRS threshold or not.

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

Inputs: **RRP 799 HUF incl. 27 % ÁFA → 629 HUF net. COGS 491 HUF. Contribution before shipping = 138 HUF/can.**

| Order | Cans-only wt | Boxed wt | **Order value (incl VAT)** | **Contribution before shipping** | **Break-even shipping cost** |
|---|---|---|---|---|---|
| **6 cans** | 2.06 kg | ~2.4 kg | **4,794 HUF / EUR 13.21** | **828 HUF / EUR 2.28** | **828 HUF** |
| **12 cans** | 4.12 kg | ~4.5 kg | **9,588 HUF / EUR 26.41** | **1,656 HUF / EUR 4.56** | **1,656 HUF** |
| **24 cans** | 8.23 kg | ~8.9 kg | **19,176 HUF / EUR 52.83** | **3,312 HUF / EUR 9.12** | **3,312 HUF** |

`DERIVED — 138 HUF × n. Break-even shipping = the point at which absorbing delivery consumes 100 % of contribution.`

### 4.2 Shipping as % of order value

| Order | @ 1,500 HUF | @ 2,200 HUF | @ 3,000 HUF |
|---|---|---|---|
| **6 cans** (4,794 HUF) | **31.3 %** | **45.9 %** | **62.6 %** |
| **12 cans** (9,588 HUF) | **15.6 %** | **22.9 %** | **31.3 %** |
| **24 cans** (19,176 HUF) | **7.8 %** | **11.5 %** | **15.6 %** |

### 4.3 Net contribution if you absorb shipping ("free delivery")

| Order | @ 1,500 HUF | @ 2,200 HUF | @ 3,000 HUF |
|---|---|---|---|
| **6 cans** | **−672 HUF** | **−1,372 HUF** | **−2,172 HUF** |
| **12 cans** | +156 HUF | **−544 HUF** | **−1,344 HUF** |
| **24 cans** | +1,812 HUF | +1,112 HUF | +312 HUF |

**And this is before** box + filler (~200–400 HUF/order), card-payment fee (~1.5 % = 72–288 HUF), and your packing time. **Add those and the 12-can order at 1,500 HUF goes negative too.**

### 4.4 🔴 THE BLUNT VERDICT

**No. D2C single-order shipping is not economically rational for this product below 24 cans, and this holds across the entire plausible shipping-cost range.**

1. **A 6-can order with free shipping loses money at every plausible tariff.** Break-even is **828 HUF** all-in for a 2.4 kg parcel. **Do not offer a 6-pack with free shipping. Ever.**
2. **The product is heavy relative to its value.** At 799 HUF and 343 g, value density is **~2,330 HUF/kg (EUR 6.4/kg)**. Parcel shipping costs the equivalent of hundreds of HUF per kg on small consignments. **You are posting something barely more valuable per kilo than the postage.** This is the structural reason no soft-drink brand sells single cases by mail, and no amount of marketing fixes it.
3. **The one workable D2C configuration: minimum order 24 cans, shipping charged explicitly, or a free-shipping threshold set at 24 cans (19,176 HUF).** At that size shipping is 8–16 % of order value and contribution is a real 1,100–1,800 HUF.
4. **Therefore D2C's job in batch 1 is not profit. It is brand, sampling, email capture and proof of demand.** The startup-cost file is right to say *"do not build a webshop for batch 1."* **Take D2C orders by DM and bank transfer, deliver by hand in Budapest, and charge for shipping outside it.**
5. **The one thing that could change this verdict:** a parcel-locker product that accepts 8.9 kg cheaply (§3.1). **Check it first.**

---

## 5. CHANNEL RANKING BY CONTRIBUTION PER CAN

**At batch-1 economics: COGS 491 HUF, RRP 799 HUF, net revenue 629 HUF.**

| Rank | Channel | What you receive incl. VAT | Net of 27 % | **Contribution/can** | Verdict |
|---|---|---|---|---|---|
| **1** | **DIRECT — founder sells at full RRP** (hand-sold at gyms, events, DM + bank transfer, hand delivery) | 799 | 629 | **+138 HUF / EUR 0.38** | ✅ **The only channel that clearly works** |
| **2** | **D2C, 24-can order, shipping CHARGED to customer** | 799 | 629 | **+105 to +123 HUF** *(after ~15–25 HUF/can packaging + ~12 HUF card fee)* | ✅ Works at 24 cans. Negative below 12 |
| **3** | **CONSIGNMENT, gym keeps ≤15 % (120 HUF)** | 679 | 534.6 | **+44 HUF / EUR 0.12** | ⚠️ Thin but positive. **This is the maximum gym cut batch 1 can carry** |
| **4** | **CONSIGNMENT or GYM WHOLESALE at a 25 % cut** (wholesale ~470 net) | 599 | 471.7 | **−19 to −21 HUF** | ❌ **Loses money.** Matches the agreed plan's finding |
| **5** | **SUPPLEMENT STORE WHOLESALE** (stores demand 35–40 % and expect payment terms) | 480–520 | 378–409 | **−82 to −113 HUF** | ❌ **Do not open this channel in batch 1** |
| **6** | **DISTRIBUTOR** (25–40 % off wholesale) | ~445–505 | ~350–398 | **−93 to −141 HUF** | ❌ Not available until ~25,000 cans |

`DERIVED — arithmetic from the agreed 491 HUF COGS and 799 HUF RRP. The channel discount percentages in rows 3–6 are ESTIMATE assumptions, not quoted trade terms. UNKNOWN — QUOTE REQUIRED: actual margin demanded by any named Hungarian gym, store or distributor.`

### 5.1 The three things this table tells you

1. **At 491 HUF COGS, only channels where you capture the full 799 HUF retail price are profitable.** Every intermediary is fatal. **The break-even gym cut is 175 HUF (22 % of RRP).** Above that you are paying a gym to hold your inventory.
2. **The ranking inverts on scalability.** Contribution runs 1→6; ability to grow without the founder in a car runs 6→1. **Start at rank 1, prove demand, and only buy your way down the list once COGS falls below ~420 HUF at ~25,000 cans.**
3. **Total contribution on the whole batch is 1,704 × 138 = 235,152 HUF ≈ EUR 648** *if every can sells direct at full RRP.* **That is your entire batch-1 upside.** Every 10 HUF/can of freight, storage or courier cost you fail to control removes **17,040 HUF (EUR 47)** from it. That is why §2.5 tells you to budget freight properly and §3.3 tells you never to courier your own stock.

---

## 6. CONFLICTS AND OPEN QUOTES

| # | Issue | Detail |
|---|---|---|
| C1 | **Inbound freight budgeted twice, inconsistently** | `19_UNIT_ECONOMICS.csv` carries **15 HUF/can (ESTIMATE)**; `18_COMPLETE_STARTUP_COSTS.csv` carries **0 / QUOTE REQUIRED**. 15 HUF/can = **EUR 70 for a cross-border pallet** — achievable domestically or if buried in a DDP tolling price, unlikely as a standalone international groupage rate. **This file recommends 45 HUF/can.** Settled by: one DDP quote from Opre Label. |
| C2 | **Dossier B10 ranked D2C 4th and gym wholesale 2nd; this file ranks D2C 2nd and gym wholesale 4th** | B10 used an illustrative EUR 0.69 (250 HUF) COGS. **The agreed plan's COGS is 491 HUF.** At 491 HUF every trade discount goes negative and full-price channels win. **This file's ranking supersedes B10's** because it uses the agreed numbers. |
| C3 | **Filling country unknown** | Opre Label may fill in Slovakia (per finance-file note) — the lane, and therefore the freight, is unpriceable until confirmed. |

**UNKNOWN — QUOTE REQUIRED, with who to ask:**

| Item | Ask |
|---|---|
| Freight, co-packer → Budapest, DDP | **Opre Label — sales@oprelabel.com**; **Bubee Hungary Kft — info@bubee.eu, +36 30 240 0493** |
| Filling country / plant location | Same two |
| Actual pallet build (trays/layer, layers, gross kg) | Same two |
| Can spec sheet (exact weight, Ø, height, standard vs sleek) | Co-packer → can supplier |
| Groupage rate benchmark, 630 kg non-stackable | Freightos / Cargoboard / Onlinespedition / Shiply / Palletways / Raben / Gebrüder Weiss / Dachser / DSV *(names from B10 §7 target list — unverified, no contacts held)* |
| Domestic parcel tariff, 8.9 kg | gls-group.eu/HU · dpd.hu · posta.hu (MPL Üzleti) |
| **Parcel-locker weight cap + box dimensions** | **foxpost.hu · packeta.hu — DO THIS FIRST** |
| Hungarian fuel price (feeds file 25) | holtankoljak.hu |
