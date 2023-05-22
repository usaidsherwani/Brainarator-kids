import _ from 'lodash';
import { CategoriesMultiSelectField } from 'client/interfaces/pages/authoring';

export const isSearchMatchedToKey = (key: string, searchString: string) => {
    if (!Array.isArray(key) && key.toLowerCase()?.includes(searchString.toLowerCase() || '')) return true;
    return false;
};

export const isCategoryMatched = (categories: string[], searchString: string) => {
    if (categories) {
        _.forEach(categories, (category: string) => {
            if (!Array.isArray(category) && category.toLowerCase()?.includes(searchString.toLowerCase() || '')) return true;
            return false;
        });
    }
    return false;
};

export const getCategoriesList = (categories: string[]) => {
    if (categories) {
        let categoriesMultiSelect: CategoriesMultiSelectField[] = [];
        categories.map((category: string) => categoriesMultiSelect.push({ label: category, value: category }));
        return categoriesMultiSelect;
    }
    return [];
};

export const getCategoriesNames = (categories: CategoriesMultiSelectField[]) => {
    if (categories) {
        let categoriesNames: string[] = [];
        categories.map((category: CategoriesMultiSelectField) => categoriesNames.push(category.value));
        return categoriesNames;
    }
    return [];
};
