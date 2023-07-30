export const getQueryStringParameterByName = (name, url=window.location.href) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


export const formatNumber = (val) => {
    // format number 1000000 to 1,234,567
    if(val != undefined)
        return val.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    else
        return '';
}

export const deFormatNumber = (val) => {
    // format number  1,234,567 to 1000000
    if(val != undefined)
        return val.toString().replace(",", "");
    else
        return '';
}

export const IsNullOrEmpty = (val) => {
    if(val === undefined || val === '' || val === null)
        return true;
    else
        return false;
}

export const isNumeric = (s) => {
    if (typeof s != "string") return false // we only process strings!  
    return !isNaN(s) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(s)) // ...and ensure strings of whitespace fail
  }

export const trim = (s,c) => {
    if (c === "]") c = "\\]";
    if (c === "^") c = "\\^";
    if (c === "\\") c = "\\\\";
    return s.replace(new RegExp(
      "^[" + c + "]+|[" + c + "]+$", "g"
    ), "");
}

export const string2IntArray = (s,c) => {

    var resultList= [];
    var array = s.split(c);
    for(const item of array){
        if(item.length == 1 && isNumeric(item))
            resultList.push(item);
    }
    
    return resultList;

}

