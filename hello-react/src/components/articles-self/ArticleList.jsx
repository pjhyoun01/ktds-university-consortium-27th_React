export const ArticleList = ({article}) => {
    const {id, subject, content, email, viewCnt, crtDt, mdfyDt, fileGroupId, membersVO, files} = article;
    return (
        <>
            <tr>
                <td>{subject}</td>
                {/*<td>{content}</td>*/}
                <td>{membersVO.name}</td>
                <td>{email}</td>
                <td>{viewCnt}</td>
                <td>{crtDt}</td>
                <td>{mdfyDt}</td>
                {files.map(file => (
                    <td>{file.displayName}</td>
                ))}
            </tr>
        </>
    )
}
