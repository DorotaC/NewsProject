function urlToAnalyze (url){
    let reg = /^https?:\/\//;
    return reg.test(url);
}

export { urlToAnalyze }
