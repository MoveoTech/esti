import mondaySdk from "monday-sdk-js";

// initialize monday SDK
const monday = mondaySdk();

export const getContext = async () => {
    return monday.get("context");
}
export const getItemName = async (itemId) => {
    return monday.api(`query { items(ids: ${itemId}) { name } }`);
}
export const getSkinnyItems = async (limit) => {
    return monday.api(`query { items(limit: ${limit}) { name id }}`);
}
export const getFullItems = async (items) => {
    const ids = items.map((item) => +item.item.id);

    return monday.api(`query { items (ids: [${ids}]) { name id created_at creator { name photo_thumb_small } board { name } column_values { title text } } }`)
}