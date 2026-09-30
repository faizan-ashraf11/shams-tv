'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  return (
    <div className="newsletter">
      <div>
        <span className="kicker">Newsletter</span>
        <h2>The <em>Morning Sun</em></h2>
        <p>Five stories from Kurdistan, in English, before your first coffee. Free, every weekday.</p>
      </div>
      <form
        onSubmit={(e) => { e.preventDefault(); setState('sending'); setTimeout(() => setState('done'), 700); }}
        aria-describedby="nl-help"
      >
        <label htmlFor="nl-email" className="field-label">Email address</label>
        <div className="newsletter__row">
          <input id="nl-email" type="email" placeholder="you@example.com" autoComplete="email" required disabled={state === 'done'} />
          <button className="btn btn--sun" type="submit" disabled={state !== 'idle'}>
            {state === 'idle' ? 'Subscribe' : state === 'sending' ? 'Subscribing…' : 'Subscribed ✓'}
          </button>
        </div>
        <p id="nl-help" className="newsletter__help" aria-live="polite">
          {state === 'done' ? 'Thanks — check your inbox to confirm.' : 'No spam. Unsubscribe any time.'}
        </p>
      </form>
    </div>
  );
}
