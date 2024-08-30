'use client';

import { useRouter } from 'next/navigation';
import Header from '../../components/UI/Header';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchCurrentUser } from '../store/authSlice/authThunks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '@/components/UI/Loader';

const queryClient = new QueryClient();

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, errorMessage } = useSelector((state: RootState) => state.auth);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const checkUserAuthentication = async () => {
      if (!user) {
        await dispatch(fetchCurrentUser());
      }
      setIsAuthChecked(true);
    };

    checkUserAuthentication();
  }, [dispatch, user]);

  useEffect(() => {
    if (isAuthChecked && !user) {
      toast.error('Please log in to access this page.');
      router.push('/login');
    }
  }, [isAuthChecked, user, router]);

  if (loading || !isAuthChecked) return <Loader />;

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <ToastContainer autoClose={3000} theme="light" position="top-right" />
        <div>{children}</div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Layout;