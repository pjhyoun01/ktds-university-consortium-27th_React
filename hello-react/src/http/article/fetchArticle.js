export const fetchArticleList = async (pageNo = 0, listSize = 10) => {
    try {
        const fetchResult = await fetch(
            `http://localhost:8080/api/articles?pageNo=${pageNo}&listSize=${listSize}`,
        );

        return await fetchResult.json();
    } catch (e) {
        return {
            result: {count: 0, result: []},
            pagination: {},
            error: "서비스가 잠시 중단되었습니다. 잠시 후 다시 시도해주세요.",
        };
    }
};

export const fetchLogin = async (email, password) => {
    try {
        const fetchResult = await fetch(
            "http://localhost:8080/api/authorization", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            }
        );

        return await fetchResult.json();
    } catch (e) {
        return {
            result: false,
            error: "서비스가 잠시 중단되었습니다. 잠시 후 다시 시도해주세요.",
        };
    }
};

// 인증 정보 필요.
export const fetchAddArticle = async (token, subject, content, attachfile) => {
    try {
        const formData = new FormData();
        formData.append("subject", subject);
        formData.append("content", content);
        for (const file of attachfile) {
            formData.append("attachFile", file);
        }
        const fetchResult = await fetch("http://localhost:8080/api/articles", {
            method: "POST",
            headers: {
                Authorization: token
            },
            // server에서 requestBody를 받지 않으므로 form데이터를 넘겨줌
            // body: JSON.stringify({
            //     subject,
            //     content,
            //     attachfile,
            // })
            body: formData,

        });

        return await fetchResult.json();
    } catch (e) {
        return {
            result: false,
            error: "서비스가 잠시 중단되었습니다. 잠시 후 다시 시도해주세요.",
        };
    }
};