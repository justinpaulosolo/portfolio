import type { NextApiRequest, NextApiResponse } from "next"
import sendgrid from "@sendgrid/mail";

const key = process.env.SENDGRID_API_KEY as string;
const to = process.env.SENDGRID_TO_EMAIL as string;
const sender = process.env.SENDGRID_SENDER_EMAIL as string;

sendgrid.setApiKey(key);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const from = body.email;
  const subject = body.subject;
  const message = body.message;

  if(!body.email || !body.subject || !body.message) {
    return res.status(400).json({ data: 'Email, Subject or Message not found.'})
  }

  try {
    await sendgrid.send({
      to: to,
      from: sender, 
      subject: subject,
      html: `<p>${message} from: ${from}</p>`
    });
  } catch (error) {
    return res.status(500).json({error: "An error has occurred"})
  }

  res.status(200).json({ status: "Email sent"})
}
