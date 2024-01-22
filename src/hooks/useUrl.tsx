'use client';

import { useEffect, useState } from 'react';

const useUrl = () => {
  const [baseUrl, setBaseUrl] = useState<string>();

  useEffect(() => {
    setBaseUrl(location.protocol + '//' + location.host);
  });

  return baseUrl;
};

export default useUrl;
