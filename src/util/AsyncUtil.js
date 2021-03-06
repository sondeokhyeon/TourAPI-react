export const initState = {
  loading: false,
  data: {
    info: [],
    minor: [],
  },
  error: null,
};

export function AsyncDispatch(promiseFn, key) {
  async function actionHandler(dispatch, prevdata, ...rest) {
    dispatch({ type: "LOADING", key: key });
    try {
      const data = await promiseFn(...rest);
      if (data.response.header.resultCode === "0000") {
        if (!prevdata) {
          dispatch({
            type: "SUCCESS",
            data: data.response.body.items.item,
            key,
          });
        } else {
          dispatch({
            type: "ADD",
            prevdata,
            data: data.response.body.items.item,
          });
        }
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
