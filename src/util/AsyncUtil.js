export const initState = {
  loading: false,
  data: [],
  error: null
};

export function AsyncDispatch(promiseFn) {
  async function actionHandler(dispatch, prevdata, ...rest) {
    dispatch({ type: "LOADING" });
    try {
      const data = await promiseFn(...rest);
      if (data.response.header.resultCode === "0000") {
        dispatch({
          type: "SUCCESS",
          prevdata,
          data: data.response.body.items.item
        });
      } else {
        throw new Error("result Code Err");
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "ERROR", err: err });
    }
  }
  return actionHandler;
}
