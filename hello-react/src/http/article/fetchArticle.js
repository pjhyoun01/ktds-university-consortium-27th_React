export const fetchArticleList = async (pageNo = 0, listSize = 10) => {
    try {
        const fetchResult = await fetch(
            `http://192.168.211.11:8083/api/articles?pageNo=${pageNo}&listSize=${listSize}`,
        );

        const listResult = await fetchResult.json();
        return listResult;
    } catch (e) {
        return {
            result: { count: 0, result: [] },
            pagination: {},
            error: "서비스가 잠시 중단되었습니다. 잠시 후 다시 시도해주세요.",
        };
    }
};

export const fetchJsonWebToken = async (email, password) => {
    try {
        const fetchResult = await fetch(
            "http://192.168.211.11:8083/api/authorization", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }

        );

        const jwt = await fetchResult.json()
        return await jwt;
    } catch (e) {
        return {
            result: { count: 0, result: [] },
            pagination: {},
            error: "서비스가 잠시 중단되었습니다. 잠시 후 다시 시도해주세요.",
        };
    }
};

// 인증 정보 필요.
export const fetchAddArticle = () => {};