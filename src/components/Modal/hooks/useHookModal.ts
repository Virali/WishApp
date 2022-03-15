import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ApiNameFiled } from "../constants/constants";
import { postUniqueWishes } from "../redux/middleware";
import { useUniqueWish } from "../redux/selectors";

export const useHookModal = (id?: number | string) => {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFileBase64, setSelectedFileBase64] = useState<
    string | ArrayBuffer | null
  >();
  const [preview, setPreview] = useState<string>();
  const [titleWish, setTitleWish] = useState<any>();
  const [inputValue, setInputValue] = useState<string>();
  const [visibleText, setVisibleText] = useState(false);
  const [currencyInputValue, setCurrencyInputValue] = useState<any>();
  const [currencyRadioValue, setCurrencyRadioValue] = useState<string>();
  const [formValues, setFormValues] = useState<any>();
  const [checkBoxvalues, setCheckBoxValues] = useState<{
    [key: string]: boolean;
  }>();
  const dispatch = useDispatch();
  const uniqueWish = useUniqueWish(id);
  console.log(titleWish);
  useEffect(() => {
    setSelectedFileBase64(uniqueWish?.image?.content);
    setCurrencyRadioValue(
      uniqueWish?.price?.currencyCode === 0 ? "usd" : "rub"
    );
    setTitleWish({ title: uniqueWish?.name, describe: uniqueWish?.access });
  }, [uniqueWish]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const encodeImageFileAsURL = (element) => {
    var reader = new FileReader();
    reader.onloadend = function () {
      setSelectedFileBase64(reader.result?.toString().split(",")[1]);
    };
    reader.readAsDataURL(element);
  };

  const handlerSendPicture = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile((prevValue) => prevValue);
      return;
    }
    encodeImageFileAsURL(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const handlerTitleWish = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    placeholder?: string
  ) =>
    setTitleWish((prevValue: any) => ({
      title: !placeholder ? event.target.value : prevValue?.title,
      describe: !!placeholder ? event.target.value : prevValue?.describe,
    }));

  const handlerFocusTextArea = () => setVisibleText(true);

  const handlerBlurTextArea = () => setVisibleText(false);

  const handlerFindGift = () => window.open(inputValue);

  const handlerChangeInput = (value: ChangeEvent<HTMLInputElement>) =>
    setInputValue(value.target.value);

  const handlerChangeCurrency = (value: any) =>
    setCurrencyInputValue(value.target.value.replace(/\D/, ""));

  const handlerChangeRadioButton = (element: any, currency: string) =>
    setCurrencyRadioValue(currency);

  const handlerChangeCheckBox = (value: any, name: string) =>
    setCheckBoxValues((prevValue) => ({
      ...prevValue,
      [ApiNameFiled[name]]: value.target.checked,
    }));

  const handlerCreateWish = () =>
    setFormValues({
      ...checkBoxvalues,
      name: titleWish?.title,
      details: titleWish?.describe,
      image: selectedFileBase64
        ? {
            content: selectedFileBase64,
          }
        : undefined,
      link: inputValue,
      price: {
        currencyCode: currencyRadioValue === "usd" ? 1 : 0,
        value: currencyInputValue,
      },
    });

  const handlerSubmitModal = (event: any) => {
    event.preventDefault();
    dispatch(postUniqueWishes(formValues));
  };

  return {
    values: {
      preview,
      selectedFile,
      visibleText,
      titleWish,
      inputValue,
      currencyInputValue,
      currencyRadioValue,
      selectedFileBase64,
    },
    handlers: {
      handlerSendPicture,
      handlerTitleWish,
      handlerFocusTextArea,
      handlerBlurTextArea,
      handlerFindGift,
      handlerChangeInput,
      handlerChangeCurrency,
      handlerChangeRadioButton,
      handlerCreateWish,
      handlerSubmitModal,
      handlerChangeCheckBox,
    },
  };
};
