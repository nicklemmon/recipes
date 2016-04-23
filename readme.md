# Readme for nicklemmon.com/recipes

## Using the site

### Running the project
This project uses [Jekyll](http://jekyllrb.com/). It's fairly easy to get up and running.

If you haven't used Jekyll before, open your terminal and try the following:
```
gem install jekyll
```

After cloning the repo, just `cd` over to the new directory and run the following:
```
jekyll serve
```

A server will start. You can then point your browser to [127.0.0.1:4000/recipes](http://127.0.0.1:4000/recipes/).

### Adding new recipes
In order to add a new recipe, simply create a new file in the `_recipes` directory in the root of the project.

Within the frontmatter of the page, fill in the following information. This particular sample is from a fictional recipe, `chicken-pork-fried-steak.md`:

```
---
layout: recipe

#=== Meta Info ===#
title: 			chicken pork fried steak	# name of the dish
category:		main dish					# category for the dish
subcategory:	poultry						# subcategory for the dish
review:			1							# review the recipe from a scale of 1 (bad!) to 5 (amazing!)

#=== Stuff for the Sidebar ===#
cook-time:		20							# cook time for the dish in minutes
num-served:		1							# number of people served by the dish
source:			http://allrecipes.com  		# where did you find the recipe?

#=== Stuff for the ingredients list ===#
ingredients:	chicken, pork, grease		# what are the ingredients?
---
```

After filling in the frontmatter, simply type the steps required to complete the recipe using an ordered list. For example:

```
1. Cook it
2. Serve it
3. Eat it
```


---

### Developing the site

### Coding conventions
- Sass files use [SUIT CSS Naming Convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)
- .scss variables are like this -> $likeThis with modifiers $likeThis--modifier
- Title comments within .scss are structured as follows:

```
//===== TITLING SECTION =====//

//=== Titling Subsection ===//

```

### Organizing the site


#### Creating new categories
New categories can be created in `_data/categories.yml`. Categories have a `shortname` and a `fullname` that are used in various contexts dynamically in the site.

New categories require a new index page in the root of the project as well as a new directory to contain subcategory pages.

For example, if I want to create a `awesome sauces` category, I will need to add both `awesome-sauces.html` to the root as well as `awesome-sauces/` for everything to run smoothly.

##### Creating new subcategories
Subcategories are specified within each category in `_data/categories.yml`. In addition to adding the subcategory in the data file, a new page needs to be added to the appropriate category directory in the root.

For example, if you want to add a `candy` subcategory to the `appetizers` category, create a new page called `candy.html` inside the `appetizers/` directory in the root. When creating the page, all that is needed is the appropriate YAML frontmatter:

```
---
layout: recipe-list   			# this defines the layout, which is always 'recipe-list' for subcategory pages
category: appetizer				# this defines the parent category for the subcategory
subcategory: candy				# this defines the subcategory of the page in question
---
```

In sum, for each new subcategory, do the following:

1. Add the subcategory to `_data/categories.yml`
2. Add a new page within the appropriate parent category directory with the same name defined in `categories.yml`
3. Update the frontmatter of that new page as defined in the previous example

##### Icons for categories
Specify an icon for a category in the same `_data/categories.yml` file. Give the name of he `.svg` file you plan on using and place it inside `images/icons/`.

As a last step, make your way over to `_sass/components/_icons.scss` and add your new icon to the `$icons` Sass list.


