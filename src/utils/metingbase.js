import Meting from "@meting/core"

const meting = new Meting("netease");
meting.format(true);

export async function getSongInfo(platform,songId){
    try{
        // meting.site(platform)
        // const res=JSON.parse(await meting.search("See you again变速"));
        // console.log(res);
        let result;
        const url="https://api.i-meto.com/meting/api?server="+platform+"&type=song&id="+songId+"&r=0.122";
        // console.log(url);
        await fetch(url).then(res => res.json())
        .then((data)=>{result=data;});
        return result[0];
    }catch(e){
        return {"error": e};
    }
}