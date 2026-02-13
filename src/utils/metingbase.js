import Meting from '@meting/core';

const meting = new Meting('netease');
meting.format(true);

export async function getSongInfo(platform,songId){
    try{
        meting.site(platform);
        const result = JSON.parse(await meting.song(songId))[0];
        const urlInfo = await meting.url(result.url_id, 320);
        const lyrics = JSON.parse(await meting.lyric(result.lyric_id))["lyric"];
        const cover = JSON.parse(await meting.pic(result.pic_id, 300))["url"];
        const finalResult= {...result,urlInfo:urlInfo,lyrics:lyrics,cover:cover};
        return finalResult;
    }catch(e){
        return {"error": e};
    }
}