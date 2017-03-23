/**
 * Created by lewisjames-odwin on 16/10/2016.
 */
let domainName;





//domainName = "";
domainName = "https://touhou.dk/muttoon/";
export const urlPrefix = domainName+"/muttoon.api.php"; //Change to http://mutoon-online.co.uk when live
export const urlCategories = urlPrefix+"?books";
export const urlBook = urlPrefix+"?book=";
export const urlAudio = domainName+"/recitation_files/";


export const isObjectEmpty = (obj) =>{
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};
