import { useEffect, useState } from 'react';

function Government() {
  const url = 'https://api.api-ninjas.com/v1/quotes?category=government';
  const [content, setContent] = useState(<p>Loading ...</p>);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(url, {
          method: 'GET',
          headers: {
            'X-Api-Key': 'RiF115CuIMntbblO3YpZIA==qOuhWm1w4FJGZoHW',
            'Content-Type': 'application/json',
          },
        }).then(async (response) => {
          if (response.ok) {
            const data = await response.json();
            setContent(<p>{data[0].quote}</p>);
          } else {
            setContent(<p>Network response was not ok</p>);
          }
        });
      } catch (error) {
        setContent(<p>Fail to load data</p>);
      }
    };
    return () => fetchData();
  }, []);
  return <div className="desc-message">{content}</div>;
}

export default Government;
