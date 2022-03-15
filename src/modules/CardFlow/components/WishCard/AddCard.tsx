import { ReactComponent as Plus } from "../../../../assets/blackPlus.svg";
import { ModalCreateWish } from "../../../../components/Modal/ModalCreateWish";
import Modal from "../../../_common/Modal";

const ADD_TEXT = "ДОБАВИТЬ ЖЕЛАНИЕ";

export const AddCard = () => {
  return (
    <>
      <Modal content={<ModalCreateWish />}>
        <div className="wishcard-container">
          <div className="control-wrapper add-card">
            <Plus />
            <span>{ADD_TEXT}</span>
          </div>
        </div>
      </Modal>
    </>
  );
};
// route + auth
