/**
 * Created by lewisjames-odwin on 16/10/2016.
 */
let domainName;

//domainName = "";
domainName = "http://www.mutoon-online.co.uk";
export const urlPrefix = domainName+"/index.php"; //Change to http://mutoon-online.co.uk when live
export const urlCategories = urlPrefix+"/wp-json/wp/v2/categories";
export const urlBook = urlPrefix+"/wp-json/wp/v2/books?per_page=100&filter[category_name]=";

export const isObjectEmpty = (obj) =>{
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};
