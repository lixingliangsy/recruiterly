export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "Recruiterly",
  slug: "recruiterly",
  tagline: "Personalized outreach to passive candidates.",
  description: "From a candidate profile and your open role, generate a warm, specific LinkedIn or email message that gets replies - not spam.",
  toolTitle: "Write sourcing outreach",
  resultLabel: "Your outreach message",
  ctaLabel: "Write outreach",
  features: [
  "Profile-aware hook",
  "LinkedIn and email variants",
  "Role-fit reason",
  "Low-spam tone"
],
  inputs: [
  {
    "key": "profile",
    "label": "Candidate profile / experience",
    "type": "textarea",
    "placeholder": "Paste their LinkedIn summary or recent experience"
  },
  {
    "key": "role",
    "label": "Open role",
    "type": "input",
    "placeholder": "e.g. Staff Engineer, Payments"
  },
  {
    "key": "channel",
    "label": "Channel",
    "type": "select",
    "options": [
      "LinkedIn",
      "Email",
      "Both"
    ]
  },
  {
    "key": "angle",
    "label": "Angle",
    "type": "select",
    "options": [
      "Career growth",
      "Project fit",
      "Team mission"
    ]
  }
] as InputField[],
  systemPrompt: "You are a senior technical recruiter. Given a candidate profile, an open role, a channel, and an angle, write a short, personalized outreach message: a specific hook from their background, why this role fits, and a low-friction ask. Avoid generic flattery and spammy phrasing. If channel is Both, give a LinkedIn version and an email version. In demo mode, return a realistic sample following this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "5 messages/mo"
  },
  {
    "tier": "Pro",
    "price": "$19/mo",
    "desc": "Unlimited, save history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const prof = (inputs['profile'] || '').trim()
  const role = (inputs['role'] || 'your open role').trim()
  const ch = inputs['channel'] || 'LinkedIn'
  const ang = inputs['angle'] || 'Project fit'
  if (!prof) return 'Paste the candidate profile to write outreach.'
  let out = 'SOURCING OUTREACH (' + ch + ' | angle: ' + ang + ')\n\n'
  out += 'LINKEDIN\nHi - your work on ' + (prof.split(/[ .]/)[0] || 'your recent project') + ' caught my eye. We are hiring a ' + role + ' where that exact background fits. Open to a quick chat?\n\n'
  if (ch === 'Both') {
    out += 'EMAIL\nSubject: ' + role + ' - your background looked like a fit\n\n'
    out += 'Hi, I came across your profile and the ' + ang + ' angle stood out. We have a ' + role + ' opening that maps closely to what you have shipped. Worth a 15-min call?\n\n'
  }
  out += '\n--- (Mock demo. Paste the profile + role for a tailored message.)'
  return out
}
}
