fetch and axios both are use for api calling
1.fetch - 404 / 500 ko error nahi maanta
        - response.json() likhna padta hai
        -direct timeout support nahi
        - purane browsers me polyfill chahiye

2.axios- 404 / 500 par automatically error throw 
       - data direct JSON me milta hai
       - Axios me interceptors hote hain(token add kar sakte ho,logging,global error handling)
       - request ka time limit set kar sakte ho
       - old browsers (IE) me bhi support