useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  