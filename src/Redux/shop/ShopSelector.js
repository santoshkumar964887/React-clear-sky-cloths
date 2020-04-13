import {createSelector}  from 'reselect';
const SelectShop=state=>state.shop;

export const SelectCollections=createSelector(
    [SelectShop],
    shop=>shop.collections
    );
export const SelectCollectionsPreview=createSelector(
 [SelectCollections],
 collections=>Object.keys(collections).map(key=>collections[key])

);
export const SelectCategery=(categeryUrlPrams)=>(
    createSelector(
        [SelectCollections],
        collections=>collections[categeryUrlPrams]
    )
);

