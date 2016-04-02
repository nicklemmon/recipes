# Readme for nicklemmon.com/recipes

---
## Notes

### Coding conventions

- Using [SUIT CSS Naming Convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)
- .scss variables are like this -> $likeThis with modifiers $likeThis--modifier
- Title comments within .scss structured as follows:

```
//===== TITLING SECTION =====//

//=== Titling Subsection ===//

```

### Organizing the site

- Collections of recipes that can be written using markdown
	- Ideally recipes would output in to folders indicated by their category defined in the YAML frontmatter
	- For example:
		```
		---
		title: Cheeseburger
		category: Main Dish
		---
		```
- Recipes are categories
	- Ideally these categories could be updated dynamically by adding a subfolder to the _recipes directory
		- This might not be possible
	- A list of categories may only be necessary to define the navigation of the site, so doing so dynamically in a recipe page frontmatter may be a mistake - a typo, for example, would generate changes to navigation

#### Creating new categories and subcategories

In order to create a new cateory or subcategory, a few files need to be modified:

1. The category needs to exist in the YAML frontmatter of at least one recipe file in the _recipes directory
2. For category creation, a page needs to be created at the root level, with `category: [category-name]`,`layout: subcategory-list`, and `link-title: [Category Name]` in the frontmatter
3. For subcategory creation, a page within a folder of the name of its parent category must be created with `layout: recipe-list`, `category: [parent-category-name]`, and `subcategory: [subcategory-name]` in the frontmatter
4. Enjoy!