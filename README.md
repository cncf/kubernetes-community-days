# Cloud Native Days website

## Add your Cloud Native Days event

All event data is kept in the [`events.yaml`](./data/events.yaml) file. To add your Cloud Native Days event to this site:

1. Add a new entry to that file. The following fields are required:
    * A `title`
    * A `location` for the event in `City, Country` form (e.g. `Rio de Janeiro, Brazil`)
    * A `tag` for the event (lowercase, dashes only). The tag must be unique.
    * A `start` and `end` date for the event in `MM-DD-YYYY` form, e.g. `01-02-2020` for January 2, 2020.
    * If you've created your own site for your event, add a link to that site using `link`.
2. Add a logo for the event to the [`static/img/logos`](./static/img/logos) folder. The name of the image should match the `tag` parameter. If the image is *not* a `.png` file, add a `img` field to the event's metadata specifying the file type, e.g. `img: jpg`.
3. Submit a pull request to this repository.
