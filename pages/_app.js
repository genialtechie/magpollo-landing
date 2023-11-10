import '../styles/globals.css';
import { Layout } from '../components';
import { Plus_Jakarta_Sans } from '@next/font/google';
import localFont from '@next/font/local';
import { FormspreeProvider } from '@formspree/react';
import { Jockey_One } from '@next/font/google';

const hack = localFont({ src: './fonts/hack.ttf', variable: '--font-hack' });

const jakarta = Plus_Jakarta_Sans({
  weight: 'variable',
  style: 'normal',
  variable: '--font-jakarta',
});

const jockey = Jockey_One({
  weight: '400',
  style: 'normal',
  variable: '--font-jockey',
});

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return (
    <div
      className={`${jakarta.variable} font-sans ${jockey.variable} font-mono`}
    >
      {getLayout(
        <FormspreeProvider project="2147174458681458297">
          <Component {...pageProps} />
        </FormspreeProvider>
      )}
    </div>
  );
}

export default MyApp;
