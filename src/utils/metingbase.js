import Meting from '@meting/core';

const meting = new Meting('netease');
meting.format(true);

export async function getSongInfo(platform,songId){
    try{
        meting.site(platform);
        // const rrr= JSON.parse(await meting.search("See you again变速"));
        // console.log(rrr);
        const result = JSON.parse(await meting.song(songId))[0];
        console.log(result);
        // await new Promise(resolve => setTimeout(resolve, 2000));
        const urlInfo = JSON.parse(await meting.url(songId.toString(), 320))["url"];
        // await new Promise(resolve => setTimeout(resolve, 2000));
        const lyrics = JSON.parse(await meting.lyric(result.lyric_id))["lyric"];
        // await new Promise(resolve => setTimeout(resolve, 2000));
        const cover = JSON.parse(await meting.pic(result.pic_id, 300))["url"];
        const finalResult= {...result,urlInfo:urlInfo,lyrics:lyrics,cover:cover};
        return finalResult;
    }catch(e){
        return {"error": e};
    }
}