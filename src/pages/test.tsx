import { NextPage } from 'next';
import { useEffect } from 'react';

const Test: NextPage = () => {
  useEffect(() => {
    const getData = async () => {
      console.log('fetch start');
      const response = await fetch(`/api/rollingpaper/1`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('fetch end');

      const result = await response.json();

      console.log(result);
    };

    getData();
  }, []);

  return <div>1</div>;
};

export default Test;
