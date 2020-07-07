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
  console.log(state)
  switch (action.type) {
    case "INIT": 
      return {
        DATA : "-185px;"
      }
    case "TOGGLE" :
      console.log(state.DATA)
      return {
        DATA : state.DATA === '0px' ? "-185px" :  "0px"
      }
      default : 
      throw new Error(`unhandled actions type is ${action.type}`)
  }
}