import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, inquiryType, message } = body;

        // Validate required fields
        if (
            !firstName ||
            !lastName ||
            !email ||
            !inquiryType ||
            !message
        ) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Email to Dr. Keith Ndlovu
        const ownerEmailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #404040;
            background-color: #fafafa;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #e5e5e5;
        }
        .header {
            background-color: #d97706;
            padding: 32px 24px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: -0.5px;
        }
        .content {
            padding: 32px 24px;
        }
        .section {
            margin-bottom: 28px;
        }
        .section-label {
            font-size: 12px;
            font-weight: 600;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
        }
        .section-value {
            font-size: 15px;
            font-weight: 500;
            color: #1f2937;
            word-break: break-word;
        }
        .message-box {
            background-color: #f9fafb;
            padding: 20px;
            border-left: 4px solid #d97706;
            margin-top: 16px;
            border-radius: 4px;
        }
        .message-label {
            font-size: 12px;
            font-weight: 600;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 10px;
        }
        .message-text {
            font-size: 15px;
            color: #1f2937;
            line-height: 1.7;
            white-space: pre-wrap;
            word-break: break-word;
        }
        .footer {
            border-top: 1px solid #e5e5e5;
            padding: 20px 24px;
            background-color: #f9fafb;
            font-size: 13px;
            color: #6b7280;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
            <div class="section">
                <div class="section-label">From</div>
                <div class="section-value">${firstName} ${lastName}</div>
            </div>
            <div class="section">
                <div class="section-label">Email</div>
                <div class="section-value"><a href="mailto:${email}" style="color: #d97706; text-decoration: none;">${email}</a></div>
            </div>
            <div class="section">
                <div class="section-label">Inquiry Type</div>
                <div class="section-value">${inquiryType}</div>
            </div>
            <div class="message-box">
                <div class="message-label">Message</div>
                <div class="message-text">${message}</div>
            </div>
        </div>
        <div class="footer">
            This email was sent from your contact form at drkeithndlovu.com
        </div>
    </div>
</body>
</html>
        `;

        // Confirmation email to user
        const userEmailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #404040;
            background-color: #fafafa;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #e5e5e5;
        }
        .header {
            background-color: #d97706;
            padding: 40px 24px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: -0.5px;
        }
        .content {
            padding: 40px 24px;
        }
        .greeting {
            font-size: 18px;
            font-weight: 500;
            color: #1f2937;
            margin-bottom: 20px;
        }
        .message {
            font-size: 15px;
            color: #4b5563;
            line-height: 1.8;
            margin-bottom: 24px;
        }
        .info-box {
            background-color: #f9fafb;
            padding: 20px;
            border-radius: 8px;
            margin: 24px 0;
        }
        .info-label {
            font-size: 12px;
            font-weight: 600;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
        }
        .info-value {
            font-size: 16px;
            font-weight: 500;
            color: #1f2937;
        }
        .signature {
            margin-top: 32px;
            font-size: 15px;
            color: #1f2937;
        }
        .signature-name {
            font-weight: 600;
        }
        .footer {
            border-top: 1px solid #e5e5e5;
            padding: 20px 24px;
            background-color: #f9fafb;
            font-size: 13px;
            color: #6b7280;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Message Received</h1>
        </div>
        <div class="content">
            <div class="greeting">Hello ${firstName},</div>
            <div class="message">
                Thank you for reaching out. I've received your message and will get back to you within 24 to 48 hours.
            </div>
            <div class="info-box">
                <div class="info-label">Your Inquiry Type</div>
                <div class="info-value">${inquiryType}</div>
            </div>
            <div class="message">
                In the meantime, feel free to explore more at drkeithndlovu.com or follow my work on social media.
            </div>
            <div class="signature">
                Warm regards,<br>
                <span class="signature-name">Dr. Keith Ndlovu</span>
            </div>
        </div>
        <div class="footer">
            drkeithndlovu.com
        </div>
    </div>
</body>
</html>
        `;

        // Send email to owner
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: process.env.OWNER_EMAIL,
            subject: `New Contact Form Submission - ${inquiryType}`,
            html: ownerEmailContent,
            replyTo: email,
        });

        // Send confirmation email to user
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: email,
            subject: "We received your message",
            html: userEmailContent,
        });

        return NextResponse.json(
            { success: true, message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
