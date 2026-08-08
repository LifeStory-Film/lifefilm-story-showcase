import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SubscribeData {
  email: string
  source?: string
  website?: string // honeypot
}

export async function POST(request: NextRequest) {
  try {
    const data: SubscribeData = await request.json()

    if (data.website) {
      return NextResponse.json({ message: 'Thanks!' }, { status: 200 })
    }

    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const toEmail = process.env.LEADS_TO_EMAIL || 'rick@lifestory.film'
    const fromEmail = process.env.LEADS_FROM_EMAIL || 'LifeStory.Film <onboarding@resend.dev>'

    // Capture the lead in the studio inbox (real capture — no list infra yet)
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `New email lead — ${data.email}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #0f0e0c; padding: 24px; text-align: center;">
            <h1 style="color: #BFA181; font-size: 20px; margin: 0;">LifeStory.Film</h1>
            <p style="color: #999; margin: 6px 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">New Email Lead</p>
          </div>
          <div style="padding: 24px; background: #fafaf9; border: 1px solid #e5e5e5;">
            <p style="margin: 0 0 8px;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color:#BFA181;">${data.email}</a></p>
            <p style="margin: 0; color:#666;"><strong>Source:</strong> ${data.source || 'lead magnet'}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ message: 'Subscribed' }, { status: 200 })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
