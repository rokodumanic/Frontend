import { useEffect } from 'react';
import { useRouter } from 'next/router';

function HomePageRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/homepage');
  }, []); // redirect on /homepage on mount, only once

  return null; // render nothing
}

export default HomePageRedirect;