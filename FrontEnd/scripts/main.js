import { works, generateGallery } from "./gallery.js"
import { filterCategoryFigure, generateCategoryBtn } from "./gallery.filter.js"
generateGallery(works)
generateCategoryBtn(works)
filterCategoryFigure(works)
