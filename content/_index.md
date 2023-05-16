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
  - block: features
    content:
      title: Skills
      items:
        - name: Python
          description: 80%
          icon: python
          icon_pack: fab
        - name: Javascript
          description: 90%
          icon: node-js
          icon_pack: fab       
        - name: Docker
          description: 80%
          icon: docker
          icon_pack: fab
        - name: Linux
          description: 90%
          icon: linux
          icon_pack: fab
    design:
      columns: '4'
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006     
      items:
        - title: Part-time Visiting Lecturer
          company: The Hong Kong Polytechnic University, School of Design
          company_url: 'https://www.sd.polyu.edu.hk/en/'
          company_logo: 'polyu'
          location: Hong Kong
          date_start: 2022-09-01
          date_end: ''
          description: |2-
              As a Part-time Visiting Lecturer at The Hong Kong Polytechnic University's School of Design, I am responsible for teaching and delivering lectures in two elective master courses: Sound Design (SD5933) and Transformative Technologies (SD5969). Additionally, I have been invited to deliver a workshop on AI & Imaging to students in the MscMET master program. By providing engaging lectures and hands-on workshops, I hope to inspire students to think creatively and critically about the subject matter.

        - title: Project Associate
          company: The Hong Kong Polytechnic University, School of Design
          company_url: 'https://www.sd.polyu.edu.hk/en/'
          company_logo: 'polyu'
          location: Hong Kong
          date_start: 2017-09-01
          date_end: 2019-08-01
          description: |2-
              As a Project Associate at The Hong Kong Polytechnic University's School of Design, I was responsible for coordinating and managing various aspects of the MScMET program. This included organizing orientation events, cohort activities, and workshops to ensure that the program ran smoothly. Additionally, I had the opportunity to teach two courses: Sound Design (SD5933) and Interactive Multimedia Environment (SD5965). In these classes, I shared my knowledge and expertise with students to help them develop their skills in these fields.

        - title: Robot Operator
          company: Hanson Robotics
          company_url: 'https://www.hansonrobotics.com/'
          company_logo: 'hansonrobotics'
          location: Hong Kong
          date_start: 2017-12-01
          date_end: 2019-06-01
          description: |2-
              As a Robot Operator for Hanson Robotics from December 2017 to June 2019, I was responsible for overseeing the performance scripting, transportation, setup, and operation of Sophia, the world-renowned humanoid robot. In this role, I worked on several high-profile events such as a commercial shooting with Cristiano Ronaldo. Additionally, I had the opportunity to showcase Sophia's capabilities at the World Investment Forum 2018 at UN in Geneva.

        - title: Founder CEO and Lead Programmer
          company: Hagao Studio
          company_url: ''
          company_logo: 'hagao'
          location: Hong Kong
          date_start: 2015-02-01
          date_end: 2016-05-01
          description: |2-
              As the CEO and Lead Programmer at Hagao Studio, I played a pivotal role in overseeing all aspects of game development and management. Our team created Featherman, an innovative game that aimed to raise awareness about migratory birds' environmental issues by partnering with WWF Mai Po Reservoir.

        - title: Founder CEO and Lead Programmer
          company: 83bits
          company_url: ''
          company_logo: '83'
          location: Hong Kong
          date_start: 2011-09-01
          date_end: 2014-09-01
          description: |2-
               As the founder of 83bits, a web app development company, I have successfully established and managed the primary product AllIn1Social. This innovative platform serves as a comprehensive solution for managing content being published on Facebook pages along with their advertising campaigns.

        - title: Social Media Specialist
          company: 77Agency
          company_url: 'https://www.77agency.com/'
          company_logo: '77'
          location: Milan
          date_start: 2008-09-01
          date_end: 2011-08-01
          description: |2-
              As a Social Media Specialist at 77Agency, I was responsible for developing and deploying Facebook applications for marketing purposes for some of the most influential Italian companies like Lavazza, Repubblica, RCA, CondèNast, and Mondadori.

        - title: Teaching Assistant
          company: SDA Bocconi
          company_url: ''
          company_logo: 'bocconi'
          location: Milan
          date_start: 2007-02-01
          date_end: 2008-06-01
          description: |2-
              As a Teaching Assistant at SDA Bocconi, I worked for the TeD+ lab which was dedicated to developing e-learning platforms and teaching over distance. During my time there, I had the opportunity to actively participate in the teaching of the course 8340 “Organizational Dynamics and Technical Change” of EMIT Master of Science. This experience allowed me to hone my skills as an educator by working closely with students and professors alike.
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
