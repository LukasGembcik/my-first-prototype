# Regulatory context (EU + Czech) for the client zone and public liability insurance

This document summarises the **valid EU and Czech legislation** that applies when building the client zone and public liability insurance flow. It should be taken into account before and during implementation.

---

## For a simple prototype (no data storage)

**Current scope:** You are building a **simple working prototype** that does **not** store or process personal data (no backend persistence, no real contracts). For this phase:

| Topic | Relevant for you? | Why |
|-------|-------------------|-----|
| **GDPR / personal data** | **Minimal** | No storage = no processing of personal data. Optional: a short line in the UI or footer: “Prototype – no data is stored.” |
| **IDD / IPID / pre-contract info** | **Design only** | Structure the flow so it *could* be compliant later (e.g. “product info” step, “demands and needs” step, clear labels). No legal obligation until you really distribute. |
| **Distance contracts / withdrawal** | **Design only** | Same: design the journey as if withdrawal info would appear; no real contract = no withdrawal obligation. |
| **Accessibility** | **Yes, practical** | Use semantic HTML, labels, and keyboard-friendly steps. Makes the app usable and the code ready for later; no heavy legal burden for a prototype. |
| **Solvency II, ČKP, licensing** | **No** | Not relevant for a UI-only prototype. |

**Summary:** For a simple prototype with no data storage, **you don’t need to comply with GDPR, IDD, or consumer law as if you were selling insurance.** Use the regulation as **design guidance** (flow, wording, structure) and build with **basic accessibility**. When you later add storage, real contracts, or go live, the full `docs/regulation.md` applies.

---

## 1. EU legislation (valid and applicable)

### 1.1 Insurance Distribution Directive (IDD) – Directive (EU) 2016/97

- **Scope:** How insurance products are **designed and distributed** across the EU. Applies to distribution of non-life insurance (including public/civil liability).
- **Aims:** Harmonise rules, strengthen consumer protection, ensure products meet consumer needs and distributors take responsibility for outcomes.
- **Key requirements (relevant for our prototype):**
  - **Information to the customer** before conclusion of the contract (clear, fair, not misleading).
  - **Conduct of business and transparency** for distributors (honesty, fairness, professional diligence, conflicts of interest, etc.).
  - **Procedures** for cross-border distribution where applicable.
  - **Supervision and sanctions** by national competent authorities.

**References:**  
[EIOPA – IDD](https://www.eiopa.europa.eu/browse/regulation-and-policy/insurance-distribution-directive-idd_en) · [EUR-Lex 2016/97](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX:32016L0097)

---

### 1.2 Commission Implementing Regulation (EU) 2017/1469 – IPID

- **Scope:** Standardised **Insurance Product Information Document (IPID)** for **non-life** insurance (including liability).
- **Obligation:** Before sale, the customer must receive a short, standardised document (IPID) so they can compare products and understand main features, coverage and exclusions.
- **Relevance:** Any public liability product offered in the client zone should be described in line with IPID format (or equivalent standardised pre-contract information).

**References:**  
[EIOPA – IPID template](https://www.eiopa.europa.eu/browse/regulation-and-policy/insurance-distribution-directive-idd/editable-template-insurance-product-information-document-ipid_en) · [EUR-Lex 2017/1469](https://eur-lex.europa.eu/eli/reg_impl/2017/1469/oj/eng)

---

### 1.3 Commission Delegated Regulation (EU) 2017/2358 – Product oversight and governance (POG)

- **Scope:** **Product oversight and governance** for manufacturers and distributors under the IDD.
- **Requirements:** Products must be designed and distributed with a defined **target market**, and processes must ensure products remain appropriate. Distributors must have arrangements to distribute in line with the manufacturer’s POG.
- **Relevance:** When designing the public liability flow and product presentation, consider target market and appropriateness (even in a prototype, structure can reflect POG logic).

**References:**  
[EUR-Lex 2017/2358](https://eur-lex.europa.eu/eli/reg_del/2017/2358/oj/eng)

---

### 1.4 Solvency II – Directive 2009/138/EC

- **Scope:** **Insurance and reinsurance undertakings** (capital, governance, risk management, reporting). Does **not** directly regulate distribution or UI.
- **Relevance:** The **insurer** behind the product must comply with Solvency II; our prototype (client zone, forms, distribution flow) is mainly affected by **IDD and Czech distribution law**, not Solvency II itself. No direct UI/content obligations for the prototype from Solvency II.

**References:**  
[EIOPA – Solvency II](https://www.eiopa.europa.eu/rulebook/solvency-ii-single-rulebook/directive-1382009ec-solvency-ii-directive_en) · [EUR-Lex 2009/138](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex%3A32009L0138)

---

### 1.5 EIOPA and Commission updates

- **EIOPA** maintains the single rulebook and technical standards; **Commission** adopts delegated and implementing acts (e.g. IDD delegated regulations, IPID, POG).
- **2024:** Commission Delegated Regulation updated **professional indemnity insurance** base amounts under the IDD (April 2024). This affects distributors’ obligations, not the product document or UI content directly.
- When implementing, check [EIOPA rulebook](https://www.eiopa.europa.eu/rulebook_en) and [Commission implementing/delegated acts for IDD](https://finance.ec.europa.eu/regulation-and-supervision/financial-services-legislation/implementing-and-delegated-acts/insurance-distribution-directive_en) for the latest consolidated versions.

---

## 2. Czech legislation (implementation and national rules)

### 2.1 Distribution of insurance – Act No. 170/2018 Coll. (Zákon o distribuci pojištění a zajištění)

- **Role:** Transposes the **IDD** into Czech law. Fully in force from 1 December 2018.
- **Content:** Categories of intermediaries, registration, qualification, **information duties**, **conduct of business**, confidentiality, expert care. ČNB is the competent authority.
- **Relevance:** Any distribution of public liability insurance (including via the client zone) must comply with 170/2018 and thus with the IDD. Pre-contract information and transparency are central.

**References:**  
[Zákon 170/2018 Sb.](https://www.zakonyprolidi.cz/cs/2018-170) · [ČNB – regulation applicable to distribution of insurance](https://cnb.cz/en/supervision-financial-market/legislation/insurance-and-reinsurance-companies-insurance-intermediaries/laws-and-regulations/regulation-applicable-to-the-distribution-of-insurance/index.html)

---

### 2.2 Insurance undertakings – Act No. 277/2009 Coll. (Zákon o pojišťovnictví)

- **Role:** Regulates **insurance and reinsurance undertakings** (licences, operation, supervision). ČNB supervises.
- **Relevance:** The **insurer** must comply; the client zone and distribution flow are primarily governed by **170/2018** and EU IDD. 277/2009 is relevant for product manufacture and undertaking-side governance, not for UI wording in the prototype.

**References:**  
[Zákon 277/2009 Sb.](https://www.zakonyprolidi.cz/cs/2009-277)

---

### 2.3 Vehicle liability only – Act No. 30/2024 Sb., ČKP

- **Role:** **Pojištění odpovědnosti z provozu vozidla** (motor third-party liability). **ČKP** (Česká kancelář pojistitelů) operates the bureau system.
- **Relevance:** **Does not apply** to general public/civil liability (občanská odpovědnost). Only relevant if we later add vehicle liability products.

---

## 3. Who does what (EU + Czech)

| Level        | Body / act                                      | Relevance for client zone & public liability        |
|-------------|--------------------------------------------------|-----------------------------------------------------|
| **EU**      | IDD (2016/97)                                   | Pre-contract information, conduct, transparency    |
| **EU**      | Implementing Regulation 2017/1469 (IPID)        | Standardised product document for non-life          |
| **EU**      | Delegated Regulation 2017/2358 (POG)            | Product design and distribution processes          |
| **EU**      | Solvency II (2009/138)                          | Insurer-side; no direct UI obligations              |
| **Czech**   | 170/2018 Sb. (distribution)                     | Implements IDD; information and conduct duties      |
| **Czech**   | 277/2009 Sb. (insurance undertakings)           | Insurer licensing and operation                     |
| **Czech**   | ČNB                                             | Supervisor for insurers and distributors            |
| **Czech**   | ČKP, 30/2024 Sb.                                | Vehicle liability only; not for public liability    |
| **Czech**   | ČAP                                             | Industry association; self-regulation, not law      |

---

## 4. Practical implications for next steps

- **Pre-contract information:** Design the public liability flow so that customers receive **clear, standardised information** (IPID-style) before binding the contract.
- **Transparency and fairness:** Wording, layout and steps should be **clear, fair and not misleading** (IDD + 170/2018).
- **Target market / POG:** When defining the product and flow, consider **target market** and appropriateness (POG logic).
- **No vehicle-specific rules:** For “public liability” (občanská odpovědnost), **ČKP and 30/2024 Sb. do not apply**; focus on **IDD + 170/2018 + IPID/POG**.
- **Legal review:** For real go-live, texts and flow should be checked against the latest consolidated EU and Czech acts and ČNB guidance.

---

## 5. Additional context relevant for the public liability **form**

The following apply specifically to the **public liability form** (data collected, consumer journey, and accessibility).

### 5.1 Personal data (GDPR + Czech law)

- **EU Regulation 2016/679 (GDPR)** and **Czech Act No. 110/2019 Coll.** on personal data processing apply to all data collected in the form (identification, contact, address, risk-related data, etc.).
- **Transparency:** Data subjects must be informed clearly about: what data is collected, for what purpose, legal basis, retention, who has access, and their rights (access, rectification, erasure, etc.). A **privacy notice** (or link) before or at the start of the form is standard.
- **Lawful basis:** For concluding and administering the contract, processing is typically based on **contract** or **legal obligation**; for marketing or optional uses, **consent** may be needed. Consent must be freely given, specific, informed, and unambiguous.
- **Special categories:** If the form collects **health** or other special-category data (e.g. for risk assessment), stricter rules apply; process only where necessary and with an explicit legal basis.
- **Sector practice:** Czech insurers often follow **ČAP self-regulatory standards** on personal data (e.g. “GDPR Standards”); useful reference for wording and retention.

**References:**  
[GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679) · [Zákon 110/2019 Sb.](https://www.zakonyprolidi.cz/cs/2019-110)

---

### 5.2 Consumer and distance contracts (withdrawal, pre-contract info)

- If the contract is concluded **at a distance** (e.g. entirely online, no physical presence), **Czech Civil Code (Act No. 89/2012 Coll.) Articles 1841–1851** and EU **Consumer Rights Directive 2011/83/EU** apply.
- **Pre-contract information** must be provided in **text form** before conclusion: provider identity and contact, main characteristics of the service, price, duration, complaint/supervisor info, and **withdrawal right** (if applicable).
- **Withdrawal:** Consumers may have a **right of withdrawal** (e.g. 14 days) for distance contracts; for **insurance**, national rules can modify or exclude this (e.g. once cover has started). Czech law provides a **model withdrawal form** (Government Regulation No. 29/2023 Coll.); consumers can also withdraw by any unambiguous means (e.g. email).
- **ČNB** supervises distance contracts in financial services and publishes guidance; the form flow should allow provision of all required pre-contract information and, where applicable, information on withdrawal.

**References:**  
[ČNB – Distance contracts for financial services](https://www.cnb.cz/en/supervision-financial-market/consumer-protection-and-financial-literacy/consumer-protection/distance-contracts/) · [Občanský zákoník 89/2012 Sb.](https://www.zakonyprolidi.cz/cs/2012-89) (1841–1851)

---

### 5.3 IDD: demands and needs (before conclusion)

- Under the **IDD**, distributors must carry out a **demands and needs** assessment **before** concluding any insurance contract, including **non-life** (e.g. public liability). This applies whether or not “advice” is given.
- The form (or the process around it) should **gather** the information needed to specify the customer’s **demands and needs** (e.g. who is to be covered, what activities/risks, sum insured, duration) and then **document** that the product offered meets those demands and needs.
- This can be reflected in the form structure (e.g. a “demands and needs” step or summary before the offer/contract step) and in any **demands and needs statement** the distributor must provide.

**References:**  
[EIOPA – IDD](https://www.eiopa.europa.eu/browse/regulation-and-policy/insurance-distribution-directive-idd_en) · [EIOPA Q&A on demands and needs](https://www.eiopa.europa.eu/qa-regulation/questions-and-answers-database/1638-scope-demands-and-needs-test-and-its-relation-suitability-assessment_en)

---

### 5.4 Accessibility of the form (websites and mobile applications)

- **Czech Act No. 99/2019 Coll.** on the accessibility of websites and mobile applications implements **EU Directive 2016/2102**. A **European Accessibility Act (EAA)** and Czech **Act No. 424/2023 Coll.** may extend obligations from 2025 onward.
- **In scope:** Public sector sites/apps and, depending on national transposition, certain **private** services (e.g. some financial/insurance services offered to the public). Even if not strictly mandatory for a given site, **WCAG 2.1**-aligned forms improve usability and reduce legal risk.
- **Practical implications for the form:**  
  - Use semantic HTML, labels, and structure (headings, landmarks).  
  - Ensure sufficient colour contrast and don’t rely on colour alone.  
  - Support keyboard navigation and focus management (e.g. in multi-step flows).  
  - Provide an **accessibility statement** and a feedback mechanism where required.

**References:**  
[Zákon 99/2019 Sb.](https://www.zakonyprolidi.cz/cs/2019-99) · [EU Directive 2016/2102](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016L2102) · [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 6. Form-specific checklist (quick reference)

| Topic | What to consider for the public liability form |
|-------|----------------------------------------------------------------|
| **IDD / 170/2018** | Pre-contract information (IPID-style), clear and fair wording, demands and needs before conclusion. |
| **GDPR / 110/2019** | Privacy notice, lawful basis, minimal data, retention; special categories only if needed. |
| **Distance / consumer** | Pre-contract info in text form, withdrawal right (if applicable), model withdrawal form. |
| **Accessibility** | Semantic structure, labels, contrast, keyboard, accessibility statement if in scope. |

---

*Last updated to include valid EU and Czech regulatory context and form-specific requirements (GDPR, distance contracts, demands and needs, accessibility) for the client zone and public liability insurance.*
