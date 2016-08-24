import { Component } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/map'

export class PortfolioComponent {

  constructor (http) {
    this.people = {
      kyle_stevenson: { name: 'Kyle Stevenson', profile: 'https://github.com/kylestev' },
      jacob_doiron: { name: 'Jacob Doiron', profile: 'https://github.com/jdoiron94' },
      eugine_cheung: { name: 'Eugene Cheung', profile: 'https://github.com/arkon' }
    }
    this.jobs = [
      {
        name: 'Freelance',
        title: 'Software Developer',
        color: '#75BE83',
        icon: '/images/sedlar.png',
        timeframe: '5/19/2014 - Current',
        tasks: [
          {
            link: 'https://github.com/kylestev/jvm.js',
            info: 'Created a bytecode analysis library for Java written in Node.js',
            contribs: [this.people.kyle_stevenson]
          },
          {
            link: 'https://github.com/disassemble-io/asm-framework-full',
            info: 'Created a framework for analyzing the control flow of a program using ASM'
          },
          {
            link: 'https://github.com/TSedlar/RSMacro',
            info: 'Created an automation tool for an MMO using various color analysis algorithms',
            contribs: [this.people.jacob_doiron]
          },
          {
            link: 'https://gist.github.com/TSedlar/e9a3abaf43f31fc00f6b',
            info: 'Reported security issues (same-origin policy) having to do with edhesive.com courseware'
          },
          {
            link: 'https://github.com/disassemble-io/kNN',
            info: 'Created an open source, minimal and quick Java implementation of a kNN (k-Nearest-Neighbors) algorithm'
          },
          {
            link: 'https://github.com/TSedlar/mal-scrobble',
            info: 'Created an open source chrome plugin for scrobbling watched TV shows',
            contribs: [this.people.eugine_cheung]
          },
          {
            link: 'https://github.com/disassemble-io/agent-callback',
            info: 'Created an open source Java agent for viewing method argument call order'
          },
          {
            linke: 'https://github.com/TSedlar/github-scraper',
            info: 'Created an NPM module used for scraping GitHub user information'
          }
        ]
      },
      {
        name: 'RS-Hacking',
        title: 'Community Administrator',
        color: '#103593',
        icon: '/images/rsh.png',
        timeframe: '1/13/2013 - Current',
        tasks: [
          'Help manage a community that re-engineers .jar/.dex files',
          'Created a standardized format for sharing files'
        ]
      },
      {
        name: 'Gold4Players LLC',
        title: 'Software Developer',
        color: '#424242',
        icon: '/images/g4p.png',
        timeframe: '5/13/2013 - 5/17/2014',
        tasks: [
          'Wrote Java source code for a public client-sided API used for MMO automation',
          'Re-engineered Java bytecode and mapped opcode usage for reflecting data at runtime',
          'Created a macro repository in PHP and managed information through MySQL and MySQL Workbench'
        ]
      },
      {
        name: 'Dequeue Ltd',
        title: 'Software Developer',
        color: '#FF8E75',
        icon: '/images/dq.png',
        timeframe: '1/13/2010 - 1/27/2013',
        tasks: [
          'Wrote multiple Java plugins used for game automation',
          'Published plugins to a central repository for public use',
          'Monetized and maintained plugins for long lengths of time'
        ]
      }
    ]
    http.get('/github.json')
      .map(res => res.json())
      .subscribe(res => {
        let array = []
        for (let x in res) {
          for (let y = 0; y < res[x].length; y++) {
            const forks = res[x][y].fork_count
            res[x][y].fork_label = (forks === 0 || forks > 1 ? 'Forks' : 'Fork')
            const contribs = res[x][y].contributor_count
            res[x][y].contributor_label = (contribs === 0 || contribs > 1 ? 'Contributors' : 'Contributor')
            const stars = res[x][y].stargazers_count
            res[x][y].star_label = (stars === 0 || stars > 1 ? 'Stars' : 'Star')
          }
          res[x].sort((a, b) => b.stargazers_count - a.stargazers_count)
          array.push({ name: x, repos: res[x] })
        }
        this.organizations = array
      })
  }

  ngAfterViewInit () {
    /* global $ Image */
    $(document).ready(function () {
      $('li').children('a').on('mouseenter mouseleave', function (e) {
        $(this).parent().find('*').toggleClass('hover-anim')
      })
      $('#pre-status').fadeOut()
      $('#preloader').delay(350).fadeOut('slow')
      let avatar = '/images/avatar.jpg'
      let cover = '/images/phx-night-pano.jpg'
      // preload images
      new Image().src = avatar
      new Image().src = cover
      $('#avatar').attr('src', avatar)
      $('#cover').each(function () {
        $(this).css({
          'background-image': 'url("' + cover + '")',
          'background-repeat': 'no-repeat',
          'background-position': 'center'
        })
      })
    })
  }

  static get parameters () {
    return [[Http]]
  }

  static get annotations () {
    return [
      new Component({
        selector: 'app',
        styleUrls: ['styles/portfolio.css', 'styles/timeline.css'],
        templateUrl: 'templates/portfolio.html'
      })
    ]
  }
}
