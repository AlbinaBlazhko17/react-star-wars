
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