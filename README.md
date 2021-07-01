## UAH File Directory
    .
    ├── ...
    ├── GeoJSON                                          
    │   └── uahData.geojson                              # fact sheets in GeoJSON format, including additional spatial data (i.e., polygons)
    ├── Superseded                                       # GeoJSON files prior to aggregation
    │   ├── boundaries                  
    │   │   ├── municipalBoundaries.geojson              # Municipal boundaries
    │   │   └── siteBoundaries.geojson                   # Small scale site boundaries
    │   ├── points
    │   │    ├── allPoints.geojson                       # geoJSON template for all points (missing coordinates)
    │   │    └── points.geojson                          # Up to date copy of completed points (with coordinates)
    │   └── uahMultiPolygons                        
    │        ├── LaHuertaDeValencia.geojson              # geoJSON format multi polygon file for La Huerta de Valencia system
    │        └── dachasStPetersburg.geojson              # geoJSON format multi polygon file for Dacahas of St Petersburg system
    ├── atlas
    │   ├── style.css                                    # stylesheet
    │   └── uahAtlas.html                                # html
    ├── images   
    │   ├── mapbox-marker-icon-20px-gray.png             # marker
    │   └── marker-stroked15.png                         # marker
    ├── factSheetTemplate.txt                            # geoJSON template for fact sheet information
    └── ...
