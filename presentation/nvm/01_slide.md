!SLIDE 

# Installation und Tools #


!SLIDE commandline
# Node installieren #

    $ git clone git://github.com/creationix/nvm.git ~/.nvm
    Cloning into /home/yves/.nvm...
    remote: Counting objects: 232, done.
    remote: Compressing objects: 100% (132/132), done.
    remote: Total 232 (delta 124), reused 195 (delta 92)
    Receiving objects: 100% (232/232), 31.26 KiB, done.
    Resolving deltas: 100% (124/124), done.
    $ source .nvm/nvm.sh
    $ nvm install v0.5.7
    [[ gaaaaaanz viel compiler output ]]
    $ nvm alias default v0.5.7
    default -> latest (-> v0.5.7)
    ! WARNING: Moving target. Aliases to implicit ...
    $ echo "source ~/.nvm/nvm.sh" >> ~/.bashrc
    $ node
    >

!SLIDE

# Node benutzen (REPL) #

    $ node
    > 1 + 1
    2
    > var a = "aString"
    > console.log(a)
    aString

($ Terminal mit bash/zsh-Prompt)

!SLIDE

# Node benutzen (Programme) #

1. Programmdatei mit Editor erstellen:

        var string = "aString";
        console.log("Ein Beispiel String: " + string);

2. Aus der Bash heraus ausführen:

        $ node programm.js
        Ein Beispiel String: aString

(einfacher Editor: gedit | awesome Editoren in der Konsole: vim/emacs)

!SLIDE

#Grundlegende Werkzeuge#

!SLIDE bullets
#nvm#

* node version manager
* mehre node versionen parallel ohne adminrecht installieren
* web:[github.com/creatio nix/nvm](https://github.com/creationix/nvm)
!SLIDE bullets

#npm#

* node package manager
* verwaltet Abhängigkeiten
* web:[github.com/isaacs/npm](https://github.com/isaacs/npm)

!SLIDE commandline

#Paket installieren#

    $npm install log4js
    log4js@0.3.9 ./node_modules/log4js
    $ls
    node_modules
    $ node
    > var log = require('log4js');

