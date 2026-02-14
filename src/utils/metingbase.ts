import { MusicInfo } from "@/interfaces/music";


export async function getPlayListInfo(platform: string,id: string):Promise<MusicInfo[]>{
    try{
        let result: MusicInfo[]=[{
            type: "error",
            url: ""
        }];
        const url="https://api.i-meto.com/meting/api?server="+platform+"&type=playlist&id="+id+"&r=0.122";
        await fetch(url,{next: { revalidate: 7200, tags: ["music"] }}).then(async(res) => res.ok ? (await res.json()): {})
        .then((data)=>{result=data;});
        return result;
    }catch(e: any){
        return [{
            type: "error",
            url: e
        }];
    }
}