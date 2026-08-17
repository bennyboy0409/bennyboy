# 34 — OPEN QUOTES & UNVERIFIED FACTS

**The verify-before-you-spend list. Work top to bottom.**

This file exists because the research for this project ran under a network policy that **blocked direct access to every primary source** — EUR-Lex, the European Commission, EFSA, NÉBIH, NAV, MOHU, the EPO register, and every supplier website returned `403` at the egress proxy. Web *search* worked; page *retrieval* did not.

**Nothing here was invented.** But a number seen in a search result is not the same as a number read on the source page, and you are about to spend real money.

---

## TIER 1 — BLOCKING. Resolve before ANY cash leaves your account.

| # | Question | Who answers it | Cost | Why it blocks |
|---|---|---|---|---|
| **1** | **Is there really a ~5,000 unit/year DRS exemption? Is it automatic or must it be notified?** | Hungarian food lawyer (see `32_EMAILS_HUNGARIAN.md` §7) or MOHU | €150–400 | The entire batch-1 architecture assumes it. If wrong, you need the DRS mark printed on the artwork **before** production, plus registration and a 45-day gate. |
| **2** | **Opre' Label: MOQ, price/can, and IS THE PLANT IN HUNGARY OR SLOVAKIA?** | `sales@oprelabel.com` | €0 | Determines whether the recommended plan is even available, and changes freight/VAT/EPR. |
| **3** | **Does a whey-containing beverage require a Reg. 853/2004 dairy-approved filling plant?** | Food lawyer + each co-packer | included in #1 | **This determines your entire co-packer pool.** If yes, most can fillers are disqualified and collagen-only becomes near-mandatory. |
| **4** | **ÁFA rate: 27% standard or 18% milk-product?** | Food lawyer / accountant | included in #1 | **Worth ~57 HUF/can.** At 18% your margin roughly doubles. |
| **5** | **Whey protein isolate: can you actually buy 25–100 kg, and at what price?** | Ingredient suppliers | €0 | European producers were reported **sold out** in April 2026 with WPC80 at €20,250/t. If you cannot buy whey, ARCH F is dead and you go collagen-only. |
| **6** | **Co-packer setup / changeover / allergen-cleaning fees** | Each co-packer | €0 | At 1,700 cans these fees can exceed the product cost. Currently a total unknown. |

> **Items 1, 3 and 4 are answered by ONE food-law opinion.** Buy it first. It is the highest-leverage €275 in the project.

---

## TIER 2 — Needed before production, not before enquiry.

| # | Question | Who answers it | Status |
|---|---|---|---|
| 7 | GS1 Hungary joining fee + annual fee + smallest GTIN package | gs1hu.org | `UNKNOWN — fee schedule unobtainable` |
| 8 | Will MOHU/retailers accept a **reseller** barcode, or must the GTIN be GS1-issued? | GS1 Hungary + MOHU | `UNKNOWN` — assume GS1-issued is required |
| 9 | Shrink sleeve price at 2,000 / 5,000 units + application cost | Sleeve printers | `QUOTE REQUIRED` |
| 10 | Inbound freight, co-packer → Budapest, 1 pallet | Co-packer (ask for DDP) | `QUOTE REQUIRED` |
| 11 | Minimum ingredient purchase quantities — will you be forced to buy more collagen/whey than 1,700 cans needs? | Ingredient suppliers | `QUOTE REQUIRED` — **could add several hundred euro** |
| 12 | Product liability insurance premium | Colonnade, CIG Pannónia EMABIT, Marsh, biztositson.hu | `QUOTE REQUIRED` — no Hungarian insurer publishes premiums |
| 13 | Bookkeeping monthly fee | Local könyvelőiroda | `QUOTE REQUIRED` |
| 14 | Is an online **pénztárgép** required for cash sales at gyms/events? | Accountant | `NEEDS PROFESSIONAL CONFIRMATION` — affects direct-sales model |

---

## TIER 3 — Needed only if you cross ~5,000 cans/year.

| # | Question | Who | Note |
|---|---|---|---|
| 15 | **MOHU per-unit service fee (HUF/can)** | MOHU PartnerPortal | ⚠️ **The single most important missing number above threshold.** Bounded reasoning: even at 10 HUF/can it is ~1% of RRP — get the quote, but do not let it block progress |
| 16 | MOHU producer registration fee + per-GTIN product registration fee | MOHU | `UNKNOWN — QUOTE REQUIRED` |
| 17 | Does MOHU require physical can samples for RVM testing? How many, what lead time? | MOHU | `UNKNOWN` |
| 18 | Exact DRS mark artwork specification and where to download it | MOHU | `UNKNOWN` |
| 19 | Is the 50 HUF deposit subject to 27% ÁFA? | Accountant | Affects invoicing and shelf price display |
| 20 | Has the deposit amount or scope changed since 2023? | Food lawyer | `450/2023 (X.4.) Korm. rendelet` amendments **could not be read** |
| 21 | **NETA scope** for a caffeinated protein drink | Food lawyer / NAV | Blocks the batch-2 caffeine SKU. Could make it uneconomic |

---

## TIER 4 — Do before scaling past 25,000 units.

| # | Question | Who | Note |
|---|---|---|---|
| 22 | **EP2001312B1 — validated in Hungary? Renewal fees paid? Exact granted claim scope?** | EP/HU patent attorney (30 min) | Granted EP patent covering carbonation 0.1–4 vol + pH 2–3.4 + WPI ≥90%. Priority 2006-03-10, filed 2007-03-09 → **term expires ~2027-03-09** `DERIVED`. **The EPO register was egress-blocked.** Also check family: US7205018B2, WO2006042222A2, US7897192B2, US9220292B2, and Fizzique's 7 US patents |
| 23 | Trademark clearance for the chosen name | SZTNH + EUIPO search | Free to search. File only when volume justifies |
| 24 | Austrian EWP Recycling Pfand fees + whether dual HU/AT marking is permitted | pfandsystem.at | Likely needs **separate GTINs and separate artwork** — a reason to stay Hungary-only in year 1 |

---

## RESEARCH THAT FAILED AND SHOULD BE RE-RUN

Be aware these gaps exist. Do not mistake absence of data for absence of options.

| Area | What happened | Priority |
|---|---|---|
| **Poland & Baltics co-packers** | Agent returned **zero verified suppliers** — search budget exhausted + egress blocks. It explicitly warned: *"Do not merge any name from Section 4 into a supplier shortlist."* | ⭐ **HIGHEST.** Poland is Europe's cheapest large beverage manufacturing base and is the most likely source of a better quote than anything currently on the shortlist |
| **SE Europe / UK / Benelux co-packers** | Same — no verified MOQs obtained | High |
| **Beverage science (A8)** | Agent hit the session limit before running | Medium — `product/05_FOOD_CHEMISTRY.md` was written from D1/D2 instead |
| **Laboratories (A9)** | Agent hit the session limit | Medium — lab work is largely avoidable for batch 1 |
| **GS1 / admin costs (A10)** | Agent hit the session limit | Medium |
| **Cost curves (D3–D8)** | 6 agents hit the session limit | Medium — the scale curve in `19_UNIT_ECONOMICS.csv` is built from D1's model plus derivation, not from a dedicated study |
| **Gym prospect lists** | Contact details could not be verified through blocked pages; only ~7 verified rows obtained of a 160 target | ⭐ **HIGH — but you can fix this yourself for free in an afternoon.** See `sales/26_GYM_PROSPECTS.csv` |

---

## HOW TO READ EVERY NUMBER IN THIS PROJECT

| Tag | Meaning | Trust level |
|---|---|---|
| `CONFIRMED` | Primary text quoted directly | High |
| `SEARCH-VERIFIED` | Appeared in a search result attributed to a named URL; page not opened | Medium — **re-check before spending** |
| `DERIVED` | Arithmetic from stated inputs; derivation shown | High if inputs hold |
| `ESTIMATE` | Reasoned derivation, shown | Low–medium — treat as a planning figure only |
| `QUOTE REQUIRED` | Must be asked of a named supplier | None — it is a gap |
| `NEEDS PROFESSIONAL CONFIRMATION` | Requires a Hungarian adviser | None — it is a gap |
| `UNKNOWN` | Could not be obtained | None |

---

## THE HONEST SUMMARY

**What is solid:**
- The strategic logic (collagen-forward, one SKU, sub-DRS pilot, consignment not wholesale)
- The competitive picture and the identification of the Icelandic reference product
- The Hungarian legal position on a minor founding a business — `Ptk. 3:22 § (1)` is quoted directly
- The direction and shape of the cost curve
- The 50 HUF deposit (independently corroborated by a live Aldi retail listing)

**What is soft:**
- Every specific price per can
- Every co-packer MOQ
- Every official fee schedule
- The exact DRS threshold number

**What this means practically:** the *plan* is sound and the *numbers* are planning figures. Nine emails and one legal opinion — total cost around €275 and a few hours — convert most of this file from estimate to fact.

**Send the emails before you spend the money.**
