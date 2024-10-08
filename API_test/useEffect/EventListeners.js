useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      setData(data);
    };
  
    fetchData();
  }, []);
  