import {useRef, useState} from "react";
import {Alert} from "../ui/Modal.jsx";
import {fetchAddArticle} from "../../http/article/fetchArticle.js";
import {useSelector} from "react-redux";

export const Input = ({id, title, type = "text", ...props}) => {
    return (
        <div className="input-field">
            <label htmlFor={id}>{title}</label>
            <input type={type} id={id} {...props}/>
        </div>
    );
};

const Textarea = ({id, title, ...props}) => {
        return (
            <div className="input-field">
                <label htmlFor={id}>{title}</label>
                <textarea id={id} {...props}></textarea>
            </div>
        );
    }
;

const ArticleWriter = () => {

    const token = useSelector(state => state.article.token);

    const subjectRef = useRef();
    const contentRef = useRef();
    const attachfileRef = useRef();

    const alertRef = useRef();

    const [writerForm, setWriterForm] = useState(false);

    // 저장을 클릭하면 입력했던 값을 가져와 출력 (state 없이)
    const onTestDaveClickHandler = async () => {

        if (!subjectRef.current.value) {
            alertRef.current.showModal("제목을");
            return;
        } else if (!contentRef.current.value) {
            alertRef.current.showModal("내용을");
            return;
        }
        const addResult = await fetchAddArticle(token, subjectRef.current.value, contentRef.current.value, attachfileRef.current.files);
        if (addResult.error) {
            alert(addResult.error);
        }

        subjectRef.current.value = "";
        contentRef.current.value = "";
        attachfileRef.current.value = "";
    }

    const onClickWriterFormHandler = () => {
        !writerForm ? setWriterForm(true) : setWriterForm(false);
    }


    return (
        <>
            {!writerForm ? (
                <button type="button" className="wrtie-button" onClick={onClickWriterFormHandler}>글쓰기</button>
            ) : (
                <>
                    <Alert dialogRef={alertRef}/>

                    <div className="article-writer">
                        <Input id="subject" title="제목" ref={subjectRef}/>
                        <Input id="file" title="파일" type="file" multiple ref={attachfileRef}/>
                        <Textarea id="content" title="내용" ref={contentRef}/>

                        <button type="button" className="positive-button" onClick={onTestDaveClickHandler}>
                            저장
                        </button>
                        <button type="button" className="negative-button" onClick={onClickWriterFormHandler}>
                            취소
                        </button>
                    </div>
                </>
            )}
        </>
    );
};
export default ArticleWriter;
