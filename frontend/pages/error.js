// ErrorPage in /pages/error.js
import React from 'react';
import { useRouter } from 'next/router';

const ErrorPage = () => {
  const router = useRouter();
  const { message } = router.query;

  return (
    <div>
      <h1>An error occurred</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;