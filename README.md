# VodQA Chennai

## Quick Start & Auto Deployment

From the GitHub page, navigate to `content` folder and create/edit a `yyyy-mm.html` file. See [content/example.html](content/example.html) for possible parameters. If you save, the changes are automatically deployed at [Snap-CI](https://snap-ci.com/TWChennai/VODQA-Chennai/branch/master).

[![Build Status](https://snap-ci.com/TWChennai/VODQA-Chennai/branch/master/build_image)](https://snap-ci.com/TWChennai/VODQA-Chennai/branch/master)

**NOTE:** GitHub's "create/edit file" buttons are very small and hard to find, but they are there (as long as you're logged in and have push rights to this repo).

## Manual Development

We're using [nanoc](//nanoc.ws) for static site generation. Jekyll/Octopress are hard-coded for blogging, while Nanoc is much simpler, doesn't take any assumptions and allows to build whatever type of content (not just blogs).

* Make sure you have RVM(Ruby enVironment Manager) installed (
    * If you are doing for very first time, install brew referring to https://brew.sh/ and then 
        - brew install gpg (To enable some security stuff)
        -`\curl -sSL https://get.rvm.io | bash -s stable --ruby`
    If you again get something like - `gpg: Can't check signature: No public key`, execute below command
        - Execute `gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB` (Referring from https://rvm.io/rvm/install - As a first step install GPG keys used to verify installation package section)
        - Install again `\curl -sSL https://get.rvm.io | bash -s stable --ruby`
        - Give  `rvm list to` to make sure rvm is successfully installed

)
* Clone this repo
* Run `bundle install`
* Run `nanoc` to compile the website
* Run `nanoc view` to start a server and browse to `localhost:3000`

For ease, there is a Guardfile. You can run `bundle exec guard`, it will keep watching for changes and re-compile the site whenever any file is changed.

# Folder Structure

* `assets` - contains all assets
* `assets/app.sass` - contains the main stylesheet
* `assets/img/speakers` - contains speaker images
* `content` - content for each geek night
* `layouts` - layouts for default and archive versions
* `Rules` - routing rules
* `gh-pages` - folder containing the generated site

# Front-End Development

* Pure HTML/CSS/Javascript website. No JQuery.
* Used [HTML5 Boilerplate](//html5boilerplate.com) to generate the skeleton.
* Used [colourlovers.com](//colourlovers.com) for the color swatches.
* Using [SASS](//sass-lang.com) and [Foundation](//foundation.zurb.com) for all the Styling.
* Icon fonts were generated and downloaded from [Fontello](//fontello.com). Only icons from the *Modern Pictogram* set were used for consistency.

Site location : http://twchennai.github.io/VODQA-Chennai/
