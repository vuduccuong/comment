import React, { useEffect } from "react";

//css
import "./modal.css";

//components
import useForm from "../f-form/useForm";

const Modal = props => {
  const { values, handleChange, handleSubmit } = useForm(onAddComment);

  function onAddComment() {
    clearForm();
    props.isClose();
    console.log(values);

    onCloseModal();
  }

  //reset Form
  const clearForm = () => {
    const name = document.getElementById("txtNameRating");
    const email = document.getElementById("txtEmailRating");
    const phone = document.getElementById("txtPhoneRating");
    name.value = "";
    email.value = "";
    phone.value = "";
    console.log("cleaned", name.value, email.value, phone.value);
  };

  useEffect(() => {
    console.log("clen");
  }, []);

  const onCloseModal = () => {
    props.isClose();
    const modal = document.getElementsByClassName("modal--is-visible");
    if (modal.length > 0) {
      [].forEach.call(modal, function(el) {
        el.classList.remove("modal--is-visible");
      });
    }
  };

  return (
    <div
      className={`modal js-modal${props.isShow ? " modal--is-visible" : null}`}
      id="modal1"
      data-animation="on"
      data-isform=""
    >
      <div
        className="modal__content"
        role="alertdialog"
        tabIndex="-1"
        aria-labelledby="modalTitle1"
        aria-describedby="modalDescription1"
      >
        <header className="modal__header">
          <h3 id="name-modal">Hoàn thành gửi nhận xét</h3>
        </header>

        <div className="modal__body">
          <p className="pmd-ln1" id="note-form">
            Vui lòng nhập thông tin để hoàn thành gửi nhận xét
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <p className="pmd-lb">
                Tên:<sup>*</sup>
              </p>
              <input
                type="text"
                className="form-control"
                name="txtNameRating"
                id="txtNameRating"
                aria-describedby="emailHelp"
                placeholder="Nhập họ và tên"
                onChange={handleChange}
                value={values.name}
              />
            </div>
            <div className="form-group">
              <p className="pmd-ln2">
                Để nhận thông báo khi có trả lời. Hãy nhập email và số điện
                thoại (Không bắt buộc)
              </p>
              <p className="pmd-lb">Email:</p>
              <input
                type="email"
                className="form-control"
                name="txtEmailRating"
                id="txtEmailRating"
                placeholder="Nhập email"
                onChange={handleChange}
                value={values.email}
              />
            </div>
            <div className="form-group">
              <p className="pmd-lb">Số điện thoại:</p>
              <input
                type="text"
                className="form-control"
                name="txtPhoneRating"
                id="txtPhoneRating"
                placeholder="Nhập số điện thoại"
                onChange={handleChange}
                value={values.phone}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary js-modal__close"
              id="btn-user-sent"
            >
              Gửi nhận xét
            </button>
          </form>
        </div>
        <button
          className="reset modal__close-btn js-modal__close"
          onClick={() => {
            onCloseModal();
          }}
        >
          <svg className="icon" viewBox="0 0 16 16">
            <title>Close modal window</title>
            <g
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
            >
              <line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line>
              <line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
