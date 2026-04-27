const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or engaging the services of Vertex Labs Ltd ("Vertex Labs", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our services. These Terms apply to all clients, visitors, and others who access or use our services.`,
  },
  {
    title: '2. Services',
    content: `Vertex Labs provides cloud optimization, software development, and system modernization services to enterprises and businesses. The specific scope, deliverables, timelines, and pricing for any engagement will be defined in a separate Statement of Work ("SOW") or Service Agreement executed between Vertex Labs and the client. In the event of a conflict between these Terms and a signed agreement, the signed agreement shall prevail.`,
  },
  {
    title: '3. Client Obligations',
    content: `You agree to: (a) provide accurate, complete, and current information necessary for us to perform the services; (b) designate an authorized representative to communicate and make decisions on your behalf; (c) grant timely access to systems, environments, and personnel reasonably required to fulfill the engagement; and (d) comply with all applicable laws and regulations in connection with your use of our services.`,
  },
  {
    title: '4. Payment Terms',
    content: `Payment terms will be specified in each SOW or Service Agreement. Unless otherwise agreed in writing: invoices are due within 30 days of issuance; late payments accrue interest at 1.5% per month or the maximum permitted by law; and Vertex Labs reserves the right to suspend services for accounts more than 60 days overdue. All fees are exclusive of applicable taxes, which are the responsibility of the client.`,
  },
  {
    title: '5. Intellectual Property',
    content: `Unless explicitly stated otherwise in a signed agreement: (a) Vertex Labs retains ownership of all pre-existing intellectual property, tools, frameworks, and methodologies used in delivering services; (b) upon receipt of full payment, Vertex Labs grants the client a perpetual, non-exclusive license to use any custom deliverables created specifically for the client under the engagement; and (c) Vertex Labs may retain the right to describe the nature of the engagement in marketing materials, subject to confidentiality obligations.`,
  },
  {
    title: '6. Confidentiality',
    content: `Each party agrees to keep confidential all non-public information disclosed by the other party in connection with the services ("Confidential Information") and to use it solely for the purposes of the engagement. This obligation survives termination of any agreement for a period of three (3) years. Confidential Information does not include information that is publicly known, independently developed, or required to be disclosed by law.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, Vertex Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising out of or related to these Terms or our services, even if advised of the possibility of such damages. Our total aggregate liability shall not exceed the fees paid by you to Vertex Labs in the three (3) months preceding the claim.`,
  },
  {
    title: '8. Warranties and Disclaimers',
    content: `Vertex Labs warrants that services will be performed in a professional and workmanlike manner consistent with industry standards. Except as expressly stated herein, services are provided "as is" without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.`,
  },
  {
    title: '9. Termination',
    content: `Either party may terminate a service engagement as specified in the applicable SOW or Service Agreement. Upon termination, you remain responsible for all fees accrued up to the effective date of termination. Vertex Labs will provide reasonable assistance in transitioning deliverables and data. Sections relating to intellectual property, confidentiality, payment, and limitation of liability survive termination.`,
  },
  {
    title: '10. Governing Law and Disputes',
    content: `These Terms are governed by the laws of England and Wales. Any disputes arising under these Terms shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration in London, UK, under the rules of the London Court of International Arbitration. Nothing herein prevents either party from seeking injunctive relief in a court of competent jurisdiction.`,
  },
  {
    title: '11. Changes to Terms',
    content: `We reserve the right to modify these Terms at any time. We will notify clients of material changes by email or by posting a prominent notice on our website. Your continued engagement with our services after such notice constitutes acceptance of the updated Terms.`,
  },
  {
    title: '12. Contact',
    content: `If you have questions about these Terms of Service, please contact us at:\n\nVertex Labs Ltd\nEmail: legal@vertex-labs.org\nWebsite: vertex-labs.org`,
  },
]

import { BackArrowIcon } from './icons'

export default function TermsOfService({ onNavigate }) {
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
            Terms of Service
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
              onClick={() => onNavigate('privacy')}
              className="text-xs transition-colors"
              style={{ color: 'rgba(226,232,240,0.3)' }}
              onMouseEnter={e => e.target.style.color = 'rgba(226,232,240,0.6)'}
              onMouseLeave={e => e.target.style.color = 'rgba(226,232,240,0.3)'}
            >
              Privacy Policy
            </button>
            <button
              className="text-xs"
              style={{ color: '#636b2f' }}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
