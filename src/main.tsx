import { Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./assets/styles/index.css"
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Loading from './components/Loading.tsx'

createRoot(document.getElementById('root')!).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </I18nextProvider>
    </Provider>
  </PersistGate>
)
