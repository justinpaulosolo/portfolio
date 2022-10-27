import type { NextApiRequest, NextApiResponse } from "next"
import sendgrid from "@sendgrid/mail";

const to = process.env.SENDGRID_TO_EMAIL as string;
const sender = process.env.SENDGRID_SENDER_EMAIL as string;

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

type Data = {
  success: boolean
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { email, subject, message }: {email: string, subject: string, message: string} = req.body;
    const msg = {
      to: to,
      from: sender,
      subject: `justinsolo.io contact form: ${subject}`,
      test: `Email => ${email}`, 
      html: `<strong>${message} from: ${email}</strong>`
    }

    try {
      await sendgrid.send(msg);
      res.status(200).json({success: true})
    } catch (err) {
      res.status(400).json({success: false})
    }
  }
}
