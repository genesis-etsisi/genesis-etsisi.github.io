async function getTweets(){
    try{
        const response = fetch('https://api.twitter.com/2/users/1454534151932157956/tweets')
        const data = await response.json()
        return data
    }catch(e){

    }
}

(()=>{
    const res = getTweets()
    console.log(res)
})()

