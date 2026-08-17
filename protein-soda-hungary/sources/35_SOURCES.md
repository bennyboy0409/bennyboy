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
| Ptk. (2013. évi V. tv.) 3:22 § (1) | https://njt.jog.gov.hu/jogszabaly/2013-5-00-00 | **A minor cannot be *ügyvezető***: *"Vezető tisztségviselő az a nagykorú személy lehet…"* | **LIKELY / SEARCH-VERIFIED** — njt.hu was egress-blocked, so no primary text was read. The wording is quoted consistently across multiple practitioner sources and the conclusion is safe to plan against, but this file's own key reserves `CONFIRMED` for primary text read on the source page. **00, 07 and 11 must carry this same tag** |
| Evectv. 2009. évi CXV. 3. § (2) | https://njt.hu/jogszabaly/2009-115-00-00.5 | A minor cannot be an *egyéni vállalkozó* | LIKELY / SEARCH-VERIFIED — same basis as above |
| Ptk. 2:12 § (1), (2) c) | http://projektjeink.birosag.hu/sites/default/files/allomanyok/ptk_e_learning/ptk2/lecke4_lap1.html | Limited legal capacity 14–18; minor may dispose of own earned income | LIKELY |
| Mt. 34. § / NAV student work guide 2026 | https://nav.gov.hu/pfile/file?path=/ugyfeliranytu/nezzen-utana/inf_fuz/2026/72.-A-diakok-munkavallalasa-2026.-01.-15 | Minor may be an employee from 16 | LIKELY |
| Gyer. 149/1997 | https://njt.jog.gov.hu/jogszabaly/1997-149-20-22 | Guardianship authority approval for a minor's business share | NEEDS PROFESSIONAL CONFIRMATION |
| NAV — new EV registration portal | https://ugyfelportal.nav.gov.hu/vallalkozoi-ugyseged/main | **Two distinct events, both dates matter and both must be quoted together:** the NAV Ügyfélportál went live **2026-02-19**; the old nyilvántartó.hu Webes Ügysegéd stopped accepting new applications **2026-03-01 23:59** | **SEARCH-VERIFIED** — page never opened, so this cannot carry `CONFIRMED` under this file's own key |
| NAV — portal change notice | https://nav.gov.hu/ugyfeliranytu/vallalkozoknak/indulo-vallalkozas/kapcsolodo-tartalmak/megujult-az-ugyseged | as above | SEARCH-VERIFIED |
| Cégkapu registration | https://tarhely.gov.hu/ckp-regisztracio/tajekoztato.html | Mandatory for companies, free | LIKELY |
| DÁP digital identity | https://dap.gov.hu/ | Available from age 14 (≠ legal capacity) | LIKELY |
| TEÁOR'25 — 1107 soft drink manufacturing | https://teaor2025.teaorszamok.hu/1107/ | Activity code | LIKELY |
| TEÁOR'25 — 4634 beverage wholesale | https://www.teaorszamok.hu/4634/ | **Core code for a brand owner** | LIKELY |
| Ctv. 48. § simplified procedure | https://www.onadozo.hu/hirek/a-cegeljaras-szabalyainak-valtozasarol-3107 | Kft. registration in 1 working day, illetékmentes | LIKELY |
| Kft. capital deferral | https://rozgonyiugyved.hu/szakteruleteim/tarsasagi-jog/tenyleg-kell-3-millio-forint-egy-kft-alapitasahoz/ | 3M HUF deferrable up to 2 years | LIKELY |
| 450/2023. (X. 4.) Korm. rendelet | njt.hu / net.jogtar.hu | Hungarian DRS legal basis | ⚠️ **COULD NOT BE READ** — consolidated text and amendments unobtainable |
| Directive (EU) 2024/2853 | eur-lex.europa.eu | Product liability; transpose by **2026-12-09**. ⚠️ **CORRECTION TO HOW THIS IS USED ELSEWHERE:** 2024/2853 **broadens** the regime; it does **not** create own-brand-seller liability. **Ptk. 6:552–6:553 §** — transposing Directive 85/374/EEC Art. 3(1), in force since 1993 — already makes anyone who presents themselves as the producer by putting their name or trade mark on the product **strictly liable as producer**. That attaches to **can #1, today**, uninsured. Any file deferring product-liability cover past batch 1 on the basis that the exposure "arrives" on 2026-12-09 is wrong | LIKELY — ⚠️ EUR-Lex and njt.hu both blocked; the Ptk. wording is from secondary sources |

---

## EU FOOD LAW

| Regulation | Used for | Status |
|---|---|---|
| **Reg. (EU) 1169/2011** (FIC) | Mandatory particulars, Art. 8 (FBO), Art. 21 (allergen emphasis), Art. 31(4) (**nutrition by calculation — saves €800–2,000**), Annex III (sweetener/caffeine statements), Annex VI Part A pt 4 (added animal protein in the product name) | LIKELY — ⚠️ EUR-Lex blocked, article numbers from secondary sources |
| **Reg. (EC) 1924/2006** | Nutrition and health claims. **HIGH PROTEIN = ≥20% of energy from protein** — the arithmetic on that threshold is shown, and 20 g × 4 kcal = 80 kcal of an 80–100 kcal can clears it with large headroom, still clearing at 12 g **provided total can energy stays below ~240 kcal**. Art. 10(2) also requires **four** accompanying items where a health claim is used, not one | ⚠️ **LIKELY — NEEDS PROFESSIONAL CONFIRMATION on the verbatim Annex text.** EUR-Lex was 403-blocked and the Annex was never read, so the **≥20% threshold value itself is unverified**. Any file tagging it `CONFIRMED` is over-claiming. Note also that the Annex condition is only one gate: **Art. 5(1)(b) and (d) independently require a significant quantity**, so the "qualifies down to ~1.3 g" arithmetic is legally unavailable |
| **Reg. (EU) 432/2012** | Authorised protein health claims (muscle mass growth/maintenance, normal bones) | LIKELY |
| **Reg. (EC) 1333/2008** Annex II, category 14.1.4 | Additive limits: sucralose E955, acesulfame K E950, potassium sorbate E202, citric E330, malic E296, **erythritol E968 beverage restriction** | LIKELY — ⚠️ not read directly. **The erythritol limit is why the recommended sweetener system is sucralose + Ace-K** |
| **Reg. (EC) 853/2004** | Dairy/composite product approval for whey-containing beverages | ⚠️ **NEEDS PROFESSIONAL CONFIRMATION — determines the entire co-packer pool** |
| **Reg. (EC) 178/2002** Art. 18, 19 | Traceability, withdrawal and recall | LIKELY |
| **Reg. (EC) 852/2004** | Hygiene, HACCP | LIKELY |

---

## HUNGARIAN DEPOSIT RETURN SYSTEM (DRS / MOHU REpont)

| Fact | Source | Status |
|---|---|---|
| **50 HUF deposit on a beverage can** | https://shop.aldi.hu/termekek/Energiaitalok/RED-BULL-Energiaital-zero-250-ml-50-Ft-visszavaltasi-dij | **SEARCH-VERIFIED** — the URL slug itself contains `50-Ft-visszavaltasi-dij`. Strong corroboration. Retail practice shows the deposit **separately from** shelf price. ⚠️ Whether the amount changed for 2026 is **UNKNOWN** (A6) |
| REpont system pages | https://repont.hu/en · https://repont.hu/en/for-retailers-and-collection-points | SEARCH-VERIFIED |
| Producer registration via MOHU PartnerPortal; quarterly producers' fee | https://www.sensoneo.com/success-stories/deposit-return-system-hungary/ | SEARCH-VERIFIED (third-party implementer) |
| System launch / mandatory dates | https://packagingeurope.com/news/hungary-introduces-new-drs-for-drink-containers/10821.article · https://www.tomra.com/reverse-vending/media-center/news/2024/hungary-deposit-return-scheme-launch | SEARCH-VERIFIED |
| 2026 review of the system | https://howtohungary.com/2026/06/13/hungary-bottle-return-system-repont/ | SEARCH-VERIFIED |
| **~5,000 unit/year small-producer exemption** (*csekély mennyiségű kibocsátó*) | derived across dossiers A2/A6/B6 | ⚠️ **LIKELY — NEEDS PROFESSIONAL CONFIRMATION. The entire batch-1 plan rests on it, and it is irreversible once the shrink sleeve prints.** A6, the dedicated DRS dossier, expressly tags it **LIKELY** — *"multi-source snippet corroboration, no primary text read this session"*. **No file in this project may tag it CONFIRMED**; `legal/10_DRS_REPONT.md` is the authority. **Six sub-questions remain open**: the threshold value itself, its unit basis (units vs litres vs per material stream), whether it still holds for 2026, whether it is automatic or notified, whether the count is per calendar year or rolling 12 months, and whether crossing it bites retrospectively. **Plan volume decisions against 4,500 cans, not 5,000** |
| **MOHU per-unit producer service fee** | — | ⚠️ **UNKNOWN — QUOTE REQUIRED. The most important missing number above threshold** |
| Registration / per-GTIN / annual fees | — | UNKNOWN — QUOTE REQUIRED |

---

## PRODUCT & COMPETITIVE INTELLIGENCE

| Fact | Source | Status |
|---|---|---|
| **Icelandic reference identified: UPP by Ölgerðin Egill Skallagrímsson**, launched June 2026, co-developed with **World Class gyms** | https://www.olgerdin.is/um-okkur/frettir/frett/upp-ferskasta-leidin-ad-proteini | SEARCH-VERIFIED |
| UPP architecture: clear whey **isolate** (Arla Lacprodan BLG-100) + hydrolysed collagen | https://vb.is/frettir/olgerdin-og-world-class-gefa-ut-proteindrykk/ · https://www.uppupp.is/ | SEARCH-VERIFIED — **corrects the brief's "whey concentrate" assumption**. ⚠️ **UPP's FILL VOLUME IS ASSUMED, NOT VERIFIED** — `sales/29_COMPETITORS.csv` records it as *"UNKNOWN — can, size not confirmed (330 ml assumed, NOT verified)"*. Anywhere the Icelandic can is used to justify the **330 ml** format, that justification is an assumption. ⚠️ **UPP's shelf price is UNKNOWN — QUOTE REQUIRED** |
| **Mist Uppbygging price: 1,656 ISK/6-pack = 276 ISK/can = 704.5 HUF** incl. 11% VAT and deposit | https://kronan.is/vara/100262032-mist-6pk-uppbygging-skogarberchai | PUBLIC LIST PRICE (search-extracted). 🛑 **DOES NOT VALIDATE THE PRICE OF THIS PRODUCT.** Mist Uppbygging is **15 g of collagen only, caffeinated, DIAAS ≈ 0** — a cheaper, weaker product. The true comparable is **UPP (20 g, whey + collagen, caffeine-free), whose shelf price is UNKNOWN** and which `product/03_PRODUCT_ARCHITECTURE.md` §3 models at **~940 HUF equivalent** `ESTIMATE`. Using the 704.5 figure to set an RRP biases the price downward. **The only verified Icelandic price is for the 15 g collagen can.** Independent derivation in dossier C2 puts specialist retail at **950–1,150 HUF** and a gym bar at **1,250–1,800 HUF** |
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

> 🛑 **PROVENANCE WARNING ON EP2001312B1 — READ BEFORE RELYING ON ANYTHING IN THIS SECTION.**
> **The patent number EP2001312B1, its recited claim elements, its 2006-03-10 priority date and its 2007-03-09 filing date were found by DIRECT WEB SEARCH during the write-up of the deliverables. They come from NO research dossier.** The only patent material in the research record is one line in `C1_competitors_global.md`: *"Fizzique's patent estate — 7 US patents; check for EP equivalents that could constrain a European formulation."* No agent was ever tasked with a freedom-to-operate search, and none was run.
> **Consequently: the claim scope, the validation status in Hungary, the renewal-fee status and even the correctness of the number itself are ALL UNVERIFIED.** patents.google.com was reachable only as a search result; the EPO register was egress-blocked and the granted claims were never read.
> **Do not treat any of it as a finding. Treat it as a lead for a patent attorney**, and act on it before batch 1 is filled rather than before batch 2 — see `execution/34_OPEN_QUOTES.md` Tier 1 item 10.

| Patent | URL | Relevance | Status |
|---|---|---|---|
| **EP2001312B1** — *Method of making a protein beverage* | https://patents.google.com/patent/EP2001312B1/en | Reported as a **granted EP patent** whose claims cover carbonation 0.1–4 vol, pH readjusted to **2–3.4**, and WPI ≥90% — i.e. the clear carbonated whey architecture, which **ARCH F's own spec sits inside on all three elements at once** (ARCH F is 50% whey, not "collagen-dominant"). Priority reported **2006-03-10**, filed **2007-03-09** → a 20-year term would expire **~2027-03-09**, i.e. it is live during batch 1 | ⚠️ **UNVERIFIED — number and claim scope NOT corroborated anywhere in the research record; found by direct web search during synthesis, not sourced from any dossier. Claim scope UNVERIFIED · Hungarian validation UNVERIFIED · renewal status UNVERIFIED (EPO register egress-blocked). The expiry date is `DERIVED` from an unverified filing date.** |
| US7205018B2 | https://patents.google.com/patent/US7205018B2/en | Carbonated protein drink family | ⚠️ **UNVERIFIED — same provenance warning: added during synthesis, in no dossier** |
| WO2006042222A2 | https://patents.google.com/patent/WO2006042222A2/en | Same family | ⚠️ **UNVERIFIED — same provenance warning** |
| US7897192B2 | https://patents.google.com/patent/US7897192B2/en | High energy carbonated protein drink | ⚠️ **UNVERIFIED — same provenance warning** |
| US9220292B2 · US7799363B2 · US7794770B2 | patents.google.com | Related protein beverage patents | ⚠️ **UNVERIFIED — same provenance warning** |
| EP0019415A1 | https://patents.google.com/patent/EP0019415A1/en | Whey-fortified acidic beverages (old, likely expired) | ⚠️ **UNVERIFIED — same provenance warning** |
| **Fizzique — 7 US patents** | bevindustry.com / nutraingredients-usa.com | ⭐ **The ONLY patent statement that IS in the research record** (`C1_competitors_global.md`), and it is a count, not a list: *"7 US patents; check for EP equivalents that could constrain a European formulation."* The individual numbers were never obtained | SEARCH-VERIFIED as a count; **the EP equivalents check was never performed** |

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
| **Collagen 6.52 HUF per g of declared protein · commodity WPI90 13.11 HUF/g · CLEAR / ACID-STABLE WPI 16.39 HUF/g** | DERIVED — authoritative per-ingredient source is `product/04_FORMULATION_V1.csv`. 🛑 **The formula REQUIRES the clear grade: commodity WPI90 will haze at pH 3.2, so it is not a cheaper substitute, it is a different product.** Per can: collagen **65.18 HUF**, clear WPI **163.90 HUF** (commodity would be 131.08 — carried only as an optimistic sensitivity). The clear-grade figure rests on an **ESTIMATED ~+25% premium over the DCA WPI90 July-2026 index of €32,500/t that NO SUPPLIER HAS QUOTED**, and `manufacturing/16_INGREDIENT_SUPPLIERS.csv` records that this single line **swings ARCH F by up to ±50 HUF/can**. A **25 kg small-lot uplift of +10–25% is NOT yet applied.** `QUOTE REQUIRED` |
| **Total ARCH F ingredients: 256.88 HUF/can** (collagen 65.18 + clear WPI 163.90 + leucine 9.60 + tryptophan 0.71 + sweetener system 6.19 + acid system 2.50 + flavour 8.00 + sorbate 0.80) | DERIVED from `product/04_FORMULATION_V1.csv`, the authoritative per-ingredient source. ⚠️ **Earlier drafts carried 213 HUF and a 79.0 HUF collagen / 118.0 HUF whey split. Both were wrong** — 79.0 matched no supplier price in the project, and 118.0 was below even the commodity index |
| L-leucine 1.7 g = 9.60 HUF/can · L-tryptophan 150 mg = 0.71 HUF/can | ESTIMATE (derivation in D2). 🛑 **REGULATORY STATUS UNVERIFIED AND IT BLOCKS PURCHASE:** whether free amino acids may lawfully be added to a **beverage** (as opposed to a food supplement) under Reg. (EC) 1925/2006 and Hungarian national rules **was never resolved** — two independent workstreams failed on it and every primary source was blocked. `NEEDS PROFESSIONAL CONFIRMATION`. Fallback: drop both, saving 10.31 HUF/can. ⚠️ **Dose conflict declared:** dossier D2 §8 specifies **25 mg** of added tryptophan; the deliverables carry **150 mg**. Settle on one number before the RFQ, because the co-packer doses what the spec says and the label declares it |
| Collagen protein spec | ⚠️ **90% ASSUMED, NOT CONFIRMED.** `manufacturing/16_INGREDIENT_SUPPLIERS.csv` records the FloraVita benchmark as *"90 (assume; CONFIRM on CoA)"*. **No 97% grade has been quoted or evidenced anywhere in this project — do not cost, dose or label against one.** If the delivered CoA reads below 90%, the powder dose rises and the 20 g declaration is at risk |
| EUR/USD 1.1567 (14 Aug 2026) | tradingeconomics.com — SEARCH-VERIFIED |

---

## RESEARCH THAT FAILED

| Workstream | Cause |
|---|---|
| A8 beverage science · A9 labs · A10 GS1/admin | Session agent limit |
| D3 can/decoration curve · D4 filling curve · D5 scale curve · D6 HU benchmarks · D7 cheapest route · D8 regulatory per-can · both cost audits | Session agent limit |
| B4 Poland/Baltics · B5 SE Europe | Search budget + egress |
| Gym contact verification (160 target → 7 rows, all second-hand snippets relayed from dossier C2, pages never opened) | Egress on all gym sites and directories |
| **UK / German / Polish competitor sweep** | **Never commissioned.** The project-wide claim that "nothing complete-protein ships in the EU" is *absence of evidence*, not proof of absence — and the entire speed-and-distribution strategy rests on it. See `execution/34_OPEN_QUOTES.md` Tier 1 item 9 |
| **Freedom to operate / patents** | **Never commissioned.** The only patent line in the research record is *"Fizzique's patent estate — 7 US patents; check for EP equivalents"* (`C1_competitors_global.md`). Everything else in the PATENTS section above was added at write-up by direct web search |
| **Trademark and domain clearance** | **Never run.** `sales/30_BRAND_AND_AUSTRIA.md`: *"Zero trademark searches and zero domain lookups were performed anywhere in this project."* Nice class 32 is one of the most crowded classes that exists |

The scale curve in `finance/19_UNIT_ECONOMICS.csv` is therefore built from **D1's reverse-engineered model plus derivation**, not a dedicated study. Treat its intermediate volumes as planning figures.

**One correction worth recording here, because it changed a headline conclusion.** An earlier version of that curve was non-monotonic — 491 HUF at 1,700 cans rising to 699 at 5,000, then falling to 556 at 10,000 — because two incompatible cost models had been spliced together: one built on **printed cans plus a €2,500 one-off amortisation** (dossier D1 §4.2), the other on **blank co-packer stock cans plus a 119,000 HUF setup fee** (this plan's actual build). Making more cans cannot raise unit cost. The curve has been rebuilt on the single blank-can architecture: **1,700 = 524 · 5,000 = 431 · 10,000 = 390 · 25,000 = 349 · 50,000 = 319 · 100,000 = 296 HUF.** The practical consequence is in the founder's favour: **wholesale becomes viable at ~10,000 cans, not ~25,000.** All of it remains `ESTIMATE` — **not one supplier price per can exists anywhere in this project.**

---

## HOW TO CITE THIS WORK

> Research conducted 2026-08-16 under network egress restrictions preventing primary-source retrieval. Figures tagged `SEARCH-VERIFIED` are attributed to named URLs but were not read on the source page. No figure, company, price or contact detail in this project was invented. Confirm all `Tier 1` items in `execution/34_OPEN_QUOTES.md` before committing capital.

**One exception to the "everything came from the research" framing, stated explicitly because it is the kind of thing that should never be discovered later:** the entire **PATENTS / FREEDOM TO OPERATE** section above was assembled at write-up time from direct web searches, **not from any research dossier**. The research record contains a single sentence on patents. That section is a lead list for an attorney, not a finding — see the provenance warning above it.
