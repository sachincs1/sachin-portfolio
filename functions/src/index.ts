/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/https";
import * as logger from "firebase-functions/logger";
import nodemailer from "nodemailer";
import * as cors from "cors";

// Initialize CORS
const corsHandler = cors.default({origin: true});

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Contact form handler
export const contact = onRequest((request, response) => {
  corsHandler(request, response, async () => {
    if (request.method !== "POST") {
      response.status(405).send("Method Not Allowed");
      return;
    }

    try {
      const {name, email, subject, message} = request.body;

      // Validate input
      if (!name || !email || !subject || !message) {
        response.status(400).json({success: false, error: "Missing required fields"});
        return;
      }

      // Get email credentials from environment variables
      const emailUser = process.env.EMAIL_USER;
      const emailPassword = process.env.EMAIL_PASSWORD;

      if (!emailUser || !emailPassword) {
        logger.error("Email credentials not found in environment variables");
        response.status(500).json({success: false, error: "Email service not configured"});
        return;
      }

      // Create nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPassword,
        },
      });

      // Email to Sachin
      const mailOptions = {
        from: emailUser,
        to: "sachin948825@gmail.com",
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      // Confirmation email to user
      const confirmationMailOptions = {
        from: emailUser,
        to: email,
        subject: "We received your message",
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Sachin</p>
        `,
      };

      await transporter.sendMail(confirmationMailOptions);

      response.status(200).json({success: true, message: "Email sent successfully"});
    } catch (error) {
      logger.error("Error sending email:", error);
      response.status(500).json({success: false, error: "Failed to send message"});
    }
  });
});
