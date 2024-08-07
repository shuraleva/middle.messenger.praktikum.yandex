enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

type TOptions = {
    timeout: number;
    headers: Record<string, string>;
    method: METHODS;
    data: Record<string, string>;
};

type THTTPMethod = (url: string, options: TOptions, timeout?: number | undefined) => Promise<unknown>;

const queryStringify = (data: Record<string, string>): string => {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
};

class HTTPTransport {
    get: THTTPMethod = (url, options) => {
        return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
    };

    post: THTTPMethod = (url, options) => {
        return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
    };

    put: THTTPMethod = (url, options) => {
        return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
    };

    delete: THTTPMethod = (url, options) => {
        return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
    };

    request: THTTPMethod = (url, options, timeout = 5000) => {
        {
            const { headers = {}, method, data } = options;

            return new Promise(function (resolve, reject) {
                if (!method) {
                    reject('No method');
                    return;
                }

                const xhr = new XMLHttpRequest();
                const isGet = method === METHODS.GET;

                xhr.open(method, isGet && Boolean(data) ? `${url}${queryStringify(data)}` : url);

                Object.keys(headers).forEach((key) => {
                    xhr.setRequestHeader(key, headers[key]);
                });

                xhr.onload = function () {
                    resolve(xhr);
                };

                xhr.onabort = reject;
                xhr.onerror = reject;

                xhr.timeout = timeout;
                xhr.ontimeout = reject;

                if (isGet || !data) {
                    xhr.send();
                } else {
                    xhr.send(data as unknown as XMLHttpRequestBodyInit);
                }
            });
        };
    };
};

export default HTTPTransport;
