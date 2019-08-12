export const fetchActionTypes = id => ({
  [id]: id,
  [id + "_SUCCESS"]: id + "_SUCCESS",
  [id + "_FAIL"]: id + "_FAIL"
});
