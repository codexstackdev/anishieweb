function handleError(error:any){
    return error instanceof Error ? error.message : "Something went wrong"
}

const headers = {
    "Content-Type" : "application/json"
}

export async function login(username: string, password: string){
    try {
        const req = await fetch("/api/kenshie/login", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({username, password})
        });
        const data = await req.json();
        if(!data.success) return { success: false, message: data.message};
        return data;
    } catch (error) {
        return { success: false, message: handleError(error)}
    }
}

export async function getVer(){
    try {
        const req = await fetch("/api/kenshie/version", {
            method: "GET",
            headers: headers,
        });
        const data = await req.json();
        if(!data.success) return { success: false, message: data.message};
        return data;
    } catch (error) {
        return { success: false, message: handleError(error)}
    }
}

export async function updateVer(url: string, version:string){
    try {
        const req = await fetch("/api/kenshie/version", {
            method: "PUT",
            headers: headers,
            body: JSON.stringify({ url, version })
        });
        const data = await req.json();
        if(!data.success) return { success: false, message: data.message};
        return data;
    } catch (error) {
        return { success: false, message: handleError(error)}
    }
}