import { useEffect } from "react";
import { WishCard } from "./components/WishCard/WishCard";
import wishTest from "../../assets/wishTest.svg";
import { AddCard } from "./components/WishCard/AddCard";
import { useDispatch } from "react-redux";
import { getUniqueWishes } from "../../components/Modal/redux/middleware";
import { useWish } from "../../components/Modal/redux/selectors";
import "./cardContainerStyles.scss";
import styled from "styled-components";

const CardContainer = styled.div<{ isTable: boolean }>`
  display: ${({ isTable }) => (isTable ? "flex" : "block")};
  flex-wrap: wrap;
`;

export const Card = ({ isTable }) => {
  const dispatch = useDispatch();
  const { wishes } = useWish();

  useEffect(() => {
    dispatch(getUniqueWishes());
  }, []);

  return (
    <>
      <CardContainer isTable={isTable}>
        <AddCard />
        {wishes?.content?.map((element: any) => (
          <WishCard costLevel={1} name={element.name} isTable={isTable} />
        ))}
        {/* <WishCard costLevel={1} name="default image" />
      <WishCard
        imgSrc={wishTest}
        costLevel={3}
        name="with image and loooooooooooong text"
      /> */}
      </CardContainer>
    </>
  );
};
