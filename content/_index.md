---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  # - block: features
  #   content:
  #     title: Skills
  #     items:
  #       - name: Python
  #         description: 80%
  #         icon: python
  #         icon_pack: fab
  #       - name: Javascript
  #         description: 90%
  #         icon: node-js
  #         icon_pack: fab       
  #       - name: Docker
  #         description: 80%
  #         icon: docker
  #         icon_pack: fab
  #       - name: Linux
  #         description: 90%
  #         icon: linux
  #         icon_pack: fab
  #   design:
  #     columns: '4'
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006     
      items:
        - title: Ph.D. - Part-time Visiting Lecturer
          company: The Hong Kong Polytechnic University, School of Design
          company_url: 'https://www.sd.polyu.edu.hk/en/'
          company_logo: 'polyu'
          location: Hong Kong
          date_start: 2019-09-01
          date_end: ''
          description: |2-
            *	Published scholarly papers on the topic of generative AI, resulting in invitations to present at international conferences.
            * Conducted quantitative and qualitative research by delivering workshops to students and professionals and evaluating their use of generative AI tools ([Read more...](/project/mediabots)).
            * Developed a real-time TensorRT accelerated img2img pipeline using webrtc, StableDiffusion and docker ([Read more...](/project/videosd)).
            * Lectured in MSc elective courses Sound Design, Interactive Multimedia Environment and Transformative Technologies.
            * Coordinated and facilitated group projects, teaching students how to work together and communicate effectively.

        - title: Project Associate
          company: The Hong Kong Polytechnic University, School of Design
          company_url: 'https://www.sd.polyu.edu.hk/en/'
          company_logo: 'polyu'
          location: Hong Kong
          date_start: 2017-09-01
          date_end: 2019-08-01
          description: |2-
            *	Collaborated with school staff to develop and implement extracurricular activities and workshops to support student learning.
            *	Developed a 32-speaker ambisonics system capable of real-time spatialization of audio content ([Read more...](/project/3dsnd/)).
            * Developed and taught specialized lectures in the field of computer science and maker education, resulting in higher student engagement and improved learning outcomes.
            * Lectured in MSc elective courses Sound Design, Interactive Multimedia Environment and Transformative Technologies.
        - title: Robot Operator
          company: Hanson Robotics
          company_url: 'https://www.hansonrobotics.com/'
          company_logo: 'hansonrobotics'
          location: Hong Kong
          date_start: 2017-12-01
          date_end: 2019-06-01
          description: |2-
            *	Responsible for overseeing performance scripting, transportation, setup, and operation of Sophia, the world-renowned humanoid robot ([Read more...](/project/working-with-sophia/)).
            * Gained in depth knowledge of [ROS](https://ros.org) (Robot operative system), and its servo motor, computer vision and chat-bot components.
            *	Worked on high-profile events, including a commercial shoot with Cristiano Ronaldo.
            *	Showcased Sophia's capabilities at the World Investment Forum 2018 at UN in Geneva.
        
        - title: IT Manager
          company: Ambulatorio San Massimo
          company_url: 'https://ambulatoriosanmassimo.it'
          company_logo: 'asm'
          location: Padova, Italy - Remote
          date_start: 2018-09-01
          date_end: 2022-12-31
          description: |2-
            * Lead the design and implementation of the network architecture and RemoteApp services (database, VoIP, appointment booking API) of a medical clinic with two sites.
            * Automated backup and routine system administration tasks using docker to reduce manual effort.
            * Streamlined and automated system administration tasks, resulting in a 60% reduction in operational costs.

        - title: Founder CEO and Lead Programmer
          company: Hagao Studio
          company_url: ''
          company_logo: 'hagao'
          location: Hong Kong
          date_start: 2015-02-01
          date_end: 2016-05-01
          description: |2-
            *	Created Featherman, an innovative game aimed at raising awareness about migratory birds' environmental issues ([Read more...](/project/featherman)).
            * Oversaw all aspects of mobile game development and management as team leader.
            * Partnered with WWF Mai Po Reservoir.

        - title: Founder CEO and Lead Programmer
          company: 83bits
          company_url: ''
          company_logo: '83'
          location: Hong Kong
          date_start: 2011-09-01
          date_end: 2014-09-01
          description: |2-
            * Successfully established and managed the primary product, AllIn1Social, a web application for managing content and advertising campaigns on Facebook pages.
            * Developed front-end and back-end development using Ruby on Rails.
            *	Worked with Facebook Advertising API.
        - title: Founder CEO
          company: Shi Cheng Trading
          company_logo: 'shicheng'
          location: Hong Kong
          date_start: 2009-12-01
          date_end: ''
          description: |2-
            * Established and led Shi Cheng Trading Limited, a successful import company specializing in innovative gel material and foam pillows and mattresses for the Hong Kong and China markets.
            * Managed the end-to-end operations of the company, including procurement, sales, logistics, and customer service, to ensure smooth and efficient business processes.
            * Oversaw the company's Enterprise Resource Planning (ERP) system, utilizing OpenERP (now Odoo) and currently ERPNext, to maintain accurate records of sales, purchases, stock, and accounting.

        - title: Social Media Specialist
          company: 77Agency
          company_url: 'https://www.77agency.com/'
          company_logo: '77'
          location: Milan
          date_start: 2008-09-01
          date_end: 2011-08-01
          description: |2-
            * Responsible for developing and deploying Facebook applications for marketing purposes.
            *	Worked with influential Italian companies including Lavazza, Repubblica, RCA, CondèNast, and Mondadori.

        - title: Teaching Assistant
          company: SDA Bocconi
          company_url: ''
          company_logo: 'bocconi'
          location: Milan
          date_start: 2007-02-01
          date_end: 2008-06-01
          description: |2-
            * Teaching Assistant at SDA Bocconi, working for the TeD+ lab focused on e-learning platforms and remote teaching.
            * Actively participated in teaching the course 8340 "Organizational Dynamics and Technical Change" of EMIT Master of Science.
            * Honed skills as an educator through hands-on involvement in teaching activities and providing support to students.

    design:
      columns: '2'
  # - block: accomplishments
  #   content:
  #     # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
  #     title: 'Accomplish&shy;ments'
  #     subtitle:
  #     # Date format: https://wowchemy.com/docs/customization/#date-format
  #     date_format: Jan 2006
  #     # Accomplishments.
  #     #   Add/remove as many `item` blocks below as you like.
  #     #   `title`, `organization`, and `date_start` are the required parameters.
  #     #   Leave other parameters empty if not required.
  #     #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
  #     items:
  #       - certificate_url: https://www.coursera.org
  #         date_end: ''
  #         date_start: '2021-01-25'
  #         description: ''
  #         organization: Coursera
  #         organization_url: https://www.coursera.org
  #         title: Neural Networks and Deep Learning
  #         url: ''
  #       - certificate_url: https://www.edx.org
  #         date_end: ''
  #         date_start: '2021-01-01'
  #         description: Formulated informed blockchain models, hypotheses, and use cases.
  #         organization: edX
  #         organization_url: https://www.edx.org
  #         title: Blockchain Fundamentals
  #         url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals
  #       - certificate_url: https://www.datacamp.com
  #         date_end: '2020-12-21'
  #         date_start: '2020-07-01'
  #         description: ''
  #         organization: DataCamp
  #         organization_url: https://www.datacamp.com
  #         title: 'Object-Oriented Programming in R'
  #         url: ''
  #   design:
  #     columns: '2'
  # - block: collection
  #   id: posts
  #   content:
  #     title: Recent Posts
  #     subtitle: ''
  #     text: ''
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       folders:
  #         - post
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
    # design:
    #   # Choose a layout view
    #   view: compact
    #   columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      # default_button_index: 0
      # # Filter toolbar (optional).
      # # Add or remove as many filters (`filter_button` instances) as you like.
      # # To show all items, set `tag` to "*".
      # # To filter by a specific tag, set `tag` to an existing tag name.
      # # To remove the toolbar, delete the entire `filter_button` block.
      # buttons:
      #   - name: All
      #     tag: '*'
      #   - name: Deep Learning
      #     tag: Deep Learning
      #   - name: Other
      #     tag: Demo
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  # - block: markdown
  #   content:
  #     title: Gallery
  #     subtitle: ''
  #     text: |-
  #       {{< gallery album="demo" >}}
  #   design:
  #     columns: '1'
  - block: collection
    id: featured
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    content:
      title: Recent Publications
      # text: |-
      #   {{% callout note %}}
      #   Quickly discover relevant content by [filtering publications](./publication/).
      #   {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation
  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - event
  #   design:
  #     columns: '2'
  #     view: compact
  # - block: tag_cloud
  #   content:
  #     title: Popular Topics
  #   design:
  #     columns: '2'
  - block: contact
    id: contact
    content:
      form:
        provider: netlify
        netlify:
          captcha: true
      title: Contact
      subtitle:
      text: |-
        If you have any questions or would like to collaborate, please feel free to get in touch.
        
      # Contact (add or remove contact options as necessary)


      # contact_links:
      #   - icon: twitter
      #     icon_pack: fab
      #     name: DM Me
      #     link: 'https://twitter.com/venetanji'
      #   - icon: linkedin 
      #     icon_pack: fab
      #     name: Connect
      #     link: 'https://www.linkedin.com/in/giovannilion/'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      columns: '2'
---
