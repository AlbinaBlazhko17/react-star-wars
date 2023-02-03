
export const getApiResource = async (url) => {
    try {
        const res =  await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        
        return (await res).json() ;
    } catch(e) {
        console.error('Could not fetch.', e.message);
		return false;
    }
}

export const makeConCurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json());
    }));

    return res;
}