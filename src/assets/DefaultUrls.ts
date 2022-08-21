
export const URLS = {
    checkUrl: `http://api.ipstack.com/check?access_key=${process.env.REACT_APP_API_KEY}`,
    apiUrl: (data: string) => { return `http://api.ipstack.com/${data}?access_key=${process.env.REACT_APP_API_KEY}` }
}