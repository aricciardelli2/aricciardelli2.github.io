# UFO Sightings Webpage

## Overview of Project

### Purpose

The purpose of the UFO Sightings [webpage](https://aricciardelli2.github.io/ufos) is to provide an interactable webpage for users to see a large amount of UFO sightings [data](https://github.com/aricciardelli2/aricciardelli2.github.io/blob/master/static/js/data.js) and then filter based on multiple fields to see the specific data that the user is interested in.

## Results

The UFO Sightings webpage [webpage](https://aricciardelli2.github.io/index.html) allows for user friendly filtering of raw UFO sightings data. To use the webpage, users first go to the UFO Sightings webage at the following URL: [https://aricciardelli2.github.io/index.html](https://aricciardelli2.github.io/index.html)

![](https://github.com/aricciardelli2/aricciardelli2.github.io/blob/master/resources/full_site.png)

At the base webpage, all the data is displayed in the table in the bottom right corner. Now it is time to filter based on user desired parameters! Users can filter the data by values for 5 of the columns (Date, City, State, Country, and Shape) by entering values in the input fields on the left. Below are examples of filters applied and the new filtered table. 

* [State Filter](https://github.com/aricciardelli2/aricciardelli2.github.io/blob/master/resources/state_filter.png): All data filtered by State `fl`

![](https://github.com/aricciardelli2/aricciardelli2.github.io/blob/master/resources/state_filter.png)

* [State and Shape Filter](https://github.com/aricciardelli2/aricciardelli2.github.io/blob/master/resources/state_shape_filter.png): All data filtered by State `fl` and Shape `sphere`

![](https://github.com/aricciardelli2/aricciardelli2.github.io/blob/master/resources/state_shape_filter.png)

* [State, Shape and Date Filter](https://github.com/aricciardelli2/aricciardelli2.github.io/blob/master/resources/state_shape_date_filter.png): All data filtered by State `fl`, Shape `sphere` and Date `1/8/2010`. Note that this filter returns no rows as there where no UFO sightings that met these three criteria.

![](https://github.com/aricciardelli2/aricciardelli2.github.io/blob/master/resources/state_shape_date_filter.png)

* [State and Date Filter](https://github.com/aricciardelli2/aricciardelli2.github.io/blob/master/resources/state_date_filter.png): All data filtered by State `fl` and Date `1/8/2010`. To return rows after returning 0 rows in the example above, the Shape filter is cleared and now sighting data based on the State and Date filters are successfully returned.

![](https://github.com/aricciardelli2/aricciardelli2.github.io/blob/master/resources/state_date_filter.png)

## Summary

The UFO Sightings webpage allows users to see tons of UFO sightings data and then filter by desired values! If is very intuitive, simple, easy to use, and fast! The one draw back from this design is that users can only filter the data by one specific values for each column. For example, only 1 Date can be selected, or 1 City, etc. For future development, 3 filtering options can be added:

* Filter by Range: For numeric columns, range filtering should be added so users can select values greater than a certain value, less than a certain value, or between two specified values. For this data, this range filtering would apply the Date column.
* Filter by Multiple Values: Be able to filter by multiple specific values for non-numeric columns. This would enable filtering by `ca` AND `fl` for State or `cirle` AND `sphere` for Shape.
* Filter by Not a Value: Be able to filter to NOT a specific value. This would allow users to filter by all values NOT equal to a specific value such as all sightings Country NOT `us`.

Overall, the UFO Sightings [webpage](https://aricciardelli2.github.io/index.html) allows for great surfacing of UFO sightings data and user friendly filtering, and there is room for growth of the webpage in the future!
