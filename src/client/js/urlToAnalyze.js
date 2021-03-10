function urlToAnalyze (url){
    const str = url.toLowerCase()
    const reg = /^https?:\/\//;
    return reg.test(str);
}

export { urlToAnalyze }
