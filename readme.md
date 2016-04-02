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