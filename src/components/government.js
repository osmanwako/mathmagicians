import { useEffect, useState } from 'react';

function Government() {
  const url = 'https://api.api-ninjas.com/v1/quotes?category=government';
  const [content, setContent] = useState(<p>Loading ...</p>);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(url, {
          method: 'GET',
          headers: {
            'X-Api-Key': 'RiF115CuIMntbblO3YpZIA==qOuhWm1w4FJGZoHW',
            'Content-Type': 'application/json',
          },
        });
        const response = await request.json();
        setContent(<p>{response[0].quote}</p>);
      } catch (error) {
        setContent(<p>Fail to load data</p>);
      }
    };
    fetchData();
  }, []);
  return content;
}

export default Government;