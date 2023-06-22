import {
  Html,
  Head,
  Heading,
  Hr,
  Body,
  Container,
  Section,
  Img,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export default function Email({
  name,
  email,
  phone,
  company,
  website,
  message,
  services,
}) {
  const previewText = `You have a new service request from ${name} ${
    company ? `at ${company}` : ''
  }`;
  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="my-auto mx-auto font-sans bg-white">
          <Container className="bg-white border border-solid border-[#eaeaea] rounded mx-auto my-[40px] p-[20px]">
            <Section>
              <Img
                alt="Magpollo Logo"
                src={`${baseUrl}/public/logo-light.svg`}
                height={40}
                width={170}
                className="mx-auto"
              />
            </Section>
            <Section>
              <Heading className="text-center text-3xl font-bold">
                You have a new service request
              </Heading>
              <Text className="text-left text-black">
                {name}{' '}
                {company
                  ? `from ${company} ${website ? `(${website})` : ''}`
                  : `${website ? `(${website})` : ''}`}{' '}
                has requested one or more services via the Magpollo lets build
                form. You can contact them at {email}{' '}
                {phone ? `or ${phone}` : ''}.
              </Text>
              {services.length > 0 && (
                <>
                  <Text className="text-left text-black">
                    They are interested in the following services:
                  </Text>
                  <Text className="text-left text-black">
                    {services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </Text>
                </>
              )}
              {message && (
                <>
                  <Text className="text-left text-black">
                    {name} also left the following message:
                  </Text>
                  <Text className="text-left text-black">{message}</Text>
                </>
              )}
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              <Text className="text-left text-sm text-gray-500">
                This email was sent from the Magpollo website. You can find any
                files the client uploaded attached to this email.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
