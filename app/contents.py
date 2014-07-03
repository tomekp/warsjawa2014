#-*- coding: utf-8 -*-

from __future__ import division
from math import ceil

def update_variables(variables):
    speakers = [
        {
            'name': 'Venkat Subramaniam',
            'picture_url': 'static/images/speakers/venkat-subramaniam-320x320.jpg'
        },
        {
            'name': 'Aleksander Piotrowski',
            'picture_url': 'static/images/speakers/aleksander-piotrowski-320x320.jpg'
        },
        {
            'name': 'Andrzej Goławski',
            'picture_url': 'static/images/speakers/andrzej-golawski-320x320.jpg'
        },
        {
            'name': 'Bartek Zdanowski',
            'picture_url': 'static/images/speakers/bartek-zdanowski-320x320.jpg'
        },
        {
            'name': 'Grzegorz Kubiak',
            'picture_url': 'static/images/speakers/grzegorz-kubiak-320x320.jpg'
        },
        {
            'name': 'Jacek Laskowski',
            'picture_url': 'static/images/speakers/jacek-laskowski-320x320.jpg'
        },
        {
            'name': 'Jakub Nabrdalik',
            'picture_url': 'static/images/speakers/jakub-nabrdalik-320x320.jpg'
        },
        {
            'name': 'Justyna Sadło',
            'picture_url': 'static/images/speakers/justyna-sadlo-320x320.jpg'
        },
        {
            'name': 'Michał Niczyporuk',
            'picture_url': 'static/images/speakers/michal-niczyporuk-320x320.jpg'
        },
        {
            'name': 'Michał Tajchert',
            'picture_url': 'static/images/speakers/michal-tajchert-320x320.jpg'
        },
        {
            'name': 'Ola Sitarska',
            'picture_url': 'static/images/speakers/ola-sitarska-320x320.jpg'
        },
        {
            'name': 'Piotr Betkier',
            'picture_url': 'static/images/speakers/piotr-betkier-320x320.jpg'
        },
        {
            'name': 'Piotr Szotkowski',
            'picture_url': 'static/images/speakers/piotr-szotkowski-320x320.jpg'
        },
        {
            'name': 'Przemek Lewandowski',
            'picture_url': 'static/images/speakers/przemek-lewandowski-320x320.jpg'
        },
        {
            'name': 'Tomasz Szymanski',
            'picture_url': 'static/images/speakers/tomasz-szymanski-320x320.jpg'
        }
    ]

    sponsors = [
        {
            'name': 'Touk',
            'picture_url': 'static/images/sponsors/touk-320x320.png',
            'url' : 'http://touk.pl/'
        },
        {
            'name': 'Pragmatists',
            'picture_url': 'static/images/sponsors/pragmatists-320x320.png',
            'url' : 'http://pragmatists.pl/'
        }
    ]


    def cell_placeholders(speaker_list):
        number_of_speakers = len(speaker_list)
        minimum_number_of_rows = 2
        number_of_speakers_in_small_resolution = 2
        number_of_speakers_in_medium_resolution = 4
        number_of_speakers_in_large_resolution = 7

        placeholder_image_urls = [
            'static/images/speaker-placeholer-1-320x320.png',
            'static/images/speaker-placeholer-2-320x320.png',
            'static/images/speaker-placeholer-3-320x320.png',
        ]

        placeholders = []

        for i in range(get_number_of_placeholders(minimum_number_of_rows,
                                                  number_of_speakers_in_large_resolution,
                                                  number_of_speakers)):
            placeholders.append({
                'placeholder_background_image_url': placeholder_image_urls[i % len(placeholder_image_urls)],
                'show_for_large': True
            })

        for i in range(get_number_of_placeholders(minimum_number_of_rows,
                                                  number_of_speakers_in_medium_resolution,
                                                  number_of_speakers)):
            placeholders[i]['show_for_medium'] = True

        for i in range(get_number_of_placeholders(minimum_number_of_rows,
                                                  number_of_speakers_in_small_resolution,
                                                  number_of_speakers)):
            placeholders[i]['show_for_small'] = True

        return placeholders


    def get_number_of_placeholders(minimum_number_of_rows, number_of_cells_in_row, number_of_actual_cells):
        number_of_rows = max(minimum_number_of_rows, int(ceil(number_of_actual_cells / number_of_cells_in_row)))
        return number_of_rows * number_of_cells_in_row - number_of_actual_cells


    variables.update({
        'page_title': 'Warsjawa: 100% workshop formula',
        'page_description': 'Conference for developers, by developers. Unique 100% workshop formula. “Learn by doing” approach. Proudly host workshops related to all aspects of software development: designing, developing, testing, maintaining etc. Initially oriented around Java and JVM programming languages. Now open to other programming languages like Scala, Groovy, Python, mobile development for Android, iOS and others.',
        'speakers': speakers,
        'speaker_placeholders': cell_placeholders(speakers),
        'sponsors': sponsors,
        'sponsor_placeholders': cell_placeholders(sponsors)
    })

