export const fetchTodoList = async () => {
    try {
        const fetchData = await fetch("http://localhost:8888/api/v1/task");
        const json = await fetchData.json();

        return json;
    } catch (e) {
        return {
            status: 500,
            statusMessage: "Internal Server Error",
            pages: 0,
            next: false,
            errors: "서비스가 잠시 중단되었습니다. 잠시 후 다시 시도해주세요.",
            count: 0,
            body: [],
        };
    }

};

export const fetchDoneTodo = async (id) => {
    try {
        await fetch(`http://localhost:8888/api/v1/task/${id}`, {
            method: "PUT",
        });
    } catch (e) {
        return {
            status: 500,
            statusMessage: "Internal Server Error",
            pages: 0,
            next: false,
            errors: "서비스가 잠시 중단되었습니다. 잠시 후 다시 시도해주세요.",
            count: 0,
            body: [],
        };
    }
}

export const fetchAllDoneTodo = async () => {
    try {
        await fetch(`http://localhost:8888/api/v1/task`, {
            method: "PUT",
        });
    } catch (e) {
        return {
            status: 500,
            statusMessage: "Internal Server Error",
            pages: 0,
            next: false,
            errors: "서비스가 잠시 중단되었습니다. 잠시 후 다시 시도해주세요.",
            count: 0,
            body: [],
        };
    }
};

export const fetchAddTodo = async (todo, dueDate, priority) => {
    try {
        await fetch("http://localhost:8888/api/v1/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                task: todo,
                dueDate,
                priority,
                idDone: false
            })
        });
    } catch (e) {
        return {
            status: 500,
            statusMessage: "Internal Server Error",
            pages: 0,
            next: false,
            errors: "서비스가 잠시 중단되었습니다. 잠시 후 다시 시도해주세요.",
            count: 0,
            body: [],
        };
    }
}