We have a shared basic and functional prototype. The prototype is just a simple HTML page. 
What I already have is a Git repository (both locally and on GitHub), connection and publication of the page via Netlify, and the overall plan.
I want to expand the prototype into an application that will emulate a small client zone. I want the application to be written in JavaScript, use my existing infrastructure with Netlify, and have the following parameters.

The URL of my prototype is: https://endearing-bunny-c26323.netlify.app/

The URL https://lnd-poj.netlify.app/ is my **target/inspiration** (reference for styling and behavior), not my app.

My feature requirements are:

- Basic login and hiding from the public
- Multi-step form with basic validations
- Use of camera for file upload
- Option to view contract in lightweight KZ (klientská zóna – client zone)
- Styling and colors of Lunde-poj (lnd-poj) target/inspiration
- Public liability insurance

**Regulatory context (EU + Czech):** Full legislation is in `docs/regulation.md`. **For this phase (simple prototype, no data storage):** no GDPR/IDD/consumer compliance burden; use regulation as **design guidance** (flow, wording) and build with **basic accessibility**. Optional: show “Prototype – no data is stored” in the app. Full regulation applies when you add storage or go live.

*KZ = Czech abbreviation for "klientská zóna" (client zone).*