codenarc-maven-plugin
=====================

Maven Mojo Plug-In to generate reports based on the CodeNarc Analyzer

The documentation for the **CodeNarc Maven Plugin** is here: http://mojo.codehaus.org/codenarc-maven-plugin/

OZP Patch Info
==============

Patched version of codenarc-maven-plugin cloned from here: https://github.com/gleclaire/codenarc-maven-plugin.git

Patch fixes error in Windows where if the pom's name has spaces the plugin fails to generate the report. The only patched code file (the pom.xml is patched to fit in with the OZP build) is in src/main/groovy/org/codehaus/mojo/codenarc/CodeNarcMojo.groovy on line 357.

The patch's change will be submitted to the project, if implemented, this patched version can be deleted and all references in the poms using the codenarc-maven-plugin-patch may point to the codenarc-maven-plugin release that contains the Windows fix.