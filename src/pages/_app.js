import Layout from '@/components/Layout';
import Context from '../components/Context';
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
}

export default App;