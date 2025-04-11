const user = {
    profile: {
      name: "Sara"
    }
  };
  
  console.log(user?.profile?.name); // Sara
  console.log(user?.address?.street); // undefined (no error!)
  