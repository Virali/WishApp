import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AuthContainer } from "../LoginPage/AuthContainer";
import Modal from "../_common/Modal";
import { toggleVisibility } from "./redux/reducer";
import { useAuth } from "./redux/selectors";

export const AuthComponent = () => {
  const dispatch = useDispatch();
  const { isAuthorized, isVisible } = useAuth();

  useEffect(() => {
    if (!isAuthorized) {
      setTimeout(() => dispatch(toggleVisibility(true)), 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onBlur() {
    dispatch(toggleVisibility(false));
  }

  return (
    <Modal content={<AuthContainer />} toShow={isVisible} onBlur={onBlur} />
  );
};
