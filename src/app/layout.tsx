import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/header';
import { type_second } from '../functions/fonts';
import Footer from '../components/footer';
import { UserContextProvider } from '@/context/user-context';
import userGet from '@/actions/user-get';

export const metadata: Metadata = {
  title: 'Dogs next',
  description: 'rede social para cachorros',
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const { data: user } = await userGet();
  return (
    <html lang="pt-br">
      <body className={type_second.variable}>
        {/* para fazer com que o footer fique no final da pagina sempre
         e o conteudo de espanda ao maximo, foi usado a classe App e AppBody, 
         definidas no globals.css */}
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <div>{modal}</div>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
