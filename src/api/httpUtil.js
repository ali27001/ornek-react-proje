const request = (url, options) =>
    fetch(url, options)
        .then(response => {
            const { status, headers } = response

            const contentType = headers.get('content-type')
            
            if (status >= 200 && status < 300) {
                if (contentType && contentType.indexOf('application/json') !== -1) {
                    response.json().then(body => {
                        return body;
                    })

                } else {
                    return response.text();
                }
            }

        }).catch(error => {
            throw new Error(error.message)
        });

const headers = () => {
    let headerObj = {}
    headerObj['Content-Type'] = 'application/json';
    return headerObj;
}

const getOptions = () => ({
    method: 'GET',
    mode: 'cors',
    headers: headers()
})

const postOptions = data => ({
    method: 'POST',
    mode: 'cors',
    headers: headers(),
    body: JSON.stringify(data)
})

export const get = url => request(url, getOptions());
export const post = (url, data) => request(url, postOptions(data));