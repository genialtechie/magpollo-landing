// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { body } = req;
    const message = body;

    let account = {
      user: process.env.SENDINBLUE_USER,
      pass: process.env.SENDINBLUE_PASS,
    };

    try {
      let transporter = nodemailer.createTransport(
        {
          host: 'smtp-relay.sendinblue.com',
          port: 587,
          auth: {
            user: account.user,
            pass: account.pass,
          },
        },
        {
          from: `Magpollo Web Notification <${account.user}>`,
        }
      );
      console.log('Transporter created...');

      const info = await transporter.sendMail(message);
      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.log(error);
    }
    res.status(200).json({ success: true });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};
