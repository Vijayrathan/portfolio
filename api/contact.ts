import { Resend } from "resend";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        success: false,
        message: "Missing RESEND_API_KEY environment variable",
      });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["vijayrathank@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              ${(message || "").replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">
            This message was sent from your portfolio website contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}

This message was sent from your portfolio website contact form.
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        success: false,
        message: `Email error: ${error.message}`,
      });
    }

    return res.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
      data,
    });
  } catch (err: any) {
    console.error("Serverless function error:", err);
    return res.status(500).json({
      success: false,
      message: `Error: ${err?.message || "Unknown error"}`,
    });
  }
}
