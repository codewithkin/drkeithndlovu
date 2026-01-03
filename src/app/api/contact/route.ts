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
New Contact Form Submission

From: ${firstName} ${lastName}
Email: ${email}
Inquiry Type: ${inquiryType}

Message:
${message}

---
This email was sent from your contact form at drkeithndlovu.com
        `;

        // Confirmation email to user
        const userEmailContent = `
Dear ${firstName},

Thank you for reaching out! I've received your message and will get back to you within 24-48 hours.

Your inquiry type: ${inquiryType}

Best regards,
Dr. Keith Ndlovu
        `;

        // Send email to owner
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: process.env.OWNER_EMAIL,
            subject: `New Contact Form Submission - ${inquiryType}`,
            text: ownerEmailContent,
            replyTo: email,
        });

        // Send confirmation email to user
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: email,
            subject: "We received your message",
            text: userEmailContent,
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
