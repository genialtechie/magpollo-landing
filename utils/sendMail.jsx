import { Email } from '../components';
import { render } from '@react-email/render';

export default async function sendMail(props) {
  const emailHtml = render(<Email {...props} />);

  // read file using FileReader API
  async function readFile(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  // construct email message object to be sent
  const message = {
    to: 'salesteam@magpollo.com',
    subject: `New Service Request from ${props.name}`,
    html: emailHtml,
    attachments: [
      {
        filename: props.file.name,
        path: await readFile(props.file),
      },
    ],
  };

  // send email
  try {
    const response = await fetch('/api/send_mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (response.status === 200) {
      alert('Message sent successfully!');
      return true;
    } else {
      alert('Message failed to send.');
      return false;
    }
  } catch (error) {
    console.log(error);
    alert('Message failed to send.');
    return false;
  }
}
