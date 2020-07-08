export const asyncReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`unhandled actions type is ${action.type}`);
  }
};


export const headerReducer = (state, action) => {
  switch (action.type) {
    case "INIT": 
      return {
        DATA : "-225px;"
      }
    case "TOGGLE" :
      return {
        DATA : state.DATA === '0px' ? "-225px" :  "0px"
      }
      default : 
      throw new Error(`unhandled actions type is ${action.type}`)
  }
}