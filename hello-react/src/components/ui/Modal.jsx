import {useImperativeHandle, useRef, useState} from "react";
import {createPortal} from "react-dom";

export const Alert = ({dialogRef}) => {

    const alertModalRef = useRef();

    const [errorMessage, setErrorMessage] = useState("");

    /**
     * Props로 전달된 ref에게 dom이 아닌 함수 객체를 전달하기 위한 방법
     * 부모 컴포넌트에게 전달해중 데이터들(함수, 객체, 변수, 상수 등)
     * 부모에게 전달해줄 데이터들은 props로 전달된 ref에 담아서 전달
     */
    useImperativeHandle(dialogRef, () => {
        // dialogRef에게 할당해줄 데이터 들을 반환
        return {
            // showModal: function () {}
            // 확장된 객체
            showModal(message) {
                alertModalRef.current.showModal();
                setErrorMessage(message);
            }
        }

    });

    const onCloseClickHandler = () => {
        alertModalRef.current.close();
    }

    return (
        <>
            {createPortal(
                <dialog className="modal" ref={alertModalRef}>
                    <div className="modal-body">
                        <section className="modal-close-button" onClick={onCloseClickHandler}>X</section>
                        <div>{errorMessage} 입력해주세요</div>
                    </div>
                </dialog>
                , document.querySelector("#modals"))}
        </>
    )
}

export const Confirm = ({dialogRef, onOkClick, onCloseClick}) => {

    const confirmModalRef = useRef();
    const [errorMessage, setErrorMessage] = useState();

    const onOkClickHandler = () => {
        confirmModalRef.current.close();
        onOkClick();
    }

    const onCloseClickHandler = () => {
        confirmModalRef.current.close();
        onCloseClick();
    }

    useImperativeHandle(dialogRef, () => {
        return {
            showModal(message) {
                confirmModalRef.current.showModal();
                setErrorMessage(message);
            }
        }
    })

    return (
        <>
            {createPortal(
                <dialog className="modal" ref={confirmModalRef}>
                    <div className="modal-body">
                        {errorMessage}
                        <section>
                            <button type="button" className="confirm-ok" onClick={onOkClickHandler}>
                                OK
                            </button>
                            <button
                                type="button"
                                className="confirm-cancel"
                                onClick={onCloseClickHandler}
                            >
                                Cancel
                            </button>
                        </section>
                    </div>
                </dialog>
                , document.querySelector("#modals")
            )}
        </>
    )
}