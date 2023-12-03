import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from '@/app/App';
import { StoreProvider } from '@/app/providers/StoreProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <HashRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </HashRouter>,
);
