$(document).ready(function () {
  // import view port library function
  jQuery.extend(verge);

  // smooth scrolling of viewport to target
  $('a[href^="#"]').click(function (event) {
    event.preventDefault();
    $('html,body').animate(
      {
        scrollTop: $(this.hash).offset().top - 50,
      },
      900
    );
  });

  $('#down').click(function () {
    $('html,body').animate(
      {
        scrollTop: $('#about').offset().top - 50,
      },
      900
    );
  });

  var currentTime = new Date();
  var year = currentTime.getFullYear();

  // data for the portfolio cards front and back
  var projectData = [
    {
      title: 'IAG Loyalty',
      text: '<strong>Communications Assistant</strong><br><strong>Date:</strong> Sep 2022 - Present <br><strong>Skills</strong><br>Creating copy and communications for External Brand partnerships, such as Uber and Pret a Manger<br>Content creation for internal and external use on various intranet channels<br>Organised team building and planning sessions',

      image: [
        'https://media.licdn.com/dms/image/C4D0BAQG6WcwqFn8ogA/company-logo_200_200/0/1635157210396?e=2147483647&v=beta&t=qHnZ9Xp7NvMFDgfVfGBYW0awIUzk6YM9QwBb1qfsUQc',
      ],
      site: [['IAGL Site', 'fa-link', 'https://www.iagloyalty.com/']],
    },
    {
      title: 'Hill and Knowlton Strategies',
      text: '<p>   </p> <strong>List Item:</strong> eg, eg, eg, eg<br><strong>List Item:</strong> eg, eg, eg, eg',
      image: [
        'https://media.twofour54.com/sites/5/2017/02/hill-knowlton-logo.jpg',
      ],
      site: [
        //['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/full/dojjre'],
        //['Live Site', 'fa-link', 'http://2am.ninja/quotes/']
      ],
    },
    {
      title: 'Daniel J. Edelman',
      text: '<p>   </p> <strong>List Item:</strong> eg, eg, eg, eg<br><strong>List Item:</strong> eg, eg, eg, eg',
      image: [
        'https://www.djeholdings.com/sites/g/files/aatuss516/files/styles/holding_logo_original/public/2023-02/logo.png?itok=uyJrJkN2',
      ],
      site: [
        //['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/full/dojjre'],
        //['Live Site', 'fa-link', 'http://2am.ninja/quotes/']
      ],
    },
  ];

  // add listener to all the cards for click flipping
  function addListener() {
    var cards = document.querySelectorAll('.card.effect_click');

    for (var i = 0; i < cards.length; i++) {
      clickListener(cards[i]);
    }

    function clickListener(card) {
      card.addEventListener('click', function () {
        this.classList.toggle('flipped');
      });
    }
  }

  // create, populate and show portfolio project cards
  function showProjectCards() {
    var html = '';

    projectData.forEach(function (project) {
      html += '<div class="col-sm-6 col-md-4">';
      html +=
        '<div class="card effect_click"><div class="card_front">';
      html +=
        '<figure><img class="img-responsive" src="' +
        project.image[0] +
        '">';
      html += '<figcaption class="project-title">';
      html += project.title;
      html += '</figcaption></figure></div>';

      html += '<div class="card_back"><figure>';
      html +=
        '<div class="project-title">' + project.title + '</div>';
      html += '<figcaption">';
      html += '<div class="project-body">' + project.text + '</div>';
      html +=
        '<div><a data-toggle="tooltip" title="' +
        project.site[0][0] +
        '" data-placement="top" href="' +
        project.site[0][2] +
        '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0"><i class="fa ' +
        project.site[0][1] +
        '" aria-hidden="true"></i></a>';

      if (typeof project.site[1] !== 'undefined') {
        html +=
          '<a data-toggle="tooltip" title="' +
          project.site[1][0] +
          '" data-placement="top" href="' +
          project.site[1][2] +
          '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk1"><i class="fa ' +
          project.site[1][1] +
          '" aria-hidden="true"></i></a>';
      }

      html += '</div></figcaption></figure></div>';
      html += '</div>';
      html += '</div>';
    });

    $('#theProjects').append(html);
    addListener();
  }

  showProjectCards();
  $('.copyright').append(
    '<span>© ' + year + ' Alara Chaudhery. All rights reserved</span>'
  );

  // turn on bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip();
});
