
const InitailState = {
    user: "Bilal Shaikh",
    email: "bilal@gmail.com"
  };
  export default (store = InitailState, action) => {
    console.log("AuthData=> ", action)
    return store;
  };
  
  