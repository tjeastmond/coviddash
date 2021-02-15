import Head from 'next/head';

export default function Header(props) {
  const { title } = props;
  return (
    <Head>
      <title>{title || `NJ COVID-19 Dashboard`}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
