const InitailState = {
    appname: "OLX CLONE"
  };
  export default (store = InitailState, action) => {
    console.log("AppData=> ", action)
    switch (action.type) {
      case "SAVEDATA":
        return({
          ...store,
          appname: action.type
        })
        break;
     
      default:
        break;
    }
    return store;
  };
  
  