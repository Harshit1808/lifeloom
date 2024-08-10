import '../styles/globals.css'
import { AuthProvider } from '../src/contexts/AuthContext'; // Adjust the path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp
