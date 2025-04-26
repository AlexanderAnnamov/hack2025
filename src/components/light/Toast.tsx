import {Alert, Snackbar} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useRedux.ts";
import {onClose} from "../../redux/slices/toastReducer.ts";

export const Toast = () => {
  const {open, time, text, severity} = useAppSelector(state => state.toast)
  const dispatch = useAppDispatch()
  return <Snackbar open={open} autoHideDuration={time} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
    <Alert
      onClose={() => dispatch(onClose())}
      severity={severity}
      variant="filled"
      sx={{width: '100%'}}
    >
      {text}
    </Alert>
  </Snackbar>
}