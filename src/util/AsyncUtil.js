export const initState = {
  loading: false,
  data: null,
  error: null
};

export function AsyncDispatch(promiseFn) {
  async function actionHandler(dispatch, ...rest) {
    dispatch({ type: "LOADING" });
    try {
      const data = await promiseFn(...rest);
      dispatch({ type: "SUCCESS", data });
    } catch (err) {
      console.log(err);
      dispatch({ type: "ERROR", err: err });
    }
  }
  return actionHandler;
}
