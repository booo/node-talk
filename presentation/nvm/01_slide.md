!SLIDE 

# Installation und Tools #

!SLIDE bullets
# nvm #

* node version manager
* mehre node versionen parallel ohne adminrecht installieren
* web:[github.com/creatio nix/nvm](https://github.com/creationix/nvm)

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
    $ nvm sync
    syncing with nodejs.org... done.
    $ nvm install latest
    [[ gaaaaaanz viel compiler output ]]
    $ nvm alias default latest
    default -> latest (-> v0.5.7)
    ! WARNING: Moving target. Aliases to implicit ...
    $ echo "source ~/.nvm/nvm.sh" >> ~/.bashrc
    $ node
    > 

!SLIDE 

# Node benutzen #

* via REPL von der Kommandozeile (interaktiv)


    $ node
    > 1 + 1
    2


!SLIDE 

* ausführen von Programmdateien
    * zu erst Programm mit Editor (z.B. gedit oder vim) schreiben
    * dann aus der Kommandozeile ausführen


    $ node programm.js
    Hier stehen sache die mit console.log geschrieben wurden


!SLIDE bullets

#npm#

* node package manager
* verwaltet Abhängigkeiten
* web:[github.com/isaacs/npm](https://github.com/isaacs/npm)

!SLIDE commandline

# Ein Paket installieren#

    $npm install log4js
    log4js@0.3.9 ./node_modules/log4js
    $ls
    node_modules
    $ node
    > var log = require('log4js');

