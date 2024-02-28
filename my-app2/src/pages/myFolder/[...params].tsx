import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MultipleParamsPage = () => {
  const router = useRouter();
  const { params } = router.query;

  const paramsArray = Array.isArray(params) ? params : [params];

  useEffect(() => {
    console.log('Parameters:', paramsArray);
  }, [paramsArray]);

  return (
    <div>
      <h1>Multiple Params Page</h1>
      <p>Parameters: {paramsArray.join(', ')}</p>
    </div>
  );
};

export default MultipleParamsPage;
