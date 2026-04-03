import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  weddingDate: string
  venue: string
  message: string
  website?: string // honeypot
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Honeypot check — bots fill hidden fields
    if (data.website) {
      return NextResponse.json({ message: 'Thank you for your inquiry!' }, { status: 200 })
    }

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const toEmail = process.env.LEADS_TO_EMAIL || 'rick@lifestory.film'
    const fromEmail = process.env.LEADS_FROM_EMAIL || 'LifeStory.Film <onboarding@resend.dev>'
    const fullName = `${data.firstName} ${data.lastName}`

    // Send notification to studio
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `New Wedding Inquiry — ${fullName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #0f0e0c; padding: 32px; text-align: center;">
            <h1 style="color: #BFA181; font-size: 24px; margin: 0; letter-spacing: 0.05em;">LifeStory.Film</h1>
            <p style="color: #999; margin: 8px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">New Wedding Inquiry</p>
          </div>

          <div style="padding: 32px; background: #fafaf9; border: 1px solid #e5e5e5;">
            <h2 style="font-size: 20px; margin: 0 0 24px; color: #111;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${fullName}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #BFA181;">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;">${data.phone || '—'}</td></tr>
            </table>

            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />

            <h2 style="font-size: 20px; margin: 0 0 24px; color: #111;">Wedding Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; width: 140px;">Date</td><td style="padding: 8px 0;">${data.weddingDate || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Venue</td><td style="padding: 8px 0;">${data.venue || '—'}</td></tr>
            </table>

            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />

            <h2 style="font-size: 20px; margin: 0 0 16px; color: #111;">Their Vision</h2>
            <p style="line-height: 1.7; color: #333; margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>

          <div style="padding: 20px 32px; background: #f0ede8; text-align: center;">
            <p style="margin: 0; color: #999; font-size: 12px;">Submitted via lifestory.film/contact</p>
          </div>
        </div>
      `,
    })

    // Send auto-reply to the client
    await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: `We received your inquiry, ${data.firstName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #0f0e0c; padding: 32px; text-align: center;">
            <h1 style="color: #BFA181; font-size: 24px; margin: 0; letter-spacing: 0.05em;">LifeStory.Film</h1>
            <p style="color: #999; margin: 8px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">California & Worldwide · Since 2010</p>
          </div>

          <div style="padding: 40px 32px; background: #fafaf9; border: 1px solid #e5e5e5;">
            <p style="font-size: 18px; color: #111; margin: 0 0 16px;">Hi ${data.firstName},</p>
            <p style="line-height: 1.8; color: #444; margin: 0 0 16px;">
              Thank you for reaching out. We've received your inquiry and will be in touch within 24 hours to discuss your wedding day.
            </p>
            <p style="line-height: 1.8; color: #444; margin: 0 0 32px;">
              In the meantime, feel free to browse our portfolio at
              <a href="https://lifestory.film" style="color: #BFA181;">lifestory.film</a>.
            </p>

            <div style="background: #f0ede8; border-left: 3px solid #BFA181; padding: 16px 20px; margin: 0 0 32px;">
              <p style="margin: 0; font-style: italic; color: #555; line-height: 1.7;">
                "I don't make wedding videos or take wedding photos. I tell the story of the most important day of your life — in every medium it deserves."
              </p>
              <p style="margin: 12px 0 0; color: #999; font-size: 13px;">— Rich, Creative Director</p>
            </div>

            <p style="line-height: 1.8; color: #444; margin: 0;">
              Warmly,<br />
              <strong>Rich</strong><br />
              LifeStory.Film<br />
              <a href="tel:3235564362" style="color: #BFA181;">323.556.4362</a>
            </p>
          </div>

          <div style="padding: 20px 32px; background: #f0ede8; text-align: center;">
            <p style="margin: 0; color: #999; font-size: 12px;">
              © LifeStory.Film · California & Worldwide ·
              <a href="https://lifestory.film" style="color: #BFA181; text-decoration: none;">lifestory.film</a>
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Thank you for your inquiry! We will get back to you within 24 hours.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
