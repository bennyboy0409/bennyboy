# 35 — SOURCES

**Every source used, with retrieval date and honest verification status.**
All retrieved **2026-08-16** unless stated. Master FX: **1 EUR = 363 HUF** (mid-market, 15 Aug 2026).

---

## ⚠️ READ THIS FIRST — the verification ceiling on this entire project

Research ran under a network egress policy that **returned HTTP 403 on CONNECT for every external host**. Recorded directly from the proxy's own failure log:

```
403 CONNECT  eur-lex.europa.eu          403 CONNECT  portal.nebih.gov.hu
403 CONNECT  ec.europa.eu               403 CONNECT  efsa.europa.eu
403 CONNECT  food.ec.europa.eu          403 CONNECT  www.statista.com
403 CONNECT  www.mnb.hu                 403 CONNECT  multisport.hu
```

Web **search** functioned; page **retrieval** did not. Additionally the session-wide search budget (200 calls) was exhausted partway through, and 11 research agents later failed on a session limit.

**Consequence:** almost nothing in this project is `CONFIRMED` in the strict sense of "primary text read on the source page." Most is `SEARCH-VERIFIED` — a figure that appeared in a search result attributed to a named URL.

**This is disclosed rather than disguised.** Every file carries per-figure tags, and `execution/34_OPEN_QUOTES.md` lists what must be confirmed before money moves.

---

## LEGAL & REGULATORY — HUNGARY

| Source | URL | Used for | Status |
|---|---|---|---|
| Ptk. (2013. évi V. tv.) 3:22 § (1) | https://njt.jog.gov.hu/jogszabaly/2013-5-00-00 | **A minor cannot be *ügyvezető***: *"Vezető tisztségviselő az a nagykorú személy lehet…"* | **CONFIRMED** (text quoted) |
| Evectv. 2009. évi CXV. 3. § (2) | https://njt.hu/jogszabaly/2009-115-00-00.5 | A minor cannot be an *egyéni vállalkozó* | LIKELY |
| Ptk. 2:12 § (1), (2) c) | http://projektjeink.birosag.hu/sites/default/files/allomanyok/ptk_e_learning/ptk2/lecke4_lap1.html | Limited legal capacity 14–18; minor may dispose of own earned income | LIKELY |
| Mt. 34. § / NAV student work guide 2026 | https://nav.gov.hu/pfile/file?path=/ugyfeliranytu/nezzen-utana/inf_fuz/2026/72.-A-diakok-munkavallalasa-2026.-01.-15 | Minor may be an employee from 16 | LIKELY |
| Gyer. 149/1997 | https://njt.jog.gov.hu/jogszabaly/1997-149-20-22 | Guardianship authority approval for a minor's business share | NEEDS PROFESSIONAL CONFIRMATION |
| NAV — new EV registration portal | https://ugyfelportal.nav.gov.hu/vallalkozoi-ugyseged/main | **Portal changed 2026-02-19**; nyilvántartó.hu closed to new applications 2026-03-01 | **CONFIRMED** |
| NAV — portal change notice | https://nav.gov.hu/ugyfeliranytu/vallalkozoknak/indulo-vallalkozas/kapcsolodo-tartalmak/megujult-az-ugyseged | as above | CONFIRMED |
| Cégkapu registration | https://tarhely.gov.hu/ckp-regisztracio/tajekoztato.html | Mandatory for companies, free | LIKELY |
| DÁP digital identity | https://dap.gov.hu/ | Available from age 14 (≠ legal capacity) | LIKELY |
| TEÁOR'25 — 1107 soft drink manufacturing | https://teaor2025.teaorszamok.hu/1107/ | Activity code | LIKELY |
| TEÁOR'25 — 4634 beverage wholesale | https://www.teaorszamok.hu/4634/ | **Core code for a brand owner** | LIKELY |
| Ctv. 48. § simplified procedure | https://www.onadozo.hu/hirek/a-cegeljaras-szabalyainak-valtozasarol-3107 | Kft. registration in 1 working day, illetékmentes | LIKELY |
| Kft. capital deferral | https://rozgonyiugyved.hu/szakteruleteim/tarsasagi-jog/tenyleg-kell-3-millio-forint-egy-kft-alapitasahoz/ | 3M HUF deferrable up to 2 years | LIKELY |
| 450/2023. (X. 4.) Korm. rendelet | njt.hu / net.jogtar.hu | Hungarian DRS legal basis | ⚠️ **COULD NOT BE READ** — consolidated text and amendments unobtainable |
| Directive (EU) 2024/2853 | eur-lex.europa.eu | Product liability; transpose by 2026-12-09; **own-brand sellers take manufacturer liability** | LIKELY — ⚠️ EUR-Lex blocked |

---

## EU FOOD LAW

| Regulation | Used for | Status |
|---|---|---|
| **Reg. (EU) 1169/2011** (FIC) | Mandatory particulars, Art. 8 (FBO), Art. 21 (allergen emphasis), Art. 31(4) (**nutrition by calculation — saves €800–2,000**), Annex III (sweetener/caffeine statements), Annex VI Part A pt 4 (added animal protein in the product name) | LIKELY — ⚠️ EUR-Lex blocked, article numbers from secondary sources |
| **Reg. (EC) 1924/2006** | Nutrition and health claims. **HIGH PROTEIN = ≥20% of energy from protein.** 20 g × 4 kcal = 80 kcal of an 80–100 kcal can → qualifies with enormous headroom, and **still qualifies at 12 g** | DERIVED (arithmetic shown) — ⚠️ Annex not read directly |
| **Reg. (EU) 432/2012** | Authorised protein health claims (muscle mass growth/maintenance, normal bones) | LIKELY |
| **Reg. (EC) 1333/2008** Annex II, category 14.1.4 | Additive limits: sucralose E955, acesulfame K E950, potassium sorbate E202, citric E330, malic E296, **erythritol E968 beverage restriction** | LIKELY — ⚠️ not read directly. **The erythritol limit is why the recommended sweetener system is sucralose + Ace-K** |
| **Reg. (EC) 853/2004** | Dairy/composite product approval for whey-containing beverages | ⚠️ **NEEDS PROFESSIONAL CONFIRMATION — determines the entire co-packer pool** |
| **Reg. (EC) 178/2002** Art. 18, 19 | Traceability, withdrawal and recall | LIKELY |
| **Reg. (EC) 852/2004** | Hygiene, HACCP | LIKELY |

---

## HUNGARIAN DEPOSIT RETURN SYSTEM (DRS / MOHU REpont)

| Fact | Source | Status |
|---|---|---|
| **50 HUF deposit on a beverage can** | https://shop.aldi.hu/termekek/Energiaitalok/RED-BULL-Energiaital-zero-250-ml-50-Ft-visszavaltasi-dij | **SEARCH-VERIFIED** — the URL slug itself contains `50-Ft-visszavaltasi-dij`. Strong corroboration. Retail practice shows the deposit **separately from** shelf price |
| REpont system pages | https://repont.hu/en · https://repont.hu/en/for-retailers-and-collection-points | SEARCH-VERIFIED |
| Producer registration via MOHU PartnerPortal; quarterly producers' fee | https://www.sensoneo.com/success-stories/deposit-return-system-hungary/ | SEARCH-VERIFIED (third-party implementer) |
| System launch / mandatory dates | https://packagingeurope.com/news/hungary-introduces-new-drs-for-drink-containers/10821.article · https://www.tomra.com/reverse-vending/media-center/news/2024/hungary-deposit-return-scheme-launch | SEARCH-VERIFIED |
| 2026 review of the system | https://howtohungary.com/2026/06/13/hungary-bottle-return-system-repont/ | SEARCH-VERIFIED |
| **~5,000 unit/year small-producer exemption** | derived across dossiers A2/A6/B6 | ⚠️ **NEEDS PROFESSIONAL CONFIRMATION — the entire batch-1 plan rests on it** |
| **MOHU per-unit producer service fee** | — | ⚠️ **UNKNOWN — QUOTE REQUIRED. The most important missing number above threshold** |
| Registration / per-GTIN / annual fees | — | UNKNOWN — QUOTE REQUIRED |

---

## PRODUCT & COMPETITIVE INTELLIGENCE

| Fact | Source | Status |
|---|---|---|
| **Icelandic reference identified: UPP by Ölgerðin Egill Skallagrímsson**, launched June 2026, co-developed with **World Class gyms** | https://www.olgerdin.is/um-okkur/frettir/frett/upp-ferskasta-leidin-ad-proteini | SEARCH-VERIFIED |
| UPP architecture: clear whey **isolate** (Arla Lacprodan BLG-100) + hydrolysed collagen | https://vb.is/frettir/olgerdin-og-world-class-gefa-ut-proteindrykk/ · https://www.uppupp.is/ | SEARCH-VERIFIED — **corrects the brief's "whey concentrate" assumption** |
| **Mist Uppbygging price: 1,656 ISK/6-pack = 276 ISK/can = 704.5 HUF** incl. 11% VAT and deposit | https://kronan.is/vara/100262032-mist-6pk-uppbygging-skogarberchai | PUBLIC LIST PRICE (search-extracted) — **validates the 699–799 HUF target** |
| Mist ingredient declaration (5% hydrolysed collagen, sucralose, potassium sorbate) | https://www.olgerdin.is/um-okkur/frettir/frett/ny-mist-uppbygging | SEARCH-VERIFIED |
| COLLAB: 330 ml, 5.9 g marine collagen, 105 mg caffeine | https://www.collab.is/english | SEARCH-VERIFIED |
| Iceland VAT on food/beverages = **11%** (vs Hungary 27%) | https://island.is/en/taxes-on-goods-and-services | PUBLIC/OFFICIAL — **the 16-point gap costs ~85 HUF/can of headroom** |
| **Fizzique**: 355 ml, 20 g WPI, 80–90 kcal, **7 US patents** | https://www.bevindustry.com/articles/91151-fizzique-sparkling-protein-water · https://www.nutraingredients-usa.com/Article/2018/03/21/New-whey-isolate-pioneers-protein-s-appearance-in-clear-carbonated-beverages/ | SEARCH-VERIFIED |
| **C4 Sparkling Protein** launched 30 July 2026, 20 g WPI, 95 kcal, US mass retail | https://www.bevnet.com/pr/2026/07/30/c4-expands-beyond-energy-drinks-with-the-launch-of-sparkling-protein | SEARCH-VERIFIED |
| **Bucked Up Protein Soda** 473 ml/25 g and 355 ml/20 g | https://www.buckedup.com/carbonated-protein-soda | SEARCH-VERIFIED |
| **Protein Pop Plus** 30 g via whey **+ bovine collagen**, all 607 US Costco clubs | https://www.prnewswire.com/news-releases/protein-pop-launches-protein-pop-plus-at-costco-nationwide-302696809.html | SEARCH-VERIFIED |
| **Premier Protein** (BellRing) entering the category | https://www.fooddive.com/news/premier-protein-soda-bellring-brands/819973/ | SEARCH-VERIFIED |
| **Myprotein Clear Protein Whey & Collagen sold in Hungary** — our exact architecture, in market | https://www.myprotein.hu/p/sports-nutrition/clear-protein-whey-collagen/17263290/ | SEARCH-VERIFIED |
| Collagen scepticism in the fitness trade press | https://www.healthclubmanagement.co.uk/health-club-management-features/Muscle-matters/38405 | SEARCH-VERIFIED |

---

## PATENTS / FREEDOM TO OPERATE

| Patent | URL | Relevance | Status |
|---|---|---|---|
| **EP2001312B1** — *Method of making a protein beverage* | https://patents.google.com/patent/EP2001312B1/en | **Granted EP patent.** Claims cover carbonation 0.1–4 vol, pH readjusted to **2–3.4**, WPI ≥90% — i.e. the clear carbonated whey architecture. Priority **2006-03-10**, filed **2007-03-09** → 20-yr term expires **~2027-03-09** | SEARCH-VERIFIED / DERIVED — ⚠️ **HU validation and renewal status UNVERIFIED (EPO register blocked)** |
| US7205018B2 | https://patents.google.com/patent/US7205018B2/en | Carbonated protein drink family | SEARCH-VERIFIED |
| WO2006042222A2 | https://patents.google.com/patent/WO2006042222A2/en | Same family | SEARCH-VERIFIED |
| US7897192B2 | https://patents.google.com/patent/US7897192B2/en | High energy carbonated protein drink | SEARCH-VERIFIED |
| US9220292B2 · US7799363B2 · US7794770B2 | patents.google.com | Related protein beverage patents | SEARCH-VERIFIED |
| EP0019415A1 | https://patents.google.com/patent/EP0019415A1/en | Whey-fortified acidic beverages (old, likely expired) | SEARCH-VERIFIED |

---

## HUNGARIAN RETAIL PRICING

All `SEARCH-SNIPPET` — attributed to the URL shown, page not opened. **Re-check before final pricing.**

| Product | Price HUF | Source |
|---|---|---|
| Red Bull 250 ml, regular shelf | 549 | https://www.lidl.hu/p/red-bull-energiaital/p10034513 |
| Red Bull 250 ml, Clubcard/promo | 399 | https://bevasarlas.tesco.hu/shop/hu-HU/products/2004121250239 |
| Red Bull 250 ml, cheapest live offer | 389 | https://minden-akcio.hu/termekek/red-bull |
| HELL 250 ml, regular | 319 | https://www.tesco.hu/akciok/akcios-termekek/termek/hell-energiaital-130380 |
| HELL 250 ml, Clubcard | 239 | as above |
| HELL 250 ml, cheapest live offer | 230 | https://minden-akcio.hu/termekek/hell |
| Tesco energy-drink category floor | 239 | https://minden-akcio.hu/termekek/energiaital?store=tesco |

**FX:** MNB EUR/HUF 2026-08-14 = 363.28 (`SNIPPET`, mnb.hu unreachable) · mid-market 15 Aug 2026 = 362.91–363.05 (currency.me.uk, xe.com). **Project uses 363.**

---

## MANUFACTURING

| Company | URL | Key fact | Status |
|---|---|---|---|
| **Bubee Hungary Kft.** | https://www.bubee.eu/bubee.html | 0.2/0.25/**0.33 L** aluminium can filling; advertises **BCAA, sports and functional drink** contract manufacture. `info@bubee.eu` · +36 30 240 0493. Kiskőrös. New plant April 2025, ~25M cans/yr | SEARCH-VERIFIED — MOQ **UNKNOWN** |
| Bubee plant opening | https://vira.hu/2025/04/10/atadtak-a-kiskorosi-bubee-hungary-kft-uj-uzemcsarnokat/ | corroborates the above | SEARCH-VERIFIED |
| Bubee company registry | https://www.nemzeticegtar.hu/bubee-hungary-kft-c0109177048.html | Registered 2013-08-06 | SEARCH-VERIFIED |
| **Opre' Label** | https://www.oprebrothers.hu/private-label/ | **"low MOQ … starting from just one pallet"**; published capability list **includes COLLAGEN BEVERAGES**. `sales@oprelabel.com` | SEARCH-VERIFIED — ⚠️ **filling site HU or SK is UNKNOWN** |
| Opre' canned cider (proves can format) | https://www.oprebrothers.hu/opre--cider-dobozos/ | Live canned SKU | SEARCH-VERIFIED |
| **MONYO Brewing** | https://www.monyobrewing.hu/szolgaltatasok/udito-bergyartas | Public *üdítő bérgyártás* service. **Min 2,000 L/batch (~6,060 cans) + 6,000 L/yr**. 50% deposit. +36 70 550 2000 | SEARCH-VERIFIED |
| **Private Label Drink** | https://www.privatelabeldrink.hu/ | 330 ml MOQ **15,000**, halved to **7,500** on first order. 15-day lead time | SEARCH-VERIFIED — ⚠️ **legal entity and address UNIDENTIFIED** |
| **Rhodius Mineralquellen** | — | **Published minimum 250,000 cans → RULED OUT** | SEARCH-VERIFIED |
| Craft-brewery spare capacity insight | Forbes.hu | Breweries run at 20–40% capacity; **HUF 1–1.5M for 2,000 L / ~6,000 units** of simple craft soda = €0.46–0.69/unit | SEARCH-VERIFIED (secondary) |

**⚠️ Poland, the Baltics, SE Europe, UK and Benelux produced ZERO verified suppliers.** The B4 agent explicitly warned: *"Do not merge any name from Section 4 into a supplier shortlist."* **Poland is the highest-value unexplored lead** — see `34_OPEN_QUOTES.md`.

---

## INGREDIENTS

| Fact | Status |
|---|---|
| **WPC80 reached €20,250/tonne April 2026; European producers reported SOLD OUT; shortage forecast through 2026** | SEARCH-VERIFIED — **primary argument for weighting the formula toward collagen** |
| Collagen ≈ €0.0165/g protein vs WPI90 ≈ €0.0286/g protein | DERIVED |
| L-leucine 1.7 g = 9.60 HUF/can · L-tryptophan 150 mg = 0.71 HUF/can | ESTIMATE (derivation in D2) |
| EUR/USD 1.1567 (14 Aug 2026) | tradingeconomics.com — SEARCH-VERIFIED |

---

## RESEARCH THAT FAILED

| Workstream | Cause |
|---|---|
| A8 beverage science · A9 labs · A10 GS1/admin | Session agent limit |
| D3 can/decoration curve · D4 filling curve · D5 scale curve · D6 HU benchmarks · D7 cheapest route · D8 regulatory per-can · both cost audits | Session agent limit |
| B4 Poland/Baltics · B5 SE Europe | Search budget + egress |
| Gym contact verification (160 target → 7 verified) | Egress on all gym sites and directories |

The scale curve in `finance/19_UNIT_ECONOMICS.csv` is therefore built from **D1's reverse-engineered model plus derivation**, not a dedicated study. Treat its intermediate volumes as planning figures.

---

## HOW TO CITE THIS WORK

> Research conducted 2026-08-16 under network egress restrictions preventing primary-source retrieval. Figures tagged `SEARCH-VERIFIED` are attributed to named URLs but were not read on the source page. No figure, company, price or contact detail in this project was invented. Confirm all `Tier 1` items in `execution/34_OPEN_QUOTES.md` before committing capital.
