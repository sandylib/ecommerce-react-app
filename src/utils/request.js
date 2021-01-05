const request = async (url, options) => {
    const headers = {
      // Set-Cookie: ; httpOnly
      credentials: 'same-origin',//cors
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };
  
    const requestOptions = {
      ...options,
      ...headers
    }
    const resp = await fetch(url,requestOptions);
    return resp;
  
  }
  
  export default request;