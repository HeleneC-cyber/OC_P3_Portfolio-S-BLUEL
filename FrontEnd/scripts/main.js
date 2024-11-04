import { works, generateGallery } from "./gallery.js"
import { filterCategoryFigure, generateCategoryBtn } from "./gallery.filter.js"
import { generateEditMode } from "./editMode.js"


generateGallery(works)
generateCategoryBtn(works)
filterCategoryFigure(works)

generateEditMode()