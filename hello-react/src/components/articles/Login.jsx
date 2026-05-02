import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchLogin} from "../../http/article/fetchArticle.js";
import {getValidationResult} from "../../utils/errorHandler.js";
import {articleActions} from "../../stores/toolkit/slices/articleSlice.js";
import {isString} from "../../utils/type.js";
import {Input} from "./ArticleWriter.jsx";

export const Login = () => {


    const token = useSelector(state => state.article.token);
    const storeDispatcher = useDispatch();

    const emailRef = useRef();
    const passwordRef = useRef();
    const [loginErrors, setLoginErrors] = useState();

    const onClickLoginHandler = async () => {
        const loginResult = await fetchLogin(emailRef.current.value, passwordRef.current.value);

        if (loginResult.error) {
            setLoginErrors(getValidationResult(loginResult.error));
        } else {
            storeDispatcher(articleActions.setToken(loginResult.token));
        }
    }
    return (
        <div>
            {!token ? (
                <>
                    {isString(loginErrors) && <div>{loginErrors}</div>}
                    <div>
                        <Input title="eamil" id="email" ref={emailRef}/>
                        {loginErrors?.email && <div>{loginErrors.email}</div>}
                    </div>
                    <div>
                        <Input title="password" id="password" type="password" ref={passwordRef}/>
                        {loginErrors?.password && <div>{loginErrors.password}</div>}
                    </div>

                    <button type="button" onClick={onClickLoginHandler}>로그인</button>
                </>
            ) : (
                <>
                    <span>ooo님</span>
                    <span>
                        <button>로그아웃</button>
                    </span>
                </>
            )}
        </div>
    )
}