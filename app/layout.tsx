"use client";
import './global.css'
import RequestInterceptor from '@/services/interceptors/RequestInterceptor';
import ResponseInterceptor from '@/services/interceptors/ResponseInterceptor';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  (new RequestInterceptor).intercept();
  (new ResponseInterceptor).intercept();

  return (
    <html lang="en">
      <body className="antialiased">
        <ToastContainer newestOnTop
        />
        {children}
      </body>
    </html>
  )
}
