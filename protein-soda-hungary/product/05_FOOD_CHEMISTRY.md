# 05 — FOOD CHEMISTRY
## Why this drink can exist, where it will break, and exactly what must be tested
**ARCH F · 330 ml can · pH 3.20 ± 0.10 · 2.2 vol CO₂ · 30.3 g/L whey + 30.3 g/L collagen peptides**
Date: 2026-08-16 · **NO FORMULATION IN THIS FILE IS COMMERCIALLY VALIDATED.** Every mechanism below is textbook; every number for *this* product is a hypothesis until a beaker proves it.

---

## 0. THE FIVE SENTENCES

1. **pH is the entire game.** Whey stays clear only far below its isoelectric point; the target is **3.20 ± 0.10 measured in the finished carbonated can**, and there is **no safe corridor between pH 3.6 and pH 6.5**.
2. **Collagen is easy, whey is hard.** Collagen peptides are 2–5 kDa random coils with no isoelectric precipitation problem — clear from pH 2 to pH 11, heat-stable, non-gelling. Whey is a globular protein with a pI at 5.2 that aggregates the moment you let the pH drift up.
3. **The binding constraints are haze, astringency and foam — in that order of surprise, and reverse order of danger.** Viscosity is not a constraint; the drink will not feel thick.
4. **Cold counter-pressure fill with a preservative and no pasteurisation is the CHEAPEST CANDIDATE process — it is NOT a recommendation, and this file does not make one.** It is the mainstream carbonated soft-drink model and it is the biggest cost lever in the project, but it is **valid only if a microbiological challenge test on the finished can passes AND the co-packer confirms an AMBIENT shelf life in writing.** Without both, the same route gives a **fridge-only shelf life measured in days-to-weeks**, which destroys the gym-fridge distribution model. **The co-packer's validated process is the decision. Do not decide this yourself.** See §7.3.
5. **Promise 6 months, not 12.** Haze and sediment are the clock that runs out first, and a product that fails at month 7 on a gym shelf with a 12-month date is worse than no product. *(Note the cross-file conflict: `finance/21_CASHFLOW.md` models a 9–12 month best-before and a sell-out at week 34. **6 months governs** — see `06_SAFETY_AND_SHELF_LIFE.md` §6.4.)*

> ### ⚠️ SIXTH SENTENCE, AND IT IS NOT A CHEMISTRY QUESTION
> **The formula contains 1.7 g of free L-leucine and 150 mg of free L-tryptophan. Whether free amino acids may lawfully be added to a BEVERAGE (as opposed to a food supplement) under Reg (EC) 1925/2006 and Hungarian national rules is UNVERIFIED — NEEDS PROFESSIONAL CONFIRMATION.** No primary source could be read under the egress policy and two independent research workstreams failed to resolve it. **It blocks raw-material purchase and artwork.** Every bench protocol in §10 that doses leucine or tryptophan is conditional on the answer. Fallback: **ARCH C unspiked**, leucine claim dropped. See §12 item 4.

---

## 1. WHY pH 3.0–3.5 IS COMPULSORY

### 1.1 The proteins and their isoelectric points

| Protein | % of whey protein | **Isoelectric point (pI)** | Mass | Why it matters |
|---|---|---|---|---|
| **β-lactoglobulin (β-lg)** | **~50–60%** | **~5.1–5.3** | ~18.4 kDa | Dominant. Carries the only free thiol. Controls everything. |
| α-lactalbumin | ~20% | ~4.2–4.5 | ~14.2 kDa | Loses bound Ca at low pH (molten globule) |
| Bovine serum albumin | ~5–10% | ~4.7–4.9 | ~66 kDa | Large — contributes to haze disproportionately |
| Immunoglobulins | ~10% | ~5.5–8.3 | ~150 kDa | Very large, strong haze contributor; largely removed in a good WPI |

*(TEXTBOOK — HIGH CONFIDENCE, UNVERIFIED. Canonical citations would be Walstra/Wouters/Geurts and Fox & McSweeney; neither was retrievable under the egress policy.)*

### 1.2 The mechanism, in one paragraph

A dissolved globular protein stays dispersed because the particles repel each other, and for whey in water **electrostatic charge does essentially all of that work**. At pH = pI, net charge is zero, repulsion vanishes, hydrophobic and van der Waals attraction take over, molecules collide and stick, and the particles grow large enough to scatter visible light — **opalescence → haze → visible floc → precipitate**. Well below pI, at pH 3.0–3.5, every carboxyl and every amine is protonated, **β-lg carries a strong net positive charge**, the particles repel violently, and the system is a genuine optically clear colloidal solution.

### 1.3 The forbidden zone

> ### **pH 3.8 – 5.5 is forbidden, centred on ~4.6–5.2 where β-lactoglobulin sits at its pI.**
> Anywhere in this band a whey beverage is cloudy at best and sedimenting at worst.

The consequence is absolute: **there is no safe corridor between pH 3.6 and pH 6.5.** A soda must be acidic. Therefore this product is locked to **pH 3.0–3.5**, and every ingredient decision — acid choice, mineral load, flavour system, preservative, carbonation level — must be checked for what it does to the finished pH.

**And the journey matters as much as the destination.** This is why milk protein isolate and micellar casein are categorically excluded: casein's pI is **4.6**, and although it partially re-solubilises at pH 3.2, you must **pass through 4.6 during acidification**, where it flocculates irreversibly into a white gritty suspension. There is no order of addition that avoids this.

### 1.4 Why 3.2 and not 2.5

Lower is not better. Three counter-pressures set the floor:

| Floor pressure | Detail |
|---|---|
| **Taste** | Below ~pH 2.9 the drink is aggressively sour and metallic, and **astringency rises steeply**. It stops tasting like a soda. |
| **Acid hydrolysis over shelf life** | At pH < 3 over months at ambient, slow acid-catalysed peptide-bond hydrolysis and **deamidation of Asn/Gln** liberate free amino groups → more Maillard browning and bitter peptides. |
| **Consumer perception** | Colas sit near pH 2.5; sports and functional drinks sit at 3.0–3.5. Very-low-pH drinks attract enamel-erosion criticism. |

And the **ceiling** is the forbidden zone plus a safety margin. You must not drift toward 3.8 during shelf life — and pH **rises** over months as acids are buffered, as the protein (itself amphoteric) buffers, and as CO₂ slowly escapes through the seam.

> **SPECIFICATION: pH 3.20 ± 0.10, measured in the finished, carbonated, sealed can at 20 °C. Write it as an IN-CAN specification, not a syrup specification.**

### 1.5 The free thiol — the fact that makes heat treatment possible

β-lactoglobulin carries one **free cysteine thiol (Cys121)** plus two internal disulfides. At neutral pH, heating unfolds β-lg, exposes Cys121, and the **thiolate anion (–S⁻)** attacks existing disulfides — thiol/disulfide interchange — building large covalently crosslinked aggregates. That is why neutral-pH whey beverages gel or go cloudy when pasteurised.

**At pH 3.0–3.5 the thiol is fully protonated (–SH).** Thiolate concentration is negligible. **Thiol/disulfide interchange is effectively switched off.** Heating still unfolds the protein, but the aggregates that could form are non-covalent only, and the strong net positive charge actively prevents them.

> **This is why the thermal-process decision (§7) is far less frightening than it first appears — PROVIDED pH is nailed to 3.2.** It is also why a formulation that drifts to pH 4.0 and then gets pasteurised is a total loss rather than a partial one.

### 1.6 The second hidden variable — ionic strength

Electrostatic repulsion is **screened by dissolved ions** (Debye screening), and screening scales with the **square of the ion's valency**. A high-mineral formulation collapses clarity even at perfect pH.

**Rules that follow, all of them cheap to obey:**
- Use **low-ash whey isolate**. Ion-exchange WPI is typically lower in ash and especially lower in **calcium** than membrane/microfiltration WPI. Ca²⁺ is far more destructive than Na⁺ or K⁺.
- **Do not calcium-fortify. Do not add magnesium salts. Do not add an "electrolyte blend"** without a haze trial.
- **Citric acid is a free clarity benefit** — it chelates calcium, sequestering the exact ions that screen the charge. This is the main reason citric is the default acidulant here rather than phosphoric.
- Be careful with **trisodium citrate / sodium phosphate buffering** — helpful for pH control, harmful for clarity at high dose. If you must buffer, use **citrates (E331/E332)**, not phosphates: phosphates share a restricted P₂O₅ group limit and add ionic strength.
- **Specify demineralised or low-hardness water.** Hungarian municipal hardness varies substantially by region. **A co-packer on hard water can ruin an otherwise-correct formula.** Ask for their water report: hardness, Ca, Mg, chloride, alkalinity.
- **Keep chloride low.** It is the principal pitting agent on the can's aluminium substrate (§8). Never use HCl or NaCl to adjust anything.

---

## 2. WHY COLLAGEN IS EASY

| Property | Hydrolysed collagen peptides | Consequence here |
|---|---|---|
| **Molecular size** | ~2–5 kDa, non-globular random coils | Light scattering in the Rayleigh regime scales roughly with r⁶ — cutting protein to 2–5 kDa peptides removes **essentially all protein-derived scattering**. Clear by construction. |
| **Solubility** | Very high; 20–40%+ w/v solutions are made routinely in cold water | 3.4% w/v is trivial |
| **pH stability** | Stable and clear roughly **pH 2 to pH 11** | **NO FORBIDDEN ZONE.** This is the key advantage. |
| **Heat stability** | Survives pasteurisation, UHT, even retort with little visual change | Removes the thermal constraint from half the protein load |
| **Viscosity** | Low; **does not gel** (unlike unhydrolysed gelatine) | No mouthfeel penalty |
| **Foaming** | Surface-active but **less foam-stable than whey** | Easier at the filler — though not zero |
| **Taste** | Near-neutral; a faint **broth / savoury** note at high inclusion | Maskable with citrus |

**Full hydrolysis is mandatory and unconditional.** Gelatine is partially hydrolysed collagen that **retains triple-helix renaturation capacity — and that is gelling.** The Bloom test, the industry's own definition of gelatine strength, is performed on a **6.67% w/v solution cooled to 10 °C**. Our can would be **~6.9% w/v gelatine, sold from a gym fridge at 4–8 °C.** Those are literally the standardised gelling conditions. **It would set into a jelly in the can.** Full hydrolysis to <5 kDa destroys renaturation. The price premium of peptides over gelatine is buying the hydrolysis step, and it is not optional.

---

## 3. WHY WHEY IS HARD — AND WHY WPC IS DISQUALIFIED

**WPC80 fails for four independent reasons, any one of which is fatal to a clear product:**

| # | Failure mode | Why it cannot be fixed |
|---|---|---|
| 1 | **Fat (~4–8%)** and residual **phospholipid / MFGM fragments** | Not soluble. Scatters light permanently. No pH adjustment touches it. |
| 2 | **Lactose (~4–8%)** | A **reducing sugar**. Over months in an acidic protein matrix it drives **Maillard browning** with protein amino groups → yellow-brown drink, cooked/caramel notes. Also destroys the zero-sugar declaration. |
| 3 | **Higher mineral/ash load** | Charge screening → haze (§1.6) |
| 4 | **Pre-denatured aggregate and residual CMP/GMP carry-over** from the cheese process | A denatured aggregate is a permanent haze nucleus. **It cannot be un-denatured.** |

**WPC of any grade is unusable for a clear product.** What works:

| Form | Clarity at pH 3.2 | Heat stability at pH 3.2 | Taste problem | Cost |
|---|---|---|---|---|
| Standard WPI (ion-exchange, ~90%) | Good at low g/L, opalescent at high g/L | Good | Mild astringency | High |
| **Acid-stable / "clear" WPI grades** | **Best available for intact protein** | Best | Astringency; some process notes | Highest |
| WPH (low DH ~5–15) | Excellent — small peptides barely scatter | Excellent — nothing left to denature | **Bitterness rises with DH** | High, and rising |

> **"Standard WPI" is not automatically "clear WPI."** Clarity at pH 3.2 through a heat step is a specific grade and process attribute. Specifying the wrong grade is the classic cause of a failed first trial run.

> ### 💰 THE COST CONSEQUENCE — THIS IS WHY THE COGS MOVED
> **The clear / acid-stable grade is the BASE CASE, at 163.90 HUF/can for 10 g of declared protein** (16.39 HUF/g, `ESTIMATE` — a ~+25% clear-grade premium on the July 2026 WPI90 index). Commodity WPI90 at 131.08 HUF/can is the **optimistic** case and is valid **only** if a supplier certifies clarity at pH 3.2 in writing.
> **Delta: +32.82 HUF/can, +EUR 154 on a 1,700-can batch.** It is the reason landed COGS at 1,700 cans is **524 HUF/can (range 460–620)**, not the 491 an earlier draft carried.
> ⚠️ `16_INGREDIENT_SUPPLIERS.csv` states this single line **swings ARCH F by up to ±50 HUF/can**, and that a 25 kg buyer should budget the **index +10–25%** on top. **A written clear-WPI quote, with confirmed availability, is a hard gate before any deposit is paid.** See `04_FORMULATION_V1.csv`.

---

## 4. THE CONCENTRATION CEILING — AND WHY ARCH F CLEARS IT

**The arithmetic:**
```
20 g protein ÷ 0.330 L = 60.61 g/L = 6.06% w/v protein  ← ARCH E (all whey). OUTSIDE the safe zone.
10 g whey    ÷ 0.330 L = 30.30 g/L                       ← ARCH F whey fraction. INSIDE it.
```

**The category has converged on 40–50 g/L in a 500 ml format.** That is not a marketing accident — it is where the physics stops fighting back. The realistic ceiling for whey-only, clear, canned, shelf-stable product is **~30–45 g/L**; conservative/safe is 30 g/L; 45 g/L is aggressive but defensible with a good grade and validated bench work. Between 45 and 61 g/L four things degrade, **non-linearly**:

| What degrades | Why non-linearly |
|---|---|
| **Haze / opalescence** | Aggregation is collision-driven (second order) — doubling concentration roughly **quadruples** the collision rate. A formula that is water-clear at 30 g/L can be visibly opalescent at 60 g/L **on day one**, and the gap widens over shelf life. |
| **Astringency** | Rises steeply with protein × acidity. At 60 g/L and pH 3.2 the drink is markedly drying. |
| **Foam at the filler** | Surface-active protein doubles → foam volume and foam stability rise sharply (§6). |
| **Sediment over shelf life** | More protein = more material available to aggregate and fall out (§9). |

**Viscosity is NOT a constraint** and it is worth saying so explicitly. Non-aggregated whey solutions below ~10% w/v are essentially Newtonian, order **1.5–2.5 mPa·s at 6%** vs water at ~1.0 mPa·s. **The drink will not feel thick.**

> **ARCH F's whey fraction sits at 30.3 g/L — the conservative end of the safe corridor.** The other 30.3 g/L is collagen peptides, which contribute essentially nothing to haze, astringency or foam. **That is the entire technical argument for the blend.**
>
> **The honest caveat:** total dissolved solids are still **7.29% w/v** (24.07 g of protein-source powder plus additives in 330 ml), higher than the Icelandic reference's ~6.5%. Expect a slightly "full" mouthfeel. **UNPROVEN — bench test it.**

---

## 5. ASTRINGENCY — THE UNDER-ESTIMATED PROBLEM

**Astringency is a tactile sensation** (drying, roughening, puckering), not a taste. In acidic whey beverages the mechanism is specific:

1. At pH 3.2, whey proteins carry a **strong net positive charge** (below their pI).
2. Human saliva contains **negatively charged proline-rich proteins and mucins** whose job is lubrication.
3. Cationic whey protein **electrostatically complexes with anionic salivary proteins and precipitates them**, stripping the oral lubricating film → perceived dryness and roughness.
4. The acid itself contributes astringency independently, additively.

> **Astringency therefore scales with (a) protein concentration and (b) inverse pH — the two variables this product pushes hardest. This is not a problem flavour can fully solve.**

**Levers, ranked by effect:**

| Lever | Effect | Trade-off |
|---|---|---|
| **Substitute part of the whey with collagen** | **Large** — collagen is far less astringent | This is already done in ARCH F. It is the main reason F is more drinkable than E. |
| Reduce protein concentration | Strongest single lever | Reduces the headline claim |
| Raise pH 3.0 → 3.4 | Meaningful | Eats the clarity margin and weakens preservative efficacy |
| Use a low-DH hydrolysate | Reported to help in some systems | **Introduces bitterness instead.** LIKELY, unverified. |
| Sweetener level | Sweetness suppresses astringency perception | Bounded by the sweetener maxima and by taste |
| Serve very cold + carbonation | Cold and CO₂ tingle mask astringency | Affects consumption, not formulation |
| **Low-methoxyl pectin / CMC at trace levels** | Reported to bind the cationic protein competitively | ⚠️ **DANGEROUS FOR CLARITY.** Anionic polysaccharide + cationic protein at pH 3 is the textbook complex-coacervation recipe. **Target ZERO hydrocolloids.** If the trial shows haze, the fix is the protein grade and the thermal profile, **not a gum.** Adding gums to a clear soda is how startups end up with a product that looks spoiled on a gym shelf. |

**Two more taste risks specific to this build:**

- **The "soapy" off-flavour.** Peer-reviewed work on clear acidic whey protein beverages (PMC11884219) identifies a characteristic **soapy off-note** developing in exactly this format — clear, pH ~3.3, whey protein — arising largely from lipid oxidation and free fatty acids in the protein. **This is the #1 reason clear whey RTDs get reformulated.** It is a flavour-house problem, not a protein-supplier problem. Budget development time, not COGS.
- **Free-leucine bitterness.** 1.7 g/can in a citrus-acid matrix should be manageable, but **it must be blind-panel tested**. If it fails, the fallback is reducing free leucine to ~1.0 g and accepting ~2.3 g total.
- **The cardboard / "wet dog" note.** Heat treatment of whey generates lipid-oxidation and Strecker volatiles. Drivers: residual fat in the powder (another reason WPC fails), **dissolved oxygen**, heat load, storage temperature. Mitigations: low-fat isolate (primary control), **de-aerate the water**, minimise splashing, **undercover gassing at the seamer**, minimise heat (an argument for cold fill), ship and store cool.

**Flavour direction — citrus is the right call, and here is the mechanistic reason:** high acid is *expected* by the consumer in a lemon-lime product, so **pH 3.2 reads as "correct" rather than "sour."** Citrus top-notes mask both astringency and any whey process note. **Avoid berry with real fruit extract** — polyphenols are themselves astringent by the same salivary-protein mechanism and would stack. **Avoid dairy/vanilla/chocolate directions entirely** — they set up an expectation of creaminess a clear acidic drink cannot deliver.

---

## 6. FOAM AND CARBONATION — THE MANUFACTURING KILLER

> ### ⚠️ **This is the single item most likely to be under-estimated, and it is a MANUFACTURING failure mode — it stops the line, and you pay for the attempt.**

Whey proteins are among the **best foaming agents in the food industry** — that is precisely why they are used in meringues, marshmallow and aerated confectionery. They adsorb at the air/water interface, unfold, and form a viscoelastic film that makes bubbles **persistent**. Low pH does not remove surface activity. You are proposing to combine the industry's best foaming agent with the deliberate injection of gas.

| Where it bites | What happens |
|---|---|
| **At the filler** | The product foams as it enters the can ("fobbing"). Foam occupies volume → **underfill, rejected cans, wildly variable fill weights, slow line speed, product loss.** On a small co-packer's line this can mean the run simply does not work. |
| **At the seamer** | Foam in the seam area causes seam defects and contamination. |
| **On opening, by the consumer** | **Gushing** — the can overflows. Catastrophic consumer experience. Worsened by warm storage, agitation (a gym bag), high CO₂, and **any particulate acting as a nucleation site** — which links this directly to the sediment problem (§9). |

### 6.1 Carbonation target

> **SPECIFICATION: 2.0–2.4 volumes CO₂. Start bench and pilot trials at 2.2.**

Reference points *(LIKELY, unverified)*: colas and lemon-lime sodas ~2.5–3.8 vol; sports and functional drinks ~1.8–2.5 vol; beer ~2.4–2.8. **2.2 vol reads unambiguously as "soda" while keeping foam and gushing manageable under a protein load.**

**Two consequences to design around:**
- **Dissolved CO₂ forms carbonic acid and lowers finished pH by roughly 0.1–0.3 units** vs the uncarbonated base. **Set the acid dose against the CARBONATED in-can pH measured in a degassed sample by a standardised method — never the syrup pH.**
- **If the co-packer pasteurises, CO₂ volume is capped by the can's pressure rating at temperature.** More CO₂ → lower maximum pasteurisation temperature. **Ask the can supplier for the rated internal pressure and the maximum pasteurisation temperature for the specific can and end. UNKNOWN — SOURCE REQUIRED.**

### 6.2 Foam control — non-additive first

**These have no label impact and should be exhausted before any additive is considered:**

| Control | Why |
|---|---|
| **Fill cold, 0–4 °C** | CO₂ solubility rises steeply as temperature falls; cold product holds its gas and foams far less. **The single most effective control.** |
| **Counter-pressure (isobaric) filling** | The can is pre-pressurised with CO₂ so the product never sees the pressure drop that nucleates bubbles. **MANDATORY for a carbonated protein product — confirm the co-packer's filler is counter-pressure, not gravity/open.** |
| **Slow, laminar, bottom-up fill**, tube low in the can | Avoids free-fall splash |
| **De-aerate the water and the base before carbonating** | Dissolved air nucleates foam aggressively **and** drives oxidation (§5) |
| **Adequate headspace + a foam-collapse interval before seaming** | Basic, free |
| **Undercover gassing (UCG)** — a CO₂ or N₂ jet immediately before the lid | Knocks foam down and expels oxygen from the headspace |
| **Reduce protein concentration** | Again the strongest lever — and again the reason ARCH F beats ARCH E |

**Additive route, only if the above fails:** the standard food-grade antifoam is **dimethyl polysiloxane (E900)**. Its authorisation in beverage categories is **LIKELY but the exact category and maximum level are UNKNOWN — SOURCE REQUIRED.** Do not put a number in any document until Annex II of Reg (EC) 1333/2008 has been read directly for the relevant category. E900 must be declared on the ingredient list, which some brands avoid for clean-label reasons.

---

## 7. THERMAL PROCESS — THE BIGGEST COST DECISION IN THE PROJECT

### 7.1 The microbiological reality at pH 3.2

**The decisive fact: *Clostridium botulinum* does not grow below pH 4.6.** A product at pH 3.2 is a **high-acid food**. It does **not** require a botulinum ("12D") sterilisation process. Retort is off the list.

What you actually have to control:

| Organism group | Threat | Note |
|---|---|---|
| **Yeasts — especially *Zygosaccharomyces bailii*** | **THE primary spoiler.** Ferments, produces CO₂ → **swollen or exploding cans**, haze, off-flavour | ***Z. bailii* is notoriously resistant to sorbate and benzoate at legal levels.** It is the reason "we added sorbate" is not a food safety system. |
| **Moulds** (incl. heat-resistant *Byssochlamys*, *Talaromyces*, *Neosartorya*) | Haze, mats, mycotoxin risk; ascospores survive pasteurisation | Mostly **aerobic** — strongly inhibited in a de-aerated CO₂-saturated sealed can |
| **Lactic acid bacteria** | Acid- and CO₂-tolerant; ropiness, off-flavour, gas | **Real risk in a nutrient-rich acidic drink** |
| ***Alicyclobacillus acidoterrestris*** | Thermoacidophilic spore-former; **survives normal pasteurisation**; produces **guaiacol** (medicinal/TCP off-note) | **It is a strict aerobe** — strongly suppressed in a de-aerated CO₂-flushed sealed can. Its classic vehicle is **fruit juice/concentrate**. **Using flavouring rather than juice drops this risk substantially.** |
| Vegetative pathogens | Do not grow at pH 3.2, but acid-adapted *E. coli* can **survive** for weeks | Must be excluded by hygiene, not merely inhibited |

### 7.2 The four options

| Process | Carbonation-compatible? | Protein-compatible at pH 3.2? | Available at small co-packers? | Verdict |
|---|---|---|---|---|
| **Hot fill** (fill at 85–95 °C, invert, cool) | **NO — physically incompatible.** CO₂ comes out of solution violently at 85 °C | Yes | Common for PET juice/tea | ❌ **RULED OUT BY CARBONATION** |
| **Cold counter-pressure fill + in-can TUNNEL PASTEURISATION** (spray tunnel, heated after sealing to ~60–72 °C core, then cooled) | **YES** — the standard route for carbonated cans needing heat (RTD cocktails, some kombucha) | **Yes at pH 3.2** — the thiol is protonated, covalent aggregation is switched off (§1.5) | **Limited.** A tunnel is expensive capital; many small canners do not have one | ⚠️ **TECHNICALLY BEST, AVAILABILITY-LIMITED** |
| **Flash/HTST pasteurisation of the base + non-sterile cold fill** | Partially | Yes | Pasteuriser may exist, but **the canning line is not sterile** → post-pasteurisation recontamination is inevitable | Only meaningful **combined with preservatives** |
| **Full aseptic canning** | Yes | Yes | Essentially unavailable at small scale | ❌ **RULED OUT ON COST** |
| **Cold fill, NO heat: low pH + CO₂ + preservative** | Yes | Yes — **zero thermal damage; best clarity and best flavour** | **Widely available** — the standard soft-drink model | ⚠️ **CHEAPEST CANDIDATE — CONDITIONAL ON A PASSED CHALLENGE TEST AND A WRITTEN AMBIENT SHELF LIFE. NOT A RECOMMENDATION.** |

### 7.3 The cheapest candidate process — and why this file does NOT recommend it

> ## **CHEAPEST CANDIDATE PROCESS — VALID ONLY IF A MICROBIOLOGICAL CHALLENGE TEST ON THE FINISHED CAN PASSES:** cold, de-aerated, counter-pressure fill at 0–4 °C; pH 3.20; 2.0–2.4 vol CO₂; potassium sorbate at an EU-legal level; low dissolved oxygen; undercover gassing; validated CIP. **NO PASTEURISATION.**
>
> ### 🛑 **THIS IS NOT A RECOMMENDATION, AND IT MUST NOT BE READ AS ONE.** An earlier version of this section carried it as "RECOMMENDED PROCESS". **That recommendation is withdrawn.** The thermal route is **the co-packer's decision, made on their validated food-safety plan** — see `01_FINAL_RECOMMENDATION.md` CONFLICT 2. Do not specify it yourself, and do not hand this file to a technologist as an instruction.

> ### ⚠️ THE WARNING FROM `06_SAFETY_AND_SHELF_LIFE.md` §4.7, REPRODUCED HERE VERBATIM BECAUSE IT BELONGS IN THIS FILE
> **"Reconsider immediately if the manufacturing route turns out to be cold-fill with no pasteurisation.** `B6 warns that a mobile-canning / no-pasteurisation route gives a fridge-only shelf life measured in days-to-weeks.` That would be a **formulation and process problem, not a testing problem** — and it would **destroy the gym-fridge distribution model. Ask every co-packer what thermal process they apply. Put the answer in writing."**
>
> **What that means in money:** 1,700 cans distributed ambient on a days-to-weeks real shelf life is a **total loss of ~EUR 2,300 of inventory plus recall exposure.** `13_COPACKER_RANKING.md` §2 records that BeverageScouts publishes the opposite process — *"All cans are pasteurised after filling, so no chemical preservatives are required"* — and calls it the technically correct one for this product. **The two positions cannot both be acted on.**

> ### 🛑 GATE-2 NO-GO — ADD THIS TO `manufacturing/14_FIRST_BATCH.md`, WHERE IT CURRENTLY DOES NOT APPEAR
> **No deposit is paid until the co-packer has stated, in writing: (a) the thermal process they will apply, and (b) the resulting shelf life AND whether it is AMBIENT or CHILLED.** A chilled-only answer is a **NO-GO for this business model**, not a price negotiation. This is a documents gate; it costs one email and it is the cheapest item on the critical path.

**Why this is worth so much money:** requiring a tunnel pasteuriser **collapses the list of co-packers in Hungary and the region that can make your product**, and every one that can will charge more. Eliminating the heat step widens the pool enormously (any counter-pressure canning line, including mobile canning services used by craft breweries), **lowers the tolling fee**, **shortens lead times, reduces minimum run sizes**, and **improves the product** — no thermal haze, no cooked note. *(Direction certain; magnitude UNKNOWN — QUOTE REQUIRED.)*

**Why it is microbiologically defensible:** the overwhelming majority of carbonated soft drinks sold globally are **not pasteurised**. They rely on a hurdle system:

| Hurdle | Contribution |
|---|---|
| pH ≤ 3.5 | Excludes all pathogens and most bacteria |
| CO₂ at 2.0+ volumes | Directly antimicrobial **and displaces oxygen** — kills off moulds, acetic acid bacteria and *Alicyclobacillus*, all aerobes |
| Sealed, de-aerated, low-O₂ headspace | Reinforces the above |
| Sorbate (and/or benzoate) | Targets yeasts and LAB |
| **Zero fermentable sugar** | **Significant** — removes the primary carbon source for yeast. A sugar-free product is meaningfully harder to spoil. |
| Sanitary process, treated water, validated CIP | The foundation. Without it, nothing else works. |

> ### ⚠️ **THE CAVEAT, AND IT IS REAL: your product is not a normal soft drink. It contains 60 g/L of protein — a rich nitrogen source. Most soft drinks are nutritionally near-barren. This meaningfully raises spoilage risk relative to a cola, and it means you CANNOT assume the standard soft-drink hurdle set is sufficient.**
>
> **THE GATE: a microbiological CHALLENGE TEST — inoculate with *Zygosaccharomyces bailii* and a lactic acid bacterium, incubate, count. Do not skip this. It is the single item that converts "cold fill is cheaper" from a hope into a decision.**

**The evidence that this is the category's real answer:** the Icelandic reference product **Mist Uppbygging lists potassium sorbate** on its ingredient declaration. A fully pasteurised product generally does not need a chemical preservative for yeast control, and brands avoid preservative declarations wherever possible because "no preservatives" sells. **If Ölgerðin is carrying the label cost of E202, it is almost certainly because they are not applying heat.** *(LIKELY inference, UNVERIFIED. **Action: photograph the full ingredient list, nutrition panel, net volume and best-before of a UPP and a Mist can. That single photo is worth more than a week of desk research.**)*

**Note the dossier disagreement, and how to settle it:** one research strand recommends **no preservatives at all**, on the reasoning that low pH + CO₂ + hermetic seal + **tunnel pasteurisation** is already a complete hurdle system and preservatives are redundant. That is correct *if you get the tunnel*. **The test that settles it is a single written question to the co-packer:**

> *"What is your validated process for a pH 3.2 carbonated beverage? Do you have a tunnel pasteuriser? What PU target do you run, and what is your validation evidence? Will you accept this product on your food safety plan with and without a preservative?"*

**Their answer is your process. Do not attempt to specify a PU value yourself.** *(For context: 1 PU is conventionally 1 minute at 60 °C with a z-value applied; z = 7 °C for beer, z = 10 °C commonly for soft drinks and juices — **LIKELY, unverified. The specific PU target for this product is UNKNOWN — SOURCE REQUIRED.** In the EU there is no prescribed numeric pasteurisation standard for this product type; the legal obligation is a HACCP-based system under Reg (EC) 852/2004 plus the microbiological criteria framework of Reg (EC) 2073/2005 — **LIKELY, unverified. In practice the co-packer's validated plan defines the process and you inherit it.**)*

**DECISION RULE, CORRECTED: if the co-packer has a tunnel, take the tunnel unless the premium is large.** It buys ambient shelf life, a wider safety margin, a "no preservatives" declaration and — most importantly — it removes the challenge test from the critical path. **The cold-fill saving is only real if the challenge test passes and the shelf life comes back AMBIENT; priced against a total-loss downside of ~EUR 2,300, a modest tunnel premium is cheap insurance.** Do not pay a *large* premium at launch, but do not treat cold fill as the default either.

### 7.4 Does pasteurisation damage the protein?

**Largely no, if pH is correct** (§1.5). Whey isolate at pH 3 is markedly more heat-stable than at pH 4.5–6.5. But three real risks remain:

1. **Haze creep.** Thermal energy still drives some physical aggregation. Expect a measurable rise in turbidity (NTU). Whether it is *visible* depends on concentration — another argument for 30 g/L rather than 60. **Turbidity before/after must be bench-measured.**
2. **Flavour damage.** Heat accelerates the cardboard/Strecker note and gives Maillard a head start on the shelf-life clock.
3. **Can pressure at temperature** (§6.1).

### 7.5 One more option worth one email

**Dimethyl dicarbonate (E242)** is a "cold sterilant" dosed in-line at fill; it **hydrolyses within hours to CO₂ + methanol, leaving no residue**, and it is highly effective against yeasts **including *Z. bailii***. It exists precisely to enable cold-fill without pasteurisation. **Four caveats:** (a) it needs dedicated in-line dosing equipment a small co-packer may not have; (b) it is hazardous to handle; (c) ⚠️ **DMDC reacts with amino acids and proteins** (methoxycarbonylation of nucleophilic side chains), so its behaviour in a 60 g/L protein matrix is **not** the same as in a normal soft drink — **NEEDS PROFESSIONAL CONFIRMATION before use**; (d) its authorised category, maximum level and labelling treatment are **UNKNOWN — SOURCE REQUIRED.**

---

## 8. THE CAN INTERIOR — A GENUINE COMPATIBILITY QUESTION

An aluminium beverage can is **never bare aluminium inside**. It carries a sprayed and cured **internal organic coating (lacquer)**, plus a separate coating system on the end. Historically these were **epoxy-phenolic resins made from bisphenol A**; the industry has largely moved to **BPA-NI ("BPA non-intent")** acrylic, polyester or non-BPA epoxy chemistries.

**Why this matters specifically for THIS fill:**

| Factor | Consequence |
|---|---|
| **pH 3.2** | At the acidic end of what beverage cans routinely handle. Colas are lower still, so it is not unprecedented — **but colas do not contain 60 g/L of protein.** |
| **Protein and peptides are chelators** | Carboxylate, imidazole and thiol side chains complex metal ions. Given any pinhole or scratch in the lacquer, **protein + low pH + chloride can accelerate aluminium dissolution** → metallic off-taste, elevated aluminium in the product, and in the worst case **perforation and leakage**. |
| **Chloride** | The principal **pitting** agent. Keep it low (§1.6). |
| **Flavour scalping** | Coatings adsorb flavour compounds over months, weakening the top notes. |

**Regulatory context:** food contact materials sit under framework **Reg (EC) 1935/2004**; plastics under **Reg (EU) 10/2011**; **BPA in food contact is the subject of Reg (EU) 2024/3190**, which introduced a prohibition with transition periods following EFSA's 2023 re-evaluation. **STATUS: LIKELY, UNVERIFIED — the regulation number, scope and transition dates MUST be verified. NEEDS PROFESSIONAL CONFIRMATION.**

> ### **MANDATORY ACTION BEFORE ORDERING CANS**
> Declare the full product specification — **pH, protein type and level, chloride, preservative, CO₂ volume, process temperature** — to the can supplier in writing, and request (a) a **written coating recommendation for this fill** and (b) a **pack test / compatibility trial**. Can makers maintain coating selection guides for "aggressive" and "protein" fills.
>
> **Do not buy a pallet of generic cans and assume compatibility.** *(UNKNOWN — SOURCE REQUIRED; this is a supplier question and it must be answered before purchase.)*

---

## 9. SHELF LIFE AND SEDIMENT

### 9.1 Four clocks run in parallel — the shortest one wins

| Clock | Mechanism | Typical time to failure |
|---|---|---|
| **Haze / sediment** | Slow protein aggregation and settling | **Usually the binding constraint** |
| **Maillard browning** | Free amino groups + reducing sugars/carbonyls → yellowing, off-flavour | Months; accelerates with temperature |
| **Flavour fade / off-note development** | Loss of top notes, oxidation, cardboard notes | Months |
| **Package integrity / CO₂ loss / corrosion** | Slow CO₂ permeation; lacquer–aluminium interaction | Usually longest — unless corrosion occurs |
| *(Microbiological)* | Yeast/LAB outgrowth | **Should be never. If it happens the formulation is wrong.** |

Shelf life here is **quality-limited, not safety-limited** — pH 3.2 excludes pathogen growth.

### 9.2 Designing Maillard out — why zero sugar is a technical requirement, not a marketing choice

Maillard needs a **reducing sugar (or reactive carbonyl) plus a free amino group**. You have 60 g/L of free amino groups. Therefore:

- **No lactose → no WPC.** Use a low-lactose isolate.
- **No glucose, fructose, HFCS, honey, or fruit juice concentrate.**
- ⚠️ **Be careful with sucrose.** Sucrose itself is non-reducing, but **at pH 3.2 over months it slowly inverts to glucose + fructose, which are.** A sucrose-sweetened acidic protein drink is a browning time bomb.
- **Use non-nutritive sweeteners** — sucralose (E955), acesulfame K (E950), steviol glycosides (E960a/960c). All non-reducing and acid-stable. **Avoid aspartame (E951)** — not acid-stable over a long shelf life at pH 3.2, and it triggers a phenylalanine declaration.
- ⚠️ **The acid-hydrolysis feedback loop:** pH 3.2 over months slowly liberates *more* free amino groups from the protein, which then feed Maillard. **Browning accelerates rather than plateaus.** This is a real reason not to over-promise shelf life.

### 9.3 What sediment actually looks like

In order of appearance, over months, even in a well-formulated product:

1. **Increased opalescence** — a faint bluish-white cast when held to light. Usually first, often within weeks.
2. **Faint "shimmer" or floaters** when swirled — fine protein aggregates.
3. **A thin, pale, powdery or flocculent deposit on the base** — visible when poured, or as a cloud that lifts on tipping.
4. In a bad formulation: **visible flocs, a distinct sediment layer, clear supernatant.** Product-failure appearance.

> ⚠️ **THE VICIOUS CIRCLE: particulate matter provides nucleation sites for CO₂. A sedimenting product becomes a GUSHING product over shelf life. Haze and gushing are linked failure modes, not independent ones.**

**On-pack wording — get this right.** "Slight sediment is natural" statements are common commercial practice in protein, functional, juice and kombucha products. **But *"shake before use"* is DANGEROUS ADVICE on a carbonated protein can** — shaking will produce a gushing eruption on opening. Use something like **"Slight sediment is natural. Invert gently before opening."** — **never an instruction to shake.** *(Wording must be reviewed against Reg (EU) 1169/2011 fair-information rules. NEEDS PROFESSIONAL CONFIRMATION.)*

### 9.4 Best-before

| Process | **Realistic best-before** | Limiting factor |
|---|---|---|
| **Cold fill, preserved, no heat** | **6–9 months** | Haze/sediment; microbiological confidence without a validated kill step |
| Cold fill + tunnel pasteurisation | **9–12 months** | Haze/sediment; browning |
| 18 months | **NOT REALISTIC** for a 60 g/L acidic protein product without extensive validation | — |

> **LAUNCH WITH 6 MONTHS IF COLD-FILLED, 9 MONTHS IF PASTEURISED. EXTEND ONLY ON REAL-TIME STORAGE DATA.** Under-promising is free. A product that fails at month 7 on a gym shelf with a 12-month date is not.
>
> Under EU food law the best-before date is **the food business operator's own responsibility to justify** (Reg (EU) 1169/2011 Art. 24 and Annex X — **LIKELY, unverified**).

⚠️ **On accelerated shelf-life testing (ASLT):** the common shortcut is storage at 35–40 °C with a Q₁₀ assumption. **This is unreliable for protein systems** — aggregation and Maillard have different temperature dependencies than the assumed model, and elevated temperature can trigger aggregation pathways that never occur at 20 °C. **Use ASLT to screen and rank formulations, NOT to set the final date.**

---

## 10. EVERY PARAMETER THAT MUST BE VALIDATED

**Nothing above substitutes for physical work. Bench work at kitchen/small-lab scale costs very little and is by far the highest-return spend available.**

### 10.1 Bench stage — beakers, a pH meter, five tasters. No co-packer needed.

| # | Parameter | Method / what to record | Pass criterion |
|---|---|---|---|
| 1 | **Solubility & clarity at target g/L** | Dissolve each protein at 20/30/40/50/60 g/L at pH 3.2. Photograph against printed text. | Text legible through 5 cm of liquid |
| 2 | **Turbidity (NTU) vs protein concentration** | Turbidimeter if available; else a standardised photo vs a reference | Build the curve. **Find YOUR ceiling, not the textbook's.** |
| 3 | **pH titration curve at 7.3% w/v solids** | How much citric/malic to reach 3.2 **with the protein present** (protein buffers!) | A reproducible, documented dose |
| 4 | **Clarity across the forbidden zone** | Titrate one sample from pH 3.0 → 6.0 and photograph each step | **Do this once.** It is the single most convincing demonstration of why pH control matters, and it will keep you honest with the co-packer. |
| 5 | **Calcium / hardness sensitivity** | Repeat #1 in the co-packer's tap water vs demineralised vs water spiked with CaCl₂ | Identify the tolerance before you book line time |
| 6 | **Astringency ranking** | Blind panel, 5+ people, across protein levels and pH 3.0/3.2/3.5 | Find the acceptability cliff |
| 7 | **Free-leucine bitterness** | Blind panel at 0 / 1.0 / 1.7 / 2.5 g per 330 ml | Set the leucine dose on evidence |
| 8 | **Collagen : whey ratio matrix** | Clarity, astringency, foam at 0/25/50/75/100% collagen | Confirm 50:50 is right for THIS pair of ingredients |
| 9 | **Flavour & sweetener screening** | Samples from 2–3 flavour houses at 2–3 dose levels; sucralose/Ace-K vs steviol blend | Pick two finalists |
| 10 | **Foam test** | Shake a fixed volume in a graduated cylinder; record foam height and time to collapse | Rank formulations — **this predicts filler behaviour** |
| 11 | **Heat challenge** | Hold samples at 65 °C and 72 °C for 20 and 30 min; measure turbidity before/after | Is Δ NTU acceptable? Decides whether pasteurisation is even an option |
| 12 | **Cold-chain haze** | Hold at 4 °C for 72 h — check for leucine or protein cold-precipitation | No visible change |
| 13 | **Sweetener acid stability** | Store sweetened samples at 35 °C, taste at 2/4/8 weeks | Sweetness retention |

### 10.2 Pilot / co-packer stage

| # | Parameter | Why |
|---|---|---|
| 14 | **Actual carbonation achieved (vol CO₂)** vs target | Line capability |
| 15 | **Fill temperature actually achieved** | Foam control depends entirely on it |
| 16 | **Fill weight variability / underfill rate** | The foam problem, made measurable |
| 17 | **Dissolved oxygen at fill and in headspace** | Drives oxidation and shelf life |
| 18 | **Finished IN-CAN pH, carbonated, at 20 °C** | The specification that actually matters |
| 19 | **Turbidity of the finished can, day 0** | Baseline for the shelf-life clock |
| 20 | **Can internal pressure at 20 °C and at pasteurisation temperature** | Safety and can rating |
| 21 | **Seam integrity — teardown inspection** | Standard canning QC |
| 22 | **Gushing test** — agitate cans, open at 20 °C and 30 °C | Consumer-experience gate |
| 23 | **Can coating compatibility / pack test** with the actual can | Corrosion, aluminium migration, flavour scalping |
| 24 | **Aluminium migration into product over time** | Food-contact compliance |
| 25 | **Preservative assay** — actual sorbate in the finished can | Legal compliance vs the Annex II limit |
| 26 | **Microbiological release testing** — TVC, yeasts, moulds, LAB | Batch release |
| 27 | ⚠️ **MICROBIOLOGICAL CHALLENGE TEST** — inoculate with *Z. bailii* and a LAB, incubate, count | **THE GATE FOR THE NO-PASTEURISATION DECISION. DO NOT SKIP.** |
| 28 | **Real-time shelf-life study** — cans at 20/25/35 °C, pull at 0/1/2/3/6/9 months; record turbidity, sediment (photographed), colour, pH, CO₂ volumes, sensory, micro | The only legitimate way to set the best-before |
| 29 | **Sediment photography protocol** | So the "slight sediment is natural" wording is decided on evidence |
| 30 | **Colour / browning measurement over time** | The Maillard clock |
| 31 | ⚠️ **Nutritional analysis of the finished can** (accredited lab, Kjeldahl or Dumas nitrogen) | **NOT legally required — corrected.** Reg. (EU) 1169/2011 **Art. 31(4)** permits calculation from ingredient values as a full alternative to analysis (`06_SAFETY_AND_SHELF_LIFE.md` §2 is the authority). It is **commercially close to indispensable** for a front-of-pack "20 g" claim, because a rival can send your can to a lab. **~EUR 100–150 `QUOTE REQUIRED` — and it is UNFUNDED in every budget file.** |
| 32 | **Amino-acid profile of the finished can** | Enables a real DIAAS computation. **It does NOT license a leucine claim on the front panel** — see `03_PRODUCT_ARCHITECTURE.md` §5. |
| 33 | **Allergen verification** — milk (Annex II), bovine collagen source, cross-contact | Labelling |

---

## 11. THE SUPPLIER TECHNICAL BRIEF — SEND THIS VERBATIM

To every collagen and clear-WPI supplier, and to the can supplier (adapted):

> We are developing a carbonated, clear, ready-to-drink beverage in a **330 ml aluminium can**.
> **Finished pH: 3.2 ± 0.1. Carbonation: 2.0–2.4 volumes CO₂. Zero sugar** (high-intensity sweeteners).
> **Protein in the finished drink: 30 g/L whey + 30 g/L hydrolysed bovine collagen = 60 g/L total.**
> Target: **no visible haze, no sediment, over 9 months at 25 °C**.
> Process: **NOT YET CHOSEN — please advise for both.** Either **cold counter-pressure fill, no pasteurisation, potassium sorbate preserved** — OR — **cold fill + in-can tunnel pasteurisation to ≤72 °C core**.
> Grade: we require a **CLEAR / ACID-STABLE** whey isolate. **Do not quote standard WPI90 unless you certify clarity at pH 3.2 in writing.**
> Please advise:
> 1. Which of your grades you recommend, with the **exact product code and technical datasheet**.
> 2. **Maximum recommended inclusion in g/L at pH 3.2** while remaining visually clear.
> 3. Published or internal **turbidity (NTU) data vs concentration at pH 3.0 / 3.2 / 3.5**.
> 4. **Heat-stability data at pH 3.2** — time/temperature envelope before haze onset.
> 5. **Foaming / surface-activity data** and any recommendation for carbonated filling.
> 6. **Sensitivity to calcium and total ionic strength**; recommended maximum water hardness.
> 7. **Protein % (N × 6.25), fat %, lactose %, ash %.**
> 8. **Minimum order quantity, pack size, price per kg DDP Hungary at 25 / 100 / 500 / 1000 kg, lead time — AND CONFIRMED CURRENT AVAILABILITY.**
> 9. Whether a **1–5 kg sample** can be supplied for bench trials, and at what cost.
> 10. EU regulatory documentation: specification, **establishment approval number** (Reg 853/2004 — dairy for WPI, Annex III Section XV for collagen), allergen statement, **TSE/BSE statement per Reg 999/2001 with hide country of origin** (collagen), non-novel-food confirmation, GMO/kosher/halal, CoA template.

---

## 12. WHAT COULD NOT BE VERIFIED — THE GAP LIST

Every item is **UNKNOWN — SOURCE REQUIRED** or **NEEDS PROFESSIONAL CONFIRMATION** as of 2026-08-16, because the network egress policy blocked every primary source (EUR-Lex, EFSA, NÉBIH, all supplier sites). **Nothing in this file is tagged CONFIRMED. Do not upgrade a tag.**

1. **Reg (EC) 1333/2008 Annex II, category 14.1.4** — exact maximum levels for E200/E202, E210/E211 and their **combined** limit, E242, E900, and each sweetener, **including the footnotes**. This is where compliance is won or lost.
2. **Reg (EU) 1169/2011** — Annex I exact point number and verbatim protein definition (**two dossiers disagree: point 8 vs point 11**); Annex X best-before rules; Art. 24.
3. **Reg (EC) 1924/2006 Annex** — verbatim "source of protein" / "high protein" conditions.
4. **Reg (EC) 1925/2006** — whether **free L-leucine and free L-tryptophan** may lawfully be added to a **beverage** (as opposed to a food supplement) in Hungary. **UNVERIFIED. THE SINGLE BIGGEST UNRESOLVED REGULATORY QUESTION IN ARCH F — it blocks raw-material purchase and artwork, and two independent research workstreams failed to resolve it.** Put it in the paid food-law opinion. Fallback if restricted: ARCH C unspiked, leucine claim dropped.
5. **Reg (EU) 2024/3190** (BPA in food contact) — number, scope, transition dates.
6. **Can supplier**: coating specification for this fill, rated internal pressure, maximum pasteurisation temperature for a 330 ml can and end.
7. **PU targets** for pH < 4.0 carbonated beverages, with a citable source.
8. **Co-packer capability**: counter-pressure filling, tunnel pasteuriser, de-aeration, undercover gassing, DMDC dosing, minimum run size, water report, tolling fee per can.
9. **Supplier product codes, clarity claims, g/L limits and datasheet figures** for every named clear-whey and collagen grade. **None were retrievable. None are stated here from memory.**
10. **The Icelandic reference cans** — full ingredient list, protein split, best-before length, shelf price. **One photograph closes this gap.**
11. **DIAAS of the ARCH F blend** — must be computed from real supplier amino-acid profiles by an accredited lab.

---

## 13. THE ONE-PARAGRAPH VERSION

You cannot put 20 g of clear *whey* into 330 ml and have it still look like a soda in six months — that is 61 g/L, and the physics that makes clear whey work (running the pH far below the protein's isoelectric point, at 3.2) only holds comfortably to about 40–45 g/L. ARCH F solves this by splitting the load: **10 g of whey at 30 g/L, which is safe, plus 10 g of collagen peptides, which are 2–5 kDa random coils that stay clear from pH 2 to pH 11 and contribute essentially nothing to haze, astringency or foam.** Nail the pH to **3.20 ± 0.10 measured in the finished carbonated can**, never let it drift toward 3.8, keep the water soft and the calcium and chloride low, use citric acid because it chelates calcium for free, carbonate at **2.2 volumes**, and fill **ice-cold on a counter-pressure filler** — foam at the filler, not haze, is the thing most likely to stop your first production run. Because pH 3.2 makes this a high-acid food, no sterilisation is needed, and it **may** be possible to **cold-fill with potassium sorbate and no pasteurisation at all** — the mainstream soft-drink model, what the Icelandic reference product's sorbate declaration suggests, and the single biggest cost saving available, because it opens up every small canning line instead of the handful with a tunnel. **But this file does not recommend that route, and you must not choose it yourself.** Your drink is not a normal soft drink: it carries 60 g/L of protein, which is food for the organisms sorbate is supposed to stop, so **the challenge test against *Zygosaccharomyces bailii* is the gate, not a formality** — and if the answer comes back as a **fridge-only, days-to-weeks shelf life, the gym-fridge distribution model and the batch with it are gone.** The route is the co-packer's decision on their validated plan, and **"what thermal process, and is the resulting shelf life ambient or chilled — in writing" is a no-go gate before any deposit.** Zero sugar is a technical requirement rather than a marketing choice, because sucrose inverts at pH 3 and browns the protein. Promise six months, not twelve. Budget the whey at the **clear/acid-stable grade — 163.90 HUF/can, not 131.08** — because the cheap grade is a different product that hazes. And spend the first money on beakers, a pH meter and five honest tasters — that is the highest-return money in this entire project, and none of it has been spent yet.
