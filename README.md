SamplePresentation
==================

Reference sample for a presentation tool that can show live coded Knockout samples.  Live here: <http://rniemeyer.github.com/SamplePresentation/>

This is a heavily stripped down version of the Knockout app that I created for [this presentation](http://www.knockmeout.net/2012/08/thatconference-2012-session.html). This is not intended to be a library to create presentations.  It is just a sample that you could modify to suit your purposes.

Some notes about using the sample:

* it needs to be hosted by a web server, as it uses require.js to make XHR calls that won't work with local files (I use Node's [http-server](http://blog.nodejitsu.com/http-server) for a quick server in any directory)
* navigation between sections uses `Alt+Right` and `Alt+Left`, as just using the arrows or spacebar is problematic when using the code editor.
* within a section `Alt+Down` and `Alt+Up` can move between the states for that section
* within the code editor `Alt+?` pulls in the actual code. You can choose whether you want the code to load immediately or only when you press `Alt+?`.  The idea is that in some cases you will be building up a sample and not need to pull it in, while in other cases you might want to speed things along by having the code update automatically. Additionally if you run into problems, you can always pull in the clean code.
* in the code editor, you can hover over the "Results" header to see a tooltip of any JS errors.

Some notes on the structure:

* in app.js you define your Sections. Based on the key of the section, it will load a js file from *js/modules/yourkey.js* and a template from *templates/yourkey.html*.  Additionally, you can override the template. For example, all of the code sample sections can use the same template.
* look at *js/modules/one.js* and *js/modules/two.js* for how to specify the code samples, their states, and the various options that you can pass to them.
* the code samples are intended to be flexible. You can choose to have the code load automatically for you with each state or you can move to the next state and type in the code yourself (with the option of using Alt+? in the editor to pull it in at anytime).

*License:* **MIT** <http://www.opensource.org/licenses/mit-license.php>