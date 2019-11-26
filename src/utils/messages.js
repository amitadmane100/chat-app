const generateMessage = (username, text)=>{
   return{ 
       username,
        text,
    createdAt : new Date().getTime()
}
}

const genereteLocationMessage = (username, url) =>{
    return{
        username,
        url,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    genereteLocationMessage
}