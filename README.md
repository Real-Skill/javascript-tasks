# A test-driven JS assessment

This repo includes a set of tests that can be used to assess the skills of
a candidate for a JavaScript position, or to improve one's own skills.

## Isn't this a fork of Rebecca Murphey's [js-assessment](https://github.com/rmurphey/js-assessment)?
Sure it is. We just hate &lt;some technology she's chosen>, so as she suggested, we've forked away.
Rebecca, we love you, for your awesome job on original js-assessment. We've had hard time making this decision but we really hate your technology stack.

## I want to work on the tests; what do I do?
To use the tests, you will need to install Node -- you can do this via the
[download page](http://nodejs.org/#download) or using
[Homebrew](http://mxcl.github.com/homebrew/) if you are on a Mac.

Note that on Windows, there are some reports that you will need to restart
after installing Node - see #12.

You can clone or download this repo. Once you have done so, from the root
directory of the repo, run:

    npm install
    npm start

This will start karma test runner with PhantomJS. Your tests will be run whenever you modify the sources.

At first, all of the tests should be failing; your job is to
get the tests to pass. To do this, you'll need to refer to the tests in the
files in the `test/spec` directory, and edit the files in the `impl/` directory.
Once you update a test, check the console to see whether it worked.

As we're using Karma, you may choose different browser than PhantomJS, i.e. Chrome.
Simply edit `browsers` section in `test/karma.conf.js`.

## I want to contribute tests; what do I do?

Submit a pull request! The tests are currently loosely organized by topic, so
you should do your best to add tests to the appropriate file in `test/spec`, or
create a new file there if you don't see an appropriate one. If you do create
a new file, make sure to add a stub for the
solution to the corresponding file in `impl/`.

Any substantial contributions will be duly credited in the readme, as well as
of course in the git commit log.

## I hate \<some technology you've chosen\>

You must be joking! This stack is top-notch. But if it gets outdated over time. Just let us know or go back to
[Rebecca Murphey](https://github.com/rmurphey/js-assessment)

# License

Copyright &copy; 2012 Rebecca Murphey.

This work is licensed under the [Creative Commons Attribution-Share Alike 3.0](http://creativecommons.org/licenses/by-sa/3.0/)
license. You are free to share and remix the work, and to use it for commercial
purposes under the following conditions:

- *Attribution* — You must attribute the work in the manner specified by the
  author or licensor (but not in any way that suggests that they endorse you or
  your use of the work).
- *Share Alike* — If you alter, transform, or build upon this work, you may
  distribute the resulting work only under the same or similar license to this
  one.

Any of these conditions can be waived if you get permission from the copyright
holder.