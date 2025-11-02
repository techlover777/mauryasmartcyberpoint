import React from "react";

// Maurya Smart Cyber Point - Single-file React component
// Tailwind CSS utility classes are used for styling.
// Usage: paste this component into your React app (e.g., create-react-app) and ensure Tailwind is configured.

export default function MauryaWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">MS</div>
            <div>
              <h1 className="text-xl font-semibold">Maurya Smart Cyber Point</h1>
              <p className="text-sm text-gray-600">Bharachha, Mughalsarai, Chandauli</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#how" className="hover:text-indigo-600">How it works</a>
            <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
          <div className="md:block hidden">
            <a href="mailto:your-email@example.com" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Get Help</a>
          </div>
          <button className="md:hidden p-2">☰</button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-extrabold">Ab har digital kaam ghar baithe</h2>
            <p className="mt-4 text-gray-700">Online form filling, PAN/Aadhar help, resume & typing, PDF/Photo work aur online payments — sab ek hi jagah. Fast • Trusted • Affordable.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md">WhatsApp karein</a>
              <a href="#services" className="inline-block border border-indigo-600 text-indigo-600 px-5 py-3 rounded-md">Services dekhein</a>
            </div>

            <ul className="mt-6 text-sm text-gray-600 space-y-2">
              <li>• Fast online support for government & private forms</li>
              <li>• Secure document handling</li>
              <li>• Mobile-friendly, easy process</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold">Quick Request</h3>
            <p className="text-sm text-gray-600 mt-2">Apni requirement bhejein — hum aapko price aur time bata denge.</p>

            <form className="mt-4 space-y-3" onSubmit={(e)=>{e.preventDefault(); window.location.href = `mailto:your-email@example.com?subject=Service%20Request&body=Name:%20${e.target.name.value}%0AService:%20${e.target.service.value}%0AMessage:%20${e.target.message.value}`}}>
              <input name="name" required className="w-full border px-3 py-2 rounded" placeholder="Naam" />
              <select name="service" className="w-full border px-3 py-2 rounded" defaultValue="Online Form">
                <option>Online Form</option>
                <option>PAN / Aadhar Help</option>
                <option>Resume / Typing</option>
                <option>Photo / PDF Work</option>
                <option>Payment / Recharge</option>
              </select>
              <textarea name="message" rows={3} className="w-full border px-3 py-2 rounded" placeholder="Ek chhota message (optional)"></textarea>
              <div className="flex gap-3">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded">Send Request</button>
                <a href="/Maurya_Smart_Cyber_Point_Expansion_Plan.pdf" className="inline-block px-4 py-2 border rounded">Download Plan</a>
              </div>
            </form>

            <div className="mt-4 text-xs text-gray-500">Note: Replace the contact email & WhatsApp link in the code before publishing.</div>
          </div>
        </section>

        <section id="services" className="mt-10">
          <h3 className="text-2xl font-semibold">Our Services</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {t: 'Online Form Filling', d: 'Railway, SSC, Scholarship & Govt. forms'},
              {t: 'PAN / Aadhar / Passport Help', d: 'Documents & submission guidance'},
              {t: 'Resume & Typing', d: 'Resume, Applications, Certificates'},
              {t: 'Photo & PDF Work', d: 'Editing, Scanning, Conversion'},
              {t: 'Payments & Recharges', d: 'UPI, Bill payments, Tickets'},
              {t: 'Training & Courses', d: 'Short typing & digital skills workshops'},
            ].map((s)=> (
              <div key={s.t} className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold">{s.t}</h4>
                <p className="text-sm text-gray-600 mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="mt-10">
          <h3 className="text-2xl font-semibold">How it works</h3>
          <ol className="mt-4 space-y-3 text-gray-700">
            <li>1. Send request via WhatsApp / Form</li>
            <li>2. We confirm price & time</li>
            <li>3. You pay via UPI or online</li>
            <li>4. We deliver file / service digitally</li>
          </ol>
        </section>

        <section id="pricing" className="mt-10">
          <h3 className="text-2xl font-semibold">Pricing (example)</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold">Basic</h4>
              <p className="text-sm text-gray-600">Small tasks — ₹10–₹50</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold">Standard</h4>
              <p className="text-sm text-gray-600">Forms & documents — ₹50–₹200</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold">Subscription</h4>
              <p className="text-sm text-gray-600">Monthly plans for frequent users</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-10">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <div className="mt-4 bg-white p-4 rounded shadow-sm">
            <p className="text-sm">Owner: Arun Maurya</p>
            <p className="text-sm">Location: Bharachha, Mughalsarai, Chandauli</p>
            <p className="text-sm mt-2">WhatsApp: <a href="#" className="text-indigo-600">Click to message (replace with number)</a></p>
            <p className="text-sm mt-2">Email: your-email@example.com</p>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Maurya Smart Cyber Point — All rights reserved.
        </footer>
      </main>
    </div>
  );
}
