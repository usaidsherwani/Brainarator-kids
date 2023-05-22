import { ICourse } from 'client/interfaces';

export const isCourseAddedToCart = (coursesInCart: ICourse[] = [], course?: ICourse) => {
    let courseInCart = [];
    if (coursesInCart?.length > 0) {
        courseInCart = coursesInCart?.filter((courseObj: ICourse) => {
            return courseObj.courseName === course?.courseName;
        });
    }
    if (courseInCart?.length && courseInCart?.length > 0) {
        return true;
    }
    return false;
};
