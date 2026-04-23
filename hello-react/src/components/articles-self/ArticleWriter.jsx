export const ArticleWriter = () => {
    return (
        <>
            <div>게시글 작성</div>
            <div>
                <label htmlFor="subject">제목</label>
                <input id="subject" type="text"/>
                <label htmlFor="email" for="">이메일</label>
                <input id="email" type="text"/>
                <label htmlFor="name" for="">이름</label>
                <input id="name" type="text"/>
                <label htmlFor="content" for="">내용</label>
                <input id="content" type="text"/>
                <div>
                    <button>등록</button>
                    <button>취소</button>
                </div>
            </div>
        </>
    )
}