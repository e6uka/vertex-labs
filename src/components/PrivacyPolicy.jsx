const SECTIONS = [
  {
    title: '1. Introduction',
    content: `Vertex Labs Ltd ("Vertex Labs", "we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website (vertex-labs.org) or engage our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site and services.`,
  },
  {
    title: '2. Information We Collect',
    content: `We may collect the following types of information:\n\nInformation you provide directly: name, email address, phone number, company name, job title, and the content of messages you send us via contact forms or email.\n\nInformation collected automatically: IP address, browser type, operating system, referring URLs, pages visited, and time spent on our site. This is collected via cookies and similar tracking technologies.\n\nInformation from business engagements: as part of delivering our services, we may process data you share with us including business information, system credentials, and project-related data as detailed in applicable data processing agreements.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect to:\n\n(a) Respond to your enquiries and communicate about our services;\n(b) Deliver, manage, and improve the services we provide;\n(c) Send you relevant updates, newsletters, or marketing communications (where you have consented);\n(d) Comply with legal obligations and enforce our agreements;\n(e) Analyze website usage to improve user experience; and\n(f) Protect the security and integrity of our systems and services.`,
  },
  {
    title: '4. Legal Basis for Processing (GDPR)',
    content: `For individuals in the European Economic Area (EEA) and United Kingdom, we process personal data on the following legal bases:\n\nContract: processing necessary to perform a contract with you or to take steps at your request before entering into one.\n\nLegitimate Interests: processing necessary for our legitimate business interests, such as improving our services and communicating with prospective clients, where these interests are not overridden by your rights.\n\nConsent: where you have given clear consent to process your data for a specific purpose (e.g., marketing emails).\n\nLegal Obligation: processing required to comply with applicable law.`,
  },
  {
    title: '5. Cookies and Tracking Technologies',
    content: `Our website uses cookies and similar technologies to enhance your experience. We use:\n\nEssential cookies: required for the website to function properly.\n\nAnalytics cookies: to understand how visitors interact with our site (e.g., PostHog). These help us improve site performance and content.\n\nYou can control cookie settings through your browser. Disabling certain cookies may affect site functionality. We do not use cookies for advertising or cross-site tracking.`,
  },
  {
    title: '6. Sharing of Information',
    content: `We do not sell your personal information. We may share information with:\n\nService providers: trusted third parties who assist us in operating our website and delivering our services (e.g., analytics providers, cloud infrastructure partners), bound by confidentiality and data protection agreements.\n\nLegal authorities: where required by law, court order, or governmental regulation.\n\nBusiness transfers: in connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.\n\nWe require all third parties to respect the security of your data and treat it in accordance with applicable law.`,
  },
  {
    title: '7. International Data Transfers',
    content: `Your data may be transferred to and processed in countries outside your home country, including outside the EEA. Where such transfers occur, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission or equivalent mechanisms, to protect your data to the standard required under applicable data protection law.`,
  },
  {
    title: '8. Data Retention',
    content: `We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting obligations. Client engagement data is typically retained for seven (7) years following the end of the engagement. Website enquiry data is retained for two (2) years unless you request earlier deletion. Marketing preferences are retained until you withdraw consent.`,
  },
  {
    title: '9. Your Rights',
    content: `Depending on your location, you may have the following rights regarding your personal data:\n\nAccess: request a copy of the personal data we hold about you.\n\nRectification: request correction of inaccurate or incomplete data.\n\nErasure: request deletion of your personal data where we have no lawful basis for continued processing.\n\nRestriction: request that we restrict processing of your data in certain circumstances.\n\nPortability: receive your data in a structured, commonly used format.\n\nObjection: object to processing based on legitimate interests or for direct marketing.\n\nWithdraw consent: where processing is based on consent, withdraw it at any time without affecting prior processing.\n\nTo exercise any of these rights, contact us at info@vertex-labs.org. We will respond within 30 days.`,
  },
  {
    title: '10. Security',
    content: `We implement industry-standard technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include encryption in transit and at rest, access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '11. Third-Party Links',
    content: `Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies before providing any personal information.`,
  },
  {
    title: '12. Children\'s Privacy',
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal information, we will take steps to delete it.`,
  },
  {
    title: '13. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website with a revised effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: '14. Contact Us',
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection contact:\n\nVertex Labs Ltd\nEmail: info@vertex-labs.org\nWebsite: vertex-labs.org\n\nIf you are located in the UK or EEA and are unsatisfied with our response, you have the right to lodge a complaint with your local data protection authority (e.g., the ICO in the United Kingdom).`,
  },
]

import { BackArrowIcon } from './icons'

export default function PrivacyPolicy({ onNavigate }) {
  return (
    <div className="min-h-screen font-sans antialiased" style={{ backgroundColor: '#0F172A', color: '#E2E8F0' }}>
      <header
        className="border-b px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-xl"
        style={{ backgroundColor: 'rgba(15,23,42,0.92)', borderColor: '#1E293B' }}
      >
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5"
        >
          <img src="/icon-white.svg" alt="Vertex Labs" className="w-8 h-8 rounded-lg" />
          <span className="font-semibold tracking-tight" style={{ color: '#E2E8F0' }}>Vertex Labs</span>
        </button>
        <button
          onClick={() => onNavigate('home')}
          className="text-sm font-medium flex items-center gap-2 transition-opacity hover:opacity-100"
          style={{ color: 'rgba(226,232,240,0.6)' }}
        >
          <BackArrowIcon className="w-4 h-4" />
          Back to Home
        </button>
      </header>

      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
        <div className="mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#636b2f' }}>
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#E2E8F0' }}>
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: 'rgba(226,232,240,0.4)' }}>
            Effective Date: April 27, 2026 &nbsp;·&nbsp; Vertex Labs Ltd
          </p>
        </div>

        <div className="space-y-10">
          {SECTIONS.map(({ title, content }) => (
            <div key={title} className="border-t pt-8" style={{ borderColor: '#1E293B' }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: '#E2E8F0' }}>{title}</h2>
              <div className="space-y-3">
                {content.split('\n\n').map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed" style={{ color: 'rgba(226,232,240,0.6)' }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t mt-20 px-6 lg:px-8 py-8" style={{ borderColor: '#1E293B' }}>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'rgba(226,232,240,0.3)' }}>
            © {new Date().getFullYear()} Vertex Labs Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              className="text-xs"
              style={{ color: '#636b2f' }}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="text-xs transition-colors"
              style={{ color: 'rgba(226,232,240,0.3)' }}
              onMouseEnter={e => e.target.style.color = 'rgba(226,232,240,0.6)'}
              onMouseLeave={e => e.target.style.color = 'rgba(226,232,240,0.3)'}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
