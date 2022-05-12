import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getErrorSelector } from "redux/userActivity/selectors";
import { upDateError } from "redux/userActivity/UserActivitySlice";
import { Container, TextError } from "./styles";

const ShowErrorModal = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const errorData = useSelector(getErrorSelector);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
      dispatch(upDateError());
    }, 3000);
    return () => {
      clearTimeout(timeId);
    };
  }, [dispatch]);

  if (!show) {
    return null;
  }

  return (
    <Container>
      <TextError>{errorData.textError}</TextError>
    </Container>
  );
};

export default ShowErrorModal;
