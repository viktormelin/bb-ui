'use client';

import { useEffect, useState } from 'react';

const useUrl = () => {
  const [baseUrl, setBaseUrl] = useState<string>();
  const [currentPath, setCurrentPath] = useState<string>();

  useEffect(() => {
    setBaseUrl(location.protocol + '//' + location.host);
    setCurrentPath(location.pathname);
  });

  return { baseUrl, currentPath };
};

export default useUrl;
