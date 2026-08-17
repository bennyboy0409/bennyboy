# 25 — FULFILMENT: HOW THE CANS ACTUALLY REACH THE GYMS

**Batch 1 = 1,704 cans = 71 cases of 24 · 60 withheld as samples → 1,640 sellable · 8.5 kg per case · RRP 899 HUF · COGS 524 HUF · contribution 183.87 HUF/can sold direct · total batch contribution 1,640 × 183.87 = 301,547 HUF (EUR 831).**

---

## THE RECOMMENDATION, FIRST

> ### BATCH 1 FULFILMENT MODEL
> **Hand delivery by car, Budapest only, on one routed delivery day per week.**
>
> | Rule | Value |
> |---|---|
> | Delivery method | **Own or family car. Founder or an adult family member drives.** |
> | Territory | **Budapest inside the M0 only.** No out-of-town gym in batch 1 |
> | **Minimum drop** | **3 cases (72 cans)** — never deliver 1 case |
> | **Minimum drops per delivery day** | **5** — never make a dedicated trip for one gym |
> | Cadence | **One delivery day per week** (Saturday morning is realistic if an adult drives) |
> | Courier | **Only** for a pre-paid out-of-Budapest order of ≥2 cases, shipping charged to the customer |
> | Distributor | **None in batch 1** |
> | **CASH COST PER CAN** | **~15 HUF / EUR 0.041** — ~25,500 HUF (EUR 70) for the whole batch |
> | **Cost per can incl. notional driver time** | **~44–75 HUF** — not a cash cost, but it is what caps this model |

**Why: at 524 HUF COGS you cannot afford much between you and the shelf.** Wholesale at 470 net loses 54 HUF/can and a 799 RRP with a 160 HUF gym cut loses 20.85 HUF/can — both are forbidden in batch 1 (see `23_SHIPPING.md` §5). **Fulfilment is therefore not a logistics choice — it is forced by the margin.** The only question is how cheaply you can put cans in front of a gym member with your own hands.

**The whole batch can be physically placed in 3 delivery days.** 6 drops × 5 cases = 720 cans/day; 1,704 ÷ 720 = 2.4 days. **Placement is not the hard part. Sell-through is.**

> ⚠️ **This 15 HUF/can appears in NO COGS line anywhere in the project.** Neither `finance/19_UNIT_ECONOMICS.csv` (which builds the 524) nor `18_COMPLETE_STARTUP_COSTS.csv` carries it. **It is a real cost and it is unbudgeted.** The all-in view — 524 COGS + sample dilution + corrected freight + this 15 HUF ≈ **588 HUF per sellable can delivered** — is set out in `23_SHIPPING.md` §5.2. **Against 707.87 HUF net at 899 RRP that is still +120 HUF/can, so the plan survives it. Do not let it stay invisible.**

---

## 1. 🔴 THE DEPENDENCY NOBODY HAS COSTED: WHO DRIVES?

**The founder is a minor.** A Hungarian driving licence for category B is not available at the founder's age, and the plan already establishes that a minor cannot be an *egyéni vállalkozó* or an *ügyvezető*.

**Therefore the entire last-mile model depends on an adult with a car and free weekend hours — realistically the father, who is already the fallback for the business registration.**

| Consequence | What to do about it |
|---|---|
| **Delivery capacity is set by an adult's spare time, not by the founder's.** | **Agree it explicitly, in advance, in writing between you: how many hours per month, and which day.** Do not discover in week 3 that nobody can drive. |
| **Weekday daytime delivery is probably impossible.** | Gyms are open early and late. **Offer 07:00–09:00 or after 18:00 drops, and one weekend morning.** Many gym managers prefer off-peak deliveries anyway. |
| **A no-car week is a stock-out week.** | Keep the public-transport fallback (§3) alive for 2–4-case emergency restocks. |
| **If no adult driver is available at all, the model breaks.** | Then the answer is **not** courier (§4 shows it costs 45–91 % of contribution) — it is to **shrink the territory to gyms you can reach by metro with a hand truck**, and accept a smaller batch. |

**Do not write a fulfilment plan that assumes a driver you have not asked.**

---

## 2. FOUNDER / FAMILY DELIVERY BY CAR

### 2.1 Drops per day — realistic, not optimistic

| Drop type | Time each | **Drops per full day (8 h)** |
|---|---|---|
| **First visit + pitch + delivery** (new gym, meet the manager, agree terms, set up display) | **45–75 min** | **4–6** |
| **Known-contact restock** (drop and go, sign the delivery note, leave) | **20–30 min** | **8–12** |
| Mixed realistic day | — | **5–7** |

`ESTIMATE — derivation: ~15 min drive between Budapest gyms + parking + the drop itself. Dossier B10 §4.1 uses ~1 hour per drop as the planning figure; the split above refines it.`

**Route them.** Six gyms in III–IV–XIII (Óbuda–Újpest–Angyalföld) is a tight morning. Six gyms scattered across XI, XIV, IV and XXII is a whole day of driving. **Cluster by district, not by enthusiasm.**

### 2.2 Cost per drop

| Input | Value | Status |
|---|---|---|
| Budapest round trip per isolated drop | ~15 km | `ESTIMATE` |
| Fuel consumption | 7 l/100 km | `ESTIMATE` |
| **Fuel price** | **UNKNOWN — VERIFY at holtankoljak.hu** | Not obtainable in research |
| **Parking** | **UNKNOWN — VERIFY Budapest zone tariffs at budapest.hu / parkolas.hu** | Not obtainable |

**Fuel cost per isolated 15 km drop, parametric:**

| Fuel price | Litres | **Cost per drop** |
|---|---|---|
| 550 HUF/l | 1.05 | 578 HUF |
| **600 HUF/l** | 1.05 | **630 HUF (EUR 1.74)** |
| 650 HUF/l | 1.05 | 683 HUF |
| 700 HUF/l | 1.05 | 735 HUF |

`DERIVED — 15 km × 0.07 l/km × price. The fuel price is the unknown; the arithmetic is exact. Parking is EXCLUDED and is UNKNOWN.`

**A routed day (6 drops, ~60 km total): 4.2 l ≈ 2,520 HUF at 600 HUF/l ≈ EUR 6.94.** `DERIVED.`

### 2.3 🔴 Cost per can — the table that sets the minimum drop

**Isolated single drop (dedicated trip, 630 HUF fuel, driver time notional at 3,630 HUF/h = EUR 10/h, 1 h per drop):**

| Drop size | Cash HUF/can | **Incl. notional driver time** | **As % of 183.87 HUF contribution** |
|---|---|---|---|
| **1 case (24 cans)** | 26.3 | **177.5 HUF** | **97 % — THE TRIP EATS THE WHOLE SALE** |
| **2 cases (48)** | 13.1 | **88.8 HUF** | 48 % |
| **3 cases (72)** | 8.8 | **59.2 HUF** | 32 % |
| **5 cases (120)** | 5.3 | **35.5 HUF** | 19 % |
| **10 cases (240)** | 2.6 | **17.8 HUF** | 10 % |
| **20 cases (480)** | 1.3 | **8.9 HUF** | 5 % |

**Routed day (6 drops, 60 km, 8 h, 2,520 HUF fuel + 29,040 HUF notional time = 31,560 HUF):**

| Cases per drop | Cans placed that day | Cash HUF/can | **Incl. notional time** | % of contribution |
|---|---|---|---|---|
| 2 cases | 288 | 8.8 | **109.6** | 60 % |
| **3 cases** | **432** | **5.8** | **73.1** | 40 % |
| **5 cases** | **720** | **3.5** | **43.8** | **24 %** |
| 10 cases | 1,440 | 1.8 | 21.9 | 12 % |

`DERIVED — arithmetic exact. The 3,630 HUF/h driver rate is a NOTIONAL opportunity cost (dossier B10's EUR 10/h), not a wage anyone is paid. UNKNOWN — the founder's and the family driver's real opportunity cost.`

> **THE OPERATING RULE, and it is the highest-leverage line in this file:**
> **A one-case delivery costs 177 HUF/can in loaded cost against a 183.87 HUF contribution. It consumes 97 % of the sale even though it feels like a win.**
> **Minimum 3 cases per drop. Minimum 5 drops per day. Below either, don't get in the car.**
>
> ⚠️ **At a 160 HUF gym cut the contribution is 57.89 HUF/can and a one-case drop costs 3× what the case earns.** If you conceded the bigger cut, the minimum drop is not 3 cases — it is 5.

### 2.4 Car capacity

| Load | Cases | Weight | Fits? |
|---|---|---|---|
| Comfortable hatchback load | 15–25 | 128–213 kg | ✅ Yes, boot + rear seats down. ~0.19–0.32 m³ |
| Full delivery day, 6 × 5 cases | 30 | **255 kg** | ✅ Yes for most cars, but check payload (typical 400–500 kg incl. occupants) |
| Half the batch | 36 | 306 kg | ⚠️ At the limit |
| **Whole batch (71 cases)** | 71 | **603 kg** | ❌ **Exceeds any passenger car.** Batch 1 needs 3–5 car loads out of storage |

`DERIVED — 8.5 kg/case, 0.0127 m³/case. Car payload figure is ESTIMATE — MODEL KNOWLEDGE, check your vehicle's plate.`

**Load the car the night before.** Cases in the boot, nothing on the parcel shelf, nothing that slides.

---

## 3. PUBLIC TRANSPORT — THE FALLBACK, NOT THE MODEL

| Method | Realistic load | Cans | Verdict |
|---|---|---|---|
| Carried by hand, bus/metro with one change | **2 cases (17 kg)** | **48** | Samples and emergency top-ups only |
| **With a folding hand truck / sack barrow** | **4 cases (34 kg)** | **96** | ✅ **A real 4-case restock to a metro-adjacent gym** |
| Backpack + one case | 1 case + loose | ~30 | Sampling visit |

`ESTIMATE — human carrying limits. BKK pass price: UNKNOWN — VERIFY at bkk.hu. Folding hand truck price: UNKNOWN — QUOTE REQUIRED, but it is the cheapest capacity upgrade in this file and worth buying if no car is reliably available.`

**Verdict: public transport cannot carry the initial placement (71 cases) but can carry the restocks.** A 4-case restock is 96 cans — above the 3-case minimum. **For gyms within 10 minutes' walk of a metro stop (Astoria, Nyugati, Allee/XI., Újpest/IV.), the hand-truck route is genuinely viable and costs a BKK fare.**

**It is also the answer to "what if nobody can drive this week".** Keep the hand truck.

---

## 4. COURIER PER CASE

**All tariffs UNKNOWN — QUOTE REQUIRED (GLS, DPD, MPL, Packeta, FoxPost — see `23_SHIPPING.md` §3).** The scenarios below bracket the plausible range and are **SCENARIO INPUTS, not quotes.**

| Parcel cost per 24-case | **HUF/can** | **% of 183.87 HUF contribution** |
|---|---|---|
| 1,500 HUF | **62.5** | **34 %** |
| 2,200 HUF | **91.7** | **50 %** |
| 3,000 HUF | **125.0** | **68 %** |

`DERIVED — parcel cost ÷ 24.`

### 4.1 The thing about couriers that people get wrong

**Courier cost per can does NOT improve with order size the way driving does, because you pay per parcel.** A 3-case order is 3 parcels at roughly 3× the price. Driving 3 cases to one gym costs the same fuel as driving 1. **This is why the minimum-drop rule works for a car and does nothing for a courier.**

**The only way courier cost per can falls is to palletise** — which needs a full pallet, a tail-lift at the far end, and a customer big enough to take it. That is a batch-3 problem.

### 4.2 When to use a courier anyway

| Use case | Verdict |
|---|---|
| Restocking your own inventory | ❌ **Never.** 1.5–3× the cost of pallet freight |
| Delivering to a Budapest gym | ❌ **Never.** Driving costs 3–9 HUF/can; courier costs 63–125 |
| **Pre-paid out-of-Budapest order, ≥2 cases, shipping charged to the customer** | ✅ **Yes — this is the only correct use.** You are not paying; they are |
| Sending samples (4–6 cans) to a prospect | ✅ Yes. It is a marketing cost, book it as such |
| Out-of-town gym that wants a free trial case | ⚠️ **Only if you are willing to spend 1,500–3,000 HUF on that prospect.** Often you should be. Decide deliberately |

**Set the webshop / DM shipping rule now: outside Budapest, shipping is charged, minimum order 2 cases. Inside Budapest, free hand delivery, minimum 3 cases (or collection in person).**

---

## 5. CONSOLIDATED PALLET DROP TO A DISTRIBUTOR

**Cheapest freight per can by a wide margin, attached to the one channel you cannot afford.**

| Line | Value |
|---|---|
| Domestic HU pallet delivery (1 pallet, ~630–1,040 kg, tail-lift) | **UNKNOWN — QUOTE REQUIRED** |
| Freight per can if a pallet costs 15,000 HUF, over 2,880 cans | **5.2 HUF/can** `DERIVED` |
| Freight per can if a pallet costs 30,000 HUF, over 2,880 cans | **10.4 HUF/can** `DERIVED` |
| **Distributor contribution per can at batch-1 COGS** | **−179 to −206 HUF** (see `23_SHIPPING.md` §5) |
| **Gym wholesale @470 net at batch-1 COGS** | **−54 HUF** |

> **Verdict: a distributor pallet drop costs you ~5–10 HUF/can in freight and ~180–206 HUF/can in margin. Net destruction of value at 524 HUF COGS.**
> **Not a batch-1 option. Wholesale to a gym or store becomes contribution-positive at ~10,000 cans (COGS ~390 HUF), not at 25,000** — the earlier 25,000 figure came from a broken cost curve and has been corrected in your favour. **A distributor, who takes another 25–40 % off wholesale, needs materially more volume still.** Keep the number; you will need it in 2027.

---

## 6. THE CONSIGNMENT CASH TRAP — READ BEFORE YOU PLACE ANYTHING

Consignment feels free. It is not: **you are lending the gym your inventory.**

| Consignment position | Cans out | **Your capital parked (at 524 HUF cost)** |
|---|---|---|
| 1 gym × 1 case | 24 | 12,576 HUF (EUR 35) |
| 1 gym × 5 cases | 120 | **62,880 HUF (EUR 173)** |
| **30 cases across all accounts (the cap)** | **720** | **377,280 HUF (EUR 1,039)** |
| **14 gyms × 5 cases** | **1,680** | **880,320 HUF (EUR 2,425) — YOUR ENTIRE BATCH, ZERO CASH BACK** |

`DERIVED — cans × 524 HUF landed COGS.`

**You have EUR 3,000 in total, of which EUR 2,740 is already deployed. If you consign the whole batch you have nothing left, no cash, and 14 counterparties who owe you money on no fixed date.**

**Rules:**
- [ ] **Cap CONSIGNED STOCK OUTSTANDING at ~720 cans / 30 cases (44 % of your 1,640 sellable) at any one moment.** ⚠️ **This is a cap on cans in other people's fridges, NOT a cap on accounts.** `sales/27_GYM_SALES_STRATEGY.md` §6 targets **12–15 gym accounts** — that is compatible, because each account holds **1–2 cases at a time**, not 5. **12–15 accounts × 1–2 cases = 288–720 cans out. It fits.** What does not fit is treating an LOI's "5 cases" as a first delivery.
- [ ] **Agree the settlement cycle in writing before the first drop: count and pay every 14 days**, in person, on the physical count — matching the offer, the placement agreement and the LOI in `27` and `28`. *(An earlier version of this file said 30 days. 14 is the number of record; a 30-day cycle doubles the capital you have parked.)*
- [ ] **Agree the gym's cut in writing. Open at 100 HUF; maximum 160 HUF of the 899 HUF RRP.** At 233 HUF you break even and above it you lose money. **Never combine a 160 HUF cut with a 799 RRP — that combination loses 20.85 HUF/can.** See `23_SHIPPING.md` §5.
- [ ] **Count the stock yourself at every restock visit.** The count is the invoice.
- [ ] **Prefer cash-on-delivery to consignment wherever a gym will accept it**, even at a slightly better price for them. Cash now beats margin later at EUR 3,000 of capital.

---

## 7. THE DELIVERY DAY — OPERATING PROCEDURE

### 7.1 Night before
- [ ] Print/prepare **delivery notes (szállítólevél)** — one per gym, two copies
- [ ] Load the car: cases by drop order, **last drop at the bottom**
- [ ] Confirm each gym by message: *"Holnap 9-10 között viszem az árut, jó lesz?"*
- [ ] Take: pen, phone, card reader (if selling for cash), a few loose cans for tasting, the stock spreadsheet

### 7.2 At each gym
- [ ] Carry cases in — **never leave stock outside or with a receptionist who won't sign**
- [ ] **Fill the fridge/counter display first, put the rest in their back stock**
- [ ] **Count and record the previous drop's remaining stock** (this is the consignment invoice)
- [ ] **Both sign the delivery note. You keep one copy.**
- [ ] Photograph the display. It is your social content and your proof of placement
- [ ] Ask one question: *"Hogy fogyott? Mit mondtak róla?"* — write the answer down

### 7.3 🔴 The delivery note is a legal document, not a receipt

Every drop must record: **date · customer name and address · product · quantity · LOT NUMBER · best-before date.**

**This is your food-law traceability record** (one step back to the co-packer, one step forward to the customer). **If you ever have to withdraw product, this sheet is the only thing that lets you do it — and it is the first thing an inspector asks for.** Keep every copy. See `24_STORAGE.md` §5.3.

### 7.4 After
- [ ] Update the stock spreadsheet the same evening: out-quantity, lot, customer
- [ ] Log the fuel receipt
- [ ] Diary the next restock date per gym based on observed sell-through

---

## 8. COST SUMMARY — BATCH 1 FULFILMENT

| Line | Amount | Per can | Status |
|---|---|---|---|
| Fuel, ~3 placement days + ~15 restock half-days | **~27,000 HUF (EUR 74)** | **~15.9 HUF** | `ESTIMATE — 60 km routed days at 600 HUF/l; fuel price UNKNOWN` |
| Parking | **UNKNOWN — VERIFY** | UNKNOWN | Budapest zone tariffs not obtainable |
| Courier, out-of-Budapest orders (customer-paid) | 0 net | 0 | Charged through |
| Courier, samples to prospects | ~5,000–15,000 HUF | 3–9 HUF | Book as marketing, not logistics |
| Delivery notes, print | ~0 | 0 | Print at home |
| Folding hand truck (optional, buy only if no reliable car) | **UNKNOWN — QUOTE REQUIRED** | — | |
| **TOTAL CASH LAST-MILE, BATCH 1** | **~25,000–30,000 HUF (EUR 69–83)** | **~15 HUF/can** | **`ESTIMATE`** |
| *Memo: same work valued at 3,630 HUF/h notional* | *~180,000–280,000 HUF* | *44–75 HUF/can* | *Not a cash cost* |

**Book 15 HUF/can for last-mile. It is ~8 % of your 183.87 HUF contribution — acceptable. Nothing else in this file is.**

⚠️ **It is booked nowhere else.** Add it to `finance/18_COMPLETE_STARTUP_COSTS.csv` as a real EUR 69–83 line, or accept that the EUR 3,000 total is short by that much. **A cost that only exists in the logistics file is a cost the budget does not have.**

### 8.1 The direct-sales workload nobody has costed

`27_GYM_SALES_STRATEGY.md` §6 assigns **~640 cans to direct sale** — events, D2C multipacks and hand-selling. That is not a residual; it is **39 % of your sellable stock** and it is the difference between clearing the batch and not.

| Line | Value |
|---|---|
| Cans to be sold direct | **~640** |
| Over 90 days | **~7 cans/day, every day** |
| Invoicing | **One invoice per sale** (`legal/07_HUNGARY_BUSINESS_SETUP.md` §8) |
| Who does it | **A minor, around school** |
| Scheduled anywhere in the 30-day plan | **No** |
| Costed anywhere | **No** |

**The only channel that moves this in usable blocks is events** — 200–400 cans across a handful of weekends, at full RRP with no margin given away, and often free to attend as a product sponsor. **If you cannot name three events by Day 19, do not assume the 640 cans. Open more gym accounts instead and re-run §6's consignment cap against the larger consigned position.**

---

## 9. WHY THIS MODEL EXPIRES AT ~5,000 CANS — AND WHY THAT'S CONVENIENT

At 6 drops × 5 cases per delivery day = **720 cans placed per day**:

| Annual volume | Placement days | + restock half-days | **Realistic total commitment** |
|---|---|---|---|
| 1,704 (batch 1) | 2.4 | ~15 | **~10 full-day equivalents/year** — trivial |
| **5,000** | **7** | ~40 | **~27 full-day equivalents/year ≈ one weekend morning a week** — **sustainable** |
| 15,000 | 21 | ~120 | **~81 days/year** — **a full part-time job. The model breaks.** |
| 25,000 | 35 | ~200 | **~135 days/year** — impossible for one person |

`ESTIMATE — derivation shown.`

> **The hand-delivery model runs out of hours at roughly 5,000 cans a year.**
> **The DRS/MOHU deposit obligation also very probably begins at roughly 5,000 cans a year** — legal threshold ~5,000, **operating cap 4,500** per `legal/10_DRS_REPONT.md` §13.
> **These two ceilings land in the same place, and that is not a coincidence — it is the natural size of a one-person, one-car, one-pallet business.**
>
> **Batch 1 should not try to escape either ceiling. Stay under 4,500 cans, deliver by hand, keep the whole 183.87 HUF/can, and let the volume decision wait until you have real sell-through data and a COGS below 390 HUF — which the rebuilt cost curve puts at ~10,000 cans.**
>
> ⚠️ **Note the tension that creates.** Wholesale becomes viable at ~10,000 cans, but 10,000 cans is **more than double the 4,500-can DRS operating cap** and **~81 days a year of your own delivery time**. **Crossing into wholesale means taking on DRS registration, the deposit float and the artwork change at the same time.** That is a batch-3 decision made deliberately, not a growth curve you drift up.

---

## 10. OPEN ITEMS — WHO TO ASK

| Item | Ask | Blocks what |
|---|---|---|
| **Is an adult family driver actually available, and on which day?** | **Your father / family — have this conversation this week** | The entire model (§1). ⚠️ **`36_THE_26_QUESTIONS.md` Q19 answers "you deliver them personally by car or public transport". That is not executable — a category B licence is not available at the founder's age, and public transport with a hand truck carries 4 cases (96 cans) against a 71-case initial placement.** The correct answer is: an adult drives, you ride along, and the hours are agreed in writing before you order |
| **Can you name three sport events for the ~640 direct cans?** | **Race organisers, CrossFit box comps, university sport days — by Day 19** | §8.1. Without them the direct channel is 7 hand-sales a day for 90 days |
| Hungarian fuel price (HUF/l) | holtankoljak.hu | Precise §2 costs |
| Budapest parking zone tariffs | budapest.hu / parkolas.hu | Precise §2 costs |
| BKK monthly pass price | bkk.hu | §3 fallback costing |
| Folding hand truck price | Any Hungarian tool retailer | §3 fallback |
| Courier tariff, 8.9 kg parcel, domestic | gls-group.eu/HU · dpd.hu · posta.hu · packeta.hu · foxpost.hu | §4 — and the D2C verdict in `23_SHIPPING.md` |
| **Parcel-locker weight cap** | **foxpost.hu · packeta.hu — highest-value single check** | Whether locker delivery is available at all |
| Domestic HU pallet delivery rate, tail-lift | Any Hungarian forwarder | §5, batch 3 |
| **Gym trade terms: margin demanded, consignment settlement cycle, whether they will pay cash on delivery** | **The gyms themselves — see `26_GYM_PROSPECTS.csv`. No Hungarian gym's trade terms were verified in research.** | §6 — and whether the channel works at all |
