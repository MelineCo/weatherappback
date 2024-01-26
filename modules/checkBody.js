function checkBody(body, checklist) {
    let isValid = true
    
    checklist.forEach(function(check){
        if(!body[check]){
            isValid = false
            return isValid
        }
    })

    return isValid
}

module.exports = { checkBody }