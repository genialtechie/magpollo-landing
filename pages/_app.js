import '../styles/globals.css';
import { Layout } from '../components';
import { Plus_Jakarta_Sans } from '@next/font/google';
import localFont from '@next/font/local';
import { FormspreeProvider } from '@formspree/react';

const hack = localFont({ src: './fonts/hack.ttf', variable: '--font-hack' });

const jakarta = Plus_Jakarta_Sans({
  weight: 'variable',
  style: 'normal',
  variable: '--font-jakarta',
});

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return (
    <div className={`${jakarta.variable} font-sans ${hack.variable} font-mono`}>
      {getLayout(
        <FormspreeProvider project="mjvdgwzb">
          <Component {...pageProps} />
        </FormspreeProvider>
      )}
    </div>
  );
}

export default MyApp;
