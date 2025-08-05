import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  weddingDate: string
  venue: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email content
    const emailContent = `
      New Wedding Inquiry from LifeStory.Film Website

      Contact Information:
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Phone: ${data.phone || 'Not provided'}

      Wedding Details:
      Date: ${data.weddingDate || 'Not specified'}
      Venue: ${data.venue || 'Not specified'}

      Message:
      ${data.message}

      ---
      This inquiry was submitted through the LifeStory.Film contact form.
    `

    // In a real application, you would use a service like:
    // - Resend (resend.com)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP

    // For now, we'll simulate the email send and log the data
    console.log('New contact form submission:')
    console.log('To: rick@lifestory.film')
    console.log('Subject: New Wedding Inquiry from LifeStory.Film')
    console.log('Content:', emailContent)

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))

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
