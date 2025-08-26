import Bruno from './Bruno';
import GlobalStyle from '../globalStyles';
import '../i18n';
import Main from './Main';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flex: 1 }}>
        <Main>
          <GlobalStyle />
          <Bruno />
        </Main>
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        background: '#f8fafc',
        borderTop: '1px solid #e5e7eb',
        fontSize: '12px',
        color: '#6b7280'
      }}>
        Powered by{' '}
        <a 
          href="https://merutech.com" 
          style={{ 
            color: '#3b82f6', 
            textDecoration: 'none', 
            fontWeight: '600' 
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Merutech.com
        </a>
        {' '}| RapidREST Enterprise Edition
      </footer>
    </div>
  );
}
