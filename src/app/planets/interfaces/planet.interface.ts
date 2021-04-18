export interface IPlanet {
    /* The name of this species. */
    "climate": string,

    /* The ISO 8601 date format of the time that this resource was created. */
    "created": string,

    /* The diameter of this planet in kilometers. */
    "diameter": string,

    /* The ISO 8601 date format of the time that this resource was edited. */
    "edited": string,

    /* An array of Film URL Resources that this planet has appeared in. */
    "films": string[],

    /* A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard */
    "gravity": string,

    /*The name of this planet.*/
    "name": string,

    /* The average population of sentient beings inhabiting this planet. */
    "population": string,

    /* An array of People URL Resources that live on this planet. */
    "residents": string[],

    /* The number of standard hours it takes for this planet to complete a single rotation on its axis. */
    "rotation_period": "23",

    /* The number of standard days it takes for this planet to complete a single orbit of its local star. */
    "orbital_period": string,

    /* The percentage of the planet surface that is naturally occurring water or bodies of water.*/
    "surface_water": "1",

    /* The terrain of this planet. Comma separated if diverse. */
    "terrain": string,

    /* The hypermedia URL of this resource. */
    "url": string
}
