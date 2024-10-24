import { MAIN_LIT_STAR_DB } from "@/app/layout";
export async function GetMenu() {
    const data = await MAIN_LIT_STAR_DB(`SELECT * FROM menu`)
    return data;
}
export async function GetCursiorItem() {
    const data = await MAIN_LIT_STAR_DB(`SELECT id,language,category,image,UA FROM movies LIMIT 10`)
    return data;
}
export async function GetMainCursiorItem() {
    const data = await MAIN_LIT_STAR_DB(`SELECT recimage,id FROM movies LIMIT 20`)
    return data;
}