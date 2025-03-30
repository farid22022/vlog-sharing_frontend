
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserRouter from './routes/userRouter'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import { TranslateProvider } from './Context/ContextProvider'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
// import { TranslateProvider } from './context/TranslateContext'; // Verify correct path

const queryClient = new QueryClient();
const router = createBrowserRouter([...UserRouter, ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TranslateProvider> {/* Must be the top-level provider */}
      <QueryClientProvider client={queryClient}>
        <ToastContainer 
          autoClose={false}
          position='bottom-right'
        />
        <div className='w-full max-w-full min-h-screen mx-auto bg-white'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </TranslateProvider>
  </StrictMode>
)